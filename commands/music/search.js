module.exports = {
    name: 'поиск',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}поиск [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Всё !`);

        client.player.play(message, args.join(" "));
    },
};
