import React from "react";

export const Services = (props) => {
  const colors = {
    primary: '#8E44AD',    // Deep Purple
    secondary: '#FFC300',  // Vivid Yellow
    background: '#F9E79F', // Light Yellow
    text: '#4A235A',       // Dark Purple
    white: '#FFFFFF'
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.title}</h3>
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
