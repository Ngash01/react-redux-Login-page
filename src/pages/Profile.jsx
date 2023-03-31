import { useSelector } from "react-redux"
import './Profile.css'
import { logout } from "../features/user"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


export const Profile = ()=>{
  
  const name = useSelector((state)=> state.user.value.username);
  const age = useSelector((state)=> state.user.value.age);
  const email = useSelector((state)=> state.user.value.email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return <div className="profile">
      <h2>WELCOME BACK TO YOUR PROFILE</h2>
      <p>Your Name is: <span style={{color: "blue"}}>{name}</span></p>
      <p>You are <span style={{color: "blue"}}>{age}</span> years old </p>
      <p>And this is your Email address: <span style={{color: "blue"}}>{email}</span> </p>
      <button className="logout_button" onClick={()=> {
         dispatch(logout())
         navigate('/login')}}
         >logout
          </button>
  </div>
}









