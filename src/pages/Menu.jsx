import React from "react";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import BreakfastImg from "../utils/img/breakfast.jpg";
import LunchImg from "../utils/img/sushi111.jpg";
import DinnerImg from "../utils/img/dinner.jpg";
import DessertImg from "../utils/img/dessert.jpg";
import Cart1 from "../components/Card";
import sushi1 from "../utils/img/sushi1.jpg";
import sushi2 from "../utils/img/sushi3.jpg";
import sushi3 from "../utils/img/sushu4.jpg";

import menu1 from "../utils/img/main1.jpg";
import menu2 from "../utils/img/main2.jpg";
import menu3 from "../utils/img/main3.jpg";

import soup1 from "../utils/img/soup1.jpeg";
import soup2 from "../utils/img/soup22.jpg";
import soup3 from "../utils/img/soup33.jpg";

import Dessert1 from "../utils/img/desert1.jpg";
import Dessert2 from "../utils/img/desert2.jpg";
import Dessert3 from "../utils/img/desert3.jpg";

import APPETISER1 from "../utils/img/App1.jpg";
import APPETISER2 from "../utils/img/App2.jpg";
import APPETISER3 from "../utils/img/App3.jpg";

import BEVERAGE1 from "../utils/img/COFFEE11.jpg";
import BEVERAGE2 from "../utils/img/COFFEE2.jpg";
import BEVERAGE3 from "../utils/img/COFFfEE3jpg.jpg";

import menu11 from "../utils/img/1.jpg";
import menu22 from "../utils/img/2.jpg";
import menu33 from "../utils/img/3.jpg";
import menu44 from "../utils/img/4.jpg";
import menu55 from "../utils/img/5.jpg";
import menu66 from "../utils/img/6.jpg";
import menu77 from "../utils/img/7.jpg";





import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderImages = [
  menu11,
  menu22,
  menu33,
  menu44,
  menu55,
  menu66,
  menu77,

];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true, //
  autoplaySpeed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Dishes = [
  { 

    id: 1,
    name: "English Breakfast",
    description:
      "smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs",
    price: "£12",
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "poached egg, avocado, onion, tomatoes, bread",
    price: "£8",
  },
  {
    id: 3,
    name: "Burrito",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
];
const lunch = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "chicken breast, romaine lettuce, croutons, parmesan",
    price: "£15",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "spaghetti, pancetta, garlic, eggs, parmesan, pepper",
    price: "£14",
  },
  {
    id: 3,
    name: "Pizza",
    description: "chorizo, italian salami, tomatoes, mushrooms, olives",
    price: "£12",
  },
];

const dinner = [
  {
    id: 1,
    name: "Spicy Beef",
    description: "spicy beef, potatoes, carrots, cheese sauce, spices",
    price: "£17",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description: "onion, carrot, celery, minced meat, spaghetti, parmesan",
    price: "£15",
  },
  {
    id: 3,
    name: "Chickpea Curry",
    description: "onion, chickpea, garlic, mushrooms, tomatoes, spices",
    price: "£12",
  },
];

const dessert = [
  {
    id: 1,
    name: "Lemon Cake",
    description: "flour, sugar, baking powder, lemon",
    price: "£9",
  },
  {
    id: 2,
    name: "Cinnamon Rolls",
    description: "flour, salt, sugar, cinnamon, yeast, sour cream, milk",
    price: "£11",
  },
  {
    id: 3,
    name: "Vegan Pancakes",
    description: "flour, sugar, baking powder, soya milk, blueberries",
    price: "£8",
  },
];

function Menu() {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>
      <br />

      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Main Dishes
          </h2>
          <div className="cart">
            <Cart1 src={menu1} />
            <Cart1 src={menu2} />
            <Cart1 src={menu3} />
          </div>
          <br />
          <br />
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={BreakfastImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {Dishes.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breakfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breakfast.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {breakfast.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lunch bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            SUSHI
          </h2>
          <div className="cart">
            <Cart1 src={sushi1} />
            <Cart1 src={sushi2} />
            <Cart1 src={sushi3} />
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {lunch.map((lunch) => (
                <div key={lunch.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {lunch.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {lunch.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {lunch.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={LunchImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Soup
          </h2>
          <div className="cart ">
            <Cart1 src={soup1} />
            <Cart1 src={soup2} />
            <Cart1 src={soup3} />
          </div>
          <br />
          <br />
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DinnerImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {dinner.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {dinner.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {dinner.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dessert bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Dessert
          </h2>
          <div className="cart">
            <Cart1 src={Dessert1} />
            <Cart1 src={Dessert2} />
            <Cart1 src={Dessert3} />
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {dessert.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {dessert.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {dessert.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DessertImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dinner my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            APPETISER
          </h2>
          <div className="cart">
            <Cart1 src={APPETISER1} />
            <Cart1 src={APPETISER2} />
            <Cart1 src={APPETISER3} />
          </div>
          <br />
          <br />
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DinnerImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {dinner.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {dinner.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {dinner.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dessert bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            BEVERAGE
          </h2>
          <div className="cart">
            <Cart1 src={BEVERAGE1} />
            <Cart1 src={BEVERAGE2} />
            <Cart1 src={BEVERAGE3} />
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {dessert.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {dessert.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {dessert.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={DessertImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slider-section py-5 bg-light text-center">
        <h2 className="text-success fw-bold mb-4">MNUE</h2>
        <div className="container">
          <Slider {...sliderSettings}>
            {sliderImages.map((img, idx) => (
              <div key={idx} className="px-2">
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="img-fluid rounded shadow"
                />
              </div>
            ))}
          </Slider>
            <br />
          <button
            className="btn btn-success mt-4"
            onClick={() => {
              sliderImages.forEach((img, i) => {
                const link = document.createElement("a");
                link.href = img;
                link.download = `image-${i + 1}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              });
            }}
          >
            Download MNUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
