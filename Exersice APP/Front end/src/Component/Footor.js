import React from 'react'
import { Link } from 'react-router-dom'
const Footor = () => {
  return (
   <>
          <div>
              {/* Footer Start */}
              <div className="container-fluid bg-dark text-secondary px-5 mt-5">
                  <div className="row gx-5 ">
                      <div className="col-lg-12 col-md-6">
                          <div className="row gx-5">
                              <div className="col-lg-6 col-md-12 pt-5 mb-2 ">
                                  <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                                  <div className=" mb-2 ">
                                      <i className="bi bi-geo-alt text-primary me-2" />
                                      <p className="mb-0">123 Street, New York, USA</p>
                                  </div>
                                  <div className=" mb-2">
                                      <i className="bi bi-envelope-open text-primary me-2" />
                                      <p className="mb-0">info@example.com</p>
                                  </div>
                                  <div className="mb-2">
                                      <i className="bi bi-telephone text-primary me-2" />
                                      <p className="mb-0">+012 345 67890</p>
                                  </div>
                               
                              </div>
                              <div className="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-2">
                                  <h4 className="text-uppercase text-light mb-4">Quick Links</h4>
                                  <div className="d-flex flex-column justify-content-start">
                                      <Link className="text-secondary mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2" />Home</Link>
                                      <Link className="text-secondary mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2" />About Us</Link>
                                      <Link className="text-secondary mb-2" to="/contact"><i className="bi bi-arrow-right text-primary me-2" />Contact us</Link>
                                      <Link className="text-secondary mb-2" to="/login"><i className="bi bi-arrow-right text-primary me-2" />Login</Link>
                                      <Link className="text-secondary mb-2" to="/register"><i className="bi bi-arrow-right text-primary me-2" />Register</Link>
                                  </div>
                              </div>
                            
                          </div>
                      </div>
                   
                  </div>
                  <div>
                    <div className='row'> 
                        <div className='col-lg-4'></div>
                        <div className="col-lg-4 mb-4  ">
                                      <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>
                                      <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></a>
                                      <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                      <a className="btn btn-primary btn-square rounded-circle" href="#"><i className="fab fa-instagram" /></a>
                        </div>
                    <div className='col-lg-4'></div>

                    </div>
                  </div>
              </div>
             
              {/* Footer End */}
          </div>


   
   </>
  )
}

export default Footor
