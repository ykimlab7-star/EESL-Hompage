const localtunnel = require('localtunnel');
const fs = require('fs');

(async () => {
    const tunnel = await localtunnel({ port: 3000 });
    console.log(tunnel.url);
    fs.writeFileSync('lt-url.txt', tunnel.url);

    tunnel.on('close', () => {
        // tunnels are closed
    });
})();
