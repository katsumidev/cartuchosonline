import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  AiOutlineInfoCircle,
  GiTicket,
  IoMapSharp,
  AiFillPhone,
} from "../../styles/Icons";
import * as Scroll from "react-scroll";
import { Container, LinkTo, DesktopHeader, Menu, MobileHeader } from "./styles";
import logo from "../../assets/logo.png";
import { useModalContext } from "../../modal.context";
import { Turn as Hamburger } from "hamburger-react";

function Header() {
  const [fix, setFix] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    modalState: { visible },
    openModal,
  } = useModalContext();

  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  var scroll = Scroll.animateScroll;
  window.addEventListener("scroll", setFixed);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <Container active={fix} isOpen={open}>
        <img src={logo} width={60} onClick={() => scroll.scrollToTop()} />
        <DesktopHeader>
          <ul>
            <li>
              <LinkTo to="aboutContainer" smooth={true}>
                <AiOutlineInfoCircle />
                Sobre
              </LinkTo>
            </li>
            {width <= 1100 ? (
              <li onClick={() => openModal()}>
                <GiTicket /> Solicitar Cotação
              </li>
            ) : (
              <li>
                <LinkTo to="form" smooth={true}>
                  <GiTicket /> Solicitar Cotação
                </LinkTo>
              </li>
            )}

            <li>
              <LinkTo to="routesContainer" smooth={true}>
                <IoMapSharp />
                Rotas
              </LinkTo>
            </li>
            <a className="contact" href="tel:+553433121695">
              {" "}
              <AiFillPhone /> Contato
            </a>
          </ul>
        </DesktopHeader>
        <Menu>
          <Hamburger toggled={open} toggle={setOpen} />
        </Menu>
      </Container>
      {open ? (
        <MobileHeader>
          <ul>
            <li>
              <LinkTo
                to="aboutContainer"
                onClick={() => setOpen(!open)}
                smooth={true}
              >
                <AiOutlineInfoCircle />
                Sobre
              </LinkTo>
            </li>
            <li onClick={() => openModal()}>
              <GiTicket /> Solicitar Cotação
            </li>
            <li>
              <LinkTo
                to="routesContainer"
                onClick={() => setOpen(!open)}
                smooth={true}
              >
                <IoMapSharp />
                Rotas
              </LinkTo>
            </li>
            <a className="contact" href="tel:+553433121695">
              {" "}
              <AiFillPhone /> Contato
            </a>
          </ul>
        </MobileHeader>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
