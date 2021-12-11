const moviesJSON = require("./movies.json");
const seriesJSON = require("./series.json");
const usersJSON = require("./users.json");
const genderJSON = require("./users.json");


const movies = JSON.parse(moviesJSON);
const series = JSON.parse(seriesJSON);
const users = JSON.parse(usersJSON);
const gender = JSON.parse(genderJSON)

module.exports = {
    movies,
    series,
    users,
    gender
}