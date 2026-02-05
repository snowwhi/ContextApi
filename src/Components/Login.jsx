import { useContext, useState } from 'react'
import '../App.css'
import UserContext from '../Context/Context'
function Login() {
    const HandleSubmit =(e)=>{
        
        console.log('i am being pressed')
        setUser({username,userpassword})
    }
    const [username, SetUsername] =useState('')
    const [userpassword, SetUserpassword] =useState('')
    const {setUser} = useContext(UserContext)
    return(<>

    <div>
        <h1>Login</h1>
        <input type="text" 
        placeholder='UserName' 
        value={username} 
        onChange={(e)=>SetUsername(e.target.value)}/>
        <input type="password"
         placeholder='#####' 
         value={userpassword} 
         onChange={(e) =>SetUserpassword(e.target.value)}
     />
       <button onClick={HandleSubmit} >Submit </button>
    </div>
    </>)
}
export default Login