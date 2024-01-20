import React, { useEffect, useState } from "react";
import styles from './note-app.module.css'
import Header from "../../components/header";
import BasePage from "../../components/base-page";
import ColorBox from "../color-box";
import { Button } from "react-bootstrap";
import Background from "../background";
import Input from "../input";
import Note from "../note";

const NoteApp = () => {
  const colors = [
    "#fff",
    "#FFD37F",
    "#FFFA81",
    "#D5FA80",
    "#78F87F",
    "#79FBD6",
    "#79FDFE",
    "#7AD6FD",
    "#D687FC",
    "#FF89FD",
  ];
  const [notes, setNotes] = useState([]);
  const [inputColor, setInputColor] = useState("#fff");
  const [noteTitle, setNoteTitle] = useState("");

  const noteTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };
  const changeColorHandler = (clr) => {
    setInputColor(clr);
  };
  const addNote = () => {
    let newNote = {
      id: notes.length + 1,
      title: noteTitle,
      color: inputColor,
    };
    if (newNote.title !== "") {
      console.log(newNote);
      setNotes([newNote, ...notes]);
      setNoteTitle("");
      setInputColor("#fff");  
    }
  };
  const add = (e) => {
    e.preventDefault();
    addNote()
  }
  const deleteNoteHandler = (id) => {
    setNotes(notes.filter(n => n.id !== id))
  }


  useEffect(() => {
    const data = localStorage.getItem("notes-list")
    setNotes(!!JSON.parse(data) ? JSON.parse(data) : [])
},[])
useEffect(() => {
    if( notes !== undefined)
    localStorage.setItem("notes-list" , JSON.stringify(notes))
},[notes])



  return (
    <>
    <BasePage title={"Note App"}>
      <Background />
      <Header />
      <Input
        value={noteTitle}
        onChange={noteTitleHandler}
        bgColor={inputColor}
        add={add}
      />
      <div
        className="d-flex justify-content-between my-1"
        style={{ zIndex: "100" }}
      >
        <div className="d-flex justify-content-start">
          {colors.map((color) => (
            <ColorBox
              color={color}
              key={color}
              onClick={() => changeColorHandler(color)}
            />
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            variant="outline-light"
            size="sm"
            className="mx-1 rounded-circle d-flex align-items-center justify-content-center p-1"
            onClick={addNote}
          >
            <span className="material-symbols-outlined m-0 p-0 fs-4">add</span>
          </Button>
        </div>
      </div>
    </BasePage>
      <div className={`${"d-flex align-items-start flex-wrap w-75"} ${styles['cnt']}`}>
        {notes?.length > 0 &&
          notes.map((note) => (
              <Note
                title={note.title}
                id={note.id}
                color={note.color}
                key={note.id}
                onDelete={deleteNoteHandler}
              />
          ))}
      </div>
      </>
  );
};

export default NoteApp;
