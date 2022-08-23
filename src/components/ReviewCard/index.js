import React from "react";
import { AiFillStar } from "../../styles/Icons";
import { Container } from "./styles";

function ReviewCard(props) {
  return (
    <Container>
      <p>{props.comment}</p>
      <div>
        <AiFillStar fill="#FBBC04" />
        <b>{props.author}</b>
      </div>
    </Container>
  );
}

export default ReviewCard;
