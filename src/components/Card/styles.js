import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
  width: fit-content;
  height: 350px;
  text-align: center;
  background-color: var(--background);
  border-radius: 6px;
  margin: 0 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  gap: 40px;

  @media (max-width: 1000px) {
    min-width: 230px;
  }

  @media (max-width: 750px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  p {
    font-size: 10pt;
    width: 200px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h1 {
      color: var(--accent-color);
      font-size: 17pt;
      font-weight: 500;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
