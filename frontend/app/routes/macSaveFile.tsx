import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MacSaveFile() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/mac-create-file");
  }

//   const handleNext = () => {
//     navigate("/linux-save-file");
//   }

  return (
    <>
        <div>
            <p>
              Since we have created our file, let&apos;s save it and then find it afterwards
              After you have written whatever you wish in your text document, look to the top left of your screen for the word File and click on it.
              Now click on the words Save As that appear in the menu after clicking File. 
              This allows you to name your new file and choose its location. 
              Name it whatever you like and then click on the bar below the name to open the location menu, click on Documents. 
              Now press the Save button in the bottom left of this window to save your new file. 
              Open Finder again and click the word Documents on the left of the window and see that your new file is now there. 
            </p>
        </div>
        <Container>
          <Row>
            {/* <Col>
              <Button variant="primary" size="lg" onClick={handleNext}>
                Okay
              </Button>
            </Col> */}
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