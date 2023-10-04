import { useEffect, useState } from "react";

const useCoordinate = (map) => {
  const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    let coordinate = [];
    if (map) {
      map.find((d) => {
        const feature = d.provFeature;
        coordinate.push(feature);
      });
    }
    setCoordinate(coordinate);
  }, [map]);

  return [coordinate];
};

export { useCoordinate };
