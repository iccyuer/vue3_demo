const fs = require('fs');
const xlsx = require('node-xlsx');

let path = `/Users/admin/Documents/express_test.xlsx`;
// let path = `/Users/admin/Documents/16353.xlsx`;
let sleep = time => new Promise(resolve => setTimeout(resolve, time));
try{
    if(fs.existsSync(path)){
        console.log("start to convert")
        let sheets = xlsx.parse(path);//获取到所有sheets
        if (!!sheets && sheets[0]) {
            let db_param = [];
            let idx = 0;
            for (let menu of sheets[0].data) {
                console.log('menu', menu);
            }
        }
    }else{
        console.error('文件不存在')
    }
}catch(e){
    console.error("file parse error ,",e)
}