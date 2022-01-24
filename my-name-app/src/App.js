import Messages from './Components/Messages/Messages';
import InputForm from './Components/InputForm/InputForm';
import Chats from "./Components/Chats/Chats";
import {useEffect, useState} from "react";
import './App.css';


function App() {

    const [messageList, setMessageList] = useState([{
        author: "ГЛаДОС",
        text: "Добро пожаловать в компьютеризированный экспериментальный центр при лаборатории исследования природы ReactJS!"
    }, {
        author: "ГЛаДОС",
        text: "Перед началом тестирования хотим вам напомнить, что хотя основным принципом экспериментального центра является обучение в игровой форме, мы не гарантируем отсутствие увечий и травм."
    }]);

    useEffect(() => {
        if (messageList[messageList.length - 1].author !== "ГЛаДОС") {
            setTimeout(() => {
                setMessageList((prev) => [...prev, {author: "ГЛаДОС", text: "Отступитесь, и вам принесут тортик."}])
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