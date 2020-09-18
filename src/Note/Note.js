import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Note.css'
import Moment from 'moment';

export default function Note(props) {
    Moment.locale('en');
    const dt = props.modified;
    return (
        <div className='Note'>
            <h2 className='Note__title'>
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <button className='Note__delete' type='button'>
                <FontAwesomeIcon icon='trash-alt' />
                {' '}
                remove
            </button>
            <div className='Note__dates'>
                <div className='Note__dates-modified'>
                    Modified
                    {' '}
                    <span className='Date'>
                        {Moment(dt).format('MMM DD YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}

