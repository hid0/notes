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
  render() {
    return (
      <>
        <Nav />
        <div className="note-app__body">
          <CreateNote />
          <NotesList notes={this.state.notes} />
        </div>
      </>
    );
  }
}

export default NotesApp;
