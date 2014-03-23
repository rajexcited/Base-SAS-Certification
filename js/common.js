var timerElementObj, notifyTimes = [5];

// angular constructor

function countdownAction (actionTag) {
	if(!timerElementObj) {
		timerElementObj = document.getElementsByTagName('timer')[0];
	}

	try {
		timerElementObj[actionTag]();
	} catch(e) {}
}

function warningRedToggle(list,index,oldTime) {
	var toggleTime=1;
	list[index] = oldTime-toggleTime;
}


/*	home page	*/

function exitFrmApp() {
	alert(navigator.app);
	alert(navigator.device);
}

