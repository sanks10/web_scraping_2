let fs = require('fs');
let html_data=fs.readFileSync("index.html");
// console.log(html_data.toString());

let cheerio = require('cheerio');
let ch = cheerio.load(html_data+"");

let h1_obj = ch.load("h1");
console.log(h1_obj);
