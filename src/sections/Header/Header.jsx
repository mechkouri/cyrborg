import React from 'react'
import logo from '../../assets/images/logo.png'
import Navitem, {NavitemDropDown} from '../../components/NavItem/Navitem'
import './Header.css'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} alt=""/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Navitem>
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </Navitem>
          <Navitem>
            <a className="nav-link" href="#">Browse</a>
          </Navitem>
          <Navitem>
            <a className="nav-link" href="#">Details</a>
          </Navitem>
          <Navitem>
          <a className="nav-link" href="#">Streams</a>
        </Navitem>
        <Navitem>
        <button type="button" className="btn btn-outline-da " href="#">Profil</button>
        </Navitem>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Header
