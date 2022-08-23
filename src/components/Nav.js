import React from "react";
import SearchNote from "./SearchNote";

export default function Nav() {
  return (
    <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <SearchNote />
      </div>
    </>
  );
}
