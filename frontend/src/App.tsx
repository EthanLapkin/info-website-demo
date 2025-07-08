import { Route, Routes } from "react-router-dom";

//TODO: replace this with actual routes to real pages when they exist 
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Startup page */}
        <Route path="/" element={<NA />}>
          <Route index element={<NA />} />
        </Route>

        {/* Other Routes */}
        <Route path="/example" element={<Example />} />
      </Routes>
    </>
  );
}

export default App;