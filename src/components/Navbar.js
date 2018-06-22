import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <a className="navbar-item" href="https://blog.puriri.nz/">
          Blog
        </a>
        <Link className="navbar-item" to="/writings/">
          Articles
        </Link>
        <Link className="navbar-item" to="/recipes/">
          Recipes
        </Link>
        <Link className="navbar-item" to="/carbon/">
          Carbon
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
