import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import "./Reviews.css";
import Person1 from "../utils/img/person1.jpg";
import Person2 from "../utils/img/person2.jpg";
import Person3 from "../utils/img/person3.jpg";
import Person4 from "../utils/img/person4.jpg";

export function Reviews() {
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Absolutely loved the experience! The idea of joining the
                  kitchen is so unique I felt like part of the team. The food
                  was fresh, flavorful, and beautifully presented
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={Person1}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <CardTitle className="text-success">John Mike</CardTitle>
              </div>

              <div style={{ color: "#FFD700", fontSize: "1.1rem" }}>★★★★★</div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  COOK & JOY is not just a restaurant — it’s a warm, welcoming
                  place where you can taste passion in every bite. Highly
                  recommended
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={Person2}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <CardTitle className="text-success">Maria Cruz</CardTitle>
              </div>

              <div style={{ color: "#FFD700", fontSize: "1.1rem" }}>★★★★★</div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  I came with friends and we were amazed by the hospitality.
                  Watching the chefs cook and interacting with them made the
                  dinner unforgettable
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={Person3}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <CardTitle className="text-success">Anna Gold</CardTitle>
              </div>

              <div style={{ color: "#FFD700", fontSize: "1.1rem" }}>★★★★★</div>
            </CardFooter>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  From starters to dessert, everything was perfect. I
                  appreciated how they let us explore the kitchen and understand
                  each dish’s story
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={Person4}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <CardTitle className="text-success">Nick Burn</CardTitle>
              </div>

              <div style={{ color: "#FFD700", fontSize: "1.1rem" }}>★★★★★</div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
