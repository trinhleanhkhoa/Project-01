import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageHome from './PageHome/PageHome';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import myReducer from './Reducer/index'

const store=createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <PageHome />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
