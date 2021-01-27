module.exports = {
    name: 'очистить',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}очистить',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Всё !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Одно говно в очереди`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Очередь **уничтожена** !`);
    },
};
