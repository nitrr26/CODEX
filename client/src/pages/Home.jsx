import React, { useEffect, useState } from 'react';

import Guidence from './Guidence';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    
    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata/user', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
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
            <div className='home-div'>

            <h2><b>WELCOME</b></h2>
            <h2>{userName}</h2>
            <h3>{show ? 'Happy to see you again' : 'Happify your life with our awesome mentors...'}</h3>
            <br/>
            </div>
            {/* <Guidence /> */}
            <div>
           <h5>
            Everybody wants a StressLess and healthy life. 
           </h5>

            

 
<p>
But because of pandemic there is rising prevalence of mental health conditions because of the fear and psychological stress, but also stress relating to changes in the way we live our lives. These include family stress, work stress, loss of income, and social isolation, with some facing increased abuse, disrupted education and uncertainty about the future. 
</p>

<p>
Therapy is the must needed way to deal with this situation but not everyone is able to afford the high cost of therapy sessions and can travel to Therapists.  
</p>


<p>
With StressLess we connect needed people (Users) who are unable to afford therapy cost or Travel to the therapists with the Mentors who are volunteering to help the needed persons. 
</p>

<p>
Where we will connects our users to best suitable mentors. 
</p>

            </div>
        </div>


    )
}

export default Home;