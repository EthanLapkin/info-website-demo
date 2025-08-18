import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LinuxFirst() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/linux/linux-disclaimer");
  }

  const handleNext = () => {
    navigate("/linux/linux-close-max-min");
  }

  return (
    <>
        <div>
            <p>
              The first thing we will address is how to open a window. 
              Now, when you open your computer past the login, you should see several small symbols along the left side of the screen. 
              Look for a grey and orange folder shaped icon and hover your cursor over it. 
              This is a program called Files, and it will show you its name when you hover over it, 
              hovering over things is a good way to find out their name if there isn&apos;t one, or to see the full name if it is too long for the place it is displayed. 
              Click on it now and you will see a rectangle appear on your screen, this is called a window and is how you interact with most programs. 
              You can only interact with one window at a time, and it&apos;s the one that is in front of everything else. 
              Try clicking on the white triangle shape and semi-circle on an orange background (need image) and then clicking on the grey folder again to see how changing windows works.
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