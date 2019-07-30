import React, {Component} from 'react';

import SelectCity from './SelectCity';
import TodayInfo from './TodayInfo';
import DaysList from './DaysList';


class Widget extends Component {
    state = {
        weatherData: false,
    }

    //getWeather connects with API and gets all the weather data

    getWeather = async (id, date) => {
        const api_call = await fetch(`http://dev-weather-api.azurewebsites.net/api/city/${id}/weather?date=${date}`);
        const data = await api_call.json();
        console.log(data)
        this.setState({
            weatherData: data
        })
    }

    //whichDayIsItToday checks the name of current day of week

    whichDayIsItToday = () => {
        let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let date = new Date;
        return week[date.getDay()-1]
    }

    render() {
        return (
            <div className='widget'>
                <SelectCity getCities={this.getCities} getWeather={this.getWeather}/>
                {this.state.weatherData &&
                    <>
                        <TodayInfo whichDayIsItToday={this.whichDayIsItToday} weatherData={this.state.weatherData[0]}/>
                        <DaysList whichDayIsItToday={this.whichDayIsItToday} weatherData={this.state.weatherData}/>
                    </>
                }
            </div>
        );
    }
}

export default Widget;