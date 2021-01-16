module.exports = {
    name: 'leave',
    description: 'this is a bot leave command!',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send("Error #4");
        await voiceChannel.leave();
        await message.channel.send('Mazzika Left')
    }
}