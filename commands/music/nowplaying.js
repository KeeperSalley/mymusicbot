module.exports = {
    name: 'чтоэто',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}чтоэто',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Всё !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Сделано за два дня в домашних условиях без смс и регистрации' },
                fields: [
                    { name: 'Канал', value: track.author, inline: true },
                    { name: 'Просил этот', value: track.requestedBy.username, inline: true },
                    { name: 'Отсюда', value: track.fromPlaylist ? 'Само собой' : 'Хуй', inline: true },

                    { name: 'Просмотры', value: track.views, inline: true },
                    { name: 'Длительность', value: track.duration, inline: true },
                    { name: 'Фильтры', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Громкость', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Повтор', value: client.player.getQueue(message).repeatMode ? 'Само собой' : 'Хуй', inline: true },
                    { name: 'На паузе?', value: client.player.getQueue(message).paused ? 'Само собой' : 'Хуй', inline: true },

                    { name: 'Прогресс', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};
