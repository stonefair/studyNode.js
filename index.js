var express = require("express");
var bodyParser = require('body-parser')

var getUsers = require('./controllers/getUsers')
var getUserPosts = require('./controllers/getUserPosts')
const createUserPosts = require('./controllers/createUserPost')
const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var router = express.Router();

router.get('/users/:id?', getUsers) // теж саме що із постами

router.get('/posts/:userId?' , getUserPosts)

router.post('/posts/:userId', createUserPosts)

router.get('/posts', getUserPosts) // використовую щераз роутер, але без параметра userId (відповідну перевірку додав в модулі getUserPosts )
// але неможу додуматися чо можу це зробити без подвійного використання роутера, бо перевірка на пусту url (тобто /posts/ не виходить)
// const errorHandler = (err, req, resp, next) => {   // проміжний обробник помилок, який "ловить ерори" 
//   console.error('Помилка від Дениса', err.stack);
//   resp.status(500).send('Deniel, something gone wrong')
// }

app.use((error, req, resp, next) =>{
  resp.status(204);
  next();
})
app.use(router)

// app.use(errorHandler)

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


























































// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.end(req.url);
// });

// server.listen(4001, () => {
//   const { address, port } = server.address();
//   console.log(`Server is listening on: http://${address}:${port}`);
 
// })


// const someUrl = new URL('https://expample.com');
// someUrl.pathname = '/kurwa'
// someUrl.search = '?query=string'


// const querystring = require('querystring');
// const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';
// const queryToParse = url.split('?')[1]
// console.log(querystring.parse(queryToParse))


// const http = require('http');

// // Handle get request
// const handleGetRequest = (req, res) => {
//   const pathname = req.url;

//   if (pathname === '/users') {
//     res.end(JSON.stringify([]));
//   }
// }

// // Creates server instance
// const server = http.createServer((req, res) => {
//   const { method } = req;
 
//   switch(method) {
//     case 'GET':
//       return handleGetRequest(req, res);
//     default:
//       throw new Error(`Unsupported request method: ${method}`);
//   }
// });

// // Starts server listening on specified port
// server.listen(4001, () => {
//   const { address, port } = server.address();
//   console.log(`Server is listening on: http://${address}:${port}`);
// });



// const http = require('http');

// // Handle GET Request
// const handleGetRequest = (req, res) => {
//   const options = {
//     hostname: 'static-assets.codecademy.com',
//     path: '/Courses/Learn-Node/http/data.json',
//     method: 'GET'
//   }

//   const request = http.request(options, (response) => {
//     let data = '';

//     response.on('data', (chunk) => {
//       data += chunk;
//     });

//     response.on('end', (chunk) => {
//       res.end(data);
//     });
//   });
  

//   request.end()
// }

// // Creates server instance
// const server = http.createServer((req, res) => {
//   const { method } = req;
 
//   switch(method) {
//     case 'GET':
//       return handleGetRequest(req, res);
//     default:
//       throw new Error(`Unsupported request method: ${method}`);
//   }
// });

// // Starts server listening on specified port
// server.listen(4001, () => {
//   const { address, port } = server.address();
//   console.log(`Server is listening on: http://${address}:${port}`);
// });