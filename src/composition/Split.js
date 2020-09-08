import React from 'react';
import './Split.css';


function Split(props) {
    let combinedClassName = `split ${props.className}`;
    let newStyles = { flex: props.flexBasic };
    return (
        <div className={combinedClassName} style={newStyles} >
            {props.children}
        </div>
    );
}

export default Split;