import React, { useState } from "react";
import {
  Container,
  Map,
  Title,
  Trace,
  Info,
  Contact,
  LeftWrapper,
  RightWrapper,
  ChangeZoom,
  EmailInput,
  NameInput,
  MiddleWrapper,
  MessageInput,
  PhoneInput,
  FirstRow,
  Form,
  TextArea,
  SubmitButton,
  QuickDivider,
  AuthorInfo,
} from "./styles";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import emailjs from "emailjs-com";
import {
  IoMdLock,
  IoMdUnlock,
  MdEmail,
  AiFillPhone,
  FaTelegramPlane,
} from "../../styles/Icons";
import locationIcon from "../../assets/location_icon.png";
import L from "leaflet";
import { Element } from "react-scroll";
import { Fade, Zoom } from "react-reveal";
import SuccessModal from "../SuccessModal";

function Reviews() {
  const MarkerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  const [open, setOpen] = useState(false);

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    e.preventDefault();
  };

  const time = new Date();

  return (
    <Container>
      {open ? <SuccessModal /> : <></>}
      <Zoom>
        <Title>
          <Trace />
          <h1>Entre em contato!</h1>
        </Title>
      </Zoom>
      <Element name="routesContainer" />
      <Zoom delay={200}>
        <Info>
          <h3>
            {time < new Date().setHours(18) && time > new Date().setHours(8) ? (
              <>
                {" "}
                <IoMdUnlock size={18} />
                Estamos abertos agora! Fechamos as 18:00.
              </>
            ) : (
              <>
                {" "}
                <IoMdLock size={18} />
                Estamos fechados agora! Abrimos as 8:30 da manhã.
              </>
            )}
          </h3>
        </Info>
      </Zoom>
      <Map center={[-19.740220284990205, -47.932456662666155]} zoom={15}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/twilightmoon/cl70w18v6000v15moe6rcn2iy/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker
          icon={MarkerIcon}
          position={[-19.740220284990205, -47.932456662666155]}
        >
          <Popup>
            Cartuchos On-line <br />
          </Popup>
        </Marker>
      </Map>

      <Element name="contactContainer" />
      <Contact>
        <Zoom delay={200}>
          <LeftWrapper>
            <h2>Nos chame!</h2>
            <ul>
              <li>
                <MdEmail /> CARTUCHOSCRF@gmail.COM
              </li>
              <li>
                <ol>
                  <AiFillPhone />

                  <div>
                    <li>(34) 3312-1695</li>
                    <li>(34) 3338-9401</li>
                    <li>(34) 3325-6530</li>
                  </div>
                </ol>
              </li>
            </ul>
          </LeftWrapper>
        </Zoom>
        <Zoom>
          <Element name="form" />
          <MiddleWrapper>
            <h2>Solicite a cotação!</h2>
            <Form onSubmit={sendEmail}>
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
              <SubmitButton type="submit" onClick={() => setOpen(true)}>
                <FaTelegramPlane />
                <span>Enviar</span>
              </SubmitButton>
            </Form>
          </MiddleWrapper>
        </Zoom>
        <Zoom delay={350}>
          <RightWrapper>
            <h2>Endereço</h2>
            <ul>
              <li>Rua Padre Francisco Rocha, 268 - Fabrício</li>
              <li>
                <b>Uberaba - MG</b>
              </li>
              <li>
                <b>(CEP)</b>38065-080
              </li>
              <li>Brasil</li>
            </ul>
          </RightWrapper>
        </Zoom>
      </Contact>
      <QuickDivider />
      <AuthorInfo>
        <p>Site desenvolvido por Twilight Moon (@mooncoded)</p>
      </AuthorInfo>
    </Container>
  );
}

export default Reviews;
