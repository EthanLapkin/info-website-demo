import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function WindowsCloseMaxMin() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/windows/windows-first");
  }

  const handleNext = () => {
    navigate("/windows/windows-create-file");
  }

  return (
    <>
        <section className="hero-section-windows fade-in">
            <p className="hero-subtitle">
              <strong>Allow me to quickly teach you about basic window management</strong><br/>
              After you&apos;ve opened up a window, look to the top right of the window, not the screen. 
              There should be three symbols, a line, a box, and an X. 
              The line is for minimize, which puts the window away but doesn&apos;t close it, the box is for maximize, which makes it take up your whole screen, and the X is for close, which stops it from running. 
              Some windows do not have these, but most should. 
              When a program is running, there will be a small grey rectangle below the symbol at the bottom, this is how you an tell if you have closed or just minimized something. 
              Either way, you can click this symbol to bring it back, but it will come back instantly if it was just minimized. Try it yourself.
            </p>
        </section>
        <Container className="fade-in my-5">
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