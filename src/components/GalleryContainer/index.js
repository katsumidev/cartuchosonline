import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Element } from "react-scroll";
import {
  Container,
  NewFade,
  Title,
  Trace,
  Row,
  Gallery,
  Column,
} from "./styles";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";

function GalleryContainer() {
  return (
    <Container>
      <Element name="gallery" />
      <Zoom>
        <Title>
          <Trace />
          <h1>Galeria</h1>
        </Title>
      </Zoom>
      <Gallery>
        <li>
          <img className="hero-image" src={pic2} />
        </li>
        <li>
          <img src={pic1} />
        </li>
        <li>
          <img src={pic3} />
        </li>
        <li>
          <img src={pic4} />
        </li>
        <li>
          <img src={pic5} />
        </li>
        <li>
          <img src={pic6} />
        </li>
      </Gallery>
    </Container>
  );
}

export default GalleryContainer;
