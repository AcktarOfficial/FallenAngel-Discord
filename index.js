const { Client, Collection } = require('discord.js');
const fs = require('fs');
const client = new Client();
const { Player } = require("discord-music-player");

const player = new Player(client, {
	leaveOnEnd: true,
	leaveOnStop: true,
	leaveOnEmpty: true,
  quality: 'high',
});

client.player = player;

fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		const eventName = file.split('.')[0];
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Collection();

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		const props = require(`./commands/${file}`);
		const commandName = file.split('.')[0];
		client.commands.set(commandName, props);
	});
});

client.login(process.env.TOKEN);
