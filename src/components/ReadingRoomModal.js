import { useEffect, useState } from "react"
import { Button, Col, Modal, Row, Image } from "react-bootstrap"
import ReadBookModal from "./ReadBookmodal"
import { axios } from "axios"
import styles from "./ReadingRoom.module.css"
function ReadingRoomModal(props) {
  const { show, setShow, room, book } = props
  const [bookShow, setbookShow] = useState(false)

  return (
    <>
      {/* <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body> */}
          <Row md="4">
            <Col>
              <>
                <Image style={{ width: "50%" }} src={book.poster} />
                <p>{book.title}</p>
                <Button onClick={() => setbookShow(true)}>Read Book</Button>
              </>
            </Col>
          </Row>
        {/* </Modal.Body> */}
      <ReadBookModal className={styles.Modal} bookShow={bookShow} setbookShow={setbookShow} book={book} />

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      {/* </Modal> */}

      {/* <ReadBookModal bookShow={bookShow} setbookShow={setbookShow} book={book} /> */}
    </>
  )
}

export default ReadingRoomModal
