import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const PetDetails = ({ pets }) => {
  const { id } = useParams()
  let navigate = useNavigate()

  const [pet, setPet] = useState(null)

  useEffect(() => {
    const getPet = () => {
      const singlePet = pets.find((pet) => {
        return pet._id === id
      })
      setPet(singlePet)
    }
    getPet()
  }, [])

  return (
    <div>
      {pet ? (
        <>
          <h1>Pet Details</h1>
          <section className="pet-details">
            <h2>{pet.name}</h2>
            <h3>{pet.breed}</h3>
            <h3>{pet.age} years old</h3>
            {pet.image ? <img src={pet.image} alt={pet.name} /> : null}
            <button onClick={()=> navigate(`/update/${pet._id}`)}>Update Pet </button>
          </section>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default PetDetails