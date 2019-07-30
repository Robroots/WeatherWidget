import React, { Component } from 'react';

class DaysList extends Component {
    state = {
        weatherData: false
    }

    componentWillMount() {
        this.setState({
            weatherData: this.props.weatherData
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            weatherData: nextProps.weatherData
        })
    }

    //checkDay checks what is the current day with whichDayIsItToday() and calculates what day should be displayed next

    checkDays = (i) => {
        const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let todayWeekIndex = week.indexOf(this.props.whichDayIsItToday());
        let restFromWeek = (todayWeekIndex + i) % 6;
        if(i===0){
            return "Today";
        }
        else if(todayWeekIndex + i > 6){
            todayWeekIndex = 0;
            return week[todayWeekIndex + restFromWeek];
        }else{
            return week[todayWeekIndex + i];
        }
    }

    //generateDaysList generates jsx code for render method

    generateDaysList = () => {
        let generated = this.state.weatherData.map((day, i) => 
            <li className="days__list-item" key={i}>
                <span className="detail days__today-span">{this.checkDays(i)}</span>
                <div className="detail days__img-container">
                    <img className="image" alt={day.type} src={`assets/${day.type.toLowerCase()}.png`}/>
                </div>
                <span className="detail days__temp-span">{day.temperature}&deg;C</span>
                <span className="detail days__pollen-span">Pollen: {day.pollenCount}</span>
            </li>
        )
        return generated
    }

    render() {
        return (
            <div className='days'>
                <ul className="days__list">
                    {this.generateDaysList()}
                </ul>
            </div>
        );
    }
}

export default DaysList;