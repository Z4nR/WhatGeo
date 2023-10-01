async function getPageSize() {
  const response = await fetch(`${BASE_URL}/prov/page`);
  const data = await response.json();
  const pageSize = data.totalPage;
  return pageSize;
}
