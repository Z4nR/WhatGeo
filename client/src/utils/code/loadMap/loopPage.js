const loadData = async () => {
  let i = 1;
  let batchSize = 5;
  const mixData = [];
  const page = await getPageSize();
  console.log(page);

  while (i < page) {
    let dataSize = batchSize;
    if (i + batchSize > page) {
      dataSize = page - i + 1;
    }

    const fetchData = async () => {
      const data = await Promise.all(
        Array(dataSize)
          .fill(null)
          .map((_, index) =>
            fetch(`${BASE_URL}/prov?page=${index + i}`).then((res) =>
              res.json()
            )
          )
      );
      mixData.push(...data);
    };

    await fetchData();
    i += dataSize;
  }

  //...
};
