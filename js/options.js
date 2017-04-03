document.body.onload = function() {
	if (localStorage.userAgent1) {
		document.getElementById('user_agent1').value = localStorage.userAgent1;
	}

	if (localStorage.userAgent2) {
		document.getElementById('user_agent2').value = localStorage.userAgent2;
	}
};

document.getElementById('save').onclick = function() {
	localStorage.userAgent1 = document.getElementById('user_agent1').value;
	localStorage.userAgent2 = document.getElementById('user_agent2').value;
};