module.exports = {
    // Discord Bot Token (User Token - NOT Bot Token)
    // Get this from Discord Developer Tools -> Application -> OAuth2 -> Copy Token
    // WARNING: Never share your token with anyone!
    token: '',
    
    // Bot Configuration
    prefix: 'a.',
    status: 'online',
    activity: {
        type: 'PLAYING',
        name: 'with selfbot'
    },
    pridefallChannelNames: ['adra', 'owned', 'rekt', 'by', 'selfbot'], // You can change/add names here
    pridefallMaxChannels: 250, // Set max channels to create (Discord hard limit is 500),
    // Command Settings
    commands: {
        enabled: true,
        caseSensitive: false
    },
    
    // Logging
    logging: {
        enabled: true,
        level: 'info' // debug, info, warn, error
    }
};
