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
    <Modal className={styles.modal2} size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> {room.roomname}</Modal.Title>
      </Modal.Header>

      {room.books.map(book => (
        <ReadingRoomModal book={book} show={show} setShow={setShow} room={room} />
      ))}

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ViewReadingRoom
