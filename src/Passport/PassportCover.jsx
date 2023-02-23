/* eslint-disable no-unused-vars */
import React from "react";
import passportImage from '../assets/headshot.jpg'

const PassportCover = () => {
    return(
        <>
                <div className="flex items-center p-8 h-1/2 border-b border-phlato rounded-lg">
                    <h1 className="text-6xl font-thin ">P A S S P O R T</h1>
                    <div className="flex flex-row pl-4 font-light text-xl mt-10">
                        <p className="p-4">Hi, I'm Josephine! For a good portion of my life, I've always wondered what I can do to make a positive impact in the world while also challenging myself and having fun along the way. I went into many industries trying to find something that would fulfill my desires and purpose. I served 6 years in the military and decided that environment was not for me because it didn't allow me the flexibility I didn't know I wanted. Fortunately, through the military I was given the opportunity to attend a Full Stack Coding Bootcamp. When I first started, I never thought I would immediately love it as much as I do.</p>
                        <p className="p-4">Learning to code is something I thought was only achievable through university and studying hard for years and years. While the latter is true, the coding bootcamp taught me that I could learn a lot more than I thought in a much shorter time. It also taught me that software development is a constant learning opportunity, no matter how many years of experience you have. I love being able to challenge myself while learning and knowing I can be part of a team that is doing the same thing I am. I can't wait to explore this career field more and be part of an organization with a mission to serve others and help them the way software development helped me.</p>
                    </div>
                </div>
                <div className="flex items-center h-1/2 border-t border-phlato rounded-lg p-4">
                    <div className="flex flex-col items-center h-full">
                        <img src={passportImage} className="w-80 mt-14 ml-4 rounded"></img>
                    </div>
                    <div className="flex flex-col text-xl ml-8 font-thin">
                        <h6 className=""> NAME</h6>
                        <h3 className="text-2xl font-light">Josephine Hightower</h3>
                        <h6 className=""> TITLE</h6>
                        <h3 className="text-2xl font-light">Full Stack Software Developer</h3>
                        <h6 className=""> HOMETOWN</h6>
                        <h3 className="text-2xl font-light">Bakersfield, CA</h3>
                        <h6 className="">EDUCATION</h6>
                        <h3 className="text-2xl font-light">AA - Liberal Arts - Leeward CC <br></br>
                        AS - Intel Studies & Technology - CCAF</h3>
                        <h6 className="">SKILLS</h6>
                        <h3 className="text-2xl font-light"><span className="text-lg italic">Frontend:</span> React | Redux | Javascript | Tailwind</h3>
                        <h3 className="text-2xl font-light"><span className="text-lg italic">Backend:</span> Node.js | Express | PostgreSQL</h3>
                        <h3 className="text-2xl font-light"><span className="text-lg italic">Other:</span> Git/GitHub | NPM | RapidAPI | Netlify</h3>
                        <h6 className="">INTERESTS</h6>
                        <h3 className="text-2xl font-light">travel, chili cheese dogs, RPG games</h3>
                    </div>
                </div>
                </>
    );
};

export default PassportCover;