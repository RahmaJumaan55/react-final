import React, { useState } from "react"
import { ReactReader } from "react-reader"

const Bookreder = props => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const { bookpdf } = props
  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        showToc={false}
        url={bookpdf}
        // url="https://rahmajumaan55.github.io/books-files/files/Hurst.epub"
    />
    </div>
  )
}

export default Bookreder
