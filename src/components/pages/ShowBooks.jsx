import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBook } from '../features/books/BooksSlice';

const ShowBooks = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();

    console.log(books);

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }

    return (
        <div>
            <h2 className="text-2xl text-center">List of Books</h2>


            <div className="overflow-x-auto">
                <table className="table w-full">
               
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                     {books.map(book => {
                        const {id, title, author} = book;
                        return (
                            <>
                            <tr>

                            <th>{book.id}</th>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <Link to='/edit-book' state={{id, title, author}} className="btn btn-primary btn-xs mx-1"  >Edit</Link>
                                <button className="btn btn-primary btn-xs mx-1" onClick={()=> handleDelete(book.id)} >Delete </button>
                            </td>

                            </tr>
                            </>
                        )

                     })}
                     
                      
                 
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ShowBooks;