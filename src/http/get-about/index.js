const arc = require('@architect/functions');

// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function handler(request) {
  // Body: x-www-form-urlencoded => email
  let body = arc.http.helpers.bodyParser(request);
  const name = body.email;

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
    body: `<h1>Hi ${name}</h1>`,
  };
};

// async function handler(request) {
//   const name = request.body.email;

//   return {
//     statusCode: 200,
//     headers: { 'content-type': 'text/html; charset=utf-8' },
//     body: `<h1>Hi ${name}</h1>`,
//   };
// }

// exports.handler = arc.http.async(handler);

// function handler(request, res) {
//   const name = request.body.email;

//   res({
//     statusCode: 200,
//     headers: { 'content-type': 'text/html; charset=utf-8' },
//     body: `<h1>Hi ${name}</h1>`,
//   });
// }

// exports.handler = arc.http(handler);
