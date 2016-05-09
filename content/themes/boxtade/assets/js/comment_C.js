var is_empty = true;

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();

	if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		// CORS not supported.
		xhr = null;
	}

	return xhr;
}

function send_message(){

	var session = JSON.parse(window.localStorage["ghost:session"]);
	var token = session.authenticated.access_token;
	var message = document.getElementById("comment").value;
	var url = "http://boxtade.com/ghost/api/v0.1/mail/message";
	var data = {"message": message};
	var permission = "Bearer " + token;

	if(message != "")
		is_empty = false;

	var xhr = createCORSRequest('POST', url);
	xhr.setRequestHeader("authorization", permission);
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

 	xhr.onload = function() {
    	alert('Response from CORS request to ' + url );
  	};

	xhr.onerror = function() {
		alert('Woops, there was an error making the request.');
	};

	xhr.withCredentials = true;

	xhr.send(data);

}

function none(){
	document.getElementById("valid_message_sent").style.display = "none";
}

