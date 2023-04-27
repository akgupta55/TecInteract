import Home from "./PAGES/Home/Home.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 NOT FOUND</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
