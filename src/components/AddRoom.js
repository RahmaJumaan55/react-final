import { useContext } from "react"
import { Button, Form, Modal, Col, Row, Image } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function AddRoom(props) {
  const { show, setShow, AddRoom } = props
  const { addRoom, books } = useContext(BooksContext)

  return (
    <Modal size="lg"  show={show} onHide={() => setShow(false)}>
      <Form style={{backgroundColor:"white"}}  className="mt-5" onSubmit={e => addRoom(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Creat Reading Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Room Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="roomname" defaultValue={AddRoom.roomname} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Books
            </Form.Label>
           <Row>
              {books.map(book => (
                <Col md="3">
                  <Col style={{ padding: "10%" }} >
                    <Form.Check type="checkbox" name="books" value={book._id} />
                    <Image style={{ width: "70%" }} src={book.poster} />
                    <p>{book.title}</p>
                  </Col>
                </Col>
              ))}
            </Row>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="secondary" type="submit" onClick={() => setShow(false)}>
            Creat Room
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddRoom
