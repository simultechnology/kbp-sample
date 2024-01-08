const http = require('http');
const redis = require('redis');

async function main() {

    const client = redis.createClient({
        'host': '127.0.0.1'
    });

    client.on('error', (err) => {
        console.log('Redis Client Error', err);
    });

    try {
        await client.connect();
    } catch (err) {
        console.error("Redis connection error:", err);
        process.exit(1);
    }


    const port = 8080;

    const requestHandler = async (request, response) => {
        console.log(request.url);
        if (!request.url.startsWith('/api')) {
            response.writeHead(404);
            response.end('Not found');
            return;
        }
        if (request.method !== 'GET' && request.method !== 'POST') {
            response.writeHead(400);
            response.end('Unsupported method.');
            return;
        }
        const key = 'journal-key';
        try {
            const value = await client.get(key);
            let journals = [];
            if (value) {
                journals = JSON.parse(value);
            }
            if (request.method === 'GET') {
                response.writeHead(200);
                response.end(JSON.stringify(journals));
            } else if (request.method === 'POST') {
                let body = [];
                request.on('data', (chunk) => {
                    body.push(chunk);
                }).on('end', async () => {
                    body = Buffer.concat(body).toString();
                    const msg = JSON.parse(body);
                    journals.push(msg);
                    await client.set(key, JSON.stringify(journals));
                    response.writeHead(200);
                    response.end(JSON.stringify(journals));
                });
            }
        } catch (err) {
            response.writeHead(500);
            response.end(err.toString());
        }
    }

    const server = http.createServer(requestHandler);

    server.listen(port, (err) => {
        if (err) {
            return console.log('could not start server', err);
        }

        console.log('api server up and running.');
    })

}

main();