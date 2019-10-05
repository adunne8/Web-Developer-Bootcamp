let movies = [

    {
        title: 'Holes',
        rating: 3,
        watched: true
    },
    {
        title: 'Ghostbusters 3',
        rating: 1,
        watched: false
    },
    {
        title: 'Tangled',
        rating: 5,
        watched: true
    }
]


/*

for(i = 0; i < movies.length; i++){
    if(movies[i].watched === true){
        console.log("You have watched '" + movies[i].title + "' - " + movies[i].rating + " stars");
    }
    else{
        console.log("You have watched '" + movies[i].title + "' - " + movies[i].rating + " stars");
    }
}
*/


function buildString(movie){
    let outString = "You have ";

    if(movie.watched === true){
        outString += "watched: ";
    }
    else{
        outString += "not watched: ";
    }

    outString += "\"" + movie.title + "\" - ";
    outString += movie.rating + " *";

    return outString;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
});

