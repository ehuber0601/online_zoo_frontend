import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialAnimal, handleSubmit, buttonLabel}) => {
    const navigate = useNavigate()
    
    // The Form State
    const [formData, setFormData] = useState(initialAnimal)

    // Handle Change to Update State when Input changes
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // HandleSubmit for when the form submitted
    const handleSubmission = (event) => {
        // prevent the page from refresh
        event.preventDefault()
        // pass the formData to the handleSubmit function passes as props
        handleSubmit(formData)
        // push user back to main page
        navigate("/")

    }

    return <form onSubmit={handleSubmission}>
        Name: <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            name="name"/> 
         Scientific Name: <input
            type="text"
            onChange={handleChange}
            value={formData.scientific_name}
            name="scientific_name"
            />
        Url: <input
            type="text"
            onChange={handleChange}
            value={formData.url}
            name="url"
            />
        Class: <input
            type="text"
            onChange={handleChange}
            value={formData.class}
            name="class"
            />
        Lifespan: <input
            type="text"
            onChange={handleChange}
            value={formData.lifespan}
            name="lifespan"
            />
        Origin: <input
            type="text"
            onChange={handleChange}
            value={formData.origin}
            name="origin"
            />
        Fun Fact: <input
            type="text"
            onChange={handleChange}
            value={formData.fun_fact}
            name="fun_fact"
            />
            <input type="submit" value={buttonLabel}/>
    </form>
};

export default Form;