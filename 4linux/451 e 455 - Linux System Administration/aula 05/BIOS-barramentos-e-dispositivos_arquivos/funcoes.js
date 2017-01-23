<!-- 
function submeter_busca(form) {
   opcao = form.tipoBusca.options[form.tipoBusca.options.selectedIndex].value;
   if (opcao=="artigos") {
      form.q.value = form.q.value + ' (inurl:/artigo/ OR inurl:verArtigo.php) ';
   } else if (opcao=="dicas") {
      form.q.value = form.q.value + ' (inurl:/dica/ OR inurl:verDica.php) ';
   } else if (opcao=="links") {
      form.q.value = form.q.value + ' inurl:/links/ ';
   } else if (opcao=="faq") {
      form.q.value = form.q.value + ' (inurl:/topico/ OR inurl:verPergunta.php OR inurl:verTopico.php) ';
   } else if (opcao=="scripts") {
      form.q.value = form.q.value + ' (inurl:/script/ OR inurl:verScript.php) ';
   } else if (opcao=="conf") {
      form.q.value = form.q.value + ' (inurl:/etc/ OR inurl:verConf.php) ';
   } else if (opcao=="comunidade") {
      form.q.value = form.q.value + ' (inurl:/topico/ OR inurl:/comunidade OR inurl:verTopico.php OR inurl:verComunidade.php)';
   } else if (opcao=="screenshot") {
      form.q.value = form.q.value + ' (inurl:/screenshot/ OR inurl:verScreenshot.php) ';
   } else if (opcao=="wallpaper") {
      form.q.value = form.q.value + ' (inurl:/wallpaper/ OR inurl:verWallpaper.php) ';
   }
   form.submit;

}

function showHide(elementid){
	if (document.getElementById(elementid).style.display == 'none'){
		document.getElementById(elementid).style.display = '';
	} else {
		document.getElementById(elementid).style.display = 'none';
	}
}

function admlog() {
   top = window.open('/admin/log/index.php', 'admlog', 'width=750, height=400, scrollbars=no, location=no, status=no');
}

-->
