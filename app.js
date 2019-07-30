import React from "react";
import ReactDOM from 'react-dom';
import './style.css'

import Widget from './components/Widget';

const App = () => <Widget />;

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)