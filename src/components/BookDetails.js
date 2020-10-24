import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export default function BookDetails({ book }) {
    const { removeBook } = useContext(BookContext);
    return (
        <li onClick={() => {
            removeBook(book.id)
        }}>
            <h4 className="title"> {book.title}</h4>
            <p className="author"> By: {book.author}</p>
        </li>
    )
}
