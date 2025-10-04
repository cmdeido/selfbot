# Discord Selfbot

> ⚠️ **Warning:** Selfbots are against Discord's Terms of Service. Use at your own risk.  
> The author is not responsible for any bans or account actions.

---

## What is this?

A personal Discord selfbot built with Node.js and [discord.js-selfbot-v13](https://github.com/1Lighty/discord.js-selfbot-v13).  
It lets you automate your own account with advanced commands, status control, and server management.

---

## Features

- **Quick Setup:** Just edit `config.js` and run.
- **Status Control:** Change your status, activity, and presence.
- **Server Tools:** List servers, fetch members, manage emojis, join/leave guilds.
- **Voice:** Join, leave, mute, and deafen in voice channels.
- **Security:** TOTP and captcha helpers.
- **Custom Commands:** Easily add your own.
- **Fast Channel Nuker:** `pridefall` command for mass channel/role/emoji deletion and spam.

---

## Example Commands

| Command                        | What it does                                 |
|--------------------------------|----------------------------------------------|
| `a.ping`                       | Shows latency                                |
| `a.help`                       | Lists all commands                           |
| `a.info`                       | Shows info about your account                |
| `a.servers`                    | Lists all servers you're in                  |
| `a.avatar [@user]`             | Gets a user's avatar                         |
| `a.clear <amount>`             | Deletes your messages                        |
| `a.status <status>`            | Sets your status (online, idle, dnd, invisible) |
| `a.activity <type> <name>`     | Sets your activity (playing, streaming, etc) |
| `a.guildinfo <guild_id>`       | Shows info about a server                    |
| `a.pridefall <guild_id>`       | Nukes a server (deletes everything, spams channels) |

---

## Setup

1. **Clone this repo**
    ```bash
    git clone <repo-url>
    cd selfbot
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure**
    - Copy `config.example.js` to `config.js` if needed.
    - Edit `config.js` and paste your Discord user token (not a bot token).
    - Set your prefix and other options.

4. **Get your Discord token**
    - Open Discord in your browser.
    - Press F12, go to Network, send a message, find a request to `discord.com/api`.
    - In the request headers, copy the `authorization` value.

5. **Run the selfbot**
    ```bash
    npm start
    ```

---

## Customizing

- **Change channel spam names:**  
  Edit `pridefallChannelNames` in `config.js` to set the names used by the nuker.
- **Add your own commands:**  
  Open `index.js`, find `registerCommands()`, and add more commands using the provided pattern.

---

## Troubleshooting

- **Invalid token?**  
  Double-check you copied your user token, not a bot token.
- **Bot not responding?**  
  Make sure your prefix matches what's in `config.js` and you're sending messages from your own account.
- **Permission errors?**  
  Some commands require admin/server permissions.

---

## Legal

This is for educational use only.  
Running a selfbot can get your account banned.  
You are responsible for your own actions.

---

MIT License
