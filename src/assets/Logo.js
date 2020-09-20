import React from 'react';
import logo from './logo.svg';

const Logo = (props) => {
    return (
        <div className={props.className}>
            <img src={logo} alt='Symforch logo' className={props.className}/>
        </div>
    );
}

export default Logo;