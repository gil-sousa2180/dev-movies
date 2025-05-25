import styled, { keyframes } from "styled-components";

const scale = keyframes`
 from{
  transform: scale(0);
 }
 to{
  transform: scale(1);
 }

`;
export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 85px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1300px;
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 3.8rem;
    font-weight: 500;
    color: #ffffff;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 280px;
    border-radius: 30px;
    box-shadow: rgb(200 200 215/ 30%) 0px 7px 29px 0px;
    animation: ${scale} 0.6s linear;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;
