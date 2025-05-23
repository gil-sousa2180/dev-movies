import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #000;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 15px;
  max-width: 1200px;
  border-radius: 8px;
  flex-direction: column;
  cursor: pointer;

  iframe {
    border: none;
  }
`;
