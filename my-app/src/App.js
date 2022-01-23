import './App.scss';
import './Message.scss';
import Message from './Message';
function App(props) {
    return (
        <div className="App">
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{ top: props.topPosition || '10px' }}>
                My first React App
                <h3>Hello, {props.name}</h3>
                <div className="Message">
                    <Message text={'Hello World!'} />
                </div>
            </header>
        </div >
    );
}
export default App;