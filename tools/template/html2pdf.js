var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./prebooking.html', 'utf8');
var options = {
    format: 'A3',
    "border": "0",
    "zoomFactor": "0.7",
    "type": "pdf",
};

pdf.create(html, options).toFile('./prebooking.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});
