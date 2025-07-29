import React from 'react'
import Person from './components/Person'
import Mobile from './components/Mobile'
import Counter from './components/Counter'
import Map from './components/Map'
import Filter from './components/Filter'
import UseEffect from './components/UseEffect'
import FetchdataFromAPI from './components/FetchdataFromAPI'
import HandleForm from './components/HandleForm'

const Render = () => {
    const handleClick = () => {
        alert("Button was Clicked..!")
    };

    return (
        <div>
            <>
                {/* <Person name="Ram" age={200}/>
    <Person name="Sham" age={100}/>
    <Person name="Aam" age={150}/>

    <button onMouseOver={handleClick}>click me</button> */}

                {/* <Counter/> */}

                {/* <Map/> */}
                {/* <Filter/> */}
                {/* <UseEffect/> */}
                {/* <FetchdataFromAPI/> */}
                {/* <HandleForm/> */}
            </>
        </div>
    )
}

export default Render
