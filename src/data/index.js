const fs = require('fs');
const path = require('path');
module.exports = {
    loadData: (filenameJson = 'productsDataBase') => {
        const pathJson = path.join(__dirname, `./${filenameJson}.json`);
        const dataJson = fs.readFileSync(pathJson, 'utf-8');
        const dataJS = JSON.parse(dataJson);
        return dataJS;
    },
    saveData: (data, filenameJson = 'productsDataBase') => {
        const pathJson = path.join(__dirname, `./${filenameJson}.json`);
        const dataString = JSON.stringify(data, null, 3);
        fs.writeFileSync(pathJson, dataString, 'utf-8')
    },
};