import React from 'react';

const WishList = ({wish}) => {
    return (
        <div>
             <div className='flex justify-around items-center mt-10 border'>
            <div className='bg-amber-100 '>
                {/* image */}
                <img className='w-[300px] p-10'  src={wish.image} alt="" />
            </div>
            <div>
                {/* information */}
                <h2>{wish.bookName}</h2>
                <p>{wish.author}</p>
                <p>page: {wish.totalPages}</p>
                <p>Rating: {wish.rating}</p>
              
            </div>
        </div>
        </div>
    );
};

export default WishList;