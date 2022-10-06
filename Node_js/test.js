const crypto = require('crypto')
crypto.createHash('sha512').update('1234').digest('base64');
crypto.createHash('sha512').update('1234').digest('hex');