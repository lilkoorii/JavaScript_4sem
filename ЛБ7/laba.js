
            function NoArgs(){
                if (arguments.length <= 3){
                    for (let i=0; i<arguments.length; i++){
                        document.write(arguments[i] + "\n");
                    }
                    document.write("<br>");
                }
                if (arguments.length > 3 && arguments.length <= 5){
                    for (let i=0; i<arguments.length; i++){
                        document.write(typeof arguments[i]  + "\n");
                    }
                    document.write("<br>");
                }
                if (arguments.length > 5 && arguments.length <= 7){
                   document.write(arguments.length  + "\n");
                   document.write("<br>");
                }
                if (arguments.length > 7){
                    document.write("Слишком много аргументов!");
                 }
            }
            
            NoArgs(1, "строка");
            NoArgs(1, "строка", '5', 5.67, "ахах");
            NoArgs(1, "строка", '5', 5.67, "ахах", 9.6, 879);
            NoArgs(1, "строка", '5', 5.67, "ахах", 9.6, 879, "6");

            // window.a;
            // alert(a);

            // alert(a);
            // window.a = 2;

            // alert(a);
            // window.a = 2;
            // let a;

            // alert(a);
            // window.a = 2;
            // var a; 
            // undefined

            // alert(a);
            // let a = 2;

            // let a = 2;
            // window.a = 3;
            // alert(a);

            // var a = 2;
            // window.a = 3;
            // alert(a);

            // let s = 5;
            // function sum(){
            //     alert(s);
            // }

            // sum();

            function makeCounter(){
                let currentCount = 1;

                return function(){
                    return currentCount++;
                };
            }

            let counter = makeCounter();

            alert(counter());
            alert(counter());
            alert(counter());

            let counter2 = makeCounter();
            alert(counter2());

            alert(counter);

            document.write(window.NoArgs.name);
