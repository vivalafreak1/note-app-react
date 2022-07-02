import React from 'react';
import NoteItemBody from './NoteItemBody';
import { showFormattedDate } from '../utils/data';
import DeleteButton from './DeleteButton';


function NoteItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
