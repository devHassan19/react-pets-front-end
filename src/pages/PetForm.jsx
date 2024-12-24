import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../globals"

const PetForm = ({ pets, setPets }) => {
  let navigate = useNavigate()

  let initialState = {
    name: "",
    breed: "",
    age: "",
    image: ""
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await axios.post(`${BASE_URL}/pets`, formValues)
    setPets([...pets, response.data])
    setFormValues(initialState)
    navigate("/petlist")
  }

  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <h1>New Pet</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formValues.name}
        />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          onChange={handleChange}
          value={formValues.breed}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          onChange={handleChange}
          value={formValues.age}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formValues.image}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PetForm
