import { Routes, Route } from "react-router-dom";
import About from "./components/about-page/page";
import Footer from "./components/footer/page";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<div className="p-10 text-center">Home Page</div>}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
