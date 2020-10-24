import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const books = JSON.parse(localStorage.getItem('library')) || {}
    const [library, setLibrary] = useState(books)

    const addBook = (title, author) => {
        const id = Math.random() * 100000;
        setLibrary({
            ...library,
            books: [
                ...library.books, { title, author, id }
            ]
        })
    }
    const removeBook = (id) => {
        setLibrary({
            ...library,
            books: library.books.filter(book => {
                return book.id !== id;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem('library', JSON.stringify(library))
    }, [library])
    return (
        <BookContext.Provider value={{ books: library.books, removeBook, addBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;