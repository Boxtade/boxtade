var is_empty = true;


function send_message(){

	var session = JSON.parse(window.localStorage["ghost:session"]);
	var token = session.authenticated.access_token;
	var message = document.getElementById("comment").value;

	if(message != "")
		is_empty = false;

	var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://boxtade.com/ghost/api/v0.1/mail/message",
        "method": "POST",
        "headers": {
            "authorization": "Bearer " + token,
            "cache-control": "no-cache",
            "postman-token": "e79f2fea-e1bb-8dae-c8f2-a52c21489585",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "message": message
        }
	};

	$.ajax(settings).done(function (response) {
		if(!is_empty){
			document.getElementById("comment").value = "";
			document.getElementById("valid_message_sent").style.display = "block";
		}
	});
}

function none(){
	document.getElementById("valid_message_sent").style.display = "none";
}

