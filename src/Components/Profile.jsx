import '../App.css'
import UserContext from '../Context/Context'
import { useContext } from 'react'
function Profile() {
    const {user} =useContext(UserContext)
    if (!user)  return <div> Please login </div>
    return <div>Welcom {user.username}</div>
}
export default Profile