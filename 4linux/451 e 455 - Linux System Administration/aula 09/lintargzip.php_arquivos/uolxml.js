

function replaceAll(string, token, newtoken) {
    while (string.indexOf(token) != -1) {
        string = string.replace(token, newtoken);
    }
    return string;
}

function afuolxmlshopping(){
    
    var af_params = uolxmlshopping.split("|");

    if(af_params[0] == "01" || af_params[0] == "02" || af_params[0] == "03" || af_params[0] == "04"){
        af_peca_swf = "http://adrequisitor-af.shopping.uol.com.br/formatos/lista.swf";
    } else if(af_params[0] == "05" || af_params[0] == "06" || af_params[0] == "07" || af_params[0] == "08" || af_params[0] == "09" || af_params[0] == "10"){
        af_peca_swf = "http://adrequisitor-af.shopping.uol.com.br/formatos/peca.swf";
    } else if(af_params[0] == "11" || af_params[0] == "12" || af_params[0] == "13" || af_params[0] == "14" || af_params[0] == "15"){
        af_peca_swf = "http://adrequisitor-af.shopping.uol.com.br/formatos/verticalPeca120.swf";
    } else if(af_params[0] == "16" || af_params[0] == "17" || af_params[0] == "18" || af_params[0] == "19" || af_params[0] == "20" || af_params[0] == "21"){
        af_peca_swf = "http://adrequisitor-af.shopping.uol.com.br/formatos/verticalPeca160.swf";
    } else if(af_params[0] == "22" || af_params[0] == "23" || af_params[0] == "24" || af_params[0] == "25" || af_params[0] == "26" || af_params[0] == "27"){
        af_peca_swf = "http://adrequisitor-af.shopping.uol.com.br/formatos/verticalLista300.swf";
    } else if(af_params[0] == "99"){
        af_peca_swf = "http://adrequisitor-af.shopping.uol.com.br/formatos/testaFlash.swf";
    }
    
    if(af_params.length > 4){
        if(af_params[4] != "" && af_params[4] != undefined){
            var AfurlshoppingxMl = escape('http://xml.shopping.uol.com.br/busca.html?search=yes&q='+ uolxmlshoppingbusca +'&num=20&idtURL='+  af_params[3] + '&idtLabel=' + af_params[4]);
        } else {
            var AfurlshoppingxMl = escape('http://xml.shopping.uol.com.br/busca.html?search=yes&q='+ uolxmlshoppingbusca +'&num=20&idtURL='+  af_params[3]);
        }
    } else {
        var AfurlshoppingxMl = escape('http://xml.shopping.uol.com.br/busca.html?search=yes&q='+ uolxmlshoppingbusca +'&num=20&idtURL='+  af_params[3]);
    }
    
    AfurlshoppingxMl = replaceAll(AfurlshoppingxMl, "/", "%2F");
    
    var xml_params = "&";
    if(typeof XMLBorderColor != "undefined") xml_params += "bordaColor="+XMLBorderColor+"&";
    if(typeof XMLPriceColor != "undefined") xml_params += "priceColor="+XMLPriceColor.replace("0x","#")+"&";
    if(typeof XMLDescriptionColor != "undefined") xml_params += "descriptionColor="+XMLDescriptionColor.replace("0x","#")+"&";
    if(typeof XMLBackColor != "undefined") xml_params += "backColor="+XMLBackColor+"&";
    if(typeof XMLLinkColor != "undefined") xml_params += "linkColor="+XMLLinkColor.replace("0x","#")+"&"; 
    if(typeof XMLFormColor != "undefined") xml_params += "formColor="+XMLFormColor.replace("0x","#"); 
    
           document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+ af_params[1] +'" height="'+af_params[2]+'" align="middle">');
            document.write('<param name="allowScriptAccess" value="sameDomain" />');
            if(af_params[5] != "" && af_params[5] != undefined){
            document.write('<param name="movie" value="'+af_peca_swf+'?clr='+ af_params[5] +'&urlXML='+ AfurlshoppingxMl + xml_params +'" />');
            } else {
            document.write('<param name="movie" value="'+af_peca_swf+'?urlXML='+ AfurlshoppingxMl + xml_params +'" />');
            }
            document.write('<param name="quality" value="high" />');
            document.write('<param name="wmode" value="transparent" />');
            document.write('<param name="menu" value="false" />');
            if(af_params[5] != "" && af_params[5] != undefined){
            document.write('<embed src="'+af_peca_swf+'?clr='+ af_params[5] +'&urlXML='+ AfurlshoppingxMl + xml_params +'" bgcolor="'+((typeof XMLViewColor != "undefined") ? XMLViewColor : "#ffffff")+'" quality="high" menu="false" wmode="transparent" width="'+ af_params[1] +'" height="'+af_params[2]+'" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
            } else {
            document.write('<embed src="'+af_peca_swf+'?urlXML='+ AfurlshoppingxMl + xml_params +'" bgcolor="'+((typeof XMLViewColor != "undefined") ? XMLViewColor : "#ffffff")+'" quality="high" menu="false" wmode="transparent" width="'+ af_params[1] +'" height="'+af_params[2]+'" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');            
            }
            document.write('</object>');    
}

if(document.getElementsByClassName){
    _i = 0;
    _iShopp = document.getElementsByClassName('af-xml-shopping-uol');
    while(_elementS = _iShopp[_i++]){
	_iShopp[_i-1].style.textIndent = "-100000px";
    }
} else {
    _i = 0;
    _ds = document.getElementsByTagName("div");
    while(_elementS = _ds[_i++]){
	if(_elementS.className == 'af-xml-shopping-uol') _ds[_i-1].style.textIndent = "-100000px";
    }
}

afuolxmlshopping();

