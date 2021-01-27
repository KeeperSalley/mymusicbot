module.exports = {
    name: 'пинг',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}пинг',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Пинга : **${client.ws.ping}ms** !`);
    },
};
