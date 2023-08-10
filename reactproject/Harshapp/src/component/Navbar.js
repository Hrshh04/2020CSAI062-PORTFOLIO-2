import React from 'react'

export default function () {
  return (
    <div>
            <div className="conatiner">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid " id="navbar">
              <a className="navbar-brand fs-3" href="#">Harsh Goel</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent" >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " margin-left={"x"}>
                  <li className="nav-item px-3">
                    <a className="nav-link active" aria-current="page" href="../layout/index.html">Home</a>
                  </li>
                  <li className="nav-item  px-3">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                  </li>
                  <li className="nav-item  px-3">
                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
    </div>
  )
}
