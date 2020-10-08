// learn more about event functions here: https://arc.codes/primitives/events
const arc = require('@architect/functions');

/**
 *
 *
 * @param {*} event
 * @returns
 */
async function helloEvent(event) {
  console.log('Hello event:', JSON.stringify(event, null, 2));
  return true;
}

exports.handler = arc.events.subscribe(helloEvent);
