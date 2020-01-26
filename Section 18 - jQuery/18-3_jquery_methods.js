console.log($("#politics").attr("alt"));

$("#politics").attr("alt", "Murica");

$("#scenic").attr({
    src: "https://i.imgur.com/3ndk61l.jpg",
    alt: "Santa"
});


$("input:first-of-type").attr("type", "color");
$("input:first-of-type").attr("class", "colorBOx");

$("#lastname").val("LastName");
console.log($("#lastname").val());

$("#dropdown").val("");
console.log($("#dropdown").val());

console.log($(".colorBOx").val());


// CLASS MANIPULATION

$("h1").addClass("correct");
$("h1").removeClass("correct");

$("ul li").addClass("wrong");
$("ul li").removeClass("wrong");
$("ul li").addClass("correct");
$("ul li:first").addClass("done");
$("ul li").toggleClass("done");
