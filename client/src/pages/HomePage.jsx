import ProvMapByIsle from "../components/home/province/ProvMapByIsle";
import AllProvMap from "../components/home/province/AllProvMap";

export default function HomePage() {
  return (
    <div className="px-6">
      <AllProvMap />
      <ProvMapByIsle />
    </div>
  );
}
