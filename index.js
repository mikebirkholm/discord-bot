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

        // Hent nickname (server navn) eller username
        let nickname = message.member?.nickname || message.author.username;

        // Gør klar til sammenligning
        const lowerNick = nickname.trim().toLowerCase();

        // 🔥 DEBUG (kan fjernes senere)
        console.log("Navn:", nickname);

        // Specialbesked til Drakkefar
        if (lowerNick === "drakkefar") {
            message.reply("🌈 Drakkefar ER 1000% FUCKING I DAG 🌈");
        } else {
            message.reply(`Du er **${score}% Gay** i dag!🌈`);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);


 
