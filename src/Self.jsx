/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import collage from './assets/collage.png'


const SelfIntro = () => {
    return(
        <div className="flex flex-col 2xl:flex-row items-center justify-center bg-phlato pt-4">
          <div className="2xl:flex 2xl:flex-col 2xl:items-center p-4 border-2 border-ivory hidden">
            <h1 className="text-7xl text-ivory font-thin">Josephine</h1>
            <h1 className="text-7xl ml-32 text-ivory font-thin xl:ml-96">Hightower</h1>
          </div>
          <div className="relative">
            <img src={collage} className="h-screen"></img>
            <p className="absolute top-0 left-0 h-full px-20 flex items-center shadow-lg font-light text-5xl text-ivory text-center w-full opacity-0 bg-fixed hover:opacity-100 hover:backdrop-blur-lg">"For years I've tried to find an industry that challenged me in a positive way, give me the flexibility to travel the world, and be part of an environment where I can network and build great relationships with others. Connecting with people and different cultures are a few of the things that ground me and make me who I am. I also never wanted to be stuck doing the same thing for decades. I searched and searched for a career that would fulfill my purpose and keep me constantly learning. I started to believe this career didn't exist -then I found coding."</p>
          </div>
      </div>
    );
};

export default SelfIntro