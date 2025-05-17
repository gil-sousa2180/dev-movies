import styled, { css } from "styled-components";

const buttonStyles = css`
  background: transparent;
  color: #ffffff;
  border: 3px solid #ffffff;
  border-radius: 30px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  transition: 0.6s;

  &:hover {
    background: #ffffff;
    color: #ff0000;
    transform: 1;
  }
`;

export const ButtonRed = styled.button`
  ${buttonStyles}
`;
export const ButtonWhite = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 3px solid transparent;
  box-shadow: 0px 0px 5px 7px rgba(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 10px rgba(255 0 0 / 40%);
    background: #ff0000;
    color: #ffffff;
  }
`;
