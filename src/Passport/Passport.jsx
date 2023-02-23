/* eslint-disable no-unused-vars */
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useState } from 'react';
import PassportCover from './PassportCover'
import PassportStamps from './PassportStamps';

import './Passport.css';

const Passport = () => {
    const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 1));
    };

    return (
        <div id="about" className="flex-col bg-phlato">
        <h1 className="font-sans text-8xl text-ivory font-thin underline decoration-1 text-center pt-32">PASSPORT:</h1>
        <div className="flex items-center justify-center h-passport">
            <div id="passport-background" className="flex flex-col border-12 border-[#001e00] rounded-md h-5/6 w-passport ml-32">
                <FlippingPages
                    direction="bottom-to-top"
                    onSwipeEnd={setSelected}
                    selected={selected}
                >
                    <div className="page page1"><PassportCover /></div>
                    <div className="page page2"><PassportStamps /></div>
                    {/* <div className="page page3">Page 3</div> */}
                </FlippingPages>
            </div>
            <div className="flex flex-col">
                <button onClick={back} className="text-ivory hover:text-stone-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" /></svg>
                </button>
                <button onClick={next} className="text-ivory hover:text-stone-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
                </button>
            </div>
        </div>
        </div>
    );
};

export default Passport;