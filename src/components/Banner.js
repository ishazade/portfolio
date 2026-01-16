import { Container, Row, Col, Carousel } from "react-bootstrap";


// Put your photos in src/assets/img/
import me1 from "../assets/img/Image (2).jpeg";
import me2 from "../assets/img/Image (3).jpeg";


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome</span>

            <h1 className="mb-3">
              Hi, I’m <span className="name">Isha Zade</span>
            </h1>

            <p className="mb-4">
              Product, project, and operations focused — I like turning messy problems into clear plans and shipped outcomes.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a className="btn btn-primary" href="#experience">
                View Experience
              </a>

</div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <div className="hero-carousel">
              <Carousel fade interval={2500} controls={false} indicators={false} pause={false}>
                <Carousel.Item>
                  <img className="hero1" src={me1} alt="Isha Zade portrait 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="hero2" src={me2} alt="Isha Zade portrait 2" />
                </Carousel.Item>
               
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
