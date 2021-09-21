const Interactions = require('../Model/Interactions');

function ListMethods () {
  return {
    hello: new Interactions().Hello
  };
}

module.exports = ListMethods();
