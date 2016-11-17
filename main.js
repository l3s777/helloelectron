//var app = require('electron')
//var BrowserWindow = require('browser-window')

const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', () => {
  let win = new BrowserWindow({width:800, height:600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})

exports.openWindow = () => {
  let win = new BrowserWindow({width:400, height:200})
  win.loadURL(`file://${__dirname}/bear.html`)
}
