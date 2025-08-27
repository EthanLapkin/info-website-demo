import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LinuxSaveFile() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/linux/linux-create-file");
  }

//   const handleNext = () => {
//     navigate("/linux/linux-save-file");
//   }

  return (
    <>
        <section className="hero-section-linux fade-in">
            <p className="hero-subtitle">
              <strong>Since we have created our file, let&apos;s save it and then find it afterwards</strong><br/>
              After you have written whatever you wish in your text file, look for three horizontal lines near the top right of the text window. 
              Click on these to open the menu, and then click the word Save. 
              This saves your progress on the file, and since you had to find the location you wanted before you made the file, you already know exactly where it is. 
              If you want to make a file in a different location, just use Files to move to it first.
            </p>
        </section>
        <Container className="fade-in my-5">
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