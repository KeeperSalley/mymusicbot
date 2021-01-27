module.exports = {
    name: 'хелп',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}хелп <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Хелп понель' },
                    footer: { text: 'Сделано за два дня в домашних условиях без смс и регистрации' },
                    fields: [
                        { name: 'Бот', value: infos },
                        { name: 'Музыка', value: music },
                        { name: 'Фильтры', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Чтобы использовать фильтры, ${client.config.discord.prefix}фильтр. Пример : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Ты думаешь что если я бот то всемогущий???`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Хелп понель' },
                    footer: { text: 'Сделано за два дня в домашних условиях без смс и регистрации' },
                    fields: [
                        { name: 'Имя', value: command.name, inline: true },
                        { name: 'Категории', value: command.category, inline: true },
                        { name: 'Комманды', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Юзабилити', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Что инфа? не, не слышал',
                }
            });
        };
    },
};
