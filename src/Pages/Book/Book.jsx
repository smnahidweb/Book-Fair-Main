import React from 'react';
import { Link } from 'react-router';

const Book = ({info}) => {
    return (
        <Link to={`/details/${info.bookId}`}>
        
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img 
      src={info.image}
      alt="Shoes"
      className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
      "bookName": "The Alchemist",
    <h2 className="card-title">{info.bookName}</h2>
    <p>By: {info.author}</p>
    <div className="card-actions">
      <button className="btn btn-primary">{info.category}</button>
      <button className="btn btn-primary">{info.rating}</button>
    </div>
  </div>
</div>
        
        </Link>
    );
};

export default Book;