const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!gay") {
        // Lav score baseret på bruger + dag
        const userId = message.author.id;
        const today = new Date().toDateString();
        const seed = userId + today;

        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        }
        const score = Math.abs(hash % 101);

        // Hent nickname på serveren, fallback til username
        let nickname = message.member?.nickname || message.author.username;

        // Fjern evt. ekstra mellemrum og lav lowercase
        const lowerNick = nickname.trim().toLowerCase();

        // Specialbesked til Drakkefar
        if (lowerNick === "drakkefar") {
            message.reply("Haha 🤣 Drakkefar? Du får en helt speciel score i dag: **100% Fucking Gay**!");
        } else {
            message.reply(`Du er **${score}% Gay** i dag!`);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);


 