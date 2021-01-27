module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Что то на ютабчике гавна нет этого ${query} !`);
};
