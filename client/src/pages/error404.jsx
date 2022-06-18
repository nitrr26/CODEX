import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {

    return (
        <div id="not-found" className="m-5">
            <h4><b>OPPS</b></h4>
            <p>Page not found 404 error</p>
            <NavLink to="/">go to home page</NavLink>
        </div>
    )
}

export default Error404;