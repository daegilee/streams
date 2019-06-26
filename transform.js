var through = require('through2');
var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);

function write (buffer, encoding, next) {
  var buffer = buffer.toString();
  this.push(buffer.toUpperCase());
  next();
}

function end (done) {
  done();
}
