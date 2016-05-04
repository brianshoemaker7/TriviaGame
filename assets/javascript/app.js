window.onload = function(){



var rightCounter = 0;
var wrongCounter = 0;



function done() {
	
	$(".button2").click(function () {
		if ($('#RadioGroup1_2').is(':checked')) {
			alert("it's checked");
			console.log("work damn you work");
			rightCounter ++;

		}

		else wrongCounter ++;

	});

 	};


};




