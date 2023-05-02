import React from "react";
import Layout from "../components/organisms/layout/Layout";
import Container from "../components/organisms/container";
import MainContainer from "../components/organisms/mainContainer/MainContainer";
import styles from "./styles/auth.module.css";
import AuthImage from "../assets/auth-image.svg";

const AuthPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Container>
          <div
            style={{
              background: "#2743AA",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: "55%",
              borderRadius: "15px 0 0 15px",
            }}
          ></div>
          <div
            style={{
              background: "white",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "45%",
              right: 0,
              borderRadius: "0 15px 15px 0",
            }}
          >
            <div className={styles["right-div"]}>
              <h1 className={styles.h1}>Welcome back!</h1>
              <p className={styles.p}>
                Login and start joining to the new diagnostics professional
                team.
              </p>
              <img
                src={AuthImage}
                alt="auth-login"
                className={styles.img}
              />
            </div>
          </div>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default AuthPage;
