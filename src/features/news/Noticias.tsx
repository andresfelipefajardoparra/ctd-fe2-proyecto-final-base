import { useState } from "react";
import { INoticiasNormalizadas, useNoticias } from "../../hook/useNoticias";
import { Modal} from "./Modal";
import { 
  ContenedorNoticias,
  TituloNoticias,
  ListaNoticias,
  TarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  BotonLectura, 
} from "./styled";



 const Noticias = () => {
  const noticias = useNoticias(); 
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={n.imagen} />
            <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {n.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
        <Modal setModal={setModal} modal={modal}/>
        </ListaNoticias>
    </ContenedorNoticias>

);
};

export default Noticias;