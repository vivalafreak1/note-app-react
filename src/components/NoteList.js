import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className='notes-list__empty-message'>Tidak ada catatan</div>
    )
  }
  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem 
          key={notes.id} 
          id={note.id}
          onDelete={onDelete} 
          {...note} />
        ))
      }
    </div>
  );
}

export default NoteList;
