import React from "react";

function Contact (){

function handleSubmit(){

}

    return(
<div className="contact-form">
        <form className="form" onSubmit = {handleSubmit} >
            <h4>Talk to us!</h4>
            <div className="flex-form">
            <div className="input">
                {/* <label htmlFor="name">Name:</label> */}
                <input placeholder="Enter Your Name" type="text" id="name" required />
            </div>
            <div className="input">
                {/* <label htmlFor="email">Email:</label> */}
                <input placeholder=" Enter Your Email" type="email" id="email" required />
            </div>
            <div className="input text">
                {/* <label htmlFor="message">Message:</label> */}

                <textarea placeholder="Enter your message here" id="message" required />
            </div>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default Contact;