import { Route, Routes } from "react-router-dom";
import Welcome from "./routes/welcome";
import App from "~/root";
import Test from "./routes/test";
import WindowsFirst from "./routes/windowsFirst";
import MacFirst from "./routes/macFirst";
import LinuxFirst from "./routes/linuxFirst";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (
    <>
      <Routes>
        {/* Nested Route for Welcome under CareerSphereApp */}
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
        </Route>

        {/* Other Routes */}
        {/* REMEMBER TO REMOVE TEST BEFORE FINISH*/}
        <Route path="/test" element={<Test />} />
        <Route path="/windows-first" element={<WindowsFirst />} />
        <Route path="/mac-first" element={<MacFirst />} />
        <Route path="/linux-first" element={<LinuxFirst />} />
        
      </Routes>
    </>
  );
}
