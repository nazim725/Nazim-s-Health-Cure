import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DoctorDetails.css'

const DoctorDetails = () => {
    const {doctorId}=useParams()
    const [doctor,setDoctor]=useState({});
    const url=`https://my-json-server.typicode.com/nazim725/Doctors/posts/${doctorId}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDoctor(data))

    },[doctorId])
    return (
        <div>
            <div className="doctor-details mt-5 pb-5">
                <div className="">
                    <img src={doctor.img} alt="" height="400" width="300" />
                </div>
                <div className="doctor-info px-4">
                    <h3>{doctor.name}</h3>
                    <h5>{doctor.Designation}</h5>
                    <p>Email:{doctor.email}</p>
                    <p>Cell:{doctor.phone}</p>
                    <p>Address:{doctor.address}</p>
                    <p>{doctor.description}</p>
                    <p>Consultation Fee: ${doctor.fee}</p>

                    <button className='btn btn-success'>Appoint {doctor.name}</button>

                </div>
            </div>
            
        </div>
    );
};

export default DoctorDetails;