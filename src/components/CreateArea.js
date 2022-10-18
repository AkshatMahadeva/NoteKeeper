import React from "react";
import { useState } from "react";

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            }
        })
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
        return(<div>
            <form>
                <input type="text" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" cols="30" onChange={handleChange} rows="5" value={note.content} placeholder="Take a note..."></textarea>
                <button onClick={submitNote}>add</button>
            </form>
        </div>)
}

export default CreateArea;