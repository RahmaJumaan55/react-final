import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Showcase from "../components/Showcase"
import AddRoom from "../components/AddRoom"
import BooksContext from "../utils/BooksContext"
import bookItem from "../components/BookItem"
import OneBook from "./OneBook"
import BookList from "../components/BookList"
import styles from "./home.module.css"
import {BsDoorClosed} from "react-icons/bs"
import Footer from "../components/Footer"
// import bannerImage from "../assets/reffff.jpg"

function Home(props) {
  const [AddRoomShow, setAddShow] = useState(false)
  const {  setShow,show } = props

  return (
    <>
     <button className="me-2" className={styles.buttonadd}  onClick={() => setAddShow(true)}>
       Add Room <BsDoorClosed/> </button>
         <Showcase />
      <AddRoom show={AddRoomShow} setShow={setAddShow} AddRoom={AddRoom}  />
      <h2>All Books</h2>
            <BookList  />
            <Footer />
            {/* <Row
        style={{
          backgroundImage: `url("${bannerImage}")`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          display: "flex",
          height:800,
          width:800,

          paddingBottom:188,
          flexDirection: "column",
          justifyContent: "center",
          marginLeft:99,
          marginTop:30,
        }}
      >
        </Row> */}
       
    </>
  )
}
export default Home