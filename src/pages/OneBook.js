import { useContext, useState } from "react"
import { Col, Row, Card, Image, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import AddComment from "../components/AddComment"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { ReactReader } from "react-reader"
import image1 from "../assets/rt.jpg"
function OneBook(props) {
  const {comment} = props
  const { bookId } = useParams()
  const { books, likeBook, saveFile, profile,deleteComment } = useContext(BooksContext)

  const book = books.find(book => book._id === bookId)
  if (!book) return <h1>loading</h1>
  console.log(book.comments)
  const liked = book.likes.includes(profile?._id)
  console.log(book.likes)
  return (
    <>
      <Row
        style={{
          backgroundPosition: "center",
          backgroundImage:`url(${image1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          height:"750px",
          // width:"500px",
          alignItem: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <Link to={`/book/${bookId}`}>
            <img variant="top" src={book.poster} width="50%" style={{ borderRadius: "10px", marginLeft: "130px",marginTop:"224px" }} />
          </Link>
          
        </Col>
        <Col md={{ offset: 2 }}>
          <h1>{book.title}</h1>

          <h3>Overview</h3>
          <p style={{color:"black", paddingRight:"200px",textAlign:"center",marginTop:"210px" }}>{book.description}</p>
          {/* <Bookreder bookpdf={book.bookpdf} /> */}
          {/* <a href={book.bookpdf}>read</a>
            {/* <div style={{ height: "100vh" }}> */}
          {/* <ReactReader location={location} locationChanged={locationChanged} url={book.bookpdf} /> */}

          {/* <button onClick={saveFile}>download</button> */}
          {/* </div> */}

          {/* <button onClick={() => saveAs(item.title)}>Download</button> */}

          <Col>
            <Button variant="dark" className="ms-3" onClick={() => likeBook(book._id)}>
              {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
            </Button>
            {/* <span style={{color:"black"}}>{book.likes.length}</span> */}
          </Col>
         
        </Col>
      </Row>
      {localStorage.tokenBooks ? (
        <>
          <Row className="mt-5" style={{marginBottom:"30px"}}>
            <h3 style={{ marginLeft:"60px",paddingTop:"0px" }}>Comments</h3>
            {book.comments.map(comment => (
              <Card style={{ margin: 20, maxWidth: 600, borderColor:"black"}}>
                <Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md="1">
                      <Image src={comment.owner?.avatar} style={{width:"80px",paddingTop:"30px"}} roundedCircle />
                    </Col>
                    <Col style={{ marginLeft:"60px" }}>
                      {comment.owner?.firstName} {comment.owner?.lastName}
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ marginLeft:"110px" }} md={{ offset: 1 }}>{comment.comment}</Col>
                    <Button style={{width:"85px",marginBottom:"50px"}}variant="danger" onClick={() => deleteComment(bookId, comment._id)}>
                        Delete
                      </Button>
                  </Row>
                </Row>
              </Card>
            ))}
          </Row>
          <Row>
            <AddComment bookId={book._id} />
           
          </Row>
        </>
      ) : null}
    </>
  )
}

export default OneBook
