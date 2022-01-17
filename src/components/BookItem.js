import { Card, Col, Image } from "react-bootstrap"
import AddToFav from "./AddToFav"

function bookItem(props) {
  const { book } = props

  return (
    <Col md="2">
      <Card border="light" style={{ maxWidth: "200px" }}>
        <Card.Body>
          <Card.Text className="text-muted">
            {book.title}
            <Image src={book.poster} width="80px" />
          </Card.Text>
          <AddToFav bookId={book._id}/>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default bookItem
