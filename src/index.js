const {mainWindow} = require ('./main')
const {app} = require ('electron')

require ('./database')

require ('electron-reload') (__dirname)
app.whenReady().then(mainWindow);