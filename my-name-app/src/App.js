import { BrowserRouter as Router, Route } from "react-router-dom";
import Messages from './Components/Messages/Messages';
import InputForms from './Components/InputForms/InputForms';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import ChatMessages from "./Components/ChatMessages/ChatMasseges";
import Chats from "./Components/Chats/Chats";
import React, {useEffect, useState} from "react";
// import React, { Component} from 'react';
import './App.css';


function App() {

    const [messageList, setMessageList] = useState([{
        author: "Малкович",
        text: "Добро пожаловать в ресторан для людей с именем Малкович! С этой минуты все кого зовут не Малкович мы будем порицать и игнорировать!"
    }, {
        author: "Малкович",
        text: "писать в чат могут только люди с именем Малкович! 😆 "
    }]);

    useEffect(() => {
        if (messageList[messageList.length - 1].author !== "Малкович") {
            setTimeout(() => {
                setMessageList((prev) => [...prev, {author: "Малкович", text: "Вас зовут не Малкович! Вы не имеете права тут писать!"}])
            }, 2000);
        }
    }, [messageList]);

    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={Header}></Route>
                <Route exact path="/profile" component={Profile}></Route>
                <Route exact path="/chats">
                    <Chats />
                </Route>
                <Route exact path="/chats/:id">
                    <ChatMessages />
                </Route>
            </Router>
        </div>
    );

}

export default App;