// QUEEN ELISA MULTIDEVICE WHATSAPP BOT 2025-2099
 // CREATED BY AYAN MODZ
 // FOLLOW MY CHANNEL   https://whatsapp.com/channel/0029Vb6KS7MGk1FnsSiliX0P
 //    ⏤͟͟͞͞ ✰© QUEEN ELISA DOWNLOADS⏤͟͟͞͞ ✰































































































const cheerio = require("cheerio");
const { cmd } = require('../command');
const axios = require('axios');
const { fetchJson } = require('../lib/functions')
const apilink = 'https://dark-yasiya-api-new.vercel.app'
const { igdl } = require("ruhend-scraper");
const { exec } = require('child_process');
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const fs = require('fs-extra');
const webp = require('node-webpmux');
const crypto = require('crypto');





cmd({
  pattern: "send",
  alias: ["sendme", 'save'],
  react: '📤',
  desc: "Forwards quoted message back to user",
  category: "other",
  filename: __filename
}, async (client, message, match, { from }) => {
  try {
    if (!match.quoted) {
      return await client.sendMessage(from, {
        text: "*🍁 Please reply to a message!*"
      }, { quoted: message });
    }

    const buffer = await match.quoted.download();
    const mtype = match.quoted.mtype;
    const options = { quoted: message };

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "image/jpeg"
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: match.quoted.ptt || false
        };
        break;
      default:
        return await client.sendMessage(from, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: message });
    }

    await client.sendMessage(from, messageContent, options);
  } catch (error) {
    console.error("Forward Error:", error);
    await client.sendMessage(from, {
      text: "❌ Error forwarding message:\n" + error.message
    }, { quoted: message });
  }
});


cmd({
  pattern: "quote",
  desc: "Get a random inspiring quote.",
  category: "fun",
  react: "💬",
  filename: __filename
}, async (conn, m, store, { from, reply }) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    const { content, author } = response.data;

    const message = `💬 *"${content}"*\n- ${author}\n\n> *QUOTES BY QUEEN ELISA*`;
    reply(message);
  } catch (error) {
    console.error("Error fetching quote:", error);
    reply("⚠️ API issue or coding error, please check the logs!");
  }
});

cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "download",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, reply, sender, args }) => {
    try {
        // Properly extract the movie name from arguments
        const movieName = args.length > 0 ? args.join(' ') : m.text.replace(/^[\.\#\$\!]?movie\s?/i, '').trim();
        
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.\nExample: .movie Iron Man");
        }

        const apiUrl = `https://apis.davidcyriltech.my.id/imdb?query=${encodeURIComponent(movieName)}`;
        const response = await axios.get(apiUrl);

        if (!response.data.status || !response.data.movie) {
            return reply("🚫 Movie not found. Please check the name and try again.");
        }

        const movie = response.data.movie;
        
        // Format the caption
        const dec = `
🎬 *${movie.title}* (${movie.year}) ${movie.rated || ''}

⭐ *IMDb:* ${movie.imdbRating || 'N/A'} | 🍅 *Rotten Tomatoes:* ${movie.ratings.find(r => r.source === 'Rotten Tomatoes')?.value || 'N/A'} | 💰 *Box Office:* ${movie.boxoffice || 'N/A'}

📅 *Released:* ${new Date(movie.released).toLocaleDateString()}
⏳ *Runtime:* ${movie.runtime}
🎭 *Genre:* ${movie.genres} 

📝 *Plot:* ${movie.plot}

🎥 *Director:* ${movie.director}
✍️ *Writer:* ${movie.writer}
🌟 *Actors:* ${movie.actors}

🌍 *Country:* ${movie.country}
🗣️ *Language:* ${movie.languages}
🏆 *Awards:* ${movie.awards || 'None'}

[View on IMDb](${movie.imdbUrl})
`;

        // Send message with the requested format
        await conn.sendMessage(
            from,
            {
                image: { 
                    url: movie.poster && movie.poster !== 'N/A' ? movie.poster : 'https://files.catbox.moe/v6zfno.jpg'
                },
                caption: dec,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402829832961@newsletter',
                        newsletterName: 'ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.error('Movie command error:', e);
        reply(`❌ Error: ${e.message}`);
    }
});



cmd({
    pattern: "ytpost",
    alias: ["ytcommunity", "ytc"],
    desc: "Download a YouTube community post",
    category: "search",
    react: "🎥",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a YouTube community post URL.\nExample: `.ytpost <url>`");

        const apiUrl = `https://api.siputzx.my.id/api/d/ytpost?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌");
            return reply("Failed to fetch the community post. Please check the URL.");
        }

        const post = data.data;
        let caption = `📢 *YouTube Community Post* 📢\n\n` +
                      `📜 *Content:* ${post.content}`;

        if (post.images && post.images.length > 0) {
            for (const img of post.images) {
                await conn.sendMessage(from, { image: { url: img }, caption }, { quoted: mek });
                caption = ""; // Only add caption once, images follow
            }
        } else {
            await conn.sendMessage(from, { text: caption }, { quoted: mek });
        }

        await react("✅");
    } catch (e) {
        console.error("Error in ytpost command:", e);
        await react("❌");
        reply("An error occurred while fetching the YouTube community post.");
    }
});

cmd({
    pattern: "scloud",
    desc: "downlode scloud",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("_*please give me a valid url ❗*_")
if (!q.includes('soundcloud.com')) return reply("_*That's is not soundcloud url ❕*_")
const response = await fetch(`https://prabath-md-api.up.railway.app/api/sclouddl?url=${q}`)
const data = await response.json()
const fbvid = data.data.sd
reply("_*Downloading your *SOUND CLOUD AUDIO*＿＿📥*_")
reply("_*Uploading your *SOUND CLOUD AUDIO* ＿＿📤*_")
await conn.sendMessage(from,{video : {url : sclouddl },caption : `┌────────────\n* SOUND CLOUD ᴅᴏᴡɴʟᴏᴀᴅᴇʀ..✅*\n_*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ..🧑🏻‍💻*_\n└─────────────`, mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
    console.log(e)
    reply("_*SCLOUD downloader sever are busy now 🛜*_\n_*please wait few minutes and try again 🔄*_")
}
}
)



cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return reply("*`Need a valid Facebook URL!`*");
    }

    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    const apiUrl = `https://lance-frank-asta.onrender.com/api/downloader?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data?.content?.status || !data?.content?.data?.result?.length) {
      throw new Error("Invalid API response or no video found.");
    }

    let videoData = data.content.data.result.find(v => v.quality === "HD") || 
                    data.content.data.result.find(v => v.quality === "SD");

    if (!videoData) {
      throw new Error("No valid video URL found.");
    }

    await conn.sendMessage(from, {
      video: { url: videoData.url },
      caption: `📥 *QUEEN ELISA FB DOWNLOADER..🚀*\n\n*QUAILTY•${videoData.quality}*\n\n🔗 *POWERED BY QUEEN ELISA INC*`
    }, { quoted: m });

  } catch (error) {
    console.error("FB Download Error:", error);

    // Send error details to bot owner
    const ownerNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";
    await conn.sendMessage(ownerNumber, {
      text: `⚠️ *FB Downloader Error!*\n\n📍 *Group/User:* ${from}\n💬 *Query:* ${q}\n❌ *Error:* ${error.message || error}`
    });

    // Notify the user
    reply("❌ *Error:* Unable to process the request. Please try again later.");
  }
});

cmd({
  'pattern': 'ig',
  'alias': ["insta"],
  'desc': "To download instagram videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x386562, _0x1b4817, _0x2d5654, {
  from: _0x2b1245,
  quoted: _0x35994d,
  body: _0x3ef60e,
  isCmd: _0x445688,
  command: _0x28d49a,
  args: _0x353941,
  q: _0x133e89,
  isGroup: _0xae87fe,
  sender: _0x2dff22,
  senderNumber: _0x37d5bb,
  botNumber2: _0x49a8d8,
  botNumber: _0x2ef999,
  pushname: _0x535d59,
  isMe: _0x231e91,
  isOwner: _0x299df6,
  groupMetadata: _0x162e52,
  groupName: _0x647ac4,
  participants: _0x5409f2,
  groupAdmins: _0x36386c,
  isBotAdmins: _0x2ec1e7,
  isAdmins: _0x318dfb,
  reply: _0x1bd856
}) => {
  try {
    if (!_0x133e89) {
      return _0x2d5654.reply("Please Give Me a vaild Link...");
    }
    _0x2d5654.react('⬇️');
    let _0x46b060 = await igdl(_0x133e89);
    let _0x2ec7e8 = await _0x46b060.data;
    for (let _0x2c5a94 = 0x0; _0x2c5a94 < 0x14; _0x2c5a94++) {
      let _0x226a29 = _0x2ec7e8[_0x2c5a94];
      let _0x3d32a8 = _0x226a29.url;
      _0x2d5654.react('⬆️');
      await _0x386562.sendMessage(_0x2b1245, {
        'video': {
          'url': _0x3d32a8
        },
        'mimetype': "video/mp4",
        'caption': "*© POWERED BY QUEEN ELISA INC*"
      }, {
        'quoted': _0x1b4817
      });
      _0x2d5654.react('✅');
    }
  } catch (_0x169bd8) {
    console.log(_0x169bd8);
  }
});
async function xdl(_0x1875a8) {
  return new Promise((_0x22f9b0, _0x3f4b9e) => {
    fetch('' + _0x1875a8, {
      'method': "get"
    }).then(_0x3cefbd => _0x3cefbd.text()).then(_0x313b57 => {
      const _0x469b1a = cheerio.load(_0x313b57, {
        'xmlMode': false
      });
      const _0x38f938 = _0x469b1a("meta[property=\"og:title\"]").attr('content');
      const _0x15a94a = _0x469b1a("meta[property=\"og:duration\"]").attr("content");
      const _0x555a9c = _0x469b1a("meta[property=\"og:image\"]").attr("content");
      const _0x2c4ecd = _0x469b1a("meta[property=\"og:video:type\"]").attr("content");
      const _0x3c4e1d = _0x469b1a("meta[property=\"og:video:width\"]").attr("content");
      const _0x184840 = _0x469b1a("meta[property=\"og:video:height\"]").attr('content');
      const _0x2275cf = _0x469b1a("span.metadata").text();
      const _0x486d37 = _0x469b1a("#video-player-bg > script:nth-child(6)").html();
      const _0x282510 = {
        'low': (_0x486d37.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x486d37.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x486d37.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x486d37.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x486d37.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x486d37.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x486d37.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x22f9b0({
        'status': true,
        'result': {
          'title': _0x38f938,
          'URL': _0x1875a8,
          'duration': _0x15a94a,
          'image': _0x555a9c,
          'videoType': _0x2c4ecd,
          'videoWidth': _0x3c4e1d,
          'videoHeight': _0x184840,
          'info': _0x2275cf,
          'files': _0x282510
        }
      });
    })["catch"](_0x502863 => _0x3f4b9e({
      'status': false,
      'result': _0x502863
    }));
  });
}

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


cmd({
    pattern: "insta2",
    alias: ["igdl2", "reel2", "ig2", "instadl2"],
    desc: "Download Instagram reels or image posts",
    category: "download",
    react: "⏳",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide an Instagram post or reel link.");
        if (!q.includes("instagram.com")) return reply("Invalid Instagram link.");

        const apiUrl = `https://delirius-apiofc.vercel.app/download/igv2?url=${q}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌"); 
            return reply("Failed to fetch Instagram media.");
        }

        const { username, fullname, caption, likes, comments, followed, download } = data.data;

        const captionText = `*QUEEN ELISA IG DOWNLOADER🚀*` +
                            `📸 *Instagram Post* 📸\n\n` +
                            `👤 *User:* ${fullname} (@${username})\n` +
                            `❤️ *Likes:* ${likes}\n💬 *Comments:* ${comments}\n👥 *Followers:* ${followed}\n` +
                            `📝 *Caption:*\n${caption || "THE QUEEN ELISA API."}`;

        for (const media of download) {
            if (media.type === "image") {
                await conn.sendMessage(from, {
                    image: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            } else if (media.type === "video") {
                await conn.sendMessage(from, {
                    video: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            }
        }

        await react("✅"); // React after successfully sending media
    } catch (e) {
        console.error("Error in Instagram downloader command:", e);
        await react("❌");
        reply(`An error occurred: ${e.message}`);
    }
});
cmd({
  pattern: "apk",
  desc: "Download APK from Aptoide.",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q) {
      return reply("❌ Please provide an app name to search.");
    }

    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${q}/limit=1`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data || !data.datalist || !data.datalist.list.length) {
      return reply("⚠️ No results found for the given app name.");
    }

    const app = data.datalist.list[0];
    const appSize = (app.size / 1048576).toFixed(2); // Convert bytes to MB

    const caption = `╭━━━〔 *APK Downloader* 〕━━━┈⊷
┃ 📦 *Name:* ${app.name}
┃ 🏋 *Size:* ${appSize} MB
┃ 📦 *Package:* ${app.package}
┃ 📅 *Updated On:* ${app.updated}
┃ 👨‍💻 *Developer:* ${app.developer.name}
╰━━━━━━━━━━━━━━━┈⊷
🔗 *Powered By QUEEN ELISA INC*`;

    await conn.sendMessage(from, { react: { text: "⬆️", key: m.key } });

    await conn.sendMessage(from, {
      document: { url: app.file.path_alt },
      fileName: `${app.name}.apk`,
      mimetype: "application/vnd.android.package-archive",
      caption: caption
    }, { quoted: m });

    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while fetching the APK. Please try again.");
  }
});


cmd({
    pattern: "tiktok",
    alias: ["ttdl", "tt", "tiktokdl"],
    desc: "Download TikTok video without watermark",
    category: "download",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("Please provide a TikTok video link.");
        if (!q.includes("tiktok.com")) return reply("Invalid TikTok link.");
        
        reply("*_QUEEN ELISA DOWNLOADING TIKTOK VIDEO , PLEASE WAIT...🚀_*");
        
        const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status || !data.data) return reply("Failed to fetch TikTok video.");
        
        const { title, like, comment, share, author, meta } = data.data;
        const videoUrl = meta.media.find(v => v.type === "video").org;
        
        const caption = `🎵 *QUEEN ELISA TIKTOK VIDEO* 🎵\n\n` +
                        `👤 *USER:* ${author.nickname} (@${author.username})\n` +
                        `📖 *TITLE:* ${title}\n` +
                        `👍 *LIKES:* ${like}\n💬 *COMMENTS:* ${comment}\n🔁 *SHARES:* ${share}\n\n> © POWERED BY QUEEN ELISA ♥️`;
        
        await conn.sendMessage(from, {
            video: { url: videoUrl },
            caption: caption,
            contextInfo: { mentionedJid: [m.sender] }
        }, { quoted: mek });
        
    } catch (e) {
        console.error("Error in TikTok downloader command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
