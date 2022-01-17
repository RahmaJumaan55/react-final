import { useContext, useState } from "react"
import { Col, Row, Card, Image, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import AddComment from "../components/AddComment"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import { ReactReader } from "react-reader"
import Bookreder from "../components/Bookreder"

function OneBook() {
  const { bookId } = useParams()
  const { books, likeBook, saveFile, profile } = useContext(BooksContext)

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
          backgroundColor: "gray",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItem: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <Link to={`/book/${bookId}`}>
            <img variant="top" src={book.poster} width="50%" style={{ borderRadius: "10px", margin: "20px" }} />
          </Link>
          
        </Col>
        <Col md={{ offset: 2 }}>
          <h1>{book.title}</h1>

          <h3>Overview</h3>
          <p>{book.description}</p>
          <Bookreder bookpdf={book.bookpdf} />
          {/* <a href={book.bookpdf}>read</a>
            {/* <div style={{ height: "100vh" }}> */}
          {/* <ReactReader location={location} locationChanged={locationChanged} url={book.bookpdf} /> */}

          {/* <button onClick={saveFile}>download</button> */}
          {/* </div> */}

          {/* <button onClick={() => saveAs(item.title)}>Download</button> */}

          <Col>
            <Button variant="none" className="ms-3" onClick={() => likeBook(book._id)}>
              {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
            </Button>
            <span>{book.likes.length}</span>
          </Col>
         
        </Col>
      </Row>
      {localStorage.tokenBooks ? (
        <>
          <Row className="mt-5">
            <h3>Comments</h3>
            {book.comments.map(comment => (
              <Card style={{ margin: 20, maxWidth: 1100 }}>
                <Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md="1">
                      <Image src={comment.owner?.avatar} width="80px" roundedCircle />
                    </Col>
                    <Col>
                      {comment.owner?.firstName} {comment.owner?.lastName}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ offset: 1 }}>{comment.comment}</Col>
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
