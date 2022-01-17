import { useContext } from "react"
import { Button, Form, Modal, Col, Row } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function EditProfile(props) {
  const { show, setShow, profile } = props
  const { editProfile } = useContext(BooksContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProfile(e,profile._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" defaultValue={profile.firstName} />
            </Col>
            <Form.Label column md="3">
              Last Name:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={profile.lastName} />
            </Col>
            <Form.Label column md="3">
              Password:
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" defaultValue={profile.password} />
            </Col>
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>avatar</Form.Label>
            <Form.Control type="text" name="avatar" defaultValue={profile.avatar} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default EditProfile
