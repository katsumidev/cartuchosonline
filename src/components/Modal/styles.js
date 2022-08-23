import styled from "styled-components";
import { AiFillCloseCircle } from "../../styles/Icons";

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

export const Close = styled(AiFillCloseCircle)`
  cursor: pointer;
  align-self: flex-end;
  width: 20px;
  color: var(--accent-color);
`;

export const Form = styled.form`
  display: flex;
  border-radius: 8px;
  padding: 20px;
  flex-direction: column;
  background-color: var(--background);
  gap: 10px;
  

  @media (max-width: 450px) {
    width: 90%;
  }

  p {
    font-size: 12px;
    margin: 5px 0;
    color: var(--text-color);
  }
`;

export const EmailInput = styled.input`
  background-color: rgb(234, 234, 234);
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  width: 100%;
`;

export const NameInput = styled.input`
  background-color: rgb(234, 234, 234);
  padding: 10px 15px;
  border-radius: 5px;
  border: none;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const PhoneInput = styled.input`
  background-color: rgb(234, 234, 234);
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: none;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  background-color: rgb(234, 234, 234);
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  max-width: 400px;
  width: 100%;
  min-height: 120px;
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

  span {
    font-size: 12px;
    font-weight: 500;
  }

  :hover {
    transform: scale(1.05);
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
