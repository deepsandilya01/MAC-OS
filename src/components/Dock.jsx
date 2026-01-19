import React from 'react'
import "./dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img src="./doc-icons/github.svg" alt="" />5</div>
        <div className="icon note"><img src="./doc-icons/note.svg" alt="" />5</div>
        <div className="icon pdf"><img src="./doc-icons/pdf.svg" alt="" />5</div>
        <div className="icon calender"><img src="./doc-icons/calender.svg" alt="" />5</div>
        <div className="icon spotify"><img src="./doc-icons/spotify.svg" alt="" />5</div>
        <div className="icon mail"><img src="./doc-icons/mail.svg" alt="" />5</div>
        <div className="icon link"><img src="./doc-icons/link.svg" alt="" />5</div>
        <div className="icon cli"><img src="./doc-icons/cli.svg" alt="" />5</div>

    </footer>
  )
}

export default Dock
