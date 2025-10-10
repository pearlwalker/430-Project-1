const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const urlStruct = {
    '/': htmlHandler.getIndex,
    '/styles.css': htmlHandler.getCSS,
    notFound: jsonHandler.notFound
};

const onRequest = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);
};

http.createServer(onRequest).listen(prototype, () => {
    console.log(`Listening on 127.0.0.1: ${port}`);
});