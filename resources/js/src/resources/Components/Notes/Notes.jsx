import 'axios';
import React, { Component } from 'react';
import './Notes.module.css';

class Notes extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            notes: []
        }
    }
    componentDidMount ()
    {
        axios.get('/api/notes').then(response => {
            this.setState({ notes: response.data });
        });
    }
    render()
    {
        const notes = this.state['notes'];

        return <div className='notes'>
            <div className="container">

                <h1 className='notes__heading'> Все заметки </h1>

                { notes.map(note => (
                    <div className="note" key={ note.id }>
                        <p className="note__title"> { note.title } </p>
                        <p className="note__text"> { note.text } </p>
                        <p className="note__date"> { note.date } </p>
                    </div>
                )) }

            </div>
        </div>
    }
}

export default Notes;
