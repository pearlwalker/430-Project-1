const http = require('http');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/styles.css': htmlHandler.getCSS,
  '/bundle.js': htmlHandler.getBundle,
  '/client.js': htmlHandler.getClient,
  '/countries.json': htmlHandler.getCountries,
  '/success': jsonHandler.success,
  '/badRequest': jsonHandler.badRequest,
  notFound: jsonHandler.notFound,
};

const parseBody = (request, response, handler) => {
  const requestBody = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    requestBody.push(chunk);
  });

  request.on('end', () => {
    const bodyToString = Buffer.concat(requestBody).toString();
    request.body = queryObjects.parse(bodyToString);

    handler(request, response);
  });
};

const handlePost = (request, response, parsedUrl) => {
  switch (parsedUrl.pathname) {
    case '/api/newTimezone':
      parseBody(request, response, jsonHandler.newTimezone);
      break;
    case '/api/changeGmtOffset':
      parseBody(request, response, jsonHandler.changeGmtOffset);
      break;
    default:
      break;
  }
};

const handleGet = (request, response, parsedUrl) => {
  switch (parsedUrl.pathname) {
    case '/styles.css':
      htmlHandler.getCSS(request, response);
      break;
    case '/bundle.js':
      htmlHandler.getBundle(request, response);
      break;
    case '/client.js':
      htmlHandler.getClient(request, response);
      break;
    case '/countries.json':
      htmlHandler.getCountries(request, response);
      break;
    case '/success':
      jsonHandler.success(request, response);
      break;
    case '/badRequest':
      jsonHandler.badRequest(request, response);
      break;
    case '/api/getTimezoneNames':
      jsonHandler.getTimezoneNames(request, response);
      break;
    case '/api/getTimezonesInCountry':
      jsonHandler.getTimezonesInCountry(request, response);
      break;
    case '/api/getCountriesWithTimezone':
      jsonHandler.getCountriesWithTimezone(request, response);
      break;
    case '/api/getTimezonesFromTime':
      jsonHandler.getTimezonesFromTime(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

const onRequest = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

  request.query = Object.fromEntries(parsedUrl.searchParams);

  if (urlStruct[parsedUrl.pathname]) {
    return urlStruct[parsedUrl.pathname](request, response);
  }
  return urlStruct.notFound(request, response);
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
