const fs = require('fs');
const countries = JSON.parse(fs.readFileSync(`${__dirname}/../data/countries.json`));

const respondJSON = (request, response, statusCode, jsonObject) => {
  const jsonString = JSON.stringify(jsonObject);

  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(jsonString, 'utf8'),
  });
  response.write(jsonString);
  response.end();
};

const getTimezoneNames = (request, response) => {
  const timezoneArray = []
  for (let i = 0; i < countries.length; i++) {
    const tzFullData = countries[i].timezones;
    for (let x = 0; x < tzFullData.length; x++) {
      const tzCutData = [
        tzFullData[x].gmtOffsetName,
        tzFullData[x].abbreviation,
        tzFullData[x].tzName
      ]
      timezoneArray.push(tzCutData);
    }
  };
  const responseJSON = {
    timezoneArray
  };
  respondJSON(request, response, 200, responseJSON);
};
const getTimezonesInCountry = (request, response) => {
  const responseJSON = {
  };
  respondJSON(request, response, 200, responseJSON);
};

const getCountriesWithTimezone = (request, response) => {
  const responseJSON = {
  };
  respondJSON(request, response, 200, responseJSON);
};

const getTimezonesFromTime = (request, response) => {
  const responseJSON = {
  };
  respondJSON(request, response, 200, responseJSON);
};

const newTimezone = (request, response) => {
  const responseJSON = {
  };
  respondJSON(request, response, 200, responseJSON);
};

const changeGmtOffset = (request, response) => {
  const responseJSON = {
  };
  respondJSON(request, response, 200, responseJSON);
};

const success = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response!',
  };

  respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if (!request.query.valid || request.query.valid !== 'true') {
    responseJSON.message = 'Missing valid query parameter set to true';
    responseJSON.id = 'badRequest';
    return respondJSON(request, response, 400, responseJSON);
  }

  return respondJSON(request, response, 200, responseJSON);
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };
  respondJSON(request, response, 404, responseJSON);
};

module.exports = {
  success,
  badRequest,
  notFound,
  getTimezoneNames,
  getTimezonesInCountry,
  getCountriesWithTimezone,
  getTimezonesFromTime,
  newTimezone,
  changeGmtOffset,
};
