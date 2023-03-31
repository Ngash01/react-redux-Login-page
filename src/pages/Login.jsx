import { useState } from "react"
import { useDispatch} from "react-redux"
import { login } from "../features/user";
import './Login.css';
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { completeSignup } from "../features/signup";


export const Login = ()=>{
  const [newUsername, setnewUsername] = useState("")
  const [newage, setnewage] = useState("")
  const [newEmail, setnewEmail] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  // const username = useSelector((state)=> state.user.value.username) 
  // const age1 = useSelector((state)=> state.user.value.age)
  // const myemail = useSelector((state=> state.user.value.email))

  // FORMS
 
  const OnSubmit = (data)=>{
    console.log(data)
    dispatch(completeSignup())
   dispatch(login(data))
    navigate('/')
  }

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).required("You must specify an age"),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null],"passwords don't match").required()

  })

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })


  return  <div className = "Box">
  <div className="Container">
    <h1>LOGIN PAGE</h1>
    <h3>Please fill in your details to continue</h3>

      <form>
      <p style={{marginLeft:"10px"}}>Name: <input onChange={(e)=> setnewUsername(e.target.value)} {...register("username")}/></p>
      <p style={{color: "red"}}>{errors.username?.message}</p>
      <p style={{marginLeft:"25px"}}>Age: <input onChange={(e)=> setnewage(e.target.value)} type="Number" {...register("age")}/></p>
      <p style={{color: "red"}}>{errors.age?.message}</p>
      <p style={{marginLeft:"16px"}}>Email:  <input onChange={(e)=> setnewEmail(e.target.value)} {...register("email")}/> </p>
      <p style={{color: "red"}}>{errors.email?.message}</p>
      <p style={{marginLeft:"-20px"}}>password: <input {...register("password")}/> </p>
      <p style={{color: "red"}}>{errors.password?.message}</p>
      <p style={{marginLeft:"-100px"}}>confirm password: <input {...register("confirmPassword")}/> </p>
      <p style={{color: "red"}}>{errors.confirmPassword?.message}</p>


      <button className="login_button"
      type="submit"
       onClick={(e)=> {
        // navigate('/')
        e.preventDefault();
        handleSubmit(OnSubmit)()}
      }>Login</button>
      </form>
  </div>
  </div>
}



