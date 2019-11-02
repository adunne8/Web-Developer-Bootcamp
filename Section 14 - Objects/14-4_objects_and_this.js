var comments = {};

comments.data = ["Good", "Great", "Meh"];

comments.print = function(){
    this.data.forEach(function(item){
        console.log(item);
    })
    console.log(this);
}