export default function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 text-center bg-primary text-white">
      &copy; {copyrightYear}
      <br />
      Created by Ijan
    </footer>
  );
}
