import React from 'react';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { addBook } from '../features/books/BooksSlice';

const AddBooks = () => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const dispatch = useDispatch()

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length)

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {title, author, id : numberOfBooks + 1};
        console.log(book);
        dispatch(addBook(book))
        setTitle('')
        setAuthor('')

    }


    return (
        <div className="flex justify-center items-center h-[70vh]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" >
            <input value={title} onChange={e => setTitle(e.target.value)} required type="text" placeholder="Title" className="input input-bordered w-full " />

            <input value={author} onChange={e => setAuthor(e.target.value)} required type="text" placeholder="Author" className="input input-bordered w-full" />

            <input className='btn' type="submit" value="Add Book" />

            </form>
        </div>
    );
};

export default AddBooks;