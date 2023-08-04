// ИСХОДНИКИ

let  user = {
    name: 'Masha',
    age: 21
};

let numbers = [1, 2, 3];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};

let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 12},
                {id: 2, message: "Bye", likesCount: 1},
            ],
            newPostText: "About Me",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Valera"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Viktor"},
            ],
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "hi hi"},
                {id: 3, message: "hi hi hi"},
            ],
        },
        sidebar: [],
    },
}

//КЛОНЫ

var userClone = {...user};
var numbersClone = [...numbers];
var user1Clone = {...user1, location: {...user1.location}};
var user2Clone = {...user2, skills: [...user2.skills]};
var arrayClone = array.map(obj => ({...obj}));
var user4Clone = {...user4, studies: {...user4.studies, exams: {...user4.studies.exams}}};
var examsClone = user5.studies.exams.map(obj => ({...obj}));
var user5Clone = {...user5, studies: {...user5.studies, department: {...user5.studies.department}, exams: examsClone}};
//var user6Clone = {...user6, studies: {...user6.studies, department: {...user6.studies.department}, exams: [{...user6.studies.exams[1], professor: {...user6.studies.exams[1].professor}},{...user6.studies.exams[2], professor: {...user6.studies.exams[2].professor}},{...user6.studies.exams[3], professor: {...user6.studies.exams[3].professor}}]}};

function deepClone(obj) { //рекурсионная функция :(
    const clone = {};
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          clone[key] = obj[key].map(deepClone);
        } else {
          clone[key] = deepClone(obj[key]);
        }
      } else {
        clone[key] = obj[key];
      }
    }
    return clone;
  }
  
let user6Clone1 = deepClone(user6);
let user7Clone = deepClone(user7);  
let storeClone = deepClone(store);

user5Clone.studies.department.group = 12;

document.write("Была группа: " + user5.studies.department.group + "<br>");
document.write("Стала группа: " + user5Clone.studies.department.group + "<br>");

user6Clone1.studies.exams[1].professor.name = 'Марина Фёдоровна';

document.write("Было имя: " + user6.studies.exams[1].professor.name + "<br>");
document.write("Стало имя: " + user6Clone1.studies.exams[1].professor.name + "<br>");

user7Clone.studies.exams[1].professor.articles[1].pagesNumber = 3;
user7Clone.studies.exams[0].professor.articles[0].title = "About React.js";

document.write("Было страниц: " + user7.studies.exams[1].professor.articles[1].pagesNumber + "<br>");
document.write("Стало страниц: " + user7Clone.studies.exams[1].professor.articles[1].pagesNumber + "<br>");

document.write("Новое название: " + user7Clone.studies.exams[0].professor.articles[0].title + "<br>");

for (let post of storeClone.state.profilePage.posts) { //цикл for-of
    post.message = "Hello";
  }
  
  for (let message of storeClone.state.dialogsPage.messages) {
    message.message = "Hello";
  }
  console.log('Копия магазина после изменений:', storeClone);

console.log(user6Clone1);
console.log(user7Clone);
console.log(storeClone);

