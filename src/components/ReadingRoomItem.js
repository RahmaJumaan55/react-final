import { useState } from "react"
import ViewReadingRoom from "./ViewReadingRoom"
import styles from "./ReadingRoom.module.css"
import {Row,Col} from "react-bootstrap"
function ReadingRoomItem(props) {
  const { room } = props
  const [show, setShow] = useState(false)

  return (
    
    <div>
        <div className={styles.room} >
              <div className={styles.roomname}>
                <p>Room Name:{room.roomname}</p>
              </div>
              <div className={styles.roombtn}>
              <button  onClick={() => setShow(true)}>view room</button>
              </div>
        <ViewReadingRoom show={show} setShow={setShow} room={room} />
        </div>
        </div>
      
        
  )
} 
{/* <>
<Col md="8">
  <Row>
    <>
      <Card border="light" style={{ maxWidth: "200px" }}>
        <Card.Body>
          <Card.Title>{room.roomname}</Card.Title>
        </Card.Body>
        <Button onClick={() => setShow(true)}>view room</Button>
        <Bookreder bookpdf={book.bookpdf} />
      </Card>
    </>
  </Row>
  <ViewReadingRoom show={show} setShow={setShow} room={room} />
</Col>
</> */}
export default ReadingRoomItem
