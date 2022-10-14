const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const requestUrl = url.parse(req.url);
  const path = requestUrl.pathname;

  const parts = path.split('/').slice(1);

  // This is really brittle, but assuming you know it's going to be 2 parts remaining after the above..

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(parts[1]);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
