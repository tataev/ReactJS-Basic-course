import * as React from "react";
// import {useState, memo, useEffect, useRef} from "react";
import * as ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App/>

    </BrowserRouter>,
    document.getElementById('root')
);