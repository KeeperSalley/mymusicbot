module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} добавил в плейлист парашку (**${playlist.tracks.length}**) !`);
};
