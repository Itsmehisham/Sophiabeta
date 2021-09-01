const Hisham = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')

// Bad word Block System
// This Plugins By Hisham Muhammed 
const BAD = "Bad words Not Allowed"
 if (Config.BADBLOCK == 'true') {
Hisham.addCommand({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
        let regexb1ichu = new RegExp('thayoli')
        let regexb2ichu = new RegExp('xxx')
        let regexb3ichu = new RegExp('myre')
        let regexb4ichu = new RegExp('sex')
        let regexb5ichu = new RegExp('poor')
        let regexb6ichu = new RegExp('Myr')
// export data -(Hisham-muhammed)
          if (regexb1ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          } 
        else if (regexb2ichu.test(message.message)) {
          
           await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
         else if (regexb3ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
        else if (regexb4ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb5ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          else if (regexb6ichu.test(message.message)) {
           
            await message.client.sendMessage(message.jid, '*' + BAD + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
          }
          
}));

}
