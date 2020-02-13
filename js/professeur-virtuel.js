function demanderRetroaction()
{
	alert('demanderRetroaction()');
	
}

document.addEventListener("DOMContentLoaded", function() 
{
	document.getElementById('action-professeur-virtuel').onsubmit = demanderRetroaction;
});
