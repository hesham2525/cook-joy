import React from "react";
import "./Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import BreakfastImg from "../utils/img/maindish.jpg";
import LunchImg from "../utils/img/sushi111.jpg";
import soupimg from "../utils/img/soupmain.jpg";
import coff from "../utils/img/cofffff.jpg";


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

const sliderImages = [menu11, menu22, menu33, menu44, menu55, menu66, menu77];

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
    name: "Beef & Eggplant Tagine in Coconut Milk",
    description:
      "Tender beef chunks slow-cooked with roasted eggplant in a rich, creamy coconut sauce, seasoned with warm Middle Eastern spices and a hint of lemon",
    price: " 153 EGP",
  },
  {
    id: 2,
    name: "Teriyaki Chicken with Pineapple",
    description: "poached egg, avocado, onion, tomatoes, bread",
    price: "190 EGP",
  },
  {
    id: 3,
    name: "Black Ink Noodles with Squid & Spicy Chili Sauce",
    description: "Striking black ink noodles tossed with tender squid and coated in a bold, spicy chili sauce — a dramatic and flavorful dish with a kick.",
    price: "198 EGP",
  },
];
const sushi = [
  {
    id: 1,
    name: "California Roll Sushi",
    description: "Crab, avocado, cucumber, rolled in sushi rice and nori. 8 pieces",
    price: "134 EGP",
  },
  {
    id: 2,
    name: "Spicy Tuna Roll Sushi",
    description: "Spicy tuna mix, cucumber, rolled in sushi rice and nori. 8 pieces",
    price: "144 EGP",
  },
  {
    id: 3,
    name: " Dragon Roll Sushi",
    description: "Tempura shrimp, cucumber, topped with avocado slices and drizzled with sauce. 8 pieces",
    price: "211 EGP",
  },
];

const soup = [
  {
    id: 1,
    name: "French Onion Soup",
    description: "Slow-cooked caramelized onions in a savory beef broth, topped with toasted bread and melted cheese.Served hot.",
    price: "149 EGP",
  },
  {
    id: 2,
    name: "Chicken Noodle Soup",
    description: "A rich and creamy blend of mushrooms, seasoned with herbs, and finished with a smooth texture.Served hot",
    price: "146 EGP",
  },
  {
    id: 3,
    name: "Tomato Basil Soup",
    description: "A creamy blend of ripe tomatoes and fresh basil, seasoned to perfection.Served hot",
    price: "63 EGP",
  },
];

const dessert = [
  {
    id: 1,
    name: "Creme Caramel",
    description: "Classic baked custard dessert with a smooth texture, topped with a layer of golden caramel sauce.Served chilled",
    price: "55 EGP",
  },
  {
    id: 2,
    name: "Carrot Cake",
    description: "Moist spiced cake made with fresh carrots and nuts, topped with smooth cream cheese frosting ",
    price: "100 EGP",
  },
  {
    id: 3,
    name: "Vegan Pancakes",
    description: "flour, sugar, baking powder, soya milk, blueberries",
    price: "80 EGP",
  },
];

