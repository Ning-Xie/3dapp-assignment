//adapted from example code 'benskitchen.com'

var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__cola_can-TIMER').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__cola_can-TIMER').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__cola_can-TIMER').getAttribute('enabled')!= 'true')
        document.getElementById('model__cola_can-TIMER').setAttribute('enabled', 'true');
    else
        document.getElementById('model__cola_can-TIMER').setAttribute('enabled', 'false');
}

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
}

function camera002()
{
	document.getElementById('model__Camera002').setAttribute('bind', 'true');
}

function camera003()
{
	document.getElementById('model__Camera003').setAttribute('bind', 'true');
}

function camera001()
{
	document.getElementById('model__Camera001').setAttribute('bind', 'true');
}


function camera004()
{
	document.getElementById('model__Camera004').setAttribute('bind', 'true');
}

function camera005()
{
	document.getElementById('model__Camera005').setAttribute('bind', 'true');
}