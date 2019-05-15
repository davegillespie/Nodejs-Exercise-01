//server
const http = require("http");

// let QuotesAPI = require ('./QuotesAPI');
// let api = new QuotesAPI();

this.randomQuote = require('./quoteList').all;
console.log("QUOTES", this.randomQuote);



console.log(`listening at port 3000`);

http.createServer((request, response) => {

let index = this.randomQuote[Math.floor(Math.random() * this.randomQuote.length)];

    // write header
    response.writeHead(200, {"Content-type": "text/plain"});

    // write body
    response.write(`Random Quote: ${index.quote}`);
    console.log(index.quote);

    // close connection
    response.end(); 
}).listen(3000); 

// console.log("Coming from server: ", api.randomQuote());

console.log('Listening at http://localhost:3000 ...');
