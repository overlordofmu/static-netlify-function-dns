const dns = require('dns');
// Originally written by: https://github.com/HJGreen
// as found here: https://github.com/netlify/functions
exports.handler = function (event, context, callback) {
  dns.resolve(event.queryStringParameters.hostname, 'ANY', (err, records) => {
    callback(err, {
      statusCode: 200,
      body: JSON.stringify(records)
    });
  })
}
