function getHighAchievers(students, passingmarks) {
  return students.filter(student => student.score >= passingmarks).map(student => student.name.toUpperCase());
}

const students=[
    {id: 1, name:"Alice",score:85},
    {id: 20, name:"avishkar",score:90},
    {id: 35, name:"suresh",score:78}
];
passingmarks = 80;

const highAchievers = getHighAchievers(students,passingmarks);
console.log(highAchievers);