import './App.scss';
import React, { useEffect, useState } from "react";
const AUTHOR = {
  me: 'me',
  bot: 'bot'
}
function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  }
  const handleSend = () => {
    setMessageList([...messageList, { text: value, author: AUTHOR.me }]);
    setValue('');
  }
  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
      setMessageList([...messageList, { text: 'сгенерированное сообщение', author: AUTHOR.bot }]);
    }
  }, [messageList])// componentDidUpdate
  return (
      <div>
        <div className="App">
          <div className='dashBoard'>
            {messageList.map((message,) => (
                <div className='message'>{message.text}<sup>{message.author}</sup></div>
            ))}
          </div>
          <div className='controlPanel'>
            <input onChange={handleChange} value={value} />
            <button onClick={handleSend}>Send</button>
          </div>

        </div>
      </div>
  );
}
export default App;