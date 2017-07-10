$(document).ready( function() {

	var mounds = document.getElementById('snow-mounds');

	var yetiMoundNumber = Math.floor(Math.random() * mounds.childElementCount);

    var penguinNumber = 1;

    for (var moundNumber = 0; moundNumber < mounds.childElementCount; moundNumber++) {
    	var mound = mounds.children[moundNumber];

    	if (moundNumber == yetiMoundNumber) {
    		mound.classList.add('yeti');
    	} else {
    		mound.classList.add('penguin' + penguinNumber);
    		penguinNumber++;
    	}
    }

    $(".yeti").mousedown(function() {
       setTimeout(function() {
       	alert("Yaaaarrrr!");
       }, 50);
    });

});