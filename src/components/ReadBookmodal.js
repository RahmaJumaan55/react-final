import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import BooksContext from "../utils/BooksContext";
import Bookreder from "./Bookreder";


function ReadBookModal(props) {
    const {books} = useContext(BooksContext)
    const { bookShow, setbookShow, book } = props

    // const bookFound = books.find(book=> book._id === bookId)
    // console.log(bookFound);

    return ( 
        <Modal size="lg"  show={bookShow} onHide={() => setbookShow(false)}>
       
          <Modal.Header closeButton>
            <Modal.Title>{book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Bookreder bookpdf={book.bookpdf} />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setbookShow(false)}>
              Close
            </Button>
           
          </Modal.Footer>
        
      </Modal>
    )
  }

export default ReadBookModal;