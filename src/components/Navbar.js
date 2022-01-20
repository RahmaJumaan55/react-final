import styles from "./navbar.module.css"
import { useContext } from "react"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import Video from "./video"

function NavbarItem() {
  const { logout } = useContext(BooksContext)
  return (
    <>
    

    <Video />
    
		<div class={styles.header}>
			<ul>
        
        <li>
      <Link  to={"/"} >
            Home
            </Link>
          </li>	

          <li>
      <Link  to={"/Categories"} >
      Categories
            </Link>
          </li>	
        
          <li>
          <Link  to={"/ReadingRoom"}>
            Reading Room
            </Link>
          </li>
          
         
          {localStorage.tokenBooks ? (
        <>
          <li style={{marginLeft:"50%"}}>
            <Link to={"./Profile"}>Profile </Link>
          </li>
          <li>
            <Link to={"./Home"} onClick={logout}>
              Logout
            </Link>
          </li>
       </>
      ) : (
        <>
          <li style={{marginLeft:"50%"}}>
            <Link to={"/SignUp"}>Signup </Link>
          </li>
          <li>
            <Link to={"/Login"}>Login </Link>
          </li>
        </>
      )}
			</ul>
	
    </div>
    

  
    {/* <nav class={styles.stroke}>
    <ul>
    <li>
          <Link  to="/home" className={{textDecoration:"none"}}>
            <a href="#">Home</a>
            </Link>
          </li>
        
          <li>
          <Link  to="/sports" className={{textDecoration:"none"}}>
            <a href="#">Reading Room</a>
            </Link>
          </li>

          <li>
          <Link  to="/coachs" className={{textDecoration:"none"}}>
            <a href="#">Add Room</a>
            </Link>
          </li>
          
         >
          <li>
          <Link to="/signup" className={{textDecoration:"none"}}>
          <a href="#">SIGNUP</a>
               {localStorage.tokenPost ? (
             <>
          <li>
          <Link  to="/profile" className={{textDecoration:"none"}}>
            <a href="#">PROFILE</a>
            </Link>
          </li>

          <li>
          <Link  to="/home" onClick={logout} className={{textDecoration:"none"}}>
            <a href="#">LOGOUT</a>
            </Link>
          </li>
          </>
          ) : (
            <>
          <li>
          <Link  to="/login" className={{textDecoration:"none"}}>
            <a href="#">LOGIN</a>
            </Link>
          </li</Link>
          </li>
          </>
          )}
          </ul>
          </nav> */}
          </>
          
        
  )
}
export default NavbarItem
