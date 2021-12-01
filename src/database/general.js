const peliculasJSON = require(".peliculas.json");
const seriesJSON = require(".series.json");
const usersJSON = require(".users.json");

const peliculas = JSON.parse(peliculasJSON);
const series = JSON.parse(seriesJSON);
const users = JSON.parse(usersJSON);

module.exports = {
    peliculas,
    series,
    users
}