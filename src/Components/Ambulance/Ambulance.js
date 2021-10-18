import React from 'react';
import './Ambulance.css'
import { useState } from 'react';
import { useEffect } from 'react';
import AmbulanceSingle from '../AmbulanceSingle/AmbulanceSingle';

const Ambulance = () => {

    const [ambulance,setAmbulance]=useState([])
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/nazim725/Ambulance/posts')
        .then(res=>res.json())
        .then(data=>setAmbulance(data))
    },[])
    return (
        <div className="ambulance-container" id='ambulance'>
           {
               ambulance.map(ambulanceSingle=><AmbulanceSingle
                key={ambulanceSingle.id}
                ambulanceSingle={ambulanceSingle}></AmbulanceSingle>)
           }

            
        </div>
    );
};

export default Ambulance;