import styled, { css } from "styled-components"
import WithColorSwap from './HOC';
import { ContenedorCita } from "../quote/styled";


 export const ContenedorBotones = styled.div`
  background-color: rgb(255, 0, 255);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  
  `;

   interface BotonColor {
    isActive?: boolean;
   }

    export const Boton = styled.button<BotonColor>`
    {
        border-radius: 5px;
        border: 1px solid darkgray;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        padding: 1rem;
        margin: 1rem;
        font-family: "Homer Simpson Revised", sans-serif;
        font-size: 1.4rem;
        background-color: ${({isActive}) => isActive? "red" : "#fdd835"};
        color: ${({isActive}) => isActive? "blue" : "whitesmoke"};
         text-shadow: ${({isActive}) => isActive? "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,-2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,-2px 0px 0 #000000, 0px -2px 0 #000000" : "10px"};
         cursor: progress;
        
         ${props => props.isActive && css`
         border ${props => props && "white 5px  dotted"};
         `}
        
        }
      `;

      export const Contenedorcita = styled.button