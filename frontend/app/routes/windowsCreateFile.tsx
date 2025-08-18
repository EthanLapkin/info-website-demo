import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function windowsCreateFile() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/windows/windows-close-max-min");
  }

  const handleNext = () => {
    navigate("/windows/windows-save-file");
  }

  return (
    <>
        <div>
            <p>
              Now let&apos;s create and open a file
              If it isn&apos;t open already, reopen the file explorer from earlier. 
              Now, along the left side of the window you should see words next to symbols, click on the one named Documents, and see the window change slightly. 
              You have now shifted to the Documents folder, which is a location in your computer. 
              This is important to know if you ever want to find a file that&apos;s already there, since every file has to be in a location like this. 
              While in Documents, right click on the screen right of anything that might be in there, in the white space (have diagram). 
              You should see a grey box appear with several words in a column. 
              This appears when you right click in most places, and you can get rid of it by left clicking elsewhere on the screen. 
              Hover your cursor over the word New, and then move it directly on to the word Folder that appeared beside it. 
              From here, you can move down to create a new file of whatever type you want. 
              For now, click on Text Document. This creates a new file with the format “[name].txt” and the part after the dot tells the computer what type of file it is. 
              Name it whatever you like and then press the enter key. double left click on it and it will open in its own window.
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