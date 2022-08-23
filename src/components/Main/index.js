import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  SvgBackground,
  Title,
  SubTitle,
  MainInfo,
  Button,
  DropButton,
  ButtonsContainer,
  Trace,
  Wrapper,
  Holder,
  Comment1,
  Comment2,
  Comment3,
} from "./styles";
import { GiTicket, RiArrowDropDownLine, AiFillStar } from "../../styles/Icons";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import ReviewCard from "../ReviewCard";
import Modal from "../Modal";
import { useModalContext } from "../../modal.context";

function Main() {
  const {
    modalState: { visible },
    openModal,
  } = useModalContext();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <Wrapper>
      {visible ? <Modal /> : <></>}
      <Container>
        <MainInfo>
          <div>
            <Fade bottom>
              <img src={logo} />
              <Trace />
              <Title>
                CARTUCHOS <span>ON-LINE</span>
              </Title>
            </Fade>
            <Fade bottom>
              <SubTitle>
                Recarga de Cartucho e Toner, Conserto de Computadores e
                Impressoras!
              </SubTitle>
            </Fade>
          </div>
          <ButtonsContainer>
            <Zoom delay={200}>
              {width <= 1100 ? (
                <Button onClick={() => openModal()}>
                  <span>
                    {" "}
                    <GiTicket size={40} />
                    SOLICITAR COTAÇÃO
                  </span>
                  <div></div>
                </Button>
              ) : (
                <Button>
                  <Link to="form" smooth={true}>
                    <span>
                      {" "}
                      <GiTicket size={40} />
                      SOLICITAR COTAÇÃO
                    </span>
                    <div></div>
                  </Link>
                </Button>
              )}
            </Zoom>
            <Zoom delay={350}>
              <Link to="gallery" smooth={true}>
                <DropButton>
                  <RiArrowDropDownLine size={35} />
                </DropButton>
              </Link>
            </Zoom>
          </ButtonsContainer>
        </MainInfo>
      </Container>
      <Holder>
        <Comment1>
          <p>Tive liberdade pra fazer minhas escolhas me sentindo em casa.</p>
          <div>
            <div>
              {Array.from(Array(5).keys()).map((n) => (
                <AiFillStar fill="#FBBC04" />
              ))}
            </div>
            <b>- Débora S</b>
          </div>
        </Comment1>
        <Comment2>
          <p>
            Excelente atendimento melhor preço de Uberaba. Indico essa loja a
            todos que gostam de ótimos produtos
          </p>
          <div>
            <div>
              {Array.from(Array(5).keys()).map((n) => (
                <AiFillStar fill="#FBBC04" />
              ))}
            </div>
            <b>- Pill C</b>
          </div>
        </Comment2>
        <Comment3>
          <p>
            FOI A PRIMEIRA VEZ QUE UTILIZEI DOS SERVIÇOS, O ATENDIMENTO FOI
            FANTÁSTICO, A FORMA COMO TIRARAM MINHAS DÚVIDAS E SÃO RÁPIDOS NA
            EXECUÇÃO DOS SERVIÇOS ALÉM DISSO NAO COBRAM TAXA ADICIONAL PARA
            ENTREGA. PERFEITO
          </p>
          <div>
            <div>
              {Array.from(Array(5).keys()).map((n) => (
                <AiFillStar fill="#FBBC04" />
              ))}
            </div>
            <b>- Débora S</b>
          </div>
        </Comment3>
        {/* <ReviewCard
          style={divStyle}
          author={`- Débora S`}
          comment={`"Tive liberdade pra fazer minhas escolhas me sentindo em casa."`}
        />
        <ReviewCard
          author={`- Rogério F`}
          comment={`"Excelente atendimento melhor preço de Uberaba. Indico essa loja a todos que gostam de ótimos produtos"`}
        />
        <ReviewCard
          author={`- Pill C`}
          comment={`"FOI A PRIMEIRA VEZ QUE UTILIZEI DOS SERVIÇOS, O ATENDIMENTO FOI FANTÁSTICO, A FORMA COMO TIRARAM MINHAS DÚVIDAS E SÃO RÁPIDOS NA EXECUÇÃO DOS SERVIÇOS ALÉM DISSO NAO COBRAM TAXA ADICIONAL PARA ENTREGA. PERFEITO"`}
        /> */}
        <SvgBackground />
        <img src={logo} />
      </Holder>
    </Wrapper>
  );
}

export default Main;
