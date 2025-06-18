// QUEEN ELISA MULTIDEVICE WHATSAPP BOT 2025-2099
 // CREATED BY AYAN MODZ
 // FOLLOW MY CHANNEL   https://whatsapp.com/channel/0029Vb6KS7MGk1FnsSiliX0P
 //    ⏤͟͟͞͞ ✰© QUEEN ELISA SEARCH COMMANDS⏤͟͟͞͞ ✰


































































































const { cmd } = require('../command');
const yts = require('yt-search');
const fetch = require("node-fetch");
const acrcloud = require("acrcloud");
const { fetchJson } = require('../lib/functions');
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');
const config = require('../config');
const axios = require('axios');






cmd({
    pattern: "google",
    alias: ["gsearch", "search"],
    desc: "Search Google for a query.",
    category: "search",
    react: "🌐",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Vérifiez si un mot-clé est fourni
        if (args.length === 0) {
            return reply(`❗ *Please provide a search query.*\n\n*Example:*\n.google Queen Elisa Bot`);
        }

        const query = args.join(" ");
        const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Votre clé API Google
        const cx = "baf9bdb0c631236e5"; // Votre ID de moteur de recherche personnalisé
        const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

        // Appel API
        const response = await axios.get(apiUrl);

        // Vérifiez si l'API a renvoyé des résultats
        if (response.status !== 200 || !response.data.items || response.data.items.length === 0) {
            return reply(`❌ *No results found for:* ${query}`);
        }

        // Format et envoi des résultats
        let results = `🔎 *Google Search Results for:* "${query}"\n\n`;
        response.data.items.slice(0, 5).forEach((item, index) => {
            results += `*${index + 1}. ${item.title}*\n${item.link}\n${item.snippet}\n\n`;
        });

        reply(results.trim());
    } catch (error) {
        console.error(error);
        reply(`⚠️ *An error occurred while fetching search results.*\n\n${error.message}`);
    }
});


cmd({
    pattern: "requestlist",
    desc: "Shows pending group join requests",
    category: "group",
    react: "📋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        await conn.sendMessage(from, {
            react: { text: '⏳', key: m.key }
        });

        if (!isGroup) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ This command can only be used in groups.");
        }
        if (!isAdmins) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ Only group admins can use this command.");
        }
        if (!isBotAdmins) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ I need to be an admin to view join requests.");
        }

        const requests = await conn.groupRequestParticipantsList(from);
        
        if (requests.length === 0) {
            await conn.sendMessage(from, {
                react: { text: 'ℹ️', key: m.key }
            });
            return reply("ℹ️ No pending join requests.");
        }

        let text = `📋 *Pending Join Requests (${requests.length})*\n\n`;
        requests.forEach((user, i) => {
            text += `${i+1}. @${user.jid.split('@')[0]}\n`;
        });

        await conn.sendMessage(from, {
            react: { text: '✅', key: m.key }
        });
        return reply(text, { mentions: requests.map(u => u.jid) });
    } catch (error) {
        console.error("Request list error:", error);
        await conn.sendMessage(from, {
            react: { text: '❌', key: m.key }
        });
        return reply("❌ Failed to fetch join requests.");
    }
});

// Command to accept all pending join requests
cmd({
    pattern: "acceptall",
    desc: "Accepts all pending group join requests",
    category: "group",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        await conn.sendMessage(from, {
            react: { text: '⏳', key: m.key }
        });

        if (!isGroup) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ This command can only be used in groups.");
        }
        if (!isAdmins) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ Only group admins can use this command.");
        }
        if (!isBotAdmins) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ I need to be an admin to accept join requests.");
        }

        const requests = await conn.groupRequestParticipantsList(from);
        
        if (requests.length === 0) {
            await conn.sendMessage(from, {
                react: { text: 'ℹ️', key: m.key }
            });
            return reply("ℹ️ No pending join requests to accept.");
        }

        const jids = requests.map(u => u.jid);
        await conn.groupRequestParticipantsUpdate(from, jids, "approve");
        
        await conn.sendMessage(from, {
            react: { text: '👍', key: m.key }
        });
        return reply(`✅ Successfully accepted ${requests.length} join requests.`);
    } catch (error) {
        console.error("Accept all error:", error);
        await conn.sendMessage(from, {
            react: { text: '❌', key: m.key }
        });
        return reply("❌ Failed to accept join requests.");
    }
});

