import React from 'react';
import './Doctors.css'
import {useState,useEffect} from 'react'
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/nazim725/Doctors/posts')
        .then(res=>res.json())
        .then(data=>setDoctors(data))

    },[])
    return (
        <div className="doctors-container mt-5 pb-5" id='doctors'>
            {
                doctors.map(doctor=><Doctor
                    key={doctor.id}
                    doctor={doctor}></Doctor>)
            }


            
        </div>
    );
};

export default Doctors;