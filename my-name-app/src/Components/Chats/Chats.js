import {List, ListItem} from "@material-ui/core";
import {useState} from "react";

function Chats() {

    const [chats, setChats] = useState([{id: 1, name: ""}]);
    // const [chats, setChats] = useState([{id: 1, name: "Чат Джона Малковича"}]);

     return (
         <List sx={{width: '100%', maxWidth: 300, bgcolor: "#50bdcc", fontWeight: "bold"}}>
             {chats ? chats.map((el) => <ListItem key={el.id}>{el.name}</ListItem>) : null}
         </List>
     );
}

export default Chats;
