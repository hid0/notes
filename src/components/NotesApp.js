import Nav from "./Nav";
import React from "react";
import NotesList from "./NotesList";
import CreateNote from "./CreateNote";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().getDate,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <Nav />
        <div className="note-app__body">
          <CreateNote addNote={this.onAddNoteHandler} />
          <NotesList notes={this.state.notes} />
        </div>
      </>
    );
  }
}

export default NotesApp;
