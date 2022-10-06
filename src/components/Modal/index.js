import React, { useState } from "react";
import { FaTelegramPlane } from "../../styles/Icons";
import {
  Container,
  Form,
  FirstRow,
  SubmitButton,
  EmailInput,
  PhoneInput,
  NameInput,
  TextArea,
  Close,
} from "./styles";
import emailjs from "emailjs-com";
import { useModalContext } from "../../modal.context";
import SuccessModal from "../SuccessModal";

function Modal() {
  const {
    modalState: { message, visible },
    openModal,
    closeModal,
  } = useModalContext();

  const [success, setSuccess] = useState();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "cartuchosonline",
        "template_xqqeuf4",
        e.target,
        "JnfkGdJwlvTT8dS0o"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <Container>
      {success ? (
        <SuccessModal />
      ) : (
        <>
          {" "}
          <Form onSubmit={sendEmail}>
            <Close size={25} onClick={() => closeModal()} />
            <FirstRow>
              <div>
                <p>Nome</p>
                <NameInput name="username" />
              </div>
              <div>
                <p>Telefone</p>
                <PhoneInput name="cellphone" />
              </div>
            </FirstRow>
            <div>
              <p>Email</p>
              <EmailInput name="user_email" placeholder="exemplo@gmail.com" />
            </div>
            <div>
              <p>Como podemos te ajudar?</p>
              <TextArea
                name="message"
                placeholder="Gostaria de saber sobre a disponibilidade e os preços. Preciso de ajuda com o seguinte: "
              />
            </div>
            <SubmitButton type="submit" onClick={() => setSuccess(true)}>
              <FaTelegramPlane />
              <span>Enviar</span>
            </SubmitButton>
          </Form>
        </>
      )}
    </Container>
  );
}

export default Modal;
