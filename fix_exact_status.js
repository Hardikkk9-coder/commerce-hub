const fs = require('fs');

function fix(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split('height: \\`').join('height: `');
  content = content.split('%\\`').join('%`');
  content = content.split('\\${').join('${');
  fs.writeFileSync(file, content);
}

fix('src/app/(marketing)/resources/status/page.tsx');
console.log('Fixed status page');
