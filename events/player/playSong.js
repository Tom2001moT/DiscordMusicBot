/*

   MADE BY WDG!! FEEL FREE TO USE ANY PART OF CODE

              ██╗    ██╗██████╗  ██████╗ 
              ██║    ██║██╔══██╗██╔════╝ 
              ██║ █╗ ██║██║  ██║██║  ███╗
              ██║███╗██║██║  ██║██║   ██║
              ╚███╔███╔╝██████╔╝╚██████╔╝
               ╚══╝╚══╝ ╚═════╝  ╚═════╝ 

   DISCORD SERVER : https://discord.gg/2TDD89cxwS
   YOUTUBE : https://youtube.com/@WhiteDeath_WDG_?si=Ph20XJ385D0emCPj

   FOR HELP CONTACT ME ON DISCORD

*/

const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
      .setAuthor({
        name: 'Currently playing a Track',
        iconURL: 'https://cdn.discordapp.com/attachments/1140841446228897932/1144671132948103208/giphy.gif', 
        url: 'https://discord.gg/2TDD89cxwS'
    })
    .setDescription(`\n ‎ \n▶️ **Details :** **${song?.name}**\n▶️ **Enjoy the Ultimate Music Experience. ** \n▶️ **If link breaks playback try to give query.**`)
.setImage(queue.songs[0].thumbnail)
    .setColor('#FF0000')
    .setFooter({ text: 'More info - Use /help command [White Death Gaming]' });
     
      queue?.textChannel?.send({ embeds: [embed] }).catch(e => { });
    }
  }
}

/*

   MADE BY WDG!! FEEL FREE TO USE ANY PART OF CODE

              ██╗    ██╗██████╗  ██████╗ 
              ██║    ██║██╔══██╗██╔════╝ 
              ██║ █╗ ██║██║  ██║██║  ███╗
              ██║███╗██║██║  ██║██║   ██║
              ╚███╔███╔╝██████╔╝╚██████╔╝
               ╚══╝╚══╝ ╚═════╝  ╚═════╝ 

   DISCORD SERVER : https://discord.gg/2TDD89cxwS
   YOUTUBE : https://youtube.com/@WhiteDeath_WDG_?si=Ph20XJ385D0emCPj

   FOR HELP CONTACT ME ON DISCORD

*/