import React, { useEffect, useState } from 'react';



const Contact = () => {



    const [userData, setUserData] = useState({ name: "", email: "", message: "" });
    // const [userData, setUserData] = useState({}); agar upar wala line na chale to ye try karna h 
    // console.log(userData);
    const userContact = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            //   console.log(data);
            setUserData(data);
            if (!res.status === 200) {
                const err = new Error(res.error);
                throw err;
            }


        } catch (err) {
            console.log(`bakwas ${err}`);
        }
    }

    useEffect(() => {
        userContact();
    }, []);


    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }

    // send data

    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, message } = userData;

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        const data = await res.json();
        if (!data) {
            console.log("Message not send");
        } else {
            alert("Message sent successfully");
            setUserData({ ...userData, message: "" });
        }


    }


    return (
        <>
            <section id="contact">

                <h1 class="section-header">Contact</h1>

                <div class="contact-wrapper">



                    <form method="POST" id="contact-form" class="form-horizontal" role="form">

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="NAME"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleInputs}
                                    required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="email" placeholder="EMAIL"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputs}
                                    required />
                            </div>
                        </div>

                        <textarea class="form-control" rows="10" placeholder="MESSAGE"
                            name="message"
                            value={userData.message}
                            onChange={handleInputs}
                            required></textarea>

                        <button class="btn btn-primary send-button" onClick={contactForm} id="submit" type="submit" value="SEND">
                            <div class="alt-send-button">
                                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                            </div>

                        </button>

                    </form>



                    <div class="direct-contact-container">

                        <ul class="contact-list">
                            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>

                            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>

                            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>

                        </ul>

                        <hr />

                    </div>

                </div>

            </section>
        </>

    )
}

export default Contact;