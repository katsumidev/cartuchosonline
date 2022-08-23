import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 20px 20px 10px 20px;
  min-width: 200px;
  max-width: 250px;
  margin: 5px;
  color: var(--accent-color);
  z-index: 2;
  background-color: var(--background);
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  gap: 20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
