module.exports = {
    name: 'непауза',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}непауза',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - зАйди в Онал уебок !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - зАйди в Онал уебок !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Нечего играть !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Музыка уже играет, ты шо глухой !`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Дерьмо ${client.player.getQueue(message).playing.title} течёт !`);
    },
};
