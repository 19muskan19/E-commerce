import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import GithubCard from './Github/GithubCard'
import MyShop from './Github/MyShop/MyShop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Github/MyShop/Nav.css'
import { UserContext } from './Github/Context/UserContext'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';



import {NavLink, Outlet} from 'react-router-dom';
import { ThemeContext } from './Github/Context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  let {user}=useContext(UserContext)
  let {theme,setTheme}=useContext(ThemeContext)
  let bg={}

  if(theme=='dark'){
    bg={
      color:'black',
      backgroundColor:'white'
      
    }
  }
    else{
       bg={
      color:'white',
      backgroundColor:'black'
      
    }
    
  }

  return (
  <div style={bg}>

    <nav>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cart">Cart</NavLink>

      {
        theme=='light'? <DarkModeIcon onClick={()=>{setTheme('dark')}}></DarkModeIcon>:<LightModeIcon  style={{color:'white'}}onClick={()=>{setTheme('light')}}></LightModeIcon>
      }

      {
        user==null?<div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>:
      <div>
        <span style={{color:'white'}}>Welcome   {user}

<button>
  Logout
</button>
        </span>
      </div>
      }
    </nav>

    <Outlet/>

      {/* <GithubCard></GithubCard> */}
      {/* <MyShop/> */}
      </div>
  )
}

export default App
