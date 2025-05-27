import styled, { keyframes } from "styled-components";

const scale = keyframes`

from{
  transform: scale(0);
}
to {
  transform: scale(1);
}
 `;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 85px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
  cursor: pointer;
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 3;

  img {
    width: 300px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.9s ease-in-out;
  }
`;

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 3;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 35px;
    font-weight: 500;
    color: #fff;
  }

  p {
    font-weight: 500;
    color: #ffff;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 50%;
    height: 100%;
    margin: 30px 0;
  }

  h4 {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  iframe {
    border: none;
    border-radius: 5px;
    box-shadow: rgb(255 255 255 / 15%) 0px 5px 16px 0px;
  }
`;
