const provCoordinate = (map) => {
  let coordinate = [];
  if (map) {
    map.find((d) => {
      const feature = d?.provFeature;
      coordinate.push(feature);
    });
  }
  return coordinate;
};

export const cityCoordinate = (map) => {
  let coordinate = [];
  if (map) {
    map.find((d) => {
      const feature = d?.cityFeature;
      coordinate.push(feature);
    });
  }
  return coordinate;
};

const originalStyle = {
  weight: 2,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.8,
};

const highlightFeature = (e) => {
  const layer = e.target;
  layer.setStyle({
    weight: 5,
    color: '#666',
    fillOpacity: 0.6,
  });
  layer.bringToFront();
};

const resetHighlight = (e) => {
  const layer = e.target;
  layer.setStyle(originalStyle);
};

const onEachFeature = (feature, layer, zoomToFeature) => {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: (e) => {
      zoomToFeature(e, feature);
    },
  });
};

export { provCoordinate, originalStyle, onEachFeature };
