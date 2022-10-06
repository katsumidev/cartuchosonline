import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Form = styled.form`
  display: flex;
  border-radius: 8px;
  padding: 20px;
  flex-direction: column;
  text-align: center;
  background-color: var(--background);
  gap: 10px;

  div {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      color: var(--accent-color);
    }
  }

  @media (max-width: 450px) {
    width: 90%;
  }

  p {
    font-size: 12px;
    margin: 5px 0;
    color: var(--text-color);
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  border-radius: 5px;
  align-self: flex-end;
  padding: 10px 15px;
  background-color: var(--accent-color);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  transition: 0.2s;
  gap: 5px;
  margin-top: 20px;

  span {
    font-size: 12px;
    font-weight: 500;
  }

  :hover {
    transform: scale(1.05);
  }
`;
