const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '=';
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
    client.once('ready', () => {
    console.log('Mazzika Online!');
});
    //on discord commands start:
    client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //if statements for bot commands:
           if(command === 'checkbot'){
        client.commands.get('checkbot').execute(message, args);
    } else if(command == 'botcheck'){
        client.commands.get('checkbot').execute(message, args);
    } else if(command == 'description'){
        client.commands.get('description').execute(message, args);
    } else if(command == 'version'){
        client.commands.get('version').execute(message, args);
    } else if(command == 'errorlist'){
        client.commands.get('errorlist').execute(message, args);
    }else if(command == 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command == 'p'){
        client.commands.get('play').execute(message, args);
    } else if(command == 'leave'){
        client.commands.get('leave').execute(message, args);
    } else if(command == 'stop'){
        client.commands.get('leave').execute(message, args);
    } else if(command == 'm7eb'){
        client.commands.get('m7eb').execute(message, args);
    } else if(command == 'mheb'){
        client.commands.get('m7eb').execute(message, args);
    } else if(command == 'queue'){
        client.commands.get('queue').execute(message, args);
    } else if(command == 'q'){
        client.commands.get('queue').execute(message, args);
    } else if(command == 'np'){
        client.commands.get('nowplaying').execute(message, args);
    } else if(command == 'nowplaying'){
        client.commands.get('nowplaying').execute(message, args);
    } else if(command == 'lyrics'){
        client.commands.get('lyrics').execute(message, args);
    } else if(command == 'lyric'){
        client.commands.get('lyrics').execute(message, args);
    }else if(command == 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command == 'pause'){
        client.commands.get('pause').execute(message, args);
    }
});

client.login('   ');

// Following line has to be at the very end
    client.login('Nzc4MzA1MjcxMDYzNzczMTg1.X7QDRA.nhYTGhJE67ppaEI8qke4442iMIk');
