import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
function Login()
{
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const handlesumbit=()=>{
        return(<Navigate to="/forgotpassword"/>)
    }
    const handlechangeusername=(e)=>{
        console.log(e.target.value)
        setusername(e.target.value)
    }
    return(<>
    

    <h2>Login</h2>
    <form>
        <label>
            username
        </label>
        <input type="text"onChange={handlechangeusername}></input>
        <label>
            Password
        </label>
        <input type="password"/> 
    
    </form>
    <button type="submit" className="btn btn-primary btn-block">
        Log in
    </button>
    <button onClick={handlesumbit}>
    
        forgot password
    </button> 

    </>)






}
export default Login