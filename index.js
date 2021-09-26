require("http").createServer((req, res) => res.end(process.version)).listen()

const Discord = require('discord.js')
const client = new Discord.Client()({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [32767]
});

//NPMs
const fs = require('fs');

//Required Files
const keepAlive = require('./server.js');


client.config = require('./config/bot');


client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`))