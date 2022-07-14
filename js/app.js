const button = document.getElementById('btn');/*достаём кнопку из html*/
const color = document.querySelector('.color');/*достаём span из html*/

const hex = [
    '0', '1', '2', '3', '4', '5', '6', '7', ' 8', '9',
    'A', 'B', 'C', 'D', 'E', 'F',] /*Помещаем в массив все элеметны из хекс кода*/

button.addEventListener('click', () => {
    let hexColor = generateHex();/*создаём перемнную с значением из фнкции generateHex*/
    document.body.style.backgroundColor = hexColor;/*меняем цвет фона на значение из переменной hexColor*/
    color.textContent = hexColor; /*вставляем значение полученное из переменной hexColor */
});/*фнкция клика*/

function generateHex(){
    let HexColor = '#';
    for (let i =0; i < 6; i++) {
        HexColor += hex[getRandomnumber()]
    }

    return HexColor
} /*генерируем хекс значение из элементов массива hex*/

function getRandomnumber(){
   return Math.floor(Math.random() * hex.length)
} /*Генерируем рандомное число*/ 