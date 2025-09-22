import type { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import AdoptVsFoster from "./pages/AdoptVsFoster";
import Layout from "./layouts/Layout"


const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/adopt-vs-foster" element={<AdoptVsFoster />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
