import axios from "axios";

let page;

const loadPage = async () => {
  return axios
    .get("https://zulham.ahlitani.com/geo/v1/prov/page")
    .then((response) => {
      const data = response.data;
      return data;
    });
};

page = loadPage();

console.log(page);

//Output : 13
