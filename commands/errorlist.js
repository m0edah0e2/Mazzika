module.exports = {
    name: 'errorlist',
    description: "this is a errorlist list command!",
    execute(message, args){
        message.channel.send(' Error #1: You have to be in a channel. \nError #2: You dont have the correct permissions. \nError #3: You need to send the second argument. \nError #4: Bot is not in any channel. \nError #5: No video results found. '); 
    }
}