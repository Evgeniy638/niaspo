var http = require('http');

var options = { 
    host : 'localhost',
    port : 80,
    path: '/index.html',
    method: "GET"
};

callback = function(response) {
  var answer;
  response.on('data', function (chunk) {
    answer += chunk;
  });

  response.on('end', function () {
    console.log(answer);
  });
}

http.request(options, callback).end();