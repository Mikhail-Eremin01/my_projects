function Circle(styles) {
	this.width = styles.width;//Ширина круга
	this.height = styles.height;//Высота круга
	this.styles = styles;//Объект, который содержит свойства css и их значения
}

Circle.prototype.showCircle = function(mainContent) {
	if(development){
		console.log('showCircle');
	}
	const circle = document.createElement('div');
	//Определяем случайным образом размеры и позицию для круга
	this.getSize(40, 150);
	//Определяем случайным образом позицию
	this.getPosition(mainContent);
	//Определяем случайным образом цвет фона
	for(let x in this.styles){
		circle.style[x] = this.styles[x];
	}
	return circle;
}


////////ДЗ - 1) добавить метод, который возвращает ширину объекта числом;
////////     2) добавить метод, который изменит положение объекта на заданный шаг;
////////     3) создать объект пункт-меню


Circle.prototype.getSize = function(m, n) {//m- мин. размер, n- макс. размер круга
	if(development){
		console.log('getSize');
	}
	const size = getRandomNumber(m, n);
	this.styles.width = size + 'px';
	this.styles.height = size + 'px';
}

Circle.prototype.getPosition = function(mainContent) {
	const width1 = mainContent.clientWidth;
	const height1 = mainContent.clientHeight;
	const size = parseInt(this.styles.width);
	//const {width, height} = x1;- деструктурирующее присваивание
	const x = getRandomNumber(0, width1- size);
	const y = getRandomNumber(0, height1- size);
	const color = colors[Math.floor(Math.random() * colors.length)];
	this.styles.left = x + 'px';
	this.styles.top = y + 'px';
}

//Получаем случайное число
function getRandomNumber(min, max) {
return Math.round(Math.random() * (max-min) + min);
}

//Задаём случайный цвет кругу 
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
}