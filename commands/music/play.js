module.exports = {
    name: 'пуск',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}пуск [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Напиши мне имя песни а не это говно !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};
