import BooksContext from "../utils/BooksContext"
import BookItem from "../components/BookItem"
import { Row } from "react-bootstrap"
import { useContext } from "react"

function AllBooks() {
  const { books } = useContext(BooksContext)
  return (
    <>
      <Row>
        <h5 className="mt-5 mb-4">All Books</h5>
      </Row>
      <Row md={5}>
        {books.map(book => (
          <BookItem book={book} key={book._id} />
        ))}
      </Row>
    </>
  )
}

export default AllBooks
