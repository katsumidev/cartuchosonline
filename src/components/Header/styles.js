import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  height: ${(props) => (props.active ? "50px" : "60px")};
  width: 100vw;

  display: flex;
  padding: 0 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;

  background-color: ${(props) => (props.active ? "white" : "transparent")};
  box-shadow: ${(props) =>
    props.active ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none"};

  color: black;

  img {
    cursor: pointer;
  }

  h1 {
    color: black;
    font-size: 16px;
  }

  @media (max-width: 750px) {
    background-color: ${(props) => (props.isOpen ? "white" : "")};
    justify-content: ${(props) =>
      props.active ? "space-between" : "flex-end"};

    img {
      display: ${(props) => (props.active ? "block" : "none")};
    }
  }
`;

export const MobileHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  overflow: hidden;
  margin-top: 50px;
  z-index: 999;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    li {
      text-transform: uppercase;
      font-size: 16pt;
      font-weight: 500;
      cursor: pointer;
      padding: 5px 15px;
      color: #666;
      display: flex;
      align-items: center;
      gap: 8px;
      background-image: linear-gradient(
        var(--accent-color),
        var(--accent-color)
      );
      background-size: 0% 3px;
      background-repeat: no-repeat;
      transition: background-size 0.3s;
      margin: 5px 0;
      background-position: 50% calc(100% - 0px);

      :hover {
        background-size: 100% 3px;
      }
    }

    .contact {
      background-color: var(--accent-color);
      border-radius: 12px;
      padding: 10px;
      transition: 0.2s;
      background-image: none;
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      font-size: 16pt;
      font-weight: 500;

      :hover {
        background-color: #2e5d9e;
      }
    }
  }

  @media (min-width: 750px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: flex;
  }
`;

export const DesktopHeader = styled.div`
  @media (max-width: 750px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    li {
      text-transform: uppercase;
      font-size: 10pt;
      font-weight: 500;
      cursor: pointer;
      padding: 5px 15px;
      color: #666;
      display: flex;
      align-items: center;
      gap: 8px;
      background-image: linear-gradient(
        var(--accent-color),
        var(--accent-color)
      );
      background-size: 0% 3px;
      background-repeat: no-repeat;
      transition: background-size 0.3s;
      margin: 5px 0;
      background-position: 50% calc(100% - 0px);

      :hover {
        background-size: 100% 3px;
      }
    }

    .contact {
      background-color: var(--accent-color);
      border-radius: 12px;
      padding: 10px;
      transition: 0.2s;
      background-image: none;
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      text-decoration: none;
      color: white;

      :hover {
        background-color: #2e5d9e;
      }
    }
  }
`;

export const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
