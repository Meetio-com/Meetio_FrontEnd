import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage/Page";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="p-10 text-center">Home Page</div>}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;