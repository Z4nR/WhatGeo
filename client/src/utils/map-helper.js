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
  fillOpacity: 0.9,
};

const highlightFeature = (e) => {
  const layer = e.target;
  layer.setStyle({
    weight: 4,
    color: '#f9844d',
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

const getBackgroundColorClass = (destinyType) => {
  switch (destinyType) {
    case 'Reservoir':
      return 'bg-blue-100 border-blue-200';
    case 'Orchard':
      return 'bg-lime-200 border-lime-300';
    case 'Recreation':
      return 'bg-yellow-100 border-yellow-200';
    case 'Shore':
      return 'bg-orange-100 border-orange-200';
    case 'Sea':
      return 'bg-blue-400  border-blue-500';
    case 'History':
      return 'bg-purple-100 border-purple-200';
    case 'Religic':
      return 'bg-white-100 border-white-200';
    case 'Peak':
      return 'bg-green-100 border-green-200';
    default:
      return 'bg-gray-200 border-gray-300';
  }
};

const getDestinyTypeDefinition = (destinyType) => {
  switch (destinyType) {
    case 'Reservoir':
      return 'Bendungan Air';
    case 'Orchard':
      return 'Agrowisata';
    case 'Recreation':
      return 'Tempat Rekreasi';
    case 'Shore':
      return 'Tepi Laut';
    case 'Sea':
      return 'Wisata Bahari';
    case 'History':
      return 'Tempat Bersejarah';
    case 'Religic':
      return 'Tempat Keagamaan';
    case 'Peak':
      return 'Dataran Tinggi';
    default:
      return 'Tidak Diketahui';
  }
};

const getDestiny = (destinyType) => {
  const style = getBackgroundColorClass(destinyType);
  const type = getDestinyTypeDefinition(destinyType);

  return { style: style, type: type };
};

export { provCoordinate, originalStyle, onEachFeature, getDestiny };
