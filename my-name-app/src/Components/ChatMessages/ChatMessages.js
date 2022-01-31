import { useParams } from "react-router-dom";
import Messeges from "../Messages/Messages";
import InputForm from "../InputForms/InputForms";

function ChatMessages() {
    const { id } = useParams();
    return (
        <>
            <p>chat id {id}</p>
            <Messeges />
            <InputForm />
        </>
    );
}

export default ChatMessages;