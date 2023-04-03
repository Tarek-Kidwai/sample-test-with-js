// task : make me a json

// joy, 20, 1200, 5ft6inch
// js, css, html, react, 
// 1-> A, 2, 0, 6 inch 
// 2-> B , 5, 0, 10inches
// 3-> C, 10, 50, 3 feet
// A, B, C 


const Person = {
    name: "joy",
    age: 20,
    salary: 1200,
    height: 5.6,
    skills: [{
        skillName: 'js',
        rating: 5.5
    }, "css", "html", "react",],
    kidsName: ['A', 'B', 'C'],
    kids: {
        A: {
            name: "A",
            age: 2,
            salary: 0,
            height: 0.6
        },
        B: {
            name: " B",
            age: 10,
            salray: 0,
            height: 5.10,
        },

        C: {
            name: " C",
            age: 5,
            salray: 50,
            height: 5.10,

        }
    }
}

console.log(Person.name)

console.log(Person.kids.A)


const secondPerson = {

}
