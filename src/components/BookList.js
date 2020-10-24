import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'


export default function BookList() {
    const { books } = useContext(BookContext)

    return (
        <div className="book-list">
            {books.length === 0
                ? <p className="empty"> Currently Not reading any Books</p>
                : (books.map(book => {
                    return (
                        <ul key={book.id}>
                            <BookDetails book={book} />
                        </ul>
                    )
                }))}
        </div>
    )

}
