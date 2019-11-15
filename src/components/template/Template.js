import React from 'react';
import Navbar from "./Navbar";

const Template = (props) => {
    return (
        <div>
            <Navbar lang={props.lang}   lang_ok={props.lang_ok}/>
            {props.children}
        </div>
    );
};

export default Template;
