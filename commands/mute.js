exports.run = (client, message, args) => {

const Discord = require("discord.js");
const ms = require("ms");

let NO_PERMS = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("Sorry but you are not allowed to use this command `MISSING MANAGE_MESSAGES`")
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(NO_PERMS) 

let member = message.guild.member(message.mentions.users.first());
 
let MEMBER_NOT_FOUND = new Discord.MessageEmbed() 
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("The member you provided was not found on this guild. Maybe he already left ehhh")
 
let MENTION_TIME = new Discord.MessageEmbed() 
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("You need to provide a user, the time the user will stay muted for and the reason of the mute . **__Example:__**\n\n```-mute @acktar 1d disrespectful```")
if(!args[1]) return message.channel.send(MENTION_TIME);
if (!args[0]) return message.channel.send(MENTION_TIME);

let USER_STAFF = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("The member you provided cannot be kicked as he is also a member of the staff team :d")
if (!member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(USER_STAFF);

if (!member) return message.channel.send(MEMBER_NOT_FOUND);
let reason = args.slice(2).join(" ");
if(!reason) reason = 'Unspecified';

member.roles.remove("789128378866991105");
member.roles.add("791006341426053190");
 
let MUTE_LOG = new Discord.MessageEmbed() 
   .setAuthor("Member Muted By Admin", member.user.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .addField("Username", member.user.tag)
   .addField("User ID", member.id)
   .addField("Moderator", message.author)
   .addField("Time", `${ms(ms(args[1]))}`)
   .addField("Reason", reason)
message.guild.channels.cache.get("789533778292637696").send(MUTE_LOG);
  
let USER_MUTED = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription(`Successfully muted ${member.user.tag} for ${ms(ms(args[1]))}`)
message.channel.send(USER_MUTED);
  
setTimeout(function() {
   member.roles.add("789128378866991105");
   member.roles.remove("791006341426053190");
 
   let UNMUTE_NOTIF = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription(`<@${member.user.id}> has been unmuted.`)
   message.channel.send(UNMUTE_NOTIF)
 
}, ms(args[1]));
  
} 
