import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { reducer } from './Reducers'
let info=createContext()
function Context({children}) {
    const [items,setItems]=useState([])
    useEffect(()=>{
          fetch("http://localhost:3000/products").then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2)
                setItems(res2)
            })
          })        
                
    },[])
    console.log(items)
    const [state,dispatch]=useReducer(reducer,{
        items:items,
        cart:[]
    })
  return (
    
    <div>
        <info.Provider value={{state,dispatch}}>
            {children}
        </info.Provider>
    </div>
  )
}

export default Context
export const cartState=()=>{
    return useContext(info)
}