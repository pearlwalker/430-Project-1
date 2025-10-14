const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/styles.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);
const client = fs.readFileSync(`${__dirname}/../client/client.js`);
const countries = fs.readFileSync(`${__dirname}/../data/countries.json`);

const serveFile = (response, file, contentType) => {
    response.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': Buffer.byteLength(file, 'utf8'),
    });
    response.write(file);
    response.end();
};

const getIndex = (request, response) => {
    serveFile(response, index, 'text/html');
};

const getCSS = (request, response) => {
    serveFile(response, css, 'text/css');
};

const getBundle = (request, response) => {
    serveFile(response, bundle, 'application/javascript');
};

const getClient = (request, response) => {
    serveFile(response, client, 'application/javascript');
};

const getCountries = (request, response) => {
    serveFile(response, countries, 'application/json');
};

module.exports = {
    getIndex,
    getCSS,
    getBundle,
    getCountries,
};