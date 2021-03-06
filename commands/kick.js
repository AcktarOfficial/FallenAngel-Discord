exports.run = (client, message, args) => {
  
const Discord = require("discord.js");
  
let NO_PERMS = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("Sorry but you are not allowed to use this command `MISSING KICK_MEMBERS`")
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(NO_PERMS) 
  
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let WRONG_USAGE = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("You need to provide a user and a reason to kick him. **__Example:__**\n\n```-kick @acktar come back when ur calmed\n-kick 7373838383829392922 Trashtalking```")
if (!args[0]) return message.channel.send(WRONG_USAGE);
  
let MEMBER_NOT_FOUND = new Discord.MessageEmbed() 
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("The member you provided was not found on this guild. Maybe he already left ehhh")
if (!member) return message.channel.send(MEMBER_NOT_FOUND);
  
let USER_STAFF = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription("The member you provided cannot be kicked as he is also a member of the staff team :d")
if (!member.bannable) return message.channel.send(USER_STAFF);

let reason = args.slice(1).join(" ");
if(!reason) reason = 'Unspecified';

message.delete();
member.kick(reason);
  
let BAN_LOG = new Discord.MessageEmbed() 
   .setAuthor("Member Kicked By Admin", member.user.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .addField("Username", member.user.tag)
   .addField("User ID", member.id)
   .addField("Moderator", message.author)
   .addField("Reason", reason)
message.guild.channels.cache.get("796260573384933406").send(BAN_LOG);
  
let USER_BANNED = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL())
   .setColor("RANDOM")
   .setFooter("(C) HeavenPE Network 2021")
   .setDescription(`Successfully kicked ${member.user.tag}`)
message.channel.send(USER_BANNED);
} 
