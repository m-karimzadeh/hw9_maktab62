var fs = require('fs');

fs.readFile('./Node.js/2/from.txt', {encoding: 'utf-8'}, function(err, data){
    if(!err) {
        let allFileData = data;

        fs.readFile('./Node.js/2/append.txt', {encoding: 'utf-8'}, function(err, data){
            if(!err) {
                allFileData += ` ${data}`;

                fs.writeFile("./Node.js/2/to.txt", allFileData, function(err) {
                    if(err) {
                        console.log(err);
        
                    }else{
                        console.log("write done!");
                    }
                });
        
            } else {
                console.log(err);
            }
        });

    } else {
        console.log(err);
    }
});