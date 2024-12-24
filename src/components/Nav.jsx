import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/petlist">Pet List</NavLink>
      <NavLink to="/new">New Pet</NavLink>
    </nav>
  )
}

export default NavBar
