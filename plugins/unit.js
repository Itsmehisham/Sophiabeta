/* Codded by hisham
Whats bot - Sophia
copypaste cheyyumbol credit engilum മാറ്റത്തിരിക്കു്ക 
*/

const Hisham = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Pach = require('sewqueen-rs');
let wk = Config.WORKTYPE == 'public' ? false : true
var description = ''
var bit = ''
if (Config.LANG == 'ML') description = 'WEIGHT UNITILEK CONVERT CHEYYUM.', bit = 'DATA UNITILEK CONVERT CHEYYUM.'
if (Config.LANG == 'EN') description = 'Converts weight units.', bit = 'Converts data units.'


Hisham.addCommand({pattern: 'unit ?(.*)', fromMe: wk, desc: description, usage: 'unit 1 kg mg // unit <number> <unit1> <unit2>'}, (async (message, match) => {
  var splitted_text = match[1].split(' ')
  var auth_messages = await Pach.unit_message(Config.LANG)
  if (splitted_text.length < 3) {
    return await message.client.sendMessage(message.jid,auth_messages.unsuccess + auth_messages.values, MessageType.text)
  }
  var unitter = await Pach.unit(splitted_text[0], splitted_text[1], splitted_text[2])
  if (unitter.error) {
    return await message.client.sendMessage(message.jid,auth_messages.unsuccess + auth_messages.values, MessageType.text)
  }
  var string_result = unitter.result.toString()
  var formatter = auth_messages.success.replace('{number}', splitted_text[0]).replace('{unit1}', splitted_text[1]).replace('{unit2}', splitted_text[2]).replace('{result}', string_result)
  await message.client.sendMessage(message.jid, formatter, MessageType.text, { quoted: message.data })
}));
Hisham.addCommand({pattern: 'bitunit ?(.*)', fromMe: wk, desc: bit, usage: 'bitunit 1 gb mb // bitunit <number> <unit1> <unit2>'}, (async (message, match) => {
  var splitted_text = match[1].split(' ')
  var auth_messages = await Pach.unit_byte_msg(Config.LANG)
  if (splitted_text.length < 3) {
    return await message.client.sendMessage(message.jid,auth_messages.unsuccess + auth_messages.values, MessageType.text)
  }
  var unitter = await Pach.unit_byte(splitted_text[0], splitted_text[1], splitted_text[2])
  if (unitter.error) {
    return await message.client.sendMessage(message.jid,auth_messages.unsuccess + auth_messages.values, MessageType.text)
  }
  var string_result = unitter.result.toString()
  var formatter = auth_messages.success.replace('{number}', splitted_text[0]).replace('{unit1}', splitted_text[1]).replace('{unit2}', splitted_text[2]).replace('{result}', string_result)
  await message.client.sendMessage(message.jid, formatter, MessageType.text, { quoted: message.data })
}));
}
