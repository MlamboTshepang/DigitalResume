// 1. Import required built-in modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');

const PORT = 3000;

// Creating the server
const server = http.createServer((req, res) => {
    // 2. Build the file path based on the requested URL
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // 3. Determine the correct Content-Type based on the file extension
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
    }

    // 4. Read the requested file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } else {
                // Some other server error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // 5. Send the file content with the correct header
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// 
app.get('/', (req, res) => {
    res.render('index');
});


server.listen(PORT, () => {
    console.log(`✅ Server is running!`);
    console.log(`👉 View your page at: http://localhost:${PORT}/`);
});