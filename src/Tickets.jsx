/* eslint-disable no-unused-vars */
import React from "react";
import boardingbarcode from "./assets/boardingbarcode.png"
import epitome from './assets/epitome.png'
import honeydrop from './assets/honeydrop.png'
import soulshopper from './assets/soulshopper.png'


const Tickets = () => {
    return(
        <div id="projects" className="flex flex-col bg-phlato font-mono w-full p-10">
            <h1 className="font-sans text-8xl text-ivory font-thin underline decoration-1 mb-16 mt-32 text-center">BOARDING PASSES:</h1>
            <div className="flex relative self-start border-4 border-ivory bg-ivory rounded-3xl w-ticket m-4 h-96">
                <div className="flex flex-col w-3/4">
                    <h1 className="m-4 ml-10 text-5xl font-semibold text-gray-700">PROJECT :</h1>
                    <img src={boardingbarcode} className="absolute top-1/2 right-barcode w-72 rotate-90 mix-blend-multiply"></img>
                    <div className="flex ml-32">
                        <div className="flex-col mx-6">
                            <h1>TITLE:</h1>
                            <p className="text-2xl">epitoME</p>
                        </div>
                        <div className="flex-col mx-10">
                            <h1>DATE:</h1>
                            <p className="text-2xl">02/2023</p>
                        </div>
                        <div className="flex-col mx-10">
                            <h1>ROLE:</h1>
                            <p className="text-2xl">UX/UI</p>
                        </div>
                        <div className="flex-col mx-10">
                            <h1>TYPE:</h1>
                            <p className="text-2xl">Group</p>
                        </div>
                    </div>
                    <div className="flex-col ml-32 mt-10">
                        <div className="flex-col mx-6">
                            <h1>FRONT END</h1>
                            <p className="text-2xl">React | Redux | TailwindCSS</p>
                        </div>
                        <div className="flex-col mx-6">
                            <h1>BACK END</h1>
                            <p className="text-2xl">Express | Sequelize | PostgreSQL </p>
                        </div>
                        <div className="flex-col mx-6">
                            <h1>OTHER</h1>
                            <p className="text-2xl">Node.js | GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="border-l-2 border-dashed w-1/4">
                    <a href="https://github.com/CapstoneGroupI/epitoME" target="_blank"><img src={epitome}></img></a>
                    <div className="flex-col mx-2 mt-4">
                        <h3>DESCRIPTION</h3>
                        <p className="text-xl">social media app where users can rate people they know and strangers based on their personal opinions of them</p>
                     </div>
                </div>
                </div>
                <div className="flex self-center relative border-4 border-ivory bg-ivory rounded-3xl w-ticket m-4 h-96">
                <div className="flex flex-col w-3/4">
                    <h1 className="m-4 ml-10 text-5xl font-semibold text-gray-700">PROJECT :</h1>
                    <img src={boardingbarcode} className="absolute top-1/2 right-barcode w-72 rotate-90 mix-blend-multiply"></img>
                    <div className="flex ml-32">
                        <div className="flex-col mx-6">
                            <h1>TITLE:</h1>
                            <p className="text-2xl">HoneyDrop</p>
                        </div>
                        <div className="flex-col mx-8">
                            <h1>DATE:</h1>
                            <p className="text-2xl">01/2023</p>
                        </div>
                        <div className="flex-col mx-8">
                            <h1>ROLE:</h1>
                            <p className="text-2xl">FullStack</p>
                        </div>
                        <div className="flex-col mx-8">
                            <h1>TYPE:</h1>
                            <p className="text-2xl">Solo</p>
                        </div>
                    </div>
                    <div className="flex-col ml-32 mt-10">
                        <div className="flex-col mx-6">
                            <h1>FRONT END</h1>
                            <p className="text-2xl">React | Redux | TailwindCSS</p>
                        </div>
                        <div className="flex-col mx-6">
                            <h1>BACK END</h1>
                            <p className="text-2xl">RapidAPI | Shazam Core API </p>
                        </div>
                        <div className="flex-col mx-6">
                            <h1>OTHER</h1>
                            <p className="text-2xl">Node.js | Netlify</p>
                        </div>
                    </div>
                </div>
                <div className="border-l-2 border-dashed w-1/4">
                    <a href="https://honeydrop-music.netlify.app/" target="_blank"><img src={honeydrop} className="mt-6"></img></a>
                    <div className="flex-col mx-2 mt-6">
                        <h3>DESCRIPTION</h3>
                        <p className="text-xl">spotify clone-like music player app where your favorite artists can drop their sweetest tunes</p>
                     </div>
                </div>
                </div>
                <div className="flex self-end relative border-4 border-ivory bg-ivory rounded-3xl w-ticket m-4 h-96">
                <div className="flex flex-col w-3/4">
                    <h1 className="m-4 ml-10 text-5xl font-semibold text-gray-700">PROJECT :</h1>
                    <img src={boardingbarcode} className="absolute top-1/2 right-barcode w-72 rotate-90 mix-blend-multiply"></img>
                    <div className="flex ml-32">
                        <div className="flex-col mx-6">
                            <h1>TITLE:</h1>
                            <p className="text-2xl">epitoME</p>
                        </div>
                        <div className="flex-col mx-10">
                            <h1>DATE:</h1>
                            <p className="text-2xl">01/2023</p>
                        </div>
                        <div className="flex-col mx-10">
                            <h1>ROLE:</h1>
                            <p className="text-2xl">UX/UI</p>
                        </div>
                        <div className="flex-col mx-10">
                            <h1>TYPE:</h1>
                            <p className="text-2xl">Group</p>
                        </div>
                    </div>
                    <div className="flex-col ml-32 mt-10">
                        <div className="flex-col mx-6">
                            <h1>FRONT END</h1>
                            <p className="text-2xl">React | Redux | CSS</p>
                        </div>
                        <div className="flex-col mx-6">
                            <h1>BACK END</h1>
                            <p className="text-2xl">Express | Sequelize | PostgreSQL </p>
                        </div>
                        <div className="flex-col mx-6">
                            <h1>OTHER</h1>
                            <p className="text-2xl">Node.js | GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="border-l-2 border-dashed w-1/4">
                    <a href="https://github.com/teamH-Grace-Shopper/graceshopper-project" target="_blank"><img src={soulshopper}></img></a>
                    <div className="flex-col mx-2 mt-6">
                        <h3>DESCRIPTION</h3>
                        <p className="text-xl">fully functional e-commerce website designed for users to buy and sell their own souls</p>
                     </div>
                </div>
                </div>
        </div>
    )
}

export default Tickets;