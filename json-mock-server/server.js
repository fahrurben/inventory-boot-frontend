// server.js
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const jsonfile = require('jsonfile');
const faker = require('faker');
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

// Get customers
server.post('/api/customers/search', (req, res) => {
  const customers = [];
  for(var i=0;i<10;i++) {
    const customer = {};
    customer.contactName = faker.name.findName();
    customer.contactPhone = faker.phone.phoneNumber();
    customer.contactFax = faker.phone.phoneNumber();
    customer.contactEmail = faker.internet.email();
    customer.contactWebsite = faker.internet.url();
    customer.addressStreet = faker.address.streetAddress();
    customer.addressCity = faker.address.city();
    customer.addressProvince = faker.address.state();
    customer.addressPostalCode = faker.address.zipCode();
    customer.addressRemarks = "";
    customer.shippingStreet = faker.address.streetAddress();
    customer.shippingCity = faker.address.city();
    customer.shippingProvince = faker.address.state();
    customer.shippingPostalCode = faker.address.zipCode();
    customer.shippingRemarks = "";
    customer.remarks = "";
    customers.push(customer);
  }

  const ret = {
    page: 1,
    total: 2,
    data: customers
  }

  putCors(res);
  res.json(ret);
});

// Customer create
server.post('/api/customers', (req, res) => {
  putCors(res);
  res.json({message: 'success'});
});

server.use(middlewares);
server.use(router);
server.listen(8081, () => {
  console.log('JSON Server is running');
});
