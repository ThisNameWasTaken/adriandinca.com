const { promisify } = require('util');
const { readFile: _readFile, writeFile: _writeFile } = require('fs');

const writeFile = promisify(_writeFile);
const readFile = promisify(_readFile);

(async () => {
  const { homepage } = JSON.parse(await readFile('package.json', 'utf-8'));

  if (!homepage) {
    console.warn(
      'Cannot create CNAME because package.json does not have a `homepage` property.'
    );
  }

  const CNAME = homepage.split('://')[1];
  await writeFile(
    'public/CNAME',
    CNAME.startsWith('www.')
      ? `${CNAME}\n${CNAME.replace('www.', '')}`
      : `www.${CNAME}\n${CNAME}`
  );

  console.log(`Created CNAME ${CNAME}`);
})();
