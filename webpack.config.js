const path = require("path");
module.exports = {
    entry: "./jscode/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname + 'jscode')
    }
};