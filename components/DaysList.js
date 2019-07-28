import React, { Component } from 'react';

class DaysList extends Component {
    state = {  }
    render() {
        return (
            <div className='days-list'>
                <ul>
                    <li>Day 1</li>
                    <li>Day 2</li>
                    <li>Day 3</li>
                    <li>Day 4</li>
                    <li>Day 5</li>
                </ul>
            </div>
        );
    }
}

export default DaysList;