import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import "./Home.css";
import AboutImg from "../utils/img/about-img.jpg";
import { Link } from "react-router-dom";
import { ImageGallery } from "../components/ImageGallery";
import { ContactInfo } from "../components/ContactInfo";
import ContactImage from "../utils/img/contact-img.jpg";
import Gallery4 from "../utils/img/1.jpg";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="mb-0 text-black fw-bold">Welcome To</h2>
              <h1 className=" text-black fw-bold text-center text-sm-start">
                cook & joy
              </h1>
              <h4 className="mb-5 text-black fw-bold text-center text-sm-start">
                KITCHEN & RESTAURANT
              </h4>

              <MenuBtn />
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={Gallery4} className="img-fluid w-50" alt="about img" />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
            <p>
              Welcome to COOK & JOY, where food is not just served — it's
              shared. In our kitchen and restaurant, we believe that cooking is
              a joyful experience meant to be lived, not just observed. That’s
              why we invite our guests to step behind the scenes and become part
              of the culinary journey. From sizzling pans to handcrafted dishes,
            </p>
            <p className="mb-5">
              every meal is a celebration of flavors, stories, and human
              connection. At COOK & JOY, we blend tradition with creativity,
              offering you more than just a menu — we offer you memories. Come
              cook, taste, and connect with us — because here, you don’t just
              eat, you belong.
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-outline-success btn-lg">
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favorites</h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Food</h3>
              <ul className="px-0">
              <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Main Course</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">SUSHI</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Soup</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">APPITISER</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">DESERT</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Drinks</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Coffee</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Soft drink</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Fresh</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Smoothie</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={ContactImage} className="img-fluid w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
// import React from "react";
// import Gallery1 from '../utils/img/NEW.jpg';
// import Gallery2 from '../utils/img/gallery2.jpg';
// import Gallery3 from '../utils/img/NEW2.jpg';
// import Gallery4 from '../utils/img/1.jpg';
// import Gallery5 from '../utils/img/NEW4.jpg';
// import Gallery6 from '../utils/img/gallery6.jpg';