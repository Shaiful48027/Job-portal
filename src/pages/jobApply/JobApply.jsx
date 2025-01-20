import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth()

    console.log(user, id);

    const submitApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;

        console.log(linkdin, github);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
        }

        fetch('http://localhost:5000/job-apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Apply now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={submitApply} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">linkdin Url</span>
                            </label>

                            <input type="url" placeholder="linkdin Url" className="input input-bordered" name='linkdin' />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github url</span>
                            </label>

                            <input type="url" placeholder="Github url" className="input input-bordered" name='github' />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply; 