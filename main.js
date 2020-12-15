const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '-';


bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'website':
            message.channel.send('The website is....')
            break;
        case 'rules':
            message.channel.send({embed: {
                color: "#00FFFF",
                author: {
                  name: 'Orbital',
                  url: "http://orbitalcommunity.com",
                  icon_url: "https://cdn.discordapp.com/attachments/788239168601325571/788434182737100861/orbitalmc.png"
                },
                title: "Orbital Discord Rules", 
                description: "Welcome! This is a server for the Universit of Waterloo students to converse, socialize, and come together and embrace our cultures! To participate in this server, you must abide by the following rules:",
                fields: [{
                    name: ":calendar:  **Last Updated:** December 15, 2020",
                    value: "hi there"
                  },
                  {
                    name: "Masked links",
                    value: "You can put [masked links](http://google.com) inside of rich embeds."
                  },
                  {
                    name: "Markdown",
                    value: "You can put all the *usual* **__Markdown__** inside of them."
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: "https://cdn.discordapp.com/attachments/788239168601325571/788434182737100861/orbitalmc.png",
                  text: "Orbital"
                }
              }
            });

    }
})

bot.login('');
