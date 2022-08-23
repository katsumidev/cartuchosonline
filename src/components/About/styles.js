import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 100vw;
  padding: 20px 0 100px 0;

  h1 {
    color: var(--accent-color);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 90%;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Trace = styled.div`
  background-color: #507dbc;
  width: 70px;
  height: 5px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
