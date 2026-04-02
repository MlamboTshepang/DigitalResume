// Import built-in Node.js modules
const http = require('http');
// We use URLSearchParams to parse the form data
const { URLSearchParams } = require('url');

const server = http.createServer((req, res) => {

    // We only care about POST requests to a specific path
    // Let's use '/contact' as the endpoint
    if (req.method === 'POST' && req.url === '/contact') {

        let body = '';

        // 1. Read the data from the request stream
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        // 2. When the stream ends, process the data
        req.on('end', () => {
            // Use URLSearchParams to parse the form data
            const params = new URLSearchParams(body);
            const parsedBody = {};
            for (const [key, value] of params.entries()) {
                parsedBody[key] = value;
            }

            // 3. --- The Honeypot Check ---
            // This is the logic for your 'bot-field'.
            // If it has a value, it's a bot!
            if (parsedBody['bot-field']) {
                console.log('Bot detected! (Honeypot was filled)');
                // We send a 200 OK response to trick the bot
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Thank you for your submission!' }));
                return; // Stop processing
            }

            // 4. --- Process the REAL submission ---
            const name = parsedBody.name;
            const email = parsedBody.email;
            const message = parsedBody.message;
            const formName = parsedBody['form-name']; // From your other hidden input

            console.log('--- ✅ New Contact Form Submission ---');
            console.log(`Form: ${formName}`);
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            // TODO:
            // This is where you would:
            // 1. Use a library like 'Nodemailer' to send an email
            // 2. Save this data to a database

            // 5. Send a success response back to the client
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: `Thanks, ${name}! Your message was received.`
            }));
        });

    } else {
        // Handle all other requests (like GET)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found. This server only accepts POST requests at /contact');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Listening for POST requests at /contact');
});