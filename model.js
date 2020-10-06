const fs = require("fs")

// function login (username, password) {
//     if (input[1] === username && input[2] === password){
        
//     }
// }

function writeFile (fileName, fileContent) {
    
        fs.writeFile("./asset/" + fileName, fileContent, (err) => {
        if (err) {
            console.log(err)
        }
        else {
        console.log("File have been successfully addedd!")
        }
    })
}

function readFile (fileName) {

    fs.readFile("./asset/" + fileName, (err, data) => {
        if (err) {
                console.log(err)
        }
         else {
            console.log(data.toString())
        }
    })
}

function deleteFile (fileName) {
    fs.unlink("./asset/" + fileName, (err) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log("Deleted!")
        }
    })
}

function updateFile (fileName, fileContent) {
    fs.appendFile("./asset/" + fileName, fileContent, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Updated Your File!")
        }
    })
}


module.exports = {
    writeFile, 
    readFile,
    deleteFile,
    updateFile
}