import { useState } from "react";

const EditText = () => {

    const [textEdit, editText] = useState("")


    return (
        <>
            <input id="edit-input" type="text" name="editText" placeholder="New text" />
            <button onClick={ () => editText() } >Confirm</button>
        </>
    )
}