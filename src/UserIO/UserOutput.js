import React from 'react'

const UserOutput = (props) => {
    return (
        <div>
            <p>Hello! I am from Userinput</p>
            <p>My name is {props.username}</p>
        </div>
    );
}

export default UserOutput;