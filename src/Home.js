import React from "react";
import "./assests/home/home.scss";

function Home() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="first">
            <div>
              Valentine's Day Sale == Get <span>15%</span> Off Our Paper Heart
              Pendant
            </div>
            <div>
              Timeless<span> & </span> Thoughtfully Crafted Jewelry
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar sticky-bottom navbar-expand-lg ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page">
                  <select class="form-select">
                    <option selected>Canda(CAD$)</option>
                    <option value="1">US(US$)</option>
                    <option value="2">Nepal(NRS)</option>
                  </select>
                </a>
              </li>
            </ul>
          </div>
          <img
            className="navbar-brand"
            src="./image/image 2.png"
            alt="loading"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarText">
            <ul class="navbar-nav ms-auto mb-lg-0 me-5 ">
              <li class="nav-item">
                <img
                  class="nav-link "
                  aria-current="page"
                  src="./image/magnifying-glass.png"
                  alt="loading"
                />
              </li>
              <li class="nav-item">
                <img
                  class="nav-link "
                  aria-current="page"
                  src="./image/user.png"
                  alt="loading"
                />
              </li>
              <li class="nav-item">
                <img
                  class="nav-link "
                  aria-current="page"
                  src="./image/love.png"
                  alt="loading"
                />
              </li>
              <li class="nav-item">
                <img
                  class="nav-link "
                  aria-current="page"
                  src="./image/shopping-bag.png"
                  alt="loading"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg  navbar-01">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mb-lg-0 ">
              <li class="nav-item">chains</li>
              <li class="nav-item">necklaces & pendants</li>
              <li class="nav-item">earning</li>
              <li class="nav-item">sales</li>
              <li class="nav-item">about</li>
              <li class="nav-item">contact</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid container-01">
        <div className="row">
          <div className="col-8 ">
            <img
              src="./image/TopImage 2.png"
              alt="loading"
              
            />
          </div>
          <div className="col-4 pink ">
            <div className="para-1">Timeless elegance crafted with care</div>
            <button>shop now</button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"><img src="./image/Steorras21549_edited 1.png"alt="loading"/></div>
          <div className="col-3"> <img src=" ./image/image 23.png"alt="loading"/></div>
          <div className="col-3"><img src="./image/Layer 47.png"alt="loading"/></div>
          <div className="col-3"><img src="./image/image 20.png"alt="loading"/></div>
        </div>
      </div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            <div className="middle">
              sacascsa
          </div>
            </div>
          </div>
        

        </div>
      </section>


    </div>
  );
}

export default Home;
