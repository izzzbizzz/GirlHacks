"use client";
import Image from "next/image";
//import styles from "./page.module.css";
import styles from "./styles.css";
//import { generateInformation } from "./generateInfo";
import React from 'react';
//import index from "./getRandomSociety";

export default function Home() {

  /*const getPython = () => {
    document.getElementById("pyhere").innerHTML= result;
  }*/
   


  return (

    <div>
      <title>Global Groove</title>
    <link rel="stylesheet" href="styles.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
  
<body>
<nav class="navbar">
    <div class="navbar__container">
        <a href="/" id="navbar__logo"><img src="\images\pic2.png" alt="pic" id="img2"/>Global Groove</a>
        <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="/go2info/[discoInform]" class="navbar__links">DISCO</a>
            </li>
            <li class="navbar__item">
                <a href="/go/[randomDisco]" class="navbar__links">Dancing World</a>
            </li>
            <li class="navbar__btn">
                <a href="/" class="button">Sign Ups</a>
            </li>
        </ul>
    </div>
</nav>
    <div class="main">
    <div class="main__container">
        <div class="main__content">
            <h1>Global Groove</h1>
            <h2>DISCO-ver the arts around our own disco ball...</h2>
            <div class="Earth">
                <h3>EARTH</h3>
                <div class = "main__img__container">
                    <img src="funk.jpg" alt="pic" id="main__ing"/>
               </div>
            </div> 
        
        <div class="clearfix"></div>
        <button class = "main__btn"><a href="/go/[randomDisco]">Let's Learn!</a></button>
        </div>
        
    </div>
    <div className={styles.main}>
        This is for GirlHacks!
        
        <p id="testing">
        This is the current paragraph.
        </p>
        <a href="/go/[randomDisco]">
        <button>Go to second page!</button>
        </a>

      </div>
</div>
    </body>
   </div>
  );
}
