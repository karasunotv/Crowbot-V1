const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN ='x' 

// a basic automated reply for the bot
bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.reply('Hello, how are you?');
    }
});

//print a console to see the bot is ready
bot.on('ready', function(){
    console.log("Ready");
})

// token goes here for the bot
//remove before github push
bot.login(TOKEN);