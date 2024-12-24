import { Link } from "react-router-dom"
const Pet = ({ pet }) => {
  return (
    <Link to={`/petlist/${pet._id}`}>
      <div className="pet-card">
        <h2>
          {pet.name}
        </h2>
      </div>
    </Link>
  )
}

export default Pet
