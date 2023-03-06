let pick=prompt(`Введите номер задания: `, 1);
switch(pick)
{
    case "1": //Задание 1
        {
            document.write("Задание 1<br>");
            let r = prompt(`Введите радиус кружочка: `, 1);
            document.write((Math.PI * Math.pow(r, 2)).toFixed(2)  + "<br>"); //area
            document.write(r*2 + "<br>");
            document.write((2*Math.PI*r).toFixed(2)  + "<br>");
        }
        break;
    case "2":
        {
            document.write("Задание 2<br>");
            let balance = +prompt('Введите сколько у вас денег:');
            let v = balance;
            function action(balance) {
                let cost = prompt('Введите цену товара или 0 для выхода.');
                let sum = balance - cost;
                if((sum == 0)||(cost == 0)) {
                    document.write("Заказ на сумму " + (v-balance)  + " принят."   + "<br>");
                    exit();
                    return 0;
                } else if(sum > 0) {
                    let balance = sum;
                    action(balance); //прод. выбора товаров
                } else {
                    let message = confirm('Сумма стоимости товаров превысила денежные средства на карте. Вы должны либо завершить покупку, либо выбрать товар с меньшей стоимостью, которая не превышает остаток ' + balance);
                    if(message) {
                        action(balance);
                    } else{
                        document.write("Заказ на сумму " + (v-balance) + " принят. Спасибо!"   + "<br>");

                        exit();
                    }
                }
            }
            function exit() {
                return alert('Вы завершили покупки.');
            }
            action(balance);
        }
        break;
    case "3":
        {
            document.write("Задание 3<br>");
            function func(a=5, b, c){
                if (c == undefined){
                    c = prompt(`Введите значение третьего параметра:`);
                }
                return (a.toString() + b.toString() + c);
            }
            document.write(func(undefined, 7)  + "<br>");
        }
        break;
    case "4":
        {
            document.write("Задание 4<br>");
            function stud(){
                let arr = [];
                let name;
                while (name = prompt("Введите имя присутствующего студента: ") != ""){
                    arr.push(+name);
                }
                return arr.length;
            }
            document.write("Количество присутствующих - " + stud()  + "<br>");
        }
        break;
    case "5":
        {
            document.write("Задание 5<br>");
            let a = +prompt("Введите сторону а");
            let b = +prompt("Введите сторону b");
            //function params(a, b) {}; //Function Declaration
            let func = function(a, b){ //Function Expression
                if (a == b){
                    return ((a + b)*2);
                }
                else {return a*b;}
            };
            //alert(func(4, 5)); вызов Expression  
            if (a == b){document.write("Периметр квадрата: ")}
            else {document.write("Площадь прямоугольника: ")}
            +function(){ //вызов на месте
                if (a == b){
                    document.write((a + b)*2);
                }
                else {document.write(a*b);}
            }();
        }
        break;
    case "6":
        {
            document.write("Задание 6<br>")
            function time(){
                let combos = (26**5) * (10*3); //** - степень
                let time = combos * 3;
                let seconds = Math.floor(time/1000);
                let min = Math.floor(seconds/60);
                let hours = Math.floor(min/60);
                let days = Math.floor(hours/24);
                let months = Math.floor(days/30);
                let years = Math.floor(months/12);

                months = months - (years*12);
                days = days - (months*30);
                hours = hours - (days*24);
                min = min - (days*24*60) - (hours*60);
                seconds = seconds - (days*24*60*60) - (hours*60*60) - (min*60);
                return document.write(years + " лет " + months + " месяцев " + days + " дней " + hours + " часов " + min + " минут " + seconds + " секунд");
            }time();
        }
        break;
    case "7":
        {
            document.write("Задание 7<br>");
            let g = "параметр";
            let h = prompt("Введите третий параметр:");
            let strelka = (p = 3, g, h) => p + g + h;
            document.write (strelka(3,g,h));

        }
        break;
}      