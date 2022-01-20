import { useEffect, useState } from "react"
import { Button, Col, Modal, Row, Image } from "react-bootstrap"
import ReadBookModal from "./ReadBookmodal"
import { axios } from "axios"
import ReadingRoom from "../pages/ReadingRoom"
import ReadingRoomModal from "./ReadingRoomModal"
import styles from "./ReadingRoom.module.css"

function ViewReadingRoom(props) {
  const { show, setShow, room } = props

  return (
    <Modal size="xl" className={styles.modal2} show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> {room.roomname}</Modal.Title>
      </Modal.Header>
      <Row>
        {room.books.map(book => (
          <Col>
          
              <ReadingRoomModal book={book} show={show} setShow={setShow} room={room} />
           
          </Col>
        ))}
      </Row>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ViewReadingRoom
