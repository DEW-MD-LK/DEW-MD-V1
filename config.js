const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vAAmAa5I#GxJ9DhLEWPAuBeSkhRevaV-1HIhEmZgzshIIa6164FY",
MONGODB: process.env.MONGODB || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94701515609",
AUTO_REACT: process.env.AUTO_REACT || "true",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true"
};
