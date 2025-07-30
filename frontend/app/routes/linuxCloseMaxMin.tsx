import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LinuxCloseMaxMin() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/linux-first");
  }

  const handleNext = () => {
    navigate("/linux-create-file");
  }

  return (
    <>
        <div>
            <p>
              Allow me to quickly teach you about basic window management.
              After you&apos;ve opened up a window, look to the top right of the window, not the screen. 
              There should be three symbols, a line, a box, and an X. 
              the line is for minimize, which puts the window away but doesn&apos;t close it, the box is for maximize, which makes it take up your whole screen, 
              and the X is for close, which stops it from running. 
              When a program is running, there will be a small orange dot beside the symbol on the left, this is how you an tell if you have closed or just minimized something. 
              Either way, you can click this symbol to bring it back, but it will come back instantly if it was just minimized. Try it yourself.
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