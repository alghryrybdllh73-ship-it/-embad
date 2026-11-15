const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === '!embed') {
        const embed = new EmbedBuilder()
            .setTitle('لوحة البوت')
            .setDescription('البوت يعمل بنجاح على Render بدون مشاكل!')
            .setColor(0x0099FF);

        await message.channel.send({ embeds: [embed] });
    }
});

client.login(process.env.TOKEN);
