import React from "react";
import { Accordion } from "react-bootstrap-accordion";
import "react-bootstrap-accordion/dist/index.css";

const Product = (props) => {
  return (
    <div   id="product" className="text-center">
      <div
      
        style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
        className="container my-5"
      >
        <div className="row g-4">
          <div className="col-lg-6">
            <img
              src={props.data?.image1}
              alt="Product"
              className="product-img  rounded  shadow"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="mb-4">{props.data?.title1}</h2>
            <p className="mb-4">{props.data?.detailDescription1}</p>

            <div className="accordion mb-4 fs-3" id="productAccordion">
              {props.data?.accordionData.map((item, index) => (
                <div className="accordion-item mb-3 fs-3" key={index}>
                  <Accordion
                    title={item.title}
                    children={<div className="p-3">{item.content}</div>}
                  />
                </div>
              ))}
            </div>

            {/* Button */}
            <br></br>
            <button className="btn btn-warning btn-lg btn-block mt-6">View Details</button>
          </div>
        </div>
      </div>

      <div
     style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
        className="container my-5"
      >
       <div className="col-lg-6">
            <img
              src={props.data?.image2}
              alt="Product"
              className="product-img  rounded shadow"
            />
          </div>
        <div className="row g-4">
        
          <div className="col-lg-6">
            <h2 className="mb-4">{props.data?.title2}</h2>
            <p className="mb-4">{props.data?.detailDescription2}</p>

            <div className="accordion mb-4 fs-3" id="productAccordion">
              {props.data?.accordionData.map((item, index) => (
                <div className="accordion-item mb-3 fs-3" key={index}>
                  <Accordion
                    title={item.title}
                    children={<div className="p-3">{item.content}</div>}
                  />
                </div>
              ))}
            </div>

            {/* Button */}
            <br></br>
            <button className="btn btn-warning btn-lg btn-block mt-6">View Details</button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Product;
