import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import signupimg from '../images/signup-page.png';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    });

    let name, value;
    const inputHandler = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        // console.log(name)
        // console.log(email)

        const res = await fetch("/register", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        // const data = await res.json();
        // if(res.status === 423 || res.status === 422){
        //     window.alert("server error");
        //     console.log("error");
        // }
        // else if(!data){
        //     window.alert("data err");
        // }
        // else{
        //     window.alert("done");
        //     console.log("done");

        //     // navigate.push("/login");
        //     navigate('/login')
        // }


        const data = await res.json();
        if (res.status === 201) {
            console.log("Registered successfully");
            navigate('/login')
        }

        else {
            window.alert(`server error: ${res.status}`);
            console.log("error");
        }

    }

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="register-form" method="POST">


                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={inputHandler}
                                        placeholder="Your name..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={inputHandler}
                                        placeholder="Your email..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={inputHandler}
                                        placeholder="Your number..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        value={user.work}
                                        onChange={inputHandler}
                                        placeholder="Your profession..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={inputHandler}
                                        placeholder="Enter password..." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock-outline material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={inputHandler}
                                        placeholder="Confirm password..." />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" className="form-submit" value="Register"
                                        onClick={PostData}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={signupimg} alt="image no found" />
                            </figure>
                            <NavLink to="/login" className="signup-image-link">Go to login page</NavLink>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;