import React, { Children } from 'react';


const Button = (props) => {
    return (
        <button className='keyboard_button'>
            { props.children }
        </button>
    );
}

export default Button;
