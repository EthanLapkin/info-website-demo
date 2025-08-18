import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MacFirst() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  const handleNext = () => {
    navigate("/mac/mac-close-max-min");
  }

  return (
    <>
        <div>
            <p>
              The first thing we will address is how to open a window.
              When you open your computer past the login, you should see several small symbols at the bottom of your screen. 
              At the left most position will be a square blue and white smiley face: this is a program called Finder. 
              Hover your cursor over it and see the name appear above it, hovering over things is a good way to find out their name if there isn&apos;t one, or to see the full name if it is too long for the place it is displayed. 
              Finder is where you find your files on your mac computer, left click on it now and you will see a rectangle appear on your screen, this is called a window and is how you interact with most programs. 
              You can only interact with one window at a time, and it&apos;s the one that is in front of everything else. 
              Try clicking on the white triangle shape on a blue background and then clicking on the blue and white smiley face again to see how changing windows works. 
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