import React from "react";

function Contact (){

function handleSubmit(){

}

    return(
        <form className="form" onSubmit = {handleSubmit} >
            <h2>Talk to us! We will be glad to here your views!</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Contact;