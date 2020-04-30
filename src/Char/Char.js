import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        border: '1px solid #eee',
        boxShadow: '2px 2px',
    }

    return (
        <div className="char" style={style} onClick={props.remove}>
            {props.character}
        </div>
    );
}
export default Char;