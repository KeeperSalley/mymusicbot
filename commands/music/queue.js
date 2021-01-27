module.exports = {
    name: 'очередь',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}очередь',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Всё !`);

        message.channel.send(`**очередь - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(Залупирована)' : ''}**\nЩас : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (заказано : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `И **${queue.tracks.length - 5}** остальное гавно...` : `В плейлисте **${queue.tracks.length}** ()...`}`));
    },
};
