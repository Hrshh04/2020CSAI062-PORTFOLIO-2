import React from 'react'

export default function Menu() {
  return (
    <>
    
    <div className="conatiner">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid " id="navbar">
              <a className="navbar-brand fs-3" href="#">Harsh goel</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent" >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style="margin-right: 20px; ">
                  <li className="nav-item px-3">
                    <a className="nav-link active" aria-current="page" href="../layout/index.html">Home</a>
                  </li>
                  <li className="nav-item  px-3">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                  </li>
                  <li className="nav-item  px-3">
                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                  </li>
                  <div className="btn-group  px-3">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Projects
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#week1">Week-1</a></li>
                      <li><a className="dropdown-item" href="#week2">Week-2</a></li>
                      <li><a className="dropdown-item" href="#week3">Week-3</a></li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
    </div>
    
    </>
  );
}
