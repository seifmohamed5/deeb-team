import Carousel from "react-bootstrap/Carousel";
import Img1 from "../img/carousel-1.jpg";
import Img2 from "../img/carousel-2.jpg";
import Img3 from "../img/carousel-3.jpg";
import "./slider.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Slider() {
  // home slider
  return (
    <Carousel data-bs-theme="dark">
      {/* first img */}
      <Carousel.Item className="slider">
        <img className="d-block w-100 " src={Img1} alt="Img1" />
        {/* caption 1 */}
        <Carousel.Caption className="col-lg-12 col-md-8 caption">
          <h5 className="">Best Online Courses</h5>
          <h1 className="col-lg-12 col-md-6"> Best Education From Your Home</h1>
          <Button className="btn-slide " variant="warning" as={Link} to='/about'>
            Learn more
          </Button>
        </Carousel.Caption>
        {/* second img */}
      </Carousel.Item>
      <Carousel.Item className="slider">
        <img className="d-block w-100 " src={Img2} alt="Img2" />
        {/* caption 2 */}
        <Carousel.Caption className="col-lg-12 col-md-8 caption">
          <h5 className="">Best Online Courses</h5>
          <h1 className="">Best Online Learning Platform</h1>
          <Button className="btn-slide " variant="warning" as={Link} to='/about'>
            Learn more
          </Button>
        </Carousel.Caption>
        {/* third img */}
      </Carousel.Item>
      <Carousel.Item className="slider">
        <img className="d-block w-100 " src={Img3} alt="Img3" />
        {/* caption 3 */}
        <Carousel.Caption className="col-lg-12 col-md-8 caption">
          <h5 className="">Best Online Courses</h5>
          <h1 className="">New Way To Learn From Home</h1>
          <Button className="btn-slide " variant="warning" as={Link} to='/about' >
            Learn more
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
