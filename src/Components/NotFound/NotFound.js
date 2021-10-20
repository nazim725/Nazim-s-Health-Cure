import React from 'react';
import img from '../../images/404.jpeg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className=' mt-5 notFound-img'>
           <div className=''>
           <img src={img} alt=""/>
           </div>
            
        </div>
    );
};

export default NotFound;