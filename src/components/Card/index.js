import React from "react";

import { Container, IconWrapper } from "./styles";

function Card(props) {
  return (
    <Container>
      <div>
        <IconWrapper>{props.icon}</IconWrapper>
        <h1>{props.title}</h1>
      </div>
      <p>{props.text}</p>
    </Container>
  );
}

export default Card;
