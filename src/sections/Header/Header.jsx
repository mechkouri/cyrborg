import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom' 
import './Header.css'
import { SecondaryButton,Navitem } from '../../components'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src={logo} alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Navitem>
            <Link to ="/" className="nav-link active">Home</Link>
          </Navitem>
          <Navitem>
            <Link className="nav-link" to="/profile">Browse</Link>
          </Navitem>
          <Navitem>
            <Link className="nav-link" to="/#">Details</Link>
          
          </Navitem>
          <Navitem>
            <Link  className="nav-link" to="/#">Streams</Link>
        </Navitem>
        <Navitem>
        <button type="button" className="btn btn-outline-da " href="/#">Profil</button>
        </Navitem>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <SecondaryButton className="search-btn">Search</SecondaryButton>
          
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Header
