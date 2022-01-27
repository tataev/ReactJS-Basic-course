import { memo, useEffect, useRef, useState } from "react";
import { TextField, Button } from '@material-ui/core';
import "./module.InputForms.css";


function InputForms({ setMessageList }) {

    const inputRef = useRef();
    const [nameValue, setNameValue] = useState("");
    const [textValue, setTextValue] = useState("");

    useEffect(() => {
        inputRef.current?.focus();
    }, [textValue]);

    function submitHandler(e) {
        e.preventDefault();
        setMessageList((prev) => [...prev, { author: nameValue, text: textValue }]);
        setTextValue("");
    };

    return (
        <form className="form">
            <TextField id="filled-basic-small" label="Ваше имя" variant="filled" size="small" required className="form__name" type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></TextField>
            <TextField id="filled-basic-small" label="Сообщение" variant="filled" size="small" className="form__text" inputRef={inputRef} type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)}></TextField>
            <Button variant="contained" color="success" type="submit" className="form__submit" onClick={(e) => submitHandler(e)}>Отправить</Button>
        </form >
    );
};

export default memo(InputForms);