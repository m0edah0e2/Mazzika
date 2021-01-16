module.exports = {
    name: 'checkbot',
    description: "this is a bot status check command!",
    execute(message, args){
        message.channel.send('Status: Online!');
    }
}