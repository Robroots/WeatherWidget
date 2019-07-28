import React, { Component } from 'react';

class Header extends Component {
    state = {
        cities: [{id:"1",name:"Katowice"},{id:"2",name:"London"},{id:"3",name:"Sosnowiec"}],
    }

    render() {
        let jsxCities = this.state.cities.map(city => 
            <option value={city.name} key={city.id}>
                {city.name}
            </option>
        );
        return (
            <>
                <select onClick={this.handleSelectClick}>
                    {jsxCities}
                </select>
                <h3>Day</h3>
                <h3>Weather generally</h3>
            </>
        );
    }
}

export default Header;