// Command to reject all pending join requests
cmd({
    pattern: "rejectall",
    desc: "Rejects all pending group join requests",
    category: "group",
    react: "❌",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        await conn.sendMessage(from, {
            react: { text: '⏳', key: m.key }
        });

        if (!isGroup) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ This command can only be used in groups.");
        }
        if (!isAdmins) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ Only group admins can use this command.");
        }
        if (!isBotAdmins) {
            await conn.sendMessage(from, {
                react: { text: '❌', key: m.key }
            });
            return reply("❌ I need to be an admin to reject join requests.");
        }

        const requests = await conn.groupRequestParticipantsList(from);
        
        if (requests.length === 0) {
            await conn.sendMessage(from, {
                react: { text: 'ℹ️', key: m.key }
            });
            return reply("ℹ️ No pending join requests to reject.");
        }

        const jids = requests.map(u => u.jid);
        await conn.groupRequestParticipantsUpdate(from, jids, "reject");
        
        await conn.sendMessage(from, {
            react: { text: '👎', key: m.key }
        });
        return reply(`✅ Successfully rejected ${requests.length} join requests.`);
    } catch (error) {
        console.error("Reject all error:", error);
        await conn.sendMessage(from, {
            react: { text: '❌', key: m.key }
        });
        return reply("❌ Failed to reject join requests.");
    }
});


cmd({
  pattern: 'gitclone',
  alias: ["git"],
  desc: "Download GitHub repository as a zip file.",
  react: '📦',
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  args,
  reply
}) => {
  if (!args[0]) {
    return reply("❌ Where is the GitHub link?\n\nExample:\n.gitclone https://github.com/username/repository");
  }

  if (!/^(https:\/\/)?github\.com\/.+/.test(args[0])) {
    return reply("⚠️ Invalid GitHub link. Please provide a valid GitHub repository URL.");
  }

  try {
    const regex = /github\.com\/([^\/]+)\/([^\/]+)(?:\.git)?/i;
    const match = args[0].match(regex);

    if (!match) {
      throw new Error("Invalid GitHub URL.");
    }

    const [, username, repo] = match;
    const zipUrl = `https://api.github.com/repos/${username}/${repo}/zipball`;

    // Check if repository exists
    const response = await fetch(zipUrl, { method: "HEAD" });
    if (!response.ok) {
      throw new Error("Repository not found.");
    }

    const contentDisposition = response.headers.get("content-disposition");
    const fileName = contentDisposition ? contentDisposition.match(/filename=(.*)/)[1] : `${repo}.zip`;

    // Notify user of the download
    reply(`📥 *Downloading repository...*\n\n*Repository:* ${username}/${repo}\n*Filename:* ${fileName}\n\n> *© Pᴏᴡᴇʀᴇᴅ ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ.♡*`);

    // Send the zip file to the user with custom contextInfo
    await conn.sendMessage(from, {
      document: { url: zipUrl },
      fileName: fileName,
      mimetype: 'application/zip',
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: 'r',
          newsletterName: '',
          serverMessageId: 143
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ Failed to download the repository. Please try again later.");
  }
});

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

        await conn.sendMessage(from, { image: { url: data.message }, caption: '> *© ᴀʏᴀɴ ꜱᴇᴠᴇɴ ᴍᴏᴅᴢ♡*' }, { quoted: mek });
    } catch (e) {
        console.log(e); 
        reply(`єяяσя ƒєт¢нιηg ∂σg ιмαgє: ${e.message}`);
    }
});


