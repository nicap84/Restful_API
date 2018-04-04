var express = require('express');
var url = require ('url');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(request, response) {
  var get_params = url.parse(request.url, true).query;

  //Object.keys(get_params) transform get_parse into array
  if (Object.keys(get_params).length == 0)
    response.end("hello all");
  else
    response.end('hello ' + get_params.name);
});

module.exports = router;
