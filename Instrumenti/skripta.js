function wikipedia(x){
	switch (x){
		case 1:window.open("https://sh.wikipedia.org/wiki/Bas-gitara");
		break;
		case 2:window.open("https://sr.wikipedia.org/sr-ec/%D0%A4%D0%B0%D0%B3%D0%BE%D1%82");
		break;
		case 3:window.open("https://sh.wikipedia.org/wiki/Harfa");
		break;
		case 4:window.open("https://sr.wikipedia.org/sr-ec/%D0%92%D0%B8%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0");
		break;
		case 5:window.open("https://hr.wikipedia.org/wiki/Bongo_bubanj");
		break;
		case 6:window.open("https://sr.wikipedia.org/sr-ec/%D0%A3%D0%BA%D1%83%D0%BB%D0%B5%D0%BB%D0%B5");
		break;
	}
}
var audio = new Audio('Bas.m4a');
var audio1 = new Audio('fagot.m4a');
var audio2 = new Audio('harfa.m4a');
var audio3 = new Audio('violina.m4a');
var audio4 = new Audio('bongos.m4a');
var audio5 = new Audio('ukulele.m4a');
function zvuk(y){
	switch(y){
	case 1:audio.play();
	break;
	case 2:audio1.play();
	break;
	case 3:audio2.play();
	break;
	case 4:audio3.play();
	break;
	case 5:audio4.play();
	break;
	case 6:audio5.play();
	break;
	}
}
function stopaudio(z){
	switch(z){
	case 1:audio.pause();
	break;
	case 2:audio1.pause();
	break;
	case 3:audio2.pause();
	break;
	case 4:audio3.pause();
	break;
	case 5:audio4.pause();
	break;
	case 6:audio5.pause();
	break;
	}
}