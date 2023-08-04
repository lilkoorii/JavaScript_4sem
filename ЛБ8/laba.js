var task = +prompt("Введите номре задания");
switch(task){
    case 1:
        {
            function volume(a){
                return function(b){
                    return function(c){
                        return a*b*c;
                    }
                }
            }
            document.write(volume(4)(5)(6) + "<br>");
            
            function volume2(a) {
                return (b, c) => {
                    return a * b * c;
                }
            }
            document.write(volume2(10)(5, 6) + "<br>");
            document.write(volume2(10)(7, 12) + "<br>");
            document.write(volume2(10)(3, 8) + "<br>");
            
            /* другой способ каррирования
            function volume(a) {
                return (b) => {
                    return (c) => {
                        return a * b * c
                    }
                }
            }*/

        }
        break;
    case 2:
        {
            function* generateCoords(){

                var x = +prompt("Введите нач. значение x");
                var y = +prompt("Введите нач. значение y");
                for(let i=0; i<=10; i++){
                    switch(dir){
                        case "left":
                                { 
                                    x = x-10;
                                }
                                break;
                        case "right":
                                {
                                    x = x+10;
                                }
                                break;
                        case "up":
                                {
                                    y = y + 10;
                                }
                                break;
                        case "down":
                                {
                                    y = y - 10;
                                }
                                break;
                    }
                    dir = yield {x, y};
                }
            }
            var generator = generateCoords();
            for (let i = 0; i <= 10; i++)
            {
                var dir = prompt("Введите направление: ");
                var result = generator.next(dir);
                alert(JSON.stringify(result.value));
            }

        }
        break;
    case 3:
        {
            let numbers = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let [y, ...rest] = numbers;
            alert(y);
        }
        break;
    case 4:
        {
            let user = {
                name: "Антон",
                age: 18,
            }

            //let {...rest} = user; можно и так, но потом надо обращаться к свойствам при создании admin

            let admin = { admin: true, ...user }

            document.write(JSON.stringify(admin));
        }
        break;
    case 5:
        {
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

                },
                sidebar: [],
            }

            let {
                state: {
                    profilePage: {posts, newPostText}, //posts - массив объектов
                    dialogsPage: {dialogs, messages},
                },
                sidebar,
            } = store;

            for (let post of posts){
                let likesCount = post.likesCount;
                document.write(likesCount + "<br>");
            }
            for (let dialog of dialogs){
                if ((dialog.id % 2) == 0){
                    document.write(dialog.name + "<br>");
                }
            }
            let newMessages = messages.map(message => {
                return {...message, message: "Hello user!"};
            });
            for (let message of newMessages){
                document.write(JSON.stringify(message));
            }
        }
        break;
    case 6:
        {
            let tasks = [
                {id: 1, title: "HTML&CSS", isDone: true},
                {id: 2, title: "JS", isDone: true},
                {id: 3, title: "ReactJS", isDone: false},
                {id: 4, title: "RestAPI", isDone: false},
                {id: 5, title: "GraphQL", isDone: false},
            ];

            let array = [{id:6, title: "Subject", isDone: true}, ...tasks];
            document.write(JSON.stringify(array));
        }
        break;
    case 7:
        {
            function sumValues(x, y, z){
                return (x + y + z);
            }

            let array = [1, 2, 3];

            let result = sumValues(...array); //разбиение на 1, 2, 3

            document.write(result);

        }
        break;
}
