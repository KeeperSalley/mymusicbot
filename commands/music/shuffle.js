module.exports = {
    name: 'перемешать',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}перемешать',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Всё !`);

        client.player.shuffle(message);

        return message.channel.send(`${client.emotes.success} - Всё **${client.player.getQueue(message).tracks.length}** перемешано !`);
    },
};
