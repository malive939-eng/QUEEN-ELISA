// QUEEN ELISA MULTIDEVICE WHATSAPP BOT 2025-2099
 // CREATED BY AYAN MODZ
 // FOLLOW MY CHANNEL   https://whatsapp.com/channel/0029Vb6KS7MGk1FnsSiliX0P
 //    ⏤͟͟͞͞ ✰© QUEEN ELISA FUN⏤͟͟͞͞ ✰


































































































const axios = require("axios");
const { cmd } = require("../command");
const { fetchGif, gifToVideo } = require("../lib/fetchGif");
const { sleep } = require('../lib/functions');
const fetch = require("node-fetch");
const config = require("../config");
const crypto = require("crypto");
const FormData = require('form-data');
const fs = require('fs');
const os = require('os');
const path = require("path");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime} = require('../lib/functions')
var imgmsg = "*Give me a anime name !*"
var descgs = "It gives details of given anime name."
var cants = "I cant find this anime."






// Helper function to format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

cmd({
  pattern: "imgscan",
  alias: ["scanimg", "imagescan", "analyzeimg"],
  react: '🔍',
  desc: "Scan and analyze images using AI",
  category: "utility",
  use: ".imgscan [reply to image]",
  filename: __filename
}, async (client, message, { reply, quoted }) => {
  try {
    // Check if quoted message exists and has media
    const quotedMsg = quoted || message;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';
    
    if (!mimeType || !mimeType.startsWith('image/')) {
      return reply("Please reply to an image file (JPEG/PNG)");
    }

    // Download the media
    const mediaBuffer = await quotedMsg.download();
    const fileSize = formatBytes(mediaBuffer.length);
    
    // Get file extension based on mime type
    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else {
      return reply("Unsupported image format. Please use JPEG or PNG");
    }

    const tempFilePath = path.join(os.tmpdir(), `imgscan_${Date.now()}${extension}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    // Upload to Catbox
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), `image${extension}`);
    form.append('reqtype', 'fileupload');

    const uploadResponse = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    const imageUrl = uploadResponse.data;
    fs.unlinkSync(tempFilePath); // Clean up temp file

    if (!imageUrl) {
      throw "Failed to upload image to Catbox";
    }

    // Scan the image using the API
    const scanUrl = `https://apis.davidcyriltech.my.id/imgscan?url=${encodeURIComponent(imageUrl)}`;
    const scanResponse = await axios.get(scanUrl);

    if (!scanResponse.data.success) {
      throw scanResponse.data.message || "Failed to analyze image";
    }

    // Format the response
    await reply(
      `🔍 *Image Analysis Results*\n\n` +
      `${scanResponse.data.result}\n\n` +
      `> © Powered by Queen Elisa 💜`
    );

  } catch (error) {
    console.error('Image Scan Error:', error);
    await reply(`❌ Error: ${error.message || error}`);
  }
});

cmd({
    pattern: "garl",
    alias: ["imgloli"],
    react: '😎',
    desc: "Download anime loli images.",
    category: "anime",
    use: '.loli',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon')
let wm = `😎 Random Garl image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`
await conn.sendMessage(from, { image: { url: res.data.data[0].urls.original }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
cmd({
    pattern: "waifu",
    alias: ["imgwaifu"],
    react: '💫',
    desc: "Download anime waifu images.",
    category: "anime",
    use: '.waifu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/waifu')
let wm = `🩵 Random Waifu image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
cmd({
    pattern: "neko",
    alias: ["imgneko"],
    react: '💫',
    desc: "Download anime neko images.",
    category: "anime",
    use: '.neko',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/neko')
let wm = `🩷 Random neko image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`
await conn.sendMessage(from, { image: { url: res.data.url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
  
//=====================================================================
cmd({
    pattern: "megumin",
    alias: ["imgmegumin"],
    react: '💕',
    desc: "Download anime megumin images.",
    category: "anime",
    use: '.megumin',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/megumin')
let wm = `❤️‍🔥Random megumin image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
cmd({
    pattern: "maid",
    alias: ["imgmaid"],
    react: '💫',
    desc: "Download anime maid images.",
    category: "anime",
    use: '.maid',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.im/search/?included_tags=maid')
let wm = `😎 Random maid image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`
await conn.sendMessage(from, { image: { url: res.data.images[0].url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
cmd({
    pattern: "awoo",
    alias: ["imgawoo"],
    react: '😎',
    desc: "Download anime awoo images.",
    category: "anime",
    use: '.awoo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/awoo')
let wm = `😎 Random awoo image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
// Anmiex
cmd({
    pattern: "animegirl",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '*ANIME GIRL IMAGE* 🥳\n\n\n *> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ`*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl1",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl2",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl3",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl4",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

cmd({
    pattern: "animegirl5",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});


//==========anime=====

cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "download",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `> QUEEN ELISA ANIME IMGS*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/b26f27aa5daaada031b90.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/51b44e4b086667361061b.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7d165d73f914985542537.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/3d9732d2657d2d72dc102.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/8daf7e432a646f3ebe7eb.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7514b18ea89da924e7496.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});


cmd({
    pattern: "anime1",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/aD7t0Bc.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/PQO5wPN.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/5At1P4A.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/MjtH3Ha.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/QQW7VKy.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "anime2",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/0r1Bn88.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/2Xdpuov.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/0hx-3AP.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/q054x0_.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/4lyqRvd.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "anime3",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/gnpc_Lr.jpeg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢX' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/P6X-ph6.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/~p5W9~k.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/7Apu5C9.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/OTRfON6.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "anime4",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/aGgUm80.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/i~RQhRD.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/94LH-aU.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/V8hvqfK.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/lMiXE7j.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "anime5",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/-ABlAvr.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/HNEg0-Q.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/3x~ovC6.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/brv-GJu.jpg` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

await conn.sendMessage(from,{image :{ url: `https://i.waifu.pics/FWE8ggD.png` },caption: '> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ> ' }, { quoted: mek });
    } catch (e) {
        console.log(e); // ❯❯ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ 👑
        reply(`єяяσя ƒєт¢нιηg ∂σg ιмαgє: ${e.message}`);
    }
});




cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { 
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply 
}) => {
    try {
        // Get the bot owner's number dynamically from conn.user.id
        const botOwner = conn.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command.");
        }

        const steps = [
            '💻 *HACK STARTING...* 💻',
            
            '*Initializing hacking tools...* 🛠️',
            '*Connecting to remote servers...* 🌐',
            
            '```[██████████] 10%``` ⏳'                                            ,
            '```[███████████████████] 20%``` ⏳'                                   ,
            '```[███████████████████████] 30%``` ⏳'                               ,
            '```[██████████████████████████] 40%``` ⏳'                            ,
            '```[███████████████████████████████] 50%``` ⏳'                       ,
            '```[█████████████████████████████████████] 60%``` ⏳'                 ,
            '```[██████████████████████████████████████████] 70%``` ⏳'            ,
            '```[██████████████████████████████████████████████] 80%``` ⏳'        ,
            '```[██████████████████████████████████████████████████] 90%``` ⏳'    ,
            '```[████████████████████████████████████████████████████] 100%``` ✅',
            
            '🔒 *System Breach: Successful!* 🔓',
            '🚀 *Command Execution: Complete!* 🎯',
            
            '*📡 Transmitting data...* 📤',
            '_🕵️‍♂️ Ensuring stealth..._ 🤫',
            '*🔧 Finalizing operations...* 🏁',
            
            '⚠️ *Note:* All actions are for demonstration purposes only.',
            '⚠️ *Reminder:* Ethical hacking is the only way to ensure security.',
            
            '> *QUEEN-ELISA-HACKING-COMPLETE ☣*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.error(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});


cmd({
  pattern: "srepo",
  desc: "Fetch information about a GitHub repository.",
  category: "other",
  react: "🍃",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    const repoName = args.join(" ");
    if (!repoName) {
      return reply("❌ Please provide a GitHub repository in the format 📌 `owner/repo`.");
    }

    const apiUrl = `https://api.github.com/repos/${repoName}`;
    const { data } = await axios.get(apiUrl);

    let responseMsg = `📁 *GitHub Repository Info* 📁\n\n`;
    responseMsg += `📌 *Name*: ${data.name}\n`;
    responseMsg += `🔗 *URL*: ${data.html_url}\n`;
    responseMsg += `📝 *Description*: ${data.description || "No description"}\n`;
    responseMsg += `⭐ *Stars*: ${data.stargazers_count}\n`;
    responseMsg += `🍴 *Forks*: ${data.forks_count}\n`;
    responseMsg += `👤 *Owner*: ${data.owner.login}\n`;
    responseMsg += `📅 *Created At*: ${new Date(data.created_at).toLocaleDateString()}\n`;
    responseMsg += `\n> *© Powered by Queen Elisa*`;

    await conn.sendMessage(from, { text: responseMsg }, { quoted: m });
  } catch (error) {
    console.error("GitHub API Error:", error);
    reply(`❌ Error fetching repository data: ${error.response?.data?.message || error.message}`);
  }
});

cmd({
  pattern: "npm",
  desc: "Search for a package on npm.",
  react: '📦',
  category: "search",
  filename: __filename,
  use: ".npm <package-name>"
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    // Check if a package name is provided
    if (!args.length) {
      return reply("Please provide the name of the npm package you want to search for. Example: .npm express");
    }

    const packageName = args.join(" ");
    const apiUrl = `https://registry.npmjs.org/${encodeURIComponent(packageName)}`;

    // Fetch package details from npm registry
    const response = await axios.get(apiUrl);
    if (response.status !== 200) {
      throw new Error("Package not found or an error occurred.");
    }

    const packageData = response.data;
    const latestVersion = packageData["dist-tags"].latest;
    const description = packageData.description || "No description available.";
    const npmUrl = `https://www.npmjs.com/package/${packageName}`;
    const license = packageData.license || "Unknown";
    const repository = packageData.repository ? packageData.repository.url : "Not available";

    // Create the response message
    const message = `
*QUEEN ELISA NPM SEARCH*

*🔰 NPM PACKAGE:* ${packageName}
*📄 DESCRIPTION:* ${description}
*⏸️ LAST VERSION:* ${latestVersion}
*🪪 LICENSE:* ${license}
*🪩 REPOSITORY:* ${repository}
*🔗 NPM URL:* ${npmUrl}
`;

    // Send the message
    await conn.sendMessage(from, { text: message }, { quoted: mek });

  } catch (error) {
    console.error("Error:", error);
    reply("An error occurred: " + error.message);
  }
});



cmd({
  pattern: "gpass",
  desc: "Generate a strong password.",
  category: "other",
  react: '🔐',
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    // Password length specified by the user, defaults to 12 if not provided
    const passwordLength = args[0] ? parseInt(args[0]) : 12;

    // Validate the password length
    if (isNaN(passwordLength) || passwordLength < 8) {
      return reply("❌ Please provide a valid length for the password (Minimum 8 Characters).");
    }

    // Password generation function
    const generatePassword = (length) => {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, chars.length);
        password += chars[randomIndex];
      }
      return password;
    };

    // Generate the password
    const generatedPassword = generatePassword(passwordLength);

    // Send the message with the generated password
    await conn.sendMessage(from, {
      text: "🔐 *Your Strong Password* 🔐\n\nPlease find your generated password below:\n\n" + generatedPassword + "\n\n*Powered Queen Elisa*"
    }, {
      quoted: quoted
    });
    
  } catch (error) {
    console.error(error);
    reply("❌ Error generating password: " + error.message);
  }
});

cmd({
  pattern: "ship",
  alias: ["match", "love"],
  desc: "Randomly pairs the command user with another group member.",
  react: "❤️",
  category: "fun",
  filename: __filename
}, async (conn, m, store, { from, isGroup, groupMetadata, reply, sender }) => {
  try {
    if (!isGroup) return reply("❌ This command can only be used in groups.");

    const specialNumber = config.DEV ? `${config.DEV}@s.whatsapp.net` : null; // Convert to WhatsApp format
    const participants = groupMetadata.participants.map(user => user.id);
    
    let randomPair;

    if (specialNumber && participants.includes(specialNumber) && sender !== specialNumber) {
      randomPair = specialNumber; // Always pair with this number if available
    } else {
      // Pair randomly but ensure user is not paired with themselves
      do {
        randomPair = participants[Math.floor(Math.random() * participants.length)];
      } while (randomPair === sender);
    }

    const message = `💘 *Match Found!* 💘\n❤️ @${sender.split("@")[0]} + @${randomPair.split("@")[0]}\n💖 Congratulations! 🎉`;

    await conn.sendMessage(from, {
      text: message,
      contextInfo: {
        mentionedJid: [sender, randomPair],
        forwardingScore: 999,
        isForwarded: false,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "",
          newsletterName: "QUEEN ELISA INC",
          serverMessageId: 143
        }
      }
    });

  } catch (error) {
    console.error("❌ Error in ship command:", error);
    reply("⚠️ An error occurred while processing the command. Please try again.");
  }
});


cmd({
  pattern: "child",
  alias: ["boy", "larka"],
  desc: "Randomly selects a boy from the group",
  react: "👦",
  category: "fun",
  filename: __filename
}, async (conn, mek, store, { isGroup, groupMetadata, reply, sender }) => {
  try {
    if (!isGroup) return reply("❌ This command can only be used in groups!");

    const participants = groupMetadata.participants;
    
    // Filter out bot and get random participant
    const eligible = participants.filter(p => !p.id.includes(conn.user.id.split('@')[0]));
    
    if (eligible.length < 1) return reply("❌ No eligible participants found!");

    const randomUser = eligible[Math.floor(Math.random() * eligible.length)];
    
    await conn.sendMessage(
      mek.chat,
      { 
        text: `👦 *Here's your child* \n\n@${randomUser.id.split('@')[0]} is your handsome boy! 😎`, 
        mentions: [randomUser.id] 
      },
      { quoted: mek }
    );

  } catch (error) {
    console.error("Error in .child command:", error);
    reply(`❌ Error: ${error.message}`);
  }
});

// Command for random girl selection
cmd({
  pattern: "girl",
  alias: ["girl", "kuri", "larki"],
  desc: "Randomly selects a girl from the group",
  react: "👧",
  category: "fun",
  filename: __filename
}, async (conn, mek, store, { isGroup, groupMetadata, reply, sender }) => {
  try {
    if (!isGroup) return reply("❌ This command can only be used in groups!");

    const participants = groupMetadata.participants;
    
    // Filter out bot and get random participant
    const eligible = participants.filter(p => !p.id.includes(conn.user.id.split('@')[0]));
    
    if (eligible.length < 1) return reply("❌ No eligible participants found!");

    const randomUser = eligible[Math.floor(Math.random() * eligible.length)];
    
    await conn.sendMessage(
      mek.chat,
      { 
        text: `👧 *Here's your child* \n\n@${randomUser.id.split('@')[0]} is your beautiful girl! 💖`, 
        mentions: [randomUser.id] 
      },
      { quoted: mek }
    );

  } catch (error) {
    console.error("Error in .girl command:", error);
    reply(`❌ Error: ${error.message}`);
  }
});


cmd({
  pattern: "marriage",
  alias: ["introduction", "marriage", "wedding"],
  desc: "Randomly pairs two users for marriage with a wedding GIF",
  react: "💍",
  category: "fun",
  filename: __filename
}, async (conn, mek, store, { isGroup, groupMetadata, reply, sender }) => {
  try {
    if (!isGroup) return reply("❌ This command can only be used in groups!");

    const participants = groupMetadata.participants.map(user => user.id);
    
    // Filter out the sender and bot number if needed
    const eligibleParticipants = participants.filter(id => id !== sender && !id.includes(conn.user.id.split('@')[0]));
    
    if (eligibleParticipants.length < 1) {
      return reply("❌ Not enough participants to perform a marriage!");
    }

    // Select random pair
    const randomIndex = Math.floor(Math.random() * eligibleParticipants.length);
    const randomPair = eligibleParticipants[randomIndex];

    // Fetch wedding GIF
    const apiUrl = "https://api.waifu.pics/sfw/hug"; // Using kiss as wedding GIF
    let res = await axios.get(apiUrl);
    let gifUrl = res.data.url;

    let gifBuffer = await fetchGif(gifUrl);
    let videoBuffer = await gifToVideo(gifBuffer);

    const message = `💍 *Congratulations on your marriage* 💒\n\n👰 @${sender.split("@")[0]} + 🤵 @${randomPair.split("@")[0]}\n\nMay you both live happily ever after! 💖`;

    await conn.sendMessage(
      mek.chat,
      { 
        video: videoBuffer, 
        caption: message, 
        gifPlayback: true, 
        mentions: [sender, randomPair] 
      },
      { quoted: mek }
    );

  } catch (error) {
    console.error("❌ Error in .marige command:", error);
    reply(`❌ *Error in .marige command:*\n\`\`\`${error.message}\`\`\``);
  }
});


cmd({
  pattern: "fancy",
  alias: ["font", "style"],
  react: "✍️",
  desc: "Convert text into various fonts.",
  category: "tools",
  filename: __filename
}, async (conn, m, store, { from, quoted, args, q, reply }) => {
  try {
    if (!q) {
      return reply("❎ Please provide text to convert into fancy fonts.\n\n*Example:* .fancy Hello");
    }

    const apiUrl = `https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl);
    
    if (!response.data.status) {
      return reply("❌ Error fetching fonts. Please try again later.");
    }

    const fonts = response.data.result.map(item => `*${item.name}:*\n${item.result}`).join("\n\n");
    const resultText = `✨ *Fancy Fonts Converter* ✨\n\n${fonts}\n\n> *Powered by Queen Elisa*`;

    await conn.sendMessage(from, { text: resultText }, { quoted: m });
  } catch (error) {
    console.error("❌ Error in fancy command:", error);
    reply("⚠️ An error occurred while fetching fonts.");
  }
});