// AM1N
const {app, BrowserWindow, ipcMain, dialog} = require('electron');
var arg = {item: process.argv};
let win;

const createWindow = () =>
{
	win = new BrowserWindow(
	{
		webPreferences: {nodeIntegration: true, contextIsolation: false, nodeIntegrationInWorker: true},
		width: 800,
		height: 500,
		minWidth: 400,
		minHeight: 200,
		icon: __dirname + '/icon.ico',
	});
	win.center();
	win.removeMenu();
	win.loadFile('acetext.htm');
	// win.webContents.openDevTools();
	win.on('close', async(event) =>
	{
		event.preventDefault();
		win.webContents.send('main', 'cmdterminate');
	});
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () =>
{
	if(process.platform !== 'darwin') app.quit();
});

ipcMain.handle('getPath', async(event, a) =>
{
	return arg.item[1];
});

ipcMain.handle('handle', async(event, a) =>
{
	let data;
	if(a === 'open1')
	{
		let openfile;
		openfile = await dialog.showOpenDialog(win, {title: 'Open', properties: ['openFile']}, function(file){if(file !== undefined){return file;}});
		data = openfile.filePaths[0];
	}
	else if(a === 'open2')
	{
		let decision;
		decision = await dialog.showMessageBox(win, {title: 'Open', message: 'File has not been written. Would you like to discard all unwritten edits?', buttons: ['YES', 'NO']}, function(choice){return choice;});
		if(decision.response === 0)
		{
			let openfile;
			openfile = await dialog.showOpenDialog(win, {title: 'Open', properties: ['openFile']}, function(file){if(file !== undefined){return file;}});
			data = openfile.filePaths[0];
		}
	}
	else if(a === 'opendirect')
	{
		let decision;
		decision = await dialog.showMessageBox(win, {title: 'Open', message: 'File has not been written. Would you like to discard all unwritten edits and load dragged file?', buttons: ['YES', 'NO']}, function(choice){return choice;});
		if(decision.response === 0)
		{
			data = 1;
		}
		else
		{
			data = 0;
		}
	}
	else if(a === 'writeNew')
	{
		let writefile;
		writefile = await dialog.showSaveDialog(win, {title: 'Write', properties: ['dontAddToRecent']}, function(file){if(file !== undefined){return file;}});
		data = writefile.filePath;
	}
	else if(a === 'minimize')
	{
		win.minimize();
	}
	else if(a === 'maximize')
	{
		win.maximize();
	}
	else if(a === 'restore')
	{
		win.restore();
	}
	else if(a === 0)
	{
		let decision;
		decision = await dialog.showMessageBox(win, {title: 'Confirm Exit', message: 'File has not been written. Would you like to exit?', buttons: ['YES', 'NO']}, function(choice){return choice;});
		if(decision.response === 0)
		{
			app.exit(0);
		}
	}
	else if(a === 1)
	{
		app.exit(0);
	}
	return data;
});
