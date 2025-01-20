import React from 'react';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {

    const { title, _id, company_logo } = job;



    return (

        <div className="card card-compact items-start w-96 bg-slate-800 shadow-xl">
            <figure className='flex '>
                <img
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body space-y-3 text-start">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`} className='btn'>Apply</Link>
                </div>
            </div>
        </div>

    );
};

export default HotJobsCard;