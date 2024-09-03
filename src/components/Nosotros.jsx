import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import comiendoImage from '../assets/comiendo.png';
import manasaImage from '../assets/manasa.png';

export const Nosotros = () => {
  useEffect(() => {
    const clickear = () => {
      console.log("Click");
    };

    window.addEventListener("click", clickear);

    return () => {
      window.removeEventListener("click", clickear);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <div className="content-container ">
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={comiendoImage}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={manasaImage}
                alt="Second slide"
              />
              
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="text-container">
          <p>Ofrecemos comida natural y pasteurizada para mascotas, elaborada con ingredientes de alta calidad, sin conservantes ni aditivos, diseñada para brindar una alimentación balanceada y saludable. Nuestro enfoque en la excelencia y perfección garantiza una nutrición óptima para perros de todas las edades y razas, llevándolos a vivir una vida más sana y feliz.</p>
        </div>
      </div>
    </div>
  );
};
