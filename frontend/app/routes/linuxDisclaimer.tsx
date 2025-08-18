import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LinuxDisclaimer() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  const handleNext = () => {
    navigate("/linux/linux-first");
  }

  return (
    <>
        <div>
            <p>
              I will start this with a disclaimer, unlike windows and mac which have unified interfaces, Linux allows the user to pick from a variety of different styles, 
              which unfortunately makes this section much less useful than the others. 
              The specific system this guide is for is Ubuntu, and the default interface is called GNOME, anything different than these will not appear exactly as shown. 
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