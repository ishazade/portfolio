import { Container, Row, Col } from "react-bootstrap";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <h2>Experience</h2>
          </Col>
        </Row>

        <Row>
          <Col>

            {/* Experience 1 */}
            <div className="experience-item">
              <div className="experience-meta">
                <span className="company">Students Landing</span>
                <span className="date">Aug 2025 – Present</span>
              </div>
              <h3>Associate Technical Project Manager</h3>
              <ul>
                <li>Led the end-to-end development and launch of the Students Landing website, coordinating cross-functional teams across design, development, and content to deliver a student-focused platform.</li>
                <li>Partnered with UX designers and developers to translate business requirements into functional website features, improving usability and clarity for prospective students.</li>
                <li>Raised and tracked tasks and issues using Teamwork.com, and facilitated daily stand-ups to improve requirement clarity and reduce rework by 5%.</li>
         
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="experience-item">
              <div className="experience-meta">
                <span className="company">New England Sports Network</span>
                <span className="date">July 2024 – Sep 2024</span>
              </div>
              <h3>Project Management Intern</h3>
              <ul>
                <li>Conducted User Acceptance Testing and raised JIRA tickets to address broadcasting and livestreaming issues, improving Android and iOS mobile app compatibility by 12%.</li>
                <li>Analyzed platform feature data trends using Adobe Analytics, Firebase Crashlytics and Conviva, driving data-backed enhancements that led to a 20% decrease in crash rate.</li>
                <li>Documented business requirements for capturing user behavior through focus groups, market research and enhancing product engagement through platform strategy by 15%.</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="experience-item">
              <div className="experience-meta">
                <span className="company">Thinnai</span>
                <span className="date">Mar 2023 – Aug 2023</span>
              </div>
              <h3>Associate Product and Operations Manager</h3>
              <ul>
                <li>Contributed to the product roadmap & UI/UX improvements, increasing hotel bookings by 20%.</li>
                <li>Led sprint planning using Smartsheet and Agile & Scrum methodologies, which helped in achieving project KPIs by 50%.</li>
                <li>Managed project scope and timeline by collaborating with designers, developers and testers, mitigating risks by 25%.</li>
              </ul>
            </div>

            {/* Experience 4 */}
            <div className="experience-item">
              <div className="experience-meta">
                <span className="company">Pepper Content</span>
                <span className="date">Jan 2023 – Mar 2023</span>
              </div>
              <h3>Category Operations Consultant</h3>
              <ul>
                <li>Spearheaded end-to-end project implementation and acted as a single POC to achieve a 15% increase in project efficiency.</li>
                <li>Collaborated with multidisciplinary teams to ensure timely project delivery, leading to a 30% reduction in delays andenhanced overall project quality through effective risk mitigation.</li>
                <li>Maintained client relationships & stakeholder communication, while working with Adani, Unacademy & Wint Wealth.</li>
              </ul>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};
