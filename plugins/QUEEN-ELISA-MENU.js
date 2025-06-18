const { cmd, commands } = require('../command');
const config = require('../config')

cmd({
    pattern: "downmenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪DOWNLOADS COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};

let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/0xh1qr.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "searchmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪SEARCH COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'Bot repo'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/0xh1qr.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴇʟɪsᴀ◎ʙʏ ᴀʏᴀɴ ᴍᴏᴅᴢ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
    pattern: "convertmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪CONVERT COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'Bot repo'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/0xh1qr.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪsᴀ◎ʙʏ `,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})



cmd({
    pattern: "logomenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪LOGO COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'Bot repo'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/0xh1qr.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪsᴀ◎ʙʏ Aʏᴀɴ sᴇᴠᴡɴ`,
    headerType: 4,
    buttons: generatebutton
  };
  return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})


cmd({
  pattern: "ownermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪OWNER COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'owner'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'Bot repo'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/b477kp.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪsᴀ◎ʙʏ ᴀʏᴀɴ ᴍᴏᴅᴢ`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})



cmd({
  pattern: "adminmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ADMIN COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'admin'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'Bot repo'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/0xh1qr.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪsᴀ◎ʙʏ ᴀʏᴀɴ ᴍᴏᴅᴢ`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})




cmd({
  pattern: "funmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪FUN COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'fun'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'Bot repo'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/0xh1qr.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪsᴀ◎ʙʏ ᴀʏᴀɴ ᴍᴏᴅᴢ`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})

cmd({
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
            ☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪OTHER COMMANDS MENU ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
             ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯\n\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
menuc += `*📍➣Command :* ${commands[i].pattern}
*📃➣Desc :* ${commands[i].desc}
*⌛➣Use:* ${commands[i].use}\n\n`
}}};
let generatebutton = [{
    buttonId: `${prefix}sc`,
    buttonText: {
        displayText: 'Bot repo'
    },
    type: 1
  },{
    buttonId: `${prefix}ping`,
    buttonText: {
        displayText: 'Queen Elisa Speed'
    },
    type: 1
  }]
  let buttonMessaged = {
    image: { url: `https://files.catbox.moe/0xh1qr.jpg` },
    caption: menuc,
    footer: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪsᴀ ◎ʙʏ ᴀʏᴀɴ ᴍᴏᴅᴢ`,
    headerType: 4,
    buttons: generatebutton
  };
return await conn.buttonMessage(from, buttonMessaged, mek);
} catch (e) {
reply('*ERROR !!*')
l(e)
}
})
 
