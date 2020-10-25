const http = require('http');
const data = require('./data/db.json');

const server = http.createServer((req, res) => {
  res.writeHeader(200, 'Content-Type', 'text/html');
  res.end(JSON.stringify(data));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
