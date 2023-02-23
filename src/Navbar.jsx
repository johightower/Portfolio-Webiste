/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [burgerClicked, setBurgerClicked] = useState(false);

    const handleBurger = () => {
      const navLinks = document.querySelectorAll("#nav-links li");
  
      setBurgerClicked(!burgerClicked);
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.8
          }s`;
        }
      });
    };

    
    return(
        <div className="flex flex-col lg:flex-row justify-between items-center sticky top-0 z-10 bg-phlato h-52 text-ivory p-10">
            <div className="text-center ml-4">
                <h3 className="text-4xl font-thin pb-2">JOSEPHINE</h3>
                <hr></hr>
                <h1 className="text-6xl font-thin pt-2">HIGHTOWER</h1>
            </div>
            <ul className="flex text-2xl font-thin" id={burgerClicked ? "nav-links nav-active" : "nav-links"}>
                <li><Link smooth='true' spy='true' to="about" className="m-6" onClick={handleBurger}>about</Link></li>
                <li><Link smooth='true' spy='true' to="#projects" className="m-6" onClick={handleBurger}>projects</Link></li>
                <li><a href="https://github.com/johightower" target="_blank" className="m-6">github</a></li>
                <li><a href="https://www.linkedin.com/in/johightower/" target="_blank" className="m-6">linkedin</a></li>
                <li> <a href="https://docs.google.com/document/d/e/2PACX-1vSdI2pY-RU8axlGuQDnQBqtCLSKrAY5HfSaMRE147aDb5yu5OiQjzsQUEhQOfFtlQ/pub" target="_blank" className="m-6">resume</a></li>
                <li><a href="mailto:sightower@gmail.com" onClick={handleBurger}>contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar