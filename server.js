var express = require('express');
var request = require("request");
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/SpectorSoft_Product_Comparison_corp_Matrix.pdf', function (req, res) {
  request('https://nessys-my.sharepoint.com/personal/joel_nessys_nl/_layouts/15/guestaccess.aspx?guestaccesstoken=k3GtQBAn9W39iJxICXfX1tW4jB0u6SlDxRhAbdPI2ew%3d&docid=0082d17dd5bbf49c9b8e4c73da98f7b91').pipe(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
