import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    //binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }
  
  render() {
    if(this.state.notes.length === 0) {
      return (
        <div className="note-app">
        <h1>Buat Catatan</h1>
        <h1>Daftar Catatan</h1>
        <p>Tidak ada data</p>
        <h1>Arsip</h1>
      </div>
      )
    } else {
    return (
      <div className="note-app">
        <h1>Buat Catatan</h1>
        <h1>Daftar Catatan</h1>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <h1>Arsip</h1>
      </div>
    )
  }
}
}

export default NoteApp;