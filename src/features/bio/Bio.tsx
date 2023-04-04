import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import styles from "./styles.module.css";

import {ContenedorBotones,Boton, BotonActivo, Thing } from './styled';



const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Boton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={
          bioActiva.id === nombre
            ? true
            : false
        }
      >
        {nombre}
      </Boton>
    ));
  };

  return (
    <>
    <div className={styles.bioContainer}>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <img
            src= {bioActiva.image}
            alt={bioActiva.nombre}
            className={styles.bioImagen}
          />
        </div>
        <div>
          <BotonActivo className="yo">{bioActiva.nombre}</BotonActivo>
          <Thing>{bioActiva.descripcion}</Thing>
        </div>
      </div>
    </div>
    </>
  );
};

export default Bio;