const Appetiser  = [
  {
    id: 1,
    name: "Eggplant Parmesan Bites",
    description: "Crispy breaded eggplant slices topped with marinara sauce and melted parmesan and mozzarella cheese. Served warm",
    price: "70 EGP",
  },
  {
    id: 2,
    name: " Cheesy Garlic Bread",
    description: "Toasted bread topped with garlic butter and melted mozzarella cheese.",
    price: "85 EGP",
  },
  {
    id: 3,
    name: "Caprese Salad",
    description: "Fresh mozzarella, ripe tomatoes, and basil leaves, drizzled with olive oil and balsamic glaze served cold ",
    price: "95 EGP",
  },
];
const coffee  = [
  {
    id: 1,
    name: "Americano ",
    description: "",
    price: "70 EGP",
  },
  {
    id: 2,
    name: " Orange Juice ",
    description: "",
    price: "50 EGP",
  },
  {
    id: 3,
    name: "Redbull ",
    description: " ",
    price: "100 EGP",
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
            <Cart1
              src={menu1}
              title="Meatballs with Honey and Sesame"
              docs="icy beef meatballs glazed with a light honey sauce and sprinkled with toasted sesame seeds — a perfect balance of sweet and savory with a delicate crunch."
              price="163"
            />
            <Cart1
              src={menu2}
              title="Grilled Chicken Rolls with Tamarind Sauce and Sesame"
              docs="Tender grilled chicken rolled with herbs, served with a tangy tamarind sauce and topped with toasted sesame seeds — a flavorful fusion of smoky, sour, and nutty notes."
              price="170"
            />
            <Cart1
              src={menu3}
              title=" Spinach & Feta Stuffed Chicken Fillet "
              docs="Juicy chicken fillet stuffed with a creamy blend of spinach and feta cheese, baked to perfection for a rich, savory bite with a Mediterranean touch."
              price="186"
            />
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
            <Cart1
              src={sushi1}
              title="Tempura Roll Sushi "
              docs="Crispy tempura shrimp, avocado, cucumber, rolled in sushi rice and nori "
              price="  170"
            />
            <Cart1
              src={sushi2}
              title="Tamaki Sushi "
              docs="Cone-shaped hand rolls with nori, sushi rice, and fillings like salmon, tuna, or vegetables.2 pieces"
              price="131"
            />
            <Cart1
              src={sushi3}
              title="Nigiri Sushi "
              docs="Hand-pressed sushi rice topped with slices of fresh fish like salmon or tuna. 4 pieces "
              price=" 152"
            />
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {sushi.map((sushi) => (
                <div key={sushi.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {sushi.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {sushi.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {sushi.price}
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
            <Cart1
              src={soup1}
              title="Tomato Basil Soup"
              docs="A creamy blend of ripe tomatoes and fresh basil, seasoned to perfection.
Served hot.
"
              price="63"
            />
            <Cart1
              src={soup2}
              title="Cream of Mushroom Soup"
              docs="A rich and creamy blend of mushrooms, seasoned with herbs, and finished with a smooth texture.
Served hot"
              price="93"
            />
            <Cart1
              src={soup3}
              title="Creamy Broccoli Soup"
              docs="Smooth and velvety soup made with fresh broccoli, cream, and mild seasoning.
 Served hot.

"
              price="157"
            />
          </div>
          <br />
          <br />
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={soupimg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt=""
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {soup.map((soup) => (
                <div key={soup.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {soup.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {soup.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {soup.price}
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
            <Cart1
              src={Dessert1}
              title="Tiramisu"
              docs="Classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder.
Served chilled.
"
              price="90"
            />
            <Cart1
              src={Dessert2}
              title="Chocolate Lava Cake"
              docs="Warm, rich chocolate cake with a gooey molten chocolate center.
Served with a scoop of vanilla ice cream"
              price="88"
            />
            <Cart1
              src={Dessert3}
              title="Cinnabon"
              docs="Soft and fluffy cinnamon roll swirled with cinnamon sugar, topped with rich cream cheese frosting.
Served warm"
              price="72"
            />
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
            <Cart1
              src={APPETISER1}
              title="Mozzarella Sticks"
              docs="Crispy breaded mozzarella cheese sticks, fried until golden and gooey.
Served with marinara sauce.

"
              price="90"
            />
            <Cart1
              src={APPETISER2}
              title="Onion Rings"
              docs="Crispy, golden-fried onion rings coated in seasoned batter.
Served with dipping sauce.

"
              price="75"
            />
            <Cart1
              src={APPETISER3}
              title="Caprese Salad"
              docs="Fresh mozzarella, ripe tomatoes, and basil leaves, drizzled with olive oil and balsamic glaze.
Served cold"
              price="95"
            />
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
              {Appetiser.map((Appetiser) => (
                <div key={Appetiser.id}>
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {Appetiser.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {Appetiser.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {Appetiser.price}
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
            <Cart1
              src={BEVERAGE1}
              title="COFFEE"
              docs="Turkish Coffee"
              price="35"
            />
            <Cart1 src={BEVERAGE2} title="SOFT DRINKS" docs="TEE" price="20" />
            <Cart1
              src={BEVERAGE3}
              title="FRISH JUICE"
              docs="Orange Juice"
              price="50"
            />
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {coffee.map((coffee) => (
                <div key={coffee.id}>
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {coffee.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {coffee.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {coffee.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={coff}
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
