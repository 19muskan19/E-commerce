import React, {useContext} from 'react'
import { useRef } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  let name=useRef()
  let email= useRef()
  let password= useRef()

     let{user,setuser}=useContext(UserContext)
     let navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    console.log(name.current.value)
    console.log(email.current.value)
    console.log(password.current.value)
7
setuser(name.current.value)

navigate("/")
reset()

   
  }

  return (
    <div className='form' >

        <h1>Login Form</h1>
        
<form onSubmit={handleSubmit}>



    <input type="text" ref={name} placeholder="enter your name"/>
   
    <br />
    <br />

    <input type="email" ref={email} placeholder="enter your email"/>
    <br />
    <br />
    <input type="password" ref={password} placeholder="enter your password"/>
    <br />
 
<br />
    <button>Submit</button>
</form>

    </div>
  )
}

export default Login