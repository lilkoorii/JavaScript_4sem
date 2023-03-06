let zad = +prompt('Выберите задание для выполнения: ');
switch (zad) {
	case 1:
		{
			function basicOperation(operation, value1, value2) {
				switch (operation) {
					case '+': {
						let result = value1 + value2;
						return result;
					}
					case '-': {
						let result = value1 - value2;
						return result;
					}
					case '*': {
						let result = value1 * value2;
						return result;
					}
					case '/': {
						let result = value1 / value2;
						return result;
					}
				}
				return result;
			}

			document.write(basicOperation('+', 5, 10)); // result = 15
		}
		break;
	case 2:
		{
			let value = +prompt('Введите число: ');
			cubes(value);
			function cubes(value) {
				let sum = 0;
				for (let i = 0; i < value; i++) {
					document.write('Куб числа ' + i + ' = ' + Math.pow(i, 3) + '<br>');
					sum += Math.pow(i, 3);
				}
				document.writeln(`Сумма кубов чисел до ${value} равна ${sum}`);
			}
		}
		break;
	case 3:
		{
            arr([5, 6, 7, 8, 9, 10]);
			function arr(array) {
				let sum = 0;
				let avg = 0;
				for (let i = 0; i < array.length; i++) {
					sum += array[i];
                    avg = sum/array.length;
				}
                document.write(`Среднее арифметическое массива: ${avg} <br>`);
			}
		}
		break;
    case 4:
		{
			let str = prompt("Введите строку для переворота", "JavaScr53э? ipt");
			document.write(`Строка перевернутая: ${reverse(str)}`)
			function reverse(string){
				let spl = string.split("");
				let rev = spl.reverse();
				let join = rev.join("");
				let result = join.replace(/[^a-zA-Z]/gd, '');
				return result;
			}
		}
		break;
    case 5:
		{
			let str = prompt("Введите строку для повторения", "JavaScript");
			let num = prompt("Введите число повторений", 3);
			document.write(`Строка повторённая: ${stringRepeat(str, num)}`)
			function stringRepeat(str, num) {
				let result = str.repeat(num);
				return result;
			}
		}
		break;
	case 6:
		{
			let array1 = [1, 2, 3, 4, 5];
			let array2 = [6, 7, 1, 2, 3];
			document.write("Первый массив: " + array1 + "<br>");
			document.write("Второй массив: " + array2 + "<br>");
			document.write("Результат: " + arrExclude(array1, array2));
			function arrExclude(arr1, arr2) {
				let result = arr1.filter(x => !arr2.includes(x));
				return result;
			}
		}
		break;
	case 7:
		{
			let array1 = ["один", "два", "три", "десять"];
			let array2 = ["четыре", "два", "три", "пять"];
			document.write("Первый массив: " + array1 + "<br>");
			document.write("Второй массив: " + array2 + "<br>");
			document.write("Результат: " + arrZadacha(array1, array2));
			function arrZadacha(arr1, arr2) {
				arr1 = arr1.filter(x => !arr2.includes(x));
				return arr1;
			}
		}
		break;
}
