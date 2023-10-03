const loopingCode = `// Bisa menggunakan for loop ataupun while
async () => {
  for (let i = 1; i <= totalPage; i++) {
    await getProvByPage(i);
  }
}`;

const saveData = `// Simpan data kedalam sebuah array
let data = []

async () => {
  for (let i = 1; i <= totalPage; i++) {
    const prov = await getProvByPage(i);
    data.push(prov)
  }
}`;

const flattingData = `// Flatting data dalam array menjadi satu array
const merge = data.flat()
// merge = [data1, data2, data3, ..., data-n]`;

export { loopingCode, saveData, flattingData };
