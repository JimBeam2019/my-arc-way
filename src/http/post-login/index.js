const arc = require('@architect/functions');

// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http(req) {
  // Body: x-www-form-urlencoded => email & password
  const body = arc.http.helpers.bodyParser(req);
  const { email, password } = body;
  const loggedIn = email === 'admin' && password === 'admin';
  const cookie = await arc.http.session.write({ loggedIn });

  return {
    statusCode: 200,
    headers: { 'set-cookie': cookie, location: '/' },
  };
};
