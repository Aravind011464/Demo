// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {

//   res.setHeader('Content-Type', 'text/html');

//   if (req.url === '/' || req.url === '/index.html') {
//     fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Internal Server Error');
//       } else {
//         res.writeHead(200);
//         res.end(data);
//       }
//     });
//   } else if (req.url === '/api/data') {
//     const responseData = { message: 'Hello, world!' };
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(responseData));
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });122 

const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');

  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.method === 'GET' && req.url === '/getDateTime') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const currentDateTime = new Date().toLocaleString();
    res.end(currentDateTime);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

