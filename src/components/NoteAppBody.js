import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';

import NoteInput from './NoteInput';

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    //binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
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
            createdAt: +new Date(),
            archived: false,
          }
        ]
      }
    });
  }

  render() {
      return (
      <div className="note-app__body">
        <h1>Buat Catatan</h1>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h1>Daftar Catatan</h1>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <h1>Arsip</h1>
      </div>
    )
  }
}

export default NoteAppBody;