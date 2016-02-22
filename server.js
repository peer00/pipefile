// Include the cluster module
var cluster = require('cluster');


// Code to run if we're in the master process
if (cluster.isMaster) {

// Code to run if we're in a worker process

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
}

else {

    var express = require('express');
    var request = require("request");

    // Create a new Express application
    var app = express();

    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    app.get('/SpectorSoft_Product_Comparison_corp_Matrix.pdf', function (req, res) {
      request('https://nessys-my.sharepoint.com/personal/joel_nessys_nl/_layouts/15/guestaccess.aspx?guestaccesstoken=k3GtQBAn9W39iJxICXfX1tW4jB0u6SlDxRhAbdPI2ew%3d&docid=0082d17dd5bbf49c9b8e4c73da98f7b91').pipe(res);
    });

    app.get('/test.zip', function (req, res) {
      request('https://nessys-my.sharepoint.com/personal/joel_nessys_nl/_layouts/15/guestaccess.aspx?guestaccesstoken=qAjeo%2fgc15oe1fK42s0cIbnc7z2HFRnoOYbxDBlnSQA%3d&docid=00042863a443f44a1a94a7743303b0ad1&expiration=2016%2f02%2f23+13%3a25%3a04').pipe(res);
    });

    app.get('/test2.zip', function (req, res) {
      request('https://www.dropbox.com/s/vrgifjynpdwpx50/Symantec%20Endpoint%20Protection%2012.rar?dl=1').pipe(res);
    });


    app.listen(process.env.PORT || 3000, function () {
      console.log('Example app listening on port 3000!');
    });

}
