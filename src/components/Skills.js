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
              <li>Product Strategy</li>
              <li>Roadmapping</li>
              <li>User Research</li>
              <li>Requirements Gathering</li>
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
              <li>Notion</li>
              <li>Figma</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
