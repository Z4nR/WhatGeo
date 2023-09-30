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
        className="sr-only focus:not-sr-only text-white bg-blue-500 p-2 rounded-sm"
        href="#main"
      >
        Skip Navigation
      </a>
      <Header />
      <main
        id="main"
        className="w-full px-4 md:px-0 my-4 max-w-7xl min-h-screen md:min-h-[75vh] 2xl:min-h-[80vh]"
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
