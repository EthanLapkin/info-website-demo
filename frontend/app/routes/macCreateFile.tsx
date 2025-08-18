import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MacCreateFile() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/mac/mac-close-max-min");
  }

  const handleNext = () => {
    navigate("/mac/mac-save-file");
  }

  return (
    <>
        <div>
            <p>
              Now let&apos;s create and open a file
              If it isn&apos;t open already, open Finder and look along the left of the window for the word Applications, click on it. 
              This will show you a list of various apps, several of which can create files. 
              Find the one named TextEdit and double left click on it to open it. 
              This will open a new window with a type of file called a rich text document, which just means it holds words. 
              Write whatever you feel like in the document.
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