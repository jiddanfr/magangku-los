const electron = require('electron')
const{BrowserWindow, app} = electron
const {getConnection} = require('./database')

function createProduct(product){
    const conn = getConnection();
    console.log(product)
}
let mainWindow

mainWin = () => {
    //buat browser window
    let mainWindow = new BrowserWindow({
        webPreferences: {
            enableRemoteModul: true,
            nodeIntegration: true,
            contextIsolation: false,
            
        }
    });
//load file index.html
    mainWindow.loadFile('src/ui/index.html')
}

app.on('ready', () =>{
    mainWin()
})

module.exports = {
    mainWindow,
    createProduct,
}