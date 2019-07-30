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
                <div className='panels'>
                    <div className='left-panel'>
                        <img src={`assets/${this.state.todayData.type.toLowerCase()}.png`} />  
                        <span className="temperature">{this.state.todayData.temperature}</span>
                        <span className="degree">&deg;C</span>
                    </div>
                    <div className='right-panel'>
                        <ul className='air-stats'>
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