import Messages from './Components/Messages/Messages';
import InputForm from './Components/InputForm/InputForm';
import Chats from "./Components/Chats/Chats";
import {useEffect, useState} from "react";
import './App.css';


function App() {

    const [messageList, setMessageList] = useState([{
        author: "Хизри",
        text: "Добро пожаловать!"
    }, {
        author: "Хизри",
        text: "Тест 1."
    }]);

    useEffect(() => {
        if (messageList[messageList.length - 1].author !== "Хизри") {
            setTimeout(() => {
                setMessageList((prev) => [...prev, {author: "Хизри", text: "остановитесь."}])
            }, 2000);
        }
    }, [messageList]);

    return (
        <div className="App">
            <Chats/>
            <>
                <Messages messageList={messageList}/>
                <InputForm setMessageList={setMessageList}/>
            </>
        </div>
    );
}

export default App;