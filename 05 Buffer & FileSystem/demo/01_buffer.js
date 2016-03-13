var buf = new Buffer(1024);
buf[0] = 68;

console.log(buf.length);
console.log(Buffer.byteLength(buf));
