import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../globals"
const PetUpdateForm = ({ pets, setPets }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const pet = pets.find(pet => pet._id === id)
  if (!pet) {
    return <p>No pet found</p>
  }
  const [formValues, setFormValues] = useState(pet)
  const handleSubmit = async event => {
    event.preventDefault()
    const response = await axios.put(`${BASE_URL}/pets/${id}`, formValues)
    setPets(
      pets.map(pet => {
        if (pet._id === id) {
          return response.data
        }
        return pet
      })
    )
    navigate(`/petlist/${id}`)
  }
  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value })
  }
  return (
    <div>
      <h1>
        Edit: {pet.name}
      </h1>
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

export default PetUpdateForm
