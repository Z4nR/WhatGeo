const loadData = async () => {
  //...

  const array = mixData.flat();
  const mergeArray = array;

  const geo = mergeArray.find((d) => {
    L.geoJSON(d.provFeature, {
      onEachFeature: onEachFeature,
    }).addTo(map);
  });

  return geo;
};

loadData();
