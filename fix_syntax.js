const fs = require('fs');

function fixFile(path) {
  let content = fs.readFileSync(path, 'utf8');
  // Match a literal backslash followed by a backtick
  content = content.replace(/\\\\`/g, '`');
  // Match a literal backslash followed by a dollar sign
  content = content.replace(/\\\\\\$/g, '$');
  fs.writeFileSync(path, content, 'utf8');
  console.log('Fixed', path);
}

fixFile('src/components/marketing/hero.tsx');
fixFile('src/components/marketing/themes.tsx');
