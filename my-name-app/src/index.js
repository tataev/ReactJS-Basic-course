import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import React,{useState, memo, useEffect, useRef, useState} from "react";

ReactDOM.render(
    <BrowserRouter>
        <App/>

    </BrowserRouter>,
    document.getElementById('root')
);