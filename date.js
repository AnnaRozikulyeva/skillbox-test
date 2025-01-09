var m = require("moment");

module.exports = { date: m().format("YYYY-MM-DD"), time: m().format("HH:mm:SS") };
