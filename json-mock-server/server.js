// server.js
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const jsonfile = require('jsonfile');
const middlewares = jsonServer.defaults();

function putCors(res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.set('Access-Control-Expose-Headers', 'Authorization');
}

/** 
 * Output static json in response 
 */
function staticJsonResponse(res, jsonFile) {
  putCors(res);
  res.json(jsonfile.readFileSync(path.join(__dirname, jsonFile)));
}

server.use(jsonServer.bodyParser);

// Authenticate custom route
server.post('/login', (req, res) => {
  if (req.body.username === 'test') {
    putCors(res);
    res.set('Authorization', 'Bearer abc123');
    res.json({});
  }
  else {
    putCors(res);
    res.status(401).json({message: 'Wrong username or password'});
  }
});

server.use(middlewares);
server.use(router);
server.listen(8081, () => {
  console.log('JSON Server is running');
});
