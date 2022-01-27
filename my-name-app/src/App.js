import Messages from './Components/Messages/Messages';
import InputForms from './Components/InputForms/InputForms';
import Chats from "./Components/Chats/Chats";
import {useEffect, useState} from "react";
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
            <Chats/>
            <>
                <Messages messageList={messageList}/>
                <InputForms setMessageList={setMessageList}/>
            </>
        </div>
    );
}

export default App;