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
      searchNotes: [],
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
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

  onSearchChangeHandler(e) {
    // const search = this.state.notes.filter(
    //   (note) => note.title.search(e.target.value) !== 1
    // );
    // this.setState({
    //   searchQuery: e.target.value,
    //   search,
    // });
    // console.log(search);
    this.setState((prevState) => {
      return {
        ...prevState,
        searchQuery: e.target.value,
      };
    });
    this.onSearchEventHandler(e.target.value);
  }

  onSearchEventHandler(val) {
    let searchedNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(val.toLowerCase())
    );
    if (this.state.searchQuery.length >= 0) {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: searchedNotes });
    } else {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: this.state.notes });
    }
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
        <Nav
          search={this.state.searchQuery}
          onSearch={this.onSearchEventHandler}
        />
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
