import { Card, Col, Image } from "react-bootstrap"
import AddToFav from "./AddToFav"

function bookItem(props) {
  const { book } = props

  return (
    <Col md="2">
    
        <Image src={book.poster} width="130px" />
         
           {/* <p>{book.title}</p>  */}
          <AddToFav bookId={book._id}/>
    </Col>
  )
}

export default bookItem
