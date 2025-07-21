import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LinuxFirst() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  const handleNext = () => {
    navigate("/linux-close-max-min");
  }

  return (
    <>
        <div>
            <p>
              The first thing we will address is how to open a window.
              
            </p>
        </div>
        <Container>
          <Row>
            <Col>
              <Button variant="primary" size="lg" onClick={handleNext}>
                Okay
              </Button>
            </Col>
            <Col>
              <Button variant="primary" size="lg" onClick={handleBack}>
                Back
              </Button>
            </Col>
          </Row>
        </Container>
    </>
  );
}