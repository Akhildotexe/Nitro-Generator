const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const mySecret = process.env['TOKEN']

const prefix = '!';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

    if (msg.content.startsWith(`${prefix}setup`)) {

        if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return;
        msg.guild.channels.create(`mining`, 'text').catch(e => { });

    }

    if (msg.content.startsWith(`${prefix}gen`)) {

        msg.delete()

        msg.channel.send("https://discord.gift/" + randomstring.generate(16));

    }


    if (msg.content.startsWith(`${prefix}start`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;

        msg.delete()

        var interval = setInterval(function () {

            msg.channel.send("https://discord.gift/" + randomstring.generate(16));

        }, 2000);

    }

});

client.on('ready', async () => {
    console.log('was gud!')

    let statuses = [
        `free nitro`,
        `free nitro`,
        `${client.users.cache.size} Getting nitro👀`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "STREAMING",
            url: "https://www.twitch.tv/..."
        })
    }, 4000)
})

client.login('token')

