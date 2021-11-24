const fs = require('fs')
    ,fileName = 'newFile.txt';

fs.writeFile(__dirname + `/${fileName}`, '', function (err) {
  if (err) throw err;

  console.log('File is created successfully.');
});

fs.exists(__dirname + `/${fileName}`, function(response){
    if(response){
        console.log(`${fileName} is exist`)

    }else{
        console.log(`${fileName} is not exist`)
    }
})