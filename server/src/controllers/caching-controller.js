const client = require("../utils/redis");

let pageNumber = 1;

module.exports = {
  cacheProvByPage: async (req, res, next) => {
    try {
      const { page } = req.query;
      if (!Number.isNaN(page) && page > 0) pageNumber = page;

      const data = await client.get(`prov-${page}`);
      if (!data) return next();

      res.status(202).send(JSON.parse(data));
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },
};
