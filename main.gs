const WEBHOOK_DISCORD_URL = 'https://discordapp.com/api/webhooks/...';
const NAME_BOT = '';
const CHANNEL_ID = '';
const SERVER_ID = '';

function sendTestMessage() {
  sendMessBot('@everyone Test');
}

function sendMessBot(message) {
  UrlFetchApp.fetch(WEBHOOK_DISCORD_URL, getOptions_(message));
}

function getOptions_(message) {
  const payload = {
    'name': NAME_BOT,
    'type': 1,
    'channel_id': CHANNEL_ID,
    'avatar': null,
    'id': SERVER_ID,
    'content': message
  };
  
  const options = {
    'method': 'post',
    'headers': { 'Content-Type': 'application/json' },
    'payload': JSON.stringify(payload)
  };
  return options;
}
