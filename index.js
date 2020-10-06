var input = process.argv.slice(2)
var controller = require ("./controller")

if (input[0] === "write") {
  controller.writeFile(input[1])
}
else if (input[0] === "read") {
    controller.readFile(input[1])
}
else if (input[0] === "delete") {
    controller.deleteFile(input[1])
}
else if (input[0] === "update") { 
    controller.updateFile(input[1])
}
