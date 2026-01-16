import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <h2>Skills</h2>
          </Col>
        </Row>

        <Row className="skills-group">
          <Col md={4}>
            <h4>Product</h4>
            <ul className="skills-list">
              <li>Requirements Gathering</li>
              <li>Market Research</li>
              <li>Figma</li>
              <li>Prototyping</li>
            </ul>
          </Col>

          <Col md={4}>
            <h4>Project & Operations</h4>
            <ul className="skills-list">
              <li>Stakeholder Management</li>
              <li>Agile / Scrum</li>
              <li>Process Optimization</li>
              <li>Risk Management</li>
            </ul>
          </Col>

          <Col md={4}>
            <h4>Tools</h4>
            <ul className="skills-list">
              <li>Jira</li>
              <li>Confluence</li>
              <li>Tableau</li>
              <li>VS Code</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
