import React, { Component } from 'react';

class SelectCity extends Component {
    state = {
        cities: false,
        jsxCities: false,
        value: '-1'
    }

    //at the beggining of lifecycle component needs data of cities to fill select tag with options

    componentDidMount() {
        this.getCities();
    }

    //when component updates it needs to check if there are changes in cities and it fills select tag with options

    componentDidUpdate(prevProps,prevState) {
        if(prevState.cities !== this.state.cities){
            let jsxCities = this.state.cities.map((city, i) => 
                <option value={i} id={city.id} key={city.id}>
                    {city.name}
                </option>
            );
            this.setState({
                jsxCities: jsxCities
            })
        }
    }

    //formatDateForApiCall formats the date to desired format for API call

    formatDateForApiCall = () => {
        let d = new Date;
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate();
        let year = d.getFullYear();

        if (month.length < 2){
            month = '0' + month;
        }
        if (day.length < 2){
            day = '0' + day;
        } 

        return [year, month, day].join('-');
    }

    //handleChange handles user decision about city from dropdown, and gets data for that city using getWeather func and passes city ID and desired date format for API from above function

    handleChange = (e) => {
        let index = e.target.selectedIndex;
        let optionId = e.target.childNodes[index].id;
        let value = e.target.value
        if(optionId){
            this.props.getWeather(optionId,this.formatDateForApiCall());
        }
        this.setState({
            value : value
        })
    }

    //getCities connects with API and gets list of cities

    getCities = async () => {
        const api_call = await fetch('http://dev-weather-api.azurewebsites.net/api/city');
        const data = await api_call.json();
        this.setState({
            cities: data
        })
    }

    render() {
        return (
            <div className="select-city-container">
                <select className="select-city-container__select" value={this.state.value} onChange={this.handleChange}>
                    <option value='-1' disabled>Select a city</option>
                    {this.state.jsxCities && this.state.jsxCities}
                </select>
            </div>
        );
    }
}

export default SelectCity;