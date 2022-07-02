import React from 'react';
import NoteItemContent from './NoteItemContent';
import { showFormattedDate } from '../utils/data';
import NoteItemAction from './NoteItemAction';

function NoteItem({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive}/>
    </div>
  );
}

export default NoteItem;
