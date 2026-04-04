// 1. Import required built-in modules
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // 2. Define the path to your HTML file
    // __dirname is a Node variable that gets the current folder's path
    const filePath = path.join(__dirname, 'Home.html');

    // 3. Read the HTML file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // If the file is missing or there is an error, send a 500 error
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error: Could not load the page.');
            console.error(err);
        } else {
            // 4. Send the file content with the correct HTML header
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});


server.listen(PORT, () => {
    console.log(`✅ Server is running!`);
    console.log(`👉 View your page at: http://localhost:${PORT}/`);
});