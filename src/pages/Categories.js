import {  Col, Container, Row } from "react-bootstrap"
import BookList from "../components/BookList"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import styles from "./home.module.css"
import Footer from "../components/Footer"

function Categories() {
  const [Book, setBook] = useState("")
  const [Categories, setCategories] = useState([])
  const booksRef = useRef()
  useEffect(async () => {
    const responseCategories = await axios.get("http://localhost:5000/api/categories")
    setCategories(responseCategories.data)
  }, [])

  return (
    <>
      <h2 className={styles.h2}>Reading by categories</h2>
        <Row  className={styles.allbtn}>
        {Categories.map(Category => (
          <button onClick={e => {
            setBook(e.target.value)
            booksRef.current.scrollIntoView({behavior:"smooth"})
            }} value={Category.name}  className={styles.button}>
            {Category.name}
          </button>
        ))}
         </Row>
        <Col className={styles.book} >

          <div ref={booksRef}>
          <BookList listTitle={Book} categoryType={Book} />
          </div>
        </Col>
      <Footer />
    </>
  )
}
export default Categories