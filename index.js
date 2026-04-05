const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`✅ Botten er online som ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!gay") {
        const userId = message.author.id;
        const today = new Date().toDateString();
        const seed = userId + today;

        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        }

        const score = Math.abs(hash % 101);

        // 🔥 SPECIAL TIL Drakkefar (bruger ID - virker altid)
        if (message.author.id === "563771068620210182") {
            message.reply(`🌈Drakkefar ER 1000% FUCKING GAY I DAG🌈 `);
        } else {
            // 👇 Normal besked til alle andre
            message.reply(`🌈Du er ${score}% Gay i dag🌈`);
        }
    }
});

// ⚠️ Railway token
client.login(process.env.DISCORD_TOKEN);


 
