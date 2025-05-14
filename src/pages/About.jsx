import React from "react";
import "./About.css";
import AboutChef1 from "../utils/img/about-chef1.jpg";
import AboutChef2 from "../utils/img/about-chef2.jpg";
import { ImageGallery } from "../components/ImageGallery";
import { Reviews } from "../components/Reviews";

function About() {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>
          Welcome to COOK & JOY, where food is not just served — it's shared. In
          our kitchen and restaurant, we believe that cooking is a joyful
          experience meant to be lived, not just observed. That’s why we invite
          our guests to step behind the scenes and become part of the culinary
          journey. From sizzling pans to handcrafted dishes,
        </p>
        <p className="mb-5">
          every meal is a celebration of flavors, stories, and human connection.
          At COOK & JOY, we blend tradition with creativity, offering you more
          than just a menu — we offer you memories. Come cook, taste, and
          connect with us — because here, you don’t just eat, you belong.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <img src={AboutChef1} className="img-fluid my-4" alt="" />
          </div>
          <div className="col-lg-6">
            <img src={AboutChef2} className="img-fluid my-4" alt="" />
          </div>
        </div>

        <p>
          Welcome to Cook & Joy – where food is not just served, but celebrated.
          Our restaurant offers a unique culinary experience that invites guests
          to step into the heart of the kitchen. Whether you're here for a quick
          bite or a full course meal, every dish is prepared with passion,
          flavor, and care. We believe in food that tells a story – made with
          the freshest ingredients and inspired by both tradition and
          creativity. Join us and become part of a journey where you can taste,
          learn, and even cook with us. At Cook & Joy, we don’t just serve meals
          – we create moments, memories, and joy on every plate.
        </p>
      </div>

      <div className="bg-dark text-light">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
}

export default About;
