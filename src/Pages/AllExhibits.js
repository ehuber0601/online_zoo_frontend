import React from "react";
import Exhibit from "../Components/Exhibit";

const AllExhibits = (props) => {
    return props.animals.map((animal) => {
        return <Exhibit key={animal.id} animal={animal}/>
    })
}

export default AllExhibits