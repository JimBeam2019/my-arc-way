// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http(req) {
  const form =
    '<form action=/hello method=post>' + '<button>Hello</button>' + '</form>';

  const html = `<!DOCTYPE html><html lang="en"><body>${form}</body></html>`;

  return {
    statusCode: 200,
    headers: {
      'cache-control':
        'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
    },
    body: html,
  };
};
