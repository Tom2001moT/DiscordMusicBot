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

module.exports = {
  TOKEN: "",
  ownerID: ["854219705169739776", ""],
  botInvite: "https://discord.com/api/oauth2/authorize?client_id=1184496125353406545&permissions=8&scope=applications.commands+bot",
  supportServer: "https://discord.gg/2TDD89cxwS",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'WDG GG',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://youtube.com/@WhiteDeath_WDG_?si=Ph20XJ385D0emCPj",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 50,
    maxMusic: 150,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

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
