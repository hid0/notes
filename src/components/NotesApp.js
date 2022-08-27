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
            createdAt: new Date.now(),
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
