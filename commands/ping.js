module.exports = {
    name: "ping",
    cooldown: 1,
    description: "This command shows the bot's ping",
    execute(message) {
        message.channel.send(`${Math.round(message.client.ws.ping)}ms`).catch(console.error);
    }
  };