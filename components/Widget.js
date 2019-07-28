import React, {Component} from 'react';

import Header from './Header';
import MainInfo from './MainInfo';
import DaysList from './DaysList';


class Widget extends Component {
    state = {  }
    render() {
        return (
            <div className='widget'>
                <Header />
                <MainInfo />
                <DaysList />
            </div>
        );
    }
}

export default Widget;