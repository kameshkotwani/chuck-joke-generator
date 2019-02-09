document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e)
{
	e.preventDefault();
	
	// let number = document.querySelector('#number').value;
	// console.log(number);
	const xhr = new XMLHttpRequest();

	xhr.open('GET','https://api.chucknorris.io/jokes/random',true);

	xhr.onload = function()
	{
		if(this.status===200)
		{
			const response = JSON.parse(this.responseText);
			
			document.querySelector('.jokes').innerHTML = `<h4>${response.value}</h4>`;			
		}
		else
		{
			document.querySelector('.jokes').innerHTML = `<h4>Extremely Sorry, something terribly went wrong</h4>`;			
		}
			
	}

	xhr.send();


}