import React from "react";
import { Link } from "react-router-dom";

const Exhibit = ({animal}) => {
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%"
    }

    return <div style={div} className="exhibit">
        <h1>{animal.name}</h1>
        <Link to={`/animals/${animal.id}`}>
            <img src={animal.url} alt={animal.name}/>
        </Link>
    </div>
}

export default Exhibit