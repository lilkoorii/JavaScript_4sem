let zad = +prompt("Введите номер задания");
switch(zad){
    case 1:
        {
            let com = prompt("Введите комментарий на форуме", "На рисунке не кот, а пёс и собак.");
            checkComment(com);
            function checkComment(comment){
                let pos = 0;
                let catpos = comment.indexOf("кот", pos);
                if (catpos != -1){
                    let output = comment.slice(0, catpos) + "***" + comment.slice((catpos + 3), comment.length);
                    comment = output;
                }
                let dogpos = comment.indexOf("собак", pos);
                if (dogpos != -1){
                    let output2 = comment.slice(0, dogpos) + "С" + comment.slice((dogpos + 1), comment.length);
                    comment = output2;
                }
                let pyospos = comment.indexOf("пёс", pos);
                if (pyospos != -1){
                    let output3 = comment.slice(0, pyospos) + " многоуважаемый " + comment.slice((pyospos), comment.length);
                    comment = output3;
                }
                document.write(comment);
            }
        }
        break;
    case 2:
        {
            let name = prompt("Введите имя", "Мария");
            checkName(name);
            function checkName(name){
                let space = name.indexOf(" ", 0);
                if (space != -1){
                    let sub1 = name.substring(0, space);
                    let sub2 = name.substring((space + 1), name.length);
                    document.write(`<p style="text-align: right">${sub1}<br>${sub2}</p>`);
                }
                else {
                    document.write("***" + name + "***");
                }
            }
            
        }
        break;
    case 3:
        {
            let day = prompt("Введите номер дня", "3");
            checkDay(day);
            function checkDay(weekday){
                let week = {
                    1: "ПН",
                    2: "ВТ",
                    3: "СР",
                    4: "ЧТ",
                    5: "ПТ",
                    6: "СБ",
                    7: "ВС"
                }
                document.write("День недели: " + week[weekday]); 
            }
        }
        break;
    case 4:
        {
            extend({a:1, b:2}, {c:3});
            extend({a:1, b:2}, {c:3}, {d:4});
            extend({a:1, b:2}, {a:3, c:3});
            function extend(target, src1, src2){
                for (var a in src1){
                    if (src1.hasOwnProperty(a) && target.hasOwnProperty(a)) {
                        src1[a] = target[a];
                     }
                }
                target = Object.assign(target, src1, src2);
                let myarray = Object.values(target);
                document.write(myarray + "<br>");
            }
            
        }
        break;
    case 5:
        {
            let quantity = +prompt("Введите количество этажей", 5);
            Tower(quantity);
            function Tower(number){
                let counter = 1;
                for (let i = 0; i < number; i++){
                    document.write("<br>" + ("*".repeat(counter)));
                    counter+=2;
                }
            }            
        }
        break;
}