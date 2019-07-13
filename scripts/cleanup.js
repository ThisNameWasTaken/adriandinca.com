const rimraf = require('rimraf');
const fs = require('fs');

const filesToDelete = ['public', '.cache'];

filesToDelete.map(file =>
  rimraf(file, fs, () => console.log(`deleted  ${file}`))
);

// try { MIAs.forEach(MIA => fetch(MIA)) } catch (err) { console.error(err) }

// while(!cantNoMore) { code(); }
