const fs = require('fs');
fs.writeFileSync('./.env', `EVENT_BRITE_API=${process.env.EVENT_BRITE_API}\n`)