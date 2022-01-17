import { useContext, useState } from "react"
import BooksContext from "../utils/BooksContext"
import { Card, Col, Row, Button } from "react-bootstrap"
import ViewReadingRoom from "../components/ViewReadingRoom"
import ReadingRoomItem from "../components/ReadingRoomItem"

function ReadingRoom() {
  const { profile} = useContext(BooksContext)
console.log(profile)
  return (
    <>
      <Col md="8">
        <Row>
          {profile?.rooms.map(room => (
            <ReadingRoomItem room={room} />
          ))}
        </Row>
      </Col>
    </>
  )
}

export default ReadingRoom
