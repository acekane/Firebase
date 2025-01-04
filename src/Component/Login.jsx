import './style.css'
import GoogleButton from 'react-google-button'
import { auth,provider } from '../Services/Firebase'
import { signInWithPopup } from 'firebase/auth'


function Login() {

  function LoginWithEmail(){
    signInWithPopup(auth, provider)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
        <GoogleButton style={{marginTop:"10px",textAlign:"center" ,marginLeft:"10px"}}  onClick={LoginWithEmail}/>
    </div>
  )
}

export default Login
