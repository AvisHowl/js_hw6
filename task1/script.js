const generateArray = (length, max) =>
	[...new Array(length)].map(() => Math.round(Math.random() * max));

const grades = generateArray(12, 100);

let sum = 0;
for (let i = 0; i < grades.length; i++) {
	sum += grades[i];
}

const mediumGrade = Math.round(sum / grades.length);

const maxGrade = Math.max(...grades);

const minGrade = Math.min(...grades);

const positiveGrades = grades.filter((el) => el >= 60);
const positiveLength = positiveGrades.length;

const negativeGrades = grades.filter((el) => el < 60);
const negativeLength = negativeGrades.length;

const letteredGrades = grades.map((num) => {
	if (num >= 80) {
		return "A";
	} else if (num >= 60 && num < 80) {
		return "B";
	} else if (num >= 40 && num < 60) {
		return "C";
	} else if (num >= 20 && num < 40) {
		return "D";
	} else {
		return "E";
	}
});

const result = document.querySelector(".result");
result.textContent = `
Оценки студентов: ${grades} \n Средний балл: ${mediumGrade} \n Максимальный балл: ${maxGrade} \n Минимальный балл: ${minGrade} \n Количество студентов с положительной оценкой: ${positiveLength} \n Количество студентов с отрицательной оценкой: ${negativeLength}\n Буквенные оценки: ${letteredGrades}`;
