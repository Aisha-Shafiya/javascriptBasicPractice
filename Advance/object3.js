// De-Structure of object
const course = {
    coursename : "js in hindi",
    price : "999",
    courseTeacher : "Aisha"
}
// To destructure the code
// const{courseTeacher} = course;
// console.log(courseTeacher);

const{courseTeacher : Teacher} = course;
// console.log(Teacher);

// API