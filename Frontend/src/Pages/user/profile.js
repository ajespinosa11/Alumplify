import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [profile, setinfo] = useState([]);

    useEffect(() => {
      // Fetch data from the API endpoint
      fetch('http://localhost:5000/api/profile')
        .then((response) => response.json())
        .then((data) => setinfo(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="profile">
            {profile.map((info) => (
            <div className="bg-prof container rounded fs-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" alt="profile" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                            <span className="font-weight-bold">{info.fname + info.lname}</span>
                            <span className="text-black-50">{info.email}</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6 p-1">
                                    <label className="labels fs-6 p-1">Firstname</label>
                                    <input type="text" className="form-control" placeholder="first name" value={info.fname} />
                                </div>
                                <div className="col-md-6 p-1">
                                    <label className="labels fs-6 p-1">Surname</label>
                                    <input type="text" className="form-control" value={info.lname} placeholder="surname" />
                                </div>
                                <div className="col-md-6 p-1">
                                    <label className="labels fs-6 p-1">Date of Birth</label>
                                    <input type="text" className="form-control" value={info.dob} placeholder="Date of birth" />
                                </div>
                                <div className="col-md-6 p-1">
                                    <label className="labels fs-6 p-1">Gender</label>
                                    <input type="text" className="form-control" value={info.sex} placeholder="Gender" />
                                </div>
                                <div className="col-md-6 p-1">
                                    <label className="labels fs-6 p-1">Civil status</label>
                                    <input type="text" className="form-control" value={info.cstat} placeholder="Civil status" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 p-1">
                                    <label className="labels fs-6 p-1">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder="enter phone number" value={info.mblnum} />
                                </div>
                                <div className="col-md-12 p-1">
                                    <label className="labels fs-6 p-1">Address Line 1</label>
                                    <input type="text" className="form-control" placeholder="enter address line 1" value={info.address} />
                                </div>
                                <div className="col-md-12 p-1">
                                    <label className="labels fs-6 p-1">City/Municipality</label>
                                    <input type="text" className="form-control" placeholder="City/Municipality" value={info.cty_mncplty} />
                                </div>
                                <div className="col-md-12 p-1">
                                    <label className="labels fs-6 p-1">Email Address</label>
                                    <input type="text" className="form-control" placeholder="Email address" value={info.email} />
                                </div>
                                <div className="col-md-12 p-1">
                                    <label className="labels fs-6 p-1">Graduate course</label>
                                    <input type="text" className="form-control" placeholder="Graduate course" value={info.gradcou} />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Graduate info</span>
                                <span className="border px-3 p-1 add-experience">
                                <i className="fa fa-plus"></i>&nbsp;Info</span>
                            </div>
                            <br/>
                            <div className="col-md-12">
                                <label className="labels fs-6">Graduate Degree</label>
                                <input type="text" className="form-control" placeholder="Graduate Degree" /*value={info.}*/ />
                            </div> 
                            <br/>
                            <div className="col-md-12">
                                <label className="labels fs-6">Additional Details</label>
                                <input type="text" className="form-control" placeholder="additional details" /*value={info.}*/ />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Profile