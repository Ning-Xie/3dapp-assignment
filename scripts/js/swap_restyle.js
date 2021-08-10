// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#zeroDescription').hide(); 
		$('#dietDescription').hide(); 


		$('#navHome').click(function(){
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#zeroDescription').hide(); 
			$('#dietDescription').hide(); 	  
		});

		$('#navAbout').click(function(){
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#zeroDescription').hide(); 
			$('#dietDescription').hide(); 	  
		});

		$('#navModels').click(function(){
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#zeroDescription').hide(); 
			$('#dietDescription').hide(); 
		});
	}

	function selectModel() {

		$('#navcoke').click(function(){
			$('#coke').show();
			$('#zero').hide();
			$('#diet').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#zeroDescription').hide(); 
			$('#dietDescription').hide(); 
		});

		$('#navzero').click(function(){
			$('#coke').hide();
			$('#zero').show();
			$('#diet').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#zeroDescription').show();
			$('#dietDescription').hide();  	  	  
		});

		$('#navdiet').click(function(){
			$('#coke').hide();
			$('#zero').hide();
			$('#diet').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#zeroDescription').hide(); 
			$('#dietDescription').show(); 	   
		});
	}

});

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
			document.getElementById('headerColor').style.backgroundColor = '#FF0000';
			document.getElementById('footerColor').style.backgroundColor = '#FF9900';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#FF6600';
			document.getElementById('headerClor').style.backgroundColor = '#FF9999';
			document.getElementById('footerColor').style.backgroundColor = '#996699';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = 'coral';
			document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
			document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
			document.getElementById('headerColor').style.backgroundColor = 'chocolate';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}

