module.exports = (client, member) => {
  
const Discord = require("discord.js");
const moment = require("moment");
  
let creation = Date.now() - member.user.createdAt;
let created = Math.floor(creation / 86400000);

console.log(created);
if (created < 30) {
let creationDate = moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY");

let joiningDate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY");

let joinPosition = member.guild.memberCount;

let altfound =  new Discord.MessageEmbed() 
  .setAuthor("Possible Alt Detected")
  .setColor("RANDOM")
  .setFooter("(C) HeavenPE Network 2021")
  .addField("Username", `${member.user} (${member.user.tag})`)
  .addField("User ID", member.user.id)
  .addField("Account Lifeline", `Created ${created} days ago`)
  .addField("Account Creation Date", creationDate)
  .addField("Join Position", `${member.guild.memberCount}th member`)
  .addField("Joined Guild On", joiningDate) 
  .setThumbnail(member.user.avatarURL())

member.guild.channels.cache.get("789466932231405598").send(altfound);
  
  } else {

let memberRole = member.guild.roles.cache.get("789128378866991105");
member.roles.add(memberRole);

let welcome = new Discord.MessageEmbed()
  .setAuthor(`- Welcome ${member.user.username}`, member.user.avatarURL())
  .setDescription(`🤗 Hello, ${member}, we appreciate you stopping by and checking out our awesome server HeavenPE! We have great plans and are very excited that you are here to experience some nextlevel games on our server.\n\n🤔 If you have any questions or concerns feel free to ask a staff member for assistance! Here at HeavenPE we strive to provide the best possible player experience and we intend to do that with our awesome and loving staff members.\n\n🌟Important Informations🌟\n**IP:** play.heavenpe.xyz:26556\n**Website:** https://heavenpe.xyz\n**Vote:** http://vote.heavenpe.xyz`)
  .setColor("RANDOM") 
  .setFooter("(C) HeavenPE Network 2021")
  .setThumbnail(member.user.avatarURL())

member.guild.channels.cache.get("789466932231405598").send(welcome);
}

}
