import Carousel from 'react-bootstrap/Carousel';
import dentista from '../../assets/dentista.jpg';
import dentista2 from '../../assets/dentista2.jpg'
import dentista3 from '../../assets/dentista3.jpg'
import './Home.css'



export const Home = () => {
  return (
    <>
    <div className='yes'>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dentista}
          alt="First slide"
        />
        <Carousel.Caption className="carouselCaptionContainerDesign">
          <h3 className="carouselCaptionDesign">We are trusted by our all Patients</h3>
          <p className="carouselCaptionDesign">
           We improve the life of out patients solving the most complicated cases
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dentista2}
          alt="Second slide"
        />
        <Carousel.Caption className="carouselCaptionContainerDesign">
          <h3 className="carouselCaptionDesign">Innovative dental surgery</h3>
          <p className="carouselCaptionDesign">
           We improve the life of out patients solving the most complicated cases
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dentista3}
          alt="Third slide"
        />
        <Carousel.Caption className="carouselCaptionContainerDesign">
          <h3 className="carouselCaptionDesign">The smile you always dreamed of</h3>
          <p className="carouselCaptionDesign">We care about what matters the most</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}




