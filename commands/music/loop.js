module.exports = {
    name: 'повтор',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}повтор',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Ты издеваешься?!`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Повтор **выключен** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Повтор **включен** буду жрать все говно бесконечно !`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Повтор **выключен* !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Повтор **включен** буду жрать это говно бесконечно !`);
            };
        };
    },
};
