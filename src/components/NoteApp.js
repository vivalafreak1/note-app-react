import React from 'react';
import NoteList from './NoteList';
import { getData } from '../utils/data';

function NoteApp() {
  const notes = getData();

  return (
    <div className="note-app">
      <h1>Daftar Catatan</h1>
      <NoteList notes={notes} />
    </div>
  )
}

export default NoteApp;