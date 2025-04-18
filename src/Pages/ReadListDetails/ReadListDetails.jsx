import React from 'react';

const ReadListDetails = ({b}) => {

    return (
        <div>
             <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img 
      src={b.image}
      alt="Shoes"
      className="rounded-xl h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
      "bookName": "The Alchemist",
    <h2 className="card-title">{b.bookName}</h2>
    <p>By: {b.author}</p>
    <p>Pages: {b.totalPages}</p>
    <div className="card-actions">
      <button className="btn btn-primary">{b.category}</button>
      <button className="btn btn-primary">{b.rating}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadListDetails;