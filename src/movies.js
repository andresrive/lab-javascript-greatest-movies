// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map((movie) => {
        return movie.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSpielberg = moviesArray.filter((movie) => {
        // if (movie.director == "Steven Spielberg") {
        //     if (movie.genre.includes("Drama")) {
        //         return movie
        //     }
        // }                               //ESTO Y LO DE ARRIBA ES LO MISMO
        return movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return dramaSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == "") return 0;
    let average = moviesArray.reduce((accumulator, currentValue) => {
        if (!currentValue.score) return accumulator;
        else return accumulator + currentValue.score;
    }, 0);
    let totalMovies = moviesArray.length;
    console.log(average / totalMovies)
    return Math.round((average / totalMovies) * 100) / 100; //EXPLICACION ABAJO
    // 17,5464 * 100
    // 1754,64 round
    // 1755 /100
    // 17,55 
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length == "") return 0
    let dramaMovie = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
    })

    return scoresAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newMovies = Array.from(moviesArray)
    newMovies.sort((a, b) => {
        if (a.year == b.year) return a.title.localeCompare(b.title)
        return a.year - b.year
    })

    return newMovies

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let abcMovies = Array.from(moviesArray)
    abcMovies.sort((a, b) => a.title.localeCompare(b.title))
    let resultsArr = []
    abcMovies.forEach((movie, i) => {
        if (i < 20) resultsArr.push(movie.title)
    });
    return resultsArr

    //OTRA OPCION:
    let abcMoviesCopy20 = abcMovies.slice(0, 20);
    return abcMoviesCopy20.map((movie) => movie.title)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
