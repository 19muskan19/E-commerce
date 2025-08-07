import React, { useEffect, useState } from 'react'

import { useNavigate, useParams} from 'react-router-dom';

function ProductDetails() {


    let [product, setproduct]=useState([])

    let{id}=useParams()

    useEffect(()=>{

         
                fetch(`https://dummyjson.com/products/${id}`).then((res)=>{
        
                res.json().then((result)=>{
        
                    console.log(result);
        
                    setproduct(result)
                   
                })
    })
},[id])

let navigate=useNavigate();
function handleClick(){
  navigate('/')
}

  return (
    <div>
        
        <button className='btn btn-primary' onClick={handleClick}> Back</button> <br /><br />
        <img src={product.thumbnail} alt="" />
         <h1>{product.brand}</h1>
         <h2>{product.description}</h2>
         <p>Price $: {product.price}</p>
         <p>Category :{product.category}</p>
         <p>Rating: {product.rating}</p>
         <p>Stock: {product.stock}</p>
         <p>Availability: {product.availabilityStatus}</p>
         <p>Warranty Information: {product.warrantyInformation}</p>
         <p>Return Policy: {product.returnPolicy}</p>
         
                    
    </div>
  )
}

export default ProductDetails