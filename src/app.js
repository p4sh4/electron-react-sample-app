import { app, BrowserWindow } from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1100,
    // resizable: false,
    show: false, // don't show the window until everything is loaded
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
});
