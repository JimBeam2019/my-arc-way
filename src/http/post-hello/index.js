// learn more about HTTP functions here: https://arc.codes/primitives/http
const arc = require('@architect/functions');

async function hello() {
  await arc.events.publish({
    name: 'hello',
    payload: { message: 'swag', timestamp: new Date(Date.now()).toISOString() },
  });

  return { location: '/hello' };
}

exports.handler = arc.http.async(hello);
