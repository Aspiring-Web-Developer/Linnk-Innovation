const fs = require('fs');
const path = require('path');

const snippet = fs.readFileSync(path.join(__dirname, 'exact_header_hero.html'), 'utf8');

// Find all data-settings in snippet
const settings = [...snippet.matchAll(/data-settings=["']([^"']+)["']/g)].map(m => {
    try { return JSON.parse(m[1].replace(/&quot;/g, '"')); } catch(e) { return null; }
}).filter(Boolean);

console.log('Hero data-settings:');
console.log(JSON.stringify(settings, null, 2));

// Also check background-image or background styles in post-72112.css for hero container classes
const css = fs.readFileSync(path.join(__dirname, 'post-72112.css'), 'utf8');
const containerIds = [...snippet.matchAll(/elementor-element-([a-zA-Z0-9]+)/g)].map(m => m[1]);
console.log('Container IDs in Hero:', containerIds);

containerIds.forEach(id => {
    const regex = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]*\\}`, 'g');
    const m = css.match(regex);
    if (m) {
        m.forEach(rule => {
            if (rule.includes('background') || rule.includes('video') || rule.includes('border-radius') || rule.includes('padding')) {
                console.log(`Rule for ${id}:`, rule.trim());
            }
        });
    }
});

