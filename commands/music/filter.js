module.exports = {
    name: 'фильтр',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}фильтр [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Зайди в канал чъорт !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ТАМ ФИЛЬТРЫ НАПИСАНЫ ДАУН !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Напиши норм а?!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - ПАМАААГИТЕ МЕНЯ ПЫТАЮТСЯ СЛОМАТЬ !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Я **добавляю** жди`);
        else message.channel.send(`${client.emotes.music} - Я **убираю** жди`);
    },
};
