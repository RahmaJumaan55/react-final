import { useContext } from "react"
import { Card, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./BookList.module.css"

function BookList(props) {
  const { listTitle, categoryType } = props
  const { books } = useContext(BooksContext)

  let booksCategory
  if (categoryType) {
    booksCategory = books.filter(book => book.category.find(category => category.name === categoryType))
  } else {
    booksCategory = books
  }
  // booksCategory = booksCategory.slice(0, 5)

  // const getbooksbyCategory = name => {
  //   console.log(book.filter(book => book.category.find(category => category.name === name)))
  // }

  return (
<>

      {/* <Row>
        <h4 className="mt-5 mb-4">{listTitle}</h4>
      </Row> */}
      <Row md="5" style={{ padding: "80px"  }}>
        
        {booksCategory.map(book => (
          <Col key={book._id}  style={{ padding: "20px"  }}>
            <Card style={{ maxWidth: "180px"  }}>
              <Link to={`/book/${book._id}`}>
                <Card.Img  src={book.poster} height="270px"  />
              </Link>
              {/* <Card.Body>
                <Link to={`/book/${book._id}`} className="text-black" style={{ textDecoration: "none" }}></Link>
              </Card.Body> */}
            </Card>
          </Col>
        ))}
      </Row> 
      </>
  //     <div class={styles.container}>
  //     <div class={styles.mobilelayout}>
  //     <div class={styles.notification}>
  //     </div>
  //     <div class={styles.bookcover}>
  //         <img class={styles.booktop} src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-top.svg" alt="book-top" />
  //       <img class={styles.bookside} src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg" alt="book-side" /> 
  //     </div>
  //     <div class={styles.preface}>
  //       <div class={styles.content}>
  //         <div class={styles.header}>
  //           <div class={styles.title}>The Diary of a Young Girl</div>
  //         </div>
  //         <div class={styles.author}>by Anne Frank</div>
  //         <div class={styles.body}>
  //           <p>
  //             also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands
  //           </p>
  //           <p>
  //             Anne calls her diary "Kitty", so almost all of the letters are written to Kitty. 
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default BookList
