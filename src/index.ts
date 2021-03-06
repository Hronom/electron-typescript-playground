import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.on('ready', () => {
    console.log('App is ready');

    const win = new BrowserWindow({
        width: 600,
        height: 400,
        title: "electron-typescript-playground"
    });

    app.setBadgeCount(3);

    const indexHTML = path.join(__dirname + '/index.html');
    win.loadFile(indexHTML).then(() => {
        // IMPLEMENT FANCY STUFF HERE
    }).catch(e => console.error(e));
});

app.on("will-quit", () => {
    console.log('App is closing');
})