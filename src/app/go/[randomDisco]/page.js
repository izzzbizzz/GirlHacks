"use client";
import React from 'react';
//import { generateInformation } from "./generateInfo";
import { generateInformation } from '@/app/generateInfo';
import styles from "./styles.css";
export default function showDisco() {
  var dance="";
  var country="";
  const getResult = async () => {
    const outcome=await generateInformation();
    //document.getElementById("testing").innerHTML=outcome[1];
    dance=outcome[0];
    document.getElementById("danceHeader").innerHTML=outcome[0];
    document.getElementById("description").innerHTML=outcome[1];
    document.getElementById("putHere").innerHTML=outcome[3];
    //console.log(outcome[3]);
    const iframe=document.getElementById("videoHere")
    iframe.src=outcome[2];
  }
  
  return (
    <div>
      <button id='goButton' onClick={function() {getResult()}}>click here.</button>
        <h1 id="danceHeader"></h1>
        <p id="description"></p>
        <iframe id="videoHere" src="">
        </iframe>
        <hr className="solid"></hr>
        <p id="putHere"> </p>
    </div>
  );
}
