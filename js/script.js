function calcular(x)
{
	if(x.id=='valorGasolina')
	{
		var vAlc = document.getElementById('valorAlcool').value.replace(',', '.');
		var vGas = x.value.replace(',','.');
	}
	else
	{
		var vAlc = x.value.replace(',','.');
		var vGas = document.getElementById('valorGasolina').value.replace(',','.');
	}

	var m = new Date();
	var dateString = m.toLocaleString();

	localStorage.setItem('old_valorGasolina', vGas.replace('.',','));
	localStorage.setItem('old_valorAlcool', vAlc.replace('.',','));
	localStorage.setItem('old_data', dateString);

	var result = document.getElementById('result');

	var calc = parseFloat(vAlc/vGas);

	if(calc<=0.7)
	{
		result.innerHTML="Abasteça com <b>ÁLCOOL</b>";
		result.style.backgroundColor="#43A047";
	}
	else
	{
		result.innerHTML="Abasteça com <b>GASOLINA</b>";
		result.style.backgroundColor="#EF5350";
	}
}

//Exibe o valor antigo
function logValor()
{
	var oldGas="", oldAlc="", oldData="";
	if(localStorage.getItem('old_valorGasolina') && localStorage.getItem('old_valorAlcool') && localStorage.getItem('old_data'))
	{
		oldGas = localStorage.getItem('old_valorGasolina');
		oldAlc = localStorage.getItem('old_valorAlcool');
		oldData = localStorage.getItem('old_data');
	}

	var old_result = document.getElementById('old_result');
	if(oldGas!="" && oldAlc!="" && oldData!="")
		old_result.style.display="block";
	old_result.innerHTML="Em "+oldData+" o valor da Gasolina era de R$"+oldGas+" e o Álcool era de R$"+oldAlc+".";
}
