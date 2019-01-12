const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function() {
    const titles = this.films.map((film) => { return film.title });
    return titles;
}

Cinema.prototype.getFilmByTitle = function(title) {
    const film = this.films.filter((film) => { return film.title === title });
    return film[0];
}
Cinema.prototype.getFilmsByProperty = function(propery, value) {
    const films = this.films.filter((film) => { return film[propery] === value });
    return films;
}
Cinema.prototype.getFilmsByGenre = function(genre) {
    const films = this.getFilmsByProperty('genre', genre);
    return films;
}
Cinema.prototype.getFilmsByYear = function(year) {
    const films = this.films.filter((film) => { return film.year === year });
    return films;
}
Cinema.prototype.anyFilmsFromYear = function(year) {
    const isThere = this.films.some((film) => {return film.year === year});
    return isThere;
}
Cinema.prototype.allFilmsOverLength = function(length) {
    const answer = this.films.every((film) => {return film.length > length});
    return answer;
}
Cinema.prototype.calculateRunningTimes = function() {
    const answer = this.films.reduce((total, film) => { return total += film.length, 0}); 
    console.log("This is the answer:", answer);
    return answer;
}
// Park.prototype.mostVisitedDinosaur = function() {
//     let dino;
//     let biggest = 0;
//     for (const dinosaur of this.dinosaurCollection){
//       if (dinosaur.guestsAttractedPerDay > biggest) {
//         biggest = dinosaur.guestsAttractedPerDay;
//         dino = dinosaur;
//       };
//     };
//     return dino;
// }


module.exports = Cinema;
