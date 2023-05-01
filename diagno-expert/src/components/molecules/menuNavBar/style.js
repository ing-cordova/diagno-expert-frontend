import style from "styled-components";

export const MenuNavBarStyle = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8vh; /* ajustar la altura según tu preferencia */
    max-width: 85vw; /* ancho máximo */
`;

export default MenuNavBarStyle;
