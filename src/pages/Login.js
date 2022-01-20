import { useContext } from "react"
import BooksContext from "../utils/BooksContext"
import styles from "./Login.module.css"
import imgsign from "../assets/www.jpg"



function Login() {
  const { login } = useContext(BooksContext)
  return (
    <div  className={styles.Login}>
    <div className={styles.f1}>
      <h2 className={styles.head}>LOG IN!</h2>
      <form className={styles.Form} onSubmit={login}>
    
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />

        <label>Password:</label>
        <input type="password" name="password" required />
        <br />

        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
    <img
        className={styles.photo}
        src={imgsign}
      ></img>
  </div>
  )
}
export default Login
