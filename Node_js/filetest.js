const fs = require('fs')

fs.readFile('./hello.txt' /* 1 */, function (err, data) {
  console.log(data) // 3
})

console.log('Hello JavaScript') // 2