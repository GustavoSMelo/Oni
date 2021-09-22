const { joinVoiceChannel } = require('@discordjs/voice');

class Interactions {
  Hello (message) {
    message.reply('hi');
  }

  async Join (message) {
    try {
      await joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
      });
    } catch (err) {
      console.log(err);
      message.reply('Você precisa estar conectado em um canal de audio para poder conectar');
    }
  }

  async Leave (message) {
  }
}

module.exports = Interactions;
