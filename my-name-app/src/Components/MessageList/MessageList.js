import {useEffect, useState} from 'react';
import './MessagesList.css';

export const MessagesList = ({author}) => {
    const messageInfo = {
        name: author
    };


    const botMessage = {
        id: Date.now(),
        text: 'Hello! I\'m bot.',
        name: 'Bot'
    };
    const botResponse = () => {
        setMessages([...messages, botMessage]);
    };

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({text: ''});

    const textHandler = (evt) => {
        setMessage(Object.assign({text: evt.target.value, id: Date.now()}, messageInfo));
    };

    useEffect(() => {
        if (messages[messages.length - 1]?.name === author) {
            setTimeout(() => {
                botResponse();
            }, 2000);
        }
    }, [messages]);

    const createMessage = (evt) => {
        evt.preventDefault();
        console.log(message);
        if (message.text) {
            setMessages(messages => [...messages, message]);
        }
    };

    return (
        <div className="App-container">
            <form action="#" className="form" onSubmit={createMessage}>
                <label htmlFor="formText" className="form__label">
                    <input type="text" id="formText" className="form__input" value={message.text}
                           onChange={textHandler}/>
                </label>
                <button type="submit" className="form__btn">Send</button>
            </form>
            <div className="messages-list">
                {messages.map(message => message.name ? <Message message={message} key={message.id}/> : null)}
            </div>
        </div>
    );
};

const Message = ({message}) => {
    const date = new Date();
    return (
        <div className="message">
            <span>{message.id}</span>
            <p className="message__text">{message.text}</p>
            <div className="message__inner">
                <span className="message__date">{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</span>
                <blockquote className="message__author">{message.name}</blockquote>
            </div>
        </div>
    );
};