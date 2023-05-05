import React from "react";
import Button from "../../atoms/button";
import Tittle from "../../atoms/tittle";
import { MenuNavBarStyle } from "./style";
import { useNavigate } from "react-router-dom";

const MenuNavBar = () => {
  const navigate = useNavigate();
  return (
    <MenuNavBarStyle>
      <Tittle title="DIAGNO EXPERT | SE" />
      <div>
        <Button onClick={() => console.log("READ INFO")}>READ INFO</Button>
        <Button onClick={() => navigate("/auth")}>SIGN IN</Button>
      </div>
    </MenuNavBarStyle>
  );
};

export default MenuNavBar;
