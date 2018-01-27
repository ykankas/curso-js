// lib2.js
const CryptoJS = require("crypto-js") // o node acha ele sozinho
module.exports = {
  gibberish (word, alg){
    // https://stackoverflow.com/questions/11889329/word-array-to-string
    if (alg == "MD5") return CryptoJS.MD5(word).toString(CryptoJS.enc.BAse64)
    else /*if(alg == "SHA")*/ return CryptoJS.SHA256(word).toString(CryptoJS.enc.Base64)
  }
}