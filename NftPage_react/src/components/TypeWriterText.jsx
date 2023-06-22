import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Button } from "./Button";

export function TypeWriterText() {
  return (
    <>
      <Title>
        Aprende react creando Proyectos
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">Divertidos</span>`)
              .pauseFor(500)
              .deleteAll()
              .typeString(`<span class="text-2">Incribles</span>`)
              .pauseFor(500)
              .deleteAll()
              .typeString(`<span class="text-3">Y reutilizables</span>`)
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        ></Typewriter>
      </Title>
      <SubTitle>react es cool 💜</SubTitle>
      <ButtonContainer>
        <Button text="Explorar Curso"/>
      </ButtonContainer>
    </>
  );
}

/*-----Stylos------*/
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;
const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 48em) {
    align-items: center;
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    button {
      margin: 0 auto;
    }
  }
`;
