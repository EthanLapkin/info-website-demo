import { Route, Routes } from "react-router-dom";
import Welcome from "./routes/welcome";
import App from "~/root";
import Test from "./routes/test";

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
        <Route path="/test" element={<Test />} />
        
      </Routes>
    </>
  );
}
