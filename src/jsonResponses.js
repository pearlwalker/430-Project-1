const respondJSON = (request, response, statusCode, jsonObject) => {
    const jsonString = JSON.stringify(jsonObject);

    const headers = {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(jsonString, 'utf8'),
    };

    response.writeHead(statusCode, headers);
    if(request.method !== 'HEAD') {
        response.write(jsonString);
    };
    response.end();
};

const success = (request, response) => {
    const responseJSON = {
        message: 'This is a successful response!',
    };

    respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response) => {

};

const notFound = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found.',
        id: 'notFound',
    };
    respondJSON(request, response, 404, responseJSON);
};

module.exports = {
    notFound,
};