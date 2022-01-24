import './module.messages.css';

function Messages({ messageList }) {
    return (
        <ul className="messages">
            {messageList ? messageList.map((el, index) => <li key={index} className="messages__item"><p className="messages__item-name">{el.author + " говорит:"}</p><p className="messages__item-text">{el.text}</p></li>) : null}
        </ul>
    )
};

export default Messages;