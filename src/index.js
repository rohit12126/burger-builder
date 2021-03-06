import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task from './Task'; 
import User from './User/Container'
import * as serviceWorker from './serviceWorker';
import BurgerBuilder from './BurgerBuilder/containers/BurgerBuilder';

ReactDOM.render(<BurgerBuilder />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
