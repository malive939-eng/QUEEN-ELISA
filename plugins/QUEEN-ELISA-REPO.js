const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*📍REPO LINK ❤️‍🔥👇*

🧚‍♀️◦https://github.com/ayanmdoz/QUEEN-ELISA/tree/main



*_©QUEEN-ELISAッ_*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/48hh4b.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
