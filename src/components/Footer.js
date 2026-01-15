import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>IZ</Col>
          <Col size={20} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <button type="button" className="your-link-styles">
  ...
</button>

              
            
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
