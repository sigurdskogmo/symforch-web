import React from 'react';

const Img = (props) => {
    return(
        <div>
            <img src={props.source} alt={props.alt} className={props.className}/>
        </div>
    );
}

export default Img;