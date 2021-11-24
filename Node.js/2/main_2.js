let fs = require('fs');

try {    
    let fileData = fs.readFileSync(__dirname + "/from.txt", 'utf8');

    fs.writeFileSync(__dirname + "/to.txt", fileData);

    console.log('write done');

}catch (error){
    console.log(error)
}