const juan = {
  name: "Juan",
  age: 25,
  aprovedCourses: ["html", "css", "javascript"],
  aproveCourse(course) {
    this.aprovedCourse.push(course)
  },
}

// function Student (name, age, aprovedCourses){
//   this.name = name
//   this.age = age
//   this.aprovedCourses = aprovedCourses
//   // this.aproveCourse = function(course){
//   //   this.aprovedCourses.push(course)
//   // }

// }
// Student.prototype.aproveCourse = function(course){
//   this.aprovedCourses.push(course)
// }

const pedro = new Student("Pedro", 25, ["html", "css", "javascript"])
console.log(juan)

class teacher {
  constructor({ name, age, aprovedCourses }) {
    this.name = name
    this.age = age
    this.courses = aprovedCourses
  }
  addCourse(course) {
    this.courses.push(course)
  }
}

const manuel = new teacher({
  name: "Manuel",
  age: 25,
  aprovedCourses: ["html", "css", "javascript"],
})
