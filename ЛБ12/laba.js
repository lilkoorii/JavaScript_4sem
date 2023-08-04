let Square = {
    side: 8,
    color: "yellow",
    
    calculateArea() {
      return this.side * this.side;
    },
  
    calculatePerimeter() {
      return 4 * this.side;
    }
  };

let SmallSquare = {
    side: 4,
    __proto__: Square,
  };

let Square1 = Object.create(Square);
let SmallSquare1 = Object.create(SmallSquare);

let Circle = {
    round: true,
    color: "none",
}

let GreenCircle = {
    __proto__: Circle,
    color: "green",
}

let Triangle = {
    height: 10,
    stripes: 1,
}

let StripedTriangle = {
    __proto__: Triangle,
    stripes: 3,
}

for (const prop in StripedTriangle) {
    if (StripedTriangle.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }
for (const prop in GreenCircle) {
    if (GreenCircle.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }
for (const prop in SmallSquare) {
    if (SmallSquare.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }

class Validator {
    static validateEmail(email) {
      // валидация имейла
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    static validateDomain(domain) {
      // валидация домена
      const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_а-яА-Я]+\.)+[a-zA-Zа-яА-Я]{2,}$/;
      return domainPattern.test(domain);
    }
  
    static validatePhone(phone) {
      // валидация телефона
      const phonePattern = /^(29|41)\d{8}$/;
      return phonePattern.test(phone);
    }
  
    static validateDate(date) {
      // валидация даты (YYYY-MM-DD)
      const datePattern = /^\d{2}-\d{2}-\d{4}$/;
      return datePattern.test(date);
    }
}

const email = 'example@example.com';
const domain = 'example.бай';
const phone = '2934567890';
const date = '05-12-2023';

console.log(Validator.validateEmail(email));
console.log(Validator.validateDomain(domain));
console.log(Validator.validatePhone(phone)); 
console.log(Validator.validateDate(date)); 

//студентовый класс
class Student {
    constructor(name, surname, faculty, ID) {
      this.name = name;
      this.surname = surname;
      this.faculty = faculty;
      this.ID = ID;
    }
  
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
  
    getCourse() {
        const currentYear = new Date().getFullYear();
        const yearPortion = this.ID.toString().substring(2, 4);
        const enrollmentYear = parseInt(yearPortion) + 2000;
        const course = currentYear - enrollmentYear;
        return course;
      }
    
      static getSpecialtyByID(ID) {
          const specialtyCodes = {
            1: 'ПОИТ',
            2: 'ИСИТ',
            3: 'ДЭИВИ',
            4: 'ПОИМБС',
          };
          const specialtyCode = ID.toString()[1];
          return specialtyCodes[specialtyCode];
        }
      static getDev(){
        document.addEventListener('DOMContentLoaded', function() { //дом-узлы (иначе таблица не грузится)
          //const studentTable = document.getElementById('studentTable');
          //studentTable.appendChild(table);
      
           //считаем дэивишников
           const deiviStudents = groupedStudents['ДЭИВИ'];
           const deiviStudentCount = deiviStudents ? Object.values(deiviStudents).reduce((total, course) => total + course.length, 0) : 0;
       
           const studentCountText = document.createElement('p');
           studentCountText.textContent = `Количество студентов-дэивишников: ${deiviStudentCount}`;
           studentTable.insertAdjacentElement('afterend', studentCountText);
        });
      }
        
  }

  //студентики
  const students = [
    new Student('Никита', 'Михайловский', 'ФИТ', 71222345),
    new Student('Мария', 'Лощакова', 'ФИТ', 73201111),
    new Student('Александра', 'Смирнова', 'ФИТ', 73219876),
    new Student('Полина', 'Волк', 'ФИТ', 72219999),
  ];
  
  // группируем студентиков
  const groupedStudents = {};
  students.forEach(student => {
    const specialty = Student.getSpecialtyByID(student.ID);
    const course = student.getCourse();
  
    if (!groupedStudents[specialty]) {
      groupedStudents[specialty] = {};
    }
    if (!groupedStudents[specialty][course]) {
      groupedStudents[specialty][course] = [];
    }
  
    groupedStudents[specialty][course].push(student);
  });
  
  // делаем таблицу (сложно но красиво)
  const table = document.createElement('table');
  
  for (const specialty in groupedStudents) {
    const specialtyRow = document.createElement('tr');
    const specialtyCell = document.createElement('td');
    specialtyCell.setAttribute('colspan', '2');
    specialtyCell.textContent = specialty;
    specialtyRow.appendChild(specialtyCell);
    table.appendChild(specialtyRow);
  
    for (const course in groupedStudents[specialty]) {
      const studentsInGroup = groupedStudents[specialty][course];
  
      const courseRow = document.createElement('tr');
      const courseCell = document.createElement('td');
      courseCell.textContent = `${course} курс`;
      courseRow.appendChild(courseCell);
  
      const studentsCell = document.createElement('td');
      studentsInGroup.forEach(student => {
        const studentName = document.createElement('div');
        studentName.textContent = student.getFullName();
        studentsCell.appendChild(studentName);
      });
      courseRow.appendChild(studentsCell);
  
      table.appendChild(courseRow);
    }
  }
  
  // добавляем табличку
  document.addEventListener('DOMContentLoaded', function() { //дом-узлы (иначе таблица не грузится)
    const studentTable = document.getElementById('studentTable');
    studentTable.appendChild(table);
  });

  Student.getDev();
 