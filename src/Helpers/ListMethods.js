const Interactions = require('../Model/Interactions');

function ListMethods () {
  return {
    hello: new Interactions().Hello,
    join: new Interactions().Join
  };
}

module.exports = ListMethods();
