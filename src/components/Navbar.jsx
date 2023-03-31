import { Link } from "react-router-dom"
import "./Navbar.css"
import { useSelector } from "react-redux";

export const Navbar = ()=>{
  const CompletedSignup = useSelector((state)=> state.signup.hasCompletedSignup)

  return (
  <div className="navbar">
      <Link to="/login">Login </Link>
      {CompletedSignup && <Link to="/">Profile </Link>}
  </div>
  )
}

