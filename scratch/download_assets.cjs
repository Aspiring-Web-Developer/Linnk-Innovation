const fs = require('fs');
const path = require('path');

async function downloadAssets() {
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    const assets = [
        {
            url: 'https://testc.wofxy.com/wp-content/uploads/2026/09/Linnk-Banner.mp4',
            dest: path.join(publicDir, 'Linnk-Banner.mp4')
        },
        {
            url: 'https://www.dev.linnkinnovationhub.com/wp-content/uploads/2026/09/Banner-Small-Image.jpg',
            dest: path.join(publicDir, 'Banner-Small-Image.jpg')
        },
        {
            url: 'https://www.dev.linnkinnovationhub.com/wp-content/uploads/2026/09/logo.png',
            dest: path.join(publicDir, 'logo.png')
        }
    ];

    for (const item of assets) {
        try {
            console.log('Downloading', item.url);
            const res = await fetch(item.url);
            if (res.ok) {
                const buf = Buffer.from(await res.arrayBuffer());
                fs.writeFileSync(item.dest, buf);
                console.log(`Saved ${path.basename(item.dest)} (${buf.length} bytes)`);
            } else {
                console.log(`Failed ${item.url} -> ${res.status}`);
            }
        } catch(e) {
            console.error('Error downloading:', item.url, e);
        }
    }
}

downloadAssets();
