// QUEEN ELISA MULTIDEVICE WHATSAPP BOT 2025-2099
 // CREATED BY AYAN MODZ
 // FOLLOW MY CHANNEL   https://whatsapp.com/channel/0029Vb6KS7MGk1FnsSiliX0P
 //    ⏤͟͟͞͞ ✰© QUEEN ELISA APP⏤͟͟͞͞ ✰
 































































































{
  "name": "QUEEN - ELISA",
  "description": "Javascript WhatsApp bot made by AYAN AZIZH",
  "logo": "https://files.catbox.moe/0xh1qr.jpg",
  "keywords": ["bot"],
  "success_url": "/",

  "env": {
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": true
    },  

    "ALIVE_IMG": {
      "description": "Put your alive img here.",
      "required": true
    },
    
    "ALIVE_MSG": {
      "description": "Put your alive msg here.",
      "required": true
    }   
},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
