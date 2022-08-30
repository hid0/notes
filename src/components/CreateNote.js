import React from "react";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limiter: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    const limit = 50;
    this.setState(() => {
      return {
        title: e.target.value.slice(0, limit),
        limiter: Math.max(0, limit - e.target.value.length),
      };
    });
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <div className="note-input">
          <h2>Buat catatan</h2>
          <form onSubmit={this.onSubmitHandler}>
            <p className="note-input__title__char-limit">
              Sisa karakter: {this.state.limiter}
            </p>
            <input
              className="note-input__title"
              type="text"
              placeholder="Ini adalah judul ..."
              required=""
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <textarea
              className="note-input__body"
              type="text"
              placeholder="Tuliskan catatanmu di sini ..."
              required=""
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            />
            <button type="submit">Buat</button>
          </form>
        </div>
      </>
    );
  }
}

export default CreateNote;
