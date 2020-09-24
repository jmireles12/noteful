import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NoteListMain.css'
import CircleButton from '../CircleButton/CircleButton';
import Context from '../context';
import Note from '../Note/Note';
import { getNotesForFolder } from '../notes-helpers';

export default class NoteListMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context

    render() {
        const { folderId } = this.props.match.params
        const { notes=[] } = this.context
        const notesForFolder = getNotesForFolder(notes, folderId)
        return (
            <section className='NoteListMain'>
                <ul>
                    {notesForFolder.map(note => 
                        <li key={note.id}>
                            <Note
                                id={note.id}
                                name={note.name}
                                modified={note.modified}
                            />
                        </li>
                    )}
                </ul>
                <div className='NoteListMain__Button-container'>
                    <CircleButton
                        tag={Link}
                        to='/add-note'
                        type='button'
                        className='NoteListMain__add-note-button'
                    >
                        <FontAwesomeIcon icon='plus' />
                        <br />
                        Note
                    </CircleButton>
                </div>
            </section>
        )
    }
}