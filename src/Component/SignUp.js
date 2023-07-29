
import React, { useState } from "react";

import axios from "axios";

const SignUp = ()=>{

    const [user,setUser] = useState({
       username:"",
       email:"",
       password:""
    })

  //  async function handleSignup(e){
  //       e.preventDefault();
  //       try{
  //       const response = await axios.post("https://fakestoreapi.com/users/7",{username,email,password})
  //       console.log(response.data)
  //       }
  //       catch(error){
  //         console.log(error)
  //       }
  //   }

    return(
           <div>
            {/* <form >
            <input type="text" placeholder="name" value={user.name}
             onChange={(e)=> setUser({...user,username: e.target.value})}/>

            <input type="email" placeholder="email" value={user.email}
              onChange={(e)=> setUser({...user, email: e.target.value})}/>

            <input type="password" placeholder="password"  value={user.password}
             onChange={(e)=> setUser({...user, password: e.target.value})}/>
            
            <button type="submit"> Sign Up</button>
            </form>
             */}
             <h1>hello</h1>
           </div>
    )
}
export default SignUp