import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../app.css";

export default function WindowsFirst() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  const handleNext = () => {
    navigate("/windows/windows-close-max-min");
  }

  return (
    <>
        <section className="hero-section-windows fade-in">
            <p className="hero-subtitle">
              The first thing we will address is how to open a window.
              When you open your computer past the login, you should see several small symbols at the bottom of your screen, one of them being a yellow square with a small blue rectangle: this is a program called File Explorer. 
              If you take your cursor and hover over it, you will see that the name appears nearby. 
              Hovering over things is a good way to find out their name if there isn&apos;t one, or to see the full name if it is too long for the place it is displayed. 
              You can hover over the other symbols down there if you like. Click on the file explorer box, and you will see a new rectangle appear on your screen. 
              This is called a window and is how you interact with most programs. You can only interact with one window at a time, and it&apos;s the one that is in front of everything else. 
              Try clicking on the four blue boxes at the bottom left and then clicking on the yellow and blue rectangle again to see how changing windows works.
            </p>
        </section>
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