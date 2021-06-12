const jokes = require('give-me-a-joke')
const colors = require('colors')
const franc = require('franc')
const langCode = require('langs')
const langs = require('langs')


const typing = process.argv.slice(2)
const code = franc(`${typing}`)
const lang = langs.where("3", code)
try{
console.log(lang.name.green)
} catch(e) {
    console.log("something went wrong sorry", e)
}