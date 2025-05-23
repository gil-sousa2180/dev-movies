import styled from "styled-components";

export const Container = styled.div`
  min-height: 90px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: ${(props) =>
    props.changeBackground ? "#0c0c0c" : "transparent"};
  transition: changeBackground 1s ease-in-out;

  img {
    width: 23%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const Li = styled.li`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &::after {
    content: "";
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 3px;
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    transition: width 0.6s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;
