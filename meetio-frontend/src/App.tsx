import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage/Page";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="p-10 text-center">Home Page</div>}
      />
      <Route path="/about" element={<About />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
}

export default App;