import React from "react";
import Layout from "../components/organisms/layout/Layout";
import Container from "../components/organisms/container";
import MainContainer from "../components/organisms/mainContainer/MainContainer";
import styles from "./styles/auth.module.css";
import AuthImage from "../assets/auth-image.svg";

const AuthPage = () => {
  const onSubmitHandler = () => {};
  return (
    <Layout>
      <MainContainer>
        <Container>
          <div className={styles["div-left-container"]}>
            <div className={styles["left-main-div"]}>
              <h1 className={styles["h1-left"]}>DIAGNO EXPERT</h1>
              <form onSubmit={onSubmitHandler}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles["input-form"]}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={styles["input-form"]}
                />
                <input
                  type="button"
                  value="SIGN IN"
                  className={styles["button-send"]}
                />
              </form>
              <p className={styles.guideline}>
                -------------------------------------------------------
              </p>
              <p className={styles["p-create-account"]}>
                Need to create an account?
              </p>
              <button className={styles['button-create-account']}>Create a free account now!</button>
            </div>
          </div>

          <div className={styles["div-right-container"]}>
            <div className={styles["right-main-div"]}>
              <h1 className={styles.h1}>Welcome back!</h1>
              <p className={styles.p}>
                Login and start joining to the new diagnostics professional
                team.
              </p>
              <img src={AuthImage} alt="auth-login" className={styles.img} />
            </div>
          </div>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default AuthPage;
