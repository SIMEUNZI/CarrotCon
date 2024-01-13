import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function Header() {
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  const localstorage = window.localStorage;
 
  return (
    <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3"><i className="me-2 text-secondary"></i> <Link href="#" className="text-white">3조 프로젝트</Link></small>
                        <small className="me-3"><i className="text-secondary"></i><Link href="#" className="text-white">CarrotCon</Link></small>
                    </div>
                    
        
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <Link className={pathName === 'home' ? "nav-link active" : "nav-link"} to="/"><h1 className="text-primary display-6">CarrotCon</h1></Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto ">
                            <Link className={pathName === 'home' ? "nav-link active" : "nav-link"} to="/">Home</Link>
                            <Link className={pathName === 'product' ? "nav-link active" : "nav-link"} to="/product">Shop</Link>
                            <Link href="shop-detail.html" className="nav-item nav-link">Community</Link>
                            <div class="nav-item dropdown">
                                <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">My pages</Link>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <Link to="profile" class="dropdown-item">Profile</Link>
                                    <Link to="sellList" class="dropdown-item">Buy or Sell</Link>
                                    <Link to="wishlist" class="dropdown-item">Wishlist</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex m-3 me-0">
                    {!localstorage.user ? (
                    <Link className={pathName === 'login' ? "nav-link active" : "nav-link"} to="/login"><sub>Login</sub></Link>
                    ) : (
                    <Link className={pathName === 'logout' ? "nav-link active" : "nav-link"} to="/logout"><sub>Logout</sub></Link>
                    )}
                    <Link className={pathName === 'signup' ? "nav-link active" : "nav-link"} to="/signup"><sub>Signup</sub></Link>

                    </div>
                </nav>
            </div>
        </div>
  )
}

export default Header