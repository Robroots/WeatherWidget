import React, { Component } from 'react';

class MainInfo extends Component {
    state = {  }
    render() {
        return (
            <>
                <div className='top-data temp' style={{display: 'inline-block'}}>
                    25
                </div>
                <div className='top-data data' style={{display: 'inline-block'}}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default MainInfo;