import Header from "./components/Header";
import Footer from "./components/Footer";

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
        className="w-full min-h-screen md:min-h-[75vh] 2xl:min-h-[80vh]"
      ></main>
      <Footer />
    </>
  );
}
