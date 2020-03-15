
// File system example
const os = require('os');
const fs = require('fs');

var totalMemory = os.totalmem();

console.log(`Total Membory: ${totalMemory}`);

fs.readdir('./', function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});

//New logger object created from custom class Logger
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (e) => {
  console.log('Listener called', e);
});

logger.log('my message');

// HTTP example

const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('hello world');
    res.end();
  }

});

server.on('connection', (socket) => {
  console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');
