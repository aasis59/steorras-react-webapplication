import React from "react";
import "./assests/home/home.scss";

function Home() {
  return (
    <div>
      <section className="top-section">
        <div className="container-fluid">
          <div className=" first d-flex justify-content-between px-5 ">
            <div>
              Valentine's Day Sale == Get <span>15%</span> Off Our Paper Heart
              Pendant
            </div>
            <div className="top-padding">
              Timeless<span> & </span> Thoughtfully Crafted Jewelry
            </div>
          </div>
        </div>
      </section>
      <section className="nav-section mt-3">
        <div class="container-fluid">
          <div className="row">
            <div className="col-3">
              <select >
                <option selected>Canda(CAD$)</option>
                <option value="1">US(US$)</option>
                <option value="2">Nepal(NRS)</option>
              </select>
            </div>

            <div class="col-4 offset-2 ">
              <img
                src="./image/image 2.png"
                alt="loading" style={{maxWidth:"70%" ,objectFit:"cover"}}
              />
            </div>
            <div class="col-3">
              <img src="./image/magnifying-glass.png" alt="loading"   />
              <img src="./image/user.png" alt="loading"className="ms-4" />
              <img src="./image/love.png" alt="loading" className="ms-4" />
              <img src="./image/shopping-bag.png" alt="loading" className="ms-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="nav-second">
        <nav class="navbar navbar-expand-lg  ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
              <ul class="navbar-nav  mb-2 mb-lg-0 justify-content-center">
                <li class="nav-item">Chains</li>
                <li class="nav-item">Necklaces & Pendants</li>
                <li class="nav-item">Earrings</li>
                <li class="nav-item">Sale</li>
                <li class="nav-item">About Contact</li>
                <li class="nav-item">Contact</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="top-image">
        <div className="container-fluid px-0">
          <div className="row g-0 p-0">
            <div className=" col-lg-4 col-md-6">
              <img src="./image/TopImage 1.png" alt="loading..." />
            </div>
            <div className="col-lg-4 col-md-6">
              <img src="./image/TopImage 2.png" alt="loading..." />
            </div>
            <div className=" col-lg-4 col-md-12 top-image-1 ">
              <div className="top-image-2 text-center">
                <p>Timeless elegance crafted with care</p>
                <button className="px-4 py-1 rounded-3">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second-image">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 text-center second-image-01">
            <img src="./image/Steorras.png" alt="loading..." />
            <span>Popular</span>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/image 20.png" alt="loading..." />
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/Layer 47.png" alt="loading..." />
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/image 23.png" alt="loading..." />
          </div>
        </div>
      </section>
      <section className="third-image">
        <div className=" container-fluid third-image-01 ">
          <div className="row ">
            <div className="col-lg-6 offset-lg-6 third-text ">
              <h2>
                Fine jewelry that you'll <br />
                treasure for a lifetime{" "}
              </h2>
              <h6>
                Thank you for choosing Steorras as your preferred online jewelry
                store.
              </h6>
              <p>
                We're dedicated to providing the best online jewelry shopping
                experience possible, from our user-friendly website to our
                outstanding customer service. If you have any questions or need
                assistance with your purchase, our customer service team is
                always happy to help.
              </p>
              <button className="px-4 py-1 rounded-3">shop now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="second-image">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 text-center second-image-01">
            <img src="./image/image 5.png" alt="loading..." />
            <span>Popular</span>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/image 6.png" alt="loading..." />
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/Layer 51.png" alt="loading..." />
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/image 22.png" alt="loading..." />
          </div>
        </div>
      </section>
      <section className="fourth-image">
        <div className="container-fluid px-0">
          <div className="row g-0 p-0">
            <div className=" col-lg-4 col-md-6">
              <img src="./image/BottomBanner 1.png" alt="loading..." />
            </div>
            <div className="col-lg-4 col-md-6">
              <img src="./image/BottomBanner 2.png" alt="loading..." />
            </div>
            <div className=" col-lg-4 col-md-12 fourth-image-1 ">
              <div className="fourth-image-2 text-center ">
                <h2>
                  Celebrate life's milestones with timeless <span>14</span>k
                  gold pendants
                </h2>
                <p>
                  In today's market, it can be difficult to find high-quality
                  jewelry without spending a fortune. At Steorras, we believe
                  that quality fine jewelry should be accessible to everyone.
                  That's why we offer competitive prices without compromising on
                  quality or design. Our goal is to make online jewelry shopping
                  an enjoyable experience for everyone. Shop with us today and
                  see the difference!
                </p>
                <button className="px-4 py-1 rounded-3 ">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second-image">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 text-center second-image-01">
            <img src="./image/image 24.png" alt="loading..." />
            <span>ON SALE</span>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/image 9.png" alt="loading..." />
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/image 18.png" alt="loading..." />
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center">
            <img src="./image/image 13.png" alt="loading..." />
          </div>
        </div>
      </section>
      <section className="section-text">
        <div className="container-fluid">
          <div className="text-center text-01">Find The Perfect Gift</div>
        </div>
      </section>
      <section className="fifth-image">
        <div className="container">
          <div className="row gy-2 ">
            <div className="col-lg-3 col-md-6 col-12 text-center ">
              <img
                src="./image/image 14.png"
                alt="loading..."
                className="rounded-2"
              />
              <p>Gifts For Her</p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center ">
              <img
                src="./image/image 15.png"
                alt="loading..."
                className="rounded-2"
              />
              <p>Earrings</p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center ">
              <img
                src="./image/image 16.png"
                alt="loading..."
                className="rounded-2"
              />
              <p>Earrings</p>
            </div>
            <div className="col-lg-3 col-md-6 col-12 text-center ">
              <img
                src="./image/image 17.png"
                alt="loading..."
                className="rounded-2"
              />
              <p>
                Necklaces <span>&</span>Pendants
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer-section">
        <hr />
        <section class="footer-top">
          <div class="container py-xxl-5 py-xl-4 py-lg-4 py-md-5 pt-sm-4">
            <div class="row mx-5">
              <div class="col-lg-3 col-sm-6">
                <span>Quick Links</span>
                <ul class="list-unstyled text-uppercase">
                  <li>Home</li>
                  <li>Blogs</li>
                  <li>FAQs</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div class="col-lg-3 col-sm-6">
                <span>Quick Links</span>
                <ul class="list-unstyled text-uppercase">
                  <li>Home</li>
                  <li>Blogs</li>
                  <li>FAQs</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div class="col-lg-6 col-md-12 gap-5">
                <label for="email" class="form-label">
                  Sign-Up
                </label>
                <p class="lh-base">
                  Sign up for exclusive offers, original stories, events and
                  more.
                </p>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                />
                <div class="d-flex float-sm-end ">
                  <button
                    type="submit"
                    class="btn my-xxl-5 my-xl-3 my-lg-4 my-md-5 my-5 px-5 py-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="footer-bottom text-center py-xxl-5 py-xl-4 py-lg-3 py-md-4 pt-5  ">
          <div class="container">
            <img
              src="/image/icon.png"
              alt="loading"
              class="pb-xxl-4 pb-xl-2 pb-md-3"
            />
            <p>
              Privacy Policy | Refund Policy | Shipping Policy | Terms of
              Service
            </p>
            <p>© 2023 Steorras.</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Home;
