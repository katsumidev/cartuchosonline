import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: var(--accent-color);
  color: #fff;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const Gallery = styled.ul`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  .hero-image {
    width: 450px;
    height: 450px;

    @media (max-width: 900px) {
      width: 100%;
      height: 100%;
    }
  }

  li {
    flex-basis: 350px; /* width: 350px; */
  }

  li img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 5px;
  }
`;

export const Trace = styled.div`
  background-color: #fff;
  width: 70px;
  height: 5px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
