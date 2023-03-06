task1();
function task1(){
    let x =5 ;
    let name = "Name";
    let i = 0;
    let double = 0.57;
    let result = 1/0;
    let answer = true;
    let no = null;
    
    let side1 = 45;
    let side2 = 21;
    let quad = 5;
    let numberHeight = side1/quad;
    let numberWidth = side2/quad;
    console.log(Math.trunc(numberWidth));
    console.log(numberHeight*Math.trunc(numberWidth));

    let l = 2;
    let v = ++l;
    let c = l++;

    let res3 = (v == c);
    alert(`Равны ли числа - ` + res3);
    ("Котик" == "котик") ? console.log(`Котик и котик равны`) : console.log(`Котик и котик не равны`);
    ("Котик" == "китик") ? console.log(`Котик и китик равны`) : console.log(`Котик и китик не равны`);
    ("Кот" == "котик") ? console.log(`Кот и котик равны`) : console.log(`Кот и котик не равны`);
    ("Привет" == "Пока") ? console.log(`Привет и пока равны`) : console.log(`Привет и пока не равны`);
    (73 == "53") ? console.log(`73 и "53" равны`) : console.log(`73 и "53" не равны`);
    (false == 0) ? console.log(`false и 0 равны`) : console.log(`false и 0 не равны`);
    (54 == true) ? console.log(`54 и true равны`) : console.log(`54 и true не равны`);
    (false == 123) ? console.log(`false и 123 равны`) : console.log(`false и 123 не равны`);
    ("3" == true) ? console.log(`true и "3" равны`) : console.log(`true и "3" не равны`);
    ("5мм" == 3) ? console.log(`"5мм" и 3 равны`) : console.log(`"5мм" и 3 не равны`);
    ("-2" == 8) ? console.log(`"-2" и 8 равны`) : console.log(`"-2" и 8 не равны`);
    ("34" == 34) ? console.log(`"34" и 34 равны`) : console.log(`"34" и 34 не равны`);
    (null == undefined) ? console.log(`null и undefined равны`) : console.log(`null и undefined не равны`);

    let str = prompt(`Введите ваши данные:`);
    const strArray = str.split(" ");
    if (((strArray[0] == "Марина")&&(strArray[1] == "Фёдоровна")&&(strArray.length == 2)) || ((strArray[0] == "Марина")&&(strArray.length == 1)) || ((strArray[1] == "Марина")&&(strArray[2] == "Фёдоровна")&&(strArray[0] == "Кудлацкая") && (strArray.length == 3))){
      alert(`Данные правильные!`);
    }
    else alert(`Данные неправильные!`); 
    /*let yourName = prompt('Введите свое имя', '');
    let teacherName = prompt('Введите имя преподавателя', '');
    if((yourName.split(" ")[0]).toLowerCase() ===(teacherName.split(" ")[0]).toLowerCase()) alert(`Данные верные`)
    else alert(`Данные неверные`);*/
    //Exam
    let rus = true;
    let math = true;
    let eng = false;

    if (rus == true && math == true && eng == true) {alert(`Вас перевели на след. курс, ура!!`)};
    if (rus == false && math == false && eng == false) {alert(`Вас отчислили. :(`)};
    if (rus == false || math == false || eng == false) {alert(`У вас пересдача!!!`)};

    //Calculations

    let a = prompt(`Введите первое число!`, 1); //можно добавить + перед промпт и будет число!
    let b = prompt(`Введите второе число!`, 1);
    console.log(Add(a,b), Minus(a,b), Mult(a,b), Div(a,b), Power(a,b), Rem(a,b), Sqrt(a,b));
    function Add(a, b){
        let res;
        res = parseInt(a)+parseInt(b);
        return res;
    }
    function Minus(a, b){
        let res;
        res = a-b;
        return res;
    }
    function Mult(a, b){
        let res;
        res = a*b;
        return res;
    }
    function Div(a, b){
        let res;
        res = a/b;
        return res;
    }
    function Power(a, b){
        let n = prompt(`Введите степень!`, 2);
        let res1 = Math.pow(parseInt(a), n);
        let res2 = Math.pow(parseInt(b), n);
        console.log(`Степени: ${res1}, ${res2}`);
    }
    function Rem(a, b){
        let res;
        res = a % b;
        return res;
    }
    function Sqrt(a, b){
        let res1;
        let res2;
        res1 = Math.sqrt(parseInt(a));
        res2 = Math.sqrt(parseInt(b));
        console.log("Корни: " + res1 + ", " + res2);
    }

    //Calculations pt.2

    console.log("Вычисления:");
    console.log(true+true);
    console.log(0 + "5");
    console.log(5 +"ьь");
    console.log(8 / Infinity);
    console.log(9 * "\n9");
    console.log(null - 1);
    console.log("5"- 2);
    console.log("5px"- 3);
    console.log(true - 3);
    console.log(7 && 0);

    //Task 10

    let number;
    console.log("Чётное-нечётное: ");
    for (let i=1; i<=10; i++){
        number = i;
        if ((number % 2) == 0){
            number+=2;
            console.log(number);
        }
        else{
            let str;
            str = number + "мм";
            console.log(str);
        }
    }

    let m = prompt(`Введите день недели`, 1);
    //let week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]; - массив
    let week = {
        days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"], // или через 1:ПН, 2:ВТ и т.д.
    }
    switch(m) {
        case "1":  // if (x === 'value1')
          console.log(week.days[0]);
          break;
        case "2":  // if (x === 'value2')
          console.log(week.days[1]);
          break;
      
        case "3":
          console.log(week.days[2]);
          break;
        
        case "4":
          console.log(week.days[3]);
          break;

        case "5":
          console.log(week.days[4]);
          break;
          
        case "6":
          console.log(week.days[5]);
          break;

        case "7":
          console.log(week.days[6]);
          break;
      }
    /* let week = {
      1:ПН,
      2:ВТ,
      3:СР,
      ...
    } 
    let number = prompt(`Введите номер дня`);
    console.log(week[number]); */
}