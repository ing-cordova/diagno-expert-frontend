import React from "react";
import Container from "../components/organisms/container/Container";
import Layout from "../components/organisms/layout/Layout";
import HomeImage from "../assets/home-image.svg";
import Button from "../components/atoms/button/Button";
import styles from "./styles/home.module.css";
import MenuNavBar from "../components/molecules/menuNavBar/MenuNavBar";
import MainContainerDiv from "../components/organisms/mainContainer/style";

const Home = () => {
  return (
    <Layout>
      <MainContainerDiv>
        <MenuNavBar />
        <Container>
          <div className={styles["main-container"]}>
            <div className={styles["first-column"]}>
              <h1 className={styles.h1}>
                Online <br />
                diagnostics
              </h1>
              <br />
              <p className={styles.p}>
                Our mission is to empower individuals to take control of their
                health through innovative AI-driven technology. Our platform
                offers personalized diagnostic insights and treatment
                recommendations, tailored to each user's unique needs. Join us
                today and take the first step towards a healthier tomorrow.
              </p>
              <br />
              <Button onClick={() => console.log("READ MORE")}>
                READ MORE
              </Button>
            </div>
            <div>
              <img
                src={HomeImage}
                alt="doctor-medicine"
                className={styles.img}
              />
            </div>
          </div>
        </Container>
      </MainContainerDiv>
    </Layout>
  );
};

export default Home;
