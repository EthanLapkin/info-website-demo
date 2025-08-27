import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LinuxCreateFile() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/linux/linux-close-max-min");
  }

  const handleNext = () => {
    navigate("/linux/linux-save-file");
  }

  return (
    <>
        <section className="hero-section-linux fade-in">
            <p className="hero-subtitle">
              <strong>Now let&apos;s create and open a file</strong><br/>
              If it isn&apos;t open already, open Files. 
              You will see the same words along the left of the window, click on Documents.
              You have now shifted to the Documents folder, which is a location in your computer. 
              This is important to know if you ever want to find a file that&apos;s already there, since every file has to be in a location like this.
              Right click with your cursor in the now empty middle of the window. 
              This will open a small menu, where you will click on the words “Open in Terminal”. 
              This will open a black window called a command line or a terminal, all you need to do is type “touch [name you want].txt” and then hit the enter key.
               This will create a text file with the name you typed, and you can see it in the Documents folder if you go back to Files. 
               Double click on the file to open it and then write whatever you feel like.
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