cmd({
  pattern: 'analyse',
  alias: ['vision'],
  react: '💡',
  desc: 'Analyze image with instruction.',
  category: 'other',
  filename: __filename
}, async (conn, mek, m, {
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
  if (!quoted) return reply('Quote an image with instructions for bot to analyze.');
  if (!body) return reply('Please provide instructions for the bot to analyze the image.');
  if (!q) return reply('What do you what me to do ?');

  try {
    const buffer = await m.quoted.download();
    if (!buffer) return reply('Failed to download the quoted image.');

    const base64String = buffer.toString('base64');
    await reply('```Queen Elisa Analysing Image wait...🔎```');

    const response = await axios.post('https://api.dreaded.site/api/gemini-analyze', {
      query: q,
      imageBuffer: base64String
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await reply(response.data.result);
  } catch (error) {
    const errorMessage = error.message || 'An unknown error occurred.';
    const maxErrorLength = 200;
    const replyMessage = errorMessage.length > maxErrorLength
      ? errorMessage.substring(0, maxErrorLength) + '...'
      : errorMessage;

    console.error('Error in sending request:', error);
    await reply(replyMessage);
  }
});


cmd({
  pattern: "Hd",
  react: "🦄",
  desc: "Enhance image quality using Remini API",
  category: "other",
  filename: __filename
}, async (conn, mek, m, {
  quoted,
  reply
}) => {
  try {
    // Debug: Log quoted to understand its structure
    console.log(quoted);

    // Validate that the quoted message contains an image
    if (!quoted || !quoted.message || (!quoted.message.imageMessage && !quoted.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage)) {
      return reply("Please reply to an image!");
    }

    // Download and encode the image in Base64
    const imagePath = await conn.downloadMedia(quoted);
    if (!imagePath) {
      return reply("Failed to download the image!");
    }

    const imageData = fs.readFileSync(imagePath);
    const imageBase64 = imageData.toString('base64');

    // Call the Remini API
    const apiUrl = `https://api.davidcyriltech.my.id/remini`;
    const response = await fetchJson(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageBase64 }),
    });

    // Handle API response
    if (!response || response.status !== 200 || !response.data) {
      return reply("Failed to enhance image quality!");
    }

    // Send the enhanced image
    await conn.sendMessage(m.chat, { image: { url: response.data } });

    // Clean up the temporary file
    fs.unlinkSync(imagePath);
  } catch (error) {
    console.error(error);
    reply("An error occurred!");
  }
});



cmd({
    pattern: "ai",
    alias: ["bot", "elisa", "gpt", "gpt4", "bing"],
    desc: "Chat with an AI model",
    category: "other",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("_Please provide a message for the AI.\nExample: `.ai Hello`_");

        const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.message) {
            await react("❌");
            return reply("AI failed to respond. Please try again later.");
        }

        await reply(`🤖 *AI Response:*\n\n${data.message}`);
        await react("✅");
    } catch (e) {
        console.error("Error in AI command:", e);
        await react("❌");
        reply("An error occurred while communicating with the AI.");
    }
});

cmd({
    pattern: "openai",
    alias: ["chatgpt", "gpt3", "open-gpt"],
    desc: "Chat with OpenAI",
    category: "other",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for OpenAI.\nExample: `.openai Hello`");

        const apiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.result) {
            await react("❌");
            return reply("OpenAI failed to respond. Please try again later.");
        }

        await reply(`🧠 *OpenAI Response:*\n\n${data.result}`);
        await react("✅");
    } catch (e) {
        console.error("Error in OpenAI command:", e);
        await react("❌");
        reply("An error occurred while communicating with OpenAI.");
    }
});

cmd({
    pattern: "deepseek",
    alias: ["deep", "seekai"],
    desc: "Chat with DeepSeek AI",
    category: "other",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`");

        const apiUrl = `https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.answer) {
            await react("❌");
            return reply("DeepSeek AI failed to respond. Please try again later.");
        }

        await reply(`🧠 *DeepSeek AI Response:*\n\n${data.answer}`);
        await react("✅");
    } catch (e) {
        console.error("Error in DeepSeek AI command:", e);
        await react("❌");
        reply("An error occurred while communicating with DeepSeek AI.");
    }
});




cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    react: '🎙️',
    desc: 'descg',
    category: "search",
    use: '.lyric <song name>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(tmsg)
const result = await fetchJson(`https://some-random-api.com/lyrics?title=${text}`)
if(result.lyrics) reply(`
[🧚QUEEN ELISA🧚]

   *_LYRICS SEARCH_*
   
*${result.title}*
_${result.artist}_


${result.lyrics}

└───────────◉`)
else reply(cantscg)
} catch (e) {
reply(cantscg)
l(e)
}
})


