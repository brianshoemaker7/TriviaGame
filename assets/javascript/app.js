window.onload = function(){



var rightCounter = 0;
var wrongCounter = 0;



function done() {
	
	$(".button2").click(function () {
		if ($('#RadioGroup1_2').is(':checked')) {
			alert("checked");
			rightCounter ++;
			console.log(rightCounter);
			
		}

		else wrongCounter ++;

	});

 	};

done();

};




