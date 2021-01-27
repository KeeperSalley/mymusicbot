module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Мне нечего тут делать, отъебитесь !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Зайди в канал клоун !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - ДАЙ ПРАВА НА КАНАЛ ГАНДОН !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Что то сломалось ... Программист идиот : ${error}`);
    };
};
