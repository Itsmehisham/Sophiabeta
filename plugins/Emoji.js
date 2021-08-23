/* # Exclusively from Raashii 
 */

const Raashii = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('ttp');

if (Config.WORKTYPE == 'private') {

    Raashii.addCommand({ pattern: 'esticker ?(.*)', fromMe: true, desc: Lang.EMOJI_DESC }, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_EMOJI, MessageType.text);
      var uri = encodeURI(match[1])
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji=' + uri, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    }

else if (Config.WORKTYPE == 'public') {

    Raashii.addCommand({ pattern: 'esticker ?(.*)', fromMe: true, desc: Lang.EMOJI_DESC }, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_EMOJI, MessageType.text);
      var uri = encodeURI(match[1])
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji=' + uri, { responseType: 'arraybuffer' })
      await message.client.sendMessage(message.jid, Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    }
