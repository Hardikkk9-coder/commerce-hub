const fs = require('fs');

function fix(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split('{\\`').join('{`');
  content = content.split('\\`}').join('`}');
  content = content.split('\\${').join('${');
  
  // also fix style={{ height: \`\${h}%\` }} -> style={{ height: \`\${h}%\` }}
  content = content.split('height: \\`').join('height: `');
  content = content.split('%\\`').join('%`');
  
  fs.writeFileSync(file, content);
}

fix('src/components/marketing/hero.tsx');
fix('src/components/marketing/themes.tsx');
console.log('Done');
