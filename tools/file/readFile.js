const fs = require('fs');

let path = `/Users/admin/Documents/demo.txt`;
let sleep = time => new Promise(resolve => setTimeout(resolve, time));
try{
    if(fs.existsSync(path)){
        fs.readFile(path, (err, data) => {
            if (err) throw err;
            console.log(data.toString());
          });
    }else{
        console.error('文件不存在')
    }
}catch(e){
    console.error("file parse error ,",e)
}