const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Add Your Sesion Id",
MONGODB: process.env.MONGODB || "mongodb+srv://hansadewminalk:uGEaxYm90Qzg0wF2@cluster.dylsa.mongodb.net/",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
OWNER_NUMBER: process.env.OWNER_NUMBER || "Your Number Ex:94701515609",
AUTO_REACT: process.env.AUTO_REACT || "true",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
LANG: process.env.LANG || "SI",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
AUTO_TYPING: process.env.AUTO_REACT || "true",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
READ_CMD: process.env.READ_CMD || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
ANTI_LINK: process.env.ANTI_LINK || "true"
};
