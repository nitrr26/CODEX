import React, {useEffect, useState} from 'react';
import {  useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});
    // const [userData, setUserData] = useState({}); agar upar wala line na chale to ye try karna h 
    console.log(userData);
    const callAboutpage = async () => {
        try{
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

          const data = await res.json();
        //   console.log(data);
          setUserData(data);
          if(!res.status === 200){
            const err = new Error(res.error);
            throw err;
          }


        } catch (err) {
            console.log(`bakwas ${err}`);
            navigate('/login');
        }
    }

    useEffect(() => {
        callAboutpage();   
    }, []);



    return (
        <>
            <div className="container emp_profile">
                <form method="GET">

                    <div className="row">
                        <div className="col-md-4">
                            <h3>image</h3>
                        </div>
                        <div className="col-md-6">
                            <div className="profile_head">
                                <h5>{userData.name}</h5>
                                <h6>Web developer</h6>
                                <p className="profile_rating mt-3 mb-5">RANKING: <span>1/10</span></p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit profile" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile_work">
                                <p>WORK LINK</p>
                                <a href="#" target="_blank">Instagram</a><br/>
                                <a href="#" target="_blank">facebook</a><br/>
                                <a href="#" target="_blank">Linkdlin</a><br/>
                                <a href="#" target="_blank">leetcode</a><br/>
                            </div>
                        </div>

                        <div className="col-md-8 pl-5">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>User ID</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData._id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Name</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Email</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Phone</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Profession</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.work}</p>
                                        </div>
                                    </div>
                                    </div>
                                   

                                </div>
                            </div> 
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default About;