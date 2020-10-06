var model = require("./model")

module.exports = {
    writeFile(fileName, fileContent) {
        model.writeFile(fileName, fileContent)
    },

    readFile(fileName) {
        model.readFile(fileName)
    },

    deleteFile(fileName) {
        model.deleteFile(fileName)
    },

    updateFile(fileName) {
        model.updateFile(fileName)
    }

}
