import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    console.log(data)
    return (
        <div>
            <h2 className='text-3xl text-center'>Books</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
              data.map(info => <Book info = {info}></Book> )
            }
           </div>
        </div>
    );
};

export default Books;