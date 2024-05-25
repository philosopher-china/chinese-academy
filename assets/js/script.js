// ========================== Динамическое изменение текста ================================
var typeWriterElement = document.getElementById('typing-text-span'); 
var textArray = ["Философ", "哲学家"];


// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);

// ========================== Обработка нажатия кнопки навигационного меню ================================

let menu_icon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section')
let nav_links = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            nav_links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menu_icon.onclick = () => {
    menu_icon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
}

// ========================== Обработка редиректа на новые страницы ================================

let courses_box = document.querySelector('#courses');
let exams_box = document.querySelector('#exams');
let study_box = document.querySelector('#study');
let activities_box = document.querySelector('#activities');

courses_box.onclick = () => {
    window.location.href = "courses.html";
}

exams_box.onclick = () => {
    window.location.href = "exams.html";
}

study_box.onclick = () => {
    window.location.href = "study.html";
}

activities_box.onclick = () => {
    window.location.href = "activities.html";
}