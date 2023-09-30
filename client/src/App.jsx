import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GuidePage from "./pages/GuidePage";
import DocsPage from "./pages/DocsPage";
import ExamplePage from "./pages/ExamplePage";

export default function App() {
  return (
    <>
      <a
        className="transition left-0 bg-primary text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0"
        href="#main"
      >
        Skip Navigation
      </a>
      <Header />
      <main
        id="main"
        className="w-full my-4 max-w-7xl min-h-screen md:min-h-[75vh] 2xl:min-h-[80vh]"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/doc" element={<DocsPage />} />
          <Route path="/example" element={<ExamplePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
