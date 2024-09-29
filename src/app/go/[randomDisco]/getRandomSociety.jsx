"use client";
import React, { useEffect, useState } from 'react';
console.log("anything")
function index() {
    const [message, setMessage] = useState("loading");
    useEffect(() => {
        fetch("http://localhost:8080/api/home")
        .then(
            response => response.json())
            .then(
            (data) => {
                setMessage(data.message);
                console.log(data.message);

            }
        )
    }, [])
    console.log("message is "+message)
    return message;
}

export default index