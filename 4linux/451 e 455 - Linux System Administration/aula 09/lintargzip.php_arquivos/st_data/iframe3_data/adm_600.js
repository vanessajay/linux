if (document.body == null) document.write('<html><body>');
if (!self['ADM_clicks_p_'+ADM_webcode]){
	self['ADM_clicks_p_'+ADM_webcode] = (typeof(ADM_clicks)!="undefined") ? ADM_clicks : undefined;	
}
function ADM_RND(){return Math.round(Math.random()*9999);};
var ADM_d=document,ADM_b=ADM_d.body;
function ADM_DE(_el){return ADM_d.getElementById(_el)};
function ADM_DW(_tx){document.writeln(_tx)};
var ADM_tSWF="Shockwave Flash",ADM_tSWFs="ShockwaveFlash.ShockwaveFlash";
var ADM_temp,ADM_AGT=navigator.userAgent.toLowerCase(),ADM_WIN=(ADM_AGT.indexOf("win")!=-1),ADM_MSIE=(ADM_AGT.indexOf("msie")!=-1),ADM_FF=(ADM_AGT.indexOf("firefox")!=-1),ADM_OPERA=(ADM_AGT.indexOf("opera")!=-1),ADM_VER=(ADM_MSIE)?parseFloat(ADM_AGT.replace(/[\w\W]*\smsie\s/,'')):0,ADM_l=-1;
var ADM_FPV=function(){
	var ver = -1;
	if (ADM_MSIE){
		try{
			var objAx = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			ver = objAx.GetVariable("$version");
		}catch(e){}
	}
	else{
		if (navigator.plugins && navigator.plugins["Shockwave Flash"]) {
			var x = navigator.plugins["Shockwave Flash"];
			ver = x.description;
			ver = ver.replace("Shockwave Flash ","").replace(" r", ".");
		}
	}
	return ver;
}
ADM_b.style.behavior='url(#default#clientCaps)';
var ADM_Flash=(ADM_FPV()!=-1),ADM_l=(ADM_b.connectionType=='lan'||!ADM_MSIE)?1:0;
if(!ADM_MSIE) var ADM_VER=(ADM_FF)?parseFloat(ADM_AGT.substr(ADM_AGT.indexOf("firefox")+8)):0;
var getBrowserVersion=function(){return parseInt(navigator.userAgent.toLowerCase().replace(/.*?(?:msie|opera|firefox|chrome|version)[ /](\d{1,2}).*/, "$1"))||-1;};ADM_VER=getBrowserVersion(); if(ADM_l>-1) {
	ADM_temp="http://nspmotion.com/ads_20050915.aspx?b="+ADM_l+"&c="+ADM_webcode+"&r="+ADM_RND();
	var ADM_random = ADM_RND();
	if(typeof(ADM_clicks)!="undefined"&&ADM_clicks!="%c"&&ADM_clicks!="$HTMLCLICKURL$") ADM_temp+="&q="+escape(ADM_clicks.replace(";n=0",";n="+ADM_random));
	if(self['ADM_clicks_p_'+ADM_webcode]) self['ADM_clicks_p_'+ADM_webcode] = self['ADM_clicks_p_'+ADM_webcode].replace(";n=0",";n="+ADM_random);
	if(typeof(ADM_imp)!="undefined"&&ADM_imp!="%i") ADM_temp+="&x="+escape(ADM_imp);
	if(typeof(ADM_imp_p)!="undefined"&&ADM_imp_p!="%i") {document['ADM_img_p'+ADM_webcode] = new Image(); document['ADM_img_p'+ADM_webcode].src = ADM_imp_p.replace(";n=0",";n="+ADM_random);};
	if(typeof(ADM_dominio)!="undefined"&&ADM_dominio!="%s") ADM_temp+="&d="+ADM_dominio;
	if(typeof(ADM_fuster_uid)!="undefined") ADM_temp+="&u="+ADM_fuster_uid;
	ADM_DW('<SCR'+'IPT SRC="'+ADM_temp+'"></SCR'+'IPT>'); 
	ADM_clicks = undefined;	ADM_imp = undefined; ADM_imp_p = undefined; ADM_dominio = undefined; 
}
var ADM_aEvn = function(elem, evnt, func)
{
	if (elem.addEventListener)
		elem.addEventListener(evnt, func, true);
	else if (elem.attachEvent)
		elem.attachEvent('on'+evnt, func);
	else
		elem['on'+evnt]=func;
}
var ADM_dEvn = function(elem, evnt, func)
{
	if (elem.removeEventListener)
		elem.removeEventListener(evnt, func, true);
	else if (elem.detachEvent)
		elem.detachEvent('on'+evnt, func);
	else if (elem['on'+evnt]==func)
		elem['on'+evnt]=null;
}
function ADM_hEl(_el,_hi) {
	var _ob=ADM_d.getElementsByTagName(_el);
	for(_i=0;_i<_ob.length;_i++){_ob[_i].style.visibility=_hi?"hidden":""}
} 
if (document.body == null) document.write('</body></html>');