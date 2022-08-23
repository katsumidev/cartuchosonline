import React from "react";
import Card from "../Card";

import { Container, Wrapper, Trace, Title } from "./styles";
import {
  HiOutlineDesktopComputer,
  BsFillPrinterFill,
  TbTruckDelivery,
} from "../../styles/Icons";
import { Element } from "react-scroll";
import { Fade, Zoom } from "react-reveal";

function About() {
  return (
    <Container>
      <Element name="aboutContainer" />
      <Fade>
        <Title>
          <Trace />
          <h1>Sobre Nós</h1>
        </Title>
      </Fade>
      <Wrapper>
        <Zoom delay={200}>
          <Card
            icon={<HiOutlineDesktopComputer color="fff" size={40} />}
            title="Manutenção"
            text="Manutenção de computadores e impressoras"
          />
        </Zoom>
        <Zoom delay={300}>
          <Card
            icon={<BsFillPrinterFill color="fff" size={40} />}
            title="Recarga"
            text="Recarga de cartucho e toner, originais e remanufaturados!"
          />
        </Zoom>
        <Zoom delay={400}>
          <Card
            icon={<TbTruckDelivery color="fff" size={40} />}
            title="Entrega"
            text="Nós buscamos e entregamos em toda Uberaba!"
          />
        </Zoom>
      </Wrapper>
    </Container>
  );
}

export default About;
