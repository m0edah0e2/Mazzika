module.exports = {
    name: 'version',
    description: "this is a version check command!",
    execute(message, args){
        message.channel.send('Mazzika alpha release 0.1');
    }
}