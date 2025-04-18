import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around mt-8 bg-[#1313130D] p-8 mb-8 rounded-4xl'>
            
            <div>
                {/* left */}
                <h2 className='text-3xl py-4'>Books to freshen up your bookshelf</h2>
                <button className='btn btn-primary'>View the List</button>
            </div>
            
            <div>
               <img className='w-2/3' src="/public/books.jpg" alt="" />
            </div>

        </div>
    );
};

export default Banner;