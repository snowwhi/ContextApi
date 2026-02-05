import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
   <div>
   <h1 className='font-bold'>Test Context api</h1>
   <Login/>
   <Profile/>
   </div>
   </UserContextProvider>
  )
}

export default App
