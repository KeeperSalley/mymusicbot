module.exports = {
    name: 'нетрогать',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}нетрогать',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} конект **${client.voice.connections.size}** к серверам !`);
    },
};
