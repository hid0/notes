import React from "react";

export default function SearchNote({ search, onSearch }) {
  return (
    <>
      {/* search input */}
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={search}
          onChange={(e) => onSearch(e)}
        />
      </div>
    </>
  );
}
