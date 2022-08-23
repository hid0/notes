import React from "react";
import ListActive from "./ListActive";
import ListArchive from "./ListArchive";

export default function NotesList({ notes }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        <ListActive notes={notes} />
      </div>
      <ListArchive />
    </>
  );
}