cmd({
  pattern: 'shazam',
  alias: ['findsong'],
  react: '🔎',
  desc: 'Identify a song.',
  category: 'search',
  filename: __filename
}, async (conn, mek, m, {
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
    if (!quoted) return reply('Please tag a song/audio for the AI to identify.');

    
    
    let buffer = await m.quoted.download();

    const acr = new acrcloud({
      host: 'identify-ap-southeast-1.acrcloud.com',
      access_key: '26afd4eec96b0f5e5ab16a7e6e05ab37',
      access_secret: 'wXOZIqdMNZmaHJP1YDWVyeQLg579uK2CfY6hWMN8'
    });

    let { status, metadata } = await acr.identify(buffer);
    if (status.code !== 0) return reply(status.msg);

    let { title, artists, album, genres, release_date } = metadata.music[0];
    let txt = `*📑 Title:* ${title}${artists ? ` ${album.name}` : ''}${genres ? `\n*🎀 Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`;
    txt += `*🕐 Release Date:* ${release_date}`;
    return reply(`*_🔎 QUEEN ELISA SONG IDENTIFYER 🔎_*:\n\n${txt}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


cmd({
  pattern: "tiktoksearch",
  alias: ["tiktoks", "tiks"],
  desc: "Search for TikTok videos using a query.",
  react: '✅',
  category: 'search',
  filename: __filename
}, async (conn, m, store, {
  from,
  args,
  reply
}) => {
  if (!args[0]) {
    return reply("🌸 What do you want to search on TikTok?\n\n*Usage Example:*\n.tiktoksearch <query>");
  }

  const query = args.join(" ");
  await store.react('⌛');

  try {
    reply(`*_🔎Queen Elisa Searching TikTok for:_* *${query}*`);
    
    const response = await fetch(`https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (!data || !data.data || data.data.length === 0) {
      await store.react('❌');
      return reply("❌ No results found for your query. Please try with a different keyword.");
    }

    // Get up to 7 random results
    const results = data.data.slice(0, 7).sort(() => Math.random() - 0.5);

    for (const video of results) {
      const message = `🌸 *TikTok Video Result*:\n\n`
        + `*• Title*: ${video.title}\n`
        + `*• Author*: ${video.author || 'Unknown'}\n`
        + `*• Duration*: ${video.duration || "Unknown"}\n`
        + `*• URL*: ${video.link}\n\n`;

      if (video.nowm) {
        await conn.sendMessage(from, {
          video: { url: video.nowm },
          caption: message
        }, { quoted: m });
      } else {
        reply(`❌ Failed to retrieve video for *"${video.title}"*.`);
      }
    }

    await store.react('✅');
  } catch (error) {
    console.error("Error in TikTokSearch command:", error);
    await store.react('❌');
    reply("❌ An error occurred while searching TikTok. Please try again later.");
  }
});

cmd({
    pattern: "yts",
    alias: ["youtubesearch", "ytsearch"],
    desc: "Search for YouTube videos",
    category: "search",
    react: "🔍",
    filename: __filename,
    use: '<search query>'
},
async (conn, mek, m, { from, args, reply }) => {
    if (!args[0]) return reply('Please provide a search query !');

    const query = args.join(' ');

    try {
        const results = await yts(query);

        if (!results.videos.length) {
            return reply('No videos found for the given query.');
        }

        let response = '*_Queen Elisa YouTube Search Results:_*\n\n';
        results.videos.slice(0, 20).forEach((video, index) => {
            response += `${index + 1}. *${video.title}*\n`;
            response += `   Channel: ${video.author.name}\n`;
            response += `   Duration: ${video.duration.timestamp}\n`;
            response += `   Views: ${formatNumber(video.views)}\n`;
            response += `   Uploaded: ${video.ago}\n`;
            response += `   Link: ${video.url}\n\n`;
        });

        response += `\nShowing top 20 results for "${query}"\n`;
        response += `To watch, click on the video link or use the command:\n`;

        await conn.sendMessage(from, { text: response }, { quoted: mek });
    } catch (error) {
        console.error('Error in YouTube search:', error);
        reply('❌ An error occurred while searching YouTube. Please try again later.');
    }
});

// Helper function to format large numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}