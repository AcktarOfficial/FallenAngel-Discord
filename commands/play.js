exports.run = async (client, message, args) => {

const Discord = require("discord.js");
const voiceChannel = message.member.voice.channel;
 
let JOIN_VOICE = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("RANDOM")
    .setFooter("(C) HeavenPE Network 2021")
    .setDescription("Please join a voice channel then try again")
if (!voiceChannel) return message.channel.send(JOIN_VOICE);
  
if (client.player.isPlaying(message.guild.id)) {
  let song = await client.player.addToQueue(message.guild.id, args.join(" "));
     song = song.song;
    
     let ADDED_TO_QUEUE = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.avatarURL())
         .setColor("RANDOM")
         .setFooter("(C) HeavenPE Network 2021")
         .setDescription("`"+`${song.name}`+"` has been added to the queue") 
     message.channel.send(ADDED_TO_QUEUE);
  
}  else {
          
  let song = await client.player.play(message.member.voice.channel, args.join(" "));
     song = song.song;
  
     let PLAYING_SONG = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setColor("RANDOM")
          .setFooter("(C) HeavenPE Network 2021")
          .setDescription("Started playing `"+song.name+"`")
     message.channel.send(PLAYING_SONG);
  
    }
}
