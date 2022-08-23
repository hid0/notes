import React from "react";
import Buttons from "./partials/Buttons";
import NoteBody from "./partials/NoteBody";
import NoteDate from "./partials/NoteDate";
import NoteTitle from "./partials/NoteTitle";

const ListActive = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <div className="note-item">
          <div className="note-item__content">
            <NoteTitle title={note.title} key={note.id} />
            <NoteDate date={note.date} />
            <NoteBody body={note.body} />
          </div>
          <div className="note-item__action">
            <Buttons />
          </div>
        </div>
      ))}
    </>
  );
};

export default ListActive;
