import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function WindowsSaveFile() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/windows/windows-create-file");
  }

//   const handleNext = () => {
//     navigate("/windows/windows-save-file");
//   }

  return (
    <>
        <div>
            <p>
              Since we have created our file, let&apos;s save it and then find it afterwards
              Look to the top left of the window for the word File, click on it and the words Save As that appear in the menu after clicking File. 
              This will open up a temporary window that lets you name your file and choose where on your computer it will be located. 
              Note that you cannot click away from temporary windows until you deal with them, 
              if you want to close it then either click the word cancel in the bottom right, or the X in the top right. 
              Look at the bottom middle of the temporary window, this is where you can rename the file. 
              Doing this doesn&apos;t actually delete the old one, but makes a new one with a different name and the same contents. 
              Name it something different and then press Save in the bottom right. 
              Now click on the File Explorer again and go to Documents like before, and you should see two text files now.
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