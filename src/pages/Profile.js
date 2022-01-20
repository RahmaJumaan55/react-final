import { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import AddToFav from "../components/AddToFav"
import BookItem from "../components/BookItem"
import EditProfile from "../components/EditProfile"
import BooksContext from "../utils/BooksContext"
import styles from "./Profile.module.css"
import {FaEdit} from "react-icons/fa"


function Profile() {
  const [editShow, setEditShow] = useState(false)
  const { profile } = useContext(BooksContext)
  if (profile.length === 0) return <h1>Loading</h1>
  console.log(profile.likes)

  return (
    <div>
      <Container >
        {/* <Row
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        > */}
          <Col md="4">
            <img  src={profile.avatar} className={styles.avatar}  />
          </Col>
          <Col>
            <div className={styles.name}>
              {profile.firstName} {profile.lastName}
            </div>

            <p className={styles.email}>{profile.email}</p>
          </Col>
        {/* </Row> */}
        <button onClick={() => setEditShow(true)} className={styles.btn}>  Edit  <FaEdit/></button>
        <Row className="mt-5">
          <h3 className={styles.h3}>Favourite books</h3>
          {profile.likes.map(book => (
            <BookItem book={book} key={book._id} />
          ))}
        </Row>
      </Container>
      <EditProfile show={editShow} setShow={setEditShow} profile={profile} />
    </div>
  )
}

export default Profile
