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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse
          nulla, debitis similique, ad nihil architecto maiores doloribus quis
          blanditiis distinctio. Praesentium, harum atque fuga nobis eius
          laboriosam totam consequuntur officia dolorem quo velit incidunt
          fugiat at maxime, molestias esse dignissimos accusantium enim debitis.
          Id et quidem sapiente adipisci dolor ipsa amet tempora porro atque
          perferendis. Libero odio, molestiae aliquam modi facere, veritatis,
          illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet
          maiores excepturi. Architecto sit ducimus inventore officia porro vel?
          Accusantium recusandae nisi autem iste suscipit distinctio, libero
          rem.
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
