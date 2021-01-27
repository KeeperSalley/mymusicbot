module.exports = {
    name: 'пауза',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}пауза',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Мне самому петь?!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - УЖЕ НА ПАУЗЕ ЫВФВЦУУЦЙ !`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Гавно ${client.player.getQueue(message).playing.title} на паузе`);
    },
};
