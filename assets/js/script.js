// ========================== Динамическое изменение текста ================================

var typeWriterElement = document.getElementById('typing-text-span'); 
var textArray = ["Философ", "哲学家"];

// Генерация эффекта удаления текста
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// Генерация набора текста
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
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

// Главная функция набора текста
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

// Временная дельта по набору текста
setTimeout( function () {
	StartWriter(0);
},1000);