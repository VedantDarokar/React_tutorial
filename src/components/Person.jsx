import React from 'react'

const Person = ({ name, age, salary }) => {


    //Inline 
    //Internal
    //external
    const my_style = {
        backgroundColor: 'Blue',
        padding: '10px',
        margin: '10px',
        borderRadius: '15px',
        border: '2px solid yellow'
    };

    return (
        <div style={my_style}>
            <h1>Name :- {name}</h1>
            <h2>Age :- {age}</h2>
 
        </div>
    )
}

export default Person
