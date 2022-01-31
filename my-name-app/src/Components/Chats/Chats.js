import {List, ListItem} from "@material-ui/core";
import React, {useState} from "react";
import {Link} from "react-router-dom";

function Chats() {
    const [chats, setChats] = useState([
        {id: 1, name: "Малкович"},
        {id: 2, name: "Test"},
    ]);

    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 300,
            }}
        >
            {chats
                ? chats.map((el) => (
                    <ListItem
                        sx={{
                            mb: "5px",
                            bgcolor: "#ffe8a6",
                            fontWeight: "bold",
                            border: "1px solid black",
                        }}
                        key={el.id}
                    >
                        <Link to={`/chats/${el.id}`}>{el.name}</Link>
                    </ListItem>
                ))
                : null}
        </List>
    );
}

export default Chats;