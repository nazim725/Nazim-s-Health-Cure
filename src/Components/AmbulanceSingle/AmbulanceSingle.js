import React from 'react';
import './AmbulanceSingle.css'

const AmbulanceSingle = (props) => {

    const{name,driverName,ambulanceNo,Price,img}=props.ambulanceSingle
    return (
        <div >
            <div className='ambulance mt-5'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='px-5'>
                    <h4>{name}</h4>
                    <p> Driver Name: {driverName}</p>
                    <p>Ambulance Number:{ambulanceNo}</p>
                    <p>Transport Fee: {Price}</p>
                    <button className='btn btn-success w-50'>Book</button>
                </div>
            </div>
            
        </div>
    );
};

export default AmbulanceSingle;