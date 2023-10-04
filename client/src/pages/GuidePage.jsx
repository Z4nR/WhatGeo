import LoadMap from "../components/guide/LoadMap";
import LoadAll from "../components/guide/LoadAll";

export default function GuidePage() {
  return (
    <div className="px-6">
      <LoadAll id="load-all" />
      <LoadMap id="load-map" />
    </div>
  );
}
