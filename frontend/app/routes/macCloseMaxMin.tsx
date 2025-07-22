import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function WindowsFirst() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/macFirst");
  }

  const handleNext = () => {
    navigate("/mac-create-file");
  }

  return (
    <>
        <div>
            <p>
              After you&apos;ve opened up a window, look to the top left of the window, not the screen. 
              There should be three dots: red, yellow, and green. When you hover your cursor over them, they will show an X, a line, and two diagonal arrows. 
              The X is to close the window, which stops it from working until you open it again, the line is for minimize, which puts it away but keeps it going, and the two arrows for maximize, which makes it take up your whole screen. 
              When a program is running, there will be a small grey dot below the symbol at the bottom, this is how you an tell if you have closed or just minimized something. 
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