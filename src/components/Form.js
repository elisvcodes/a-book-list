import React, { useState, useContext } from 'react'
import { BookContext } from '../context/BookContext'

export default function Form() {
    const { addBook } = useContext(BookContext);
    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const onAuthorChange = (e) => {
        setAuthor(e.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        addBook(Title, Author);
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" autoFocus placeholder="Title" value={Title} onChange={onTitleChange} />
            <input type="text" placeholder="Author" value={Author} onChange={onAuthorChange} />
            <button> Add</button>
        </form>
    );
}
