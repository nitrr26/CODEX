import React, { useEffect, useState } from 'react';

const Home = () => {


    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    
    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            //   console.log(data);
            setUserName(data.name);
            
            if (!res.status === 200) {
                const err = new Error(res.error);
                throw err;
            }else{
                setShow(true);
            }


        } catch (err) {
            console.log(`bakwas ${err}`);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);


    return (
        <div className="m-5">
            <h4><b>WELCOME</b></h4>
            <h2>{userName}</h2>
            <h3>{show ? 'Happy to see you again' : 'We are MERN Developer'}</h3>
        </div>
    )
}

export default Home;