import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
import MyShop from './Github/MyShop/MyShop.jsx'
import About from './Github/MyShop/About.jsx'
import Contact from './Github/MyShop/Contact.jsx'
import ProductDetails from './Github/MyShop/ProductDetails.jsx'
import ErrorPage from './Github/MyShop/ErrorPage.jsx'
import Register from './Github/MyShop/Register.jsx'
import Login from  './Github/MyShop/Login.jsx'
import UserProvider from './Github/Context/UserContext.jsx'
import CartProvider from './Github/Context/CartContext.jsx'
import Cart from './Github/MyShop/Cart.jsx'
import ThemeProvider from './Github/Context/ThemeContext.jsx'



// when we want to display two components we use index:true.
// always give path = 'parentpath'+ '/'
let router=createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    children:[
      {
        // path:'/products',
        index:true,
        element:<MyShop/>
      },
      {
         path:'/about',
        element:<About/>

      }, {
        path:'/contact',
        element:<Contact/>
      },
      {
         path:'/login',
        element:<Login/>

      }, {
        path:'/register',
        element:<Register/>
      },

      {
        path:'/details/:id',
        element:<ProductDetails/>

      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'*',
        element:<ErrorPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
<ThemeProvider>
   <CartProvider>
  <UserProvider>
  <RouterProvider router={router}>

 </RouterProvider>
 </UserProvider>
 </CartProvider>
</ThemeProvider>
)
