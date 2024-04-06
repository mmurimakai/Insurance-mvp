const sequelize = require("./config");

async function initializeDb() {
    if(!sequelize.isDefined('Providers')) {
        try {
            await sequelize.sync();
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }}
}

module.exports = {initializeDb}