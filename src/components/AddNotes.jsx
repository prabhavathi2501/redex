import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from '../redux/cardSlice'


function AddNote() {

    const notesObj = useSelector(state => state.cardnote);

    let dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [addNote, setAddNote] = useState("Add a Note");
    const [saveButton, setSaveButton] = useState("Save");

    useEffect(() => {
        // console.log('noteslist', notesObj)

        if (notesObj.selectedIndex > -1 &&
            notesObj.notes.length > notesObj.selectedIndex) {
            setTitle(notesObj.notes[notesObj.selectedIndex].title);
            setBodyText(notesObj.notes[notesObj.selectedIndex].bodyText);
            setAddNote("Edit the Notes");
            setSaveButton("Update");
        } else {
            setTitle('')
            setBodyText('')
        }

    }, [notesObj])

  

    return (
        <>
            <div className="card empty-card p-4">
                <h5 className="card-title">{addNote}</h5>
                <input
                    className=" mb-4 mt-4 no-border"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    className="mb-2 no-border"
                    value={bodyText}
                    onChange={(e) => setBodyText(e.target.value)}
                    placeholder="Take a note..."
                />
                <div>
                    <button onClick={() => dispatch(add({ title, bodyText, footText: "few minutes ago" }))}>{saveButton}</button>
                </div>
            </div>
        </>
    );
}

export default AddNote;
