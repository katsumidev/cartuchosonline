import styled from "styled-components";
import { Zoom } from "react-reveal";
import { ReactComponent as Blob } from "../../assets/finalblob.svg";

export const NewZoom = styled(Zoom)`
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
  }

  background: hsla(0, 0%, 97%, 1);

  background: linear-gradient(
    90deg,
    hsla(0, 0%, 97%, 1) 22%,
    hsla(230, 100%, 92%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(0, 0%, 97%, 1) 22%,
    hsla(230, 100%, 92%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(0, 0%, 97%, 1) 22%,
    hsla(230, 100%, 92%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F8F8F8", endColorstr="#D5DCFF", GradientType=1 );
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 100px;
  width: 100%;
  position: relative;

  @media (max-width: 750px) {
    justify-content: center;
    height: calc(100vh - 80px);
    justify-content: center;
    text-align: center;
  }
`;

export const SvgBackground = styled(Blob)`
  position: absolute;
  z-index: 1;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;

  img {
    position: absolute;
    z-index: 1;
    width: 100%;

    @media (max-width: 950px) {
      display: none;
    }
  }

  @media (max-width: 750px) {
    height: auto;
    margin: 40px 0;
  }
`;

export const Title = styled.h1`
  font-size: 35pt;
  z-index: 1;
  font-weight: 900;
  color: #383838;

  span {
    color: var(--accent-color);
  }
`;

export const SubTitle = styled.h2`
  text-transform: uppercase;
  font-size: 14pt;
  font-weight: 200;
  max-width: 500px;
  margin: 0 2px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  max-width: 700px;
  flex-wrap: wrap;
  gap: 50px;

  div img {
    width: 70%;
    align-self: flex-start;
    justify-self: flex-start;
    margin-left: -20px;

    @media (min-width: 950px) {
      display: none;
    }
  }

  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const Button = styled.div`
  position: relative;
  padding: 1px 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  width: 150px;
  transition: 0.2s;
  height: 40px;

  a {
    text-decoration: none;
  }

  :hover {
    transform: scale(1.05);
  }

  span {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    color: white;
    font-size: 12px;
    gap: 10px;
    cursor: pointer;
    letter-spacing: 3px;
    font-weight: 900;
    transition: 0.2s;
  }

  div {
    position: absolute;
    left: 0;
    top: -90px;
    width: 200px;
    height: 200px;
    background: linear-gradient(134deg, #6a98f0 0%, #4961dc 99%);
    transition: 0.5s;
  }

  div:before,
  div:after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  div:before {
    border-radius: 45%;
    background: rgba(236, 241, 248, 1);
    animation: animate 5s linear infinite;
  }
  div:after {
    border-radius: 40%;
    background: rgba(236, 241, 248, 0.5);
    animation: animate 10s linear infinite;
  }

  :hover div {
    top: -120px;
    cursor: pointer;
  }

  :hover span {
    color: white;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;

export const DropButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 2px;
  border-radius: 100%;
  border: 3.5px solid #6d83f2;
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 1100px) {
    display: none;
  }

  svg {
    color: #6d83f2;
  }

  :hover {
    background-color: #6d83f2;
  }

  :hover svg {
    color: white;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 6px;
  border: 3.5px solid #a1c6ea;
`;

export const Trace = styled.div`
  background-color: #507dbc;
  margin: 15px 0;
  width: 70px;
  height: 5px;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Comment1 = styled.div`
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

  @media (min-width: 950px) {
    left: 60px;
    bottom: 20px;
  }

  @media (max-width: 750px) {
    width: 100%;
    max-width: 80%;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Comment2 = styled.div`
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

  @media (min-width: 950px) {
    right: 60px;
    top: 15px;
  }

  @media (max-width: 750px) {
    width: 100%;
    max-width: 80%;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Comment3 = styled.div`
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

  @media (min-width: 950px) {
    left: 60px;
    top: 40px;
  }

  @media (max-width: 750px) {
    width: 100%;
    max-width: 80%;
  }

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CallButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 8px;
  border-radius: 100%;
  border: 3.5px solid #6d83f2;
  cursor: pointer;
  transition: 0.2s;

  svg {
    color: #6d83f2;
  }

  :hover {
    background-color: #6d83f2;
  }

  :hover svg {
    color: white;
  }
`;
