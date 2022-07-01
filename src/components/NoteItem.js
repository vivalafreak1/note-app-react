import React from 'react';
import NoteItemBody from './NoteItemBody';

function NoteItem({ title, body }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} />
    </div>
  );
}

export default NoteItem;
