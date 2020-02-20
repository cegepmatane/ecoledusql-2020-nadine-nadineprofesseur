function demanderRetroaction(e)
{
	e.preventDefault();
	console.log('demanderRetroaction()');
	
	var tableau = document.querySelector(".CodeMirror-code > div > pre > span");
	//alert(tableau.innerHTML);
	var sql = tableau.innerHTML.replace('<span class="cm-keyword">','').replace('<span class="cm-operator">','').replace('</span>','');
	alert(sql);
	
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'http://localhost/phpMyAdmin-dev/action/corriger-par-professeur-virtuel.php?sql=' + sql , true); // (2 - DEMANDE)
	ajax.onreadystatechange = function()
	{
		if(4 == ajax.readyState) // (4 - REPONSE)
		{
			console.log('reponse recue');
			console.log(ajax.responseText);
			var zone = document.getElementById('zone-professeur-virtuel');
			if(zone)
			{
				zone.innerHTML = ajax.responseText;
				zone.style.backgroundColor = 'yellow';
				zone.style.border = 'solid 3px #4d4941';
				alert('attente');
}
			//document.querySelector("#zone-professeur-virtuel")
			
		}
	}
	ajax.send(); // (2 - DEMANDE)
	return false;
}

//document.addEventListener("DOMContentLoaded", function() 
//{
document.getElementById('action-professeur-virtuel').onsubmit = demanderRetroaction; // (1 - EVENEMENT)
//});
