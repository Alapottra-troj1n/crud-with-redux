import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books : [
        {id:1, title: 'God is dead', author : 'Friedrich Wilhelm Nietzsche'},
        {id:2, title: 'One must imagine Sisyphus Happy', author : 'Albert Camus'},
        {id:3, title: 'Existentialism Is a Humanism', author : 'Jean-Paul Sartre'}
    ]
}

const booksSlice = createSlice({
    name : 'books',
    initialState : initialBooks,
    reducers : {
        showBooks: (state) => state,

        addBook : (state,action) => {state.books.push(action.payload);
        }

    },
});

export const {showBooks, addBook} = booksSlice.actions;

export default booksSlice.reducer;
