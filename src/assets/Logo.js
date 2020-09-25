import React from 'react';
import logo from './logo.svg';
import logo_orig from './logo_original.svg';

const Logo = (props) => {
    return (
        <div className={props.className}>
            <img src={props.version === 'original' ? logo_orig : logo} alt='Symforch logo' className={props.className}/>
        </div>
    );
}

export default Logo;