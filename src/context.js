import React from 'react';


export default React.createContext({
    error: '',
    notes: [],
    folders: [],
    addNote: () => {},
    addFolder: () => {},
    deleteNote: () => {},
})
