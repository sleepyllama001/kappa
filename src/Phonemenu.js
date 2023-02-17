import "./Phonemenu.css";
import React from "react";
import { useState } from "react";
import Modal from 'react-modal';

export default function Phonemenu() {

    const myFunction = () => {
        console.log("kappa");

        let x = document.getElementById("myLinks");
        if(x == null){
            console.log(x);
        }
        else{

        
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
      }

    return (
        
    <div className="phone_menu">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="topnav">
    <img className="phone_logo" src="img/icons/manganato_logo.png"></img>

   
  {/* <a href="#home" className="active">Logo</a> */}
  
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  
  <a href="#" className="icon" onClick={() => {myFunction()}}>
    <i className="fa fa-bars"></i>
  </a>
  <div className="padding_book_desc">
                <a id="night-mode">
                    <div className="night_mode">
                        <embed className="moon" type="image/png" src={"img/icons/crescent.png"}/>
                            <h2>Night Mode</h2>
                    </div>
                </a>
            </div>
</div>
    </div>
    )
}