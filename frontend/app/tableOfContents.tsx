import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import "./app.css"

function TableOfContents() {//the three lines button is making the textbox off center
    //need to figure out how to make the two ignore each other
    //what if they were just in different containers? -> just do that
    //now need to figure out how to make the title thing show up at same level as navbar
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container className="justify-content-between">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Table of Contents
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TableOfContents;