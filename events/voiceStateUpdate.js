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
module.exports = async (client, oldState, newState) => {
const queue = client.player.getQueue(oldState.guild.id);
if(queue || queue?.playing){
if(client?.config?.opt?.voiceConfig?.leaveOnEmpty?.status === true){

setTimeout(async() => {
let botChannel = oldState?.guild?.channels?.cache?.get(queue?.voice?.connection?.joinConfig?.channelId)
if(botChannel){
if(botChannel.id == oldState.channelId)
if(botChannel?.members?.find(x => x == client?.user?.id)){
if(botChannel?.members?.size == 1){
await queue?.textChannel?.send({ content: `🔴 Users left channel!!` }).catch(e => { })
if(queue || queue?.playing){
return queue?.stop(oldState.guild.id)
}
}
}
}
}, client?.config?.opt?.voiceConfig?.leaveOnEmpty?.cooldown || 60000)
}

if(newState.id === client.user.id){


if(oldState.serverMute === false && newState.serverMute === true){
if(queue?.textChannel){
try {
await queue?.pause()
} catch(e){
return 
}
await queue?.textChannel?.send({ content: `🔴 Muted` }).catch(e => { })
}
}
if(oldState.serverMute === true && newState.serverMute === false){
if(queue?.textChannel){
    try {
await queue.resume();
} catch(e){
    return 
}
}
}
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