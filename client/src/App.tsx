import type { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import AdoptVsFoster from "./pages/AdoptVsFoster";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/adopt-vs-foster" element={<AdoptVsFoster />} />
      </Routes>
    </Router>
  );
};

export default App;
