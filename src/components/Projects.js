import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Featured Project</h2>
          </Col>
        </Row>

        <Row className="align-items-start g-4">
          {/* Left: description */}
          <Col md={7}>
            <div className="project-block">
              <div className="project-kicker">Data Visualization</div>

              <h3>Airbnb Austin Data Visualization Dashboard</h3>
              
          

              <div className="project-facts">
                <span className="fact">Tools: Tableau</span><span> </span>  
                <span className="fact">Data: Kaggle</span><span> </span>  
                <span className="fact">Role: End-to-end (data cleaning → charts → storytelling)</span>
              </div>

              <ul className="project-bullets">
                <li>Designed an interactive data visualization dashboard focused on Airbnb listings in Austin, Texas, from a traveler-centric perspective rather than an investor lens.</li>
                <li>Analyzed key decision factors including price, housing capacity, availability, property type, room type, amenities, and neighborhood popularity to surface meaningful booking insights.</li>
                <li>Identified non-linear relationships between price and capacity, and demonstrated how accommodation types and availability vary significantly across price ranges. </li>
                <li>Built interactive filters (property type and room type) enabling users to dynamically explore listings based on budget and preferences. </li>
              </ul>

              <div className="project-links">
  <div className="project-links">
  <div className="project-links">
  <a
  className="btn btn-outline-light"
  href="https://docs.google.com/presentation/d/1n7j2NFlyDSx4_P44x0SnHQ5MP1ecxLkJvlsa3kiyikM/edit?slide=id.p1#slide=id.p1"
  target="_blank"
  rel="noreferrer"
>
  View Project Presentation
</a>


</div>

</div>

</div>


          
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
