import Messages from './Components/Messages/Messages';
import InputForms from './Components/InputForms/InputForms';
import Chats from "./Components/Chats/Chats";
import {useEffect, useState} from "react";
import './App.css';

function App() {

    const [messageList, setMessageList] = useState([{
        author: "Хизри",
        text: "Добро пожаловать в мой ресторан для людей с именем Хизри!"
    }, {
        author: "Хизри",
        text: "заказывать могут гости с именем Хизри 8Р"
    }]);

    useEffect(() => {
        if (messageList[messageList.length - 1].author !== "Хизри") {
            setTimeout(() => {
                setMessageList((prev) => [...prev, {author: "Хизри", text: "Вас зовут не Хизри! Вы не имеете права заказывать в нашем ресторане! Жду дальнейших приказаний от Хизри!"}])
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