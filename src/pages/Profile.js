import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import AddToFav from "../components/AddToFav"
import BookItem from "../components/BookItem"
import EditProfile from "../components/EditProfile"
import BooksContext from "../utils/BooksContext"

function Profile() {
  const [editShow, setEditShow] = useState(false)
  const { profile } = useContext(BooksContext)
  if (profile.length === 0) return <h1>Loading</h1>
  console.log(profile.likes)

  return (
    <>
      <Container>
        <Row
          style={{
            // backgroundColor: `rgba(50,12,240, 0.3)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col md="4">
            <img variant="top" src={profile.avatar} width="50%" style={{ borderRadius: "10px", margin: "20px" }} />
          </Col>
          <Col>
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>

            <p>{profile.email}</p>
          </Col>
        </Row>
        <Button onClick={() => setEditShow(true)}>Edit</Button>
        <Row className="mt-5">
          <h3>Favourite books</h3>
          {profile.likes.map(book => (
            <BookItem book={book} key={book._id} />
          ))}
        </Row>
      </Container>
      <EditProfile show={editShow} setShow={setEditShow} profile={profile} />
    </>
  )
}

export default Profile
