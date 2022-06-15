import React from 'react';
import { useSelector } from 'react-redux'

const ShowBooks = () => {
    const books = useSelector((state) => state.booksReducer.books);

    console.log(books);

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

                        return (
                            <>
                               <tr>
                            <th>{book.id}</th>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <button className="btn btn-primary btn-xs mx-1">Edit</button>
                                <button className="btn btn-primary btn-xs mx-1">Delete</button>
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