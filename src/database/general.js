const moviesJSON = require("./movies.json");
const seriesJSON = require("./series.json");
const usersJSON = require("./users.json");

const movies = JSON.parse(moviesJSON);
const series = JSON.parse(seriesJSON);
const users = JSON.parse(usersJSON);

module.exports = {
    movies,
    series,
    users
}