import Home from "./pages/Home"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import BooksContext from "./utils/BooksContext"
import NavbarItem from "./components/Navbar"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import { saveAs } from "file-saver"
import "./App.css"
import OneBook from "./pages/OneBook"
import { ToastContainer, toast } from "react-toastify"
import Profile from "./pages/Profile"
import AddRoom from "./components/AddRoom"
import Categories from "./pages/Categories"
import ReadingRoom from "./pages/ReadingRoom"

function App() {
  const [books, setBooks] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()
  const [rooms, setRooms]= useState([])

  //-------------------------------------------get Book--------------------------------------------------------//
  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/api/books")
    setBooks(response.data)
  }
  //------------------------------------------delete Book--------------------------------------------------------//
  const deletebook = async bookId => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.tokenBooks,
        },
      })
      getProfile()
    } catch (error) {
      console.log(error)
    }
  }
  //-------------------------------------------get profile---------------------------------------------------//

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenBooks,
      },
    })
    setProfile(response.data)
  }
  useEffect(() => {
    getBooks()
    getRooms()
    if (localStorage.tokenBooks) getProfile()
    // getCategories()
  }, [])
  //-------------------------------------------edit profile---------------------------------------------------//
  const editProfile = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.put("http://localhost:5000/api/auth/profile", profileBody, {
        headers: {
          Authorization: localStorage.tokenBooks,
        },
      })
      getProfile()
    } catch (error) {
      console.log(error)
    }
  }
  //-------------------------------------------f signup--------------------------------------------------------//
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/auth/singup", userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  //-------------------------------------------f login--------------------------------------------------------//
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
      const token = response.data
      localStorage.tokenBooks = token

      getProfile()
      console.log("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-------------------------------------------f logout--------------------------------------------------------//
  const logout = () => {
    localStorage.removeItem("tokenBooks")
    console.log("logout success")
  }
  //-----------------------------------add comment----------------------------------------------------------------//
  const addComment = async (e, bookId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }
      form.reset()
      await axios.post(`http://localhost:5000/api/books/${bookId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenBooks,
        },
      })
      getBooks()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast(error.response.data)
      else console.log(error)
    }
  }
  const deleteComment = async (bookId, comment_id) => {
    await axios.delete(`http://localhost:5000/api/books/${bookId}/comments/${comment_id}`, {
      headers: {
        Authorization: localStorage.tokenBooks,
      },
    })
    getBooks()
  }
  //-----------------------------------like book----------------------------------------------------------------//

  const likeBook = async bookId => {
    try {
      const response = await axios.get(`http://localhost:5000/api/books/${bookId}/likes`, {
        headers: {
          Authorization: localStorage.tokenBooks,
        },
      })
      getBooks()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------------book Search----------------------------------------------------------------//
  const bookSearch = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.bookSearch.value

    const bookFound = books.find(book => book.title === searchText)
    if (bookFound) return navigate(`/book/${bookFound._id}`)
    toast.error("not found")
  }
  //-----------------------------------add room ----------------------------------------------------------------//

  const addRoom = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const books = []
      if (form.elements.books.forEach) {
        form.elements.books.forEach(book => {
          if (book.checked) {
            books.push(book.value)
          }
        })
      } else {
        if (form.elements.books.checked) {
          books.push(form.elements.books.value)
        }
      }
      const roomBody = {
        roomname: form.elements.roomname.value,
        books: books,
      }
      form.reset()
      await axios.post(`http://localhost:5000/api/rooms`, roomBody, {
        headers: {
          Authorization: localStorage.tokenBooks,
        },
      })
      getProfile()
      toast.success("room added")
      navigate("/ReadingRoom")
    } catch (error) {
      if (error.response) toast(error.response.data)
      else console.log(error)
    }
  }
    //-----------------------------------get room ----------------------------------------------------------------//
     const getRooms = async () => {
      const response = await axios.get("http://localhost:5000/api/rooms")
      setRooms(response.data)

     }
  const store = {
    books,
    signup,
    login,
    profile,
    logout,
    likeBook,
    addComment,
    bookSearch,
    editProfile,
    deletebook,
    addRoom,
    getRooms,
    deleteComment,
    rooms,
    
  }
  return (
    <>
      <BooksContext.Provider value={store}>
        <ToastContainer />
        <NavbarItem />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:bookId" element={<OneBook />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/ReadingRoom" element={<ReadingRoom />} />
        </Routes>
      </BooksContext.Provider>
    </>
  )
}
export default App
