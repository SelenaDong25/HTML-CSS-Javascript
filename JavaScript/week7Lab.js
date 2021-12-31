

class student {
    constructor(studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.classArr = [];
    }
    addClass(course) {
        this.classArr.push(course);
        return this.classArr;
    }
    getClass(course) {
        for (let i = 0; i < this.classArr.length; i++) {
            if (this.classArr[i] === course) {
                return this.classArr[i];
            }
        }
    }
}
class course {
    constructor(courseSessionId, courseName) {
        this.courseSessionId = courseSessionId;
        this.courseName = courseName;
    }
}
class teacher {
    constructor(name) {
        this.name = name;
        this.courseTeach = [];
    }
    addCourses(course) {
        this.courseTeach.push(course);
    }
    getCourse(course) {
        for (let i = 0; i < this.courseTeach.length; i++) {
            if (this.courseTeach[i] === course) {
                return this.courseTeach[i];
            }
        }
    }
}
let python = new course('110', 'Python');
cc = new course('111', 'c#');
html = new course('112', 'HTML&CSS');
java1 = new course('141', 'Java I');
java2 = new course('143', 'Java II');
sql = new course('138', 'SQL');

teachers = [
    A = new teacher('teacher A'),
    B = new teacher('teacher B'),
    C = new teacher('teacher C')];

students = [
    Cindy = new student('885224', 'Cindy'),
    George = new student('885225', 'George'),
    Alex = new student('885226', 'Alex'),
    Mary = new student('885227', 'Mary'),
    Eric = new student('885228', 'Eric'),
    Richard = new student('885229', 'Richard')];

Cindy.addClass(python);
Cindy.addClass(cc);
George.addClass(html);
George.addClass(java1);
George.addClass(sql);
Alex.addClass(java2);
Alex.addClass(cc);
Alex.addClass(sql);
Mary.addClass(html);
Mary.addClass(java1);
Mary.addClass(cc);
Eric.addClass(html);
Eric.addClass(java2);
Eric.addClass(python);
Richard.addClass(python);
Richard.addClass(java1);

A.addCourses(python);
A.addCourses(cc);
B.addCourses(html);
B.addCourses(sql);
C.addCourses(java1);
C.addCourses(java2);
/* let courseArr =[python, cc, html, java1, java2, sql];
function getCourseTeacher(crs){
    if(A.courseTeach.filter(course => course.courseSessionId === crs) == true){        
        return A.name;    } 
    else if(B.courseTeach.filter(course => course.courseSessionId === crs) == true){        
        return B.name;    }
    else if(C.courseTeach.filter(course => course.courseSessionId === crs) == true){        
        return C.name;    }
    else;
}
console.log(getCourseTeacher('110')); */

let A_student = students.filter(student => student.getClass(python) === python)
    .map(student => student.studentName).concat(students.filter(student => student.getClass(cc) === cc)
        .map(student => student.studentName));

let setA = new Set(A_student);
A_student = Array.from(setA);
console.log("Teacher A have students: " + A_student);

let B_student = students.filter(student => student.getClass(html) === html)
    .map(student => student.studentName).concat(students.filter(student => student.getClass(sql) === sql)
        .map(student => student.studentName));
let setB = new Set(B_student);
B_student = Array.from(setB);
console.log("Teacher B have students: " + B_student);

let C_student = students.filter(student => student.getClass(java1) === java1)
    .map(student => student.studentName).concat(students.filter(student => student.getClass(java2) === java2)
        .map(student => student.studentName));

let setC = new Set(C_student);
C_student = Array.from(setC);
console.log("Teacher C have students: " + C_student);


for (let i = 0; i < students.length; i++) {
    if ((students[i].classArr.includes(python) || students[i].classArr.includes(cc)) === true) {
        console.log(students[i].studentName + ' associate ' + A.name);
    }
    if ((students[i].classArr.includes(html) || students[i].classArr.includes(sql)) === true) {
        console.log(students[i].studentName + ' associate ' + B.name);
    }
    if ((students[i].classArr.includes(java1) || students[i].classArr.includes(java2)) === true) {
        console.log(students[i].studentName + ' associate ' + C.name);
    }

}


