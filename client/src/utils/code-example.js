const loopingCode = `// Bisa menggunakan for loop ataupun while
async () => {
  for (let i = 1; i <= totalPage; i++) {
    await getProvByPage(i);
  }
}`;

const saveData = `// Simpan data kedalam sebuah array

// Variable untuk minympan data
let data = []

async () => {

  // Proses looping data berdasarkan jumlah halaman
  for (let i = 1; i <= totalPage; i++) {
    const prov = await getProvByPage(i);

    // Menyimpan data ke dalam variable yang telah disediakan
    data.push(prov)
  }
}`;

const flattingData = `// Flatting data dalam array menjadi satu array

const map = data.flat()
// map = [data1, data2, data3, ..., data-n]`;

const loadMap = `// Proses mengolah data untuk dimuat ke dalam map

// Variable untuk minympan data
let coordinate = [];

if (map) {

  // Mencari properti object dalam sebuah array
  map.find((d) => {

    // Key yang dicari dan diolah
    const feature = d.provFeature;

    // Menyimpan data ke dalam vaiable yang telah disediakan 
    coordinate.push(feature);
  });
}`;

export { loopingCode, saveData, flattingData, loadMap };
