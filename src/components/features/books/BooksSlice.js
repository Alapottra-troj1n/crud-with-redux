import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books : [
        {id:1, title: 'Love Yourself', author : 'Alapottra'},
        {id:2, title: 'Love Yourself', author : 'Alapottra'},
        {id:3, title: 'Love Yourself', author : 'Alapottra'}
    ]
}

const booksSlice = createSlice({
    name : 'books',
    initialState : initialBooks,
    reducer : {
        showBooks: (state) => state,

    },
});

export const {showBooks} = booksSlice.actions;

export default booksSlice.reducer;
