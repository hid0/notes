import React from "react";

export default function SearchNote() {
  return (
    <>
      {/* search input */}
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value=""
          onChange={() => console.log("opo")}
        />
      </div>
    </>
  );
}
