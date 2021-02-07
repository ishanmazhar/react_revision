import React from 'react';

let Person = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Name: {props.name} and Age: {props.age} years </h3>
            <h4>Extra Info: {props.children}</h4>
        </div>
    );
}
export default Person; 