module.exports = {
    name: 'вотхуйня',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}вотхуйня',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Всё !`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                footer: { text: 'Сделано за два дня в домашних условиях без смс и регистрации' },
                fields: [
                    { name: 'Фильтр', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Все фильтры.\nиспользовать \`${client.config.discord.prefix}фильтр\` чтобы сломать мозг.`,
            },
        });
    },
};
