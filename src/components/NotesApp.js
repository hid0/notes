import Nav from "./Nav";
import React from "react";
import CreateNote from "./CreateNote";
import { getInitialData } from "../utils";
import ActiveNote from "./ActiveNote";
import ArchiveNote from "./ArchiveNote";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
  }

  onActiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      return note;
    });
    this.setState({ notes });
  }

  onSearchHandler(e) {
    this.setState(() => {
      return {
        search: e.target.value,
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });
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
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <Nav search={this.state.search} onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <CreateNote addNote={this.onAddNoteHandler} />
          {/* Note Active List */}
          <ActiveNote
            notes={this.state.notes.filter((note) => note.archived === false)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          {/* Note Archive List */}
          <ArchiveNote
            notes={this.state.notes.filter((note) => note.archived === true)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
