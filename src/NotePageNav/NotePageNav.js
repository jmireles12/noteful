import React from 'react'
import Context from '../context';
import AddFolder from '../AddNote/AddNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { findNote, findFolder } from '../notes-helpers'
import './NotePageNav.css'

export default class NotePageNav extends React.Component {

  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = Context

  render() {
    const { notes, folders, } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || {}
    const folder = findFolder(folders, note.folderId)
    return (
        <div className='NotePageNav'>
          <CircleButton
            tag='button'
            role='link'
            onClick={() => this.props.history.goBack()}
            className='NotePageNav__back-button'
          >
            <FontAwesomeIcon icon='chevron-left' />
            <br />
            Back
          </CircleButton>
          <AddFolder
            handleAdd={folder => this.addFolder(folder)}
          />
        {folder && (
            <h3 className='NotePageNav__folder-name'>
              {folder.name}
            </h3>
          )}
          
        </div>
    )
  }
}
