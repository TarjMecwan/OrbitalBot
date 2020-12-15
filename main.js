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
        case 'documentation':
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'Tarj Mecwan',
                  icon_url: "https://cdn.discordapp.com/attachments/761753649290412032/777279256819662879/a_5abff6ac9d7c26f562030a50c1f82a3f.gif"
                },
                title: "This is an embed",
                url: "http://google.com",
                description: "This is a test embed to showcase what they look like and what they can do.",
                fields: [{
                    name: "Fields",
                    value: "They can have different fields with small headlines."
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
                  icon_url: "https://cdn.discordapp.com/attachments/761753649290412032/777279256819662879/a_5abff6ac9d7c26f562030a50c1f82a3f.gif",
                  text: "© Example"
                }
              }
            });

    }
})

bot.login('Nzg4MjM3ODQ3NjYzNzM4OTA1.X9glsw.0KIWmzjzpjR3swl8IQKwS3SmbAI');