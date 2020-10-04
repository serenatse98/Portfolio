let proj1 = document.querySelector("#proj1-button")

function project1()
{
	console.log("project 1 showing");

	let modal = document.getElementById("project1Modal");

	modal.style.display = "block";

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

function closeProj1() 
{
	console.log('closing proj1');
	let modal = document.getElementById("project1Modal");
	
	modal.style.display = "none";
}


function project2()
{
	console.log("project 2");
}

function project3()
{
	console.log("project 3");
}

function project4()
{
	console.log("project 4");
}

// let submitButton = document.querySelector('#submit-button');

// function clickListener(event) 
// {
//     event.preventDefault();
//     let emailInput = document.querySelector('#email');
//     let messageInput = document.querySelector('#message');

//     let emailText = emailInput.value;
// 	let messageText = messageInput.value;

// 	if (emailValidate(emailText) !== true)
// 	{
// 		console.log('The email address must contain \'@\' and \'.\'');
// 		return false;
// 	}
// 	else
// 	{
// 		console.log('Thanks for your message!');
// 	}

// 	console.log("email:", emailText, "\nmessage:", messageText);
// }

// submitButton.addEventListener('click', clickListener);


// function emailValidate(email)
// {
// 	if (email.includes('@') && email.includes('.'))
// 		return true;

// 	else
// 		return false;
// }

