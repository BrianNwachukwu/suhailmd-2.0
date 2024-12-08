const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+13032644787";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_41_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY0LFxuICAgICAgICA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWFoxeUNlMnZlUlhKL1FsYVRrM2Z3RWJIYnNpbk85Z09sOHJ3Tk01YWRpdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxMzAzMjY0NDc4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2QkI2NjU4NTM3NTM2ODlFNzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjg2OTEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTMwMzI2NDQ3ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQ0FBNThENjI3MjgyNDkwOTc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY4NjkxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQcWYwTWc5UFFaLV9FUHF0enBFV0RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhMGJkMmUzLTA0OTMtNDkwMy05N2Y2LWIzNTNhYjNmM2M2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA0NSxcbiAgICAgIDI1MixcbiAgICAgIDY4LFxuICAgICAgMTkyLFxuICAgICAgMjUsXG4gICAgICA5MSxcbiAgICAgIDE2NixcbiAgICAgIDU4LFxuICAgICAgMjIsXG4gICAgICAxNTksXG4gICAgICAzMyxcbiAgICAgIDIzMCxcbiAgICAgIDE1MixcbiAgICAgIDI1NSxcbiAgICAgIDE1MixcbiAgICAgIDEwOCxcbiAgICAgIDI0NSxcbiAgICAgIDE1MyxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTEyLFxuICAgICAgMTIsXG4gICAgICAxMzUsXG4gICAgICAxMjYsXG4gICAgICAyLFxuICAgICAgMTQ4LFxuICAgICAgMTg2LFxuICAgICAgODUsXG4gICAgICAxMyxcbiAgICAgIDE0MyxcbiAgICAgIDIwNCxcbiAgICAgIDIwMixcbiAgICAgIDEwOCxcbiAgICAgIDgzLFxuICAgICAgNzMsXG4gICAgICA4NSxcbiAgICAgIDE0OCxcbiAgICAgIDE1OCxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZGOTlCV1M4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxMzAzMjY0NDc4Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzA0Mjg3NTcwOTA1MjM6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCcmlhblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tPVHVrUVErT3pYdWdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid2kvZVBBSUlPTTJ4YWRmR1V4ckxWNnhqYXNCSTBWc1ZyZURSNmZOZ2dHOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3QjdGRnJvVTUvanBzakhuV0pZcCttaFVLb09YbkJ1K3lweVBsM3R3ZXYvNFljbDZ4ZUJaR2liWlNCNFdtb2svMGh5d04zZWU1blp1TU05dkVlenhDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJldXBnbHUycmZaNVR5OEZkMVFSNjVFR21lUDhmbzJxamhtRE85TXNZSXQrTTlnblBSZ0hYK1V1YitSWGdGV3M5dHE4Ujc3cDN6alBjVCtBaUFFdEhBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxMzAzMjY0NDc4Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2ODY5MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOOThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU45OC5qc29uIjogIntcImtleURhdGFcIjpcImtBbGF2dXR5dmZnZjJDeG9yREttRFNxOUo5eERXRHdIN25yVkhWeUdYSFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzNTU5MDc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2ODY5MDc0MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
