import React, { Component } from 'react';
class TodayInfo extends Component {
    state = {
        todayData: false,
        formattedDate: false
    }

    componentWillMount() {
        console.log(this.props.weatherData)
        this.setState({
            todayData: this.props.weatherData,
            formattedDate: this.formattedDate()
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todayData: nextProps.weatherData
        })
    }

    //formattedDate formats the date to desired format

    formattedDate = () => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today  = new Date();
        return today.toLocaleDateString("en-US", options);
    }

    //separateWeatherTypeString takes weather type string from API data and if there are multiple words - it separates them

    separateWeatherTypeString = () => this.state.todayData.type.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");

    render() {
        
        return (
            <div className="today-info">
                <h3>{this.state.formattedDate}</h3>
                <h3>{this.separateWeatherTypeString()}</h3>
                <div className='today-info__panels'>
                    <div className='today-info__panels--left'>
                        <img src={`assets/${this.state.todayData.type.toLowerCase()}.png`} />  
                        <span className="today-info__temperature">{this.state.todayData.temperature}</span>
                        <span className="today-info__degree">&deg;C</span>
                    </div>
                    <div className='today-info__panels--right'>
                        <ul className='today-info__air-stats'>
                            <li>Precipitation: {this.state.todayData.precipitation}%</li>
                            <li>Humidity: {this.state.todayData.humidity}%</li>
                            <li>Wind: {this.state.todayData.windInfo.speed} mph {this.state.todayData.windInfo.direction}</li>
                            <li>Pollen Count: {this.state.todayData.pollenCount}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodayInfo;