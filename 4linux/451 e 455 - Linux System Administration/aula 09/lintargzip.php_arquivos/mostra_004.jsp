var imgTransp = new Image;imgTransp.src = 'http://img.hotwords.com.br//img/transp_hotwords_2.gif';var videoMedium = new Image;videoMedium.src = 'http://img.hotwords.com.br//img/medium_retangule_300x250.gif';function hw1826182(e, obj, lnk){try{ hotwordsEliminaDesaparecerXY = true; this.tek=true;var divElement = null;var moveByPx = 140;var Yposition,Xposition,Yevent,Xevent;var xWindow = document.body.clientWidth;var yWindow = document.body.clientHeight;var oEvt = e || window.event;Yevent = oEvt.clientY;Xevent = oEvt.clientX;if ((Xevent + 20 + 300) < xWindow){ Xposition = Xevent;}else{ Xposition = Xevent - 10 - 300;}if((Yevent - 35 - 250) < 0){ Yposition = Yevent + 35; }else{
 Yposition = Yevent - 35 - 250; }if (document.all) {document.all.HOTWordsTitleBIGIframe0.style.left = Xposition;document.all.HOTWordsTitleBIGIframe0.style.top = Yposition;document.all.HOTWordsTitleBIGIframe0.style.display = '';document.all.HOTWordsTitleBIGIframe0.style.zIndex = 100000;document.all.HOTWordsTitleBIGIframe0.style.visibility = 'visible';} else {var oLayer = document.getElementById('HOTWordsTitleBIGIframe0');oLayer.style.top = Yposition + "px";oLayer.style.zIndex = 100000;oLayer.style.left = Xposition + "px";oLayer.style.display = '';oLayer.style.position = 'fixed';oLayer.style.visibility = 'visible';}}catch(e){}}function hwClick1826182(i){
return false;
}
function hwPosLoad0xx(i){var xxx= "<div id='HW_Container_VideoMedium'><div id='HW_Topo_VideoMedium'><div id='HW_Espaco_VideoMedium'>&nbsp;</div><div id='HW_Logo'><a href='http://site.hotwords.com.br/?r=5755' alt='HOTWords' target='_blank' onmouseover=\"window.status=''; return true;\"><img src='http://zone88.hotwords.com.br/img2.jsp?rser=mtGXote2oda4ncmJntC1nsmJnZa1iYmZmZq0iYm0osmJBw91C2uJi3rYDwuJiZaUma%23%23&url=http%3A%2F%2Fwww.infowester.com%2Flintargzip.php&l=' width='56' height='17' border='0' /></a></div><div id='HW_Fechar'><a alt='HOTWords' onclick=\"javascript: hideBL('HOTWordsTitleBIGIframe0');\" ><img src='"+imgTransp.src+"' alt='' width='12' height='17' border='0'/></a></div>	</div><div id='HW_Conteudo_VideoMedium'><div id='HW_Plugin_VideoMedium'><IFRAME FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=300 HEIGHT=250 SRC='http://ad.yieldmanager.com/st?ad_type=iframe&ad_size=300x250&section=593913' ></IFRAME></div></div></div>";var oLayerTxt = document.getElementById('HOTWordsTitleBIGIframe0Text');oLayerTxt.innerHTML = xxx;}function hwShow0xx(i){try{var50('HOTWordsTitleBIGIframe0', 12928, 16, '1826182', 'mouse', i, true);}catch(e){}}