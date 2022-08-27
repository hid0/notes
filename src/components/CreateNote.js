import React from "react";

const CreateNote = () => {
  function onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    console.log(this.state);
  }

  function onTitleChangeEventHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  function onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  return (
    <>
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={onSubmitHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: 50</p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required=""
            defaultValue={""}
            // value={this.state.title}
            onChange={onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            required=""
            defaultValue={""}
            // value={this.state.body}
            onChange={onBodyChangeEventHandler}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
