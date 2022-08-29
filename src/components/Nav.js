import React from "react";
import SearchNote from "./SearchNote";

export default function Nav({ search, onSearch }) {
  return (
    <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <SearchNote search={search} onSearch={onSearch} />
      </div>
    </>
  );
}
