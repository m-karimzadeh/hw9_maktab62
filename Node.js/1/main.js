function fullNameGenarator(name, family, cbFunction){
    let fullName = `${name} ${family}`;
    cbFunction(fullName)
}

let thisName = prompt("Enter Your Name: ")
    ,thisFamily = prompt("Enter Your Family: ");

fullNameGenarator(thisName, thisFamily, function(response){
    console.log(`result =====> ${response}`)
})