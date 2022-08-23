import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import { ReactComponent as Divider } from "./assets/wavesNegative.svg";
import { ReactComponent as TriangleDivider } from "./assets/triangle.svg";
import Footer from "./components/Footer";
import { ModalProvider } from "./modal.context";
import GalleryContainer from "./components/GalleryContainer";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <GlobalStyles />
        <Header />
        <Main />
        <Wrapper>
          <TriangleDividers />
          <GalleryContainer />
          <About />
          <Divider />
          <Footer />
        </Wrapper>
      </ModalProvider>
    </div>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TriangleDividers = styled(TriangleDivider)`
  background-color: var(--accent-color);
  top: -50px;
`;

export default App;
