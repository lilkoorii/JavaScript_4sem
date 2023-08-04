let zad = +prompt("Введите номер задания", 1);
switch(zad){
    case 1:
        {
            let set = new Set();
            let apple = {name: "Яблоко"};
            let orange = {name: "Апельсин"};
            let tomato = {name: "Томат"};

            addItem(apple);
            addItem(orange);
            addItem(tomato);
            deleteItem(orange);
            isContainItem(tomato);
            isContainItem(orange);

            function addItem(item){
                set.add(item);
                alert(`В список добавлен продукт ${item.name}, теперь там ${set.size} продуктов`); //set не добавляет неуникальные значения, поэтому не оповещаем о повторности товара
            }
            function deleteItem(item){
                set.delete(item);
                alert(`Из списка удалён продукт ${item.name}, теперь там ${set.size} продуктов`);
            }
            function isContainItem(item){
                let flag = false;
                set.forEach((value, set) => {
                    if(value.name == item.name) {
                        alert(`Продукт ${item.name} есть в наличии`);
                        flag = true;
                    }
                });
                if (flag == false) alert(`Продукта ${item.name} нет в наличии`);
            }
        }
        break;
    case 2:
        {
            let students = new Set();
            let pasha = {ID: 1111, group: 10, fio: "Онисимова Павлина Батьковна"};
            let polina = {ID: 2222, group: 10, fio: "Волк Полина Александровна"};
            let dasha = {ID: 3333, group: 9, fio: "Марсова Дарья Дарьевна"};
            students.add(pasha);
            students.add(polina);
            students.add(dasha);

            for (let c = 0; c < 100; c++){
                let task = +prompt("Введите номер действия со списком студентов:\n1. Добавить нового студента\n2. Удалить по номеру зачётки\n3. Фильтрация по группе\n4. Сортировка по номеру зачётки");
                if (task == 1) add_stud();
                if (task == 2) remove_stud();
                if (task == 3) filter();
                if (task == 4) sort();
                if (task == 0) break;
            }

            //функции
            function add_stud(){
                let name = prompt("Введите ФИО нового студента: ");
                let IDname = +prompt("Введите номер зачётки нового студента: ");
                let groupName = +prompt("Введите группу нового студента: ");
                let newStudent = {ID: IDname, group: groupName, fio: name};
                students.add(newStudent);
                alert(`Студент ${newStudent.fio} успешно добавлен!`);
            }
            function remove_stud(){
                let number = +prompt("Введите номер удаляемой зачётки: ");
                students.forEach((value, students) => {
                    let flag = false;
                    if(value.ID == number){
                        students.delete(value);
                        alert(`Студент ${value.fio} отчислен :(`);
                        flag = true;
                    }
                    if (flag=false) alert("Такого студента не нашлось!");
                });
            }
            function filter(){
                let groupNumber = +prompt("Введите номер группы для фильтрации: ");
                let filteredSet = new Set();
                students.forEach((value, students) => {
                    if (value.group == groupNumber){
                        filteredSet.add(value);
                    }
                });
                alert(`Список студентов ${groupNumber} группы: `)
                filteredSet.forEach((value, filteredSet) => {
                    alert(value.fio);
                });
            }
            function sort(){
                let array = Array.from(students).sort(function(a, b){ //коллбэк
                    if (a.ID < b.ID) return -1;
                    if (a.ID > b.ID) return 1;
                    return 0;
                });
                let sortedSet = new Set(array);
                sortedSet.forEach((item, sortedSet) => {
                    alert(item.ID + " " + item.fio);
                });
            }

        }
        break;
    case 3:
        {
            let veggies = new Map();
            let cucumber = {id: 1, name: "огурец", kol: 100, price: 3 };
            let tomato = {id: 2, name: "помидор", kol: 50, price: 12 };
            let onion = {id: 3, name: "луковичка", kol: 500, price: 5 };
            veggies.set(cucumber.id, cucumber);
            veggies.set(tomato.id, tomato);
            veggies.set(onion.id, onion);
            
            for (let c = 0; c < 100; c++){
                let task = +prompt("Введите номер действия с товарами:\n1. Добавить новый товар\n2. Удалить по ID\n3. Удалить по названию\n4. Изменить кол-во каждого товара\n5. Изменить стоимость товара");
                if (task == 1) add_item ();
                if (task == 2) delete_ID();
                if (task == 3) delete_Name();
                if (task == 4) change_kol();
                if (task == 5) change_price();
                if (task == 0) break;
            }

            //функции
            function add_item(){
                let name = prompt("Введите название нового товара: ");
                let qnty = +prompt("Введите кол-во товара: ");
                let price = +prompt("Введите цену товара: ");
                let newItem = {id: (veggies.size+1), name: name, kol: qnty, price: price};
                let sum = 0;
                veggies.set(newItem.id, newItem);
                if (veggies.has(newItem.id))alert("Товар добавлен");
                for(let [id,item] of veggies.entries()){
                      sum = sum + item.kol;
                }
                alert(`Количество позиций: ${veggies.size}`);
                alert(`Общая сумма ${sum}`)
                for (let value of veggies) alert(JSON.stringify(value));
            }            
            function delete_ID(){
                let deleteId = +prompt("Введите ID удаляемого товара");
                alert(`Товар ${veggies.get(deleteId)} удалён!`);
                veggies.delete(deleteId);
                for (let value of veggies) alert(JSON.stringify(value));
            }
            function delete_Name(){
                let deleteName = prompt("Введите название удаляемого товара");
                for( let [id,item] of veggies.entries()){
                    if (item.name === deleteName) 
                    {
                        veggies.delete(id);
                    }
                }
                for (let value of veggies) alert(JSON.stringify(value));
            }
            function change_kol(){
                let newKol = prompt("Введите новое кол-во для каждого товара");
                for( let [id,item] of veggies.entries()){
                    
                    item.kol = newKol;
                }
                for (let value of veggies) alert(JSON.stringify(value));
            }
            function change_price(){
                let newPrice = prompt("Введите новую цену для каждого товара");
                for( let [id,item] of veggies.entries()){
                    item.price = newPrice;
                }
                for (let value of veggies) alert(JSON.stringify(value));
            }

        }
        break;
    case 4:
        {
            function fourTask() {
                let cache = new WeakMap();
                let someValue = 'какой то параметр'
                let cacheKey = {someValue}
                console.log(CheckData(cacheKey))
                console.log(CheckData(cacheKey))
            
                function CheckData(arg) {
                    if (cache.has(arg)) {
                        console.log('данные из кеша')
                        return cache.get(arg);
                    } else {
                        let result = Calculation(arg);
                        cache.set(arg, result);
                        return result;
                    }
                }
                function Calculation(arg) {
                    return ("Какие-то вычисления: " + arg.someValue)
                }
            }
            fourTask();
        }
        break;
}