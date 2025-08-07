import React from 'react'
import './Github.css'
import testdata from './testdata.json';
import { useState } from 'react';
import { useRef } from 'react';

function GithubCard() {
     let [users,SetUsers]=useState(testdata)
        let search=useRef()

    function SearchUser(){

        let name=search.current.value

        console.log(name);
        let filtereddata= testdata.filter((user)=>{

            return user.login.toLowerCase().includes(name.toLowerCase())

        })


       SetUsers(filtereddata)


    }

    
  return (

    
    <>
    <h1>GithubCards</h1>

                <input type="text" placeholder="Seach users by name" ref={search} />

                <button  onClick={SearchUser}   className='searchbtn'>
                    Search
                </button>
<br /><br />{

        users.map((user)=>{

            return(
                <>

                
                <div key={user.id} className='div'>

                    <h2>{user.id}</h2>
                    <p>{user.login}</p>
                    <img src={user.avatar_url} alt="" />
                    <br/><br/>
                    <button className='btn'> <a href={user.html_url}>View Details</a></button>

                </div>
</>
            )

        })
    }
    
    
    </>
  )
}

export default GithubCard