import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AddToStoreDB } from '../../Components/Utilities/AddToRead';
import { AddToStoreWish } from '../../Components/Utilities/AddToWishList';

const Details = () => {
    
   
    const {id} = useParams();
    console.log(id);
    const bookId = parseInt(id);
   
    const Data = useLoaderData();
      const singleBook  =   Data.find(book => book.bookId == bookId)
      console.log(singleBook)
    
        const {bookName,author,image}  = singleBook;


        const HandleRead = (id) =>{

            AddToStoreDB(id)

        }
        const HandleWishList = (id)=>{
            AddToStoreWish(id)
        }


    return (
        <div className='flex justify-around items-center mt-10 border'>
            <div className='bg-amber-100 '>
                {/* image */}
                <img className='w-[300px] p-10'  src={image} alt="" />
            </div>
            <div>
                {/* information */}
                <h2>{bookName}</h2>
                <p>{author}</p>
                <button onClick={() => HandleRead(bookId)} className='btn btn-primary mr-3'> Read</button>
                <button  onClick={() => HandleWishList(bookId)} className='btn btn-warning'>Whistlist</button>
            </div>
        </div>
    );
};

export default Details;