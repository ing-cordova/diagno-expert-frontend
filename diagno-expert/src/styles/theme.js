const colorsLight = {
    primary: '#3B65FF',
    secondary: '#3888FF',
    secondaryHover: '#5c9dff',
    tertiary: '#C8C8C8',
    background: '#3B65FF',
    white: '#FFFFFF',
};

const colorsDark = {
    ...colorsLight
};

const zIndex = {
    min: -1,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    max: 10,
    nav: 20,
    modal: 30
};

export const themeLight = {
    colors: colorsLight,
    zIndex
};

export const themeDark = {
    colors: colorsDark,
    zIndex
};