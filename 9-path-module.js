const path = require('path')


console.log(path.sep) // the path separator


const filePath = path.join("/content", 'subfolder', 'text.tsx')


console.log('filePath: ', filePath)

const base = path.basename(filePath)

console.log(base)

// resolve create absolute path depends on system
const absolute = path.resolve(__dirname, 'content', "subfolder", "text.txt")

console.log(absolute)