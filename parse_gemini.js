const fs = require('fs');

const data = fs.readFileSync('C:\\Users\\kahi6\\.gemini\\antigravity\\brain\\d09e0e12-69cb-4734-99cb-e92ccfb4d0cc\\.system_generated\\steps\\13\\content.md', 'utf-8');

// replace script and style tags completely
let text = data.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
text = text.replace(/<[^>]+>/g, ' ');

// print words
let cleanText = text.replace(/\s+/g, ' ').trim();
console.log(cleanText.substring(0, 2000));
