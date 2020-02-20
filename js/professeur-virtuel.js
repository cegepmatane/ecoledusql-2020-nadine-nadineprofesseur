function demanderRetroaction()
{
	console.log('demanderRetroaction()');
	var code = '';
	
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'http://localhost/phpMyAdmin-dev/action/corriger-par-professeur-virtuel.php?code=' + code , true); // (2 - DEMANDE)
	ajax.onreadystatechange = function()
	{
		if(4 == ajax.readyState) // (4 - REPONSE)
		{
			console.log('reponse recue');
			console.log(ajax.responseText);
			
		}
	}
	ajax.send(); // (2 - DEMANDE)
	
}

//document.addEventListener("DOMContentLoaded", function() 
//{
document.getElementById('action-professeur-virtuel').onsubmit = demanderRetroaction; // (1 - EVENEMENT)
//});
