import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import styles from "./Showcase.module.css"
import {BiSearchAlt2} from "react-icons/bi"
import BooksContext from "../utils/BooksContext"
import bannerImage from "../assets/2.jpg"
import {BsSearch} from "react-icons/bs"




function Showcase() {
  const { books, bookSearch } = useContext(BooksContext)

  return (
    <>
    
     <Row >
       
      <Col>
        <Form className="mt-9" onSubmit={bookSearch}>
    
          <Row>
            <Col
        style={{
          backgroundImage: `url("${bannerImage}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          height:460,
          paddingBottom:188,
          flexDirection: "column",
          justifyContent: "center",
          marginLeft:99,
          marginTop:30,
        }}
      >
              
          {/* <h1 class={styles.text} >Welcome</h1> */}
          <h4 class={styles.booktext}>The <span className={styles.span1}>Book</span> you should read is not the <span className={styles.span1}>Book</span> that thinks about you  but the book that makes you think .</h4>
        
    
       
      </Col>
      
      <Col md="4" className={styles.searcht} >
              <Form.Group>
                <Form.Control  name="bookSearch" className={styles.search}  list="bookSearch" type="search" placeholder="Search for a book" />
              </Form.Group>
              <datalist id="bookSearch">
                {books.map(book => (
                  <option value={book.title} />
                ))}
              </datalist>
            </Col>


            <Col className={styles.searchbt}>
              <button type="submit"  className={styles.btnS} >
                <BsSearch/>
              </button>
            </Col>

          </Row>
        </Form>
      </Col>
    
    </Row> 
    


 </>
  )
}
export default Showcase


