let arc = require('@architect/functions')

exports.handler = async function http(req) {
  return {
    type: 'text/html; charset=utf8',
    body: `<!doctype html>
      <html>
      <body>
      
      <h1>hello world from 'serverless side' render</h1>
      <p>Below we load a file from static assets and dynamically from an http lambda.</p>

      <script src=${arc.http.helpers.static('/whee.js')} type=module></script>
      <script src=/js/secure.mjs type=module></script>
      </body>
      </html>
    `
  }
}
