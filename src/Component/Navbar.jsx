
import { NavLink } from 'react-router'
import { signOut } from "firebase/auth";
import { auth } from "../Services/Firebase";

function Navbar() {
    function LogOut(){
    signOut(auth)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })}
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
         <NavLink to="/Home">Home</NavLink>
         <NavLink to="/Products">Product</NavLink>
         <NavLink to="/login">Login</NavLink>
         <NavLink to="/AddProduct">AddProduct</NavLink>
         <button onClick={LogOut}> Log Out</button>
    </div>
  )
}

export default Navbar
