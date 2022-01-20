import { useContext } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"
import styles from "./Signup.module.css"
import imgsign from "../assets/www.jpg"
// import bannerImage from "../assets/www.jpg"

function SignUp() {
  const { signup } = useContext(BooksContext)
  return (
    <div  className={styles.SignUp}>
    <div className={styles.f1}>
      <h2 className={styles.head}>SIGN UP!</h2>
      <form className={styles.Form} onSubmit={signup}>
        <label>First Name:</label>
        <input type="text" name="firstName" placeholder="Your first name.." required />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastName" placeholder="Your last name.." required />
        <br />

        <label>Email:</label>
        <input type="email" name="email" required />
        <br />

        <label>Password:</label>
        <input type="password" name="password" required />
        <br />

        <label>Avatar:</label>
        <input type="url" name="avatar" required />
        <br />

        <button className={styles.button} type="submit">
          Sign Up
        </button>
  
      </form>
    </div>
    <img
        className={styles.photo}
        src={imgsign}
      ></img>
    {/* <img
        className={styles.photo}
        src={imgsign}
      /> */}
  </div>

  
  )
}

export default SignUp
