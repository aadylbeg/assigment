const { Artists, sequelize } = require("../models");

(async () => {
  try {
    await Artists.sync({ alter: true });
    console.log("DB Synced");
  } catch (err) {
    console.log(err);
  }
  // process.exit(1);
})();
