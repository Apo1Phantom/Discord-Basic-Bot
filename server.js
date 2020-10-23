const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ">";
const version = "New";
const noargumenterror = "Provide one or more argument(s).";
client.on("ready", message => {
console.log("Bot online.");
client.user.setActivity("with code.");
)};

client.on("message", message => {
if (message.content.startsWith(`>{prefix}say`)) {
let args = message.content.substring(5);
if (!args) return message.channel.send(noargumenterror);
message.delete();
message.channel.send(args);
};
)};
client.on("message", message => {
if (message.content.startsWith(`>{prefix}status`)) {
let args = message.content.substring(8);
if (!args) return message.channel.send(noargumenterror);
client.user.setActivity(args);
message.channel.send("Successfully set the bots status to **\"" + args + "\"**";
};
)};


client.login(process.env.TOKEN);

