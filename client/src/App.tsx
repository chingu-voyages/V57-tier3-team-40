import type { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import AdoptVsFoster from "./pages/AdoptVsFoster";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/adopt-vs-foster" element={<AdoptVsFoster />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
