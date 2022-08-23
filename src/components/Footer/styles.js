import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background-color: var(--accent-color);
  padding: 0 0 40px 0;

  h1 {
    color: var(--accent-color);
  }
`;

export const Map = styled(MapContainer)`
  width: 80%;
  height: 400px;
  border-radius: 12px;
  margin: 40px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Trace = styled.div`
  background-color: #fff;
  width: 70px;
  height: 5px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 750px) {
    text-align: center;

    svg {
      display: none;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-size: 12pt;
    font-weight: 500;
    margin: 10px 0;
  }
`;

export const QuickDivider = styled.div`
  background-color: #fff;
  height: 1px;
  width: 95%;
  margin: 20px 0;
`;

export const AuthorInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;

  p {
    font-size: 10px;
    color: white;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #fff;
  width: 80%;
  text-align: left;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 13pt;
    font-weight: 500;
  }

  ul {
    background-color: var(--background);
    border-radius: 8px;
    padding: 20px;
    color: var(--text-color);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
      text-transform: lowercase;

      ol {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 10px;

        svg {
          margin-top: 12px;
        }
      }
    }
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  gap: 10px;

  h2 {
    font-size: 13pt;
    font-weight: 500;
  }

  ul {
    background-color: var(--background);
    border-radius: 8px;
    padding: 20px;
    color: var(--text-color);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;

      b {
        color: var(--accent-color);
      }
    }
  }
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 0 20px;

  h2 {
    font-size: 13pt;
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  background-color: var(--background);
  border-radius: 8px;
  padding: 20px;
  flex-direction: column;
  gap: 10px;

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
`;

export const PhoneInput = styled.input`
  background-color: rgb(234, 234, 234);
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
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
  color: white;
  transition: 0.2s;
  gap: 5px;

  :hover {
    transform: scale(1.05);
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
