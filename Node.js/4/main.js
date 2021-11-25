const fs = require('fs');

let allName = []
    , allNumber = []
    , fileData;

fileData = fs.readFileSync(__dirname + "/names.txt", 'utf8');
for (let record of fileData.split("\r\n")) {
    let recordArray = record.split("-");
    allName.push({ id: recordArray[0], name: recordArray[1] });
}

fileData = fs.readFileSync(__dirname + "/numbers.txt", 'utf8');
for (let record of fileData.split("\r\n")) {
    let recordArray = record.split("-");
    allNumber.push({ id: recordArray[0], number: recordArray[1] });
}

let joinAllData = [];
for (const personDataItem of allName) {
    for (const numberItem of allNumber) {
        if (personDataItem.id === numberItem.id) {
            joinAllData.push({ ...personDataItem, ...numberItem });
        }
    }
}

for (person of allName) {
    let thisText = ''
        ,multiFlag = false;
    
    for (var i=0; i < joinAllData.length; i++) {
        if (joinAllData[i].id === person.id) {
            if(thisText !== ''){
                thisText += ', '
                multiFlag = true
            }
            thisText += joinAllData[i].number
        }
    }
    
    if(thisText !== ''){
        console.log(`${person.name}'s phone number${ (multiFlag) ? 's are' : ' is'} ${thisText}`);

    }else{
        console.log(`${person.name} hasn't any phone number`);
    }
}

console.log(joinAllData)