import React from 'react'
import BookList from './BookList'
import Form from './Form'
import Navbar from './Navbar'

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Form />
            <BookList />
        </>
    )
}
