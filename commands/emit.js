exports.run = (client, message, args) => {
  
client.emit("guildMemberAdd", message.member);
  
} 
