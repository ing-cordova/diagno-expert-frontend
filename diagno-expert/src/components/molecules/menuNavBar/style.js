import style from 'styled-components';

export const MenuNavBarStyle = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 85vw; /* ancho máximo */
    height: 8vh; /* ajustar la altura según tu preferencia */
    margin: 5vh auto 0 auto; /* margen igual y relativo */
`;

export default MenuNavBarStyle;
