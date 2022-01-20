import { useContext, useRef, useState } from "react"
import { Button, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap"
import { AiFillHeart, AiFillLike } from "react-icons/ai"
import OneBook from "../pages/OneBook"
import BooksContext from "../utils/BooksContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"

import bookItem from "./BookItem"
function AddToFav(props) {
  const{bookId}=props
  const { likeBook } = useContext(BooksContext)
  const [show, setShow] = useState(false)
  const target = useRef(null)

  return (
    <>
      <Button  style={{backgroundColor:"#B97A95", border:"#B97A95", marginLeft:"40px",marginTop:"10px",marginBottom:"10px"}} ref={target} onClick={() => likeBook(bookId)}>
        <MdFavorite />
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {props => (
          <Tooltip id="overlay-example" {...props}>
            Removed from likes
          </Tooltip>
        )}
      </Overlay>
    </>
  )
}

export default AddToFav
