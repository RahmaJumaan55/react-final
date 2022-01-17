import { Button, Container, Row } from "react-bootstrap"
import BookList from "../components/BookList"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./home.module.css"


function Categories() {
  const [Book, setBook] = useState("")
  const [Categories, setCategories] = useState([])
  useEffect(async () => {
    const responseCategories = await axios.get("http://localhost:5000/api/categories")
    setCategories(responseCategories.data)
  }, [])

  return (
    <>
       <Container>
        {Categories.map(Category => (
          <button onClick={e => setBook(e.target.value)} value={Category.name}  className={styles.button}>
            {Category.name}
          </button>
        ))}
        <Row>
          <BookList listTitle={Book} categoryType={Book} />
        </Row>
      </Container>
    </>
  )
}
export default Categories