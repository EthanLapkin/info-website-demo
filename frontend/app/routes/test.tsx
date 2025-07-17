import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


export function Test() {
    return(
      <Container>
          <Row>
            <Col>one</Col>
            <Col>two</Col>
            <Col>three</Col>
            <Col>FOUR</Col>
          </Row>
        </Container>
    );
  }