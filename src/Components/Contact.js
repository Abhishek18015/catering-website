import React, { useState } from "react";



function Contact() {

    const [name, setName] = useState(" ");
    const [number, setNumber] = useState(" ");
    const [date, setDate] = useState(" ");
    const [message, setMessage] = useState(" ");

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleChangeNumber = (e) => {
        setNumber(e.target.value);
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    const handleClear = (e) => {
        e.preventDefault();
        setName('')
        setNumber('')
        setDate('')
        setMessage('')

    }

    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            date: date,
            number: number,
            message: message
        };
    
        try {
            const response = await fetch("https://dummy.restapiexample.com/api/vi/create", {
                method: "post",
                headers: {
                    'Constant-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
        }
        catch (error) {
            console.error();
        }
    }
        return (

            <div className="contact">
                <h1> Contact</h1>
                <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us. <b>Catering Service, 42nd Living St, 43043 New York, NY</b>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            
                <input type="text" onChange={handleChange} value={name} placeholder="Name"></input>
                <input type="number" onChange={handleChangeNumber} value={number} placeholder="How Many People"></input>
                <input type="datetime-local"  onChange={handleChangeDate} value={date}></input>
                <input type="text" onChange={handleChangeMessage} value={message} placeholder="Message/Special requirement"></input>
                <button onClick={handleClick}> Send Message</button>
                <button onClick={handleClear}> Clear</button>
            </div>
        );
    }


export default Contact;