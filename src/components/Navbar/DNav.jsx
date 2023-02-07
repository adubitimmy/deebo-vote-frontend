import '../Navbar/DNav.css'
import { Typography, Button} from '@material-ui/core';
import {Link } from 'react-router-dom';
const DNav = () =>{
    const navStyle = {
        color:'black',
        textDecoration:'none'
      }
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white ml-3 mr-3">
          <div className="container-fluid">
      <Link className="navbar-brand display-1" to="/" style={{fontWeight: 800}}>
       <img src="assets/deebo.svg" alt="" />
        </Link>
      <Button variant='contained' className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto text-lg-right mx-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={navStyle}>Events <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/voting" style={navStyle}>Voting</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/createPolls" style={navStyle}>Create Polls</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={navStyle}>About us</Link>
          </li>
          <li  className="nav-item">
            <Link className="nav-link" to="/forms" style={navStyle}>Forms</Link>
          </li>
        </ul>
        <div  className="my-5 my-lg-0 d-flex justify-content-right float-right" >
          <button className=' btn-black btn btn-lg btn-dark' lg={{p:2}}  type="button">
            <Link to="/forms" className="nav-link text-white " style={{navStyle}}>Send
            Request</Link>
            </button>
        </div>
      </div>
      </div>
    </nav>
        </>
    )
}

export default DNav