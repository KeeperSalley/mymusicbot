module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Эта параша ${track.title} играет в ${message.member.voice.channel.name} ...`);
};
