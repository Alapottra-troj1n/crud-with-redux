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
        },

        deleteBook : (state,action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
        },

        updateBook : (state,action) => {
                const { id,title, author } = action.payload;
              const isBookExist =   state.books.filter((book) => book.id === id);
              if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
                
              }
        }


    },
});

export const {showBooks, addBook,deleteBook, updateBook} = booksSlice.actions;

export default booksSlice.reducer;
