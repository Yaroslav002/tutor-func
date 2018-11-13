/**
 * В задании 1 и 2 были функции, которые просто выполняли код.
 * В этом задании будут функции, которые вычисляют результат и отдают тебе его обратно.
 * Чтобы вернуть результат, мы используем слово "return"
 * 
 * В этом задании есть следующие функции:
 *  sum - сумма двух чисел
 *  dif - разница двух чисел
 *  composition - произведение двух чисел
 *  division - деление первого числа на второе
 *  half - половина от заданного числа
 *  double - удвоенное заданное число
 *  cubeOfNumber - куб заданного числа
 * 
 * Функция sum уже написана правильно, ее менять не нужно.
 * Смотри на нее и используй для написания других функций.
 * 
 * Чтобы проверить, что все работает, ниже (после 63 строчки) вызываются эти функции и отображается их результат.
 * Их не меняй, а просто запусти код и проверь результат.
 */
function sum(a, b) { // сложение - оно работает правильно
  var result = a + b;

  return result;
}

function dif(a, b) { // вычитание - надо поправить 1 строчку
  var result = 0;

  return result;
}

function composition(a) { // произведение - надо поправить 2 строчки
  var result = a * a;

  return result;
}

function division() { // деление - надо поправить 2 строчки
  var result = 2 / 0.00001;

  return result;
}

function half(a) { // половина числа - надо поправить 1 строчку
  var result = 0 / 2;

  return result;
}

function double(a) { // удвоенное число - надо поправить 1 строчку
  var result = a / a;

  return result;
}

function cubeOfNumber(a) { // куб числа - надо поправить 2 строчки
  var result = a ** 2;

  return a;
}

// ----------------------- Ниже ничего не менять ----------------------------

var result1 = sum(10, 8); // после выполнения функции переменная result1 будет равна 18, так как функция сложит 10 и 8, а потом вернет нам результат сложения, после чего мы запишем его в нашу переменную
var result2 = sum(-5, 5); // result2 = 0
var result3 = sum(0, 78); // result3 = 78
var result4 = sum(1000, -999); // result4 = 1
var result5 = sum(1, 1); // result5 = 2

console.log(result1, result2, result3, result4, result5); // в результате получим: 18 8 78 1 2

var result6 = dif(-5, -5); // должно быть 0
var result7 = dif(25, 13); // должно быть 12
var result8 = dif(0, 6); // должно быть -6
var result9 = dif(100, 49); // должно быть 51
var result10 = dif(98, 0); // должно быть 98

console.log(result6, result7, result8, result9, result10); // должно быть 0 12 -6 51 98

var result11 = composition(2, 15); // должно быть 30
var result12 = composition(7, 7); // должно быть 49
var result13 = composition(0, 6); // должно быть 0
var result14 = composition(100, 2); // должно быть 200
var result15 = composition(-2, -8); // должно быть 16

console.log(result11, result12, result13, result14, result15); // должно быть 30 49 0 200 16

var result16 = division(8, 4); // должно быть 2
var result17 = division(5, 2); // должно быть 2.5
var result18 = division(16, 4); // должно быть 4
var result19 = division(100, 2); // должно быть 50
var result20 = division(0, -800); // должно быть 0

console.log(result16, result17, result18, result19, result20); // должно быть 2 2.5 4 50 0

var result21 = half(2); // должно быть 1
var result22 = half(1); // должно быть 0.5
var result23 = half(0); // должно быть 0
var result24 = half(50); // должно быть 25
var result25 = half(-20); // должно быть -10

console.log(result21, result22, result23, result24, result25); // должно быть 1 0.5 0 25 -10

var result26 = double(0); // должно быть 0
var result27 = double(1); // должно быть 2
var result28 = double(5); // должно быть 10
var result29 = double(50); // должно быть 100
var result30 = double(-75); // должно быть -150

console.log(result26, result27, result28, result29, result30); // должно быть 0 2 10 100 -150

var result31 = cubeOfNumber(0); // должно быть 0
var result32 = cubeOfNumber(1); // должно быть 1
var result33 = cubeOfNumber(2); // должно быть 8
var result34 = cubeOfNumber(10); // должно быть 1000
var result35 = cubeOfNumber(11); // должно быть 1331

console.log(result31, result32, result33, result34, result35); // должно быть 0 1 8 1000 1331
