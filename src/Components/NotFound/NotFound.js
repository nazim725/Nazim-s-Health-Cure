import React from 'react';
import img from '../../images/404.jpeg'

const NotFound = () => {
    return (
        <div className=' mt-5'>
           <div className='mx-auto w-50'>
           <img src={img} alt=""  width='300'/>
           </div>
            
        </div>
    );
};

export default NotFound;