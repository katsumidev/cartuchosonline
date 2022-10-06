import React from "react";
import { useModalContext } from "../../modal.context";
import { Container, SubmitButton, Form } from "./styles";
import { BsCheckLg, FiCheckCircle } from "../../styles/Icons";

function SuccessModal() {
  const {
    modalState: { message, visible },
    closeModal,
  } = useModalContext();

  return (
    <Container>
      <Form>
        <div>
          <FiCheckCircle size={100} />
          <span>
            <h2>Cotação enviada com sucesso!</h2>
            <h3>Aguarde o contato.</h3>
          </span>
        </div>

        <SubmitButton onClick={() => closeModal()}>
          <BsCheckLg />
          <span>Ok!</span>
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default SuccessModal;
