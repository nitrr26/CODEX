import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

import {UserContext} from "../App"

const Login = () => {
    const {state, dispatch} = useContext(UserContext);
    console.log(UserContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let name, value;
    const inputHandler = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const PostDataUser = async (e) => {
        e.preventDefault();

        const { email, password } = user;
        // console.log(email);
        // console.log(password);

        const res = await fetch("/login/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email, password
            })
        });


        await res.json();
        if (res.status === 200) {

            dispatch({type:"USER", payload:true});

            console.log("login successfully");
            navigate('/')
        }

        else {
            window.alert(`server error: ${res.status}`);
            console.log("error");
        }

    }


    const PostDataMentor = async (e) => {
        e.preventDefault();

        const { email, password } = user;
        // console.log(email);
        // console.log(password);

        const res = await fetch("/login/mentor", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                email, password
            })
        });


        await res.json();
        if (res.status === 200) {

            dispatch({type:"USER", payload:true});

            console.log("login successfully");
            navigate('/')
        }

        else {
            window.alert(`server error: ${res.status}`);
            console.log("error");
        }

    }


    return (
        <>
            <section className="signin">

                <div className="container mt-5">

                    <div className="signin-content">
                        <div className="signup-image">
                            {/* <figure>
                            <img src={loginimg} alt="image no found" />
                        </figure> */}
                            <NavLink to="/register" className="signup-image-link">create account</NavLink>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Login</h2>
                            <form className="register-form" id="register-form" method="POST">

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
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={inputHandler}
                                        placeholder="Enter password..." />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" className="form-submit" value="Login as user"
                                        onClick={PostDataUser}
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" className="form-submit" value="Login as mentor"
                                        onClick={PostDataMentor}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;