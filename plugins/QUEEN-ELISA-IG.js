const {
  fetchJson
} = require("../lib/functions");
const {
  downloadTiktok
} = require('@mrnima/tiktok-downloader');
const {
  facebook
} = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require('axios');
const {
  cmd,
  commands
} = require("../command");

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