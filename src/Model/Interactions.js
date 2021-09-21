class Interactions {
  Hello (message) {
    message.reply('hi');
  }

  async Join (message) {
    try {
      const voiceChannel = message.member.voice.channel;
      voiceChannel.join();
    } catch (err) {
      console.log(err);
      message.reply('Você precisa estar conectado em um canal de audio para poder conectar');
    }
  }
}

module.exports = Interactions;
