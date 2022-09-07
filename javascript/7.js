import React, { useState } from "react";
import ReactDOM from "react-dom";


import Modal from "./Modal";


import useNote from "./useNote";




function App() {
  const [notes, addNote, editNote, removeNote] = useNote();
  const [currentNote, setCurrentNote] = useState(null);
  const [editKey, changeEditKey] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCurrentNote({ title: "", listItems: [""] });
        }}
      >
        Create new note
      </button>

      <h2>Note List</h2>
      {Object.keys(notes).map((note, index) => {
        const { title, listItems } = notes[note];

        return (
          <div key={index}>
            <div>{title}</div>

            <ul className="list-group">
              {listItems.map((listItem, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {listItem}
                  </li>
                );
              })}
            </ul>

            <div>
              <button
                onClick={() => {
                  changeEditKey(note);
                  setCurrentNote({ title, listItems });
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  removeNote(note);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}

      {currentNote && (
        <Modal
          btnText={editKey ? "Edit Note" : "Add Note"}
          onSubmit={editKey ? editNote.bind(null, editKey) : addNote}
          note={currentNote}
          hideModal={() => {
            changeEditKey(null);
            setCurrentNote(null);
          }}
        />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);