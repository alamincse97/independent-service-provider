import React from 'react';
import notFoundImg from '../../../Images/notFound.jpg';

const NotFound = () => {
    return (
        <div className='mt-4 text-center'>
            <img className=' w-100' src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;