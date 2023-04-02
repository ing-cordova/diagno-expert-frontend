import style from 'styled-components';

export const ButtonStyle = style.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;
    padding: 8px 25px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    vertical-align: middle;
    white-space: nowrap;
    margin: 0 5px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
        border-color: ${({ theme }) => theme.colors.secondaryHover};
        color: ${({ theme }) => theme.colors.white};
    }
`;