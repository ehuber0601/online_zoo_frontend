import React from "react";
import {Link, useParams} from "react-router-dom"

const SingleExhibit = ({animals, edit, deleteAnimal}) => {
    const params = useParams()
    const id = parseInt(params.id)

    const animal = animals.find((a) => a.id === id)
    console.log(animal)
    return <div className="animal">
    <img src={animal?.url} alt={animal?.name}/>
    <div className="descrpition">
    <h2>{animal?.name}</h2>
    <p><i>{animal?.scientific_name}</i></p>
    <p>Class: {animal?.class}</p>
    <p>Lifespan: {animal?.lifespan}</p>
    <p>Origin: {animal?.origin}</p>
    <p>Fun Fact: {animal?.fun_fact}</p>
    </div>
    <button onClick={() => edit(animal)}>Edit</button>
    <button onClick={() => deleteAnimal(animal)}>Delete</button>
    <Link to="/">
        <button>Go Back</button>
    </Link>
</div>    
}



export default SingleExhibit