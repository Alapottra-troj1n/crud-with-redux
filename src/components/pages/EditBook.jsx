import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useLocation,useNavigate} from 'react-router-dom'
import { updateBook } from '../features/books/BooksSlice';


const EditBook = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(location)

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(updateBook({id, title, author}));
       navigate('/')



    }

    return (
        <div>
            <h2 className="text-center text-4xl font-semibold" >Edit Book</h2>
            
        <div className="w-3/6 mx-auto mt-28">
        <form onSubmit={handleSubmit}  className="flex flex-col gap-3" >
            <input value={title} onChange={e => setTitle(e.target.value)} required type="text" placeholder="Title" className="input input-bordered w-full " />

            <input value={author} onChange={e => setAuthor(e.target.value)} required type="text" placeholder="Author" className="input input-bordered w-full" />

            <input className='btn' type="submit" value="Update" />

            </form>
        </div>


        </div>
    );
};

export default EditBook;