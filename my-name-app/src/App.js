import Messages from './Components/Messages/Messages';
import InputForms from './Components/InputForms/InputForms';
import Chats from "./Components/Chats/Chats";
import {useEffect, useState} from "react";
import './App.css';

function App() {

    const [messageList, setMessageList] = useState([{
        author: "Хизри",
        text: "WELCOME"
    }, {
        author: "Хизри",
        text: "Добро пожаловать в чат, ведите себя достойно!"
    }]);

    useEffect(() => {
        if (messageList[messageList.length - 1].author !== "Хизри") {
            setTimeout(() => {
                setMessageList((prev) => [...prev, {author: "Хизри", text: "незаконное вторжение! Я не звал других участников!"}])
            }, 2000);
        }
    }, [messageList]);

    return (
        <div className="App">
            <Chats/>
            <>
                <Messages messageList={messageList}/>
                <InputForms setMessageList={setMessageList}/>
            </>
        </div>
    );
}

export default App;