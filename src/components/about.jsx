import React from "react";

export const About = (props) => {
  const statements = [
    {
      title: "Vision Statement",
      content:
        "To become a global leader in sustainable menstrual and solid waste management, setting new standards for environmental responsibility and public health. We envision a world where safe, efficient, and environmentally conscious solutions are accessible to all, breaking down barriers to health and hygiene while fostering a culture of sustainability and innovation in waste management.",
    },
    {
      title: "Mission Statement",
      content:
        "To revolutionize menstrual and solid waste management through innovative, eco-friendly incineration technology that ensures the health and well-being of communities while protecting the environment. We are committed to promoting gender equity, reducing environmental impact, and advancing sustainable waste disposal practices that empower individuals and contribute to a cleaner, healthier planet.",
    },
  ];
  const colors = {
    primary: "#8E44AD", // Deep Purple
    secondary: "#FFC300", // Vivid Yellow
    background: "#F9E79F", // Light Yellow
    text: "#4A235A", // Dark Purple
    white: "#FFFFFF",
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>What We Do:</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
              <h3>CUSTOMERS:</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: colors.background,
          padding: "50px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "30px",
          }}
        >
          {statements.map((statement, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 400px",
                backgroundColor: colors.white,
                borderRadius: "10px",
                padding: "30px",
                boxShadow: `0 4px 8px ${colors.primary}33`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  color: colors.primary,
                  marginBottom: "20px",
                  fontSize: "1.8rem",
                  textAlign: "center",
                }}
              >
                {statement.title}
              </h2>
              <p
                style={{
                  color: colors.text,
                  lineHeight: "1.6",
                  fontSize: "1rem",
                }}
              >
                {statement.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
