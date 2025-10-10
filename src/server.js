const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/': htmlHandler.getIndex,
    '/styles.css': htmlHandler.getCSS,
    '/bundle.js': htmlHandler.getBundle,
    notFound: jsonHandler.notFound
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

};

const handleGet = (request, response, parsedUrl) => {
    switch (parsedUrl.pathname) {
        case '/api/getTimezoneNames':
            break;
        case '/api/getTimezonesInCountry':
            break;
        case '/api/getCountriesWithTimezone':
            break;
        case '/api/getTimezonesFromTime':
            break;
        default:
            htmlHandler.getIndex(request, response);
            break;
    }
};

const onRequest = (request, response) => {
    const protocol = request.connection.encrypted ? 'https' : 'http';
    const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

    if (urlStruct[parsedUrl.pathname]) {
        return urlStruct[parsedUrl.pathname](request, response);
    };
    return urlStruct.notFound(request, response);
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1: ${port}`);
});