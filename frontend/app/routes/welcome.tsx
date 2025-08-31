import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import "../app.css";
import TableOfContents from "~/tableOfContents";

const Welcome = () => {
  const navigate = useNavigate();

  const handleWindows = () => navigate("/windows/windows-first");
  const handleMac = () => navigate("/mac/mac-first");
  const handleLinux = () => navigate("/linux/linux-disclaimer");

  return (
    <>
      <>
        <TableOfContents/>
      </>
      <main>
        {/* Hero Section */}
        <section
          className="hero-section-main fade-in"
        >
          <h1 className="hero-title">Hello!</h1>
          <p className="hero-subtitle">
            This website explains basic computer concepts in a beginner-friendly way.
            It&apos;s made in my free time, so while it might not be expert-level, I hope it helps you.
          </p>
        </section>

        {/* Intro */}
        <Container className="my-5 fade-in">
          <p className="fs-5">
            You can navigate using the guided buttons below or the menu at the top left.
            The first step is knowing your operating system (OS). The main ones covered
            here are Windows, Mac, and Linux.
            Please choose yours to begin.
          </p>
        </Container>

        {/* OS Selection */}
        <Container className="text-center my-5 fade-in">
          <Row className="justify-content-center g-4">
            <Col xs={12} md={3}>
              <Button
                variant="light"
                className="shadow-lg w-100 py-3 hover-rise"
                onClick={handleWindows}
              >
                <FaWindows size={40} className="mb-2 text-primary" />
                <div>Windows</div>
              </Button>
            </Col>
            <Col xs={12} md={3}>
              <Button
                variant="light"
                className="shadow-lg w-100 py-3 hover-rise"
                onClick={handleMac}
              >
                <FaApple size={40} className="mb-2 text-dark" />
                <div>Mac</div>
              </Button>
            </Col>
            <Col xs={12} md={3}>
              <Button
                variant="light"
                className="shadow-lg w-100 py-3 hover-rise"
                onClick={handleLinux}
              >
                <FaLinux size={40} className="mb-2 text-warning" />
                <div>Linux</div>
              </Button>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Welcome;


//VERSION WITHOUT AI INFLUENCE

// import { useNavigate } from "react-router-dom";
// import { Button, Col, Container, Row } from "react-bootstrap";

// const Welcome = () => {

//   const navigate = useNavigate();

//   const handleWindows = () => {
//     navigate("/windows/windows-first");
//   };

//   const handleMac = () => {
//     navigate("/mac/mac-first");
//   };

//   const handleLinux = () => {
//     navigate("/linux/linux-disclaimer");
//   };

//   return (
//     <main className="flex items-center justify-center">
//       <header className="flex flex-col items-center">
//         <div className="w-[500px] max-w-[100vw] p-4">
//           <h1 style={{textAlign: "center", fontSize: "44px"}}>
//             Hello!
//           </h1>
//         </div>
//       </header>
//       <Container>
//           <p>
//             The purpose of this website is to explain basic computer things for people that don&apos;t know them. This was made in my free time and is not the work of an expert, so I apologize if the instruction is not at a professional level. 
//             The website will have several different pages that you can move to either through buttons on screen that guide you based on your situation or via a menu that can be accessed at the top left of the screen. 
//             If you already know how to do something or want something specific, feel free to skip ahead.
//             The first thing to do is to know what general type of computer you have, this can also be called your operating system, or OS for short. 
//             The most common ones, and the ones addressed here, are Windows, Mac, and Linux. Please select the one you have.
//           </p>
//       </Container>
//       <Container>
//         <Row className="justify-content-md-center">
//           <Col sm md="2" className="justify-content-center">
//             <Button variant="primary" size="lg" onClick={handleWindows}>
//               Windows
//             </Button>
//           </Col>
//           <Col sm md="2" className="items-center">
//             <Button variant="primary" size="lg" onClick={handleMac}>
//               Mac
//             </Button>
//           </Col>
//           <Col sm md="2" className="justify-content-center">
//             <Button variant="primary" size="lg" onClick={handleLinux}>
//               Linux
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//     </main>
//   );
// }

// export default Welcome;