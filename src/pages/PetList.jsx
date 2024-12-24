import Pet from "../components/Pet"

const PetList = ({ pets }) => {
  
  return (
    <div>
      <h1>Pet List</h1>
      <section className="pet-list">
        {pets?.map((pet) => (
          <Pet pet={pet} key={pet._id} />
        ))}
      </section>
    </div>
  )
}

export default PetList