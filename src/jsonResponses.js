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