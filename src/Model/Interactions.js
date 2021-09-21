class Interactions {
  Hello (message) {
    message.reply('hi');
    console.log('hi');
  }

  ListInteractionsMethod () {
    return { hello: this.Hello };
  }
}

module.exports = Interactions;
