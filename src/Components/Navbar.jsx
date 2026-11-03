import React from 'react'
import logo from '../assets/logo.svg'
import './Navbar.css'
import menu from '../assets/icon-menu.svg'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">

                    <div className=' col-md-7'>  <a href='http://localhost:5173/#'>
                        <img src={logo} alt='no-img' col-lg-5 className='nav-Logo'></img></a>
                    </div>
                    <div
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >

                        <img src={menu}></img>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 container">
                            <li className="nav-item col-md-2">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item col-md-2">
                                <a className="nav-link" href="#">New</a>
                            </li>

                            <li className="nav-item col-md-2">
                                <a className="nav-link" href="#">Populor</a>
                            </li>

                            <li className="nav-item col-md-2">
                                <a className="nav-link" href="#">Trending</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Catogories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
