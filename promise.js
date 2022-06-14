const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  let xxi = await promiseTheaterIXX();
  let cgv = await promiseTheaterVGC();

  let cinemas = xxi.concat(cgv);
  let results = 0;

  cinemas.map((xxi) => xxi.hasil === emotion && (results += 1));

  return results;
};

module.exports = {
  promiseOutput,
};
