const fs = require('fs');
const uniq = require('lodash/uniq');

const list = [];

const transformObjToText = obj => {
  return Object.keys(obj).forEach(item => {
    if (typeof obj[item] === 'string') {
      list.push(`${obj['id']}=${obj['defaultMessage']}`);
    } else {
      transformObjToText(obj[item]);
    }
  });
};

const createFile = (filePath, data) => {
  const dir = './results';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(`${dir}/${filePath}`, data, err => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log('File created!');
  });
};

const createTranslationsFile = obj => {
  let output = '';

  transformObjToText(obj);
  uniq(list).forEach(item => (output += `${item}\n`));
  createFile('translations.txt', output);
};

const transformTextToJson = (filePath, jsonFileName) => {
  let output = '{';

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      throw err;
    }

    const jsonStructure = uniq(
      data.split('\n').map(item => {
        if (item.length) {
          const row = item.split('=');
          return `"${row[0]}": "${row[1]}"`;
        }
      })
    );
    jsonStructure.forEach(item => {
      if (item) {
        output += `${item},`;
      }
    });
    output = `${output.substr(0, output.length - 1)}}`;
    createFile(jsonFileName, output);
  });
};

module.exports = {
  createTranslationsFile,
  transformTextToJson
};
