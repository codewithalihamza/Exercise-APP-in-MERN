import React from 'react'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router-dom'
import About from '../Component/About'
import Footor from '../Component/Footor'
const AboutPage = () => {
  return (
    <>
    <Navbar/>

          {/* Hero Start */}
          <div className="container-fluid bg-primary p-5 bg-hero mb-5">
              <div className="row py-5">
                  <div className="col-12 text-center">
                      <h1 className="display-2 text-uppercase text-white mb-md-4">About Us</h1>
                      <Link to ="/"className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                      <Link to= "/about" className="btn btn-light py-md-3 px-md-5">About</Link>
                  </div>
              </div>
          </div>
          {/* Hero End */}
<About/>
<Footor/>




    </>
  )
}

export default AboutPage
