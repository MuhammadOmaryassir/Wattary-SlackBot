const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-Your own key',
    name: 'Wattary'
});

// Error Handler
bot.on('error', err => console.log(err))

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('house_of_cards_fans', 'Hello , what can i do for you ?', params);
})

// removing trash text from the message
function MessageParser(str) {
    const fullText = str.split(" ")
    fullText.splice(0, 1)
    let stri = fullText.toString()
    let TEXT = stri.replace(/,/g, " ")
    return TEXT
}

// Conecting to Wattary 
function OGWattary(messages) {
    axios.post('https://watokupp.com/main', {
            message: messages
        })
        .then(res => {
            mes = res.data.message
            const params = {
                icon_emoji: ':robot_face:'
            }
            bot.postMessageToChannel('house_of_cards_fans', mes, params)

        })
}

// Message Handler 
function handleMessage(message, tx) {
    if (message.includes('<@UB1MXJQ56>')) {
        OGWattary(tx)
    }
}

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }
    let string = MessageParser(data.text)
    handleMessage(data.text, string)
})