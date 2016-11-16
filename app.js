//var app = require('electron')
//var BrowserWindow = require('browser-window')

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width:800,
    height:600
  })
  //mainWindow.loadUrl('file://' + __dirname + '/main.html')
  //mainWindow.openDevTools()
})
