const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-Your own key',
    name: 'Wattary'
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('house_of_cards_fans', 'Hello , what can i do for you ?', params);
})

