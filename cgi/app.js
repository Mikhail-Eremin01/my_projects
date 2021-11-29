function days() {
	let sel = document.getElementById('sel1').value;
	let result1 = document.getElementById('result-number');
	let result = 0;
	switch(sel) {
		case 'Su': {
			result = 'Sunday';
			break;
		}
		case 'Mo': {
			result = 'Monday';
			break;
		}
		case 'Tu': {
			result = 'Tuesday';
			break;
		}
		case 'We': {
			result = 'Wednesday';
			break;
		}
		case 'Th': {
			result = 'Thursday';
			break;
		}
		case 'Fr': {
			result = 'Friday';
			break;
		}
		case 'Sa': {
			result = 'Saturday';
			break;
		}
		default: {
		console.log('error');
		}
	}
	document.getElementById('result-number').style.opacity = '100%';
	result1.innerHTML = result;
}