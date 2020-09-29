const arc = require('@architect/functions');

const subsets = require('../../algorithms/Subsets');

// learn more about HTTP functions here: https://arc.codes/primitives/http
function handler(req, res) {
  let body = JSON.parse(req.body);
  const numbers = body.numbers;

  const resSubsets = subsets.getSubsets(numbers);

  res({ statusCode: 200, body: JSON.stringify({ resSubsets }) });
}

exports.handler = arc.http(handler);
