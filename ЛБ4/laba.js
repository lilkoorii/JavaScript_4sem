let zad = +prompt("Введите номер задания");
switch(zad){
    case 1:
        {
            let value = prompt("Введите текст или число (если дробное, то через точку)");
            doSomething(value);
            function doSomething(value){
                if (parseInt(value,10).toString()===value){
                    let newValue = parseInt(value, 10).toString(16).toUpperCase();
                    document.write("Переведённое в 16-теричную систему число: " + newValue + "<br>")
                    return;
                }
                if (parseFloat(value).toString()===value){
                    document.write("Приведено к наибольшему: " + Math.ceil(value) + "<br>");
                    document.write("Приведено к наименьшему: " + Math.floor(value) + "<br>");
                    document.write("Приведено к ближайшему целому: " + Math.round(value) + "<br>");
                    return;
                }
                if (typeof value === 'string'){
                    document.write("Ваша строка в верхнем регистре: " + value.toUpperCase() + "<br>");
                    document.write("Ваша строка в нижнем регистре: " + value.toLowerCase() + "<br>");
                }
            }
        }
        break;
    case 2:
        {
            let word = prompt("Введите правильный вариант слова инж_нер");
            wordCheck(word);
            function wordCheck(word){
                let eng = "инженер";
                let checkWord = eng.split("");
                let newWord = word.split("");
                for (let i=0; i<newWord.length; i++){
                    if (checkWord[i] != newWord[i]){
                        document.write(`У вас ошибка в букве ${newWord[i]}!`)
                        return;
                    }
                }
                document.write("Проверка слова окончена!");
            }

        }
        break;
    case 3:
        {
            let opposite = +prompt("Введите длину противолежащего катета: ");
            let adjacent = +prompt("Введите длину прилежащего катета: ");
            calculate(opposite, adjacent);
            function calculate(opp, adj){
                document.write("Площадь: " + (opp*adj/2) +"<br>");
                document.write("Периметр: " + ((opp+adj)*2) +"<br>");
                let hip = (Math.sqrt(Math.pow(opp,2) + Math.pow(adj,2)));
                document.write("Sin: " + (opp/hip) +"<br>");
                document.write("Cos: " + (adj/hip) +"<br>");
                document.write("Tan: " + (opp/adj) +"<br>");
                document.write("Cotan: " + (adj/opp) +"<br>");
            }

        }
        break;
    case 4:
        {
            join();
            function join(){
                let array = [1, [1, 2, [3, 4]], [2, 4]];
                const arrayFlattened = array.reduce((accumulator, currentValue) => {
                    return accumulator.concat(currentValue);
                  }, [])
                document.write(arrayFlattened);
            }

        }
        break;
    case 5:
        {
            sum();
            function sum(){
                let array = [2, [2, 2, [2, 2]], [2, 2]];
                let arr = array.flat(Infinity);
                let counter = 0;
                for (let key in arr){
                    if (arr[key] == 2){
                        counter+=1;
                    }
                }
                document.write("Кол-во двоек: " + counter);
                const arraySum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                document.write("Сумма элементов массива: " + arraySum);
            }
        }
        break;
    case 6:
        {
            function makeStudent(name, age, groupID) {
                return {
                  name, 
                  age,   
                  groupID
                };
              }
            function getNames(){
                let student = makeStudent("Витя", 18, 1111);
                let student2 = makeStudent("Артём", 16, 2222);
                let student3 = makeStudent("Полина", 19, 3333);
                let array = [student, student2, student3];
                let resarray = [];
                for (let key in array){
                    if (array[key].age > 17){
                        resarray.push(array[key].name);
                    } 
                }
                let resstud = makeStudent(0, 0, resarray);
                document.write("groupID: " + resstud.groupID);
            }
            getNames();

        }
        break;
    case 7:
        {
            let str = prompt("Введите строку символов", "ABC");
            calculate(str);
            function calculate(str){
                let array = str.split("");
                let newstr="";
                for(let key in array){
                    let code = array[key].charCodeAt();
                    newstr = newstr+code;
                }
                let total1 = newstr;
                let total2 = total1.replace(/7/g, "1"); //глобальный флаг
                let total = parseInt(total1, 10) - parseInt(total2, 10);
                document.write("Первое число: " + total1 + "<br>" + "Второе число: " + total2 + "<br>");
                document.write("Разность: " + total);
            }

        }
        break;
}