// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                            <li className='nav-item'>
                                <div className={`form-check form-switch m-2 text-${props.color}`}>
                                    {/* <input className="form-check-input  " type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" /> */}
                                    <div className="checkbox-wrapper-5 my-1">
                                        <div className="check">
                                            <input id="check-5" type="checkbox" onClick={()=>props.toggleMode()}/>
                                                <label for="check-5"></label>
                                        </div>
                                    </div>
                                    {/* <label className="form-check-label" for="flexSwitchCheckDefault">{props.label}</label> */}
                                </div>
                            </li>
                        </ul>
                        <div className='d-flex'>
                            <div className='bg-secondary rounded mx-2' onClick={()=>props.toggleMode('secondary')} style={{height:'30px',width:'30px'}}></div>
                            <div className='bg-danger rounded mx-2' onClick={()=>props.toggleMode('danger')} style={{height:'30px',width:'30px'}}></div>
                            <div className='bg-success rounded mx-2' onClick={()=>props.toggleMode('success')} style={{height:'30px',width:'30px'}}></div>
                            <div className='bg-warning rounded mx-2' onClick={()=>props.toggleMode('warning')} style={{height:'30px',width:'30px'}}></div>
                        </div>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: "CodeSpace",
    aboutText: "About Us"
}
export default Navbar;

