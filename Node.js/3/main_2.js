const fs = require('fs')
    ,fileName = 'newFile2.txt';

    
fs.writeFileSync(__dirname + `/${fileName}`, '');

let existCheck = fs.existsSync(__dirname + `/${fileName}`);

if (existCheck) {
    console.log(`${fileName} is exist`)

}else{
    console.error(`${fileName} is not exist`)
}