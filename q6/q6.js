const students = [
  { name: "Ali", scores: [16, 18, 20] },
  { name: "Sara", scores: [14, 15, 19] },
  { name: "Javad", scores: [17, 18, 16] },
];

const calculateAvrge = () => {
  return students.map(({ name, scores }) => {
    const avrge = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return { name, avrge };
  });
};

const avrages = calculateAvrge(students);
console.log(avrages);

