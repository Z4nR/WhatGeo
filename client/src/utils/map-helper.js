export const provCoordinate = (map) => {
  let coordinate = [];
  if (map) {
    map.find((d) => {
      const feature = d?.provFeature;
      coordinate.push(feature);
    });
  }
  return coordinate;
};
