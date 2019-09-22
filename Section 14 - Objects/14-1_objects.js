let person ={
    name: "john",
    age: 34
};

console.log(person);
console.log(person["name"]);
console.log(person.age);


var str = "name";
console.log(person[str]);
console.log(person["str"]);

person.name = "Jane";

console.log(person["name"]);

person.city = "Dublin";
console.log(person);

let dog = {};

dog.breed = "Lab";
dog.name = "Bubba";

console.log("----------------------");


var posts = [
    {
        title: "Cats are cool",
        author: "Andrew",
        comments: ["Awesome post", "Terrible Post"]
    },
    {
        title: "Dogs are ok",
        author: "John",
        comments: ["Yes", "No"]
    }
]

console.log(posts);
console.log(posts[0].title);
console.log(posts[1].comments[1]);