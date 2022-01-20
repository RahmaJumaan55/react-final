import { useContext, useState } from "react"
import BooksContext from "../utils/BooksContext"
import { Card, Col, Row, Button } from "react-bootstrap"
import ViewReadingRoom from "../components/ViewReadingRoom"
import ReadingRoomItem from "../components/ReadingRoomItem"
import Footer from "../components/Footer"

function ReadingRoom() {
  const { profile} = useContext(BooksContext)
console.log(profile)
  return (
    <>
      {/* <Col md="8"> */}
        <Row md={3}>
          {profile?.rooms.map(room => (
            <ReadingRoomItem room={room} />
          ))}
        </Row>
      {/* </Col> */}
      <Footer />
    </>
  )
}

export default ReadingRoom
