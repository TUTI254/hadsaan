/* eslint-disable react/no-unescaped-entities */
// import DialogBox from "./DialogBox";
function App() {
  return (
    <>
      {/* header section start  */}
      <div className="header_section">
        <div className="header_main">
          {/* <div className="mobile_menu">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="logo_mobile">
                <a href="index.html">
                  <img src="/images/hadsaan.png" />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Packages">
                      Packages
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " href="#reach-out">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> */}
          <div className="container-fluid">
            <div className="logo">
              <a href="">
                <img src="/images/hadsaan.png" />
              </a>
            </div>
            <div className="menu_main">
              <ul>
                <li className="active">
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#Packages">Packages</a>
                </li>

                <li>
                  <a href="#reach-out">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* banner section start */}
        <div className="logo_mobile">
          <a href="index.html">
            <img src="/images/hadsaan.png" />
          </a>
        </div>
        <div className="banner_section layout_padding">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <h1 className="banner_taital">Traverse The Mara</h1>
                  <p className="banner_text">
                    Get to know the Maasai Mara like never before with our
                    expert guides. We offer a variety of tours and safaris to
                  </p>
                  <div className="read_bt">
                    <a href="#reach-out">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <h1 className="banner_taital">Row with The Hippos </h1>
                  <p className="banner_text">
                    Explore what Lake Naivasha has to offer , from the Boat
                    rides with the hippos to exploring the Great Rift Valley
                  </p>
                  <div className="read_bt">
                    <a href="#reach-out">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <h1 className="banner_taital">Experience Diani</h1>
                  <p className="banner_text">
                    Enjoy the white sandy beaches of Diani and the beautiful
                    coastal sun. We offer a variety of tours and safaris to
                  </p>
                  <div className="read_bt">
                    <a href="#reach-out">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner section end  */}
      </div>
      {/*  header section end  */}
      {/* <!-- choose section start --> */}
      <div className="choose_section layout_padding">
        <div className="container">
          <h1 className="choose_taital">Why Choose Us</h1>
          <p className="choose_text">
            At Hadsaan, we believe that travel is an opportunity for personal
            growth, cultural exchange, and connection with the world around us.
            Let us be your guide as we embark on a journey to uncover the hidden
            wonders of Kenya and create memories that will last a lifetime.
          </p>
          <div className="read_bt_1">
            <a href="#reach-out">Book Now</a>
          </div>
        </div>
      </div>
      {/* <!-- choose section end --> */}

      {/* <!-- blog section start --> */}
      <div className="blog_section layout_padding">
        <div className="container">
          <h1 className="blog_taital">Karibu Hadsaan</h1>
          <p className="blog_text">
            At Hadsaan, we understand that travel is not just about visiting
            popular destinations but about immersing oneself in the essence of a
            place. Our expert team of travel enthusiasts and local guides have
            an intimate knowledge of Kenya and its hidden gems, ensuring that
            every journey with us is filled with authenticity and discovery.
          </p>
          {/* <div className="play_icon_main">
            <div className="play_icon">
              <a href="#">
                <img src="/public/images/play-icon.png" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      {/* <!-- blog section end --> */}
      {/* <!-- about section start --> */}
      <div className="about_section layout_padding" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <h1 className="about_taital">About Us</h1>
                <p className="about_text">
                  Welcome to Hadsaan Tours and Travel, where we specialize in
                  providing unforgettable experiences as we explore the
                  captivating wonders of Kenya. With a passion for adventure and
                  a deep appreciation for the rich cultural heritage and
                  breathtaking landscapes, we are dedicated to curating unique
                  and immersive travel experiences for our guests.
                </p>
                <div className="readmore_bt">
                  <a href="#reach-out">Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding_right_0">
              <div>
                <img src="/images/elephant.jpg" className="about_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about section end --> */}
      {/* <!-- services section start --> */}
      <div className="services_section layout_padding" id="Packages">
        <div className="container">
          <h1 className="services_taital">Recommended Packages For You </h1>
          <p className="services_text">
            leading tours and travels Booking website,with plenty packages to
            suite your needs. We offer the best destinations that Kenya has to
            offer. We are the best in the business of tour and travel and
            guarantee you the best experience in your travel.
          </p>
          <div className="services_section_2">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <img src="/images/package1.jpeg" className="services_img" />
                </div>
                <div className="btn_main active">
                  <a href="#reach-out">Masaai Mara</a>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="/images/naivasha.webp" className="services_img" />
                </div>
                <div className="btn_main active">
                  <a href="#reach-out">Lake Naivasha</a>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src="/images/diani2.webp" className="services_img" />
                </div>
                <div className="btn_main">
                  <a href="#reach-out">Diani</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- services section end --> */}
      {/* <!-- footer section start --> */}
      <div className="footer_section layout_padding" id="reach-out">
        <h1 className="blog_taital">Contact us For Bookings</h1>
        <div className="container">
          {/* <div className="input_btn_main">
            <input
              type="text"
              className="mail_text"
              placeholder="Enter your email"
              name="Enter your email"
            />
            <div className="subscribe_bt">
              <a href="#">Subscribe</a>
            </div>
          </div> */}
          <div className="location_main">
            <div className="call_text">
              <img src="/images/call-icon.png" />
            </div>
            <div className="call_text">
              <a href="tel:+254 111358832">Call +254 111358832</a>
            </div>
            <div className="call_text">
              <img src="/images/mail-icon.png" />
            </div>
            <div className="call_text">
              <a href="mailto:info@hadsaan.com">info@hadsaan.com</a>
            </div>
          </div>
          <div className="social_icon">
            <ul>
              <li>
                <a href="#">
                  <img src="/images/fb-icon.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/twitter-icon.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/linkedin-icon.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/instagram-icon.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- footer section end --> */}
    </>
  );
}

export default App;
