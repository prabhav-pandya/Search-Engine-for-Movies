const data = require("./data/movie_info.json");
const titles = require("./data/titles.json");

const searchResults = (inp) => {
  var num_found = 0;
  var found = [];

  data.forEach((obj, index) => {
    if (obj.title.toLowerCase().includes(inp.toLowerCase())) {
      found.push(obj);
      num_found++;
    }
    if (obj.title.toLowerCase().startsWith(inp.toLowerCase())) {
      if (!found.includes(obj)) {
        found.push(obj);
        num_found++;
      }
    }
  });

  //return { res: found };
  return { res: found.reverse() };
};

module.exports = searchResults;
