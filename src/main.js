const Fuse = require('fuse.js');
const data = require('./data.js');

const defaultOptions = {};

// # Setup
const searchByTagName = new Fuse(data, {
  defaultOptions,
  keys: ['tags.Nome'],
});

// # Searches

// ## By Tag Name
function fn_searchByTagName() {
  const search = 'SEGMENTO';
  const result = searchByTagName.search(search);
  console.log(`
    Searching by Tag Name: ${search}
    Result:
  `);
  console.log(result);
}

// # Outputs
fn_searchByTagName();
