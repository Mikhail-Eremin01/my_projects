//  Форма ввода для поиска желаемого символа
let areaInput = document.getElementById('sought-symbol');

//  Текст, в котором ищем символ
let areaText = document.getElementById('areaText');

//  Сохраняем в переменную изначальное состояние текста
const strInit = areaText.innerHTML;

//  Область, в которую выводится количество повторений символа в тексте
let repeatNumber = document.querySelector('.NumberOfRepeat');

areaInput.addEventListener('input', soughtSymbolYellow);

//Функция ищет запрашиваемый символ в 'sought-symbol' и все совпадения в 'areaText' выделяет background-color: yellow
function soughtSymbolYellow() {
	areaText.innerHTML = strInit;
	let regularExp = new RegExp(areaInput.value, 'g');
	
	if(areaInput.value) {
		let newString = areaText.innerHTML.replace(regularExp, '<span class = "background-color-yellow">' + areaInput.value + '</span>');
		areaText.innerHTML = newString;
		
		let arr =strInit.match(regularExp);
		
		if(arr) {
			repeatNumber.innerHTML = 'Символ ' + areaInput.value + ' встречается ' + arr.length + ' раз';
		} else{
			repeatNumber.innerHTML = areaInput.value + ' не встречается ';
		}
	}
}