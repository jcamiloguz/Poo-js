const playVideo = (videoId) => {
  console.log(`Playing video ${videoId}`)
}
class Comment {
  constructor({ content, studentName, studentRole = "student" }) {
    this.content = content
    this.studentName = studentName
    this.studentRole = studentRole
    this.likes = 0
  }

  publish() {
    console.log(`${this.studentName} (${this.studentRole}): ${this.content}`)
    console.log(this.likes + " likes")
  }
}

class PlatziClass {
  constructor({ name, videoId }) {
    this._name = name
    this._videoId = videoId
  }
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
  get videoId() {
    return this._videoId
  }
  playVideo() {
    playVideo(this.videoId)
  }
}

class Course {
  constructor({ name, teacher, isFree = false, lang = "spanish" }) {
    this._name = name
    this._teacher = teacher
    this._isFree = isFree
    this._lang = lang
  }
  get name() {
    return this._name
  }
  get lang() {
    return this._lang
  }
  set name(value) {
    if (value.length < 3) {
      console.log("El nombre del curso debe tener más de 3 caracteres")
    } else {
      this._name = value
    }
  }
}
const htmlCourse = new Course({ name: "HTML", teacher: "manuel", isFree: true })
const javascriptCourse = new Course({
  name: "HTML",
  teacher: "manuel",
  lang: "english",
})

class LearningPath {
  constructor({ name, courses = [] }) {
    this._name = name
    this._courses = courses
  }
  get name() {
    return this._name
  }
  set name(value) {
    if (value.length < 3) {
      console.log("El nombre del Learning Path debe tener más de 3 caracteres")
    } else {
      this._name = value
    }
  }
  get courses() {
    return this._courses
  }
  addCourse(course) {
    this._courses.push(course)
  }
  set courses(value) {
    console.error("No se puede cambiar el valor de una propiedad de clase")
  }
}

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram,
    aprovedCourses = [],
    learningPaths = [],
  }) {
    this._name = name
    this._email = email
    this._username = username
    this.socialMedia = {
      twitter,
      instagram,
    }
    this._aprovedCourses = aprovedCourses
    this._learningPaths = learningPaths
  }
  get name() {
    return this._name
  }
  set name(value) {
    if (value.length < 3) {
      console.log("El nombre del estudiante debe tener más de 3 caracteres")
    } else {
      this._name = value
    }
  }
  get email() {
    return this._email
  }
  set email(value) {
    if (value.length < 3) {
      console.log("El email del estudiante debe tener más de 3 caracteres")
    } else {
      this._email = value
    }
  }
  get username() {
    return this._username
  }
  set username(value) {
    if (value.length < 3) {
      console.log("El username del estudiante debe tener más de 3 caracteres")
    } else {
      this._username = value
    }
  }
  get twitter() {
    return this.socialMedia.twitter
  }
  set twitter(value) {
    this.socialMedia.twitter = value
  }
  get instagram() {
    return this.socialMedia.instagram
  }
  set instagram(value) {
    this.socialMedia.instagram = value
  }
  get aprovedCourses() {
    return this._aprovedCourses
  }
  set aprovedCourses(value) {
    console.error("No se puede cambiar el valor de una propiedad de clase")
  }
  get learningPaths() {
    return this._learningPaths
  }
  set learningPaths(value) {
    console.error("No se puede cambiar el valor de una propiedad de clase")
  }

  addLearningPath(learningPath) {
    this._learningPaths.push(learningPath)
  }
  publishComment(content) {
    const comment = new Comment({ content, studentName: this.name })
    comment.publish()
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props)
    this.type = "free"
  }
  approveCourse(course) {
    if (course.isFree) {
      this._aprovedCourses.push(course)
    } else {
      console.log("El curso no es gratuito")
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props)
    this.type = "basic"
  }
  approveCourse(course) {
    if (course.lang !== "english") {
      this._aprovedCourses.push(course)
    } else {
      console.warn("El curso no es de inglés")
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props)
    this.type = "basic"
  }
  approveCourse(course) {
    this._aprovedCourses.push(course)
  }
}
class TeacherStudent extends Student {
  constructor(props) {
    super(props)
    this.type = "teacher"
  }
  approveCourse(course) {
    this._aprovedCourses.push(course)
  }
  publishComment(content) {
    const comment = new Comment({
      content,
      studentName: this.name,
      studentRole: "teacher",
    })
    comment.publish()
  }
}

const webLearningPath = new LearningPath({
  name: "Web",
  courses: ["html", "css", "javascript"],
})

const dataLearningPath = new LearningPath({
  name: "Data",
  courses: ["python", "sql", "javascript"],
})

const juan = new BasicStudent({
  name: "juan",
  email: "juan@mai.com",
  username: "juan",
  aprovedCourses: ["html", "css", "javascript"],
  learningPaths: [webLearningPath, dataLearningPath],
})

const freddie = new TeacherStudent({
  name: "freddie",
  email: "freddie@mai.com",
  username: "freddie",
  aprovedCourses: ["html", "css", "javascript"],
  learningPaths: [webLearningPath, dataLearningPath],
})

freddie.approveCourse(javascriptCourse)
