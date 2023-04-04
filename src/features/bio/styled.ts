import styled, { css } from "styled-components"
import WithColorSwap from './HOC';
import { ContenedorCita } from "../quote/styled";


 export const ContenedorBotones = styled.div`
  background-color: #AED6F1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  cursor: not-allowed;
  
  `;

   interface BotonColor {
    isActive?: boolean;
   }

    export const Boton = styled.button<BotonColor>`
    {
        border-radius: 5px;
        border: 1px solid darkgray;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        padding: 2rem;
        margin: 2rem;
        font-family: "Homer Simpson Revised", sans-serif;
        font-size: 1.4rem;
        background-color: ${({isActive}) => isActive? "red" : "#fdd835"};
        color: ${({isActive}) => isActive? "blue" : "whitesmoke"};
         text-shadow: ${({isActive}) => isActive? "2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,-2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,-2px 0px 0 #000000, 0px -2px 0 #000000" : ""};
         cursor: progress;
        
         ${props => props.isActive && css`
         border ${props => props && "white 5px  dotted"};
         `}
        
        }
      `;

      export const Contenedorcita = styled.button