import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header.tsx";
import Footer from "./components/layout/footer.tsx";
import HomePage from "./pages/home.tsx";
import FilterPage from "./pages/animals.tsx";
import AdoptPage from "./pages/adopt.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dogs" element={<FilterPage type={"dogs"} />} />
            <Route path="/cats" element={<FilterPage type={"cats"} />} />
            <Route path="/adopt" element={<AdoptPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
