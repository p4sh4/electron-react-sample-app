import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    resizable: false, // keep it in FullHD!
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});
