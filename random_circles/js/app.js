const mainContent = document.querySelector('.main-content');
const allContent = document.querySelector('.content');
const colors = ['#F27665', '#E5CA00', '#00DD8C', '#00A4C1', '#9035D6'];

const myCircle = new Circle(
	{
		width: 0,
		height: 0,
		left: 0,
		top: 0,
		backgroundColor: 'red',
		position: 'absolute',
		boxShadow: '0px 0px 20px',
		borderRadius: '50%'
	}
);


//  Функция создаёт круги случайного размера, в случайном месте в пределах mainContent
//  и случайного цвета из массива colors
let interval = setInterval(
function createRandomCircle() {
	mainContent.innerHTML = '';
	mainContent.appendChild(myCircle.showCircle(mainContent));
/*	const circle = document.createElement('div');
	const size = getRandomNumber(40, 150);
	const width = mainContent.clientWidth;
	const height = mainContent.clientHeight;
	//const {width, height} = x1;- деструктурирующее присваивание
	const x = getRandomNumber(0, width- size);
	const y = getRandomNumber(0, height- size);
	const color = colors[Math.floor(Math.random() * colors.length)];

	circle.style.backgroundColor = color;
	circle.className = 'circle';
	circle.style.width = size + 'px';
	circle.style.height = size + 'px';
	circle.style.top = y + 'px';
	circle.style.left = x + 'px';
	circle.style.boxShadow = '0px 0px 20px' + color;*/
},500)