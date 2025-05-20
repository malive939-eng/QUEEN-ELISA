const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-api-new.vercel.app'


cmd({
    pattern: "mediafire",
    alias: ["mf","mediafire"],
    react: "🧬",
    desc: "",
    category: "download",
    use: '.mfire < mediafire url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me mediafire url");
  if(!q.includes('mediafire.com')) return await reply("This url is invalid");
  
const mfire = await fetchJson(`${apilink}/download/mfire?url=${q}`);
  
const msg = `🎐 *QUEEN ELISA DOWNLOADER* 🎐

*┌───────────◉▸▷*
*│ File Name* - ${mfire.result.fileName}
*│ File Size* - ${mfire.result.size}
*│ Upload Date and Time* - ${mfire.result.date}
*└───────────◉▸▷*

*POWERED QUEEN ELISA INC 2025*`
  
await conn.sendMessage( from, { image: { url: 'https://i.ibb.co/dPw1fHD/mfire.jpg' }, caption: msg }, { quoted: mek });

await conn.sendMessage(from, { document: { url: mfire.result.dl_link }, mimetype: mfire.result.fileType , fileName: mfire.result.fileName, caption: mfire.result.fileName }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply('This url type is not working !!')
}
})
