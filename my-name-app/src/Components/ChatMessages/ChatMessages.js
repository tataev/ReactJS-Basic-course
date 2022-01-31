import { useParams } from "react-router-dom";
import Messages from "../Messages/Messages";
import InputForm from "../InputForms/InputForms";

function ChatMessages() {
    const { id } = useParams();
    return (
        <>
            <p>chat id {id}</p>
            <Messages />
            <InputForm />
        </>
    );
}

export default ChatMessages;