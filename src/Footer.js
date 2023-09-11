import React from 'react'

const Footer = ({ length }) => {
    const today = new Date()
  return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()}  | {(length > 1) ? `${length} Items`:length === 1?`${length} Item`: "No Items"}</p>
    </footer>
  )
}

export default Footer