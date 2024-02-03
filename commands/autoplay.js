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

const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "autoplay",
  description: "Toggle the autoplay of the queue.",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {
      const queue = client?.player?.getQueue(interaction?.guild?.id);
      if (!queue || !queue?.playing) {
        return interaction?.reply({ content: '⚠️ No music playing!!', ephemeral: true });
      }
      
      queue?.toggleAutoplay();
      
      const embed = new EmbedBuilder()
        .setColor('#2f58fe')
        .setTitle('Your Music, Your Call!!')
        .setDescription(queue?.autoplay ? '**✅ Autoplay ON**' : '**❌ Autoplay OFF**')
        
      
      interaction?.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};

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