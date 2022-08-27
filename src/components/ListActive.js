import React from "react";
import Buttons from "./partials/Buttons";
import NoteBody from "./partials/NoteBody";
import NoteDate from "./partials/NoteDate";
import NoteTitle from "./partials/NoteTitle";

const ListActive = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <div className="note-item" key={note.id}>
          <div className="note-item__content">
            <NoteTitle title={note.title} />
            <NoteDate date={note.createdAt} />
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
