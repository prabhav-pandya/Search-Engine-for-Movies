const titles = require("./data/titles.json");

const autocomplete = (inp) => {
  const limit = 5;

  var num_found = 0;
  var found = [];

  titles.every((title, index) => {
    if (title.toLowerCase().startsWith(inp.toLowerCase())) {
      found.push(title);
      num_found++;
    }
    if (num_found === limit) {
      return false;
    }
    if (title.toLowerCase().includes(inp.toLowerCase())) {
      if (!found.includes(title)) {
        found.push(title);
        num_found++;
      }
    }
    if (num_found === limit) {
      return false;
    } else {
      return true;
    }
  });

  return { res: found };
};

module.exports = autocomplete;
