import { useContext } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function AddComment(prpos) {
  const { addComment } = useContext(BooksContext)
  const { bookId } = prpos
  return (
    <div className="ms-4">
      <h1>Add Comment</h1>
      <Form className="mt-5" onSubmit={e => addComment(e, bookId)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Comment
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="comment" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddComment
