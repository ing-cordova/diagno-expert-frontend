import React from "react";
import Container from "../components/organisms/container/Container";
import Layout from "../components/organisms/layout/Layout";
import HomeImage from "../assets/home-image.svg";
import Button from "../components/atoms/button/Button";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "0px 90px 0px 20px" }}>
            <h1
              style={{
                fontSize: "2.4vw",
                color: "#3B65FF",
                borderBottom: "4px solid #3B65FF",
                paddingBottom: "10px",
              }}
            >
              Online <br />
              diagnostics
            </h1>
            <br />
            <p style={{ fontSize: "1.3vw", textAlign: "justify" }}>
              Our mission is to empower individuals to take control of their
              health through innovative AI-driven technology. Our platform
              offers personalized diagnostic insights and treatment
              recommendations, tailored to each user's unique needs. Join us
              today and take the first step towards a healthier tomorrow.
            </p>
            <br />
            <Button onClick={() => console.log("READ INFO")}>READ MORE</Button>
          </div>
          <div>
            <img
              src={HomeImage}
              alt="doctor-medicine"
              style={{ maxHeight: "45vh", maxWidth: "45vw" }}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
