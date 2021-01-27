module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Собственно говоря нихуя не понял, отклоняю запрос !`);
    } else message.channel.send(`${client.emotes.error} - дай мне нормальный номер ты что даун? **1** - **${tracks.length}** !`);
};
