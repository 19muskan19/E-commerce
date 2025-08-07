import React from 'react'
import { useState,useEffect } from 'react'
import './MyShop.css'
import Loading from './Loading'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'

function MyShop() {

    let [products, setproducts]=useState([])

    let[isloading,setloading]=useState([true])

    let[url, seturl]=useState("https://dummyjson.com/products")


    useEffect(()=>{
        fetch(url).then((res)=>{

        res.json().then((result)=>{

            console.log(result);

            setproducts(result.products)
            setloading(false)
        })
    }).catch((error)=>{
        console.log(error);
    })
    },[url])


    let{user}=useContext(UserContext)
    let{cart}=useContext(CartContext)

    function handleClick(product){


        if(user!=null){
            cart.push(product)
            alert("product is added to cart")
        }
        else{
            alert("please login first")
        }

    }
  return (
    <div>

        <h1>E-commerce Website</h1>
        <br /><br />

        <span>


        <button onClick={()=>{seturl("https://dummyjson.com/products/")}}>All</button>
        <button onClick={()=>{seturl("https://dummyjson.com/products/category/furniture")}}>Furniture</button>
        <button onClick={()=>{seturl("https://dummyjson.com/products/category/fragrances")}}>Perfumes</button>
        <button onClick={()=>{seturl("https://dummyjson.com/products/category/groceries")}}>Groceries</button>
        <button onClick={()=>{seturl("https://dummyjson.com/products/category/beauty")}}>Beauty</button>
        </span>
        <br />
    {
       isloading? <Loading/> : products.map((product)=>{
            return(
                <div className='div'>

                    <h1>{product.brand}</h1>
                    <h2>{product.description}</h2>
                    <p>Price $: {product.price}</p>
                    <img src={product.thumbnail} alt="" />


                    <button>
                        <Link to={`/details/${product.id}`}>
                        View Details</Link>
                    </button>

                    <button onClick={()=>{
                        {handleClick(product)}
                    }}>Add to cart

                    </button>
                    </div>
            )
        })


    }
    </div>
  )
}

export default MyShop