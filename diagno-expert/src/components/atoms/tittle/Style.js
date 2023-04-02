import styled from "styled-components";

export const TittleStyle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 0;
    color: ${({ theme }) => theme.colors.white};
`;

export default TittleStyle;