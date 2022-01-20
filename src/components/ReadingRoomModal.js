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
         
            <Col>
              <>
                <Image style={{width:"90px" , paddingLeft:"15px"}}src={book.poster} />
                <p>{book.title}</p>
                <button style={{marginLeft:"30px",alignItems:"center",width:"30"}} className={styles.btnoo} onClick={() => setbookShow(true)}>Read Book</button>
              </>
            </Col>
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
