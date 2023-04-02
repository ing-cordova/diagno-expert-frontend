import React from "react";
import Button from "../../atoms/button";
import Tittle from "../../atoms/tittle";
import {MenuNavBarStyle} from "./style";

const MenuNavBar = () => {
    return (
        <MenuNavBarStyle>
            <Tittle title='DIAGNO EXPERT | SE'/>
            <div>
                <Button onClick={() => console.log('READ INFO')}>READ INFO</Button>
                <Button onClick={() => console.log('SIGN IN')}>SIGN IN</Button>
            </div>
        </MenuNavBarStyle>
    );
};

export default MenuNavBar;