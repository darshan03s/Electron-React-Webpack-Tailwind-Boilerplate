// ipcmanager
const { ipcMain } = require('electron');

const testFunction = () => {
    ipcMain.handle('test-function', async (event) => {
        console.log('test-function from ipc');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Completed after 5 seconds");
            }, 5000);
        });
    });
    
}

module.exports = () => {
    testFunction();
}