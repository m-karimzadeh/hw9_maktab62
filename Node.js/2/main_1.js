var fs = require('fs');

fs.readFile('./Node.js/2/from.txt', {encoding: 'utf-8'}, function(err, data){
    if (!err) {
        fs.writeFile("./Node.js/2/to.txt", data, function(err) {
            if(err) {
                console.log(err);
            }
            console.log("write done!");
        });

    } else {
        console.log(err);
    }
});