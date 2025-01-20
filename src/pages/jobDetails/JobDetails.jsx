import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const job = useLoaderData();
    const {title, _id, company} = job;
    
    
    return (
        <div className='card card-compact p-10 text-start text-white'>
            <h1>{title}</h1>
            <h2>{_id}</h2>
            <h3>{company}</h3>
            <div>
                <Link to={`/jobApply/${_id}`}>
                <button className='btn mt-5'> Apply Here</button>
                </Link>
            </div>
            
        </div>
    );
};

export default JobDetails;