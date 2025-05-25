import styled from "styled-components";

export const Title = styled.h4`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
`;
export const Container = styled.div`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #fff;
  }

  img {
    height: 160px;
    border-radius: 5px;
    object-fit: cover;
  }
`;
