const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'QUEEN-ELISA~',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgresql://sadiya:MTCV3kmoO4YSt6bcK8naY9WCRRO7wL2v@dpg-d07n7k2li9vc73ff97bg-a/sula_md_db',
LANG: process.env.BOT_LANG || 'EN' ,
PREFIX: process.env.PREFIX || '#',
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 300,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©QUEEN - ELISA - MD',
LOGO: process.env.LOGO || `https://files.catbox.moe/0xh1qr.jpg` 
};
