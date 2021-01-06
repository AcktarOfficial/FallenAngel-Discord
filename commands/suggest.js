exports.run = async (client, message, args) => {

const Discord = require("discord.js");

let USAGE = new Discord.MessageEmbed() 
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("**Usage:** -suggest <suggestion>")
if (args.length === 0) return message.channel.send(USAGE);
  
message.delete({ timeout: 1000 });

let INITIAL_MSG = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("Thank you for helping us improve in many different factors by giving your suggestion")
message.channel.send(INITIAL_MSG).then(sent => sent.delete({ timeout: 4000 }));
  
let SUGGESTION =  new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription(args.join(" "))
message.guild.channels.cache.get("796244217848004618").send(SUGGESTION).then(async m => {

await m.react("☑️");
await m.react("❎")
  
   })
} 
