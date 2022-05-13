//import { Card } from "@mui/material";
import React from "react";
import Navbarweb from "./Navbarweb";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./Services.css";

const Sdata = [
  { title: "Sentece_Fill_In" },
  { title: "Sentece_Fill_In" },
  { title: "Sentece_Fill_In" },
  { title: "Sentece_Fill_In" },
  { title: "Sentece_Fill_In" },
  { title: "Sentece_Fill_In" },
];
function Service() {
  return (
    <>
      <Navbarweb />
      <div id="services">
        <div className="my-5">
          <h1 className="text-center"> OUR SERVICES </h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <div className="col-md-4 col-10 mx-auto">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Sentence_FIll-In</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/spelling"
                      >
                        {" "}
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Comprehnsion</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/Comprehension"
                      >
                        {" "}
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Still In search</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/spelling"
                      >
                        {" "}
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="leftover"></div>
    </>
  );
}

export default Service;
