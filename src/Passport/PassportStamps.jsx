/* eslint-disable no-unused-vars */
import React from "react";
import html from '../assets/html5.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import postgres from '../assets/postgres.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import sequelize from '../assets/sequelize.png'
import tailwind from '../assets/tailwind.png'
import postman from '../assets/postman.png'


const PassportStamps = () => {
    return(
        <div className="flex-col items-center p-8 w-full h-full rounded-lg">
          <div className="flex flex-wrap font-light text-xl h-1/2">
                <img src={html} className="w-48 h-48 m-4 mt-10 -rotate-45"></img>
                <img src={javascript} className="w-64 h-32 m-4 ml-12 mt-16 rotate-70"></img>
                <img src={css} className="w-52 h-52 m-4 ml-8 mt-12 rotate-12"></img>
                <img src={react} className="w-52 h-52 m-4 ml-0"></img>
                <img src={redux} className="w-64 h-56 mb-32 ml-10 rotate-45"></img>
                <img src={tailwind} className="w-64 h-44 m-4 ml-5 mt-12 -rotate-45"></img>
          </div>
          <div className="flex flex-wrap items-center justify-center h-1/2 border-t border-phlato rounded-lg p-4">
                <img src={github} className="w-48 h-48 rotate-12"></img>
                <img src={node} className="w-64 h-48 ml-10"></img>
                <img src={sequelize} className="w-64 h-48 my-10 rotate-80"></img>
                <img src={postgres} className="w-64 h-64 -rotate-60"></img>
                <img src={postman} className="w-64 h-32 rotate-115 my-16"></img>
          </div>
        </div>
    );
};

export default PassportStamps;