import logo from './logo.svg';
import './App.css';

import AllExhibits from './Pages/AllExhibits';
import SingleExhibit from './Pages/SingleExhibit';
import Form from './Pages/Form';
import NavbarComp from './Components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';


import {useState, useEffect} from "react"
import { Route, Routes, Link, useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate()
  const url = "https://online-zoo.herokuapp.com/animals/"

  const [animals, setAnimals] = useState([])

  const nullAnimal = {
    name: "",
    scientific_name: "",
    url: "",
    animal_class: "",
    lifespan: "",
    origin: "",
    fun_fact: ""
  }

  const [targetAnimal, setTargetAnimal] = useState(nullAnimal)

  const getAnimals = async () => {
    const response = await fetch(url);
    const data = await response.json()
    setAnimals(data)
  };

  const addAnimals = async (newAnimal) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    });
    getAnimals()
  };

  const getTargetAnimal = (animal) => {
    setTargetAnimal(animal)
    navigate("/edit")
  }

  const updateAnimal = async(animal) => {
    await fetch(url + animal.id, {
      method: "put",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(animal)
    });
    getAnimals();
  }

  const deleteAnimal = async (animal) => {
    await fetch(url + animal.id, {
      method: "delete"
    })

    getAnimals()
    navigate("/")
  }

  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <div className="App">
      <NavbarComp/>
      <h1>Welcome to the Online Zoo</h1>
      <Link to="/new"><button>Add an animal</button></Link>
      <Routes>
        <Route path="/" element={<AllExhibits animals={animals}/>}/>
        <Route path="/animals/:id" element={<SingleExhibit animals={animals} edit={getTargetAnimal} deleteAnimal={deleteAnimal}/>}/>
        <Route path="/new" element={<Form
          initialAnimal={nullAnimal}
          handleSubmit={addAnimals}
          buttonLabel="Create Animal"
          />}/>
        <Route path="/edit" element={<Form
          initialAnimal={targetAnimal}
          handleSubmit={updateAnimal}
          buttonLabel="Update Animal"
        />} />
      </Routes>
    </div>
  );
}

export default App;
