import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {


    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))

    }, [])


    return (
        <div className='grid lg:grid-cols-3 justify-center  space-y-5'>
            {
                jobs.map(job => <HotJobsCard key={job._id} job= {job}></HotJobsCard>)
            }
        </div>
    );
};

export default HotJobs;