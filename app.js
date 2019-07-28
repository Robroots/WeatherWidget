import React from "react";
import ReactDOM from 'react-dom';

import Widget from './components/Widget';

const App = () => <Widget />;

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)