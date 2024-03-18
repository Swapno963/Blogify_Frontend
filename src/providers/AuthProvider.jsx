/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { AuthContext } from "../context"
import { json } from "react-router-dom"

export default function AuthProvider({children}) {
    const [auth, setAuth] = useState(() => {
      const savedData = localStorage.getItem('myData');
      return savedData ? JSON.parse(savedData) : [];
    })
    

    const updateData = newData =>{
      setAuth(newData)
      localStorage.setItem("myData",JSON.stringify(newData))
    }

  return (
    <AuthContext.Provider value={{auth,updateData}}>
        {children}
    </AuthContext.Provider>
  )
}
