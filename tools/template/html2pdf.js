var fs = require('fs');
var _  = require('lodash');
var pdf = require('html-pdf');
var tempalte_str = fs.readFileSync('./prebooking.html', 'utf8');
var options = {
    format: 'A3',
    "border": "0",
    "zoomFactor": "0.7",
    "type": "pdf",
};

// pdf.create(html, options).toFile('./prebooking.pdf', function(err, res) {
//     if (err) return console.log(err);
//     console.log(res); // { filename: '/app/businesscard.pdf' }
// });
let data ;
try{
    data = Object.assign({},{
        fullname1:'',
        idcard1:'',
        consume_code1:'',
        fullname2:'',
        idcard2:'',
        consume_code2:'',
        fullname3:'',
        idcard3:'',
        consume_code3:'',
        fullname4:'',
        idcard4:'',
        consume_code4:'',
        dates:'',
        tee_time:'',
        prebooking_sn: '2323',
        fieldname: '23323',
        fieldid: 2,
        tee_times: '2',
        price:2,
        personnum:2,
        prebooking_remark:33
    },data)
}catch(e){
    return res.json({ state:"error", errorMsg:"订单异常，请联系管理员" })
}
let compiled = _.template(tempalte_str);
let final_result = compiled(data);

pdf.create(final_result,  {
    format: 'A4',
    "type": "pdf",
    "border": {
        "top": "15mm", // default is 0, units: mm, cm, in, px
        "right": "15mm",
        "bottom": "15mm",
        "left": "15mm"
    },
}).toFile('./prebooking.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});