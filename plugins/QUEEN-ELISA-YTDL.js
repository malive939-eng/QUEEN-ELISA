const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "mp4", 
    alias: ["ytv", "ytmp4"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.video < YouTube url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("*🌅💇Please provide a YouTube URL or song name.*");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 *_QUEEN ELISA_* 〕━━━┈⊷
┃◍╭───────────
┃◎┃๏ *_👸ELISA DOWNLOADER👸_*
┃◎└───────────···๏
╰────────────────┈⊷
╭━━❐━⫸
┇🎬 *_Title_* -  ${yts.title}
┇🕑 *_Duration_* - ${yts.timestamp}
┇📈 *_Views_* -  ${yts.views}
┇📚 *_Author_* -  ${yts.author.name}
┇🖇️ *_Link_* -  ${yts.url}
┇🌟 *_Channel_* - https://whatsapp.com/channel/0029Vb6KS7MGk1FnsSiliX0P
┇👸 *_Group Ofc_* - https://chat.whatsapp.com/D2uPHizziioEZce4ev9Kkl
┇👑 *_Owner_* - ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ
╰━━❑━⫸`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `> *${yts.title}*\n> *© POWERED BY QUEEN ELISA INC*`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
       
// play

cmd({ 
     pattern: "play", 
     alias: ["yta", "song"], 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song < Youtube url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("*🌅💇Please provide a YouTube URL or song name.*");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╭━━━〔 *_QUEEN ELISA_* 〕━━━┈⊷
┃◍╭───────────
┃◎┃๏ *_👸ELISA DOWNLOADER👸_*
┃◎└───────────···๏
╰────────────────┈⊷
╭━━❐━⫸
┇🎬 *_Title_* -  ${yts.title}
┇🕑 *_Duration_* - ${yts.timestamp}
┇📈 *_Views_* -  ${yts.views}
┇📚 *_Author_* -  ${yts.author.name}
┇🖇️ *_Link_* -  ${yts.url}
┇🌟 *_Channel_* - https://whatsapp.com/channel/0029Vb6KS7MGk1FnsSiliX0P
┇👸 *_Group Ofc_* - https://chat.whatsapp.com/D2uPHizziioEZce4ev9Kkl
┇👑 *_Owner_* - ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ
╰━━❑━⫸
> *_© POWERED BY QUEEN ELISA INC_*`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> *© POWERED BY QUEEN ELISA INC*`
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});
